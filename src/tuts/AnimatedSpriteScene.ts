import { AnimatedSprite, Container, Texture } from "pixi.js";

export class Scene extends Container {
    constructor() {
        super();

        // This is an array of strings, we need an array of Texture
        const clampyFrames: Array<string> = [
          "banana.png",
          "kitty.png",
          "clampy.png",
        ];

        // `array.map()` creates an array from another array by doing something to each element.
        // `(stringy) => Texture.from(stringy)` means
        // "A function that takes a string and returns a Texture.from(that String)"
        // const animatedClampy: AnimatedSprite = new AnimatedSprite(clampyFrames.map((stringy) => Texture.from(stringy)));

        // (if this javascript is too much, you can do a simple for loop and create a new array with Texture.from())
        const animFrames: Array<Texture> = [];
        for (let i = 0; i < clampyFrames.length; i++) {
            const poop = clampyFrames[i]
            animFrames.push(Texture.from(poop));
        }

        const animatedClampy: AnimatedSprite = new AnimatedSprite(animFrames);
        // animatedClampy.play();
        this.addChild(animatedClampy); // we just add it to the scene

        // Now... what did we learn about assigning functions...
        animatedClampy.onFrameChange = this.onClampyFrameChange.bind(this);
    }

    private onClampyFrameChange(currentFrame: any): void {
        console.log("Clampy's current frame is", currentFrame);
    }
}