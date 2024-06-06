import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const EmployeeData = () => {
    return (
        <tr>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>
                <Link to="/details">
                    <button className="btn">Details</button>
                </Link>
            </td>
            <td className=""><ImCross className="mx-7 text-red-500" /><FaCheck className="mx-7 text-green-500" /></td>
        </tr>
    );
};

export default EmployeeData;