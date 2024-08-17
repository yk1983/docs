import { Helmet } from 'react-helmet-async';
import { Table } from 'react-bootstrap';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList, DlList, DtItem, DdItem } from 'components/List';
import Note from 'components/Note';

const SectionRender = () => {
    const
        title = "실수형(Floating-Point types)",
        breadcrumbs = [ "Learn", "Java", "Floating-Point Types" ];

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
                    title="실수형"
                    subtitle="Floating-Point Types"
                >
                    <BsCardText>
                        자바에서 실수란 소수부나 지수부가 있는 수를 가리키며, 정수보다 훨씬 더 넓은 표현 범위를 가집니다.
                        자바의 기본 타입 중 실수를 나타내는 타입은 <code>float</code>, <code>double</code>의 두 가지 타입이 있습니다.
                    </BsCardText>

                    <UlList
                        items={[
                            "float", "double"
                        ]}
                    />

                    <BsCardText>
                        과거에는 실수를 표현할 때 float형을 많이 사용했지만, 하드웨어의 발달로 인한 메모리 공간의 증가로
                        현재에는 double형을 가장 많이 사용합니다.
                        <br />
                        따라서 실수형 타입 중 기본이 되는 타입은 <code>double</code>형입니다.
                    </BsCardText>

                    <Note
                        title="데이터 타입의 결정"
                        content="실수형 데이터의 타입을 결정할 때에는 표현 범위 이외에도 반드시 유효 자릿수를 고려해야 합니다."
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="실수형 타입에 따른 메모리의 크기 및 데이터의 표현 범위"
                >
                    <Table striped bordered hover variant="dark" size="sm">
                        <thead>
                            <tr>
                                <th>타입</th>
                                <th>할당 크기</th>
                                <th>지수 길이</th>
                                <th>가수 길이</th>
                                <th>표현 범위</th>
                                <th>리터럴 타입 접미사</th>
                                <th>유효 자릿수</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>float</td>
                                <td>4byte</td>
                                <td>8bit</td>
                                <td>32bit</td>
                                <td>(3.4 X 10<sup>-38</sup>) ~ (3.4 X 10<sup>38</sup>)</td>
                                <td>F 또는 f</td>
                                <td>소수 부분 6자리까지 오차없이 표현</td>
                            </tr>
                            <tr>
                                <td>double</td>
                                <td>8byte</td>
                                <td>11bit</td>
                                <td>52bit</td>
                                <td>(1.7 X 10<sup>-308</sup>) ~ (1.7 X 10<sup>308</sup>)</td>
                                <td>D 또는 d (생략가능)</td>
                                <td>소수 부분 15자리까지 오차없이 표현</td>
                            </tr>
                        </tbody>
                    </Table>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="실수의 표현"
                >
                    <BsCardText>
                        컴퓨터에서는 실수를 정수와 마찬가지로 2진수로만 표현해야 하기 때문에 실수를 표현하는 방법은 정수에 비해 복잡합니다.
                    </BsCardText>

                    <DlList>
                        <DtItem>
                            고정 소수점(fixed point) 방식
                        </DtItem>
                        <DdItem>
                            <ul>
                                <li>실수는 보통 정수부와 소수부로 나눌 수 있습니다.</li>
                                <li>실수를 표현하는 가장 간단한 방식은 소수부의 자릿수를 미리 정하여, 고정된 자릿수의 소수를 표현하는 것입니다.</li>
                                <li>이 방식은 정수부와 소수부의 자릿수가 크지 않으므로, 표현할 수 있는 범위가 매우 적다는 단점이 있습니다.</li>
                            </ul>
                        </DdItem>
                        <DtItem>
                            부동 소수점(floating point) 방식
                        </DtItem>
                        <DdItem>
                            <ul>
                                <li>실수는 보통 정수부와 소수부로 나누지만, 가수부와 지수부로 나누어 표현할 수도 있습니다</li>
                                <li>부동 소수점 방식은 이렇게 하나의 실수를 가수부와 지수부로 나누어 표현하는 방식입니다.</li>
                                <li>부동 소수점 방식은 다음 수식을 이용하여 매우 큰 실수까지도 표현할 수 있습니다.</li>
                            </ul>
                        </DdItem>
                    </DlList>
                </BsCard>
            </BsContainer>
        </>
    );
}

export default SectionRender;