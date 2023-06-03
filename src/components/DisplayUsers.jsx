import React from 'react'
import styled from 'styled-components'
import { useSelector ,useDispatch } from 'react-redux'
import {removeUser} from '../store/slice/UserSlice'
const  DisplayUsers =()=> {

  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  })


  const deleteUser=(id)=>{

    dispatch(removeUser(id))
  }

  return (
    <Wrapper>
      {data.map((user, id) => {
        return <div className="container-fluid"  key={id}><li>
          {user}
          <i className="fa fa-trash-o del" onClick={()=>deleteUser(id)}></i>
                  </li>
                  </div>
      })}
    </Wrapper>
  )

}

const Wrapper = styled.section`
 *{ padding: 3px;
  background: papayawhip;}
  li{
    display:inherit;
    text-align:start; 
    margin : 2px;
    font-size: 1.2em;
    padding : 3px 20px;
  }
  .del{
  color:red;
  display:flex;
  justify-content:flex-end;
  margin-top:-20px;
  }
`;


export default DisplayUsers;

