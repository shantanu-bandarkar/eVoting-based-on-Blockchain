import web3 from './web3';
import ElectionFactory from './Build/ElectionFact.json';

const instance = new web3.eth.Contract(
	JSON.parse(ElectionFactory.interface),
    '0x0938F35b0002468D7E8376E64B45C8e48DCAf117'
);

export default instance;