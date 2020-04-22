import React , { useEffect , useRef , useContext } from 'react';
import styleClasses from './Cockpit.css';
import AuthContext from '../../Context/auth-context';

const Cockpit = (props) => {

    const authContext = useContext(AuthContext);
    const toggleBtnRef =  useRef(null);
    console.log(authContext.authenticated);
    useEffect(() => {
        console.log('[Cockpit.js] useEFFECT ');
        //http request

        setTimeout(() => {
            alert('Saved the data to cloud');
        },1000)
    },[props.persons]);

    useEffect(() => {
        console.log('[Cockpit.js] useEFFECT only at start');
        //http request

        // setTimeout(() => {
        //     alert('Initial Load');
        // },2000)
        toggleBtnRef.current.click();
    },[]); // Important to send an empty array [] to render first load
    //useEffect can be used as many times as you need for as many functions
    let btnClass = '';
    if(props.isVisible){
        btnClass = styleClasses.Red;
    }

    let classes = [];
    if(props.personLength <= 2){
      classes.push(styleClasses.red); //Classes = ['red']
    }
    if(props.personsLength <= 1){
      classes.push(styleClasses.bold) ; //classes = ['red' , 'bold']
    }

    return (
        <div className ={styleClasses.Cockpit}>
        <h1>{props.title}</h1>
        <h2>Guten Tag, Ich bin React App</h2>
        <p className = {classes.join(' ')}> Wow this is so simple</p>
        <button 
            ref = {toggleBtnRef}
           className = {btnClass}
           onClick ={props.toggle}> Switch Name</button>
        
        <button onClick = {authContext.login}> 
            Login 
        </button>
      </div>

    );
};
export default React.memo(Cockpit);