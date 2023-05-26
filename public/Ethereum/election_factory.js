import web3 from './web3';
import ElectionFactory from './Build/ElectionFact.json';

const instance = new web3.eth.Contract(
	JSON.parse(ElectionFactory.interface),
    '0x7673Bc94C8773B66c2b30559267bE5F89C419416'
);

export default instance;