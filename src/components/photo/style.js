import styled from 'styled-components';

export const PhotoVisualStyle = styled.div`
  width: 100%;
  height: 400px;
  background-image: url('./images/sub3_bg.jpg');
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PhotoListsStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    width: 430px;
    border: 1px solid #ddd;
    padding: 30px;
    box-sizing: border-box;
    text-align: center;
    margin-top: 50px;
    h3 {
      font-size: 25px;
      margin-bottom: 15px;
    }
    p {
      overflow: hidden;
      display: block;
      height: 368px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        transition: 0.3s;
      }
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0);
        transition: background 0.3s;
        z-index: 1;
      }
      &:hover::after {
        background: rgba(0, 0, 0, 0.3);
      }
      &:hover {
        img {
          transform: scale(1.2);
        }
      }
    }
  }
`;
