'use-strict';

var account = null;
var web3 = null;

async function initWeb3() {
    // New web3 provider
    if (window.ethereum) {
      web3 = new Web3(ethereum);
      try {
          // ask user for permission
          await ethereum.enable();
          // user approved permission

          ethereum.on('accountsChanged', function(_accounts) {
            console.log({_accounts});
            account = web3.utils.toChecksumAddress(_accounts[0]);
          });

      } catch (error) {
          // user rejected permission
          console.log('user rejected permission');
      }
    }
    // Old web3 provider
    else if (window.web3) {
        web3 = new Web3(web3.currentProvider);
        // no need to ask for permission
    }
    // No web3 provider
    else {
        console.log('No web3 provider detected');
    }
}

var objTokensLib = null;
var objTradeLib = null;
// Account 3 of Metamask (Admin for this simple exchange app)
var adminAddress = '0xE4e414A9BE2490617EeCc250EfBDd6442e048B57';

// web3 provider with fallback for old version
window.addEventListener('load', async () => {
  await initWeb3();
  console.log (web3.currentProvider);

  web3.eth.getAccounts(function(err, accounts) {
    if (err != null) {
      alert("Error retrieving accounts.");
      return;
    }
    if (accounts.length == 0) {
      alert("No account found! Make sure the Ethereum client is configured properly.");
      return;
    }
    account = accounts[0];
    console.log('Account: ' + account);
    account = web3.utils.toChecksumAddress(account);
    web3.eth.defaultAccount = account;
    // To get the error messages if any txn reverts
    web3.eth.handleRevert = true;
  });

  objTokensLib = new TokensLib();
  objTradeLib = new TradeLib();
});