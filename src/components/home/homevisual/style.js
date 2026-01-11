import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 640px;
  padding-top: 120px;
  .outbackVisual {
    width: 100%;
    height: 100%;
    .swiper-button-prev,
    .swiper-button-next {
      color: #b01c12;
    }
    .swiper-button-prev {
      left: 130px;
    }
    .swiper-button-next {
      right: 130px;
    }
  }
`;
