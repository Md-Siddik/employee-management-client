
const Contact = () => {
    return (
        <div className="flex flex-col items-center gap-8">
            <div className="text-center mx-auto">
                <h1 className="text-2xl">EM-Espial Support</h1>
                <p>1234 Majid Sarani Street, Suite 567</p>
                <p>Hafijnagar, Sonadanga 12345</p>
                <p>Khulna, Bangladesh</p>
            </div>
            <div>
                <div className="w-[400px] p-8 rounded-lg bg-gray-400">
                    <form className="flex flex-col gap-4">
                        <input type="email" placeholder="Email" className="py-2 px-4"/>
                        <textarea name="" className="py-2 px-4" placeholder="Message"></textarea>
                        <input type="submit" className="bg-blue-400 py-2 px-4 rounded-lg" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;