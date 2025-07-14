import styled from 'styled-components';

export const Container = styled.div`
  padding: 100px 0;
  p {
    text-align: center;
    font-size: 40px;
    font-weight: 600;
  }
  .event {
  }
  .swiper {
    width: 1400px;
    height: auto;
    overflow: hidden;
    padding: 20px 0 70px;
    .swiper-wrapper {
      width: 400px;
      height: auto;
    }
    .swiper-pagination {
      .swiper-pagination-bullet-active {
        background: #b01c12;
      }
    }
  }
`;
