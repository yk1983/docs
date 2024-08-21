import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList } from 'components/List';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter
/**
 * Resolver.jsx
 * @description
 *
 * @author  : yongkim
 * @since   : 2024. 8. 21.
 * @param   :
 * @version : 1.0.0
 */
const SectionRender = () => {
    const
        title = "리졸버(Resolver)",
        breadcrumbs = [ "Learn", "Spring", "Resolver" ];

    return (
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
                    title="리졸버"
                    subtitle="Resolver"
                >
                    <BsCardText>
                        <span className="text-primary">리졸버(Resolver)</span>의 사전적 의미는 "해결하다"입니다.
                        어떤 문제를 해결하거나 값을 찾아내기 위해 사용되는 구성 요소나 알고리즘을 가리킵니다.
                    </BsCardText>

                    <BsCardText>
                        스프링에서의 리졸버는 요청 처리 과정에서 <span className="text-primary">어떤 객체나 데이터를
                        찾아내거나 변환하는 역할을 수행</span>하는 인터페이스입니다.
                    </BsCardText>

                    <UlList
                        header="리졸버의 종류"
                        items={[
                            "ViewResolver"
                        ,   "HandlerMethodArgumentResolver"
                        ,   "ContentNegotiationConfigurer"
                        ,   "LocaleResolver"
                        ,   "MultipartResolver"
                        ]}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="ViewResolver"
                >
                    <BsCardText>
                        <code>ViewResolver</code>는 컨트롤러에서 반환한 뷰 이름을 실제 뷰 객체로 변환하는 역할을 합니다.
                        스프링부트는 <code>InternalResourceViewResolver</code>를 제공하며, 이를 통해 JSP 파일과 같은 뷰를
                        생성할 수 있습니다.
                        또한, <code>Thymeleaf</code>나 <code>FreeMarker</code>와 같은 템플릿 엔진을 사용하기 위해 각각의 ViewResolver를 등록하여
                        사용할 수도 있습니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "@Configuration"
                        ,   "public class MyWebMvcConfigurer implements WebMvcConfigurer {"
                        ,   "    @Bean"
                        ,   "    public ViewResolver viewResolver() {"
                        ,   "        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();"
                        ,   "        viewResolver.setPrefix(\"/WEB-INF/views/\");"
                        ,   "        viewResolver.setSuffix(\".jsp\");"
                        ,   "        return viewResolver;"
                        ,   "    }"
                        ,   "}"
                        ].join('\n')}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="HandlerMethodArgumentResolver"
                >
                    <BsCardText>
                        <code>HandlerMethodArgumentResolver</code>는 컨트롤러 메서드의 파라미터를 변환하는 데 사용됩니다.
                        스프링부트는 다양한 HandlerMethodArgumentResolver를 합니다.
                        예를 들어, <code>@RequestParam, @RequestBody, @PathVariable</code> 등의 어노테이션을 사용하여
                        파라미터를 변환할 수 있습니다.
                        또한 사용자가 직접 커스텀 HandlerMethodArgumentResolver를 작성하여 등록할 수도 있습니다.
                    </BsCardText>

                    <BsCardText>
                        HandlerMethodArgumentResolver는 <code>DispatcherServlet</code>와 함께 동작하여 클라이언트의
                        요청을 처리합니다.
                        DispatcherServlet은 클라이언트의 요청을 처리하기 위해 컨트롤러 메서드를 호출하고,
                        HandlerMethodArgumentResolver는 컨트롤러 메서드의 파라미터를 HTTP 요청 파라미터로 변환합니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "public class MyCustomArgumentResolver implements HandlerMethodArgumentResolver {"
                        ,   "    @Override"
                        ,   "    public boolean supportsParameter(MethodParameter parameter) {"
                        ,   "        return parameter.getParameterType().equals(MyCustomObject.class);"
                        ,   "    }"
                        ,   ""
                        ,   "    @Override"
                        ,   "    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer,"
                        ,   "        NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {"
                        ,   "        HttpServletRequest request = (HttpServletRequest) webRequest.getNativeRequest();"
                        ,   "        String paramValue = request.getParameter(\"myCustomParam\");"
                        ,   "        return new MyCustomObject(paramValue);"
                        ,   "    }"
                        ,   "}"
                        ,   ""
                        ,   "@Configuration"
                        ,   "public class MyWebMvcConfigurer implements WebMvcConfigurer {"
                        ,   "    @Override"
                        ,   "    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {"
                        ,   "        argumentResolvers.add(new MyCustomArgumentResolver());"
                        ,   "    }"
                        ,   "}"
                        ].join('\n')}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="ContentNegotiationConfigurer"
                >
                    <BsCardText>
                        <code>ContentNegotiationConfigurer</code>는 HTTP 요청의 Accept 헤더에 따라 적절한 미디어 타입을
                        선택하는 데 사용됩니다.
                        스프링부트는 <code>DefaultServletHttpRequestHandler</code>를 사용하여 정적 리소스를 제공하며,
                        <code>ContentNegotiationConfigurer</code>를 사용하여 <code>JSON, XML</code> 등 다양한 미디어
                        타입을 처리할 수 있습니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "@Configuration"
                        ,   "public class MyWebMvcConfigurer implements WebMvcConfigurer {"
                        ,   "    @Override"
                        ,   "    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {"
                        ,   "        configurer"
                        ,   "            .defaultContentType(MediaType.APPLICATION_JSON)"
                        ,   "            .mediaType(\"json\", MediaType.APPLICATION_JSON)"
                        ,   "            .mediaType(\"xml\", MediaType.APPLICATION_XML);"
                        ,   "    }"
                        ,   "}"
                        ].join('\n')}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="LocaleResolver"
                >
                    <BsCardText>
                        <code>LocaleResolver</code>는 언어 설정에 따라 애플리케이션의 로컬을 설정하는 데 사용됩니다.
                        스프링부트는 <code>AcceptHeaderLocaleResolver</code>를 제공하며, HTTP 요청의 Accept-Language
                        헤더에 따라 로컬을 설정합니다.
                        또한, <code>CookieLocaleResolver</code>나 <code>SessionLocaleResolver</code>와 같은 다른
                        LocaleResolver를 등록하여 사용할 수도 있습니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "@Configuration"
                        ,   "public class MyWebMvcConfigurer implements WebMvcConfigurer {"
                        ,   "    @Bean"
                        ,   "    public LocaleResolver localeResolver() {"
                        ,   "        CookieLocaleResolver localeResolver = new CookieLocaleResolver();"
                        ,   "        localeResolver.setCookieName(\"myLocaleCookie\");"
                        ,   "        localeResolver.setDefaultLocale(Locale.ENGLISH);"
                        ,   "        return localeResolver;"
                        ,   "    }"
                        ,   "}"
                        ].join('\n')}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="MultipartResolver"
                >
                    <BsCardText>
                        <code>MultipartResolver</code>는 HTTP 요청에서 멀티파트 파일을 처리하는 데 사용됩니다.
                        스프링부트는 <code>StandardServletMultipartResolver</code>를 제공하며, 파일 업로드를 위해 사용됩니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "@Configuration"
                        ,   "public class MyWebMvcConfigurer implements WebMvcConfigurer {"
                        ,   "    @Bean"
                        ,   "    public MultipartResolver multipartResolver() {"
                        ,   "        CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();"
                        ,   "        multipartResolver.setMaxUploadSize(100000);"
                        ,   "        return multipartResolver;"
                        ,   "    }"
                        ,   "}"
                        ].join('\n')}
                    />
                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;