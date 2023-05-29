import web3 from './web3';
import ElectionFactory from './Build/ElectionFact.json';

const instance = new web3.eth.Contract(
	JSON.parse(ElectionFactory.interface),
    '0x1F31462aD2E603DB5e8934eac537F6cd3689342a'
);

export default instance;