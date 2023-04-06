import React from "react";
import Octave from "./components/Octave";

export const AudioAPIContext = React.createContext<AudioContext | undefined>(
  undefined
);

const App: React.FC = () => {
  const [audioContext, setAuditContext] = React.useState<
    AudioContext | undefined
  >();
  React.useEffect(() => {
    const initiateAudioContext = async () => {
      if (typeof window.AudioContext !== "undefined") {
        // create AudioContext
        const newAudioContext = new window.AudioContext();
        // ask for permission to use microphone
        await navigator.mediaDevices.getUserMedia({ audio: true });
        setAuditContext(newAudioContext);
      }
    };
    initiateAudioContext();
  }, []);

  return (
    <AudioAPIContext.Provider value={audioContext}>
      <div className="flex items-center justify-center w-screen h-screen bg-white">
        <div className="bg-black p-2 overflow-hidden">
          <div className="h-20"></div>
          <div className="overflow-auto flex">
            <Octave octaveIndex={0} />
            <Octave octaveIndex={1} />
            <Octave octaveIndex={2} />
            <Octave octaveIndex={3} />
            <Octave octaveIndex={4} />
            <Octave octaveIndex={5} />
            <Octave octaveIndex={6} />
          </div>
        </div>
      </div>
    </AudioAPIContext.Provider>
  );
};

export default App;
