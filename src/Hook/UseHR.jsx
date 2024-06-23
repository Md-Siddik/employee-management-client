import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";

const UseHR = () => {
    const { user, loading } = useContext(AuthContext);
    const { data: isHR, isPending: isHRLoading } = useQuery({
        queryKey: [user?.email, "isHR"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`https://em-espial-server.vercel.app/register/hr/${user.email}`);
            console.log(res.data);
            return res?.data?.hr
        }
    })



    return [isHR, isHRLoading]
};

export default UseHR;