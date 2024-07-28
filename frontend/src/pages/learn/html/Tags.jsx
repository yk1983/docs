import { Helmet } from 'react-helmet-async';
import { Row, Col, Card, Table } from 'react-bootstrap';
import { BsSubtract } from 'react-icons/bs';

import PageTitle from 'layouts/PageTitle';

const TagList = () => {
    const data = [
        { tag : '<!--...-->', description : '주석을 정의합니다.' },
        { tag : '<!DOCTYPE> ', description : '문서 유형을 정의합니다.' },
        { tag : '<a>', description : '하나의 페이지에서 다른 페이지를 연결할 때 사용하는 하이퍼링크(hyperlink)를 정의할 때 사용합니다. href 속성이 없다면, target, download, rel, rev, hreflang, type, referrerpolicy 속성들도 사용할 수 없습니다.' },
        { tag : '<abbr>', description : '단어의 축약형(abbreviation)이나 머리글자로만 된 단어(acronym)를 정의할 때 사용합니다.' },
        { tag : '<acronym>', description : '머리글자로만 된 단어(acronym)를 정의할 때 사용합니다. HTML5에서는 지원되지 않습니다. <abbr>를 사용하십시오.' },
        { tag : '<address>', description : '문서나 글의 저자 또는 회사와 연락할 수 있는 정보를 명시할 때 사용합니다.' },
        { tag : '<applet>', description : '문서에 포함되는 애플릿(웹 페이지에 포함되어 작은 기능을 수행하는 프로그램)을 정의할 때 사용합니다. HTML5에서는 지원되지 않습니다. <embed> 또는 <object>를 사용하십시오.'},
        { tag : '<area>', description : '이미지 맵(image-map)에서 하이퍼링크가 연결될 영역을 정의할 때 사용합니다.' },
        { tag : '<article>', description : '해당 문서나 페이지 또는 사이트와는 완전히 독립적으로 구성할 수 있는 요소를 정의할 때 사용합니다. (포럼(forum) 포스트, 블로그 포스트, 보도기사, 논평(comment) 등)' },
        { tag : '<aside>', description : '페이지의 다른 콘텐츠들과 약간의 연관성을 가지고 있지만, 해당 콘텐츠들로부터 분리시킬 수 있는 콘텐츠로 구성된 페이지 영역을 정의할 때 사용합니다.' },
        { tag : '<audio>', description : '음악이나 오디오 스트림과 같은 사운드를 정의할 때 사용합니다. (MP3, WAV, Ogg)' },
        { tag : '<b>', description : '다른 부가적인 목적 없이 단순히 굵게 표현되는 텍스트를 정의할 때 사용합니다. HTML5에서 제목(heading)은 <h1>부터 <h6> 태그로, 강조된 텍스트는 <em> 태그로, 중요한 의미를 가지는 텍스트는 <strong> 태그로, 마지막으로 하이라이트된(highlighted) 텍스트는 <mark> 태그로 표현되어야 합니다. 따라서 위의 태그들에서 적절한 태그를 찾을 수 없을 때만 마지막 선택지로 <b> 태그를 사용해야 합니다.' },
        { tag : '<base>', description : '해당 문서의 모든 상대 주소(relative URL)에 대한 기본 URL(base URL)과 target 속성값을 정의할 때 사용합니다. 하나의 문서에는 최대 하나의 <base> 요소만이 존재할 수 있으며, <base> 요소는 반드시 <head> 요소 내에 위치해야 합니다. 또한, <base> 요소는 언제나 href 속성이나 target 속성 중 하나 또는 둘 모두를 명시해야만 합니다.' },
        { tag : '<basefont>', description : '해당 문서의 모든 텍스트를 위한 기본 색상, 크기, 글꼴 집합(font-family) 등을 정의할 때 사용합니다. HTML5에서는 지원되지 않습니다. CSS를 사용하십시오.' },
        { tag : '<bdi>', description : 'Bi-Directional Isolation을 의미하며, 주위의 텍스트들과는 다른 방향으로 써지는 텍스트 영역을 정의할 때 사용합니다.' },
        { tag : '<bdo>', description : 'Bi-Directional Override를 의미하며, 자식 요소의 텍스트 방향성(text directionality)을 정의할 때 사용합니다.' },
        { tag : '<big>', description : '글자 크기가 큰 텍스트를 정의할 때 사용합니다. HTML5에서는 지원되지 않습니다. CSS를 사용하십시오.' },
        { tag : '<blockquote>', description : '다른 출처로부터 인용된 블록을 정의할 때 사용하며, 이렇게 인용된 블록을 브라우저는 보통 들여쓰기를 사용하여 표현합니다. 짧은 길이의 인용구를 정의할 때는 블록으로 나뉘는 <blockquote> 요소보다는 <q> 요소를 사용하는 것이 바람직합니다.' },
        { tag : '<body>', description : '해당 HTML 문서의 텍스트, 하이퍼링크, 이미지, 리스트 등과 같은 모든 콘텐츠를 포함하는 영역을 정의할 때 사용합니다. HTML 문서에는 단 하나의 <body> 요소만이 존재할 수 있습니다.' },
        { tag : '<br>', description : '텍스트 내의 줄바꿈(line-break)을 정의할 때 사용합니다.' },
        { tag : '<button>', description : '클릭할 수 있는 버튼을 정의할 때 사용합니다.' },
        { tag : '<canvas>', description : '주로 자바스크립트와 같은 스크립트를 이용하여 그래픽 콘텐츠를 그릴 때 사용합니다.' },
        { tag : '<caption>', description : '테이블의 캡션(caption, 테이블이나 사진, 삽화 등에 붙는 설명)을 정의할 때 사용합니다. <table> 요소는 단 하나의 <caption> 요소만을 명시할 수 있으며, <caption> 요소는 언제나 <table> 요소 바로 다음에 위치해야 합니다.' },
        { tag : '<center>', description : '가운데로 정렬되는 텍스트를 정의할 때 사용합니다. HTML5에서는 지원되지 않습니다. CSS를 사용하십시오.' },
        { tag : '<cite>', description : '책이나 음악, 영화, 예술 작품 등과 같은 창작물의 제목을 정의할 때 사용합니다.' },
        { tag : '<code>', description : '컴퓨터 코드(code)의 일부분을 나타낼 때 사용합니다. CSS를 사용하면 더욱 다양한 효과를 얻을 수 있습니다.' },
        { tag : '<col>', description : '<colgroup> 요소에 속하는 각 열(column)의 속성을 정의할 때 사용합니다. <col> 요소는 각 행(row)이나 셀(cell)의 스타일을 반복하지 않고, 열(column)마다 각각 다른 스타일을 적용하고 싶을 때 유용하게 사용할 수 있습니다.' },
        { tag : '<colgroup>', description : '테이블에서 서식 지정을 위해 하나 이상의 열을 그룹으로 묶을 때 사용합니다. <colgroup> 요소 내부에 <col> 요소를 포함하여 열마다 각각 다른 스타일을 적용할 수도 있습니다.' },
        { tag : '<data>', description : '특정 콘텐츠에 기계가 읽을 수 있는(machine-readable) 형태의 값(value)을 덧붙여 나타낼 때 사용합니다. 해당 콘텐츠가 시간이나 날짜와 관련된 데이터라면 <data> 요소 대신 <time> 요소를 사용해야 합니다.' },
        { tag : '<datalist>', description : '<input> 요소에서 사용하기 위한 옵션들의 리스트를 미리 정의할 때 사용합니다. 사용자가 <input> 요소에 데이터를 입력할 때 미리 정의된 옵션을 드롭다운 리스트로 보여줌으로써 자동완성 기능을 제공합니다. <input> 요소의 list 속성값으로 <datalist> 요소의 id 속성값을 명시하면, 해당 <datalist> 요소에서 미리 정의한 옵션들을 <input> 요소에서 사용할 수 있습니다.' },
        { tag : '<dd>', description : '용어와 그에 대한 설명을 리스트 형식으로 보여주는 <dl> 요소에서 설명(description) 부분을 정의할 때 사용합니다.' },
        { tag : '<del>', description : '텍스트 한가운데 라인(line)을 추가하여 문서에서 삭제된 텍스트를 표현할 때 사용합니다.' },
        { tag : '<details>', description : '사용자가 직접 조작하여 보거나 숨길 수 있는 부가적인 세부사항(additional details)을 명시할 때 사용합니다.' },
        { tag : '<dfn>', description : 'HTML에서 용어(term)의 정의를 나타낼 때 사용합니다. 이때 <dfn> 요소의 부모 요소에는 해당 용어에 대한 정의나 설명이 반드시 포함되어 있어야만 합니다.' },
        { tag : '<dialog>', description : '대화 상자(dialog box)나 대화 윈도우(dialog window)를 정의할 때 사용합니다.' },
        { tag : '<dir>', description : ' HTML 리스트(list)를 정의할 때 사용합니다. HTML5에서는 지원되지 않습니다. <ul> 요소나 CSS를 사용해야 합니다.' },
        { tag : '<div>', description : 'HTML 문서에서 특정 영역(division)이나 구획(section)을 정의할 때 사용합니다.' },
        { tag : '<dl>', description : '용어(term)와 그에 대한 설명(description)을 리스트 형식으로 정의할 때 사용합니다.' },
        { tag : '<dt>', description : '용어와 그에 대한 설명을 리스트 형식으로 보여주는 <dl> 요소에서 용어(term) 부분을 정의할 때 사용합니다.' },
        { tag : '<em>', description : '강조된 텍스트(emphasized text)를 표현할 때 사용합니다. CSS를 사용하면 더욱 다양한 효과를 줄 수 있습니다.' },
        { tag : '<embed>', description : '외부 애플리케이션이나 대화형 콘텐츠를 포함시킬 수 있는 컨테이너(container)를 정의할 때 사용합니다.' },
        { tag : '<fieldset>', description : '<form> 요소에서 연관된 요소들을 하나의 그룹으로 묶을 때 사용합니다.' },
        { tag : '<figcaption>', description : '이미지나 다이어그램, 사진과 같이 문서의 주요 흐름과는 독립적인 콘텐츠를 정의하는 <figure> 요소의 캡션(caption)을 정의할 때 사용합니다. <figcaption> 요소는 <figure> 요소의 첫 번째 자식 요소이거나 마지막 자식 요소로만 위치할 수 있습니다.' },
        { tag : '<figure>', description : '삽화나 다이어그램, 사진 등과 같이 문서의 주요 흐름과는 독립적인 콘텐츠를 정의할 때 사용합니다.' },
        { tag : '<font>', description : '텍스트의 폰트(font), 색상 그리고 크기를 정의할 때 사용합니다. HTML5에서는 지원되지 않습니다. CSS를 사용하십시오.' },
        { tag : '<footer>', description : '문서나 특정 섹션(section)의 푸터(footer)를 정의할 때 사용합니다. (저자, 저작권, 연락처, 사이트맵, TOP버튼, 연관페이지 등)' },
        { tag : '<form>', description : '사용자로부터 입력을 받을 수 있는 HTLM 입력 폼(form)을 정의할 때 사용합니다.' },
        { tag : '<frame>', description : '<frameset> 요소에 포함되는 하나의 프레임(frame)을 정의할 때 사용합니다. HTML5에서는 지원되지 않습니다.' },
        { tag : '<frameset>', description : '문서의 레이아웃을 구성하기 위해 사용되는 프레임(frame)들의 집합을 정의할 때 사용합니다. HTML5에서는 지원되지 않습니다.' },
        { tag : '<h1> to <h6>', description : 'HTML 문서에서 제목(heading)을 정의할 때 사용합니다. <h1> 요소가 가장 중요한 제목을 정의하고, <h6> 요소가 가장 덜 중요한 제목을 정의합니다.' },
        { tag : '<head>', description : '해당 문서에 대한 정보인 메타데이터(metadata)의 집합을 정의할 때 사용합니다.' },
        { tag : '<header>', description : '문서나 특정 섹션(section)의 헤더(header)를 정의할 때 사용합니다. (하나 이상의 제목 요소(h1 ~ h6), 로고(logo)나 아이콘(icon), 저자(author) 정보)' },
        { tag : '<hgroup>', description : 'Defines a header and related content' },
        { tag : '<hr>', description : '콘텐츠 내용에서 주제가 바뀔 때 사용할 수 있는 수평 가로선을 정의할 때 사용합니다.' },
        { tag : '<html>', description : 'HTML 문서의 루트 요소(root element)를 정의할 때 사용합니다.' },
        { tag : '<i>', description : '기본 텍스트와는 다른 분위기나 음성을 위한 텍스트 영역을 정의할 때 사용합니다. <i> 요소의 텍스트는 보통 이탤릭체로 표현되며, 전문용어나 다른 언어의 관용구, 문어체, 서양 문헌에 나오는 배 이름 등을 나타낼 때 사용됩니다. 의미 요소(semantic element) 중에서 사용하기에 적당한 요소를 찾지 못했을 때만 <i> 요소를 사용할 수 있습니다.' },
        { tag : '<iframe>', description : '인라인 프레임(inline frame)을 정의할 때 사용합니다.' },
        { tag : '<img>', description : 'HTML 문서에서 이미지(image)를 정의할 때 사용합니다. <img> 요소에는 src 속성과 alt 속성을 반드시 명시해야만 합니다.' },
        { tag : '<input>', description : '사용자로부터 입력을 받을 수 있는 입력 필드(input filed)를 정의할 때 사용합니다.' },
        { tag : '<ins>', description : '텍스트 아래쪽에 라인(line)을 추가하여 문서에 추가된 텍스트를 표현할 때 사용합니다.' },
        { tag : '<kbd>', description : '키보드(keyboard) 입력을 나타낼 때 사용합니다. CSS를 대신 사용하면 더욱 다양한 효과를 얻을 수 있습니다.' },
        { tag : '<label>', description : '사용자 인터페이스(UI) 요소의 라벨(label)을 정의할 때 사용합니다.' },
        { tag : '<legend>', description : '<fieldset> 요소의 캡션(caption)을 정의할 때 사용합니다.' },
        { tag : '<li>', description : 'HTML 리스트(list)에 포함되는 아이템(item)을 정의할 때 사용합니다.' },
        { tag : '<link>', description : '해당 문서와 외부 소스(external resource) 사이의 관계를 정의할 때 사용합니다.' },
        { tag : '<main>', description : '해당 문서의 <body> 요소의 주 콘텐츠(main content)를 정의할 때 사용합니다. 하나의 문서에는 단 하나의 <main> 요소만이 존재해야 하며, <main> 요소는 <article>, <aside>, <footer>, <header>, <nav> 요소의 자손 요소가 되어서는 안 됩니다.' },
        { tag : '<map>', description : '클라이언트 사이드 이미지맵(client-side image-map)을 정의할 때 사용합니다.' },
        { tag : '<mark>', description : '형광펜으로 칠한 것처럼 하이라이트된(highlighted) 텍스트를 정의할 때 사용합니다.' },
        { tag : '<menu>', description : 'Defines an unordered list' },
        { tag : '<meta>', description : '해당 문서에 대한 정보인 메타데이터(metadata)를 정의할 때 사용합니다. <meta> 요소는 언제나 <head> 요소 내부에 위치해야 합니다.' },
        { tag : '<meter>', description : '분수 값이나 게이지(gauge) 내에서 특정 스칼라 값(scalar measurement)이 어느 정도인지를 표현할 때 사용합니다. <meter> 요소를 진행 정도를 나타내는데 사용해서는 안 되며, 진행 상황을 나타낼 때는 <progress> 요소를 사용해야 합니다.' },
        { tag : '<nav>', description : '다른 페이지 또는 현재 페이지의 다른 부분과 연결되는 네비게이션 링크(navigation links)들의 집합을 정의할 때 사용합니다.' },
        { tag : '<noframes>', description : '프레임(frame) 기능을 사용하지 않도록 설정했거나, 프레임 기능을 지원하지 않는 브라우저를 위한 별도의 콘텐츠를 정의할 때 사용합니다. HTML5에서는 지원되지 않습니다.' },
        { tag : '<noscript>', description : '클라이언트 사이드 스크립트(client-side scripts)를 사용하지 않도록 설정했거나, 스크립트를 지원하지 않는 브라우저를 위한 별도의 콘텐츠를 정의할 때 사용합니다.' },
        { tag : '<object>', description : '외부 리소스의 종류에 따라 문서 내에서 처리하는 방식을 변경할 수 있는 임베디드 객체(embedded object)를 정의할 때 사용합니다. <object> 요소는 <body> 요소 내부에만 위치할 수 있으며, <object> 요소를 지원하지 않는 브라우저를 위해 <object> 태그와 </object> 태그 사이에 대체 텍스트를 포함시킬 수 있습니다. 또한, <object> 요소는 data 속성이나 type 속성 중 하나를 반드시 명시해야만 합니다.' },
        { tag : '<ol>', description : '순서가 있는 HTML 리스트(list)를 정의할 때 사용합니다.' },
        { tag : '<optgroup>', description : '옵션 메뉴를 제공하는 드롭다운 리스트(drop-down list)에서 사용되는 옵션들의 그룹을 정의할 때 사용합니다.' },
        { tag : '<option>', description : '옵션 메뉴를 제공하는 드롭다운 리스트(drop-down list)에서 사용되는 하나의 옵션을 정의할 때 사용합니다. <option> 요소는 <select> 요소나 <datalist> 요소 내부에만 위치할 수 있습니다.' },
        { tag : '<output>', description : '스크립트 등에 의해 수행된 계산의 결과나 사용자의 액션에 의한 결과를 나타낼 때 사용합니다.' },
        { tag : '<p>', description : '문단(paragraph)을 정의할 때 사용합니다.' },
        { tag : '<param>', description : '<object> 요소에 의해 호출되는 플러그인의 매개변수(parameter)를 정의할 때 사용합니다.' },
        { tag : '<picture>', description : '<img> 요소의 다중 이미지 리소스(multiple image resources)를 위한 컨테이너를 정의할 때 사용합니다.' },
        { tag : '<pre>', description : '미리 정의된 형식(preformatted)의 텍스트를 정의할 때 사용합니다.' },
        { tag : '<progress>', description : '작업의 진행률을 나타낼 때 사용합니다.' },
        { tag : '<q>', description : '짧은 인용구(short quotation)를 정의할 때 사용합니다. 다른 출처로부터 인용된 인용 블록을 정의할 때는 <q> 요소보다는 <blockquote> 요소를 사용하는 것이 바람직합니다.' },
        { tag : '<rp>', description : '루비 주석(ruby annotation)을 지원하지 않는 브라우저에서만 표시될 문자를 정의할 때 사용합니다.' },
        { tag : '<rt>', description : '루비 주석(ruby annotation)에서 발음이나 설명을 나타내는 윗첨자를 정의할 때 사용합니다.' },
        { tag : '<ruby>', description : '동아시아 일부 지역의 언어에서 일본어의 후리가나와 같이 해당 문자의 발음이나 설명을 작은 크기의 윗첨자로 알려주는 루비 주석(ruby annotation)을 정의할 때 사용합니다.' },
        { tag : '<s>', description : '텍스트 한가운데 라인(line)을 추가하여 더 이상 정확하지 않거나 관련이 없는 텍스트를 표현할 때 사용합니다.' },
        { tag : '<samp>', description : '컴퓨터 프로그램의 샘플 또는 인용 출력(output)을 나타낼 때 사용합니다.' },
        { tag : '<script>', description : '자바스크립트와 같은 클라이언트 사이드 스크립트(client-side scripts)를 정의할 때 사용합니다.' },
        { tag : '<search>', description : 'Defines a search section' },
        { tag : '<section>', description : 'HTML 문서에 포함된 독립적인 섹션(section)을 정의할 때 사용합니다.' },
        { tag : '<select>', description : '옵션 메뉴를 제공하는 드롭다운 리스트(drop-down list)를 정의할 때 사용합니다.' },
        { tag : '<small>', description : '글자 크기가 작은 텍스트를 정의할 때 사용합니다.' },
        { tag : '<source>', description : '<audio> 요소나 <video> 요소, <picture> 요소에서 사용할 수 있는 다중 미디어 자원(multiple media resources)을 정의할 때 사용합니다.' },
        { tag : '<span>', description : 'HTML 문서에서 인라인 요소(inline-element)들을 하나로 묶을 때 사용합니다.' },
        { tag : '<strike>', description : '텍스트 한가운데 라인을 추가할 때 사용합니다. HTML5에서는 지원되지 않습니다. <del> 요소나 <s> 요소를 사용해야 합니다.' },
        { tag : '<strong>', description : '해당 콘텐츠의 중요성이나 심각함, 긴급함 등을 강조할 때 사용합니다.' },
        { tag : '<style>', description : '해당 HTML 문서의 스타일 정보를 정의할 때 사용합니다.' },
        { tag : '<sub>', description : '아랫첨자(subscript) 텍스트를 표현할 때 사용합니다.' },
        { tag : '<summary>', description : '<details> 요소에 의해 생성되는 대화형 위젯에서 기본적으로 보이는 제목을 정의할 때 사용합니다.' },
        { tag : '<sup>', description : '윗첨자(superscript) 텍스트를 표현할 때 사용합니다.' },
        { tag : '<svg>', description : 'Defines a container for SVG graphics' },
        { tag : '<table>', description : '데이터를 포함하는 셀(cell)들의 행과 열로 구성된 2차원 테이블을 정의할 때 사용합니다.' },
        { tag : '<tbody>', description : 'HTML 테이블에서 내용 콘텐츠(body content)들을 하나의 그룹으로 묶을 때 사용합니다.' },
        { tag : '<td>', description : 'HTML 테이블에서 하나의 데이터 셀(data cell)을 정의할 때 사용합니다.' },
        { tag : '<template>', description : '추가되거나 복사될 수 있는 HTML 요소들을 정의할 때 사용합니다. <template> 요소 내의 콘텐츠는 페이지가 로드될 때 즉시 렌더링되지 않으며, 따라서 사용자에게는 보이지 않습니다. 하지만 나중에 자바스크립트를 사용하여, 해당 콘텐츠를 복제한 후 보이도록 렌더링할 수 있습니다.' },
        { tag : '<textarea>', description : '사용자가 여러 줄의 텍스트를 입력할 수 있는 텍스트 입력 영역을 정의할 때 사용합니다.' },
        { tag : '<tfoot>', description : 'HTML 테이블에서 푸터 콘텐츠(footer content)들을 하나의 그룹으로 묶을 때 사용합니다.' },
        { tag : '<th>', description : 'HTML 테이블에서 제목이 되는 헤더 셀(header cell)을 정의할 때 사용합니다.' },
        { tag : '<thead>', description : 'HTML 테이블에서 헤더 콘텐츠(header content)들을 하나의 그룹으로 묶을 때 사용합니다.' },
        { tag : '<time>', description : '사람이 읽을 수 있는(human-readable) 형태의 날짜와 시간 데이터를 정의할 때 사용합니다.' },
        { tag : '<title>', description : '해당 문서의 제목(title)을 정의할 때 사용합니다.' },
        { tag : '<tr>', description : '테이블에서 셀들로 이루어진 하나의 행(row)을 정의할 때 사용합니다.' },
        { tag : '<track>', description : '<audio>나 <video> 요소와 같은 미디어 요소를 위한 텍스트 트랙(text track)을 정의할 때 사용합니다.' },
        { tag : '<tt>', description : '텔레타이프 텍스트(teletype text)를 나타낼 때 사용합니다. HTML5에서는 지원되지 않습니다. CSS를 사용하십시오.' },
        { tag : '<u>', description : '철자가 틀린 단어나 중국어의 고유 명사처럼 문체상 일반적인 텍스트와는 달라야만 하는 텍스트를 표현할 때 사용합니다.' },
        { tag : '<ul>', description : '순서가 없는 HTML 리스트(list)를 정의할 때 사용합니다. HTML5에서는 <ul> 요소의 type 속성을 더 이상 지원하지 않으므로, 대신 CSS의 list-style-type 속성을 사용하여 마커의 종류를 변경해야 합니다.' },
        { tag : '<var>', description : '변수(variable)를 정의할 때 사용합니다. HTML5에서도 여전히 지원되지만, CSS를 대신 사용하면 더욱 다양한 효과를 얻을 수 있습니다.' },
        { tag : '<video>', description : '무비 클립(movie clip)이나 비디오 스트림(video stream)과 같은 비디오를 정의할 때 사용합니다. (MP4 (MIME타입:video/mp4), WebM (MIME 타입: video/webm), Ogg (MIME 타입: video/ogg))' },
        { tag : '<wbr>', description : '단어 중간에서 행바꿈될 수 있는(line-break) 위치를 정의할 때 사용합니다. 길이가 굉장히 긴 단어의 경우 브라우저가 해당 단어를 잘못된 위치에서 행바꿈하지 않도록 <wbr> 요소를 사용하여 행바꿈될 수 있는 위치를 직접 명시할 수 있습니다.' }
    ];
    return(
        <>
            <Helmet>
                <title>Learn HTML</title>
            </Helmet>

            <PageTitle
                title="HTML Element Reference"
                depth1="Learn"
                depth2="HTML"
                depth3="Element Reference"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> HTML Element Reference
                                </Card.Title>
                                {/* tables */}
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Tag</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {data.map((item, index) => (
                                        <tr>
                                            <td>{ item.tag }</td>
                                            <td>{ item.description }</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table> {/* End tables */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default TagList;