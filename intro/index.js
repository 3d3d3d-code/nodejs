const express = require('express');
const app = express();
const port = 8000;
app.get('/', (requete, reponse) => {
    reponse.send('Hello World !');
});

app.listen(port, () => console.log("Server start"));

/*
app.post();
app.put();
app.deleete();
app.patch();

*/