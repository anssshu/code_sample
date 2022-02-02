var Tx = require("ethereumjs-tx").Transaction;
var Web3 = require("web3");
let url = "HTTP://127.0.0.1:7545"
var web3 = new Web3(url);

//let address = "0xAC3c01881228A7b7116262E9229CD43C600eC3b0";
let address = "0xbD405490426f01eCd7010723dA3397e394cB21E5";
//check balance of an account
web3.eth.getBalance(address,(err,bal)=>{
    var balance = web3.utils.fromWei(bal,'ether');
    console.log("anshuman is having ");
    console.log(balance,"eth tokens");
});


//interact with a smart  contract
const fs = require('fs');

let test = JSON.parse(fs.readFileSync('./build/contracts/Test.json','utf-8'));
//let test = require("./build/contract/Test");
console.log(JSON.stringify(test.abi));
let abi = test.abi;
//let fromAddress = "0xB970c1f108b2407951E5f214A7b8B821F0e5FBcE";
let c_add = "0x0Afc1184ecDfABa15Bf5910eBDa78d7628C7Ab04";
var contract = new web3.eth.Contract(abi,c_add,{gasPrice: '12345678', from: address});

async function call_it() {
    contract.methods.setName("abhijit mund").send();
    const name =  await contract.methods.getName().call(); // get name method is called
    const n = await contract.methods.name().call();// name variable is called
    console.log("data from getName method:",name);
   
}

//var foo;

call_it();

//Send  a signed transaction to an account
web3.transactionConfirmationBlocks = 1;

const addressFrom = '0xAC3c01881228A7b7116262E9229CD43C600eC3b0'
const privKey = Buffer.from('ec9dc747d2247726195fcc688891c0f1c78c9e120fb947fd5b97ad3289af75c6', 'hex')

// Receiver address and value to transfer
// Third account in dev.json genesis file
const addressTo = '0xbD405490426f01eCd7010723dA3397e394cB21E5'
const valueInEther = 2
// Get the address transaction count in order to specify the correct nonce
web3.eth.getTransactionCount(addressFrom, "pending").then((txnCount) => {
    // Create the transaction object
    var txObject = {
        nonce: web3.utils.numberToHex(txnCount),
        gasPrice: web3.utils.numberToHex(1000),
        gasLimit: web3.utils.numberToHex(21000),
        to: addressTo,
        value: web3.utils.numberToHex(web3.utils.toWei(valueInEther.toString(), 'ether'))
    };
  
    // Sign the transaction with the private key
    var tx = new Tx(txObject);
    tx.sign(privKey)
  
    //Convert to raw transaction string
    var serializedTx = tx.serialize();
    var rawTxHex = '0x' + serializedTx.toString('hex');
  
    // log raw transaction data to the console so you can send it manually
    console.log("Raw transaction data: " + rawTxHex);
    web3.eth.sendSignedTransaction(rawTxHex);

  
}).catch(error => { console.log('Error: ', error.message); });;

//send money with metamask