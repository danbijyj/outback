import { FooterStyle } from './style';

const Footer = () => {
    return (
        <FooterStyle>
            <div className="inner">
                <ul>
                    <li>
                        <img src="./images/logo_footer.png" alt="" />
                    </li>
                    <li>
                        <p>
                            최고의 스테이크, 최고의 서비스. 아웃백 스테이크하우스와 함께 특별한
                            순간을 만나보세요.
                        </p>
                        <p>© 2025 Outback Steakhouse Korea. All rights reserved.</p>
                    </li>
                </ul>
            </div>
        </FooterStyle>
    );
};

export default Footer;
