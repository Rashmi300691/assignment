import React from 'react'

const  login = (props) => {

  const txtstyle={
    padding:'0px',
    color:'black',
    font: '20px  bold sans-serif'
  }
 
  const buttonstyle={
    backgroundColor: 'black',
    color:'white',
    font: 'sans-serif',
    border: '1px solid',
    padding: '8px',
    cursor: 'pointer',
    textalign:'left'
  }

  const inputtxtstyle={
    padding:'8px',
    
  }

  return (
     <div >
     <h2 style={txtstyle}>Login</h2>
     <input type='text' style={inputtxtstyle}  onChange={props.usernamechange} placeholder='username'/><br/><br/>
     <input type='text' style={inputtxtstyle} onChange={props.passwordchange} placeholder='credential' /><br/><br/>
     <button style={buttonstyle} onClick={props.click} >Login</button>  
     <hr></hr>
  </div>
 
  )


}

export default login;