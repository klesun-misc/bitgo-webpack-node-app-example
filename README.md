There is this wonderful lib: [BitGoJS](https://github.com/BitGo/BitGoJS)

It's dependencies (that apparently include tests and source files) take around 450 MiB, whereas Lambdas service does not allow projects over 250 MiB

"So what? Just webpack it, no?", you may ask, but there are few not obvious points to keep in mind to make webpack compile a working bundle for node.

Luckily for you, here is this repo, with all corner cases covered (issues caused by secret.js, decimal.js and mignumber.js having unique imports/exports approach).

Steps to run this test project to use bitgo's API to get session info of a test account:

- `git clone https://github.com/klesun-misc/bitgo-webpack-node-app-example.git` - clone this repo
- `cd bitgo-webpack-node-app-example` - change directory to cloned repo root
- `npm ci` - install dependencies
- `node node_modules/webpack/bin/webpack.js` - compile `./index.js` file into `./dist/main.js`
- `node dist/main.js` - run the compiled bundle

You should see such output:
```
klesun@klesuns-MacBook-Pro ololo-bitgo-test % node dist/main.js
(node:25836) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Session:
{
  id: '5f91755664ea3c0016bb8a2149b68764',
  client: 'bitgo',
  user: '5f9174227b678a00a68cc8dcf48debef',
  scope: [ 'openid', 'profile', 'wallet_view_all' ],
  created: '2020-10-22T12:04:38.827Z',
  expires: '2030-10-20T12:04:38.827Z',
  ip: '159.148.16.225',
  ipRestrict: [ '159.148.16.225' ],
  origin: 'app.bitgo.com',
  label: 'pidor',
  isExtensible: false
}
```

Which means that you successfully compiled your app with dependency on bitgo, and it is capable of running it's basic functions.

(did not check whether more complicated calls work, possibly somewhere on stage of transaction signing or something some more libs may break due to wrong imports/exports, running some tests would be a good idea)
