import { BarChart } from "@mui/x-charts";

const EmployeeDetails = () => {
    return (
        <div className="flex">
            <div className="text-center w-[30%]">
                <div className="flex justify-center">
                    <img src="https://i.ibb.co/HTGzX0D/images-q-tbn-ANd9-Gc-QZRNEWw-Xc-h-TJYhb-So-OOng-Nj-Bl5-Fk-Tpkt4-O63-LFYx-SCOks-EJQVIRt-Ks-GGg-Isd-MO.png" alt="" />
                </div>
                <h1 className="text-3xl font-bold">Here will be name</h1>
                <p className="text-xl">COO of EM-Espial</p>
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
                            data: [2, 5, 3, 4],
                        },
                    ]}
                    width={900}
                    height={300}
                />
            </div>
        </div>
    );
};

export default EmployeeDetails;