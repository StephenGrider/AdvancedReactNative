const firebase = require('./firebase');
const helpers = require('./helpers');
const handleError = helpers.handleError;
const handleSuccess = helpers.handleSuccess;

module.exports = function(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;

  const phone = parseInt(event.queryStringParameters.phone.replace(/[^\d]/g, ""));

  if (!event.queryStringParameters || !phone) {
    return handleError(context, { error: 'Phone must be provided' });
  }

  const db = firebase.database();
  const ref = db.ref('users');

  ref.orderByChild('phone')
    .equalTo(phone)
    .once('value', (snapshot) => {
      ref.off();

      const phoneExists = snapshot.numChildren() > 0;
      handleSuccess(context, { phoneExists: phoneExists });
    });
};
