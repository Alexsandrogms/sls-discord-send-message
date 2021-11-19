const axios = require('axios').default;

exports.handler = async (event, context) => {
  try {
    const {
      data: { message },
    } = await axios.get(process.env.DOG_API_URL);

    await axios.post(process.env.DISCORD_WEBHOOKS_URL, {
      content: 'A random dog for you!',
      avatar_url: message,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Message sent ${message}` }),
    };
  } catch (err) {
    console.log(err);
  }
};
