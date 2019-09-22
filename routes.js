
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    console.log('Url is ' + url + ' Method is ' + method);
    if(url === '/') {
        res.write('<html>');
        res.write('<body><p>Hello my Assignments!!</p><br/><form action="/create-user" method="POST"><input type="text" name="userName"> <button type="submit">Create User</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/user'){
        res.write('<html>');
        res.write('<body><ul><li>Mani<li><li>Papitha<li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user' && method=== "POST"){
        req.on('data', (chunks) => {
            console.log(chunks);
        })
        return req.on('end', () => {
            console.log('Done!!!!!');
            res.statusCode = 302;
            res.setHeader('Location', '/user');
            return res.end();
        })
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = {
    handler :  requestHandler,
}