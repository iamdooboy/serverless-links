const axios = require('axios');
require('dotenv').config();
const {GET_LINKS} = require('./utils/linkQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedRes = require('./utils/formattedResponse');

exports.handler = async(event) => {

    try {
        const res = await sendQuery(GET_LINKS);
        const data = res.allLinks.data;
        return formattedRes(200, data);
    } catch (err) {
        console.log(err);
        return formattedRes(500, {err: 'Something went wrong'})
    }    
};