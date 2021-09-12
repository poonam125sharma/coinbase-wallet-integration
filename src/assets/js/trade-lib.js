/*'use-strict';

class ExchangeLib {
    exchangeContractInstance = null;

    constructor() {
        //contract instance
        this.exchangeContractInstance = new web3.eth.Contract(this.exchangeContractABI, this.exchangeContractAddress);
    }
    exchangeContractAddress = '0x41911cd83d3c2CA89c615BB7F07E65b26B38606D';

    exchangeContractABI = [
        {
          "inputs": [
            {
              "internalType": "contract TokenA",
              "name": "_tokenAAddress",
              "type": "address"
            },
            {
              "internalType": "contract TokenB",
              "name": "_tokenBAddress",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "_user",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "string",
              "name": "_tokenSymbol",
              "type": "string"
            }
          ],
          "name": "Deposited",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "_user",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "string",
              "name": "_fromToken",
              "type": "string"
            },
            {
              "indexed": true,
              "internalType": "string",
              "name": "_toToken",
              "type": "string"
            }
          ],
          "name": "Traded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "_user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "string",
              "name": "_tokenSymbol",
              "type": "string"
            }
          ],
          "name": "Withdraw",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "_tokenSymbol",
              "type": "string"
            }
          ],
          "name": "deposit",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "name": "storedBalances",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "tokenAAddress",
          "outputs": [
            {
              "internalType": "contract TokenA",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "tokenBAddress",
          "outputs": [
            {
              "internalType": "contract TokenB",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "_fromToken",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_toToken",
              "type": "string"
            }
          ],
          "name": "trade",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "_tokenSymbol",
              "type": "string"
            }
          ],
          "name": "withdraw",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
    ];

    deposit = async function() {

    }

    a_getBalance = async function({address}) {
        let _bal = await this.tokenAContractInstance.methods.balanceOf(address).call();
        _bal = web3.utils.fromWei(_bal, 'ether');
        console.log({_bal});
        return _bal;
    }

    approve = async function({address, tokenId}) {
        let gasPrice = await web3.eth.getGasPrice();
        let gasPriceInHex = web3.utils.toHex(gasPrice);
        let gasLimitInHex = web3.utils.toHex(1000000);

        let receipt = await this.tokenAContractInstance.methods.approve(address, tokenId).send({
            from: account,
            to: this.tokenAContractAddress,
            gasPrice: gasPriceInHex,
            gasLimit: gasLimitInHex,
        });
        console.log({receipt});
        return receipt;
    }

    addArt = async function(_name) {
        let gasPrice = await web3.eth.getGasPrice();
        let gasPriceInHex = web3.utils.toHex(gasPrice);
        let gasLimitInHex = web3.utils.toHex(1000000);

        let receipt = await this.tokenAContractInstance.methods.addArt(_name).send({
            from: account,
            to: this.tokenAContractAddress,
            gasPrice: gasPriceInHex,
            gasLimit: gasLimitInHex,
        });
        console.log({receipt});
        return receipt;
    }

    getAllArts = async function() {
        let _arts = await this.tokenAContractInstance.methods.getAllArts().call();
        console.log({_arts});
        return _arts;
    }
};*/



'use-strict';

class TradeLib {
    setBalances = function(address, tokenBalanceObj) {
        address = web3.utils.toChecksumAddress(address);
        let storedBalances = {};
        let balances = localStorage.getItem('storedBalances');
        if (balances) {
            storedBalances = JSON.parse(balances);
        }
        storedBalances[address] = tokenBalanceObj;
        localStorage.setItem('storedBalances', JSON.stringify(storedBalances));
    }

    getBalance = function(address) {
        address = web3.utils.toChecksumAddress(address);
        let addrBalance = null;
        let balances = localStorage.getItem('storedBalances');
        if (balances) {
            let storedBalances = JSON.parse(balances);
            addrBalance = storedBalances[address];
        }
        return addrBalance;
    }

    getAllBalances = function() {
        let storedBalances = null;
        let balances = localStorage.getItem('storedBalances');
        if (balances) {
            storedBalances = JSON.parse(balances);
        }
        return storedBalances;
    }
}