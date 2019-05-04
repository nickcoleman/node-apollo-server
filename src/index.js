import 'dotenv/config';

const userCredentials = { firstname: 'Nick' };
const userDetails = { nationality: 'American' };

const user = {
  ...userCredentials,
  ...userDetails,
};

console.log(user);

console.log(process.env.SOME_ENV_VARIABLE);
