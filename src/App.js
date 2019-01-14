import React, { Component } from 'react';

import Login from './login/Login.js';
import Search from './searchScreen/SearchScreen.js';
import Tableuser from './searchScreen/Table.js';
import axios from 'axios';
import './App.css';


class App extends Component {

  state={
    username:'',
    password:'',
    searchtext:'',
    showLoginScreen:true,
    showSearchScreen:false,
    showerrScreen:false,
    showSearchText:false,
    jsessionid:'',
    userlist:''
  }
  
  postDataHandler =(event) =>{

     /* part to test amdocs requirement */
   const url="http://3.122.7.162:5000//v60/admin/session/"
   const logincredential=
   {
     "username": this.state.username,
     "credential": this.state.password
   };
/* for internal testing
    const url="https://reqres.in/api/login"
    const logincredential={
      "email": "peter@klaven",
      "password": "cityslicka"
          };
   
*/
    axios.post(url,logincredential).then(response => {
      console.log(response.status)
    if(!response.status===200)
    {
    this.setState({showSearchScreen:true});
    this.setState({showLoginScreen:false});
    this.setState({showerrScreen:false});
    }
    else 
    {
    this.setState({showerrScreen:true});
     }
    }).catch((err) => {
      this.setState({showerrScreen:true});
      console.log(':(');
      });
  }

  setUserName =(event)  =>{
       this.setState({username:event.target.value});
  }

  setPasswordChange =(event)  =>{
        this.setState({password:event.target.value});
  }

  setsearchText=(event) =>{
        this.setState({searchtext:event.target.value});
  }

  searchDataHandler=(event) => {
    
   const url="http://3.122.7.162:5000/v60/admin/search/user?keyword=".concat(this.state.searchtext).concat("&alias=false")
   /* for internal testing
 //  const url="http://reqres.in/api/users?page=2" */
 
    axios.get(url ,{ 
      headers: 
              {
        withCredentials:true,
        cookie:"JSESSIONID=".concat(this.state.jsessionid)
              }
       }).then(response => 
      {

        console.log(response)
        if(response.status===200)
        {
          
          console.log(response)
          let userobj=[];
          for( let i=0 ; i < response.data.data.length ;i++)
         { 
           let  oc =  Object();
        /*   oc.Username=response.data.data[i].id;
           oc.Name=response.data.data[i].first_name;
         oc.Status=response.data.data[i].last_name; */
           /*amdocs assignment */
           oc.username=response.data.data[i].username;
           oc.name=response.data.data[i].name;
           oc.status=response.data.data[i].status;
           
           userobj.push(oc);
         }
          this.setState({userlist:userobj})
          this.setState({showSearchText:true});
        }

    }).catch((err) => {
      console.log(':(');
      });
    
}
  render() {
     let screen=null;
     let tabScreen=null;
     
    if(this.state.showLoginScreen){
          screen =( <div className='Applogin'>
          <Login 
           click={(event)=>this.postDataHandler(event)} 
          usernamechange={(event)=>this.setUserName(event)} 
          passwordchange={(event)=>this.setPasswordChange(event)}/>
                  </div>);
    }
    if(this.state.showerrScreen){
      screen=(<div className='Applogin'>
    <Login  click={(event)=>this.postDataHandler(event)} 
    usernamechange={(event)=>this.setUserName(event)} 
    passwordchange={(event)=>this.setPasswordChange(event)}/>
                  Please contact SystemAdministrator 1001 to create new login or reset your Password"
                </div> );
   }
   if(this.state.showSearchScreen){
       screen =( <div  className='AppSearch'>
        <Search searchclick={(event)=>this.searchDataHandler(event)}
         usernamesearch={(event)=>this.setsearchText(event)}/> 
                </div>);
        if(this.state.showSearchText){
          tabScreen=( <div className='Apptable'>
            <Tableuser searchuser={this.state.searchtext} 
            dataArray={this.state.userlist}/>
                     </div>);
         }
   }

 return(
      <div>
      <div>
           {screen}
          
     </div>
     <div>
            {tabScreen}
     </div>
     </div>
    )
  }
   
}
export default App;
