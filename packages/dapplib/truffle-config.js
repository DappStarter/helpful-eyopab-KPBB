require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth nominee combine idea arch metal genre'; 
let testAccounts = [
"0xfdd5c7b4eadf45a5475a7ee328c7da6b1db9f4d007a10ebf972f0b1bc5d2b88f",
"0x9a6176c73e287d859e51d4941343c9f43b11005861db24151c48fc214b30f4df",
"0x3469eeaa98d8987a88fd12486bf96f4590672e31d314e4cb31777b8f172ef780",
"0xde69f98c1f453e9594bbe62d7a4216c7842b0d595f92608f197a2c88b2e424b5",
"0x622ca7181429f7dd4b4798cc9f8b4a9b2d15315417f9cc1f2e43e206aa35b57b",
"0x789e2071552135f01a702baeab67d2eecd2a34f0bb634a099e037dcc69a7cf32",
"0xcb6b9e928f896765e45062d90f075174eb70d48802adbc4141203e9b362e1636",
"0x9f3f2a948fe1bbc81b778d9fc22e9f471a9293c84113db0c94027fddd0f3256c",
"0x3ffec94c07de226b8ee01e005c4e71754016d7b57f5adb4b53e08e5855249d38",
"0x9ec13680fbff71f171ef8805f24619c5be1a7cf6fc39fad8ccb2daa560d7cb2e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


