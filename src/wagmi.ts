import { http, cookieStorage, createConfig, createStorage } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { metaMask, coinbaseWallet, injected } from 'wagmi/connectors'

export function getConfig() {
  return createConfig({
    chains: [sepolia],
    connectors: [
      metaMask(),
      coinbaseWallet(),
      injected(),
    ],
    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,
    transports: {
      [sepolia.id]: http(),
    },
  })
}

declare module 'wagmi' {
  interface Register {
    config: ReturnType<typeof getConfig>
  }
}
