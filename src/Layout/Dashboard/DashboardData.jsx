
const DashboardData = ({tasks}) => {

    const {_id, task, hours_worked, date} = tasks;

    return (
        <tr>
            <td>{task}</td>
            <td>{hours_worked}</td>
            <td>{date}</td>
            <td className="flex justify-center">
                <button className="btn my-2">View Details</button>
            </td>
        </tr>
    );
};

export default DashboardData;