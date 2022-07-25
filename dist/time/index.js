import { deferredPromise } from "../utils/index";
export class WelpodronTime {
    startTime = null;
    timeElapsed = 0;
    currentLoop = null;
    progress = 0;
    duration;
    finished;
    constructor(duration) {
        this.duration = duration;
        this.finished = deferredPromise();
    }
    loop = (timeStamp) => {
        this.startTime ??= timeStamp;
        this.timeElapsed = timeStamp - this.startTime;
        this.progress = this.timeElapsed / this.duration;
        if (this.progress >= 1)
            return this.stop();
        requestAnimationFrame(this.loop);
    };
    stop = () => {
        cancelAnimationFrame(this.currentLoop);
        this.finished.resolve();
    };
    start = () => {
        this.currentLoop = requestAnimationFrame(this.loop);
    };
}
//# sourceMappingURL=index.js.map