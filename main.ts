input.onSound(DetectedSound.Loud, function () {
    sprite.delete()
    Vie = -1
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Ghost)
    }
    basic.showString("CHUT")
})
input.onButtonPressed(Button.B, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        Vie += 1
    } else {
        Vie = -1
    }
})
input.onGesture(Gesture.Shake, function () {
    Boo()
})
function Boo () {
    sprite.delete()
    Vie = -1
    music.setVolume(255)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Skull)
    }
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.InBackground)
    basic.showString("Boo!")
}
let Vie = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(0, 0)
Vie = -1
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(200)
    led.plot(Vie, 4)
    if (Vie == 3) {
        Boo()
        basic.pause(1000)
    }
})
