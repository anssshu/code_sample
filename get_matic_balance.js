


var Web3 = require("web3");

let url = "https://rpc-mumbai.matic.today";//"http://127.0.0.1:7545";

var web3 = new Web3(url);

let my_account = "0x59d9cf43D2e0cd73082A5fC81318e84263E9B081";

//check account balance
web3.eth.getBalance(my_account,(error,balance)=>{
    let acc_balance = web3.utils.fromWei(balance,"ether");
    console.log(acc_balance);
    console.log(error);
})