import React, { Component } from "react";
import SearchBar from "../SearchBar/searchBar.js";
import employee from "../../employee.json";
import EmployeeDis from "../EmployeeDis/employee.js";

class Main extends Component {
    state = {
        employeeList: employee,
        filteredList: employee,
        search: "",
        sortDirection: "ASC"
    };

    // This will sort the employees by name
    sortDirection = () => {
        console.log("sort");

        let sortedList = this.state.filteredList.sort
            ((a, b) => {
                var empA = a.name.toLowerCase();
                var empB = b.name.toLowerCase();

                if (empA < empB) {
                    return -1;
                }
                if (empA > empB) {
                    return 1;
                }
                return 0;

            });
        console.log(sortedList);

        let newSortDirection = "";
        if (this.state.sortDirection === "ASC") {
            newSortDirection = "DESC";
        } else {
            newSortDirection = "ASC";
            sortedList.reverse();
        }
        console.log(sortedList);
        console.log(newSortDirection);

        this.setState({
            filteredList: sortedList,
            sortDirection: newSortDirection
        });
    };
    //  will search by employee name
    handleInputChange = event => {
        event.preventDefault();

        const { value, name } = event.target
        const filteredList = this.state.employeeList.filter(emp => emp.name.indexOf(value) > -1)
        console.log(filteredList)
        this.setState(
            {
                [name]: value,
                filteredList: filteredList
            }
        );
    };
    // puts this on app.js, connects with searchBar.js 
    render() {
        return (
            <>
                <SearchBar name="search" handleInputChange={this.handleInputChange} value={this.state.search} sortDirection={this.sortDirection} />

                <table className="table">
                    <thead className="theader">
                        <tr>
                            <th scope="col">Name</th> 
                            
                            <th scope="col">Phone Number</th>
                         
                            <th scope="col">E-mail Address</th>
                            
                            
                            <th scope="col">DOB</th>
                            <br/>
                        </tr>
                        
                    </thead>

                    <tbody>
                        {this.state.filteredList.map(employee => <EmployeeDis
                            key={employee.id}
                            id={employee.id}
                            name={employee.name}
                            phone={employee.phone}
                            email={employee.email}
                            DOB={employee.DOB} 
                            />)}
                    </tbody>
                </table>
            </>
        );
    };
};

export default Main;