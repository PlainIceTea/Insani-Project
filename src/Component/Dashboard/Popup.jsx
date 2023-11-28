import React, { useState } from 'react';
import popup1 from '../../assets/images/emergency.png';
import popup2 from '../../assets/images/popup2.png';
import em1 from '../../assets/images/em1.png';
import em2 from '../../assets/images/em2.png';
import em3 from '../../assets/images/em3.png';
import ma1 from '../../assets/images/ma1.png';
import ma2 from '../../assets/images/ma2.png';
import ma3 from '../../assets/images/ma3.png';

const Popup = () => {
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [isEmergencyVisible, setEmergencyVisibility] = useState(false);

  const togglePopup = () => {
    setPopupVisibility(!isPopupVisible);
  };

  const toggleEmergency = () => {
    setEmergencyVisibility(!isEmergencyVisible);
  };
  const closePopup = () => {
    setPopupVisibility(false);
  };

  const closeEmergency = () => {
    setEmergencyVisibility(false);
  };
  const playAudio = () => {
    // Implement your audio logic here
  };

  return (
    <div>
      <div className="fixed top-0 right-0 font-montserrat">
        <button
          onClick={toggleEmergency}
          className="shadow w-16 h-16 flex items-center bg-onered p-1 rounded-lg mt-24 opacity-60 hover:opacity-100 mr-1 duration-200"
        >
          <img src={popup1} alt="Emergency Button" />
        </button>
        <button
          onClick={togglePopup}
          className="shadow w-16 h-16 flex items-center bg-oneyellow p-1 rounded-lg mt-5 opacity-60 hover:opacity-100 mr-1 duration-200"
        >
          <img src={popup2} alt="Popup Button" />
        </button>
      </div>

      {isPopupVisible && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-8 rounded-lg shadow-md">
          { <div id="popup" class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-8 rounded-lg shadow-md ">
        <p class="text-xl font-semibold mb-4 text-center text-white">Menu Aksesibilitas</p>
        <div class="p-3 flex flex-col items-center  space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <div id="highlightButton" class="text-center flex-row">
                <button class="flex items-center justify-center shadow-lg p-5 rounded-lg hover:bg-slate-600 duration-200 border border-black m-5 w-32 h-32">
                    <img src={ma1} class="h-16" alt="Button Image" />
                </button>
                <h1 class="text-white font-medium">Kontras</h1>
            </div>
            
            <div class="text-center flex-row">
                <button class="flex items-center justify-center shadow-lg p-5 rounded-lg hover:bg-slate-600 duration-200 border border-black m-5 w-32 h-32">
                    <img src={ma2} class="h-16" alt="Button Image" />
                </button>
                <h1 class="text-white font-medium">Sorot Tautan</h1>
            </div>
            
            <div class="text-center flex-row">
                <button id="pedomanButton" class="flex items-center justify-center shadow-lg p-5 rounded-lg hover:bg-slate-600 duration-200 border border-black m-5 w-32 h-32">
                    <img src={ma3} class="h-16" alt="Button Image" />
                </button>
                <h1 class="text-white font-medium">Garis Pedoman</h1>
            </div>

        </div>
       
        <button onClick={closePopup} className="mt-4 bg-black px-4 py-2 text-white rounded-md">
            Close
          </button>
        </div>
        }
         
        </div>
      )}
       

      {isEmergencyVisible && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-8 rounded-lg shadow-md">
          { <div id="emergencypopup"
        class=" fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-onered p-8 rounded-xl shadow-md ">
        <p class="text-xl font-semibold mb-4 text-center text-white">Gunakan ketika Darurat</p>
        <div class="p-3 flex flex-col items-center bg-onered space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <div class="text-center flex-row">
                <button id="playButton" class="flex items-center justify-center m-5 w-32 h-32 shadow-lg p-5 rounded-lg hover:bg-red-900 duration-200 border border-black m-5 flex items-center justify-center">
                    <img src={em1} class="h-20" alt="Button Image" />
                    <audio id="audioElement" src="assests/Sounds/siren.wav" loop></audio>
                </button>
                <h1 class="text-white font-medium">Berbunyi</h1>
            </div>
            
            <div class="text-center flex-row">
                <button class="flex items-center justify-center m-5 w-32 h-32 shadow-lg p-5 rounded-lg hover:bg-red-900 duration-200 border border-black m-5 flex items-center justify-center">
                    <img src={em2} class="h-20" alt="Button Image" />
                </button>
                <h1 class="text-white font-medium">Jalur Evakuasi</h1>
            </div>
            
            <div class="text-center flex-row">
                <a href="https://wa.link/m8m2ry">
                    <button class="flex items-center justify-center m-5 w-32 h-32 shadow-lg p-5 rounded-lg hover:bg-red-900 duration-200 border border-black m-5 flex items-center justify-center">
                        <img src={em3} class="h-20" alt="Button Image" />
                    </button>
                </a>
                <h1 class="text-white font-medium ">Kontak kami</h1>
            </div>

        </div>
        <button onClick={closeEmergency} className="mt-4 bg-black px-4 py-2 text-white rounded-md">
            Close
          </button>
    </div>}
    
        </div>
      )}
    </div>
  );
};

export default Popup;
