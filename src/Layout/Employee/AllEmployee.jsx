import { useLoaderData } from "react-router-dom";
import AllEmployeeData from "./AllEmployeeData";

const AllEmployee = () => {

    const allEmployee = useLoaderData();
    const verifiedEmployee = allEmployee.filter(emp => emp.verified === "true");

    return (
        <div className="container mx-auto">
            <table className="w-full mb-10">
                <tr className="text-left text-xl">
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Salary</th>
                    <th>Make HR</th>
                    <th>Fire</th>
                </tr>
                {
                    verifiedEmployee.map(all => <AllEmployeeData key={all._id} all={all}></AllEmployeeData>)
                }
            </table>
        </div>
    );
};

export default AllEmployee;