import styled from 'styled-components';
export const AboutVisualStyle = styled.div`
  width: 100%;
  height: 400px;
  background-image: url('./images/sub1_bg.jpg');
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AboutListStyle = styled.div`
  li {
    display: flex;
    margin-bottom: 100px;
    &:last-child {
      margin-bottom: 0;
    }
    img {
      width: 700px;
    }
    div {
      padding: 0 80px;
      h3 {
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 40px;
      }
      p {
        word-break: keep-all;
      }
    }
  }
`;
