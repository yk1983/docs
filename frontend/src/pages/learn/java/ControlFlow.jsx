import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter

const SectionRender = () => {
    const
        title = "기타 제어문(Control Flow Statements)",
        breadcrumbs = [ "Learn", "Java", "Control Flow" ];

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
                    col={ 6 }
                    title="continue 문"
                >
                    <BsCardText>
                        <code>continue</code> 문은 대부분 반복문인 <code>for</code> 문, <code>while</code>문, <code>do-while</code>
                        문에서만 사용됩니다.
                        실행문 내부에서 continue문이 실행되면 for문의 증감문 혹은 while, do-while문의 조건식으로 이동하여
                        작동합니다.
                        즉, <code>break</code> 문과는 다르게 반복문을 강제로 종료시키지 않습니다.
                        <br />
                        continue 문 또한 if 문과 함께 주로 사용되며, continue 문의 이후에 존재하는 실행문을 스킵하여
                        넘어가고자 할 때 사용합니다.
                        <br />
                        보통 반복문 내에서 특정 조건에 대한 예외 처리를 하고자 할 때 자주 사용됩니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "public class BreakAndContinueEx {",
                            "    public static void main(String[] args) {",
                            "        int result = 0;",
                            "",
                            "        for (int i = 1; i <= 10; i++) {",
                            "            if (i % 2 == 0) { // 짝수인 경우 합산하지 않는다.",
                            "                continue;",
                            "            }",
                            "            result += i;",
                            "        }",
                            "        System.out.println(result);",
                            "    }",
                            "}"
                        ].join('\n')}
                    />
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="break 문"
                >
                    <BsCardText>
                        <code>break</code> 문은 반복문인 for 문이나 while 문, do-while 문의 실행을 중지시키거나, switch
                        문 중지시키기 위해 사용합니다.
                        실행문 안에서 break를 만나면 다음 실행 코드가 존재하더라도 강제로 벗어나게 됩니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "for (조건식) {",
                            "    ... // 실행문",
                            "    break; // 아래의 실행문을 거치지 않고 강제 종료",
                            "    ... // 실행문",
                            "}",
                            "",
                            "while (입력 변수) {",
                            "    ... // 실행문",
                            "    break; // 아래의 실행문을 거치지 않고 강제 종료",
                            "    ... // 실행문",
                            "}"
                        ].join('\n')}
                    />

                    <BsCardText>
                        반복문에서 break 문은 대체적으로 if문과 함께 사용됩니다.
                        if 문의 조건에 따라 반복문의 종료를 결정합니다. 만약, 중첩된 반복문에서 사용할 경우, 가장 가까운
                        반복문만 종료하고, 바깥쪽 반복문에게는 영향을 끼치지 않습니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "for (조건식) {",
                            "    ... // 실행문1",
                            "    for (조건식) {",
                            "        ... // 실행문2",
                            "        break; // 안쪽 반복문만 종료",
                            "    }",
                            "    ... // 실행문3 // 바깥쪽 반복문은 정상작동, 실행문3도 실행",
                            "}"
                        ].join('\n')}
                    />

                    <Highlight
                        language="java"
                        codestring={[
                            "public class BreakAndContinueEx {",
                            "    public static void main(String[] args) {",
                            "        int result = 0;",
                            "        int i = 1;",
                            "",
                            "        while (true) {",
                            "            result += i;",
                            "            if (i == 10) {",
                            "                break;",
                            "            }",
                            "            i += 1;",
                            "        }",
                            "",
                            "        System.out.println(result);",
                            "    }",
                            "}"
                        ].join('\n')}
                    />
                </BsCard>
            </BsContainer>
        </>
    );
}

export default SectionRender;