class Credits extends Phaser.Scene {
    constructor() {
        super("creditScene")
    }

    create() {
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)

        // background
        this.add.sprite(0, 0, 'credits_background').setOrigin(0).setScale(4)

        // train
        this.train = this.add.sprite(-150, height-72, 'train').setOrigin(0.5).setScale(2)
        this.train.play('choo-choo')

        // text config
        let textConfig = {
            fontFamily: '"Press Start 2P"',
            fontSize: '28px',
            color: '#843605',
            align: 'left',
            lineSpacing: 10,
            fixedWidth: 0
        }

        var creditsText = 'Code, Visuals, Animations:\nNick Corfmat\n\nMusic:\nGarage Life Rock N Roll - Sound Creator, youtube.com/watch?v=oS3CR3Ci1oY\nWestern Standoff Theme - GamingSoundEffects, youtube.com/watch?v=7_eEug_ysmw\n\nSFX:\nExplosion - CopyrightFreeSFX, youtube.com/watch?v=_sIX-w3eMz4\nButton Clicks (x2) - Royalty Free Sound FX, youtube.com/watch?v=OHSUmbCtPd4\nGame Over Theme - Free Sound Effects, youtube.com/watch?v=YDEf4quUmvs\n\nBuilt on Phaser 3.7                                                                  Return to Menu (M)'

        // credits text
        this.add.text(width/2 + 15, 3*height/7, creditsText, textConfig).setOrigin(0.5)
    }

    update() {

        // moving train
        if (this.train.x >= width + 300) {
            this.train.x = -150
        } else {
            this.train.x += 1
        }

        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            exitSFX.play()
            this.scene.start('menuScene')
        }
    }
}