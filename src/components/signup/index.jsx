import React, {Component} from 'react';
//import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import {Link} from "react-router-dom";



class App extends Component{
    constructor(){
        super()
        this.state = {
            fullName:'',
            username:'',
            email:'',
            password:''
        }

        this.changeEmail=this.changeEmail.bind(this);
        this.changeFullName=this.changeFullName.bind(this);
        this.changePassword=this.changePassword.bind(this);
        this.changeUsername=this.changeUsername.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        
    }

    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }

    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }

    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }

    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    
    onSubmit(event){
        //stops the page from refreshing
        event.preventDefault();
//gathers all the values that the user has entered when they click submit
        const registered={
            fullName: this.state.fullName,
            username: this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        console.log(registered);
        //passing data to mongodb 
       // axios.post('http://localhost:4000/app/signup', registered)
    
       
      
       let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        }
      };
    axios.post('http://localhost:8080/app/signup', registered, axiosConfig)
        .then(response=>console.log(response.data))
        
       
    }
    

    render(){
        return(
            <div>
                <div className='container'>
                    
                    <div className = 'formDiv'>
                        <form onSubmit={this.onSubmit}>
                        
                            <input type = 'text'
                            placeholder='Full Name'
                            onChange = {this.changeFullName}
                            value={this.state.fullName}
                            className = 'form-control form-group'/>
                        

                            <input type = 'text'
                            placeholder='Username'
                            onChange = {this.changeUsername}
                            value={this.state.username}
                            className = 'form-control form-group'/>

                            <input type = 'text'
                            placeholder='Email'
                            onChange = {this.changeEmail}
                            value={this.state.email}
                            className = 'form-control form-group'/>

                            <input type = 'text'
                            placeholder='Password'
                            onChange = {this.changePassword}
                            value={this.state.password}
                            className = 'form-control form-group'/>

                            <input type="submit" className = 'btn btn-danger btn-block' value ='Submit'/>
                        </form>

                        <div>Have an account already? <Link to="/Login">Login here</Link></div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
//https://www.youtube.com/watch?v=SQqSMDIzhaE