import Services from "../Services/Services";
import Slider from "../Slider/Slider";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;