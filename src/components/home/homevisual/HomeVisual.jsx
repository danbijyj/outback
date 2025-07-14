import { Container } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const HomeVisual = () => {
    return (
        <Container>
            <Swiper
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="outbackVisual"
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <img src="./images/homevisual1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/homevisual2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/homevisual3.jpg" />
                </SwiperSlide>
            </Swiper>
        </Container>
    );
};

export default HomeVisual;
