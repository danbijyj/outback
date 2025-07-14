import styled from 'styled-components';
// 공통
export const Container = styled.main`
  width: 100%;
  padding-top: 120px;
  box-sizing: border-box;
  .inner {
    padding: 120px 0;
    .title {
      font-size: 40px;
      text-align: center;
      font-weight: 600;
    }
  }
  h2 {
    font-size: 50px;
    font-weight: 900;
    color: #fff;
  }
`;

export const PhotoDetailStyle = styled.article`
  .inner {
    padding: 60px 0 120px;
    .con-box {
      width: 500px;
      margin: auto;
      border-top: 1px solid #bbb;
      strong {
        text-align: center;
        font-size: 30px;
        margin-bottom: 20px;
        display: block;
        padding-top: 20px;
      }
      img {
        width: 500px;
      }
      h3 {
        font-size: 24px;
        margin: 15px 0;
      }
      .desc {
        margin-bottom: 40px;
      }
      .btn {
        text-align: center;
        border-top: 1px solid #bbb;
        padding-top: 40px;
        button {
          border: 1px solid #891b1e;
          background-color: #fff;
          color: #891b1e;
          width: 120px;
          height: 40px;
          margin-right: 20px;
          cursor: pointer;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
`;
