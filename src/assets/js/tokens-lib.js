'use-strict';

class TokensLib {
    tokenAContractInstance = null;
    tokenBContractInstance = null;
    exchangeContractInstance = null;

    constructor() {
        //contract instance
        this.tokenAContractInstance = new web3.eth.Contract(this.tokenAABI, this.tokenAContractAddress);
        this.tokenBContractInstance = new web3.eth.Contract(this.tokenBABI, this.tokenBContractAddress);
        this.exchangeContractInstance = new web3.eth.Contract(this.exchangeContractABI, this.exchangeContractAddress);
    }
    tokenAContractAddress = '0x17aa6f41f64ecc84f661b0f661061e96b30fb019';
    tokenBContractAddress = '0xE5438B773b79EdB6ee6894F0f86411902B88DB07';
    exchangeContractAddress = '0x41911cd83d3c2CA89c615BB7F07E65b26B38606D';

    tokenAABI = [
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_Tname",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_Tsymbol",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "_TtotalSupply",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_Tdecimals",
              "type": "uint256"
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
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "_allowance",
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
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "_balanceOf",
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
          "name": "_decimals",
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
          "name": "_name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "_symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "_totalSupply",
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
          "name": "admin",
          "outputs": [
            {
              "internalType": "address",
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
              "internalType": "address",
              "name": "_owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_spender",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "remaining",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "balanceOf",
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
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "burn",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "decimals",
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
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "mint",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "totalSupply",
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
          "inputs": [
            {
              "internalType": "address",
              "name": "_to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        }
    ];

    tokenBABI = [
        {
           "inputs":[
              {
                 "internalType":"string",
                 "name":"_Tname",
                 "type":"string"
              },
              {
                 "internalType":"string",
                 "name":"_Tsymbol",
                 "type":"string"
              },
              {
                 "internalType":"uint256",
                 "name":"_TtotalSupply",
                 "type":"uint256"
              },
              {
                 "internalType":"uint256",
                 "name":"_Tdecimals",
                 "type":"uint256"
              }
           ],
           "stateMutability":"nonpayable",
           "type":"constructor"
        },
        {
           "anonymous":false,
           "inputs":[
              {
                 "indexed":true,
                 "internalType":"address",
                 "name":"owner",
                 "type":"address"
              },
              {
                 "indexed":true,
                 "internalType":"address",
                 "name":"spender",
                 "type":"address"
              },
              {
                 "indexed":false,
                 "internalType":"uint256",
                 "name":"value",
                 "type":"uint256"
              }
           ],
           "name":"Approval",
           "type":"event"
        },
        {
           "anonymous":false,
           "inputs":[
              {
                 "indexed":true,
                 "internalType":"address",
                 "name":"from",
                 "type":"address"
              },
              {
                 "indexed":true,
                 "internalType":"address",
                 "name":"to",
                 "type":"address"
              },
              {
                 "indexed":false,
                 "internalType":"uint256",
                 "name":"value",
                 "type":"uint256"
              }
           ],
           "name":"Transfer",
           "type":"event"
        },
        {
           "inputs":[
              {
                 "internalType":"address",
                 "name":"",
                 "type":"address"
              },
              {
                 "internalType":"address",
                 "name":"",
                 "type":"address"
              }
           ],
           "name":"_allowance",
           "outputs":[
              {
                 "internalType":"uint256",
                 "name":"",
                 "type":"uint256"
              }
           ],
           "stateMutability":"view",
           "type":"function"
        },
        {
           "inputs":[
              {
                 "internalType":"address",
                 "name":"",
                 "type":"address"
              }
           ],
           "name":"_balanceOf",
           "outputs":[
              {
                 "internalType":"uint256",
                 "name":"",
                 "type":"uint256"
              }
           ],
           "stateMutability":"view",
           "type":"function"
        },
        {
           "inputs":[
              
           ],
           "name":"_decimals",
           "outputs":[
              {
                 "internalType":"uint256",
                 "name":"",
                 "type":"uint256"
              }
           ],
           "stateMutability":"view",
           "type":"function"
        },
        {
           "inputs":[
              
           ],
           "name":"_name",
           "outputs":[
              {
                 "internalType":"string",
                 "name":"",
                 "type":"string"
              }
           ],
           "stateMutability":"view",
           "type":"function"
        },
        {
           "inputs":[
              
           ],
           "name":"_symbol",
           "outputs":[
              {
                 "internalType":"string",
                 "name":"",
                 "type":"string"
              }
           ],
           "stateMutability":"view",
           "type":"function"
        },
        {
           "inputs":[
              
           ],
           "name":"_totalSupply",
           "outputs":[
              {
                 "internalType":"uint256",
                 "name":"",
                 "type":"uint256"
              }
           ],
           "stateMutability":"view",
           "type":"function"
        },
        {
           "inputs":[
              
           ],
           "name":"admin",
           "outputs":[
              {
                 "internalType":"address",
                 "name":"",
                 "type":"address"
              }
           ],
           "stateMutability":"view",
           "type":"function"
        },
        {
           "inputs":[
              {
                 "internalType":"address",
                 "name":"_owner",
                 "type":"address"
              },
              {
                 "internalType":"address",
                 "name":"_spender",
                 "type":"address"
              }
           ],
           "name":"allowance",
           "outputs":[
              {
                 "internalType":"uint256",
                 "name":"remaining",
                 "type":"uint256"
              }
           ],
           "stateMutability":"view",
           "type":"function"
        },
        {
           "inputs":[
              {
                 "internalType":"address",
                 "name":"_spender",
                 "type":"address"
              },
              {
                 "internalType":"uint256",
                 "name":"_value",
                 "type":"uint256"
              }
           ],
           "name":"approve",
           "outputs":[
              {
                 "internalType":"bool",
                 "name":"success",
                 "type":"bool"
              }
           ],
           "stateMutability":"nonpayable",
           "type":"function"
        },
        {
           "inputs":[
              {
                 "internalType":"address",
                 "name":"account",
                 "type":"address"
              }
           ],
           "name":"balanceOf",
           "outputs":[
              {
                 "internalType":"uint256",
                 "name":"",
                 "type":"uint256"
              }
           ],
           "stateMutability":"view",
           "type":"function"
        },
        {
           "inputs":[
              {
                 "internalType":"address",
                 "name":"to",
                 "type":"address"
              },
              {
                 "internalType":"uint256",
                 "name":"value",
                 "type":"uint256"
              }
           ],
           "name":"burn",
           "outputs":[
              
           ],
           "stateMutability":"nonpayable",
           "type":"function"
        },
        {
           "inputs":[
              
           ],
           "name":"decimals",
           "outputs":[
              {
                 "internalType":"uint256",
                 "name":"",
                 "type":"uint256"
              }
           ],
           "stateMutability":"view",
           "type":"function"
        },
        {
           "inputs":[
              {
                 "internalType":"address",
                 "name":"to",
                 "type":"address"
              },
              {
                 "internalType":"uint256",
                 "name":"value",
                 "type":"uint256"
              }
           ],
           "name":"mint",
           "outputs":[
              
           ],
           "stateMutability":"nonpayable",
           "type":"function"
        },
        {
           "inputs":[
              
           ],
           "name":"name",
           "outputs":[
              {
                 "internalType":"string",
                 "name":"",
                 "type":"string"
              }
           ],
           "stateMutability":"view",
           "type":"function"
        },
        {
           "inputs":[
              
           ],
           "name":"symbol",
           "outputs":[
              {
                 "internalType":"string",
                 "name":"",
                 "type":"string"
              }
           ],
           "stateMutability":"view",
           "type":"function"
        },
        {
           "inputs":[
              
           ],
           "name":"totalSupply",
           "outputs":[
              {
                 "internalType":"uint256",
                 "name":"",
                 "type":"uint256"
              }
           ],
           "stateMutability":"view",
           "type":"function"
        },
        {
           "inputs":[
              {
                 "internalType":"address",
                 "name":"_to",
                 "type":"address"
              },
              {
                 "internalType":"uint256",
                 "name":"_value",
                 "type":"uint256"
              }
           ],
           "name":"transfer",
           "outputs":[
              {
                 "internalType":"bool",
                 "name":"success",
                 "type":"bool"
              }
           ],
           "stateMutability":"nonpayable",
           "type":"function"
        },
        {
           "inputs":[
              {
                 "internalType":"address",
                 "name":"_from",
                 "type":"address"
              },
              {
                 "internalType":"address",
                 "name":"_to",
                 "type":"address"
              },
              {
                 "internalType":"uint256",
                 "name":"_value",
                 "type":"uint256"
              }
           ],
           "name":"transferFrom",
           "outputs":[
              {
                 "internalType":"bool",
                 "name":"success",
                 "type":"bool"
              }
           ],
           "stateMutability":"nonpayable",
           "type":"function"
        }
    ];

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


    /* ************************** METHODS ******************************** */

    getBalance = async function({address, instance}) {
        address = web3.utils.toChecksumAddress(address);
        let _bal = await instance.methods.balanceOf(address).call();
        _bal = web3.utils.fromWei(_bal, 'ether');
        console.log({_bal});
        return _bal;
    }

    approve = async function({address, amount, instance}) {
      amount = web3.utils.toWei(amount, 'ether');
      address = web3.utils.toChecksumAddress(address);
      let gasPrice = await web3.eth.getGasPrice();
      let gasPriceInHex = web3.utils.toHex(gasPrice);
      let gasLimitInHex = web3.utils.toHex(1000000);

      let receipt = await instance.methods.approve(address, amount).send({
          from: account,
          to: instance._address,
          gasPrice: gasPriceInHex,
          gasLimit: gasLimitInHex,
      });
      console.log({receipt});
      return receipt;
    }

    deposit = async function({amount, token}) {
      amount = web3.utils.toWei(amount, 'ether');
      token = token.toUpperCase();
      let gasPrice = await web3.eth.getGasPrice();
      let gasPriceInHex = web3.utils.toHex(gasPrice);
      let gasLimitInHex = web3.utils.toHex(1000000);

      let receipt = await this.exchangeContractInstance.methods.deposit(amount, token).send({
          from: account,
          to: this.exchangeContractAddress,
          gasPrice: gasPriceInHex,
          gasLimit: gasLimitInHex,
      });
      console.log({receipt});
      return receipt;
    }

    trade = async function({amount, fromToken, toToken}) {
      amount = web3.utils.toWei(amount, 'ether');
      fromToken = fromToken.toUpperCase();
      toToken = toToken.toUpperCase();
      let gasPrice = await web3.eth.getGasPrice();
      let gasPriceInHex = web3.utils.toHex(gasPrice);
      let gasLimitInHex = web3.utils.toHex(1000000);

      let receipt = await this.exchangeContractInstance.methods.trade(amount, fromToken, toToken).send({
          from: account,
          to: this.exchangeContractAddress,
          gasPrice: gasPriceInHex,
          gasLimit: gasLimitInHex,
      });
      console.log({receipt});
      return receipt;
    }

    withdraw = async function({amount, token}) {
      amount = web3.utils.toWei(amount, 'ether');
      token = token.toUpperCase();
      let gasPrice = await web3.eth.getGasPrice();
      let gasPriceInHex = web3.utils.toHex(gasPrice);
      let gasLimitInHex = web3.utils.toHex(1000000);

      let receipt = await this.exchangeContractInstance.methods.withdraw(address, token).send({
          from: account,
          to: this.exchangeContractAddress,
          gasPrice: gasPriceInHex,
          gasLimit: gasLimitInHex,
      });
      console.log({receipt});
      return receipt;
    }

    storedBalance = async function({address, token}) {
      address = web3.utils.toChecksumAddress(address);
      token = token.toUpperCase();
      let _bal = await this.exchangeContractInstance.methods.storedBalances(address, token).call();
      _bal = web3.utils.fromWei(_bal, 'ether');
      console.log({_bal});
      return _bal;
    }
};
