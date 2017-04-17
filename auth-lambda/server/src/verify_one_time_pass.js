const firebase = require('./firebase');
const helpers = require('./helpers');
const handleError = helpers.handleError;
const handleSuccess = helpers.handleSuccess;

module.exports = function(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  const body = JSON.parse(event.body);

  if (!body.phone || !body.code) {
    return handleError(context, { error: 'Phone and code must be provided' });
  }

  const phone = parseInt(String(body.phone).replace(/[^\d]/g, ""));
  const code = parseInt(body.code);

  const db = firebase.database();

  firebase.auth().getUser(phone)
    .then(() => {
      const ref = db.ref('users/' + phone);
      ref.on('value', snapshot => {
        ref.off();
        const user = snapshot.val();

        if (user.code !== code || !user.codeValid) {
          return handleError(context, { error: 'Bad code' });
        }

        ref.update({ codeValid: false });
        firebase.auth().createCustomToken(phone + "")
          .then((token) => handleSuccess(context, { token: token }));
      });
    })
    .catch((err) => handleError(context, { error: 'User not found.' }))
};
