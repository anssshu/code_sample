
var Web3 = require("web3");

let url = "http://127.0.0.1:7545" ;

//connect to the RPC
let web3 = new Web3(url);
var sender = "0x1faE749D8c2400F72d4536e5eCB7D112BDDb0Ee1" ;
var receiver = "0x59d9cf43D2e0cd73082A5fC81318e84263E9B081";
var value  = "500000000000000000"; // one ether


sendBalance(sender,receiver,value);

//send ether to an account
async function sendBalance(_to,_from,_value){
    console.log("foo");
    await web3.eth.sendTransaction({
        from: _to,
        to: _from,
        value: _value
    });
}


/*
var Web3 = require("web3");

let url = "http://127.0.0.1:7545" // ganache url
var web3 = new Web3(url);

var anshuman = '0x59d9cf43D2e0cd73082A5fC81318e84263E9B081';
var escrow =  "0xA7CF2D3f26662DBB62F0564BA067D0de64f26847" ; 
var player1 = "0x1faE749D8c2400F72d4536e5eCB7D112BDDb0Ee1" ;
var player2 = "0xe95BdE207174d7e43c8882791eb297fce22108e7" ;
var player3 = "0xa943CfFC726c56e4F0A0b74b34Dd04eC8d3Df691" ;


//transfer money to the escrow account
web3.eth.sendTransaction({
    from: player1,
    to: anshuman,
    value: '1000000000000000000' // one ethereum
})
.then(function(receipt){

});
*/