import { useNavigate } from "react-router-dom";

const AllEmployeeData = ({ all }) => {
    const { _id, name, designation, salary } = all;
    const navigate = useNavigate();

    const handleFire = () => {
        const des = { designation: 'User' }

        fetch(`http://localhost:5000/registers/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(des),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    navigate('/all-employee-list');
                    console.log(data);
                }
            });
    };

    const handleHR = () => {
        const des = { designation: 'HR' }

        fetch(`http://localhost:5000/registers/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(des),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    navigate('/all-employee-list');
                    console.log(data);
                }
            });
    };

    return (
        <tr>
            <td>{name}</td>
            <td>{designation}</td>
            <td className="pl-6">{salary}</td>
            <td>
                {
                    designation === 'Employee' || designation === 'User' ? <button onClick={handleHR} className="btn text-black my-2">Make HR</button> : <button disabled={designation === 'HR'} className="btn bg-red-300">Make HR</button>
                }
            </td>
            <td className="flex items-center">
                {
                    designation === 'Employee' || designation === 'HR' ? <button onClick={handleFire} className="btn btn-error text-white">Fire</button> : <button disabled className="text-white bg-red-300 py-2 px-4 rounded-lg">Fired</button>
                }
            </td>
        </tr>
    );
};

export default AllEmployeeData;