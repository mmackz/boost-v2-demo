'use client'

import { ConnectKitButton } from 'connectkit'
import { useAccount } from 'wagmi'

function App() {
  const account = useAccount()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Wallet Connection Demo</h1>
      <ConnectKitButton />
      {account.status === 'connected' && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Account Info</h2>
          <p className="mb-1">Address: {account.address}</p>
          <p>Chain ID: {account.chainId}</p>
        </div>
      )}
    </div>
  )
}

export default App
