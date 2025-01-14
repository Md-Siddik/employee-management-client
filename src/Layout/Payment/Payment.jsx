import PaymentData from "./PaymentData";
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const Payment = () => {
    return (
        <div>
            <div className="container mx-auto">
                <table className="w-full mb-10">
                    <tr className="text-left text-xl">
                        <th>Job Title</th>
                        <th>Job Posting Date</th>
                        <th>Application Deadline</th>
                        <th>Salary Range</th>
                    </tr>
                    <PaymentData></PaymentData>
                    <PaymentData></PaymentData>
                    <PaymentData></PaymentData>
                    <PaymentData></PaymentData>
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
        </div>
    );
};

export default Payment;