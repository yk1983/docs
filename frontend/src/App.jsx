import { Routes, Route } from 'react-router-dom';
// Dashboard
import Main from 'pages/learn/Main';
// HTML
import HtmlTags from 'pages/learn/html/Tags';
import HtmlGlobalAttributes from 'pages/learn/html/GlobalAttributes';
import HtmlEvents from 'pages/learn/html/Events';
// Java
import JavaIntro from 'pages/learn/java/Intro';
import JavaDataType from 'pages/learn/java/DataType';
import JavaInteger from 'pages/learn/java/Integer';
import JavaFloating from 'pages/learn/java/Floating';
import JavaCharacters from 'pages/learn/java/Characters';
import JavaBoolean from 'pages/learn/java/Boolean';
import JavaCasting from 'pages/learn/java/Casting';
import JavaArrays from 'pages/learn/java/Arrays';
import JavaMultiDimensionalArray from 'pages/learn/java/MultiDimensionalArray';
import JavaConditional from 'pages/learn/java/Conditional';
import JavaIteration from 'pages/learn/java/Iteration';
import JavaControlFlow from 'pages/learn/java/ControlFlow';
import JavaOop from 'pages/learn/java/Oop';
import JavaClass from 'pages/learn/java/Classes';
import JavaConstructor from 'pages/learn/java/Constructor';
import JavaConstructorThis from 'pages/learn/java/ConstructorThis';
import JavaMethod from 'pages/learn/java/Method';
import JavaOverloading from 'pages/learn/java/Overloading';
import JavaInheritance from 'pages/learn/java/Inheritance';
import JavaInheritanceSuper from 'pages/learn/java/InheritanceSuper';
import JavaPolymorphism from 'pages/learn/java/Polymorphism';
import JavaAbstract from 'pages/learn/java/Abstract';
import JavaInterface from 'pages/learn/java/Interface';
import JavaOverriding from 'pages/learn/java/Overriding';
import JavaInnerClass from 'pages/learn/java/InnerClass';
import JavaGenerics from 'pages/learn/java/Generics';
import JavaCollectionFramework from 'pages/learn/java/Collection';
import JavaIterableIF from 'pages/learn/java/IterableIF';
import JavaCollectionIF from 'pages/learn/java/CollectionIF';
import JavaListIF from 'pages/learn/java/ListIF';
import JavaArrayList from 'pages/learn/java/ArrayList';
import JavaLinkedList from 'pages/learn/java/LinkedList';
import JavaStack from 'pages/learn/java/Stack';
import JavaQueueIF from 'pages/learn/java/Queue';
// JavaScript
import JsIntro from 'pages/learn/javascript/Intro';
// Spring
import SpringIntro from 'pages/learn/spring/Intro';
import SpringIOC from 'pages/learn/spring/IOC';
import SpringDI from 'pages/learn/spring/DI';
import SpringAOP from 'pages/learn/spring/AOP';
import SpringJPA from 'pages/learn/spring/JPA';
import SpringInterceptor from 'pages/learn/spring/Interceptor';
import SpringResolver from 'pages/learn/spring/Resolver';
// React
import ReactIntro from 'pages/learn/react/Intro';
import ReactStarted from 'pages/learn/react/GetStarted';
import ReactTypeScript from 'pages/learn/react/AddTypeScript';
import ReactBootstrap from 'pages/learn/react/AddBootstrap';
import ReactRouter from 'pages/learn/react/AddRouter';
import ReactComponent from 'pages/learn/react/Component';
import ReactHooks from 'pages/learn/react/Hooks';
import ReactUseState from 'pages/learn/react/UseState';
import ReactUseEffect from 'pages/learn/react/UseEffect';
import ReactUseRef from 'pages/learn/react/UseRef';
import ReactUseCallback from 'pages/learn/react/UseCallback';
import ReactUseMemo from 'pages/learn/react/UseMemo';
import ReactUseLayoutEffect from 'pages/learn/react/UseLayoutEffect';
// BPMN
import BpmnIntro from 'pages/learn/bpmn/Intro';
import BpmnEvent from 'pages/learn/bpmn/Events';
import BpmnActivitie from 'pages/learn/bpmn/Activities';
import BpmnGateway from 'pages/learn/bpmn/Gateways';
import BpmnDataObject from 'pages/learn/bpmn/DataObjects';
import BpmnFlow from 'pages/learn/bpmn/Flow';
import BpmnArtifact from 'pages/learn/bpmn/Artifact';
import BpmnSwimlane from 'pages/learn/bpmn/Swimlane';
// SQL
import OracleOnMacOS from 'pages/learn/sql/OracleOnMacOS'
import SQLJoin from 'pages/learn/sql/Join'
import SQLUnion from 'pages/learn/sql/Union'
// pages
import Contact from 'pages/Contact';
import Faq from 'pages/Faq';

import "highlight.js/styles/github.css";

