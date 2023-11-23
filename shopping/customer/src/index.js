const express = require('express');
const dotEnv = require("dotenv").config();
const { PORT } = require('./config');
const { databaseConnection } = require('./database');
const expressApp = require('./express-app');

const StartServer = async() => {

    const app = express();
    
    await databaseConnection();
    
    await expressApp(app);

    app.listen(PORT, () => {
        console.log(`Customer Service listening to Port ${PORT}`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
}

StartServer();