// NEAR
import { Wallet } from "./near-wallet";

const CONTRACT_ADDRESS = process.env.CONTRACT_NAME;

// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
export const wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS });

export const contractId = CONTRACT_ADDRESS;
