require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remain social install drop supply tennis'; 
let testAccounts = [
"0x915474afae201b3da4f1331cb0b16a9603e0fdbe354e28c1382a2184b8c5aab4",
"0x29f595910dc39b01b480926c4982ab0ea4bdd4c05d6332abca9297ecd1a74437",
"0x494419d8b1ce1f25317ad75397bbcbbdf4907fd40c03d6f5aa4552bdcd19439a",
"0x51d72201c2e2a527c005a8233a74d4d936ac4c0b755ceec96a9bea5acf95fb73",
"0xcdc5c2c32ebfd77ee99f73c0ab999cce9f6db969c40f354013d29d35afd08af1",
"0x36f4ab4dbf2d00d109967a44d7c4e2af3723c2d64c50b925aec9360aa6539a86",
"0xfbbb94c91500c72b173ab472d11784004ad4006c6258e8c5ab784671e5641ba5",
"0x933feebc406d99419089d00f949152d32f08ccc12eb47f1dfc96161800c609b4",
"0x1650fc4e9441ca4d335c50a2af3b9ac15e1ccf406cf9046989b2d3371be5fa24",
"0xd71b8c5e17e65f66841b6b395ed6ccde4ca0ded53033ecf76cace55d77a604a7"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
