import web3 from './web3';
import ElectionFactory from './Build/ElectionFact.json';

const instance = new web3.eth.Contract(
	JSON.parse(ElectionFactory.interface),
    '0x4739cF861b5D3858422D67b748504B068d79F1F0'
);

export default instance;