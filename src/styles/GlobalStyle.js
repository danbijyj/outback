import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
<<<<<<< HEAD
=======
  /* other styles */
>>>>>>> 32960a3fa44a68b8984a91952bb7985840ad511f
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
<<<<<<< HEAD
=======
  
>>>>>>> 32960a3fa44a68b8984a91952bb7985840ad511f
  .swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #444;
<<<<<<< HEAD
=======

  /* Center slide text vertically */
>>>>>>> 32960a3fa44a68b8984a91952bb7985840ad511f
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
<<<<<<< HEAD
=======

 
>>>>>>> 32960a3fa44a68b8984a91952bb7985840ad511f
`;

export default GlobalStyle;
