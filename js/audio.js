// Web Audio API Sound Synthesizer for Cinematic Streaming Audio Experience

class AudioController {
  constructor() {
    this.ctx = null;
    this.muted = true; // start muted by default as per modern browser policy, but with easy toggle
    this.initialized = false;
  }

  init() {
    if (!this.initialized) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
        this.initialized = true;
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.init();
    this.muted = !this.muted;
    return this.muted;
  }

  // Iconic cinematic introductory boom (analogous to Netflix "Ta-dum")
  playIntroBoom() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;

    // Sub Bass Thump
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    subOsc.type = "sine";
    subOsc.frequency.setValueAtTime(120, now);
    subOsc.frequency.exponentialRampToValueAtTime(32, now + 1.2);

    subGain.gain.setValueAtTime(0.7, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);

    subOsc.connect(subGain);
    subGain.connect(this.ctx.destination);

    subOsc.start(now);
    subOsc.stop(now + 1.8);

    // Mid-range cinematic chord swell
    const freqs = [164.81, 220.00, 329.63, 440.00]; // E3, A3, E4, A4
    freqs.forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = idx % 2 === 0 ? "sawtooth" : "triangle";
      osc.frequency.setValueAtTime(f, now + 0.1);
      
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.12 / (idx + 1), now + 0.35);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);

      // Lowpass filter for analog warmth
      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(2500, now + 0.4);
      filter.frequency.exponentialRampToValueAtTime(300, now + 2.4);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + 0.1);
      osc.stop(now + 2.5);
    });
  }

  // Subtle hover tick
  playHoverTick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);

    gain.gain.setValueAtTime(0.03, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  }

  // Cinematic modal open swoosh
  playModalOpen() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;

    // Rising atmospheric tone
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(110, now);
    osc.frequency.exponentialRampToValueAtTime(220, now + 0.4);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(300, now);
    filter.frequency.exponentialRampToValueAtTime(1200, now + 0.35);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.6);
  }

  // Modal close tone
  playModalClose() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(130, now + 0.2);

    gain.gain.setValueAtTime(0.04, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.2);
  }

  // Final Reveal Grand Chime (when all 12 are watched)
  playFinalUnlock() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const chord = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99]; // C Major arpeggio / crescendo

    chord.forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = "triangle";
      osc.frequency.setValueAtTime(f, now + i * 0.15);

      gain.gain.setValueAtTime(0.001, now + i * 0.15);
      gain.gain.linearRampToValueAtTime(0.12, now + i * 0.15 + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.0);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + i * 0.15);
      osc.stop(now + 4.2);
    });
  }
}

export const soundFx = new AudioController();
