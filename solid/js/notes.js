const notes = [];
const noteLabels = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

for (let octave = 2; octave <= 5; octave++) {
  for (let noteIndex = 0; noteIndex < noteLabels.length; noteIndex++) {
    const noteLabel = noteLabels[noteIndex];
    const frequency = 440 * Math.pow(2, (noteIndex - 9) / 12) * Math.pow(2, octave - 4);

    notes.push({
      label: `${noteLabel}${octave}`,
      frequency: frequency
    });
  }
}