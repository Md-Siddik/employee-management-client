import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EmployeeData = ({ employee }) => {

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const { _id, name, email, photo, category, account, salary, designation, verified } = employee;

    const navigate = useNavigate();

    const toggle = (employee) => {
        const emp = { verified: verified === 'true' ? 'false' : 'true' };

        fetch(`https://em-espial-server.vercel.app/register/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(emp),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    navigate('/employee-list');
                }
            });
    };

    const employeeSalary = e => {
        e.preventDefault();
        const form = e.target;
        const month = form.month.value;
        const year = form.year.value;

        // const emp = 0;
        // Implement your salary update logic here
        console.log(_id);
    };

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{account}</td>
            <td className="pl-4">{salary}</td>
            <td>
                <button
                    className="btn"
                    onClick={() => document.getElementById(`pay_modal_${_id}`).showModal()}
                    disabled={verified !== 'true'}
                >
                    Pay
                </button>
                <dialog id={`pay_modal_${_id}`} className="modal">
                    <div className="modal-box">
                        <form onSubmit={employeeSalary} method="dialog" className="flex flex-col items-center">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </button>
                            <h3 className="font-bold text-2xl text-center">{salary}</h3>
                            <div>
                                <DatePicker
                                    className="border my-2 p-2 rounded-md w-full"
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    dateFormat="MMMM"
                                    showMonthYearPicker
                                    name="month"
                                    placeholderText="Select a month"></DatePicker>
                            </div>
                            <div>
                                <DatePicker
                                    className="border my-2 p-2 rounded-md w-full"
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    dateFormat="YYYY"
                                    showMonthYearPicker
                                    name="year"
                                    placeholderText="Select year"></DatePicker>
                            </div>
                            <input type="submit" value="Pay" className="btn w-24 text-xl font-bold" />
                        </form>
                    </div>
                </dialog>
            </td>
            <td>
                <Link to={`/details/${_id}`}>
                    <button className="btn my-1">Details</button>
                </Link>
            </td>
            <td>
                <div onClick={() => toggle(employee)}>
                    {verified === 'true' ? (
                        <FaCheck className="mx-7 text-green-500" />
                    ) : (
                        <ImCross className="mx-7 text-red-500" />
                    )}
                </div>
            </td>
        </tr>
    );
};

export default EmployeeData;