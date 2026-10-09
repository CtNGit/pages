import GameEnvBackground from '@assets/js/GameEnginev1.1/essentials/GameEnvBackground.js';
import Player from '@assets/js/GameEnginev1.1/essentials/Player.js';
import TimeLapScreen from './TimeLapScreen.js';

class GameLevelSpring {
  constructor(gameEnv) {
    const path = gameEnv.path;
    const background_data = {
      name: "Spring Course",
      greeting: "Welcome to the 3rd Annual Spring Grand Prix!",
      src: "/images/projects/racing-game/spring_track_level_3.jpg",
      pixels: { height: 360, width: 643 }
    };
    const player_data = {
        name: "Red Car",
        greeting: "I'm the red car!",
        src: "/images/projects/racing-game/Directions_red_car.png",
        SCALE_FACTOR: 20,
        STEP_FACTOR: 1200,
        pixels: { height: 1024, width: 1536 },
        orientation: { rows: 4, columns: 4 },
        up:        { row: 3, start: 0, columns: 1 },
        upRight:   { row: 0, start: 2, columns: 1, rotate: Math.PI },
        right:     { row: 1, start: 0, columns: 1 },
        downRight: { row: 2, start: 0, columns: 1 },
        down:      { row: 0, start: 0, columns: 1 },
        downLeft:  { row: 0, start: 2, columns: 1 },
        left:      { row: 3, start: 2, columns: 1 },
        upLeft:    { row: 2, start: 0, columns: 1, rotate: Math.PI },
        hitbox: { widthPercentage: 0.5, heightPercentage: 0.5 },
        keypress: { up: 87, left: 65, down: 83, right: 68 }
    }
    const player2_data = {
        ...player_data,
        name: "Blue Car",
        greeting: "I'm the blue car!",
        src: "/images/projects/racing-game/Directions_blue_car.png",
        INIT_POSITION: { x: 0, y: 0.1 }, // start below the red car so they don't overlap
        touchOptions: { interactLabel: "e", position: "right" },
        keypress: { up: 38, left: 37, down: 40, right: 39 } // Arrow keys
    }
    this.classes = [
        {class: GameEnvBackground, data: background_data},
        {class: Player, data: player_data},
        {class: Player, data: player2_data},
        {class: TimeLapScreen, data: { currentLap: 1, totalLaps: 3 }}
    ]
  }
}

export default GameLevelSpring;
