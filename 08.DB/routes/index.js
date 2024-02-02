const express = require('express');
const router = express.Router();

// 메인 페이지
router.get('/', (req, res) => {
    console.log('main page');
    res.render('main');
})

// 회원가입 페이지
router.get('/signup', (req, res) => {
    console.log('회원가입 페이지');
    res.render('signup');
})

// 로그인 페이지
router.get('/signin', (req, res) => {
    console.log('로그인 페이지');
    res.render('signin');
})

// 회원검색 페이지
router.get('/search', (req, res) => {
    console.log('회원검색 페이지');
    res.render('search');
})

// 회원탈퇴 페이지
router.get('/delete', (req, res) => {
    res.render('delete');
})

module.exports = router;