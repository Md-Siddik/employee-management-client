import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";

const UseAdmin = () => {
    const {user, loading} = useContext(AuthContext);
    const {data : isAdmin, isPending : isAdminLoading} = useQuery({
        queryKey : [user?.email, "isAdmin"],
        enabled : !loading,
        queryFn : async() => {
            const res = await axios.get(`https://em-espial-server.vercel.app/register/admin/${user.email}`);
            console.log(res.data);

            return res?.data?.admin
        }
    }) 



    return [isAdmin, isAdminLoading]
};

export default UseAdmin;