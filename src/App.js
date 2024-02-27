import React, { useState } from 'react';
import Popup from './Popup';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [offerApplied, setOfferApplied] = useState(false);
  const [offerCode, setOfferCode] = useState('');

  const handleApplyOffer = () => {
    console.log('Offer code applied:', offerCode);
    setOfferApplied(true);
    setShowPopup(false);
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  return (
    <div className="App w-full h-screen flex justify-center items-center">
      <header className="App-header ">

        <button onClick={handleOpenPopup} className="bg-sky-800 text-white px-4 py-2 rounded hover:bg-sky-900">Apply Offer</button>
        {showPopup && (
          <Popup
            onClose={() => setShowPopup(false)}
            onApply={handleApplyOffer}
          />
        )}
        {offerApplied && <p>Offer code applied successfully!</p>}
      </header>
    </div>
  );
}

export default App;
