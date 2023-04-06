import React from "react";
import NaturalNote from "./NaturalNote";
import ChromaticNote from "./ChromaticNote";

type OctaveProps = {
  octaveIndex: number;
};

const noteLabels = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

const Octave: React.FC<OctaveProps> = (props) => {
  const frequencies = React.useMemo(
    () =>
      noteLabels.map((label, noteIndex) => ({
        frequency:
          440 *
          Math.pow(2, (noteIndex - 9) / 12) *
          Math.pow(2, props.octaveIndex - 4),
        label,
        octaveIndex: props.octaveIndex
      })),
    []
  );
  return (
    <div className="flex relative">
      <NaturalNote {...frequencies[0]} />
      <ChromaticNote {...frequencies[1]} left={7} />
      <NaturalNote {...frequencies[2]} />
      <ChromaticNote {...frequencies[3]} left={19} />
      <NaturalNote {...frequencies[4]} />
      <NaturalNote {...frequencies[5]} />
      <ChromaticNote {...frequencies[6]} left={43} />
      <NaturalNote {...frequencies[7]} />
      <ChromaticNote {...frequencies[8]} left={55} />
      <NaturalNote {...frequencies[9]} />
      <ChromaticNote {...frequencies[10]} left={67} />
      <NaturalNote {...frequencies[11]} />
    </div>
  );
};
export default Octave;
