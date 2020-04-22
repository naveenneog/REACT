import React,{ Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios  from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler';

const INGREDIENT_PRICES = {
    salad : 5,
    bacon : 8,
    cheese : 5,
    meat : 10
}
class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {...};
    // }


    state = {
        ingredients :null ,
        totalPrice : 100,
        purchasable : false,
        purchasing : false,
        loading : false,
        error : false
    }

    componentDidMount() {
        axios.get('https://react-my-burger-eeba4.firebaseio.com/ingredients.json')
        .then(response => {
            this.setState({ingredients : response.data})
        }).catch( error =>{
            this.setState({error : true});
        })
    }
    updatePurchaseState = (ingredients) => {
        // const ingredients = {
        //     ...this.state.ingredients
        // };
        
        const sum = Object.keys(ingredients)
            .map(igkey => {
                return ingredients[igkey]
            })
            .reduce((sum ,el) => {
                return (sum + el);
            } ,0);

            console.log('Sum :',sum);
        this.setState({purchasable : sum > 0}); 
    }

    
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            ingredients:updatedIngredients,
            totalPrice :newPrice
        })
        this.updatePurchaseState(updatedIngredients);
       
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({
            ingredients:updatedIngredients,
            totalPrice :newPrice
        })
        this.updatePurchaseState(updatedIngredients);
    }
    purchaseHandler = () => {
        this.setState({purchasing :true});
    }

    purchaseCancelHandler = () => {
       this.setState({purchasing : false});
    }

    purchaseContinueHandler = () =>{
        // alert('Order placed !!!');
        this.setState({loading : true});

        const order = {
            ingredients: this.state.ingredients,
            price : this.state.totalPrice,
            customer : {
                name : 'Naveen' ,
                address : {
                    street : 'Vader Street',
                    pinCode : '500001',
                    country : 'India'
                },
                email: 'test@test.com',
                phone: '9000000009'

            },
            deliveryMethod : 'Cash on Delivery'
        }
        //Adding .json for firebase to function correctly
        axios.post('/orders.json', order)
        .then(response => this.setState({loading : false , purchasing : false}))
        .catch(error =>  this.setState({loading : false , purchasing : false}));
    }
    render() {

        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null ;

      


        let burger = this.state.error ? <p>Unable to fetch the ingredients at the moment please try later</p> : <Spinner /> ;

        if (this.state.ingredients) {
            burger =
                (
                    <Aux>
                        <Burger ingredients={this.state.ingredients} />
                        <BuildControls
                            closeFunc={this.purchaseCancelHandler}
                            price={this.state.totalPrice}
                            ordered={this.purchaseHandler}
                            purchasable={this.state.purchasable}
                            ingredientAdded={this.addIngredientHandler}
                            ingredientRemoved={this.removeIngredientHandler}
                            disabled={disabledInfo} />
                    </Aux>
                );
            orderSummary = (
                <OrderSummary
                    closeFunc={this.purchaseCancelHandler}
                    continueFunc={this.purchaseContinueHandler}
                    price={this.state.totalPrice}
                    ingredients={this.state.ingredients} />
            );
        }
        if(this.state.loading) {
            orderSummary = <Spinner />
        }
        console.log(disabledInfo);
        return (
            <Aux>
                <Modal show ={this.state.purchasing}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }

}

export default withErrorHandler(BurgerBuilder , axios);