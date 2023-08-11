import { Keypair } from "@solana/web3.js";

let kp = Keypair.generate();
console.log(`You've generated a new Solana wallet: ${kp.publicKey.toBase58()} \n\nTo save your wallet, copy and paste the following into a JSON file:\n[${kp.secretKey}]`);