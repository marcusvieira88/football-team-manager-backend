import DatabaseConnection from './utils/DatabaseConnection';
import dotEnv from 'dotenv';
import expressGraphQL from 'express-graphql';
import cors from 'cors';
import jwt from "express-jwt";
const express = require('express');
const logger = require('morgan');

//load default values
dotEnv.load();

//Connect to the database
new DatabaseConnection().connect();

const app = express();

const allowedOrigins = ['http://localhost:3000',
    'http://yourapp.com'];

app.use(logger('dev'));
app.use(cors());

const authMiddleware = jwt({
    secret: process.env.JWT_SECRET,
    credentialsRequired: false
});

app.use(authMiddleware);

//ROUTES
//app.use('/', require('./routes/index'));
//app.use('/', require('./routes/userEmailConfirmation'));

import schema from './graphql';
// GraphqQL server route
app.use('/graphql/v1/', expressGraphQL(req => ({
    schema,
    pretty: true,
    graphiql: true
})));

// start server
const PORT = process.env.PORT || '3000';
let server = app.listen(PORT, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('GraphQL listening at http://%s:%s', host, port);
});

export default server;
