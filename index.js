
// test account
const ACCESS_TOKEN = '716b7331622b965d9d72bc86af96ecbb4eca0c99a6d160310d10293fd3265c70';

const main = async () => {
  const BitGo = require('bitgo');
  const bitgo = new BitGo.BitGo({
    accessToken: ACCESS_TOKEN,
    env: 'prod',
  }); // defaults to testnet. add env: 'prod' if you want to go against mainnet
  const result = await bitgo.session();
  console.log('Session: ');
  console.dir(result);
};

main().catch(exc => {
  console.error('Program failed with', exc);
  process.exit(-1);
});