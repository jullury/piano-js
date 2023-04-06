if (typeof window.AudioContext !== "undefined") {
  // create AudioContext
  const audioContext = new window.AudioContext();

  // ask for permission to use microphone
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then((stream) => {
      // create oscillator node
      const oscillator = audioContext.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.value = 130.81; // frequency of "do" note

      // connect oscillator to output
      oscillator.connect(audioContext.destination);

      // start playing the sound
      oscillator.start();

      // stop oscillator after 2 seconds
      setTimeout(() => {
        oscillator.stop();
      }, 200);
    })
    .catch((err) => {
      // permission denied or other error
      console.error("Error accessing microphone:", err);
    });
} else {
  console.error("AudioContext not supported");
}
