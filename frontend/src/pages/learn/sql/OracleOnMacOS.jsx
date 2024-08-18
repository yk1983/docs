import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { BiLogoDocker, BiLink } from "react-icons/bi";
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { DlList, DtItem, DdItem } from 'components/List';
import Note from 'components/Note';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter

const SectionRender = () => {
    const
        title = "Mac OS에 Oracle SQL 설치하기",
        breadcrumbs = [ "Learn", "SQL", "Installation" ];

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
                    title="Introduction"
                >
                    <BsCardText>
                        Oracle은 MacOS를 정식 지원하지 않기 때문에 Mac에서 Oracle DB를 설치하기 위해서는 별도의 절차가
                        필요합니다.
                        <br />
                        MacOS에서 Oracle DB를 설치하는 방법들 중 대표적인 <span className="text-primary">Docker</span>
                        와 <span className="text-primary">Colima</span>를 활용하여 설치합니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="도커란?"
                    subtitle="Docker"
                >
                    <BsCardText>
                        <BiLogoDocker style={ {fontSize : 45} } /> 도커는 컨테이너 기술을 기반으로 한 일종의 가상화 플랫폼입니다.
                        <br />
                        가상화란 물리적 자원인 하드웨어를 효율적으로 활용하기 위해서 하드웨어 공간 위에 가상의 머신을
                        만드는 기술이고, 컨테이너란 컨테이너가 실행되고 있는 호스트 os의 기능을 그대로 사용하면서 프로세스를
                        격리해 독립된 환경을 만드는 기술을 뜻합니다.
                        <br />
                        다시 말하자면, <span className="text-primary">도커는 독립된 환경을 만들어서 하드웨어를 효율적으로
                        활용하는 기술</span>입니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="콜리마란?"
                    subtitle="Colima"
                >
                    <BsCardText>
                        docker desktop 의 유료화로 인해 대체재로 나온 colima는 최소한의 설정으로 이용할 수 있는 컨테이너
                        런타임으로, <span className="text-primary">CLI 환경에서 Docker의 컨테이너를 실행할 수 있는 오픈소스
                        소프트웨어</span>로 볼 수 있습니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="설치 방법"
                >
                    <BsCardText>
                        MacOS 터미널에서 <span className="text-danger">brew</span>를 활용하여 <span className="text-danger">
                        colima</span>를 설치합니다. (brew 가 없다면 웹사이트에서 도움을 받을 수 있습니다.)
                    </BsCardText>

                    <Highlight
                        language="text"
                        codestring={["% brew install colima"]}
                    />

                    <BsCardText>
                        <Link to="https://www.docker.com/get-started/" target="_blank">
                            <BiLink /> Docker
                        </Link> 페이지에서 <span className="text-danger">Download for Mac — Apple Chip버전</span>을
                        다운받아 설치합니다.
                    </BsCardText>

                    <BsCardText>
                        설치 완료 후 <code>docker ps</code> 명령어를 사용할 수 있다면 가상 환경이 준비되었다라는 의미입니다.
                        <br />
                        Colima와 Docker를 모두 설치했다면, 터미널에 다음과 같이 입력하여 colima를 x86_64 환경으로 띄워줍니다.
                    </BsCardText>

                    <Highlight
                        language="text"
                        codestring={["colima start --memory 4 --arch x86_64"]}
                    />

                    <BsCardText>
                        <code>docker run</code> 명령어로 docker 의 컨테이너를 실행하고 해당환경에 오라클 서버를 띄웁니다..
                    </BsCardText>

                    <Highlight
                        language="text"
                        codestring={["docker run -e ORACLE_PASSWORD=pass -p 1521:1521 -d gvenzl/oracle-xe"]}
                    />

                    <BsCardText>
                        명령에 성공하면 <code>docker ps</code>를 실행하여 컨테이너 조회 시 행이 추가된 것을 확인합니다.
                    </BsCardText>

                    <Highlight
                        language="text"
                        codestring={["docker ps"]}
                    />

                    <Image
                        src={ process.env.PUBLIC_URL + '/assets/img/sql/스크린샷 2024-08-18 21.38.57.png' }
                        fluid
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="SQL Plus 실행"
                >
                    <BsCardText>
                        생성한 컨테이너가 실행중이라면 다음 명령으로 SQL plus를 실행시킬 수 있습니다.
                        상단 이미지에서 CONTAINER ID를 찾아 아래와 같이 실행합니다.
                    </BsCardText>

                    <Highlight
                        language="text"
                        codestring={["docker exec -it [CONTAINER ID] sqlplus"]}
                    />

                    <BsCardText>
                        유저이름과 패스워드를 입력하라고 뜨는데 여기서 <code>username</code>은 <code>system</code>으로
                        패스워드는 <code>pass</code>로 입력해 줍니다.
                    </BsCardText>

                    <BsCardText>
                        <code>SQL ></code> 으로 명령을 받으면 SQL Plus가 정상적으로 실행 되었다는 것이고, 종료하고 싶다면
                        <code>exit</code> 명령어를 이용하여 빠져나옵니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="DBeaver 설치 및 오라클 접속"
                    image={{
                        variant : 'bottom'
                    ,   src : '/assets/img/sql/스크린샷 2024-08-18 21.49.16.png'
                    }}
                >
                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;