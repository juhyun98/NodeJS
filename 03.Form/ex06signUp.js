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
        
        if (req.url === '/welcome') {
            if (parseQs.userPw !== parseQs.pwCheck) {
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                res.write(`
                    <html>
                        <body>
                            <script>
                                alert('비밀번호가 일치하지 않습니다.');
                                window.history.back();
                            </script>
                        </body>
                    </html>
                `);
                res.end();
                return;
            }
        }

        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        req.url === '/' && res.write(file);
        req.url === '/welcome' && res.write(`
        <html>
            <body>
                <h1>${parseQs.userId}님 환영합니다.</h1>
                <p>${parseQs.bloodType}의 ${parseQs.gender}이시군요!</p>
            </body>
        </html>
        `
        );
        res.end();
    })

})
.listen(8000, () => {
    console.log('Server is listening on port 8000');
})