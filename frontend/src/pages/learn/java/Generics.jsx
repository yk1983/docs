import { Helmet } from 'react-helmet-async';
import { Table } from 'react-bootstrap';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList, DlList, DtItem, DdItem } from 'components/List';
import Note from 'components/Note';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter
/**
 * Generics.jsx
 * @description
 *
 * @author  : yongkim
 * @since   : 2024. 8. 22.
 * @param   :
 * @version : 1.0.0
 */
const SectionRender = () => {
    const
        title = "제네릭(Generics)",
        breadcrumbs = [ "Learn", "Java", "Generics" ];

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
                    title="제네릭이란?"
                    subtitle="Generics"
                >
                    <BsCardText>
                        <span className="text-primary">제네릭(Generic)</span>은 일반적인, 총칭적이란 사전적 단어의 의미를
                        갖습니다.
                        자바에서 제네릭(Generics)은 클래스 내부에서 사용할 데이터 타입을 외부에서 지정하는 기법을 의미합니다.
                        즉, 제네릭(generic)이란 데이터의 타입(data type)을 일반화한다(generalize)는 것을 의미합니다.
                    </BsCardText>

                    <BsCardText>
                        제네릭은 클래스나 메소드에서 사용할 내부 데이터 타입을 컴파일 시에 미리 지정하는 방법입니다.
                        이렇게 컴파일 시에 미리 타입 검사(type check)를 수행하면 다음과 같은 장점을 가집니다.
                    </BsCardText>

                    <UlList
                        header="제네릭의 장점"
                        items={[
                            "클래스나 메소드 내부에서 사용되는 객체의 타입 안정성을 높일 수 있습니다"
                        ,   "반환값에 대한 타입 변환 및 타입 검사에 들어가는 노력을 줄일 수 있습니다."
                        ]}
                    />

                    <Highlight
                        header="리스트(List) 제네릭 예제"
                        language="java"
                        codestring={["ArrayList<String> list = new ArrayList<>();"]}
                    />

                    <BsCardText>
                        자바에서 배열과 함께 자주 쓰이는 자료형인 리스트(<code>List</code>)에서, 다음과 같이 클래스 선언
                        문법에 꺾쇠 괄호(<code>&lt;&gt;</code>)로 되어있는 코드가 바로 제네릭(Generic)입니다.
                    </BsCardText>

                    <BsCardText>
                        위 예제에서는 리스트 클래스 자료형의 타입은 <code>String</code> 타입으로 지정되어 문자열 데이터만
                        리스트에 적재할 수 있게 됩니다.
                    </BsCardText>

                    <BsCardText>
                        Java SE 7부터 인스턴스 생성 시 타입을 추정할 수 있는 경우에는 타입을 생략할 수 있습니다.
                        {' '}<code>ArrayList&lt;String&gt;</code>의 타입을 <code>String</code>으로 지정하였기에 타입을 문자열로
                        추정할 수 있는 경우이므로 <code>new ArrayList&lt;&gt;();</code>에서는 String 타입을 생략한 것입니다.
                    </BsCardText>

                    <Note
                        title="Note"
                    >
                        JDK 1.5 이전에서는 여러 타입을 사용하는 대부분의 클래스나 메소드에서 인수나 반환값으로
                        {' '}<code>Object</code> 타입을 사용했습니다.
                        <br />
                        이 경우에는 반환된 Object 객체를 다시 원하는 타입으로 타입 변환해야 하며,
                        이때 <span className="text-danger">오류가 발생</span>할 가능성도 존재합니다.
                        <br />
                        제네릭을 사용하면 컴파일 시에 미리 타입이 정해지므로,
                        {' '}<span className="text-danger">타입 검사나 타입 변환</span>과 같은 번거로운 작업을 생략할 수 있게 됩니다.
                    </Note>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="제네릭 타입 매개변수"
                    image={{
                        variant : 'bottom'
                    ,   src : '/assets/img/java/generics_type.png'
                    }}
                >
                    <BsCardText>
                        제네릭은 꺾쇠 괄호(<code>&lt;&gt;</code>) 키워드를 사용하는데 이를 <span className="text-primary">
                        다이아몬드 연산자</span>라고 합니다.
                        다이아몬드 연산자 안에 식별자 기호를 지정함으로써 파라미터화 할 수 있습니다.
                        메소드가 매개변수를 받아 사용하는 것과 비슷하여 <span className="text-primary">제네릭의 타입
                        매개변수(parameter) / 타입 변수</span>라고 합니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="타입 파라미터 기호 명칭"
                >
                    <BsCardText>
                        제네릭 기호를 <code>&lt;T&gt;</code> 와 같이 써서 표현했지만 사실 식별자 기호는 문법적으로 정해진
                        것이 없습니다.
                        <br />
                        <code>for</code> 문을 사용하는 경우 루프 변수로 <code>int i</code> 로 지정해서 사용하듯, 제네릭의
                        표현 변수를 <code>T</code>로 표현한 것입니다.
                        <br />
                        만일 두번째, 세번째 제네릭이 필요하다고 보면 <code>for</code> 문의 <code>int j</code>, <code>
                        int k</code> 와 같이 <code>S</code>, <code>U</code> 로 이어나가면 됩니다.
                        <br />
                        명명하고 싶은대로 아무 단어나 넣어도 문제는 없지만, 대중적으로 통하는 통상적인 네이밍이 있으면
                        개발이 용이해 지기 때문에 <u>암묵적인 규칙(convention)</u>이 존재합니다.
                        <br />
                        예를 들어, 예제에서 사용된 <code>T</code>를 타입 변수(type variable)라고 하며, 임의의 참조형 타입을
                        의미합니다.
                    </BsCardText>

                    <Table striped bordered hover variant="dark" size="sm">
                        <thead>
                            <tr>
                                <th>타입</th>
                                <th>설명</th>
                            </tr>
                        </thead>
                        <tbody>
                        {[
                            { type : '<T>', description : '타입(Type)' }
                        ,   { type : '<E>', description : '요소(Element), 예를 들어 List' }
                        ,   { type : '<K>', description : '키(Key), 예를 들어 Map<K, V>' }
                        ,   { type : '<V>', description : '리턴 값 또는 매핑된 값(Variable)' }
                        ,   { type : '<N>', description : '숫자(Number)' }
                        ,   { type : '<S, U, V>', description : '2번째, 3번째, 4번째에 선언된 타입' }
                        ].map((item, index) => (
                            <tr>
                                <td>{ item.type }</td>
                                <td>{ item.description }</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="타입 파라미터 정의"
                >
                    <BsCardText>
                        타입 매개변수는 제네릭을 이용한 클래스나 메소드를 설계할 때 사용됩니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "class FruitBox<T> {"
                        ,   "    List<T> fruits = new ArrayList<>();"
                        ,   ""
                        ,   "    public void add(T fruit) {"
                        ,   "        fruits.add(fruit);"
                        ,   "    }"
                        ,   "}"
                        ].join('\n')}
                    />

                    <BsCardText>
                        클래스명 옆에 <code>&lt;T&gt;</code> 기호로 제네릭을 붙이고 클래스 내부에서 식별자 기호 <code>T</code>
                        를 클래스 필드와, 메소드의 매개변수의 타입으로 지정합니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "// 제네릭 타입 매개변수에 정수 타입을 할당"
                        ,   "FruitBox<Integer> intBox = new FruitBox<>();"
                        ,   "// 제네릭 타입 매개변수에 실수 타입을 할당"
                        ,   "FruitBox<Double> intBox = new FruitBox<>();"
                        ,   "// 제네릭 타입 매개변수에 문자열 타입을 할당"
                        ,   "FruitBox<String> intBox = new FruitBox<>();"
                        ,   "// 클래스도 할당 가능 (Apple 클래스가 있다고 가정)"
                        ,   "FruitBox<Apple> intBox = new FruitBox<Apple>();"
                        ].join('\n')}
                    />

                    <BsCardText>
                        <code>&lt;T&gt;</code> 부분에서 실행부에서 타입을 받아와 내부에서 <code>T</code> 타입으로 지정한
                        멤버들에게 전파하여 타입이 구체적으로 설정 됩니다.
                        이를 <span className="text-primary">구체화(Specialization)</span> 라고 합니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="타입 파라미터 생략"
                >
                    <BsCardText>
                        jdk 1.7 버전 이후부터, new 생성자 부분의 제네릭 타입을 생략할 수 있게 되었습니다.
                        제네릭 나름대로 타입 추론을 해서 생략 된 곳을 넣어주기 때문에 문제가 없습니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "FruitBox<Apple> intBox = new FruitBox<Apple>();"
                        ,   ""
                        ,   "// 다음과 같이 new 생성자 부분의 제네릭의 타입 매개변수는 생략"
                        ,   "FruitBox<Apple> intBox = new FruitBox<>();"
                        ].join('\n')}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="타입 파라미터 할당 가능 타입"
                >
                    <BsCardText>
                        제네릭에서 할당 받을 수 있는 타입은 <span className="text-primary">Reference 타입</span> 뿐입니다.
                        즉, <code>int</code>형 이나 <code>double</code>형 같은 자바 원시 타입(Primitive Type)을 제네릭 타입
                        파라미터로 넘길 수 없습니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "// 기본 타입 int는 사용 불가"
                        ,   "List<int> intList = new List<>();"
                        ,   ""
                        ,   "// Wrapper 클래스로 사용 가능 (내부에서 자동으로 언박싱되어 원시 타입으로 이용됨)"
                        ,   "List<Integer> integerList = new List<>();"
                        ].join('\n')}
                    />

                    <BsCardText>

                    </BsCardText>

                    <Highlight
                        header="객체 지향 프로그래밍의 다형성 원리"
                        language="java"
                        codestring={[
                            "class Fruit { }"
                        ,   "class Apple extends Fruit { }"
                        ,   "class Banana extends Fruit { }"
                        ,   ""
                        ,   "class FruitBox<T> {"
                        ,   "    List<T> fruits = new ArrayList<>();"
                        ,   ""
                        ,   "    public void add(T fruit) {"
                        ,   "        fruits.add(fruit);"
                        ,   "    }"
                        ,   "}"
                        ,   ""
                        ,   "public class Main {"
                        ,   "    public static void main(String[] args) {"
                        ,   "        FruitBox<Fruit> box = new FruitBox<>();"
                        ,   ""
                        ,   "        // 제네릭 타입은 다형성 원리가 그대로 적용"
                        ,   "        box.add(new Fruit());"
                        ,   "        box.add(new Apple());"
                        ,   "        box.add(new Banana());"
                        ,   "    }"
                        ,   "}"
                        ].join('\n')}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="복수 타입 파라미터"
                >
                    <BsCardText>
                        제네릭은 반드시 한 개만 사용하는 것은 아닙니다.
                        만일 타입 지정이 여러개가 필요할 경우 2개, 3개 만들 수 있습니다.
                        <br />
                        제네릭 타입의 구분은 꺽쇠 괄호 안에서 쉽표(<code>,</code>)로 하며 <code>&lt;E, E&gt;</code> 와
                        같은 형식을 통해 복수 타입 파라미터를 지정할 수 있습니다. (예로 들면, <code>Map</code>)
                        <br />
                        그리고 당연히 클래스 초기화할때 제네릭 타입을 두개를 넘겨주어야 합니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "import java.util.ArrayList;"
                        ,   "import java.util.List;"
                        ,   ""
                        ,   "class Apple { }"
                        ,   "class Banana { }"
                        ,   ""
                        ,   "class FruitBox<E, E> {"
                        ,   "    List<E> apples = new ArrayList<>();"
                        ,   "    List<E> bananas = new ArrayList<>();"
                        ,   ""
                        ,   "    public void add(E apple, E banana) {"
                        ,   "        apples.add(apple);"
                        ,   "        bananas.add(banana);"
                        ,   "    }"
                        ,   "}"
                        ,   ""
                        ,   "public class Main {"
                        ,   "    public static void main(String[] args) {"
                        ,   "    	// 복수 제네릭 타입"
                        ,   "        FruitBox<Apple, Banana> box = new FruitBox<>();"
                        ,   "        box.add(new Apple(), new Banana());"
                        ,   "        box.add(new Apple(), new Banana());"
                        ,   "    }"
                        ,   "}"
                        ].join('\n')}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="제네릭 사용 이유"
                >
                    <DlList>
                        <DtItem>컴파일 타임에 타입 검사를 통해 예외 방지</DtItem>
                        <DdItem>
                            JDK 1.5 이전에서는 여러 타입을 다루기 위해 인수나 반환값으로 Object 타입을 사용했었습니다.
                            하지만 Object 로 타입을 선언할 경우 반환된 Object 객체를 다시 원하는 타입으로 일일히 타입
                            변환을 해야 하며, <span className="text-danger">런타임 에러가 발생</span>할 가능성도 존재하게
                            됩니다.
                            <br />
                            추가된 제네릭(Generic)을 이용하면 코드를 실행하기전 컴파일 타임에 미리 에러를 찾아 알려주기
                            때문에 이런 실수를 방지를 할 수 있습니다.
                            (제네릭은 클래스나 메서드를 정의할때 타입 파라미터로 객체의 서브 타입을 지정해줌으로써,
                            잘못된 타입이 사용될 수 있는 문제를 컴파일 과정에서 제거하여 개발을 용이하게 해줍니다.)
                        </DdItem>
                        <DtItem>불필요한 캐스팅을 없애 성능 향상</DtItem>
                        <DdItem>
                            객체 배열을 클래스의 Object 배열 객체에 넣고, 배열 요소를 가져올때 반드시 다운 캐스팅
                            (down casting)을 통해 가져와야 하는데 이는 곧 추가적인 오버헤드가 발생하는 것과 같습니다.
                            <br />
                            반면 제네릭은 미리 타입을 지정 제한해 놓기 때문에 형 변환(Type Casting)의 번거로움을 줄일 수
                            있으며, 타입 겁사에 들어가는 메모리를 줄일 수 있고 더불어 가독성도 좋아집니다.
                        </DdItem>
                    </DlList>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="제네릭 사용 주의사항"
                >
                    <DlList>
                        <DtItem>제네릭 타입의 객체는 생성이 불가</DtItem>
                        <DdItem>
                            제네릭 타입 자체로 타입을 지정하여 객체를 생성하는 것은 불가능 합니다.
                            즉, <code>new</code> 연산자 뒤에 제네릭 타입 파라미터가 올 수 없습니다.
                        </DdItem>
                        <DtItem>static 멤버에 제네릭 타입이 올 수 없음</DtItem>
                        <DdItem>
                            <code>static</code> 변수의 데이터 타입으로 제네릭 타입 파라미터가 올 수 없습니다.
                            <br />
                            왜냐하면 <code>static</code> 멤버는 클래스가 동일하게 공유하는 변수로서 제네릭 객체가 생성되기도 전에 이미
                            자료 타입이 정해져 있어야 하기 때문입니다.
                        </DdItem>
                        <DtItem>제네릭으로 배열 선언 주의점</DtItem>
                        <DdItem>
                            제네릭 클래스 자체를 배열로 만들 수는 없지만, 제네릭 타입의 배열 선언은 허용됩니다.
                        </DdItem>
                    </DlList>
                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;