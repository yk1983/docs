import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList, LiItem, DlList } from 'components/List';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter

const SectionRender = () => {
    const
        title = "반복문(Iteration Statements)",
        breadcrumbs = [ "Learn", "Java", "Iteration" ];
        
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
                    title="반복문"
                    subtitle="Iteration Statements"
                >
                    <BsCardText>
                        반복문이란 프로그램 내에서 똑같은 명령을 일정 횟수만큼 반복하여 수행하도록 제어하는 명령문입니다.
                        프로그램이 처리하는 대부분의 코드는 반복적인 형태가 많기 때문에 가장 많이 사용됩니다.
                        <UlList
                            items={[
                                "for 문"
                            ,   "향상된 for 문 (Enhanced for)"
                            ,   "while 문"
                            ,   "do-while 문"
                            ]}
                        />
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="for 문의 구조"
                    image={{
                        variant : 'top'
                    ,   src : '/assets/img/java/statements_for.jpeg'
                    }}
                >
                    <BsCardText>
                        <code>for</code> 문은 기본적으로 자체적으로 초기식, 조건식, 증감식을 모두 포함하고 있는 반복문입니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "for (초기식; 조건식; 증감식) {"
                        ,   "    // 실행문 (조건식의 결과가 참인 동안 반복적으로 실행)"
                        ,   "}"
                        ].join('\n')}
                    />

                    <BsCardText>
                        <code>for (초기화; 조건식; 증감식)</code>으로 설정하여 중괄호 <code>&#123;&#125;</code> 안에
                        실행코드를 작성합니다.
                    </BsCardText>

                    <DlList
                        items={[
                            {
                                term : '초기식'
                            ,   description : 'for 문이 시작될 수를 정하는 것으로, 반복할 변수의 초기값을 설정'
                            }
                        ,   {
                                term : '조건식'
                            ,   description : '반복할지의 여부를 결정, 조건식 안의 값이 true라면 실행문을, false라면 실행하지 않고 반복문을 종료'
                            }
                        ,   {
                                term : '증감식'
                            ,   description : '반복 횟수를 결정, 변수에 값을 더하거나, 빼거나, 곱하는 등 수행 방식을 설정'
                            }
                        ]}
                    />
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="for 문의 실행과정"
                >
                    <Highlight
                        language="java"
                        codestring={[
                            "// 1부터 10까지의 합계를 구하는 예제"
                        ,   "public class ForEx {"
                        ,   "    public static void main(String[] args) {"
                        ,   "        int result = 0;"
                        ,   ""
                        ,   "        for (int i = 1; i <= 10; i++) {"
                        ,   "            result += i;"
                        ,   "        }"
                        ,   "        // 1~10의 합인 55 출력"
                        ,   "        System.out.println(result);"
                        ,   "    }"
                        ,   "}"
                        ].join('\n')}
                    />

                    <UlList>
                        <LiItem>
                            초기식에 선언된 i 변수의 값을 1로 초기화 (<code>int i = 1;</code>)
                        </LiItem>
                        <LiItem>
                            초깃값 조건식 (<code>i &lt;= 10;</code>) 1은 10보다 작거나 같으므로 실행 블록을 실행
                        </LiItem>
                        <LiItem>
                            합산 결과를 저장할 변수에 i를 더하는 과정을 수행 (<code>result += i;</code>)
                        </LiItem>
                        <LiItem>
                            실행 블록을 빠져나와 i에 1을 증가 (<code>i++</code>)
                        </LiItem>
                        <LiItem>
                            i가 조건에 충족되는 동안(11이 될 때까지) 2 ~ 4번 과정을 반복
                        </LiItem>
                        <LiItem>
                            i가 11이 되었을 때, 조건이 충족하지 않으므로 for문을 종료
                        </LiItem>
                    </UlList>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="향상된 for 문의 구조"
                    subtitle="Enhanced for"
                >
                    <BsCardText>
                        자바 5.0 버전 이상부터는 향상된 for 문을 제공합니다.
                        향상된 for 문의 경우, 변수와 증감식을 사용하지 않습니다.
                        배열 및 컬렉션 항목의 개수만큼 반복하고  for 문을 종료합니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "for (저장될 변수 선언 : 사용할 배열) {"
                        ,   "    // 실행문"
                        ,   "}"
                        ].join('\n')}
                    />

                    <DlList
                        items={[
                            {
                                term : '저장할 변수 선언'
                            ,   description : '가져올 배열의 값을 임시적으로 저장하는 공간입니다.'
                            }
                        ,   {
                                term : '사용할 배열'
                            ,   description : '배열의 길이만큼 반복하여 해당 반복 횟수만큼 차례대로 값을 가져와 저장할 변수에 할당합니다.'
                            }
                        ]}
                    />
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="향상된 for 문의 실행과정"
                    subtitle="Enhanced for"
                >
                    <Highlight
                        language="java"
                        codestring={[
                            "// 배열을 향상된 for문으로 출력하는 예제"
                        ,   "public class EnhancedForEx {"
                        ,   "    public static void main(String[] args) {"
                        ,   "        String[] brands = {\"메르세데스\", \"BMW\", \"테슬라\"};"
                        ,   ""
                        ,   "        for (String brand : brands) {"
                        ,   "            System.out.println(\"자동차 브랜드명 : \" + brand);"
                        ,   "        }"
                        ,   "    }"
                        ,   "}"
                        ].join('\n')}
                    />

                    <UlList>
                        <LiItem>
                            <code>String[] brands</code> 배열에서 가져올 첫 번째 값이 존재하는지 확인
                        </LiItem>
                        <LiItem>
                            값이 존재하여 이를 저장할 <code>String brand</code> 변수에 “메르세데스”를 저장
                        </LiItem>
                        <LiItem>
                            중괄호 <code>&#123;&#125;</code> 안의 실행문을 실행하여 <span class="text-primary">“사용자
                            자동차 브랜드명 : 메르세데스”</span>를 출력
                        </LiItem>
                        <LiItem>
                            <code>brands</code> 배열에서 가져올 다음 값이 있는지 확인하여 2 ~ 3번 과정을 반복
                        </LiItem>
                        <LiItem>
                            더 이상 가져올 값이 없을 시, <code>for</code> 문을 종료
                        </LiItem>
                    </UlList>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="while 문의 구조"
                >
                    <BsCardText>
                        for문은 반복할 횟수를 알고 있을 때 사용한다면, while문은 조건식이 true일 경우에 계속해서 반복합니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "while (조건식) {"
                        ,   "    // 실행문"
                        ,   "}"
                        ].join('\n')}
                    />

                    <UlList>
                        <LiItem>
                            조건식의 결과가 <code>true</code>일 때 중괄호 <code>&#123;&#125;</code> 안의 실행문을 실행
                        </LiItem>
                        <LiItem>
                            실행문이 끝나면, 다시 조건식을 통해 <code>true</code> 또는 <code>false</code>를 판단
                        </LiItem>
                        <LiItem>
                            <code>true</code>이면 실행문을 반복하여 실행하고, <code>false</code>이면 while문을 종료
                        </LiItem>
                    </UlList>

                    <BsCardText>
                        while 문의 조건식 안에는 <code>boolean</code> 타입도 사용이 가능합니다.
                        만약, while 문 안에 조건식에 true 를 사용하면 무한 루프에 빠지게 됩니다.
                        따라서 실행문 안에 while 문을 벗어나게 해주는 코드가 필요합니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="while 문의 실행과정"
                >
                    <BsCardText>
                        for문은 반복할 횟수를 알고 있을 때 사용한다면, while문은 조건식이 true일 경우에 계속해서 반복합니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "public class whileEx {"
                        ,   "    public static void main(String[] args) {"
                        ,   "        int i = 1;"
                        ,   "        int result = 0;"
                        ,   ""
                        ,   "        while (i <= 10) {"
                        ,   "            result += i;"
                        ,   "            i++;"
                        ,   "        }"
                        ,   ""
                        ,   "        System.out.println(result);"
                        ,   "    }"
                        ,   "}"
                        ].join('\n')}
                    />
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="do-while 문의 구조"
                >
                    <BsCardText>
                        do-while 문은 조건식에 의해 반복 실행한다는 점에서 while 문과 동일합니다.
                        하지만 while 문은 조건식을 검사하고 난 뒤에 실행문을 결정하는 반면에, do-while 문은 우선 실행을
                        시키고 난 뒤, 조건식을 통해 계속 반복할지를 결정합니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "do {"
                        ,   "    // 실행문"
                        ,   "} while (조건식);"
                        ].join('\n')}
                    />
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="do-while 문의 실행과정"
                >
                    <Highlight
                        language="java"
                        codestring={[
                            "public class DoWhileEx {"
                        ,   "    public static void main(String[] args) {"
                        ,   "        int i = 1;"
                        ,   "        int result = 0;"
                        ,   ""
                        ,   "        do {"
                        ,   "            result += i;"
                        ,   "            i += 1;"
                        ,   "        } while (i <= 10);"
                        ,   ""
                        ,   "        System.out.println(result);"
                        ,   "    }"
                        ,   "}"
                        ].join('\n')}
                    />

                    <UlList>
                        <LiItem>
                            do 의 중괄호 <code>&#123;&#125;</code> 안에 내용을 수행한 뒤, 조건식 안의 내용을 검사
                        </LiItem>
                        <LiItem>
                            조건식 결과가 <code>true</code>이면, <code>do</code> 의 중괄호 <code>&#123;&#125;</code>
                            {' '}안에 실행문을 반복하여 수행
                        </LiItem>
                        <LiItem>
                            만약, 조건식 결과가 <code>false</code>이면 <code>do-while</code> 문을 바로 종료
                        </LiItem>
                    </UlList>
                </BsCard>
            </BsContainer>
        </>
    );
}

export default SectionRender;