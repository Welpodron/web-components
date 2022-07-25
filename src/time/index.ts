import { Deferred, deferredPromise } from "../utils/index";

export class WelpodronTime {
  startTime: number | null = null;
  timeElapsed: number = 0;
  currentLoop: number | null = null;
  progress: number = 0;
  duration: number;
  finished: Deferred;

  constructor(duration: number) {
    this.duration = duration;
    this.finished = deferredPromise();
  }

  loop = (timeStamp: number) => {
    this.startTime ??= timeStamp;

    this.timeElapsed = timeStamp - <number>this.startTime;
    this.progress = this.timeElapsed / this.duration;

    // step function here

    if (this.progress >= 1) return this.stop();

    requestAnimationFrame(this.loop);
  };

  stop = () => {
    cancelAnimationFrame(<number>this.currentLoop);
    // after function here
    this.finished.resolve();
  };

  start = () => {
    // before function here
    this.currentLoop = requestAnimationFrame(this.loop);
  };
}
