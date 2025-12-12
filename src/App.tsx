import { useState, useEffect } from 'react';
import { useWeb3V2 } from './contexts/Web3ContextV2';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import CommunityOwnership from './components/CommunityOwnership';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import ConnectionConfirmation from './components/ConnectionConfirmation';

function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { isConnected, connectWallet, disconnectWallet, account, isLoading } = useWeb3V2();

  useEffect(() => {
    console.log('Navigation useEffect triggered:', { isConnected, account: !!account, showDashboard, isLoading });

    if (isConnected && account && !showDashboard) {
      console.log('Setting up confirmation modal and auto-navigation timer');

      setTimeout(() => {
        setShowConfirmation(true);
      }, 100);

      const autoNavigateTimer = setTimeout(() => {
        console.log('Auto-navigating to dashboard');
        setShowConfirmation(false);
        setShowDashboard(true);
      }, 2600);

      return () => {
        console.log('Cleaning up navigation timer');
        clearTimeout(autoNavigateTimer);
      };
    }
  }, [isConnected, account, showDashboard]);

  const handleConnectWallet = async () => {
    if (isConnected && account) {
      console.log('Wallet already connected, navigating to dashboard');
      setShowDashboard(true);
      setShowConfirmation(false);
    } else {
      try {
        console.log('Initiating wallet connection...');
        await connectWallet();
        console.log('Wallet connection completed successfully');
      } catch (error) {
        console.error('Failed to connect wallet:', error);
      }
    }
  };

  const handleContinueToDashboard = () => {
    console.log('Manual navigation to dashboard triggered');
    setShowConfirmation(false);
    setShowDashboard(true);
  };

  const handleDisconnect = () => {
    disconnectWallet();
    setShowDashboard(false);
    setShowConfirmation(false);
  };

  console.log('App render:', { showDashboard, showConfirmation, isConnected, hasAccount: !!account });

  return (
    <div className="min-h-screen bg-white">
      {!showDashboard && (
        <Navbar
          onConnect={handleConnectWallet}
          isConnected={isConnected}
          walletAddress={account}
          isLoading={isLoading}
        />
      )}
      {!showDashboard ? (
        <>
          <Hero
            onConnect={handleConnectWallet}
            isConnected={isConnected}
            isLoading={isLoading}
          />
          <HowItWorks />
          <CommunityOwnership />
          <Footer />
        </>
      ) : (
        <>
          {console.log('Rendering Dashboard component')}
          <Dashboard
            onDisconnect={handleDisconnect}
            isConnected={isConnected}
          />
        </>
      )}

      {showConfirmation && account && (
        <ConnectionConfirmation
          isOpen={showConfirmation}
          walletAddress={account}
          onContinue={handleContinueToDashboard}
        />
      )}
    </div>
  );
}

export default App;
