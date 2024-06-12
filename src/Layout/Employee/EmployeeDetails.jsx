import { BarChart } from "@mui/x-charts";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";

const EmployeeDetails = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const employeeDetails = useLoaderData();
    const {_id, name, photo, category, email, account, salary, designation, verified} = employeeDetails;

    return (
        <div className="flex items-end">
            <div className="text-center w-[30%]">
                <div className="flex justify-center">
                    <img src={photo} alt="Image" />
                </div>
                <h1 className="text-3xl font-bold">{name}</h1>
                <p className="text-xl">{designation}</p>
            </div>
            <div className="w-[70%]">
                <BarChart className="bg-red-500"
                    xAxis={[
                        {
                            id: 'barCategories',
                            data: ['bar A', 'bar B', 'bar C', 'bar D'],
                            scaleType: 'band',
                        },
                    ]}
                    series={[
                        {
                            data: [110, 100, 105, 150],
                        },
                    ]}
                    width={900}
                    height={600}
                />
            </div>
        </div>
    );
};

export default EmployeeDetails;