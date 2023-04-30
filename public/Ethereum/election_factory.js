import web3 from './web3';
import ElectionFactory from './Build/ElectionFact.json';

const instance = new web3.eth.Contract(
	JSON.parse(ElectionFactory.interface),
    '0x131b0975fcaa80f700Fc645a2a2B9C97E22fa01D'
);

export default instance;