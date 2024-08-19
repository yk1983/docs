import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Image, Col } from 'react-bootstrap';
import { BsLink45Deg } from 'react-icons/bs';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList, OlList, LiItem } from 'components/List';
import Highlight from 'components/ExtHighlight';
/**
 * MultiDimensionalArray.jsx
 * @description
 *
 * @author  : yongkim
 * @since   : 8/19/24
 * @param   :
 * @version : 1.0.0
 */
const SectionRender = () => {
    const
        title = "다차원 배열(Multi Dimensional Arrays)",
        breadcrumbs = [ "Learn", "Java", "Multi Dimensional Arrays" ];

    return (
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
                    title="다차원 배열"
                    subtitle="배열과 차원"
                >
                    <BsCardText>
                        배열은 2차원 배열, 3차원 배열과 같이 다차원 배열을 사용할 때도 많습니다.
                        하지만 컴퓨터 메모리의 구조는 1차원이므로 2차원, 3차원 배열도 실제로는 1차원 공간에 저장합니다.
                        다시 말해 배열은 차원과는 무관하게 메모리에 연속 할당됩니다.
                        현실에서는 1차원, 2차원 배열을 주로 사용하고, 3차원 배열마저도 아주 가끔 사용합니다.
                    </BsCardText>

                    <BsContainer>
                        <Col lg={ 6 }>
                            <Image
                                src={ process.env.PUBLIC_URL + '/assets/img/java/1차원_arrays.png' }
                                fluid
                            />
                        </Col>

                        <Col lg={ 6 }>
                            <Image
                                src={ process.env.PUBLIC_URL + '/assets/img/java/2차원_arrays.png' }
                                fluid
                            />
                        </Col>
                    </BsContainer>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="다차원 배열 예제"
                    subtitle="Example"
                >
                    <Highlight
                        language="java"
                        codestring={[
                            "public class MultiDimensionalArrayEx {"
                        ,   "    public static void main(String[] args) {"
                        ,   "        int[][] arr = new int[3][3]; // ① 2차원 배열을 선언"
                        ,   ""
                        ,   "         int num = 1;"
                        ,   ""
                        ,   "         for (int i = 0; i < 3; i++) {"
                        ,   "             // 먼저 i로 층을 정하고 여기서 j로 각 층의 방을 다 돕니다."
                        ,   "             for(int j=0; j<3; j++) { // ② 바깥쪽 for문의 i의 값 한 개당 내부의 for문이 한 바퀴씩 실행"
                        ,   "                 arr[i][j] = num;     // ③ 각 배열 요소에 num 변수의 값을 대입"
                        ,   "                 num++;               // ④ num 변수의 값을 하나씩 증가"
                        ,   "             }"
                        ,   "         }"
                        ,   ""
                        ,   "         for(int i=0; i<3; i++) {"
                        ,   "             for(int j=0; j<3; j++) {"
                        ,   "                 System.out.print(arr[i][j] + \"\\t\"); // ⑤ 중첩된 for문을 통해 2차원 배열의 모든 요소의 값을 가져와서 출력"
                        ,   "             }"
                        ,   "             System.out.println();"
                        ,   "         }"
                        ,   "    }"
                        ,   "}"
                        ].join('\n')}
                    />

                    <BsCardText>
                        위 예제 코드를 그림으로 설명하면, 세 배열이 각각 길이가 4개인 배열을 가지고 있는 구조입니다.
                        더 구체적으로 그리면 오른쪽(아래)과 같게 됩니다.
                    </BsCardText>

                    <BsContainer>
                        <Col lg={ 6 }>
                            <Image
                                src={ process.env.PUBLIC_URL + '/assets/img/java/다차원_arrays_1.png' }
                                fluid
                            />
                        </Col>

                        <Col lg={ 6 }>
                            <Image
                                src={ process.env.PUBLIC_URL + '/assets/img/java/다차원_arrays_2.png' }
                                fluid
                            />
                        </Col>
                    </BsContainer>
                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;