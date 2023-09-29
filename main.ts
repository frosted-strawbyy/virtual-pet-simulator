input.onButtonPressed(Button.A, function () {
    hp += 1
    for (let index = 0; index < 2; index++) {
        music.play(music.createSoundExpression(
        WaveShape.Square,
        400,
        600,
        255,
        0,
        100,
        SoundExpressionEffect.Warble,
        InterpolationCurve.Linear
        ), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . # . # .
            # # # # #
            # . . . #
            # # # # #
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
    if (hp > 5) {
        hp = 5
    }
    check_hp()
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showIcon(IconNames.Surprised)
    music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
    basic.pause(1000)
    check_hp()
})
input.onGesture(Gesture.SixG, function () {
    hp = 0
    check_hp()
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        # . . . #
        . # # # .
        `)
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
    basic.pause(1000)
    check_hp()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
    basic.pause(1000)
    check_hp()
})
function check_hp () {
    if (hp == 0) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.InBackground)
        basic.pause(1000)
        basic.clearScreen()
        basic.showString("RIP")
        basic.pause(9999999999999999)
    }
    if (hp == 1) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            # . . . .
            `)
        music.play(music.createSoundExpression(
        WaveShape.Square,
        400,
        600,
        255,
        0,
        100,
        SoundExpressionEffect.Warble,
        InterpolationCurve.Linear
        ), music.PlaybackMode.InBackground)
    }
    if (hp == 2) {
        basic.showLeds(`
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            # # . . .
            `)
        music.play(music.createSoundExpression(
        WaveShape.Square,
        400,
        600,
        255,
        0,
        100,
        SoundExpressionEffect.Warble,
        InterpolationCurve.Linear
        ), music.PlaybackMode.InBackground)
    }
    if (hp == 3) {
        basic.showLeds(`
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            # # # . .
            `)
        music.play(music.createSoundExpression(
        WaveShape.Square,
        400,
        600,
        255,
        0,
        100,
        SoundExpressionEffect.Warble,
        InterpolationCurve.Linear
        ), music.PlaybackMode.InBackground)
    }
    if (hp == 4) {
        basic.showLeds(`
            . # . # .
            # . . . #
            . # # # .
            . . . . .
            # # # # .
            `)
        music.play(music.createSoundExpression(
        WaveShape.Square,
        400,
        600,
        255,
        0,
        100,
        SoundExpressionEffect.Warble,
        InterpolationCurve.Linear
        ), music.PlaybackMode.InBackground)
    }
    if (hp == 5) {
        basic.showLeds(`
            . # . # .
            # . . . #
            . # # # .
            . . . . .
            # # # # #
            `)
    }
}
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.InBackground)
    basic.pause(1000)
    check_hp()
})
let hp = 0
hp = 6
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.InBackground)
check_hp()
loops.everyInterval(10000, function () {
    hp += -1
    check_hp()
})
