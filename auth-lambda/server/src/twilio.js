const twilio = require('twilio');

const accountSid = 'AC8f0fb862abeb3cdc9be5fbeadaf1a4d6';
// This token has been revoked, don't even try it :)
const authToken = 'bc369a180cb3e6e540df281a307fdc40';

module.exports = new twilio.Twilio(accountSid, authToken); 
