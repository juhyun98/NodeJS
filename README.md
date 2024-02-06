### 노드 기본 설치

<https://nodejs.org/en>

<br/>

<img width="520" alt="image" src="https://github.com/juhyun98/NodeJS/assets/140494238/8cd07276-1ab5-4531-92a7-25070dd08674">

<br/><br/>

프롬프트창 버전 확인

<img width="269" alt="image" src="https://github.com/juhyun98/NodeJS/assets/140494238/7fbcebfe-1e65-4bd4-8698-08ecead627b3">

<br><br>

터미널에서 실행


<img width="450" alt="image" src="https://github.com/juhyun98/NodeJS/assets/140494238/e91ffe8c-0d58-4ba9-bc2b-e72ddfeeef33">

<br><br>

Node JS : 크롬 V8 엔진 기반의 자바스크립트 런타임

(1) 하나의 언어만으로 클라이언트 측과 서버 측의 코드를 작성할 수 있다.
<br>
(2) 이벤트 루프 기반 Non-Blocking 비동기 방식
<br>
(3) NPM을 통한 모듈 사용
<br>
(4) 뛰어난 성능을 가진 크롬의 V8 엔진

<br>
모듈 : NodeJS에서 만들어진 기능들의 단위
<br>
모듈 가져오기 => require(모듈이름)
<br>
모듈 내보내기 => module.exports

-------------------------------------------------------------------------------

Express
Node.js를 위한 빠르고 개방적인 간결한 웹 프레임워크

Middle Ware
클라이언트가 서버에 요청을 보낼 때
그 요청과 서버의 응답 사이에 여러 기능을 수행하는 함수들

Express 폴더 생성
경로 설정
npm init -y => 터미널 입력 (package.json 생성됨)
npm i express ( i = install) => express 설치

템플릿 엔진
=> 정적인 html을 동적으로 처리

종류 : 넌적스(Nunjucks), EJS, PUG, ...
=> html 문법과 유사하고 html 확장자를 사용하는 넌적스 사용

(1) 인스톨
npm install express nunjucks chokidar

(2) 가져오기
const nunjucks = require('nunjucks')

(3) view 엔진 확장자 설정
app.set('view engine', 'html')

(4) 넌적스 구성 설정
nunjucks.configure(경로, 옵션 설정)
- 옵션 설정 => 객체 형태로 작성
- express : app => express가 담겨 있는 객체 연결
- watch : true => html 변경 시 템플릿 엔진 리렌더링

기본문법
(1) 변수 처리
router.get('/', (~) => {
    res.render('index', {name : 'heejae'})
})
<h1>{{name}}</h1>
(2) 내부 변수 선언
{% set name = 'heejae' %}
(3) 조건문
{% if 조건식1 %}
<p>첫번째 조건을 만족합니다</p>
{% elif 조건식2 %}
<p>두번째 조건을 만족합니다</p>
{% else %}
<p>어떤 조건도 만족하지 않습니다</p>
{% endif %}
(4) 반복문
{% for item in array %}
<p>{{loop.index}} : {{item}}</p>
{% endfor %}

app.js
=> express, nunjucks,
    라우팅 등 기본 세팅

routes/index/js
=> 기본 경로 세팅

nodeJS > mkdir 09.CookieSession
nodeJS > cd 09.CookieSession
09.~ > npm init -y
09. ~ > npm install expree
cookie-parser express-session
session-file-store





