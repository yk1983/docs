import { Helmet } from 'react-helmet-async';
import { Row, Col, Card, Alert } from 'react-bootstrap';
import { BsSubtract, BsPinAngle } from 'react-icons/bs';
import Highlight from 'react-highlight';
import PageTitle from 'layouts/PageTitle';

const Conditional = () => {
    return(
        <>
            <Helmet>
                <title>Learn JAVA</title>
            </Helmet>

            <PageTitle
                title="조건문(Conditional Statements)"
                depth1="Learn"
                depth2="Java"
                depth3="Conditional Statements"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 조건문<sup>conditional statements</sup>
                                </Card.Title>
                                <Card.Text>
                                    조건문은 주어진 조건식의 결과에 따라 별도의 명령을 수행하도록 제어하는 명령문입니다.
                                    <ul>
                                        <li>if 문</li>
                                        <li>if ~ else 문</li>
                                        <li>if ~ else if ~ else 문</li>
                                        <li>삼항연산자</li>
                                        <li>switch 문</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={process.env.PUBLIC_URL + '/assets/img/java/statements_if.png'}
                            />
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> if 문
                                </Card.Title>
                                <Card.Text>
                                    <code>if</code> 문은 조건식의 결과가 참(<code>true</code>)이면 주어진 명령문을 실행하며,
                                    거짓(<code>false</code>)이면 아무것도 실행하지 않습니다.
                                    <br />
                                    if 문의 소괄호 안에는 boolean 값으로 반환될 수 있는 조건식을 넣고, 중괄호 안에서 조건이
                                    참일 때 실행하고자 하는 코드를 작성합니다.
                                    <Highlight language="java">
{`if (조건식) {
    // 실행문 (조건식이 참인 경우 실행)
}`}

                                    </Highlight>
                                    중괄호 <code>&#123;&#125;</code>를 이용해 실행하고자 하는 코드를 묶을 수 있습니다.
                                    이를 블록(block)이라 합니다. 이 블럭을 제거하면 if문은 if문이 나온 이후 한 행만을
                                    if문의 조건이 참인 경우 실행하는 실행문으로 인식됩니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={process.env.PUBLIC_URL + '/assets/img/java/statements_if_else.png'}
                            />
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> if ~ else 문
                                </Card.Title>
                                <Card.Text>
                                    <code>if ~ else</code>문은 조건식의 결과에 따라 <code>true</code>인 경우에는 참인 블록을 실행하고,
                                    조건이 <code>false</code>인 경우 <code>else</code>문의 실행문을 실행하는 조건문입니다.
                                    <Highlight language="java">
{`if (조건문) {
    // 실행문 (조건문이 참(true)인 경우 실행)
} else {
    // 실행문 (조건문의 거짓(false)인 경우 실행)
}`}
                                    </Highlight>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={process.env.PUBLIC_URL + '/assets/img/java/statements_if_elseif_else.png'}
                            />
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> if ~ else if ~ else 문
                                </Card.Title>
                                <Card.Text>
                                    <code>if ~ else if ~ else</code>문은 <code>if ~ else</code>문을 확장한 조건문으로
                                    조건식의 결과에 따라 참인 블록을 실행하는 조건문입니다.
                                    <Highlight language="java">
{`if (조건식1) {
    // 조건식1이 참이면 실행
} else if (조건식2) {
    // 조건식1이 참이 아니고, 조건식2가 참이면 실행
} else if (조건식3) {
    // 조건식1과 2가 참이 아니고, 조건식3이 참이면 실행
} ... {

} else {
    // 위의 모든 조건식이 참이 아니면 실행
}`}
                                    </Highlight>
                                    <code>if</code>문의 조건식이 <code>true</code>이면 해당 블록을 실행하고,
                                    <code>false</code>이면 다음 블록을 검사합니다.
                                    <br />
                                    <code>else if</code>문을 사용하여 다음 실행 블록에 대한 여러개의 조건식을 생성할 수 있습니다.
                                    <br />
                                    <code>else if</code>문의 모든 조건식이 <code>false</code>이면, 나머지 경우를 의미하는 <code>else</code> 블록이 실행됩니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> if ~ else if ~ else 문 예제
                                </Card.Title>
                                <Card.Text>
                                    <Highlight language="java">
{`import java.util.Scanner;

public class IfElseifElseEx {
    static Scanner myInput = new Scanner(System.in);

    public static void main(String[] args) {
        // 사용자로부터 점수 입력 받기
        int score = myInput.nextInt();

        if (score >= 90) {
            System.out.println('A'); // 점수가 90점 이상이면 A
        } else if (score >= 80) {
            System.out.println('B'); // 점수가 90점 미만 80점 이상이면 B
        } else if (score >= 70) {
            System.out.println('C'); // 점수가 80점 미만 70점 이상이면 C
        } else if (score >= 60) {
            System.out.println('D'); // 점수가 70점 미만 60점 이상이면 D
        } else {
            System.out.println('F'); // 점수가 60점 미만이면 F
        }
    }
}`}
                                    </Highlight>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> switch 문
                                </Card.Title>
                                <Card.Text>
                                    <code>switch</code>문도 if문과 마찬가지로 조건 제어문입니다.
                                    하지만, 사용하는 방식은 if문과 다르게 <code>switch</code>문은 조건의 변수가 어떤 값을 갖느냐에 따라
                                    실행문이 결정됩니다. (따라서 코드는 더 간결해질 수 있습니다.)
                                    <Highlight language="java">
{`switch (조건 변수) {
    case 값1 :
        // 실행문 (값1과 일치하면 실행)
        break; // 다음 case를 실행하지 않고 switch문을 벗어나기 위해 사용
    case 값2 :
        // 실행문 (값2와 일치하면 실행)
        break;
    ...
    default:
        // 실행문 (일치하는 case가 없으면 실행)
        break;
}`}
                                    </Highlight>
                                    <code>switch</code>문은 괄호 안의 값과 동일한 값을 갖는 <code>case</code>의 실행문을 실행합니다.
                                    그러나, 괄호 안의 값을 갖는 <code>case</code>가 없으면 <code>default</code>의 실행문을 실행합니다.
                                    <code>switch</code>문의 괄호 안에는 <code>int, char, String</code>등 다양한 데이터 타입의 변수가 들어올 수 있습니다.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Alert variant="success" className="mt-3">
                                    <Alert.Heading>
                                        <BsPinAngle /> break
                                    </Alert.Heading>
                                    <p>
                                        break문을 작성하지 않으면 switch문을 벗어나지 않고 모든 case문의 값과 비교하여
                                        중복으로 일치하는 case도 실행됩니다.
                                        이러한 break문을 사용하지 않는 방식으로도 프로그래밍 구현을 할 수 있지만, 보통은
                                        이러한 경우 원치 않는 결과(fall through)를 얻을 수 있습니다.
                                    </p>
                                </Alert>
                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> switch 문 실행과정
                                </Card.Title>
                            </Card.Body>
                            <Card.Img
                                variant="bottom"
                                src={process.env.PUBLIC_URL + '/assets/img/java/statements_switch.png'}
                            />
                        </Card>
                    </Col>

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> switch 문 예제
                                </Card.Title>
                                <Card.Text>
                                    <Highlight language="java">
{`import java.util.Scanner;

public class SwitchEx {
    static Scanner myInput = new Scanner(System.in);
        public static void main(String[] args) {
            System.out.print("0부터 6사이의 숫자를 입력하시오: ");
            int day = myInput.nextInt();
            switch (day) {
                case 0 :
                    System.out.println("일요일"); // day가 0이면 실행
                    break;
                case 1 :
                    System.out.println("월요일"); // day가 1이면 실행
                    break;
                case 2 :
                    System.out.println("화요일"); // day가 2이면 실행
                    break;
                case 3 :
                    System.out.println("수요일"); // day가 3이면 실행
                    break;
                case 4 :
                    System.out.println("목요일"); // day가 4이면 실행
                    break;
                case 5 :
                    System.out.println("금요일"); // day가 5이면 실행
                    break;
                case 6 :
                    System.out.println("토요일"); // day가 6이면 실행
                    break;
                default:
                    System.out.println("잘못된 입력"); // case에 없는 입력 시 실행
                    break;
        }
    }
}`}
                                    </Highlight>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 중첩 조건문
                                </Card.Title>
                                <Card.Text>
                                    중첩 조건문은 조건문을 중첩해서 사용하는 것으로, 조건문 안에 새로운 조건문을 작성하는
                                    것입니다.
                                    if문 실행 블록 안에 if문 또는 switch문을 사용하거나 switch문의 case문 안에 if문 또는
                                    switch문을 사용하는 것을 말합니다.
                                    <Highlight language="java">
{`if (조건식1) {
    switch (입력 변수) {
        case 1 :
            if (조건식2) {
                ...
            }
            break;
        ...
    }
} else if {
    ...
}`}
                                    </Highlight>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Alert variant="success" className="mt-3">
                                    <Alert.Heading>
                                        <BsPinAngle /> 중첩 조건문 사용시 유의점
                                    </Alert.Heading>
                                    <p>
                                        중첩 조건문을 계속해서 사용할 수 있다. 하지만, 중첩 조건문이 많을수록 가독성이 떨어지고,
                                        성능이 급격히 저하되므로 최소한의 조건문으로 작성해야 합니다.
                                    </p>
                                </Alert>
                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 개선된 switch 문
                                </Card.Title>
                                <Card.Text>
                                    자바 14이후 버전에서는 개선된 switch문을 표준화하여 사용합니다.
                                    <ul>
                                        <li>여러 조건에 따라 ‘,’로 구분하여 한 번에 처리할 수 있습니다.</li>
                                        <li>‘:’ 대신에 &rarr;를 사용하고, break문은 생략합니다.</li>
                                        <li>실행문이 2개 이상이거나 반환 값이 존재할 경우 중괄호 &#123;&#125;를 사용합니다.</li>
                                    </ul>
                                    <Highlight language="java">
{`import java.util.Scanner;

public class SwitchOverlapCase {
    static Scanner userInput = new Scanner(System.in);
    public static void main(String[] args) {
        System.out.print("포지션을 입력하시오 : ");
        String[] positionList = {"공격수", "수비수", "골키퍼"};
        String position = userInput.nextLine(); //입력 받기

        switch (position) {
            case "Senior" -> System.out.println("전방 배치");
            case "Junior", "Manager" -> System.out.println("후방 배치");
            default -> System.out.println("중앙 배치");
        }
    }
}`}
                                    </Highlight>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default Conditional;