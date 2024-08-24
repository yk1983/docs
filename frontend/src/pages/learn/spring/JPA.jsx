import { Helmet } from 'react-helmet-async';
import { Col, Image } from 'react-bootstrap';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { DlList } from 'components/List';
/**
 * JPA.jsx
 * @description
 *
 * @author  : yongkim
 * @since   : 8/19/24
 * @param   :
 * @version : 1.0.0
 */
const SectionRender = () => {
    const
        title = "JPA(Java Persistence Api)",
        breadcrumbs = [ "Learn", "Spring", "JPA" ];

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
                    title="JPA와 MyBatis"
                    subtitle="JPA(Java Persistence Api)와 MyBatis"
                >
                    <BsCardText>
                        웹 애플리케이션을 위한 백엔드로 가장 많이 사용되는 프레임워크로는 Java 기반의 Spring 또는 Springboot를
                        사용합니다.
                        {' '}<span className="text-danger">Spring은 대규모 기업환경에서 안정성과 신뢰성이 검증된 프레임워크</span>
                        이기 때문이며, 많은 기업에서 스프링을 사용하여 안정적인 서비스를 운영하고 있습니다.
                    </BsCardText>

                    <BsCardText>
                        이때, 백엔드에서 데이터를 저장하고 조회하려면 데이터베이스를 활용해야 하는데, 백엔드에서 데이터베이스를
                        사용하는 프레임워크로 가장 많이 쓰이는 기술이 <span className="text-danger">MyBatis</span>와
                        {' '}<span className="text-danger">JPA</span>입니다.
                    </BsCardText>

                    <BsCardText>
                        Java 기반의 Spring 또는 Springboot에서 데이터베이스를 사용하려면 두 가지 기술 중 하나를 사용해야
                        하기 때문에 Java 백엔드 개발자는 MyBatis 와 JPA를 반드시 알아야 합니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="SQL Mapper와 ORM(Object Relational Mapping)"
                >
                    <BsCardText>
                        데이터베이스 접속을 편하게 사용하기 위해 <span className="text-danger">SQL Mapper</span> 기술과,
                        {' '}<span className="text-danger">ORM(Object Relational Mapping)</span> 기술을 제공합니다.
                        둘 다 DB와의 연동, 저장을 위한 기술이며, SQL Mapper는 <span className="text-danger">개발자가 작성한
                        SQL 실행 결과를 객체에 매핑</span>시켜주는 프레임워크이며, ORM은 <span className="text-danger">
                        객체와 DB의 데이터를 자동으로 매핑</span>시켜주는 프레임워크를 말합니다.
                    </BsCardText>

                    <BsCardText>
                        <span className="text-danger">SQL Mapper 기술을 제공하는 것이 MyBatis</span>이며,
                        {' '}<span className="text-danger">ORM 기술을 제공하는 것이 JPA(Java Persistence Api)</span>입니다.
                        두 가지 기술은 모두 데이터를 관계형 데이터베이스에 저장, 즉 영속화(Persistence) 시킨다는 측면에서는
                        동일하지만, 서로 다른 접근 방식을 채택하고 있습니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="MyBatis"
                    image={{
                        variant : 'bottom'
                    ,   src : '/assets/img/spring/mybatis.jpg'
                    }}
                >
                    <BsCardText>
                        MyBatis 프레임워크는 반복적인 JDBC 프로그래밍을 단순화하여, 불필요한 Boilerplate 코드를 제거하고,
                        Java 소스코드에서 SQL 문을 분리하여 별도의 XML 파일로 저장하고, 이 둘을 서로 연결시켜주는 기능을
                        제공합니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="MyBatis의 특징"
                    subtitle="Java 코드와 SQL 매핑"
                    image={{
                        variant : 'bottom'
                    ,   src : '/assets/img/spring/JDBC를_활용한_DB_데이터_사용과정.jpg'
                    }}
                >
                    <BsCardText>
                        MyBatis를 사용하면, MyBatis 내부에서 그러한 Boilerplate 코드가 구현되어 있고, MyBatis에서
                        Java 메소드와 SQL 간에 매핑을 시켜서 <span className="text-danger">개발자는 Java 메소드 선언과
                        SQL 문만 만들면 MyBatis 가 자동으로 그 둘 간을 연결</span>시켜 주게 됩니다.
                    </BsCardText>

                    <BsCardText>
                        SQL 문장이 Java 코드 내에 들어가 있어서 수정하기도 힘들고, 보기도 힘들었는데, <span className="text-danger">
                        SQL 문을 별도로 Java 코드에서 분리해두어서 관리가 편하게 하였으며, 분리된 SQL 문을 MyBatis 가
                        찾아서 실행해 주는 기능</span>을 합니다.
                    </BsCardText>

                    <BsCardText>
                        MyBatis 프레임워크는 반복적인 JDBC 프로그래밍을 단순화하여, 불필요한 Boilerplate 코드를 제거하고,
                        Java 소스코드에서 SQL 문을 분리하여 별도의 XML 파일로 저장하고, 이 둘을 서로 연결시켜주는 기능을 제공합니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="MyBatis의 특징"
                    subtitle="동적 SQL 생성"
                >
                    <BsCardText>
                        MyBatis는 Boilerplate 코드 제거 및 SQL 문 분리 외에도 동적인 SQL(Dynamic SQL) 생성 기능을 제공하여
                        프로그램 실행 중에 입력되는 파라미터에 따라 서로 다른 SQL 문을 동적으로 생성해 내는 기능을 제공해
                        줍니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="MyBatis 장점"
                >
                    <DlList
                        items={[
                            {
                                term : 'SQL 직접 제어'
                            ,   description : [
                                    'MyBatis는 SQL에 대한 직접적인 제어를 제공하므로, 개발자가 SQL을 직접 작성하고 최적화할 수 있습니다.'
                                ,   '또한 복잡한 쿼리 또는 특정 데이터베이스에 최적화된 쿼리 작성이 필요한 경우에 적합합니다.'
                                ].join(' ')
                            }
                        ,   {
                                term : '학습 용이성'
                            ,   description : [
                                    'SQL을 잘 아는 경우에, JPA에 비해 학습이 용이하고 쉽게 사용이 가능합니다.'
                                ,   'SQL을 직접 제어할 수 있다는 것은 DB에 적합한 성능 좋은 SQL문을 만들어서 사용할 수도 있고,'
                                ,   '또, 통계/분석용 데이터 추출을 위해 복잡한 쿼리를 만들어야 하는 경우에 자유롭게 테이블 간'
                                ,   'JOIN 등을 통해서 원하는 데이터를 추출할 수 있어서 좋습니다.'
                                ].join(' ')
                            }
                        ]}
                    />
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="MyBatis 단점"
                >
                    <DlList
                        items={[
                            {
                                term : 'CRUD 단순 작업에 반복 수작업 필요'
                            ,   description : [
                                    'SQL을 직접 만들어야 하므로 CRUD 같은 기본적인 코드에 대해서 단순한 코드를 계속 만들어야 하는 불편한 점이 있습니다.'
                                ,   '단순한 코드를 반복해서 만들면 개발 생산성이 떨어지고, 코드에 대한 유지보수도 힘들어집니다.'
                                ].join(' ')
                            }
                        ,   {
                                term : '데이터베이스에 종속적'
                            ,   description : [
                                    '특정 DB를 기준으로 SQL 문이 작성되어 있어서, DB를 변경하려면 SQL 문을 전체 다 확인 후 수정해야 합니다.'
                                ].join(' ')
                            }
                        ]}
                    />
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="JPA란??"
                    subtitle="JPA(Java Persistence API)"
                    image={{
                        variant : 'bottom'
                    ,   src : '/assets/img/spring/jpa.jpg'
                    }}
                >
                    <BsCardText>
                        MyBatis는 개발자가 작성한 SQL 문을 Java 객체로 자동으로 매핑 시켜주는  프레임워크입니다.
                        그렇다면 JPA는 어떤 기술일까요?
                    </BsCardText>

                    <BsCardText>
                        JPA는 이보다 한발 더 나아가서 <span className="text-danger">SQL 문까지 자동으로 생성해 주고,
                        DB 데이터와 Java 객체를 매핑</span>시켜주는 기술입니다.
                        SQL 문장 작성이 필요 없으니 MyBatis보다 한 단계 더 자동화되어 더 편리함과 반복작업을 없애줍니다.
                    </BsCardText>

                    <BsCardText>
                        JPA(Java Persistence API)는 <span className="text-danger">Java 객체와 관계형 데이터베이스 간의
                        매핑을 위한 API</span>입니다.
                        JPA는 ORM(Object-Relational Mapping)을 구현하는 자바 표준 스펙으로, 개발자가 객체지향 프로그래밍
                        언어에서 사용하는 객체 모델과 관계형 데이터베이스의 테이블 간의 매핑을 자동으로 처리해 줍니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="ORM 매핑과정"
                    image={{
                        variant : 'bottom'
                    ,   src : '/assets/img/spring/ORM_매핑과정.jpg'
                    }}
                >
                    <BsCardText>
                        Java 객체인 Student 클래스가 ORM 매핑을 통해서 DB 테이블에 영속화(Persistence) 되고,
                        또다시 영속화된 데이터가 다시 Java 객체로 변환하는 과정을 나타내고 있습니다.
                        ORM은 이렇게 Java객체를 DB 테이블로 자동으로 영속화 시켜주는 기술을 의미합니다.
                    </BsCardText>

                    <BsCardText>
                        이러한 ORM 기술을 실제 구현해서 만들어진 프레임워크가 Hibernate입니다.
                        JPA 스펙을 구현한 기술은 Hibernate 외에도 EcliseLink, DataNucleus 등이 있지만, 현재 사실상
                        {' '}<span className="text-danger">표준(de facto standard)으로 널리 사용되는 것은 Hibernate</span>입니다.
                    </BsCardText>

                    <BsCardText>
                        Java와 DB 데이터 간의 매핑을 자동화해주어서 개발자는 SQL 문을 작성할 필요가 없어지고,
                        DB가 바뀌어도 DB에 따라 새로운 SQL을 작성할 필요가 없이 Hibernate에서 DB에 맞는 적합한 SQL 문을 생성해 줍니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="JPA가 생겨난 이유?"
                >
                    <BsCardText>
                        MyBatis와 같이 SQL 문과 Java 코드를 연계하는 접근 방식이 아니라 <span className="text-danger">
                        Java 객체와 DB 엔티티(테이블) 자체를 그대로 매핑</span> 해서 처리할 수 있는 접근 방식을 채택한
                        새로운 기술표준이 등장했는데, 이것이 바로 <span className="text-danger">JPA(Java Persistence API)
                        </span>입니다.
                    </BsCardText>

                    <BsCardText>
                        데이터베이스는 데이터 중심의 구조를 가지고 있고, Java는 객체지향적인 구조로 관리되기 때문에 둘
                        사이에 데이터를 직접적으로 쉽게 가져오거나 쉽게 저장하는 방법이 존재하지 않았습니다.
                        이 둘 사이를 손쉽게 변환이 된다면 개발이 용이해질 것입니다.
                    </BsCardText>

                    <BsCardText>
                        JPA의 접근 방식은 이런 ORM(Object-Relational Mapping) 기술을 의미합니다.
                        즉, <span className="text-danger">객체와 데이터베이스 간의 매핑 기술을 의미</span>하며,
                        Java 개발자가 좀 더 객체지향 관점에서 개발할 수 있게 하고, 개발을 용이하게 해주어서 DB와 Java
                        간의 불일치를 해소해 줍니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="JPA 특징"
                >
                    <BsCardText>
                        MyBatis와 다르게 SQL 문의 작성이 불필요하며 ORM 내부적으로 java 메소드에 적합한 SQL 문이 자동으로
                        생성이 되어 실행되게 됩니다.
                        Java 개발자는 클래스만 만들어서 사용하고, ORM 프레임워크가 자동으로 관련된 SQL을 만들어 줍니다.
                        <br />
                        즉, Java 개발자는 <code>jpa.persist(member)</code>라고 사용하면, Insert SQL 문이 자동으로 생성되어 DB에 저장이 됩니다.
                        <br />
                        또한, <code>jpa.find(memberId)</code>라고 사용하면, 자동으로 Select SQL 문이 자동으로 생성되어 DB에 조회가 됩니다.
                    </BsCardText>

                    <BsCardText>
                        MyBatis 와 JPA 모두 DB를 사용할 때 번거로운 반복작업을 없애줍니다.
                        MyBatis 는 SQL 문을 Java와 분리하여 별도 파일로 관리할 수 있어서, SQL 개발과 유지 보수에 용이하고,
                        JPA는 SQL 문을 아예 만들 필요가 없기 때문에 더욱 자동화되고 반복작업을 더욱 줄여줍니다.
                    </BsCardText>

                    <BsContainer>
                        <Col lg={ 6 }>
                            <Image
                                src={ process.env.PUBLIC_URL + '/assets/img/spring/jpa_insert_sql.jpg' }
                                fluid
                            />
                        </Col>

                        <Col lg={ 6 }>
                            <Image
                                src={ process.env.PUBLIC_URL + '/assets/img/spring/jpa_select_sql.jpg' }
                                fluid
                            />
                        </Col>
                    </BsContainer>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="JPA 장점"
                >
                    <DlList
                        items={[
                            {
                                term : '표준화된 인터페이스'
                            ,   description : [
                                    'JPA는 자바에서의 ORM을 위한 표준 인터페이스를 제공합니다.'
                                ,   'Hibernate, EclipseLink, Apache OpenJPA 등의 구현체가 JPA 표준을 따릅니다.'
                                ,   '\n\nJava의 표준을 이용하므로 특정 제품에 종속되지 않고, 개발자 간에 협업이 용이하고, 일관된 방식으로 개발을 할 수 있습니다.'
                                ].join(' ')
                            }
                        ,   {
                                term : '자동 매핑으로 개발 및 유지보수성 향상'
                            ,   description : [
                                    'JPA는 객체와 데이터베이스 간의 자동 매핑을 지원합니다.'
                                ,   '개발자가 별도의 SQL 작성 없이도 데이터베이스와 객체 간의 매핑이 이루어집니다.'
                                ].join(' ')
                            }
                        ,   {
                                term : '객체 지향적인 접근 지원'
                            ,   description : [
                                    'JPA는 객체 지향적인 개발에 중점을 둡니다. 테이블 간의 연관 관계와 객체 간의 연관 관계를 쉽게 다룰 수 있습니다.'
                                ].join(' ')
                            }
                        ,   {
                                term : 'DBMS에 독립적'
                            ,   description : [
                                    '사용하는 DB 종류에 관계없이 JPA에서 자동으로 적합한 SQL Dialect(방언)를 만들어 주기때문에, '
                                ,   'DB가 변경되어도 SQL 문을 다시 작성할 필요가 없습니다.'
                                ,   'DB 마이그레이션을 해야 할 경우에 MyBatis로 개발된 시스템과 비교하면 손쉽게 설정 변경만으로 DB 변경이 가능합니다.'
                                ].join(' ')
                            }
                        ]}
                    />
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="JPA 단점"
                >
                    <DlList
                        items={[
                            {
                                term : '높은 학습곡선'
                            ,   description : [
                                    'JPA 관련 다양한 스펙과 작성법(@Entitity, @Table, @Column, @Id, @OneToMany, @ManyToOn)을 학습해야 하고,'
                                ,   '\n또 JPA 적용으로 생기는 다양한 이슈, 즉시 로딩(EAGER LOADING), 지연 로딩(LASY LOADING), 영속성 전이(CascadeType), 복합키 매핑(@EmbededId, @IdClass) 등에 대한 해결 방법을 익혀야 합니다.'
                                ,   '\nMyBatis에 비해 배우기가 어렵습니다.'
                                ].join(' ')
                            }
                        ,   {
                                term : '복잡한 SQL 생성의 어려움'
                            ,   description : [
                                    '일반적으로 시스템을 개발하면 단순한 CRUD와 같은 기능도 많이 있지만, 통계 또는 분석과 같은 화면과 기능도 개발이 필요합니다.'
                                ,   '이때는 복잡한 쿼리를 만들어야 하는데 여러 테이블을 Join 해서 데이터 결과를 가져와야 하는 경우에, JPA로는 복잡한 쿼리를 만드는 데 용이하지 않습니다.'
                                ].join(' ')
                            }
                        ,   {
                                term : '성능에 대한 고려 필요'
                            ,   description : [
                                    'JPA에 의해 자동으로 SQL이 만들어지다 보니, DB의 특성(index, join 등)을 이해하고 DB에 맞는 SQL을 직접 튜닝해서 만들면 성능이 훨씬 뛰어날 수 있으나,'
                                ,   '자동화된 SQL 문으로 인해서 데이터 조회 성능이 떨어질 가능성이 있습니다.'
                                ,   '일반적인 간단한 CRUD에는 큰 문제가 없으나, 데이터가 많아지고, 테이블 간 Join이 많아지는 경우,'
                                ,   'SQL 문을 어떻게 튜닝하는 가로 인한 성능이 크게 차이가 날 여지가 있으므로, JPA 사용 시 이러한 부분을 주의해서 고려할 필요가 있습니다.'
                                ].join(' ')
                            }
                        ]}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="Mybatis 와 JPA 선택 기준"
                >
                    <BsCardText>
                        그러면 둘 사이의 선택 기준은 어떻게 하는 것이 좋을까요?
                        MyBatis와 JPA는 DB와 Java 프로그램간의 데이터 저장, 조회를 위해 사용되지만, 각각의 특징과 사용
                        시나리오에 따라 선택해야 합니다.
                    </BsCardText>

                    <BsCardText>
                        <span className="text-danger">복잡한 쿼리와 SQL 제어가 필요한 경우는 MyBatis</span>로 개발할 수 있습니다.
                        기존 SQL 경험이 풍부하거나, 특정 데이터베이스에 최적화된 SQL 작성이 필요한 경우는 MyBatis를 선택할 수 있습니다.
                    </BsCardText>

                    <BsCardText>
                        <span className="text-danger">간단한 매핑 및 객체 지향적인 접근이 필요한 경우는 JPA가 SQL작성
                        등의 반복적인 부분을 해결</span>해 줍니다.
                        표준화된 인터페이스와 자동 매핑이 중요하며, 다양한 데이터베이스에 대응해야 하는 경우는 JPA를
                        선택하면 DB가 변경되더라도 DB에 종속되지 않고 손쉽게 Migration이 가능합니다.
                    </BsCardText>

                    <BsCardText>
                        물론, 실제 선택은 프로젝트의 특성, 개발자의 선호도, 팀의 스킬셋 등을 고려하여 이루어져야 합니다.
                        MyBatis 또는 JPA 중 하나를 선택하거나 때로는 <span className="text-danger">두 기술을 혼용하여 사용</span>
                        하는 것도 가능합니다.
                    </BsCardText>
                </BsCard>
            </BsContainer>
        </>
    );
};
 
export default SectionRender;