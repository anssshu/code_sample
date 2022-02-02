/*
var Web3  = require("web3");
const url = "https://rpc-mumbai.maticvigil.com";
var web3 = new Web3(url);
var acc = "0x59d9cf43D2e0cd73082A5fC81318e84263E9B081";

async function getBalanceMatic(){
    await web3.eth.getBalance(acc,(e,b)=>{
        console.log(b);
    });
}

getBalanceMatic();
*/

var Web3 = require("web3");

let url = "https://data-seed-prebsc-1-s1.binance.org:8545/";//"http://127.0.0.1:7545";

var web3 = new Web3(url);

let my_account = "0x59d9cf43D2e0cd73082A5fC81318e84263E9B081";

//check account balance
web3.eth.getBalance(my_account,(error,balance)=>{
    let acc_balance = web3.utils.fromWei(balance,"ether");
    console.log(acc_balance);
    console.log(error);
})

