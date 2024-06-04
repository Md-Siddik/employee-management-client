import PaymentData from "../Payment/PaymentData";
import AllEmployeeData from "./AllEmployeeData";
import EmployeeData from "./EmployeeData";

const AllEmployee = () => {
    return (
        <div className="container mx-auto">
            <table className="w-full mb-10">
                <tr className="text-left text-xl">
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Make HR</th>
                    <th>Fire</th>
                </tr>
                <AllEmployeeData></AllEmployeeData>
                <AllEmployeeData></AllEmployeeData>
                <AllEmployeeData></AllEmployeeData>
                <AllEmployeeData></AllEmployeeData>
                <AllEmployeeData></AllEmployeeData>
            </table>
            {/* <Table>
                    <Thead>
                        <Tr>
                            <Th>Job Title</Th>
                            <Th>Date</Th>
                            <Th>Location</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Tablescon</Td>
                            <Td>9 April 2019</Td>
                            <Td>East Annex</Td>
                        </Tr>
                        <Tr>
                            <Td>Capstone Data</Td>
                            <Td>19 May 2019</Td>
                            <Td>205 Gorgas</Td>
                        </Tr>
                        <Tr>
                            <Td>Tuscaloosa D3</Td>
                            <Td>29 June 2019</Td>
                            <Td>Github</Td>
                        </Tr>
                    </Tbody>
                </Table> */}
        </div>
    );
};

export default AllEmployee;