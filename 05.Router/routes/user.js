const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
    <html>
        <body>
            <h1>User Page</h1>
        </body>
    </html>
    `)
})

router.get('/:name', (req, res) => {
    console.log('라우트 매개변수', req.params);
    /* 
    (mission) <h1>Welcome name! ❤️</h1>
    */
    res.send(`
    <html>
        <body>
            <h1>Welcome ${req.params.name}!</h1>
        </body>
    </html>
    `)
})

module.exports = router;