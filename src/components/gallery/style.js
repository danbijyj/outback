import styled from 'styled-components';
export const GalleryVisualStyle = styled.div`
  width: 100%;
  height: 400px;
  background-image: url('./images/sub2_bg.jpg');
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GalleryInputStyle = styled.form`
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 50px;
    position: relative;
    width: 500px;
    input[type='text'] {
      width: 500px;
      height: 50px;
      border: 1px solid #999;
      border-radius: 25px;
      box-sizing: border-box;
      padding: 15px 30px;
      outline: none;
      font-size: 16px;
    }
    button {
      width: 80px;
      height: 48px;
      border: none;
      border-radius: 25px;
      background-color: #f0f0f0;
      margin-left: 10px;
      cursor: pointer;
      position: absolute;
      right: 1px;
    }
  }
`;

export const GalleryListStyle = styled.div`
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
  }
`;
export const GalleryItemStyle = styled.article`
  align-items: center;
  padding: 30px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  margin-bottom: 40px;
  h3 {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 20px;
  }
  img {
    width: 400px;
  }
  p {
    font-size: 14px;
    color: #666;
  }
`;
