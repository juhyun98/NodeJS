const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Main page');
    res.send(`
    <html>
        <body>
            <h1>Main Page</h1>
            <a href='/user'>User Page</a>
            <a href='/login'>Login Page</a>
        </body>
    </html>
    `)
})

router.get('/login', (req, res) => {
    res.send(`
    <html>
        <body>
            <h1>Login Page</h1>
            <a href='/user/se0'>세영 로그인</a>
            <a href='/user/bomi'>보미 로그인</a>
            <a href='/user/oneho'>원호 로그인</a>
        </body>
    </html>
    `)
})

module.exports = router;