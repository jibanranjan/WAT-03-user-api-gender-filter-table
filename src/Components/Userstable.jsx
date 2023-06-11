import{ useEffect } from 'react';
import {useState} from 'react';
import './Userstable.css'

function Userstable() {

   const[user, setUser] = useState([]);
   const[state, setState] = useState([]);

   useEffect(()=>{

    fetch("https://randomuser.me/api/?results=20")
    .then((res)=>res.json())
    .then((data)=>{setUser(data.results)
                   setState(data.results)
    
    })


   }, [])

{
    console.log(user)
}


  return (
    <div>

        <div>
              <label><input type='radio' name='gender' defaultChecked onChange={()=>{setUser(state)}}   /> All</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
              <label><input type='radio' name='gender'  onChange={()=>{setUser(state.filter((data)=> data.gender === "male"))}}  /> Male</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              <label><input type='radio' name='gender'  onChange={()=>{setUser(state.filter((data)=> data.gender === "female"))}} /> female</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        </div>

        <div>
               <table cellPadding={10}>
                        <tr>
                              
                                     <th>IMAGE</th>
                                     <th>NAME</th>
                                     <th>EMAIL</th>
                                     <th>GENDER</th>
                                  
                              
                        </tr>



                        <tbody>
                            {
                                user.map((e)=>{
                                    return(<tr><td><img src={e.picture.medium} /></td>
                                    <td> {e.name.first}  {e.name.last}</td>
                                    <td>{e.email}</td>
                                    <td>{e.gender}</td>


                                    </tr>

                                    )
                                })
                            }
                        </tbody>

               </table>
        </div>


    </div>
  )
}

export default Userstable