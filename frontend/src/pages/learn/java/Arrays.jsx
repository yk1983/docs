import { Helmet } from 'react-helmet-async';
import { Image } from 'react-bootstrap';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import Note from 'components/Note';
import Highlight from 'components/ExtHighlight';

const SectionRender = () => {
    const
        title = "배열(Arrays)",
        breadcrumbs = [ "Learn", "Java", "Arrays" ];

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
                    title="배열"
                    subtitle="Arrays"
                >
                    <BsCardText>
                        어떤 값을 저장하기 위해서는 변수를 사용합니다.
                        하지만, 변수는 하나의 값만 저장할 수 있는 단점이 존재합니다.
                        <br />
                        배열은 변수의 단점을 해결할 수 있는 수단으로, 동일한 타입의 값들을 하나의 묶음으로 저장한 자료
                        구조입니다.
                        즉, 여러 값들이 같은 의미를 지니면서 서로 연관성이 있을 때, 이들을 하나의 덩어리로 묶을 수 있습니다.
                        이렇게 묶인 <span className="text-primary">데이터들의 집합을 배열</span>이라 합니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="배열의 선언"
                    subtitle="선언"
                >
                    <BsCardText>
                        배열을 사용하기 위해서는 우선 배열 변수를 선언해야 합니다.
                        대괄호(<code>[]</code>)는 배열 변수를 선언하는 기호로 사용되는데, 타입 뒤에 붙을 수도 있고 변수 뒤에 붙을 수도 있습니다.
                        타입은 배열에 저장될 데이터의 타입을 말합니다.
                        <br />
                        다음은 각 타입별로 배열을 선언하는 예입니다.
                        배열 변수 선언은 다음과 같이 두 가지 형식으로 작성할 수 있습니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "int[] intArray;"
                        ,   "double[] doubleArray;"
                        ,   "String[] strArray;"
                        ,   "또는"
                        ,   "int intArray[];"
                        ,   "double doubleArray[];"
                        ,   "String strArray[];"
                        ].join('\n')}
                    />

                    <BsCardText>
                        배열 변수는 참조 변수에 속합니다.
                        배열도 객체이므로 힙 영역에 생성되고 배열 변수는 힙 영역의 배열 객체를 참조하게 됩니다.
                        만일 참조할 배열 객체가 없다면 배열 변수는 <code>null</code> 값으로 초기화될 수 있습니다.
                        <br />
                        만약 배열 변수가 null 값을 가진 상태에서 <code>변수[인덱스]</code>로 값을 읽거나 저장하게 되면
                        {' '}<code>NullPointerException</code> 이 발생합니다.
                        배열을 생성하고 배열 변수가 참조하는 상태에서 값을 저장하거나 읽어야 합니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="배열의 생성"
                    subtitle="값 목록으로 생성"
                >
                    <BsCardText>
                        값의 목록이 있다면 다음과 같이 간단하게 배열 객체를 생성할 수 있습니다.
                        <br />
                        중괄호(<code>&#123;&#125;</code>)는 주어진 값들을 항목으로 가지는 배열 객체를 힙에 생성하고, 배열 객체의
                        주소 값을 리턴합니다.
                        배열 변수는 리턴된 주소 값을 저장함으로써 참조가 이루어집니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "// 타입[] 변수 = { 값0, 값1, 값2, 값3, … };"
                        ,   "String[] animals = { “고양이”, “강아지”, “송아지” };"
                        ].join('\n')}
                    />

                    <BsCardText>
                        배열 변수를 미리 선언한 후 값 목록들이 나중에 결정되는 상황이라면 다음과 같이 <code>new</code>{' '}
                        연산자를 사용해서 값 목록을 지정해주면 됩니다.
                        <br />
                        <code>new</code> 연산자 바로 뒤에는 배열 변수 선언에서 사용한 <code>타입[]</code> 를 붙여주고 중괄호
                        (<code>&#123;&#125;</code>)에는 값들을 나열해줍니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "String[] animals = null;"
                        ,   "animals = new String[] { “고양이”, “강아지”, “송아지” };"
                        ].join('\n')}
                    />
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="배열의 생성"
                    subtitle="new 연산자로 생성"
                >
                    <BsCardText>
                        값의 목록을 가지고 있지 않지만, 향후 값들을 저장할 배열을 미리 만들고 싶다면 <code>new</code> 연산자로
                        다음과 같이 배열 객체를 생성할 수 있습니다.
                        <br />
                        길이는 배열이 저장할 수 있는 값의 개수를 말합니다.
                        이미 배열 변수가 선언된 경우에도 new 연산자로 배열을 생성할 수 있습니다.
                    </BsCardText>

                    <Highlight
                        header="길이가 3인 int[] 배열을 생성"
                        language="java"
                        codestring={[
                            "// 타입[] 변수 = new 타입[길이];"
                        ,   "String animals = new String[3];"
                        ,   ""
                        ,   "또는"
                        ,   ""
                        ,   "// 타입[] 변수 = null;"
                        ,   "// 변수 = new 타입[길이];"
                        ,   "String animals = null"
                        ,   "animals = new String[3];"
                        ].join('\n')}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="배열의 초기화"
                    subtitle="초기화"
                >
                    <BsCardText>
                        new 연산자로 배열을 처음 생성할 경우 배열은 자동적으로 기본값으로 초기화됩니다.
                    </BsCardText>

                    <BsCardText>
                        학생 30명의 점수를 저장할 배열을 다음과 같이 생성한다고 가정해보겠습니다.
                        <br />
                        <code>scores</code> 배열은 <code>int</code> 배열이므로 다음과 같이 <code>scores[0] ~ scores[29]</code>
                        까지 모두 기본값 <code>0</code> 으로 초기화됩니다.
                        <br />
                        만약 <code>String</code> 배열을 생성했다면 <code>names</code> 배열의 경우 <code>names[0] ~ names[29]</code>
                        까지 모두 <code>null</code> 값으로 초기화됩니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={["int[] scores = new int[30];"]}
                    />

                    <Image
                        src={ process.env.PUBLIC_URL + '/assets/img/java/init_number_arrays.png' }
                        fluid
                    />

                    <Highlight
                        language="java"
                        codestring={["String[] scores = new String[30];"]}
                    />

                    <Image
                        src={ process.env.PUBLIC_URL + '/assets/img/java/init_string_arrays.png' }
                        fluid
                    />
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="배열 값 저장"
                    subtitle="변수[인덱스] = 값;"
                >
                    <BsCardText>
                        배열이 생성되고 나서 특정 인덱스 위치에 새로운 값을 저장하려면 다음과 같이 대입 연산자를 사용하면 됩니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "// 변수[인덱스] = 값;"
                        ,   ""
                        ,   "int[] scores = new int[3];"
                        ,   "scores[0] = 83;"
                        ,   "scores[1] = 90;"
                        ,   "scores[2] = 75;"
                        ].join('\n')}
                    />
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="배열의 길이 구하기"
                    subtitle="length"
                >
                    <BsCardText>
                        배열은 보통 for 문과 함께 사용합니다.
                        for 문에 배열을 사용할 때에는 배열의 길이를 알아야 합니다.
                        왜냐하면 배열의 길이만큼 for 문을 반복하기 위해서 <code>length</code>를 사용하면 됩니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "class ArraysForEx {"
                        ,   "    public static void main(String[] args) {"
                        ,   "        String[] weeks = {\"월\", \"화\", \"수\", \"목\", \"금\", \"토\", \"일\"};"
                        ,   "        for (int i = 0; i < weeks.length; i++) {"
                        ,   "        System.out.println(weeks[i]);"
                        ,   "    }"
                        ,   "}"
                        ].join('\n')}
                    />

                    <Note
                        variant="danger"
                        title="ArrayIndexOutOfBoundsException"
                        content={[
                            "선언된 배열의 길이보다 큰 인덱스를 사용하는 경우 다음과 같이 오류가 발생할 수 있습니다."
                        ,   "\nSystem.out.println(weeks[7]);  // 여덟 번째 배열값이 없으므로 ArrayIndexOutOfBoundsException 오류 발생"
                        ].join(' ')}
                    />
                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;