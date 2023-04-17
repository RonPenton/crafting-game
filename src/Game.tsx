import React, { useEffect } from 'react';
import Phaser from 'phaser';
import tilemapJson from './tilemap.json';

const Game: React.FC = () => {
    useEffect(() => {
        const config: Phaser.Types.Core.GameConfig = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            parent: 'phaser-game',
            scene: {
                preload: preload,
                create: create,
            },
        };

        new Phaser.Game(config);

        function preload(this: Phaser.Scene) {
            this.load.image('tiles', 'assets/CL_MainLev.png');
            this.load.tilemapTiledJSON('tilemap', 'maps/map01.json');
        }

        function create(this: Phaser.Scene) {
            const map = this.make.tilemap({ key: 'tilemap' });
            const tileset = map.addTilesetImage('Craftland', 'tiles');
            const layer = map.createLayer('Tile Layer 1', tileset!);

            this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
            this.cameras.main.startFollow(new Phaser.Math.Vector2(0, 0));
        }
    }, []);

    return (
        <div id="phaser-game" style={{ position: 'absolute' }}></div>
    );
};

export default Game;
