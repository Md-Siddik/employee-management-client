import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const { createUser } = useContext(AuthContext);

    const date = new Date();
    const month = date.getMonth(); // getMonth() returns 0-11
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const currentMonth = monthNames[month];
    const currentYear = date.getFullYear();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const category = form.get('job_category');
        const email = form.get('email');
        const account = form.get('account');
        const month = currentMonth;
        const year = currentYear;
        const designation = form.get('designation');
        
        let salary = 0;
        if(designation === 'Employee'){
            salary = 20000;
        }
        else if(designation === 'HR'){
            salary = 40000;
        }

        const verified = false;
        const password = form.get('password');
        setRegisterError('');

        const employee = { name, photo, category, email, account, salary, month, year, designation, verified }

        fetch('https://em-espial-server.vercel.app/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(employee)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        if (password.length < 6) {
            Swal.fire({
                title: 'Password should be at least 6 characters of longer',
                icon: 'error'
            });
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                title: 'Your password should have at least one uppercase character',
                icon: 'error'
            });
            return;
        }
        else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
            Swal.fire({
                title: 'Your password should have at least one special character',
                icon: 'error'
            });
            return;
        }
        createUser(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then()
                    .catch(error => {
                        console.error(error);
                    })
                Swal.fire({
                    title: 'Account create successfully...',
                    icon: 'success'
                })
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }

    return (
        <section className="h-screen">
            <div>
                <form onSubmit={handleRegister}>
                    {/* <!-- Left column container with background--> */}
                    <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                        <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-[48%] xl:w-[48%]">
                            {/* <!--Sign in section--> */}
                            <div className="form-control">
                                <label className="px-2 pb-2 mt-4">Name</label>
                                <input type="text" required name="name" className="input input-bordered" />
                            </div>
                            <div className="form-control pb-5">
                                <label className="px-2 pb-2 mt-4">Photo Url</label>
                                <input type="text" required name="photo" className="input input-bordered" />
                            </div>
                            <div className="form-control pb-2">
                                <label className="px-2 pb-2">Job Category</label>
                                <select name="job_category" required className="input input-bordered border-gray-500">
                                    <option></option>
                                    <option value="Employee">Sales Assistant</option>
                                    <option value="Social Media Esecutive">Social Media executive</option>
                                    <option value="Digital Marketer">Digital Marketer</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="px-2 pb-2 mt-4">Email</label>
                                <input type="email" required name="email" className="input input-bordered" />
                            </div>
                        </div>

                        {/* <!-- Right column container --> */}
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-[48%] xl:w-[48%]">
                            {/* <!--Sign in section--> */}
                            <div className="form-control">
                                <label className="px-2 pb-2 mt-4">Bank Account No</label>
                                <input type="text" required name="account" className="input input-bordered" />
                            </div>
                            <div className="form-control pb-2">
                                <label className="px-2 pb-2">Designation</label>
                                <select name="designation" required className="input input-bordered border-gray-500">
                                    <option></option>
                                    <option value="Employee">Employee</option>
                                    <option value="HR">HR</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="px-2 pb-2 mt-4">Password</label>
                                <div className='flex items-center gap-4 relative'>
                                    <input type={showPassword ? "text" : "password"} required name="password" placeholder="password" className="input input-bordered w-full" />

                                    <span className='absolute right-6' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                                    {/* <span className='absolute right-6'><FaEyeSlash></FaEyeSlash></span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center lg:text-left mt-6 fle">
                        <div className="flex justify-center">
                            <input type="submit" className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase text-white" value="Register" />
                        </div>

                        {/* <!-- Register link --> */}
                        <div className="flex justify-center">
                            <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                Already have an account?{" "}
                                <Link to="/login">
                                    <a
                                        href="#!"
                                        className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                    >
                                        Login
                                    </a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Register;