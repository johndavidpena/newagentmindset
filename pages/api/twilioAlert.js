import nextConnect from 'next-connect';
import middlewareTwilio from '../../middleware/twilioMiddleware';

const handler = nextConnect();

handler.use(middlewareTwilio);

// NOTE: Removed async here
handler.post((req, res) => {
  let client = req.twilioClient;

  let data = req.body.values;
  let firstName = data.firstName;
  let lastName = data.lastName;
  let email = data.email;

  client.messages
    .create({
      from: '+19152332022',
      to: '+19153553477',
      body: `${firstName} ${lastName} at ${email} submitted at NAM`
    })
    .catch(err => {
      console.log(err);
    });
});

export default handler;
