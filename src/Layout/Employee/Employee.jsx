import { Link, useNavigate, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useEffect, useState } from "react";
import EmployeeData from "./EmployeeData";

const Employee = () => {
    const allEmployee = useLoaderData();
    const [employeeObject, setEmployeeObject] = useState({});

    const [_id, name, photo, category, email, account, salary, designation, verified] = allEmployee;

    const navigate = useNavigate();

    // // useEffect(() => {
    // //     const empObj = allEmployee.reduce((acc, employee) => {
    // //         acc[employee._id] = employee;
    // //         return acc;
    // //     }, {});
    // //     setEmployeeObject(empObj);
    // // }, [allEmployee]);

    // const toggle = (employee) => {
    //     const emp = { verified: employee.verified === 'true' ? 'false' : 'true' };

    //     fetch(`http://localhost:5000/register/${employee._id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body: JSON.stringify(emp),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data.modifiedCount > 0) {
    //                 navigate('/employee-list'); // Programmatic navigation
    //             }
    //         });
    // };
    // // const employeeSalary = e => {
    // //     e.preventDefault();
    // //     const form = e.target;
    // //     const month = form.month.value;
    // //     const year = form.year.value;

    // //     // const emp = 0;
    // //     // Implement your salary update logic here
    // //     // console.log(employeeObject);
    // // };
    // const employeeSalary = () => {
    //     const month = month.value;
    //     const year = year.value;

    //     console.log(month);
    // };

    return (
        <div className="container mx-auto">
            <table className="w-full mb-10">
                <thead>
                    <tr className="text-left text-xl">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Bank Account</th>
                        <th>Salary</th>
                        <th>Pay</th>
                        <th>Details</th>
                        <th>Verified</th>
                    </tr>
                </thead>
                <tbody>
                    {allEmployee?.map((employee) => (
                        <EmployeeData key={employee._id} employee={employee}></EmployeeData>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Employee;
