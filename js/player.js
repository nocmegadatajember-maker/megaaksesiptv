class IPTVPlayer {
    constructor(videoElement) {
        this.videoElement = videoElement;
        this.hls = null;
    }

    loadStream(streamUrl) {
        if (Hls.isSupported()) {
            this.hls = new Hls();
            this.hls.loadSource(streamUrl);
            this.hls.attachMedia(this.videoElement);
            this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
                this.videoElement.play();
            });
        } else if (this.videoElement.canPlayType('application/vnd.apple.mpegurl')) {
            this.videoElement.src = streamUrl;
            this.videoElement.addEventListener('loadedmetadata', () => {
                this.videoElement.play();
            });
        }
    }

    play() {
        this.videoElement.play();
    }

    pause() {
        this.videoElement.pause();
    }

    stop() {
        this.videoElement.pause();
        this.videoElement.currentTime = 0;
    }
}