const express = require('express');
const app = express();
const indexRouter = require('./routes');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));

// 기본 라우팅 설정
app.use('/', indexRouter);

app.use(express.static(__dirname+'/public'));

// 넌적스 설정
app.set('view engine', 'html');
nunjucks.configure('views', {
    express : app,
    watch : true
})

// 포트번호 설정
app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), () => {
    console.log(`Server is listening on port ${app.get('port')}`);
})