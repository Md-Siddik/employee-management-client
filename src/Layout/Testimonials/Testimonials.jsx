
const Testimonials = () => {
    return (
        <div className="grid grid-cols-3 gap-12 py-16 bg-gray-200">
            <div className="border p-8 text-center bg-white">
                <div className="flex justify-center mb-4">
                    <img className="w-[100px] rounded-full" src="https://i.ibb.co/HTGzX0D/images-q-tbn-ANd9-Gc-QZRNEWw-Xc-h-TJYhb-So-OOng-Nj-Bl5-Fk-Tpkt4-O63-LFYx-SCOks-EJQVIRt-Ks-GGg-Isd-MO.png" alt="" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-4">Jane Doe</h1>
                </div>
                <div>
                    <p>This platform helped me land my dream job and grow professionally with its excellent job search tools and training resources!</p>
                </div>
                <div>
                    <div className="rating py-4">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                    </div>
                </div>
            </div>
            <div className="border p-8 text-center bg-white">
                <div className="flex justify-center mb-4">
                    <img className="w-[100px] rounded-full" src="https://i.ibb.co/HTGzX0D/images-q-tbn-ANd9-Gc-QZRNEWw-Xc-h-TJYhb-So-OOng-Nj-Bl5-Fk-Tpkt4-O63-LFYx-SCOks-EJQVIRt-Ks-GGg-Isd-MO.png" alt="" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-4">Michael Smith</h1>
                </div>
                <div>
                    <p>Managing my employment information has never been easier. I can quickly access pay stubs, update info, and benefits online!</p>
                </div>
                <div>
                    <div className="rating py-4">
                        <input type="radio" name="rating-2" className="mask mask-star" />
                        <input type="radio" name="rating-2" className="mask mask-star" />
                        <input type="radio" name="rating-2" className="mask mask-star" />
                        <input type="radio" name="rating-2" className="mask mask-star" checked />
                        <input type="radio" name="rating-2" className="mask mask-star" />
                    </div>
                </div>
            </div>
            <div className="border p-8 text-center bg-white">
                <div className="flex justify-center mb-4">
                    <img className="w-[100px] rounded-full" src="https://i.ibb.co/HTGzX0D/images-q-tbn-ANd9-Gc-QZRNEWw-Xc-h-TJYhb-So-OOng-Nj-Bl5-Fk-Tpkt4-O63-LFYx-SCOks-EJQVIRt-Ks-GGg-Isd-MO.png" alt="" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-4">Jane Doe</h1>
                </div>
                <div>
                    <p>This platform helped me land my dream job and grow professionally with its excellent job search tools and training resources!</p>
                </div>
                <div>
                    <div className="rating py-4">
                        <input type="radio" name="rating-3" className="mask mask-star" />
                        <input type="radio" name="rating-3" className="mask mask-star" />
                        <input type="radio" name="rating-3" className="mask mask-star" />
                        <input type="radio" name="rating-3" className="mask mask-star" />
                        <input type="radio" name="rating-3" className="mask mask-star" checked />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Testimonials;