const App = () => {
    return (
        <>
            <main id="main" className="main">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/html/ref-tags" element={<HtmlTags />} />
                    <Route path="/html/ref-standardattributes" element={<HtmlGlobalAttributes />} />
                    <Route path="/html/ref-eventattributes" element={<HtmlEvents />} />
                    <Route path="/javascript/intro" element={<JsIntro />} />
                    <Route path="/java/intro" element={<JavaIntro />} />
                    <Route path="/java/datatype" element={<JavaDataType />} />
                    <Route path="/java/integer" element={<JavaInteger />} />
                    <Route path="/java/floating" element={<JavaFloating />} />
                    <Route path="/java/characters" element={<JavaCharacters />} />
                    <Route path="/java/boolean" element={<JavaBoolean />} />
                    <Route path="/java/casting" element={<JavaCasting />} />
                    <Route path="/java/arrays" element={<JavaArrays />} />
                    <Route path="/java/multi-dimensional-arrays" element={<JavaMultiDimensionalArray />} />
                    <Route path="/java/constructor" element={<JavaConstructor />} />
                    <Route path="/java/constructor-this" element={<JavaConstructorThis />} />
                    <Route path="/java/iteration" element={<JavaIteration />} />
                    <Route path="/java/control-flow" element={<JavaControlFlow />} />
                    <Route path="/java/oop" element={<JavaOop />} />
                    <Route path="/java/inheritance" element={<JavaInheritance />} />
                    <Route path="/java/inheritance-super" element={<JavaInheritanceSuper />} />
                    <Route path="/java/polymorphism" element={<JavaPolymorphism />} />
                    <Route path="/java/abstract" element={<JavaAbstract />} />
                    <Route path="/java/interface" element={<JavaInterface />} />
                    <Route path="/java/overriding" element={<JavaOverriding />} />
                    <Route path="/java/inner-class" element={<JavaInnerClass />} />
                    <Route path="/java/classes" element={<JavaClass />} />
                    <Route path="/java/method" element={<JavaMethod />} />
                    <Route path="/java/overloading" element={<JavaOverloading />} />
                    <Route path="/java/conditional" element={<JavaConditional />} />
                    <Route path="/java/generics" element={<JavaGenerics />} />
                    <Route path="/java/collection" element={<JavaCollectionFramework />} />
                    <Route path="/java/iterable-interface" element={<JavaIterableIF />} />
                    <Route path="/java/collection-interface" element={<JavaCollectionIF />} />
                    <Route path="/java/list-interface" element={<JavaListIF />} />
                    <Route path="/java/array-list-class" element={<JavaArrayList />} />
                    <Route path="/java/linked-list-class" element={<JavaLinkedList />} />
                    <Route path="/java/stack-class" element={<JavaStack />} />
                    <Route path="/java/queue-interface" element={<JavaQueueIF />} />
                    <Route path="/spring/intro" element={<SpringIntro />} />
                    <Route path="/spring/inversion-of-control" element={<SpringIOC />} />
                    <Route path="/spring/dependency-injection" element={<SpringDI />} />
                    <Route path="/spring/aspect-oriented-programming" element={<SpringAOP />} />
                    <Route path="/spring/java-persistence-api" element={<SpringJPA />} />
                    <Route path="/spring/interceptor" element={<SpringInterceptor />} />
                    <Route path="/spring/resolver" element={<SpringResolver />} />
                    <Route path="/react/intro" element={<ReactIntro />} />
                    <Route path="/react/getstarted" element={<ReactStarted />} />
                    <Route path="/react/adding-typescript" element={<ReactTypeScript />} />
                    <Route path="/react/adding-bootstrap" element={<ReactBootstrap />} />
                    <Route path="/react/adding-router" element={<ReactRouter />} />
                    <Route path="/react/component" element={<ReactComponent />} />
                    <Route path="/react/hook" element={<ReactHooks />} />
                    <Route path="/react/useState" element={<ReactUseState />} />
                    <Route path="/react/useEffect" element={<ReactUseEffect />} />
                    <Route path="/react/useLayoutEffect" element={<ReactUseLayoutEffect />} />
                    <Route path="/react/useRef" element={<ReactUseRef />} />
                    <Route path="/react/useCallback" element={<ReactUseCallback />} />
                    <Route path="/react/useMemo" element={<ReactUseMemo />} />
                    <Route path="/bpmn/intro" element={<BpmnIntro />} />
                    <Route path="/bpmn/event" element={<BpmnEvent />} />
                    <Route path="/bpmn/activitie" element={<BpmnActivitie />} />
                    <Route path="/bpmn/gateway" element={<BpmnGateway />} />
                    <Route path="/bpmn/data-object" element={<BpmnDataObject />} />
                    <Route path="/bpmn/flow" element={<BpmnFlow />} />
                    <Route path="/bpmn/artifact" element={<BpmnArtifact />} />
                    <Route path="/bpmn/swimlane" element={<BpmnSwimlane />} />
                    <Route path="/sql/oracle-on-macos" element={<OracleOnMacOS />} />
                    <Route path="/sql/join" element={<SQLJoin />} />
                    <Route path="/sql/union" element={<SQLUnion />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<Faq />} />
                </Routes>
            </main>{/* End #main */}
        </>
    );
}

export default App;