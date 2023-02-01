const express = require("express");
const { SMSAPI } = require('smsapi');

const app = express();

(async () => {
    const apiToken = 'ckFHU0clzSEWt6QnusaAgrv6iYu2JgUFUA4QOLeb';
    const smsapi = new SMSAPI(apiToken);

    const recipientPhoneNumber = '+48661928547';
    const message = 'Pozdrowienia od JavaScript :)';

    try {
        const result = await smsapi.sms.sendSms(recipientPhoneNumber, message);

        console.log(result);
    } catch (err) {
        console.log(err);
    }
})();

app.listen(3001, () => {
  console.log("Running Server");
});