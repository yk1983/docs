import { Modal } from 'react-bootstrap';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter

const BsModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            scrollable
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    패키지가 다를 경우 public외에는 모두 접근이 불가능합니다.
                    만약, 상위 클래스를 상속받아 사용하는 경우에는 public과 protected만 접근이 가능합니다.
                </p>

                <Highlight
                    language="java"
                    codestring={[
                        "package package1;"
                    ,   ""
                    ,   "public class TestClass {"
                    ,   "    public int testPublic = 1;"
                    ,   "    protected int testProtected = 2;"
                    ,   "    int testDefault = 3;"
                    ,   "    private testPrivate = 4;"
                    ,   "    public void printTest() {"
                    ,   "        System.out.println(testPublic);"
                    ,   "        System.out.println(testProtected);"
                    ,   "        System.out.println(testDefault);"
                    ,   "        System.out.println(testPrivate);"
                    ,   "    }"
                    ,   "}"
                    ].join('\n')}
                />
                <Highlight
                    language="java"
                    codestring={[
                        "package package2;"
                    ,   ""
                    ,   "import Section1.accessModifier.TestClass;"
                    ,   ""
                    ,   "class AccessModifierEx {"
                    ,   "    public static void main(String[] args) {"
                    ,   "        TestClass test = new TestClass();"
                    ,   ""
                    ,   "        test.printTest();"
                    ,   ""
                    ,   "        System.out.println(test.testPublic);"
                    ,   "        // System.out.println(test.testProtected);"
                    ,   "        // System.out.println(test.testDefault);"
                    ,   "        // System.out.println(test.testPrivate);"
                    ,   "    }"
                    ,   "}"
                    ,   ""
                    ,   "class TestClass2 extends TestClass {"
                    ,   "    public void printTest() {"
                    ,   "        System.out.println(testPublic);"
                    ,   "        System.out.println(testProtected);"
                    ,   "        // System.out.println(testDefault);"
                    ,   "        // System.out.println(testPrivate);"
                    ,   "    }"
                    ,   "}"
                    ].join('\n')}
                />
            </Modal.Body>
            {/*<Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>*/}
        </Modal>
    );
}

export default BsModal;