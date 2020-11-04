import React from "react";

function EmployeeDis(props) {
    return (
        <>

            <tr scope="row">
                <td >{props.name}</td>
                <td >{props.phone}</td>
                <td >{props.email}</td>
                <td >{props.DOB}</td>
            </tr>

        </>
    );
};

export default EmployeeDis;