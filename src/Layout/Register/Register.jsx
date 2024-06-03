
const Register = () => {
    return (
        <section className="h-screen">
            <div className="h-full">
                {/* <!-- Left column container with background--> */}
                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                        <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="w-full"
                            alt="Sample image"
                        />
                    </div>

                    {/* <!-- Right column container --> */}
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                        <form>
                            {/* <!--Sign in section--> */}
                            <div className="form-control pb-6">
                                <input type="text" required name="name" placeholder="name" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="photo" placeholder="photo url" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="email" required name="email" placeholder="email" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control">
                                <div className='flex items-center gap-4 relative'>
                                    <input type={showPassword ? "text" : "password"} required name="password" placeholder="password" className="input input-bordered rounded-full w-full" />
                                    <span className='absolute right-6' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary rounded-full">Register</button>
                            </div>

                            {/* <!-- Separator between social media sign in and email/password sign in --> */}
                            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                                    Or
                                </p>
                            </div>

                            <div>
                                <div className="form-control pb-6">
                                    <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="password" required name="password" placeholder="password" className="input input-bordered" />
                                </div>
                            </div>

                            {/* <!-- Login button --> */}
                            <div className="text-center lg:text-left mt-6 fle">
                                <div className="flex justify-center">
                                    <button
                                        type="button"
                                        className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase text-white hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    >
                                        Login
                                    </button>
                                </div>

                                {/* <!-- Register link --> */}
                                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                    Don`t have an account?{" "}
                                    <a
                                        href="#!"
                                        className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                    >
                                        Register
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;