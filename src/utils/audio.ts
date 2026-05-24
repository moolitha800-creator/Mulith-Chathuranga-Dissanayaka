/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Custom serene oriental synthesizer using Web Audio API to avoid external copyright/audio hosting limitations
class VesakAmbientSynth {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private activeOscillators: { osc: OscillatorNode; gain: GainNode }[] = [];
  private sequenceInterval: any = null;
  private currentStep = 0;

  // Pentatonic scale (peaceful Oriental major pentatonic: C, D, E, G, A)
  private scale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99, 880.00];

  constructor() {}

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  start() {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;

    // Start a soft ambient drone (low base note)
    this.playDrone();

    // Start a gentle melody sequence (wind-chime / flute sound)
    let stepCount = 0;
    this.sequenceInterval = setInterval(() => {
      if (!this.isPlaying) return;
      
      // Play a bell sound periodically
      if (stepCount % 8 === 0) {
        this.playDeepBell();
      }

      // Random peaceful notes flowing from pentatonic scale
      if (Math.random() > 0.3) {
        const noteIndex = Math.floor(Math.random() * this.scale.length);
        const pitch = this.scale[noteIndex];
        const isFlute = Math.random() > 0.5;
        
        if (isFlute) {
          this.playFluteNote(pitch, 1.2 + Math.random() * 1.5);
        } else {
          this.playBellNote(pitch, 1.0 + Math.random() * 2.0);
        }
      }

      stepCount++;
    }, 1800);
  }

  stop() {
    this.isPlaying = false;
    if (this.sequenceInterval) {
      clearInterval(this.sequenceInterval);
      this.sequenceInterval = null;
    }
    this.activeOscillators.forEach(({ osc, gain }) => {
      try {
        osc.stop();
      } catch (e) {}
    });
    this.activeOscillators = [];
  }

  getPlaying() {
    return this.isPlaying;
  }

  private playDrone() {
    if (!this.ctx) return;
    
    // Low pure drone for meditation feeling
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = "sine";
    osc.frequency.setValueAtTime(130.81, this.ctx.currentTime); // C3 low drone
    
    gain.gain.setValueAtTime(0, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.04, this.ctx.currentTime + 3.0);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start();
    this.activeOscillators.push({ osc, gain });
  }

  private playDeepBell() {
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(196.00, this.ctx.currentTime); // G3 Deep temple chime
    
    gain.gain.setValueAtTime(0, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.06, this.ctx.currentTime + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 6.0);

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(400, this.ctx.currentTime);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 6.1);
  }

  public playBellNote(frequency: number, duration: number) {
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);

    // Sweet overtone for bell
    const overtone = this.ctx.createOscillator();
    const overtoneGain = this.ctx.createGain();
    overtone.type = "triangle";
    overtone.frequency.setValueAtTime(frequency * 2, this.ctx.currentTime);

    gain.gain.setValueAtTime(0, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.025, this.ctx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

    overtoneGain.gain.setValueAtTime(0, this.ctx.currentTime);
    overtoneGain.gain.linearRampToValueAtTime(0.008, this.ctx.currentTime + 0.02);
    overtoneGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration * 0.5);

    osc.connect(gain);
    overtone.connect(overtoneGain);
    overtoneGain.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    overtone.start();
    
    osc.stop(this.ctx.currentTime + duration + 0.1);
    overtone.stop(this.ctx.currentTime + duration + 0.1);
  }

  private playFluteNote(frequency: number, duration: number) {
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);
    
    // Gentle vibrato
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.setValueAtTime(5.5, this.ctx.currentTime); // 5.5Hz vibrato
    lfoGain.gain.setValueAtTime(frequency * 0.008, this.ctx.currentTime); // subtle pitch pitch change
    
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);

    gain.gain.setValueAtTime(0, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.02, this.ctx.currentTime + 0.3); // Slow attack like a flute
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

    // Lowpass filter to make it softer and warmer
    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(800, this.ctx.currentTime);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    lfo.start();
    osc.start();

    lfo.stop(this.ctx.currentTime + duration + 0.1);
    osc.stop(this.ctx.currentTime + duration + 0.1);
  }
}

export const vesakSynth = new VesakAmbientSynth();
export default vesakSynth;
