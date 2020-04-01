const express = require ('express');
const path = require ('path');
const port = 3000;

const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
app.listen(port, () => console.log(`Express test app listening on port ${port}!`));
