const http = require('http');
const fs = require('fs').promises;
const qs = require('querystring');

http.createServer(async (req, res) => {
    console.log('Create Server');

    const file = await fs.readFile('./ex06signup.html');

    let body = '';
    req.on('data', (data) => {
        body += data;
    })

    req.on('end', () => {
        const parseQs = qs.parse(body);
        console.log(parseQs);

        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        req.url === '/' && res.write(file);
        
        if (req.url === '/welcome') {
            if (parseQs.userId === '' || parseQs.userPw === '') {
                res.write(`
                    <script>
                        alert('아이디와 비밀번호를 입력하여 주십시오.');
                        window.history.back();
                        // location.href = '/';
                    </script>
                `)

            }else if (parseQs.userPw !== parseQs.pwCheck) {
                res.write(`
                    <script>
                        alert('비밀번호가 일치하지 않습니다.');
                        window.history.back();
                        // location.href = '/'
                    </script>
                `)
            }else {
                let bloodType = '';
                switch(parseQs.bloodType) {
                    case 'aType' : bloodType = 'A형'; break;
                    case 'bType' : bloodType = 'B형'; break;
                    case 'oType' : bloodType = 'O형'; break;
                    case 'abType' : bloodType = 'AB형'; break;
                }
                let gender = '';
                switch(parseQs.gender) {
                    case 'male' : gender = '남성'; break;
                    case 'female' : gender = '여성'; break;
                }
                res.write(`
                    <html>
                        <body>
                            <h1>${parseQs.userId}님 환영합니다.</h1>
                            <p>${bloodType}의 ${gender}이시군요!</p>
                        </body>
                    </html>
               `)

            }
        }

        res.end();
    })

})
.listen(8000, () => {
    console.log('Server is listening on port 8000');
})