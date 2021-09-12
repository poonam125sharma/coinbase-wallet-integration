import { Component, NgZone, OnInit, OnDestroy } from '@angular/core';

import WalletLink from 'walletlink';
import Web3 from 'web3';

import { AlertService } from './_alert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'Wallet Integration App';
  // appLogoUrl = 'https://example.com/logo.png';
  appLogoUrl = 'assets/images/wallet.png';
  infuraId = '952659217f3b4775880d1e2f3a07027b';
  ethJsonRpcUrl = 'https://ropsten.infura.io/v3/' + this.infuraId;
  chainId = 3;
  walletLink = null;
  ethereum = null;
  web3 = null;
  isWalletLinkConnected = false;
  coinbaseAddr = null;
  isLoading = false;

  oxy_to_address = null;
  eth_to_address = null;

  oxy_to_amount = null;
  eth_to_amount = null;

  oxy_bal_address = null;
  eth_bal_address = null;

  oxy_bal = null;
  eth_bal = null;

  contractAddress = '0x59e45f34af2f89acd68f4dfd2f7d8201e0e03af9';

  ABI = [{"inputs":[{"internalType":"string","name":"_Tname","type":"string"},{"internalType":"string","name":"_Tsymbol","type":"string"},{"internalType":"uint256","name":"_TtotalSupply","type":"uint256"},{"internalType":"uint256","name":"_Tdecimals","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"_allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];

  contract = null;

  constructor(
    private ngZone: NgZone,
    private alertService: AlertService
  ) {

  }

  ngOnInit(): void {
    (window as { [key: string]: any })['angAppResetRef'] = {
      component: this,
      zone: this.ngZone,
      resetAccount: (a) => this.Reset_Account_BY_JS( a || null),
    };

    this.initWalletLink();
  }

  ngOnDestroy(): void {
    // this.initWalletLink();
  }

  async initWalletLink(): Promise<void> {
    const providers = {
      walletlink: {
        package: WalletLink,
        options: {
          app: {
            appName: this.appName,
            appLogoUrl: this.appLogoUrl,
            darkMode: false
          },
          network: {
            rpc: this.chainId,
            chainId: 1
          }
        }
      },
    };

    this.walletLink = new WalletLink({
      appName: this.appName,
      appLogoUrl: this.appLogoUrl,
      darkMode: false
    });
    this.ethereum = this.walletLink.makeWeb3Provider(this.ethJsonRpcUrl, this.chainId);
    this.web3 = new Web3(this.ethereum as any);

    this.contract = new this.web3.eth.Contract(this.ABI, this.contractAddress);

    this.ethereum.on('accountsChanged', (accounts: Array<string>) => {
      console.log('Inside on accounts changed event' );
      if (window['angAppResetRef']) {
        if (accounts.length > 0) {
          window['angAppResetRef'].zone.run(() => { window['angAppResetRef'].resetAccount(accounts);});
        }
      }
    });

    this.ethereum.on('chainChanged', (id) => {
      console.log('Inside on chain changed event ', id );
    });
  }

  async fun_Connect_Coinbase_Wallet(): Promise<void> {
    // await this.initWalletLink();
    this.ethereum.send('eth_requestAccounts').then((accounts: string[]) => {
      console.log({accounts});
      if (accounts && accounts.length > 0) {
        this.isWalletLinkConnected = true;
        this.coinbaseAddr = accounts[0];
        this.web3.eth.defaultAccount = accounts[0];
        console.log('this.ethereum.isConnected() => ', this.ethereum.isConnected());
      } else {
        this.isWalletLinkConnected = false;
      }
    });
    // Optional Code
    // this.ethereum.enable().then((accounts: string[]) => {
    //   if (accounts && accounts.length > 0) {
    //     this.isWalletLinkConnected = true;
    //     this.coinbaseAddr = accounts[0];
    //     this.web3.eth.defaultAccount = accounts[0];
    //     console.log(`Wallet's address is ${accounts[0]}`);
    //     console.log('this.ethereum.isConnected() => ', this.ethereum.isConnected());
    //   } else {
    //     this.isWalletLinkConnected = false;
    //   }
    // });
  }

  async fun_Send_Tokens(): Promise<void> {
    this.isLoading = true;
    const amount = this.web3.utils.toWei(this.oxy_to_amount, 'ether');
    const maxGasLimit = 1000000;

    // const gasPrice = await this.web3.eth.getGasPrice();
    // const gasPriceInHex = this.web3.utils.toHex(gasPrice);
    // const gasLimitInHex = this.web3.utils.toHex(1000000);

    // Find limit
    const limit = this.contract.methods.transfer(this.oxy_to_address, amount).estimateGas({
      from: this.coinbaseAddr
    });
    console.log({limit});

    this.contract.methods.transfer(this.oxy_to_address, amount).send({
      from: this.coinbaseAddr,
      to: this.contractAddress,
      // gasPrice: gasPriceInHex,
      gasLimit: Number(maxGasLimit) + Number(limit),
    }).then((res: any) => {
      console.log({res});
      this.isLoading = false;
      this.alertService.success('OXY tokens transferred successfully', { id: 'alert-1' });
    }).catch((err: any) => {
      this.isLoading = false;
      this.alertService.error(err, { id: 'alert-1' });
    });
  }

  async fun_Send_Ethers(): Promise<void> {
    this.isLoading = true;
    const amount = this.web3.utils.toWei(this.eth_to_amount, 'ether');
    const maxGasLimit = 1000000;

    // const gasPrice = await this.web3.eth.getGasPrice();
    // const gasPriceInHex = this.web3.utils.toHex(gasPrice);
    // const gasLimitInHex = this.web3.utils.toHex(1000000);

    // Find limit
    const limit = this.web3.eth.estimateGas({
      from: this.coinbaseAddr,
      to: this.eth_to_address,
      value: amount,
    });
    console.log({limit});

    this.web3.eth.sendTransaction({
      from: this.coinbaseAddr,
      to: this.eth_to_address,
      value: amount,
      gasLimit: Number(maxGasLimit) + Number(limit),
    }).then((res: any) => {
      console.log({res});
      this.isLoading = false;
      this.alertService.success('Ethers transferred successfully', { id: 'alert-1' });
    }).catch((err: any) => {
      this.isLoading = false;
      this.alertService.error(err, { id: 'alert-1' });
    });
  }

  async fun_Check_Oxy_Balance(): Promise<void> {
    this.isLoading = true;
    let balance = await this.contract.methods.balanceOf(this.oxy_bal_address).call();
    balance = this.web3.utils.fromWei(balance, 'ether');
    console.log({balance});
    this.oxy_bal = balance;
    this.isLoading = false;
    this.alertService.success('OXY Balance retrieved', { id: 'alert-1' });
  }

  async fun_Check_Eth_Balance(): Promise<void> {
    this.isLoading = true;
    let balance = await this.web3.eth.getBalance(this.eth_bal_address);
    balance = this.web3.utils.fromWei(balance, 'ether');
    console.log({balance});
    this.eth_bal = balance;
    this.isLoading = false;
    this.alertService.success('Ether Balance retrieved', { id: 'alert-1' });
  }

  Reset_Account_BY_JS(accounts: any): void {
    this.ethereum.send('eth_requestAccounts').then((acc: string[]) => {
      this.coinbaseAddr = acc[0];
    });
  }

  fun_Disconnect_Coinbase(): void {
    this.walletLink.disconnect();
    // // is the same as the following:
    // ethereum.close()
    this.isWalletLinkConnected = false;
    this.coinbaseAddr = null;
    this.oxy_to_address = null;
    this.eth_to_address = null;

    this.oxy_to_amount = null;
    this.eth_to_amount = null;

    this.oxy_bal_address = null;
    this.eth_bal_address = null;

    this.oxy_bal = null;
    this.eth_bal = null;
  }


  /*async initWalletLink() {
    const providers = {
      // web3_wallets: {
      //      connect_text: 'Connect with Metamask or Brave'
      // },
      // binance_chain_wallet: {
      //     connect_text: 'Connect with Binance Chain Wallet'
      // },
      walletlink: {
        package: WalletLink, // walletLink imported Package
        options: {
          app: {
            appName: this.appName,
            appLogoUrl: this.appLogoUrl,
            darkMode: false
          },
          network: {
            rpc: this.chainId,
            // chainId: 0x2a // chainId 42
            chainId: 1
          }
        }
      },
    };

    const walletProvider = new WalletProvider({
      cacheProvider: true,
      providers,
      debug: true,
      showLoader: true
    });

    console.log({walletProvider});

    const connectStatus = await walletProvider.connect();

    console.log({connectStatus});

    if (connectStatus.isError()) {
      // some error info
      return;
    }

    // lets retrieve the connection info object
    // {provider, chainId, account}
    const resultInfo = connectStatus.getData();
    console.log({resultInfo});

    // const provider = resultInfo.provider;
    // const account = resultInfo.account;
    // const chainId = resultInfo.chainId;
  }*/
}
