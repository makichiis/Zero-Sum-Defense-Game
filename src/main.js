import * as LittleJS from "littlejsengine";

LittleJS.Engine.start();

class MyGame extends LittleJS.Game {
  constructor() {
    super();
    this.sprite = new LittleJS.Sprite(0, 0, 64, 64);
  }

  update() {
    this.sprite.x += 2;
    if (this.sprite.x > LittleJS.Engine.width) this.sprite.x = 0;
  }

  render() {
    this.sprite.draw();
  }
}

LittleJS.Engine.game = new MyGame();
