const express = require('express');

const PORT = process.env.PORT || null;
const SERVER_ENV = process.env.SERVER_ENV;

const app = express();

app.get('/', (req, res) => {
    if (SERVER_ENV === 'test') {
        return res.status(200).send(`Dummy endpoint running on enviroment ${SERVER_ENV} now with CICD`)
    }
    return res.status(501).send(`Dummy endpoint`);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
