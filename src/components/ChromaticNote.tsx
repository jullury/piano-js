import React from "react";
import { NaturalNoteProps } from "./NaturalNote";
import { AudioAPIContext } from "../App";
type ChromaticNoteProps = NaturalNoteProps & {
  left: number;
};
const ChromaticNote: React.FC<ChromaticNoteProps> = (props) => {
  const audioContext = React.useContext(AudioAPIContext);
  const [oscillator, setOscillator] = React.useState<
    OscillatorNode | undefined
  >(undefined);

  const play = () => {
    if (audioContext) {
      const newOscillator = audioContext.createOscillator();
      newOscillator.connect(audioContext.destination);
      newOscillator.frequency.value = props.frequency;
      newOscillator.start();
      setOscillator(newOscillator);
    }
  };

  const stop = () => {
    if (audioContext && oscillator) {
      oscillator.stop();
      setOscillator(undefined);
    }
  };

  return (
    <div
      className={`active:bg-slate-800 h-36 bg-black w-10 border-slate-500 border-[1px] z-30 absolute flex p-2 items-end justify-center`}
      style={{ left: `${props.left * 4}px` }}
      onMouseDown={() => play()}
      onMouseUp={() => stop()}
    >
      <span className="text-white">{props.label}{props.octaveIndex}</span>

    </div>
  );
};
export default ChromaticNote;
