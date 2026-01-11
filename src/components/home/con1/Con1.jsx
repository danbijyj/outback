import { Container } from '../con1/style';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Con1 = () => {
  return (
    <Container>
      <div className="inner">
        <p>EVENT</p>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="event"
        >
          <SwiperSlide>
            <img src="./images/con1-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/con1-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/con1-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/con1-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/con1-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/con1-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/con1-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/con1-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/con1-9.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/con1-10.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default Con1;
