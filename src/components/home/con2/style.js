import styled from 'styled-components';

export const Container = styled.div`
  background-color: #e6e6e6;
  .inner {
    position: relative;
    box-sizing: border-box;
    height: 820px;
    p {
      img {
        width: 300px;
        margin: 100px 0 30px;
      }
      &:nth-child(2) {
        font-size: 34px;
        color: #555;
        line-height: 1.2;
      }
      &:nth-child(3) {
        font-size: 40px;
        font-weight: 500;
      }
    }
    .swiper {
      width: 900px;
      height: 625px;
      position: absolute;
      right: 0;
      top: 100px;
      .swiper-slide {
        background-color: transparent;
      }
      .swiper-button-prev,
      .swiper-button-next {
        color: #b01c12;
      }
      .swiper-pagination-bullets {
        bottom: 30px;
        .swiper-pagination-bullet-active {
          background: #b01c12;
        }
      }
    }
    .taste {
      img {
        width: 500px;
      }
    }
  }
`;
