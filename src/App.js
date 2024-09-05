import React from 'react';
import WormholeConnect from '@wormhole-foundation/wormhole-connect';

function App() {
  const config = {
    tokens: ['USDC'], // Adiciona USDC
    chains: ['solana', 'ethereum'], // Chains suportadas
    routes: ['auto'], // Automatiza a rota
    rpcUrls: {
      solana: 'https://solana-mainnet.rpcpool.com',
      ethereum: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'
    }
  };

  return (
    <div className="App">
      <h1>Wormhole Connect Integration</h1>
      <WormholeConnect config={config} />
    </div>
  );
}

export default App;
