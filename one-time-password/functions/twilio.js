const twilio = require('twilio');

const accountSid = 'AC08a8634e62bc8981889f39bbf2511130';
// This token has been revoked, don't bother trying :)
const authToken = '522f8f7f8fd7ae17e5e51cc9ea7b4170';

module.exports = new twilio.Twilio(accountSid, authToken);
