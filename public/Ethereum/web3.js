import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	console.log(window.ethereum.enable());
	web3 = new Web3(window.ethereum);
		console.log('Web3: ', web3);
} else {
	const provider = new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545');
	web3 = new Web3(provider);
	console.log('Web3 else: ', web3);
}

export default web3;
