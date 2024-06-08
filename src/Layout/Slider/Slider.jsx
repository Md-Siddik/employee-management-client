import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    return (
        <div>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                onSwiper={() => { }}
                onSlideChange={() => { }}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <div className='h-[500px] slide1 bg_properties flex justify-center items-center'>
                        <div className='text-center w-[1000px]'>
                            <h1 className='text-6xl text-black font-bold pb-6'>Text About Slide</h1>
                            <p className='text-2xl text-black text-white bg-black bg-opacity-30 p-8 rounded-xl'>Explore the endless possibilities of expression through vibrant strokes and intricate lines. Let your imagination run wild as you bring your ideas to life on canvas.</p>
                            <button className='btn text-xl mt-8'>Explore More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[500px] slide2 bg_properties flex justify-center items-center'>
                        <div className='text-center w-[1000px]'>
                            <h1 className='text-6xl text-black font-bold pb-6'>Text About Slide</h1>
                            <p className='text-2xl text-black text-white bg-black bg-opacity-30 p-8 rounded-xl'>Experience the magic of turning inspiration into tangible creations. From bold hues to delicate shades, discover the power of color to evoke emotion and captivate the senses.</p>
                            <button className='btn text-xl mt-8'>Explore More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[500px] slide3 bg_properties flex justify-center items-center'>
                        <div className='text-center w-[1000px]'>
                            <h1 className='text-6xl text-black font-bold pb-6'>Text About Slide</h1>
                            <p className='text-2xl text-black text-white bg-black bg-opacity-30 p-8 rounded-xl'>Embark on a journey of skill and mastery as you refine your techniques in painting and drawing. Learn from the masters and unlock your full artistic potential with every stroke.</p>
                            <button className='btn text-xl mt-8'>Explore More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[500px] slide4 bg_properties flex justify-center items-center'>
                        <div className='text-center w-[1000px]'>
                            <h1 className='text-6xl text-black font-bold pb-6'>Text About Slide</h1>
                            <p className='text-2xl text-black text-white bg-black bg-opacity-30 p-8 rounded-xl'>Witness the evolution of your artistry from humble sketches to breathtaking masterpieces. Each stroke is a step closer to leaving your mark on the canvas of history.</p>
                            <button className='btn text-xl mt-8'>Explore More</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;