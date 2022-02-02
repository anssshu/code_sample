var Web3 = require("web3");

let url = "http://127.0.0.1:7545";

var web3 = new Web3(url);

let my_account = "0x086B1A4eBC02A93793B99f726ccC40c48244F6BA";

//check account balance
web3.eth.getBalance(my_account,(error,balance)=>{
    let acc_balance = web3.utils.fromWei(balance,"ether");
    console.log(acc_balance);
})

