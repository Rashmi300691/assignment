import React from 'react'

const  search = (props) => {
  const labelstyle={
    color:'black',
    font: '22px  arial'
  }

  const txtstyle={
    color:'black',
    padding: '12px',
    font: '12px  arial'
  }
  const searchbutton ={
    marginleft:'80%',
    margintop: '0%',
    font: 'arial',
    padding: '8px',
    cursor: 'pointer',
    }
    return (
     <div>
     <label style={labelstyle}> Search User</label> <br/>
     <input type='text'  style={txtstyle} onChange={props.usernamesearch} name='searchUser' placeholder='Enter user name' />
     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
     <button style={searchbutton} onClick={props.searchclick} >Search</button>  
    </div>
 
  )
}

export default search;