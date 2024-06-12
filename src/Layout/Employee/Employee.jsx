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
                    {/* {allEmployee?.map((employee) => (
                        <tr key={employee._id}>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.account}</td>
                            <td className="pl-4">{employee.salary}</td>
                            <td>
                                <button
                                    className="btn"
                                    onClick={() => document.getElementById(`pay_modal_${employee._id}`).showModal()}
                                    disabled={employee.verified !== 'true'}
                                >
                                    Pay
                                </button>
                                <dialog id={`pay_modal_${employee._id}`} className="modal">
                                    <div className="modal-box">
                                        <form onSubmit={employeeSalary} method="dialog" className="flex flex-col items-center">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                                ✕
                                            </button>
                                            <h3 className="font-bold text-2xl text-center">Hello!</h3>
                                            <input
                                                type="number"
                                                className="border my-2 p-2 rounded-md w-full"
                                                placeholder="month"
                                                name="month"
                                            />
                                            <input
                                                type="text"
                                                className="border my-2 p-2 rounded-md w-full"
                                                placeholder="year"
                                                name="year"
                                            />
                                            <input type="submit" value="Pay" className="btn w-24 text-xl font-bold" />
                                        </form>
                                    </div>
                                </dialog>
                            </td>
                            <td>
                                <Link to={`/details/${employee._id}`}>
                                    <button className="btn my-1">Details</button>
                                </Link>
                            </td>
                            <td>
                                <div onClick={() => toggle(employee)}>
                                    {employee.verified === 'true' ? (
                                        <FaCheck className="mx-7 text-green-500" />
                                    ) : (
                                        <ImCross className="mx-7 text-red-500" />
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))} */}
                    {allEmployee?.map((employee) => (
                        <EmployeeData key={employee._id} employee={employee}></EmployeeData>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Employee;
