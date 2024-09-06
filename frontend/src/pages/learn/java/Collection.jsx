import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList, LiItem } from 'components/List';
import Note from 'components/Note';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter
/**
 * Collection.jsx
 * @description
 *
 * @author  : yongkim
 * @since   : 2024. 9. 6.
 * @param   :
 * @version : 1.0.0
 */
const SectionRender = () => {
    const
        title = "Collection Framework",
        breadcrumbs = [ "Learn", "Java", "Collection Framework" ];

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
                    title="자바 컬렉션 프레임워크"
                    subtitle="Java Collectoin Framework(JCF)"
                >
                    <BsCardText>
                        <span className="text-primary">자바의 컬렉션 프레임워크(Collection Framework)</span>
                        는 자료 구조(Data Structure) 종류의 형태들을 자바 클래스로 구현한 모음입니다.
                        <br />
                        예를들어 C언어에서 LinkedList 라는 자료구조를 사용하려면 직접 구현해야 되지만 자바 개발자는
                        그냥 인스턴스화만 하면 사용이 가능합니다.
                        즉, 데이터를 저장하는 자료 구조와 데이터를 처리하는 알고리즘을 구조화하여 클래스로 구현해 놓은
                        것이 Java Collectoin Framework(JCF) 입니다.
                        <br />
                        물론 자바도 직접 자료 구조 클래스를 만들어 사용할 수는 있겠지만, 알고리즘의 속도와 안정성에 있어
                        자바 언어 개발진들이 수십년에 걸쳐 JVM(자바 가상 머신)에 최적화시켜 개량해왔기 때문에, 만일 자바
                        프로그래밍에서 자료 구조를 사용할 일이 있다면 컬렉션 프레임워크를 가져와 사용하면 됩니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="자바 컬렉션 프레임워크 장점"
                >
                    <UlList
                        header="컬렉션 프레임워크의 장점"
                        items={[
                            "인터페이스와 다형성을 이용한 객체지향적 설계를 통해 표준화되어 있기 때문에, 편리한 사용법과 높은 재사용성"
                        ,   "데이터 구조 및 알고리즘의 고성능 구현을 제공하여 프로그램의 성능과 품질을 향상"
                        ,   "API 간의 상호 운용성을 제공 (상위 인터페이스 타입으로 업캐스팅하여 사용)"
                        ,   "구현되어있는 API를 사용하면 되기에, 새로운 API를 익히고 설계하는 시간을 절약"
                        ,   "자바에서 지원하지 않는 새로운 자료구조가 필요하다면, 컬렉션들을 재활용하여 조합하여 새로운 알고리즘을 재정의"
                        ]}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="자바 컬렉션 프레임워크 종류"
                    image={{
                        variant : "bottom"
                    ,   src : "/assets/img/java/java_collection_framework.jpeg"
                    }}
                >
                    <BsCardText>
                        컬렉션 프레임워크는 크게 <span className="text-primary">Collection 인터페이스</span>와
                        <span className="text-primary">Map 인터페이스</span>로 나누어집니다.
                        List 와 Set 인터페이스를 구현한 컬렉션 클래스들은 공통부분이 많기 때문에, 공통된 부분을 모은
                        Collection 인터페이스로 상속 되어있습니다.
                        Map 인터페이스 컬렉션들은 두개의 데이터를 묶어 한쌍으로 다루기 때문에 Collection 인터페이스와
                        따로 분리되어 있습니다.
                    </BsCardText>

                    <Note
                        title="팁"
                    >
                        <p>
                            대부분의 컬렉션 클래스들은 List, Set , Map 중의 하나를 구현하고 있으며, 구현한 인터페이스의
                            이름이 클래스 이름에 포함되는 특징이 있습니다. (ArrayList, HashSet, HashMap ... 등)
                        </p>
                        <p>
                            그러나 Vector, Stack, Hashtable, Properties 와 같은 클래스들은 컬렉션 프레임워크가 만들어지기
                            이전부터 존재하던 것이기 때문에 컬렉션 프레임워크의 명명법을 따르지 않습니다.
                            또한 Vector 나 Hashtable 과 같은 기존의 컬렉션 클래스들은 호환을 위해 남겨진 것이므로 가급적
                            사용하지 않는 것이 좋습니다.
                        </p>
                    </Note>
                </BsCard>
            </BsContainer>
        </>
    );
}
 
export default SectionRender;