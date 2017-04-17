module.exports = {
  handleError(context, error) {
    context.succeed({
      "statusCode": 400,
      "headers": { "Content-Type": "application/json" },
      "body": JSON.stringify(error)
    });
  },

  handleSuccess(context, data) {
    context.succeed({
      "statusCode": 200,
      "headers": { "Content-Type": "application/json" },
      "body": JSON.stringify(data)
    });
  }
};
