exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      text: 'Hello world! This request worked!'
    })
  };
};