'use client'

import { useAccount } from 'wagmi'
import Header from '@/app/components/Header'
function App() {
  const account = useAccount()

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        {account.status === 'connected' && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Account Info</h2>
            <p className="mb-1">Address: {account.address}</p>
            <p>Chain ID: {account.chainId}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default App
