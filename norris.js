require('dotenv').config();

const http = require('http');
const port = process.env.PORT || 8080
const host = process.env.HOST || localhost

http.createServer((req, res) => {

}).listen(port, host, () => {
    console.log(`Server avviato su http://${host}:${port}`)
})