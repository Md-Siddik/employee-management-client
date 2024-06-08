import { FaBriefcase } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { FaTowerBroadcast } from "react-icons/fa6";

const Services = () => {
    return (
        <div className="grid grid-cols-3 gap-12 py-16">
            <div className="bg-[#006fe6] text-white p-8 text-center">
                <div className="flex justify-center mb-4">
                    <FaBriefcase className="text-4xl"/>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-4">Search Job</h1>
                </div>
                <div>
                    <p>Browse available job postings by various employers. Tools and templates to create and improve resumes and cover letters.</p>
                </div>
            </div>
            <div className="bg-[#006fe6] text-white p-8 text-center">
                <div className="flex justify-center mb-4">
                    <GrResources className="text-4xl" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-4">Career Resources</h1>
                </div>
                <div>
                    <p>Articles, videos, and one-on-one counseling sessions to help with career planning and job search strategies.</p>
                </div>
            </div>
            <div className="bg-[#006fe6] text-white p-8 text-center">
                <div className="flex justify-center mb-4">
                    <FaTowerBroadcast className="text-4xl"/>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-4">Community Engagement</h1>
                </div>
                <div>
                    <p>Connect with colleagues and professionals within the same industry. Participate in discussions and get advice from peers.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;