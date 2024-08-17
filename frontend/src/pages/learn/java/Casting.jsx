import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import Note from 'components/Note';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter

const SectionRender = () => {
    const
        title = "형변환(Casting)",
        breadcrumbs = [ "Learn", "Java", "Casting" ];

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
                    title="형변환"
                    subtitle="Casting"
                >
                    <BsCardText>
                        프로그램을 작성하다 보면 같은 타입뿐만 아니라 <span className="text-primary">서로 다른 타입간의
                        연산을 수행해야 하는 경우</span>가 있습니다.
                        이럴 경우에는 <span className="text-primary">연산을 수행하기 전에 타입을 일치</span>시켜야 하는데,
                        <span className="text-danger">변수나 리터럴의 타입을 다른 타입으로 변환하는 것을 형변환(캐스팅,
                        casting)</span>이라고 합니다.
                        <br />
                        형변환 방법은 간단합니다.
                        형변환하고자 하는 변수나 리터럴의 앞에 변환하고자 하는 타입을 괄호와 함께 붙여주기만 하면 됩니다.
                        이 때 사용되는 괄호(<code>()</code>)는 캐스트 연산자 또는 형변환 연산자라고 하며,
                        형변환을 캐스팅(casting)이라고 합니다.
                    </BsCardText>

                    <Highlight
                        title="Syntax : (타입) 피연산자"
                        language="java"
                        codestring={[
                            "double d = 3.14;"
                        ,   "// double타입의 변수 d를 int타입으로 형변환"
                        ,   "// 이 때 형변환의 결과인 3이 score애 저장"
                        ,   "int score = (int) d;"
                        ].join('\n')}
                    />

                    <Highlight
                        title="형변환 예제"
                        language="java"
                        codestring={[
                            "public class CastingEx1 {"
                        ,   "    public static void main(String[] args) {"
                        ,   "        double d = 3.14;"
                        ,   "        int score = (int) d;"
                        ,   ""
                        ,   "        System.out.println(\"score = \" + score);"
                        ,   "        System.out.println(\"d = \" + d);"
                        ,   "    }"
                        ,   "}"
                        ].join('\n')}
                    />

                    <Note
                        title="형변환"
                        content={[
                            "기본형 타입에서 boolean을 제외한 나머지 타입들은 서로 형변환이 가능합니다."
                        ,    "그리고 기본형과 참조형간의 형변환은 불가능합니다."
                        ].join(' ')}
                    />
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="묵시적 형변환"
                    subtitle="Implicit Casting"
                    image={{
                        variant : 'bottom'
                    ,   src : '/assets/img/java/auto_casting.png'
                    }}
                >
                    <BsCardText>
                        타입 변환을 시스템이 자동으로 실행합니다.
                        대부분 작은 데이터 타입에서 큰 데이터 타입으로의 형변환이 일어납니다.
                        (작은 데이터 타입에서 큰 데이터 타입으로 변환할 때 데이터 손실의 가능성이 없기 때문입니다.)
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="명시적 형변환"
                    subtitle="Explicit Casting"
                >
                    <BsCardText>
                        큰 데이터가 작은 데이터 타입으로 변환하려는 경우에 사용되며, 형변환을 위해 캐스팅 연산자
                        (casting operator)를 사용해야합니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "double doubleValue = 42.7;"
                        ,   "int intValue = (int) doubleValue; // 명시적 형변환 발생, 소수부분이 손실됨"
                        ].join('\n')}
                    />
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="업캐스팅"
                    subtitle="UpCasting"
                >
                    <BsCardText>
                        상위 클래스 타입의 변수에 하위 클래스의 인스턴스를 할당하는 것을 의미합니다.
                        <br />
                        묵시적 형변환에서처럼 하위 클래스의 인스턴스가 상위 클래스의 변수에 할당할때는 데이터 손실의 가능성이 있습니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="다운캐스팅"
                    subtitle="DownCasting"
                >
                    <BsCardText>
                        상위 클래스 인스턴스를 하위 클래스 타입의 변수에 할당하는 것을 의미합니다.
                        <br />
                        상속 관계에서 상위 클래스 타입의 변수에 하위 클래스 인스턴스가 할당되어 있을 때, 하위 클래스의
                        멤버 변수나 메서드에 접근하려면 명시적 형변환을 수행해야합니다.
                        <br />
                        또한 실제로 변환되는 객체가 해당 하위 클래스의 인스턴스인지 확인해야 합니다.
                        그렇지 않으면 ClassCastException 오류가 발생할 수 있으므로, 하위 클래스의 인스턴스임을 확인하기
                        위해 <code>instanceof</code> 연산자를 사용하여 확인을 합니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="정수형 간의 형변환"
                    subtitle="Example"
                >
                    <Highlight
                        title="정수형 간의 형변환에서 큰 타입에서 작은 타입으로의 변환"
                        language="java"
                        codestring={[
                            "public class CastingEx1 {"
                        ,   "    public static void main(String[] args) {"
                        ,   "    // 큰 수에서 작은 수로 형변환 (작은수가 포함할 수 있는 수)"
                        ,   "    int i = 10;"
                        ,   "    byte b = (byte) i;"
                        ,   "    System.out.printf(\"[int -> byte] i=%d -> b=%d%n\", i, b); // [int -> byte] i=10 -> b=10"
                        ,   "    "
                        ,   "    // 큰 수에서 작은 수로 형변환 (작은수가 포함할 수 없는 수 : 데이터 손실)"
                        ,   "    i = 300;"
                        ,   "    b = (byte) i;"
                        ,   "    System.out.printf(\"[int -> byte] i=%d -> b=%d%n\", i, b); // [int -> byte] i=300 -> b=44"
                        ,   "    "
                        ,   "    b = 10;"
                        ,   "    i = (int) b;"
                        ,   "    System.out.printf(\"[byte -> int] b=%d -> i=%d%n\", b, i); // [byte -> int] b=10 -> i=10"
                        ,   "    "
                        ,   "    b = -2;"
                        ,   "    i = (int) b;"
                        ,   "    System.out.printf(\"[byte -> int] b=%d -> i=%d%n\", b, i); // [byte -> int] b=-2 -> i=-2"
                        ,   "    "
                        ,   "    // 10진수 정수를 2진 전수로 변환한 문자열"
                        ,   "    System.out.println(\"i = \" + Integer.toBinaryString(i)); // i = 11111111111111111111111111111110"
                        ,   "    }"
                        ,   "}"
                        ].join('\n')}
                    />

                    <Note
                        title="Note"
                        content={[
                            "int타입(4byte)의 값을 byte타입(1byte)으로 변환하는 경우 값의 손실이 발생합니다."
                        ].join(' ')}
                    />
                </BsCard>
                <BsCard
                    col={ 12 }
                    title="실수형 간의 형변환"
                    subtitle="Example"
                >
                    <Highlight
                        title="실수형 간의 형변환에서 큰 타입에서 작은 타입으로의 변환"
                        language="java"
                        codestring={[
                            "public class CastingEx3 {"
                        ,   "    public static void main(String[] args) {"
                        ,   "        float f = 9.1234567f;"
                        ,   "        double d = 9.1234567;"
                        ,   "        double d2 = (double) f;"
                        ,   ""
                        ,   "        System.out.printf(\"f = %20.18f\n\", f);   // f = 9.123456954956055000"
                        ,   "        System.out.printf(\"d = %20.18f\n\", d);   // d = 9.123456700000000000"
                        ,   "        System.out.printf(\"d2 = %20.18f\n\", d2); // d2 = 9.123456954956055000"
                        ,   "    }"
                        ,   "}"
                        ].join('\n')}
                    />

                    <Note
                        title="Note"
                        content={[
                            "실수형에서도 정수형처럼 작은 타입에서 큰 타입으로 변환하는 경우, 빈 공간을 0으로 채웁니다."
                        ].join(' ')}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="정수형과 실수형 간의 형변환"
                    subtitle="Example"
                >
                    <BsCardText>
                        정수형과 실수형은 저장형식이 완전히 다르기 때문에 정수형간의 변환처럼 간단히 값을 채우고 자르는 식으로는 할 수 없습니다.
                    </BsCardText>

                    <Highlight
                        title="정수형과 실수형 간의 형변환"
                        language="java"
                        codestring={[
                            "public class CastingEx4 {"
                        ,   "    public static void main(String[] args) {"
                        ,   "        // 8자리의 10진수"
                        ,   "        int i = 91234567;"
                        ,   "        // int를 float로 형변환"
                        ,   "        float f = (float) i;"
                        ,   "        // float를 다시 int로 형변환"
                        ,   "        int i2 = (int) f;"
                        ,   "        // int를 double로 형변환"
                        ,   "        double d = (double) i;"
                        ,   "        // double을 다시 int로 형변환"
                        ,   "        int i3 = (int) d;"
                        ,   "        "
                        ,   "        float f2 = 1.666f;"
                        ,   "        int i4 = (int) f2;"
                        ,   "        "
                        ,   "        System.out.printf(\"i = %d\\n\", i);                // i = 91234567"
                        ,   "        System.out.printf(\"f = %f, i2 = %d\\n\", f, i2);   // f = 91234568.000000, i2 = 91234568"
                        ,   "        System.out.printf(\"d = %f, i3 = %d\\n\", d, i3);   // d = 91234567.000000, i3 = 91234567"
                        ,   "        System.out.printf(\"(int) %f = %d\\n\", f2, i4);    // (int) 1.666000 = 1"
                        ,   "    }"
                        ,   "}"
                        ].join('\n')}
                    />

                    <Note
                        title="Note"
                        content={[
                            "정수형을 실수형으로 변환 :"
                        ,   "정수는 소수점이하의 값이 없으므로 비교적 변환이 간단합니다."
                        ,   "실수형은 정수형보다 휠씬 큰 저장범위를 갖고 있기 때문에, 정수형을 실수형으로 변환하는 것은 무리가 없습니다."
                        ,   "\n실수형을 정수형으로 변환 :"
                        ,   "실수형을 정수형으로 변환하면, 실수형의 수수점이하 값은 버려집니다."
                        ,   "정수형의 표현 형식으로 소수점 이하의 값은 표현할 수 없기 때문입니다."
                        ].join(' ')}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="자동 형변환"
                >
                    <BsCardText>
                        서로 다른 타입간의 대입이나 연산을 할 때, 형변환으로 타입을 일치시키는 것이 원칙입니다.
                        하지만, 경우에 따라 편의상의 이유로 형변환을 생략할 수 있습니다.
                        그렇다고 형변환이 이루어지지 않는 것은 아니며, 컴파일러가 생략된 형변환을 자동적으로 추가합니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={["float f = 1234;  // 형변환의 생략. float f = (float) 1234;"]}
                    />

                    <BsCardText>
                        그러나 변수가 저장할 수 있는 값의 범위보다 더 큰 값을 저장하려는 경우에 형변환을 생략하면 에러가 발생합니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={["char ch = (char) 1000;  // OK. 명시적 형변환."]}
                    />

                    <BsCardText>
                        또 다른 예로 다음과 같은 계산식에서 자주 형변환이 생략됩니다.
                        서로 다른 두 타입의 연산에서는 먼저 타입을 일치시킨 다음에 연산을 수행해야 하므로, 연산과정에서
                        형변환이 자동적으로 이루어집니다.
                        <br />
                        서로 다른 두 타입간의 덧셈에서는 두 타입 중 표현볌위가 더 넓은 타입으로 형변환하여 타입을 일치시킨
                        다음에 연산을 수행합니다.
                        그렇게 함으로써 값손실의 위험이 더 적어서 올바른 결과를 얻을 확율이 높기 때문입니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "int i = 3;"
                        ,   "double d = 1.0 + i;              //  double d = 1.0 + (double) i; 에서 형변환이 생략"
                        ,   "// double d = 1.0 + (double) i;"
                        ,   "// double d = 1.0 + (double) 3;  // i의 값은 3"
                        ,   "// double d = 1.0 + 3.0          // 3을 double타입으로 형변환"
                        ,   "// double d = 4.0                // double = double + double"
                        ].join('\n')}
                    />

                    <BsCardText>
                        연산과정에서 자동적으로 발생하는 형변환을 산술변환이라고 합니다.
                        이러한 자동 형변환에는 규칙이 있습니다.
                        컴파일러는 기존의 값을 최대한 보존할 수 있는 타입으로 자동 형변환합니다.
                    </BsCardText>
                </BsCard>
            </BsContainer>
        </>
    );
}

export default SectionRender;