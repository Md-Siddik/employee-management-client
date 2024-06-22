import { useState } from "react";
import DashboardData from "./DashboardData";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
// import { Table } from "react-super-responsive-table";

const Dashboard = () => {

    const [startDate, setStartDate] = useState(null);

    const allTask = useLoaderData();

    const handleAddTask = e => {
        e.preventDefault();

        const form = e.target;

        const task = form.task.value;
        const hours_worked = form.hours_worked.value;
        const date = form.date.value;

        const newTask = { task, hours_worked, date }

        fetch('https://em-espial-server.vercel.app/work-sheet', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Task Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Great'
                })
            })

    }

    return (
        <div>
            <div className="m-auto pb-12 mt-16 border-2 rounded-xl">
                <h1 className="text-3xl my-10 text-center">Admin</h1>
                <form onSubmit={handleAddTask} className="px-8 flex justify-center gap-4">
                    <div className="form-control pb-6">
                        {/* <input type="text" required name="name" placeholder="name" className="input input-bordered rounded-full" /> */}
                        <label className="p-2">Tasks</label>
                        <select name="task" className="input input-bordered border-gray-500">
                            <option></option>
                            <option value="Sales">Sales</option>
                            <option value="Support">Support</option>
                            <option value="Content">Content</option>
                            <option value="Paper_work">Paper-work</option>
                        </select>
                    </div>
                    <div className="form-control pb-2">
                        <label className="p-2">Hours Worked</label>
                        <input type="number" required name="hours_worked" className="input input-bordered border-gray-500" />
                    </div>
                    <div className="form-control pb-2">
                        <label className="p-2">Date</label>
                        <DatePicker
                            selected={startDate} onChange={(date) => setStartDate(date)} name="date"
                            className="w-full p-3 border-[1px] border-gray-500 bg-transparent rounded-lg" />
                    </div>
                    <div className="form-control">
                        <input className="btn btn-primary rounded-lg mt-10" type="submit" value="Add" />
                    </div>
                </form>

                <Link to="/">
                    <a className="flex justify-center items-center gap-2 mt-8">Back to home<FaArrowRightLong /></a>
                </Link>
            </div>

            <div className="container mx-auto">
                <table className="w-[1000px] mb-10 mx-auto">
                    <tr className="text-left text-xl">
                        <th className="w-[300px]">Tasks</th>
                        <th>Hours Worked</th>
                        <th>Date</th>
                    </tr>
                    {
                        allTask.map(task => <DashboardData key={task._id} tasks={task}></DashboardData>)
                    }
                </table>
            </div>
        </div>
    );
};

export default Dashboard;