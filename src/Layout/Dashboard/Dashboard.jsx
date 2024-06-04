import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import DashboardData from "./DashboardData";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Dashboard = () => {
    return (
        <div>
            <div className="m-auto pb-12 mt-16 border-2 rounded-xl">
                <h1 className="text-3xl my-10 text-center">Register</h1>
                <form className="px-8 flex justify-center gap-4">
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
                        <input type="numeric" required name="picture" className="input input-bordered border-gray-500" />
                    </div>
                    <div className="form-control pb-2">
                        <label className="p-2">Date</label>
                        <DatePicker name="date" className="w-full p-3 border-[1px] border-gray-500 bg-transparent rounded-lg" />
                    </div>
                    <div className="form-control">
                        <input className="btn btn-primary rounded-lg mt-10" value="Add" />
                    </div>
                </form>
            </div>

            <div className="container mx-auto">
                <table className="w-full mb-10">
                    <tr className="text-left text-xl">
                        <th>Job Title</th>
                        <th>Job Posting Date</th>
                        <th>Application Deadline</th>
                        <th>Salary Range</th>
                    </tr>
                    <DashboardData></DashboardData>
                    <DashboardData></DashboardData>
                    <DashboardData></DashboardData>
                    <DashboardData></DashboardData>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;