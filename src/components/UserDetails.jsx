import React from "react";
import { DeleteAllUser } from "./DeleteAllUser";
import styled from "styled-components";
import { fackUserData } from "../api/index";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slice/UserSlice";
import DisplayUsers from "../components/DisplayUsers";

const UserDetails = () => {

  const dispatch = useDispatch();

  const addNewUser=(payload)=>{
    dispatch(addUser(payload));
  }
  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button className="btn add-btn" onClick={()=>addNewUser(fackUserData())}>Add New Users</button>
        </div>
        <ul className="container-fluid">
         <DisplayUsers/>
        </ul>
        <hr />
        <DeleteAllUser />
      </div>

      <div className="loop-wrapper">
  <div className="mountain"></div>
  <div className="hill"></div>
  <div className="tree"></div>
  <div className="tree"></div>
  <div className="tree"></div>
  <div className="rock"></div>
  <div className="truck"></div>
  <div className="wheels"></div>
</div> 
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
    color: #0d191ea6;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails;