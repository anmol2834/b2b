import Lenis from 'lenis';
import {
  globalScrollY,
  globalProgress,
  globalVelocity,
  globalScrollDirection,
} from './MotionValues';

export class ScrollEngine {
  private static instance: ScrollEngine | null = null;
  private lenis: Lenis | null = null;
  private rafId: number | null = null;
  private isRunning: boolean = false;

  private constructor() {}

  public static getInstance(): ScrollEngine {
    if (!ScrollEngine.instance) {
      ScrollEngine.instance = new ScrollEngine();
    }
    return ScrollEngine.instance;
  }

  public init(): void {
    if (typeof window === 'undefined' || this.lenis) return;

    // Enterprise-tuned Lenis settings for high-precision, zero-latency 60/120 FPS
    this.lenis = new Lenis({
      duration: 1.0,
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.0,
      syncTouch: false,
      autoResize: true,
    });

    this.lenis.on('scroll', (e: { scroll: number; progress: number; velocity: number; direction: number }) => {
      globalScrollY.set(e.scroll);
      globalProgress.set(e.progress);
      globalVelocity.set(e.velocity);
      globalScrollDirection.set(e.direction);
    });

    this.startRaf();
  }

  private startRaf(): void {
    if (this.isRunning) return;
    this.isRunning = true;

    const animate = (time: number) => {
      if (this.lenis) {
        this.lenis.raf(time);
      }
      this.rafId = requestAnimationFrame(animate);
    };

    this.rafId = requestAnimationFrame(animate);
  }

  public getLenis(): Lenis | null {
    return this.lenis;
  }

  public destroy(): void {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    if (this.lenis) {
      this.lenis.destroy();
      this.lenis = null;
    }
    this.isRunning = false;
  }
}
