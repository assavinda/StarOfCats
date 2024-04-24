export class Animate {

    async PlayAnimate(element) {
        element.style.animationPlayState = 'running';
    }

    async PauseAnimate(element) {
        element.style.animationPlayState = 'paused';
    }

    async PauseThenAnimate(element,pauseTime) {
        let ItrCount = 1;
        element.onanimationiteration = () => {
            let pastCount = ItrCount;
            ItrCount++;
            if (ItrCount > pastCount) {
                element.style.animationPlayState = 'paused';
                setTimeout(() => {
                    element.style.animationPlayState = 'running';
                },pauseTime);
            };
        };
    }

}