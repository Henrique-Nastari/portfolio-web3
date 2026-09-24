// web3.ts — Cliente viem para leitura de contratos na Base L2
// Todas as operações são READ-ONLY (sem gas, sem transação).
// Funciona sem carteira conectada — progressive enhancement.

import { createPublicClient, http } from 'viem'
import { base } from 'viem/chains'

// Cliente público (somente leitura)
export const publicClient = createPublicClient({
  chain: base,
  transport: http(),
})

// ABI mínima do CredentialNFT (leitura)
export const credentialNFTAbi = [
  {
    name: 'balanceOf',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ name: 'owner', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
  },
  {
    name: 'tokenURI',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    outputs: [{ name: '', type: 'string' }],
  },
] as const

export const CREDENTIAL_CONTRACT =
  process.env.NEXT_PUBLIC_CREDENTIAL_CONTRACT as `0x${string}`
