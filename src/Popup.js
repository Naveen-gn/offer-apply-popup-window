import React, { useState } from 'react';

const Popup = ({ onClose, onApply }) => {
  const [offerCode, setOfferCode] = useState('');

  const handleSubmit = () => {
    onApply(offerCode);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full  flex justify-center items-center">
        <button className="absolute top-0 right-0 px-4 py-2" onClick={onClose}>Close</button>
      <div className="bg-green-800 p-8 rounded-lg">
        <h4 className='text-white mb-3'>Enter Your offer code!</h4>
        <div className='flex gap-3'>
        <input
          type="text"
          value={offerCode}
          onChange={(e) => setOfferCode(e.target.value)}
          className="w-3/4 mb-4 px-4 py-2 border border-gray-300 rounded"
          placeholder="Enter code"
        />
        <button onClick={handleSubmit} className=" max-h-11 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-emerald-500 ">Apply</button>
        </div>
        <h4 className='text-white mb-3 text-center'>Or continue without offer code!</h4>
        <div className='w-full flex justify-center '>
        <button onClick={onClose} className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-emerald-500">Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
