import { Container } from '../con2/style';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

const Con2 = () => {
  return (
    <Container>
      <div className="inner">
        <p>
          <img src="./images/taste.jpg" alt="" />
        </p>
        <p>우리만의 픽으로</p>
        <p>이 순간을 커스텀</p>
        <Swiper
          effect={'flip'}
          grabCursor={true}
          pagination={true}
          navigation={true}
          loop={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="taste"
        >
          <SwiperSlide>
            <img src="./images/taste1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/taste2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/taste3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/taste4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/taste5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/taste6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/taste7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/taste8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/taste9.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default Con2;
