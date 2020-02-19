var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://chat.zoko.io/v2/message',
  'headers': {
    'Content-Type': 'application/json',
    'apikey': '<your-api-key>'
  },
  body: JSON.stringify(
    {
      "channel": "whatsapp",
      "recipient": "91987654321",
      "type": "template",
      "templateId": "greeting_01",
      "templateArgs": []
    })
};
request(options, function(error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
