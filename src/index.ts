import { Application } from 'pixi.js'
// import { Scene } from './scenes/Scene'; // This is the import statement
// 
// import { Scene } from './tuts/AnimatedSpriteScene'; // This is the import statement
//
import { Scene } from './tuts/TickerScene'; // This is the import statement

const app = new Application<HTMLCanvasElement>({
    view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    backgroundColor: 0x6495ed,
    width: 640,
    height: 480
});
// Animated Sprite
// const sceny: Scene = new Scene();

// Ticker Scene
// pass in the screen size to avoid "asking up"
const sceny: Scene = new Scene(app.screen.width, app.screen.height);

app.stage.addChild(sceny)