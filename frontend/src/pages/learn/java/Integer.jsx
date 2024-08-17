import { Helmet } from 'react-helmet-async';
import { Table } from 'react-bootstrap';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList } from 'components/List';
import Note from 'components/Note';
import Highlight from 'components/ExtHighlight';

const SectionRender = () => {
    const
        title = "정수형(Integer Types)",
        breadcrumbs = [ "Learn", "Java", "Integer Types" ];

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
                    title="정수형"
                    subtitle="Integer Types"
                >
                    <BsCardText>
                        자바에서 정수란 부호를 가지고 있으며, 소수 부분이 없는 수를 의미합니다.
                        기본 타입 중 정수를 나타내는 타입은 <code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code>을 제공하고 있습니다.
                    </BsCardText>

                    <UlList
                        items={[
                            "byte", "short", "int", "long"
                        ]}
                    />

                    <BsCardText>
                        정수형 데이터의 타입을 결정할 때에는 반드시 자신이 사용하고자 하는 데이터의 최대 크기를 고려해야 합니다.
                        <br />
                        해당 타입이 표현할 수 있는 범위를 벗어난 데이터를 저장하면, <span className="text-danger">
                        오버플로우(overflow)가 발생해 전혀 다른 값이 저장</span>될 수 있기 때문입니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "public class OverflowTestEx {"
                        ,   "	 public static void main(String[] args) {"
                        ,   "        byte num1 = 127;"
                        ,   "        byte num2 = -128;"
                        ,   ""
                        ,   "        num1++; // 127 + 1"
                        ,   "        num2--; // -128 - 1"
                        ,   ""
                        ,   "        System.out.println(num1); // 결과 : -128"
                        ,   "        System.out.println(num2); // 결과 : 127"
                        ,   "    }"
                        ,   "}"
                        ].join('\n')}
                    />

                    <Note
                        title="오버플로우(overflow)와 언더플로우(underflow)"
                        content={[
                            "* 오버플로우(overflow)란 해당 타입이 표현할 수 있는 최대 범위보다 큰 수를 저장할 때 발생하는 현상을 가리킵니다."
                        ,   "오버플로우가 발생하면 최상위 비트(MSB)를 벗어난 데이터가 인접 비트를 덮어쓰므로, 잘못된 결과를 얻을 수 있습니다."
                        ,   "\n* 언더플로우(underflow)란 해당 타입이 표현할 수 있는 최소 범위보다 작은 수를 저장할 때 발생하는 현상을 가리킵니다."
                        ].join(' ')}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="정수형 타입에 따른 메모리의 크기 및 데이터의 표현 범위"
                >
                    <Table striped bordered hover variant="dark" size="sm">
                        <thead>
                            <tr>
                                <th>타입</th>
                                <th>할당 크기</th>
                                <th>표현 범위</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>byte</td>
                                <td>1byte</td>
                                <td>-128 ~ 127</td>
                            </tr>
                            <tr>
                                <td>short</td>
                                <td>2byte</td>
                                <td>
                                    -2<sup>15</sup> ~ (2<sup>15</sup> - 1)<br />
                                    -32,768 ~ 32,767
                                </td>
                            </tr>
                            <tr>
                                <td>int</td>
                                <td>4byte</td>
                                <td>
                                    -2<sup>31</sup> ~ (2<sup>31</sup> - 1)<br />
                                    -2,147,483,648 ~ 2,147,483,647
                                </td>
                            </tr>
                            <tr>
                                <td>long</td>
                                <td>8byte</td>
                                <td>
                                    -2<sup>63</sup> ~ (2<sup>63</sup> - 1)<br />
                                    -9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </BsCard>
            </BsContainer>
        </>
    );
}

export default SectionRender;