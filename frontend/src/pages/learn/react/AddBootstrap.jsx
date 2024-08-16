import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BsLink45Deg } from 'react-icons/bs';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList, OlList, LiItem } from 'components/List';

const SectionRender = () => {
    const
        title = "부트스트랩 모듈",
        breadcrumbs = [ "Learn", "React", "Adding Bootstrap" ];

    return(
        <>
            <Helmet>
                <title>{ title }</title>
            </Helmet>

            <Breadcrumbs
                title={ title }
                breadcrumbs={ breadcrumbs }
            />

            <BsContainer className="section" >
                <BsCard
                    col={ 12 }
                    title="부트스트랩"
                    subtitle="Bootstrap"
                >
                    <BsCardText>
                        트위터에서 시작된 오픈 소스 프론트엔드 프레임워크입니다.
                        각종 레이아웃, 버튼, 입력창 등의 디자인과 기능을 CSS와 JavaScript로 만들어 놓은 것으로
                        글자, 인용문, 목록, 표, 입력폼, 버튼, 이미지, 아이콘 등의 자잘한 것뿐만 아니라, 드롭다운 메뉴,
                        내비게이션 바, 버튼, 탭, 리스트, 페이지 이동 바, 알림 메시지, 썸네일, 진행 바 등의 웹 페이지에서
                        많이 쓰이는 요소를 거의 전부 내장하고 있습니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="설치"
                    subtitle="Installation"
                >
                    <OlList
                        title="설치 순서"
                    >
                        <LiItem>
                            <Link to="https://react-bootstrap.github.io" target="_blank">
                                <BsLink45Deg /> 리액트 부트스트랩
                            </Link> 사이트에 접속합니다.
                        </LiItem>
                        <LiItem>
                            Get started 버튼 클릭합니다.
                        </LiItem>
                        <LiItem>
                            Installation에 npm으로 설치하라는게 나오는데 터미널에서 해당 프로젝트 경로에 아래와 같이
                            명령을 실행합니다.
                            <br />
                            <code>$ npm install react-boostrap bootstrap</code>
                        </LiItem>
                        <LiItem>
                            리액트에서 부트스트랩을 사용하기 위해서는 index.js나 App.js에서 아래 bootstrap 라이브러리를
                            import해줘야 적용됩니다.
                            <br />
                            <code>import 'bootstrap/dist/css/bootstrap.min.css';</code>
                        </LiItem>
                    </OlList>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="임포트 컴포넌트"
                    subtitle="Importing Components"
                >
                    <BsCardText>
                        라이브러리 전체가 아닌 <code>react-bootstrap/Button</code>과 같은 각각의 컴포넌트 구성 요소를
                        가져올 수 있습니다.
                        이렇게 사용하면 컴포넌트 요소만 불러와 클라이언트에 보내는 코드와 양을 크게 줄일 수 있습니다.
                        <br />
                        아래와 같이 import하는 방법은 두가지가 있습니다.
                    </BsCardText>

                    <UlList
                        title="임포트 방법"
                    >
                        <LiItem>
                            <code>import Button from 'react-bootstrap/Button';</code>
                        </LiItem>
                        <LiItem>
                            <code>import &#123; Button &#125; from 'react-bootstrap';</code>
                        </LiItem>
                    </UlList>
                </BsCard>
            </BsContainer>
        </>
    );
}

export default SectionRender;