/* 
(1) session 필요 모듈 : npm install express-session session-file-store

(2) session 모듈 호출

(3) session 미들웨어
*/


const express = require('express');
const app = express();
const indexRouter = require('./routes');
const userRouter = require('./routes/user');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const session = require('express-session');
const fileStore = require('session-file-store')(session);

app.set('port', process.env.PORT || 8000);
app.set('view engine','html');
nunjucks.configure('views', {
    express : app,
    watch : true
});

app.use(bodyParser.urlencoded({extended : true}));
app.use(session({
    httpOnly : true, // HTTP 프로토콜을 통한 접근만 가능
    resave : false, // 불필요한 세션 저장 방지
    secret : 'secret', // 암호화 키
    store : new fileStore() // 세션 저ㅏㅇ소
}))
app.use(express.static(__dirname + '/public'));
app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(app.get('port'), () => {
    console.log(`Server is listening on port ${app.get('port')}`);
})
