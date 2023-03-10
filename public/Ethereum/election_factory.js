import web3 from './web3';
import ElectionFactory from './Build/ElectionFact.json';

const instance = new web3.eth.Contract(
	JSON.parse(ElectionFactory.interface),
    '0x84135af3a0cF0E10d06610Ebf1ae64BE3b104810'
);

export default instance;