import EmployeeData from "./EmployeeData";

const Employee = () => {
    
    return (
        <div className="container mx-auto">
            <table className="w-full mb-10">
                <tr className="text-left text-xl">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Bank Account</th>
                    <th>Salary</th>
                    <th>Pay</th>
                    <th>Details</th>
                    <th>Verified</th>
                </tr>
                <EmployeeData></EmployeeData>
                <EmployeeData></EmployeeData>
                <EmployeeData></EmployeeData>
                <EmployeeData></EmployeeData>
                <EmployeeData></EmployeeData>
            </table>
        </div>
    );
};

export default Employee;