import React from "react";

function EmployeeDis (props) {
    return (
        <>
      
        <tr scope="row">
              <td style={styles}>
              <img src={props.image} ></img></td>
              <td >{props.name}</td>
              <td >{props.phone}</td>
              <td >{props.email}</td>
              <td >{props.dob}</td>
        </tr>
        
        </>
      );
};

export default EmployeeDis;