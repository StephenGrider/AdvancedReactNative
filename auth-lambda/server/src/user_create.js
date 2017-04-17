const twilioClient = require('./twilio');
const firebase = require('./firebase');
const helpers = require('./helpers');
const handleError = helpers.handleError;
const handleSuccess = helpers.handleSuccess;

module.exports = function(event, context, callback) {
  const body = JSON.parse(event.body);

  if (!body.email || !body.phone) {
    return handleError(context, { error: 'Bad Input' });
  }

  const email = body.email;
  const phone = String(body.phone).replace(/[^\d]/g, "");
  const countryCode = body.countryCode;

  firebase.auth().createUser({
    uid: phone,
    email: email,
    countryCode: countryCode
  })
    .then(user => handleSuccess(context, { uid: phone }))
    .catch((err) => handleError(context, { error: 'Email or phone in use' }));
}
