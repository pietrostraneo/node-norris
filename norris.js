require('dotenv').config();

const http = require('http');
const port = process.env.PORT || 8080
const host = process.env.HOST || localhost
const api = process.env.API

const fs = require("fs");
const path = require("path");

const readJSONData = (nomeFile) => {
    const filePath = path.join(__dirname, nomeFile + '.json');
    const fileData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileData);
}

const writeJSONData = (nomeFile, newData) => {
    const filePath = path.join(__dirname, nomeFile + '.json');
    const fileString = JSON.stringify(newData);
    fs.writeFileSync(filePath, fileString);
}

http.createServer((req, res) => {

    const jokes = readJSONData('norrisDb');
    const url = req.url;
    switch (url) {
        case '/favicon.ico':
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end();
            break;
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fetch(api).then(response => response.json()).then(data => {
                let filehtml = `<p>${data.value}</p>`;
                writeJSONData('norrisDb', [...jokes, data.value]);
                res.end(filehtml);
            })
            break
        default:
            res.writeHead(301, { "Location": "/" });
            res.end('Pagina non trovata');
            break;
    }

}).listen(port, host, () => {
    console.log(`Server avviato su http://${host}:${port}`)
})