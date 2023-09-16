const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    const stream = fs.createReadStream(filePath);

    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Cache-Control': 'no-cache'
    });

    stream.pipe(res);
});

const PORT = process.env.PORT || 80;
server.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
