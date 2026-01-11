import styled from 'styled-components';

export const HeaderStyle = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    background: #fff;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
`;
export const FooterStyle = styled.footer`
    background-color: #891b1e;
    .inner {
        height: 150px;
        ul {
            display: flex;
            color: #fff;
            align-items: center;
            li {
                font-size: 14px;
                img {
                    margin-right: 50px;
                }
            }
        }
    }
`;
export const NavStyle = styled.nav`
    ul {
        display: flex;
        li {
            margin-left: 50px;
            font-size: 20px;
            font-weight: 600;
            position: relative;
            a {
                position: relative;
                display: inline-block;
                color: #333;
                text-decoration: none;
                &::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: -5px;
                    width: 100%;
                    height: 2px;
                    background: #b01c12;
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.3s ease;
                }
                &:hover {
                    color: #b01c12;
                }
                &:hover::after {
                    transform: scaleX(1);
                }
            }
        }
    }
`;
export const InnerStyle = styled.div`
    height: 120px;
    width: 1400px;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
`;
