import { AboutListStyle } from './style';

const AboutList = () => {
    return (
        <AboutListStyle>
            <ul>
                <li>
                    <img src="./images/about1.jpg" alt="" />
                    <div>
                        <h3>글로벌 No.1 패밀리 레스토랑</h3>
                        <p>
                            Outback Steakhouse는 전 세계 20여 개국, 약 1,000여 개 매장을 운영하는
                            글로벌 캐주얼 스테이크하우스 브랜드입니다. 맛과 서비스를 동시에 갖춘
                            스테이크, 시그니처 메뉴인 Bloomin' Onion 등으로 수많은 가족과 친구
                            단위의 고객에게 사랑받고 있습니다.
                        </p>
                    </div>
                </li>
                <li>
                    <div>
                        <h3>1980년대 ‘크로커다일 던디’ 시대 감성</h3>
                        <p>
                            아웃백의 탄생 배경에는 1986년작 ‘크로커다일 던디’의 성공이 있습니다.
                            당시 미국에서는 오지(Australian Outback)에 대한 로망이 고조되었고,
                            설립자들은 이 문화적 흐름을 인식하며 캐주얼한 분위기를 오지 테마로
                            풀어내기로 했습니다 . 실제 호주 음식을 재현하기보다는, “미국인의
                            시선에서 호주를 상상한” 오지가 바로 아웃백의 정수입니다 .
                        </p>
                    </div>
                    <img src="./images/about2.jpg" alt="" />
                </li>
                <li>
                    <img src="./images/about3.jpg" alt="" />
                    <div>
                        <h3>“No Rules, Just Right”</h3>
                        <p>
                            988년 플로리다 탬파에서 4명의 친구가 설립한 아웃백은 “No Rules, Just
                            Right”이라는 운영 철학 아래, 고품질 스테이크를 부담 없는 가격에
                            제공합니다 . 미국 내 1,300여 개, 해외 250여 개 매장에서, 맛있는 음식과
                            자유로운 분위기를 즐기는 고객들의 삶의 순간에 함께합니다 .
                        </p>
                    </div>
                </li>
            </ul>
        </AboutListStyle>
    );
};

export default AboutList;
