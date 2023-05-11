import contract from '../contracts/bithuabi.json';
import { ethers } from 'ethers';
import { isMetaMaskInstalled, ethereum } from '../config';



export const mint = async (mint_amount) => {
    if(isMetaMaskInstalled()){
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contractAddress = "0x0cBF1C44bc8591fc811Ad24aB27603581796800A";
        const nftContract = new ethers.Contract(contractAddress, contract, signer);
        let txnHash = await nftContract.mint(ethereum.selectedAddress, mint_amount, {
            gasLimit: "285000",
            value: ethers.utils.parseEther((0.03 * mint_amount).toString())
        })
        return txnHash
    }
}

export const totalMintCount = async () => {
    if(isMetaMaskInstalled()){
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contractAddress = "0x0cBF1C44bc8591fc811Ad24aB27603581796800A";
        const nftContract = new ethers.Contract(contractAddress, contract, signer);

        let totalMint = await nftContract.count();

        return totalMint;
    }
}
