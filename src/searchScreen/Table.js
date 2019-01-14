import React from 'react'
import { Table,Th ,Tr} from 'reactable'


const  tableuser = (props) => {
const labelstyle={
    color:'black',
    font: '22px  arial'
  }
const tabdesign=
  {
    border: '1px solid grey',
    width: '100%',
    textAlign: 'center' 
   
  }

  const theadc={
    font: '18px  arial'
  }

  return (
     
   
     <div >
     <label style={labelstyle} > Search Result For :{props.searchuser} </label> 
     <br></br><br></br>
     <label style={labelstyle}> users : </label>
     <Table  itemsPerPage={5}  pageButtonLimit={3}  style={tabdesign} data={props.dataArray}>
        <Tr>
          <Th column="Username" style={theadc}  ></Th>
          <Th column="Name" style={theadc}></Th>
          <Th column="Status" style={theadc}></Th>
        </Tr>
        </Table> 
     </div>

 
  )
}

export default tableuser;