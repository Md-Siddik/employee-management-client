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

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const category = form.get('job_category');
        const email = form.get('email');
        const account = form.get('account');
        const salary = form.get('salary');
        const designation = form.get('designation');
        const password = form.get('password');
        setRegisterError('');


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
                                    <option value="Employee">Employee</option>
                                    <option value="HR">HR</option>
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
                            <div className="form-control pb-5">
                                <label className="px-2 pb-2 mt-4">Salary</label>
                                <input type="text" required name="salary" className="input input-bordered" />
                            </div>
                            <div className="form-control pb-2">
                                <label className="px-2 pb-2">Designation</label>
                                <select name="designation" required className="input input-bordered border-gray-500">
                                    <option></option>
                                    <option value="Employee">Sales Assistant</option>
                                    <option value="HR">Social Media executive</option>
                                    <option value="HR">Digital Marketer</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="px-2 pb-2 mt-4">Password</label>
                                <div className='flex items-center gap-4 relative'>
                                    <input className="input input-bordered w-full" type="password" name="password" />
                                    {/* <input type={showPassword ? "text" : "password"} required name="password" placeholder="password" className="input input-bordered rounded-full w-full" />
                                    <span className='absolute right-6' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span> */}
                                    <span className='absolute right-6'><FaEyeSlash></FaEyeSlash></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center lg:text-left mt-6 fle">
                        <div className="flex justify-center">
                            <input type="submit" className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase text-white" value="Register" />
                            {/* <button className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase text-white hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Register</button> */}
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