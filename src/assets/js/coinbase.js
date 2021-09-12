'use-strict';

// import { WalletLink } from "../../node_modules/walletlink";
// import { WalletLink } from "walletlink";
// import { Web3 } from "../../node_modules/web3";
// import WalletLink from "walletlink";
// const WalletLink = require("walletlink");
const Web3 = require('web3');

// var account = null;
// var web3 = null;
// // Web3modal instance
// let web3Modal;
// // Chosen wallet provider given by the dialog window
// let provider;

// // Unpkg imports
// const Web3Modal = window.Web3Modal.default;
// // const WalletConnectProvider = window.WalletConnectProvider.default;
// // const Fortmatic = window.Fortmatic;
// // const evmChains = window.evmChains;

// async function initWeb3() {
//     // New web3 provider
//     if (window.ethereum) {
//       	web3 = new Web3(ethereum);
//       	try {
// 			// ask user for permission
// 			await ethereum.enable();
// 			// user approved permission

// 			ethereum.on('accountsChanged', function(_accounts) {
// 				account = web3.utils.toChecksumAddress(_accounts[0]);
// 			});
//       } catch (error) {
// 			// user rejected permission
// 			console.log('user rejected permission');
//       }
//     }
//     // Old web3 provider
//     else if (window.web3) {
//         web3 = new Web3(web3.currentProvider);
//         // no need to ask for permission
//     }
//     // No web3 provider
//     else {
//         console.log('No web3 provider detected');
//     }
// }

// async function initWalletLink() {
//   const walletLink = new WalletLink({
//     appName: "Example Coinbase Dapp",
//     appLogoUrl: "https://example.com/logo.png",
//     darkMode: "false"
//   });

//   const ethereum = walletLink.makeWeb3Provider(
//     "https://ropsten.infura.io/v3/952659217f3b4775880d1e2f3a07027b", 1
//   );

//   web3 = new Web3(ethereum);
// }

// // web3 provider with fallback for old version
// window.addEventListener('load', async () => {
//   await initWeb3();
//   await initWalletLink();
//   init();
//   document.querySelector("#btn-connect").addEventListener("click", onConnect);
//   document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
//   console.log (web3.currentProvider);

//   web3.eth.getAccounts(function(err, accounts) {
//     if (err != null) {
//       alert("Error retrieving accounts.");
//       return;
//     }
//     if (accounts.length == 0) {
//       alert("No account found! Make sure the Ethereum client is configured properly.");
//       return;
//     }
//     account = accounts[0];
//     console.log('Account: ' + account);
//     account = web3.utils.toChecksumAddress(account);
//     web3.eth.defaultAccount = account;
//     // To get the error messages if any txn reverts
//     web3.eth.handleRevert = true;
//   });

// });

// function init() {

//   	// console.log("Initializing example");
//   	// console.log("WalletConnectProvider is", WalletConnectProvider);
//   	// console.log("Fortmatic is", Fortmatic);
//   	// console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);


//   	// Tell Web3modal what providers we have available.
//   	// Built-in web browser provider (only one can exist as a time)
//   	// like MetaMask, Brave or Opera is added automatically by Web3modal

//   	const infuraId = "952659217f3b4775880d1e2f3a07027b"; // Replace with your Infura ID
// 	const chainId = 1; // Select the appropriate chain ID
//   	const providerOptions = {
// 		walletconnect: {
// 		package: WalletConnectProvider,
// 		options: {
// 			// Mikko's test key - don't copy as your mileage may vary
// 			infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
// 		}
// 		},

// 		fortmatic: {
// 		package: Fortmatic,
// 		options: {
// 			// Mikko's TESTNET api key
// 			key: "pk_test_391E26A3B43A3350"
// 		}
// 		},

// 		'custom-walletlink': {
// 			display: {
// 				logo: '../images/wallet-link.svg', // Path to wallet link logo. Source https://github.com/walletlink/walletlink/blob/master/web/src/images/wallets/coinbase-wallet.svg
// 				name: 'WalletLink',
// 				description: 'Scan with WalletLink to connect',
// 			},
// 			options: {
// 				appName: 'Coinbase Integration App', // Your app name
// 				networkUrl: `https://ropsten.infura.io/v3/${infuraId}`,
// 				chainId,
// 			},
// 			package: WalletLink,
// 			connector: async (_, options) => {
// 				const { appName, networkUrl, chainId } = options
// 				const walletLink = new WalletLink({
// 					appName
// 				});
// 				const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
// 				await provider.enable();
// 				return provider;
// 			},
// 		},
//   };

//   web3Modal = new Web3Modal({
//     cacheProvider: false, // optional
//     providerOptions, // required
//     disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
//   });
// }


// /**
//  * Fetch account data for UI when
//  * - User switches accounts in wallet
//  * - User switches networks in wallet
//  * - User connects wallet initially
//  */
// async function refreshAccountData() {

//   // If any current data is displayed when
//   // the user is switching acounts in the wallet
//   // immediate hide this data
//   document.querySelector("#connected").style.display = "none";
//   document.querySelector("#prepare").style.display = "block";

//   // Disable button while UI is loading.
//   // fetchAccountData() will take a while as it communicates
//   // with Ethereum node via JSON-RPC and loads chain data
//   // over an API call.
//   document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
//   await fetchAccountData(provider);
//   document.querySelector("#btn-connect").removeAttribute("disabled")
// }


// /**
//  * Connect wallet button pressed.
//  */
// async function onConnect() {

//   console.log("Opening a dialog", web3Modal);
//   try {
//     provider = await web3Modal.connect();
//   } catch(e) {
//     console.log("Could not get a wallet connection", e);
//     return;
//   }

//   // Subscribe to accounts change
//   provider.on("accountsChanged", (accounts) => {
//     fetchAccountData();
//   });

//   // Subscribe to chainId change
//   provider.on("chainChanged", (chainId) => {
//     fetchAccountData();
//   });

//   // Subscribe to networkId change
//   provider.on("networkChanged", (networkId) => {
//     fetchAccountData();
//   });

//   await refreshAccountData();
// }

// /**
//  * Disconnect wallet button pressed.
//  */
// async function onDisconnect() {

//   console.log("Killing the wallet connection", provider);

//   // TODO: Which providers have close method?
//   if(provider.close) {
//     await provider.close();

//     // If the cached provider is not cleared,
//     // WalletConnect will default to the existing session
//     // and does not allow to re-scan the QR code with a new wallet.
//     // Depending on your use case you may want or want not his behavir.
//     await web3Modal.clearCachedProvider();
//     provider = null;
//   }
// }