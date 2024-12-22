import { Chain, getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';

const gradient = {
  id: 56709,
  name: 'Gradient',
  iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Enso.svg/100px-Enso.svg.png',
  iconBackground: '#fff',
  nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://gradient.miro.network'] },
  },
  blockExplorers: {
    default: { name: 'Gradient Explorer', url: 'https://scan.miro.network' },
  },
  /*contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 11_907_934,
    },
  },*/
} as const satisfies Chain;

export const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: '0f83c34a5cf8bc471f0166f39841bbb4',
  chains: [
    gradient,
    ...(process.env.REACT_APP_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
});
