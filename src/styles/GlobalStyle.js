import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  body {
    font-size: 16px;
    line-height: 1.6;
    font-family: "Noto Sans KR";        
  }
  a {
    text-decoration: none;
    color: #000;
  }
  li {
    list-style: none;
  }
  table {
    width: 100%;
  }
  .inner {
	width: 1400px;
	margin: auto;
	position: relative;
	box-sizing: border-box;
	
  }
  
  .swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #444;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

 
`;

export default GlobalStyle;
