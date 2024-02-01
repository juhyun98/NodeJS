const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    console.log('create server');
    res.sendFile(path.join(__dirname, '..', 'public'))
})

router.post('/welcome', (req, res) => {
    console.log('welcome page', req.body);
    res.render('welcome', {data : req.body});
})

router.post('/result', (req, res) => {
    console.log('result page', req.body);
    // Case 1. 라우터에서 조건식
    // const {userId, userPw} = req.body;
    // const result = userId === 'admin' && userPw === '1234' ? '성공' : '실패';
    // res.render('result', {result : result});
    // <h2>로그인 시도 결과 : {{result}}</h2>

    // Case 2. 템플릿에서 조건식
    res.render('result', {data : req.body})
})

module.exports = router;