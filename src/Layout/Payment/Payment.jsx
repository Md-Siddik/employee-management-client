import PaymentData from "./PaymentData";

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
            </div>
        </div>
    );
};

export default Payment;