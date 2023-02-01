const express = require("express");

const app = express();

function dateSendSms() {
  const date = new Date();

  if(date.getHours() === 13 && date.getMinutes() === 36) {
    console.log("Został wyłany SMS");
  }
}

const interval = setInterval(() => {
  dateSendSms();
}, 5000);

clearInterval(interval);

app.listen(3001, () => {
  console.log("Running Server");
});