import React, { Component } from 'react';
// import axios from '../../../axios';
import axios from '../../../AxiosHMC';
import URL from './URL';

class Posts extends Component {

    state = {
        posts: []
    }
  
    xmlBodyStr = `<LogonRequest
    schemaVersion="V1_0"
    xmlns="http://www.ibm.com/xmlns/systems/power/firmware/web/mc/2012_10/"
    xmlns:mc="http://www.ibm.com/xmlns/systems/power/firmware/web/mc/2012_10/">
      <UserID>hscroot</UserID>
      <Password>abc123</Password>
 </LogonRequest>`;

config = {
     headers: {'Content-Type': 'application/vnd.ibm.powervm.web+xml' , 'type' : 'LogonRequest'}
};

    componentDidMount() {
        axios.get(URL.ManagedSystemQuickJSON)
            .then(response => {
                
                console.log(response.data);
                
                // console.log( response );
            })
            .catch(error => {
                console.log(error);
                // this.setState({ error: true });
            });
        // axios.post('/web/Logon', this.xmlBodyStr,this.config)
        //     .then(response => {
                
        //         console.log(response);
                
        //         // console.log( response );
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         // this.setState({ error: true });
        //     });
    }
    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
       
        
        return (
            <div>
            <section className="Posts">
                {posts}
            </section>
            </div>
        );
    }
}

export default Posts;