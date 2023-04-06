import React from "react";
import { AudioAPIContext } from "../App";
export type NaturalNoteProps = {
  frequency: number;
  label: string;
  octaveIndex: number
};

const NaturalNote: React.FC<NaturalNoteProps> = (props) => {
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
      className="active:bg-slate-100 h-60 bg-white w-12 border-slate-500 border-[1px] flex p-2 items-end justify-center"
      onMouseDown={() => play()}
      onTouchStart={() => play()}
      onMouseUp={() => stop()}
      onTouchCancel={() => stop()}
    >
      <span className="text-black">{props.label}{props.octaveIndex}</span>
    </div>
  );
};

export default NaturalNote;
