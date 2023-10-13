 
 
import React , { useEffect, useState } from "react";
import axios from "axios" ;

import "../components/style.css" ;

const DataFetach = () => {
   
     
      const [users, setUsers] = useState([]);
      
      useEffect(() => {
        
        axios.get("https://dummyjson.com/users").then((response) => {
           setUsers(response.data.users) ;
           
      }); } ,  []);
    
      return (
        <div className="App">
          { (
            <>
              < h1>User Data </h1>
              <table border={1} cellPadding={0} cellSpacing = {0}>
                <tr>
                  <th>SNo</th>
                  <th>Profile Pic</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Username</th>
                  <th>Domain</th>
                  <th>University</th>
                  
                </tr>

                
                {users.map((user  ,id ) => (

                  <tr key={id}>
                    <td>{user.id}</td>
                    <td>{ <img src={user.image} height={50} /> }</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.domain}</td>
                    <td>{user.university}</td>
                  </tr>
                ))}
              </table>
            </>
          )}
        </div>
      );
    }
    
    export default DataFetach;
