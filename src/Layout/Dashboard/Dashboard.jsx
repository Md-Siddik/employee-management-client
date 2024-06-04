import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import DashboardData from "./DashboardData";

const Dashboard = () => {
    return (
        <div>
            <div className="m-auto pb-12 mt-16 border-2 rounded-xl">
                <h1 className="text-3xl my-10 text-center">Register</h1>
                <form className="px-8 flex justify-center gap-4">
                    <div className="form-control pb-6">
                        {/* <input type="text" required name="name" placeholder="name" className="input input-bordered rounded-full" /> */}
                        <select name="task">
                            <option value="Sales">Sales</option>
                        </select>
                    </div>
                    <div className="form-control pb-6">
                        <input type="text" required name="photo" placeholder="photo url" className="input input-bordered rounded-full" />
                    </div>
                    <div className="form-control pb-6">
                        <input type="email" required name="email" placeholder="email" className="input input-bordered rounded-full" />
                    </div>
                    <div className="form-control">
                        <div className='flex items-center gap-4 relative'>
                            <input type="password" required name="password" placeholder="password" className="input input-bordered rounded-full w-full" />
                        </div>
                    </div>
                    <div className="form-control">
                        <button className="btn btn-primary rounded-full">Register</button>
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