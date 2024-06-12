import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const EmployeeData = ({ employee }) => {

    const { _id, name, email, photo, category, account, salary, designation, verified } = employee;

    const [verifiedEmployee, setVerifiedEmployee] = useState(false); 

    const toggle = (_id) => {

        const emp = {verified:!verified}

        fetch(`http://localhost:5000/register/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(emp)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0){
                    Navigate('/employee-list')
                }
            })
    }

    const salaryForm = () => {
        Swal.fire({
            title: "Submit your Github username",
            input: "number",
            inputAttributes: {
                autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Look up",
            showLoaderOnConfirm: true,
            preConfirm: async (salary) => {
                if (salary) {
                    try {
                        console.log(salary)
                    } catch (error) {
                        Swal.showValidationMessage(`
                      Request failed: ${error}
                    `);
                    }
                }
                else {
                    Swal.showValidationMessage(`Set a salary please`)
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then(() => {

        });
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{account}</td>
            <td onClick={salaryForm}>{salary}</td>
            <td>
                {
                    !verifiedEmployee ? <button disabled className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Pay</button> : <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Pay</button>
                }
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog" className="flex flex-col items-center">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <h3 className="font-bold text-2xl text-center">Hello!</h3>
                            <input type="text" className="border my-2 p-2 rounded-md w-full" placeholder="month" name="month" />
                            <input type="text" className="border my-2 p-2 rounded-md w-full" placeholder="year" name="year" />
                            <input type="submit" value="Pay" className="btn w-24 text-xl font-bold" />
                        </form>
                    </div>
                </dialog>
            </td>
            <td>
                <Link to="/details">
                    <button className="btn my-1">Details</button>
                </Link>
            </td>
            <td>
                <div>
                    <span className='' onClick={() => toggle(_id)}>{verified === 'true' ? <FaCheck className="mx-7 text-green-500" /> : <ImCross className="mx-7 text-red-500" />}</span>
                </div>
            </td>
        </tr>
    );
};

export default EmployeeData;