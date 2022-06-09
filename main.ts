controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ........ccccc...................
        ......ccbbbbbc..................
        ....ccddbbbbbbf.................
        ...cbbbddbbffbf.................
        ....ffffdbbffbff................
        .......fbbbbbbbf................
        .......fbbbbbbbff...............
        ......ffbbbbbbbbfff.............
        ......f6bbbbbb663ddcc...........
        .....cc66bbbb666dddddc..........
        .....cd36666663dddddddc.........
        .....cddd3333dbddddddbcc........
        .....cddddddddbdddddbbddc.......
        .....cddddddddbbdddbbdddbc......
        ......cddddddddbbdbbddddbbccc...
        ......ccddddddddbbbbcccccbbbcc..
        .......ccddddddddddddddbccffff..
        ........cccbddccbddddbbfff......
        ........c333bb333cbbfff.........
        ........c33cc33cc3fff...........
        `, mySprite, 0, -50)
    music.spooky.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    otherSprite.destroy(effects.hearts, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.setLife(1)
    ASTEROIDE.destroy(effects.warmRadial, 500)
    scene.cameraShake(8, 500)
})
let ASTEROIDE: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
game.splash("BENVINUTS A L'ESPAI", "Apreta A per començar i B per disparar")
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f 2 2 2 2 2 f . . . . . 
    . . . f 2 2 2 2 2 2 2 f . . . . 
    . . f 2 2 2 2 2 2 2 2 2 f . . . 
    f f f 2 2 2 2 2 f f f f f . . . 
    f 2 f 2 2 2 2 2 f 1 1 1 f . . . 
    f 2 f 2 2 2 2 2 f f f f f . . . 
    f 2 f 2 2 2 2 2 2 2 2 2 f . . . 
    f 2 f 2 2 2 2 2 2 2 2 2 f . . . 
    f f f 2 2 2 2 2 2 2 2 2 f . . . 
    . . f 2 2 2 2 2 2 2 2 2 f . . . 
    . . f 2 2 2 f f f 2 2 2 f . . . 
    . . . f f f . . . f f f . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setVelocity(77, 32)
controller.moveSprite(mySprite, 100, 100)
game.onUpdateInterval(1000, function () {
    ASTEROIDE = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 8 8 8 1 1 1 2 2 2 . . . . 
        . . . 8 8 8 1 1 1 2 2 2 . . . . 
        . . . 8 8 8 1 1 1 2 2 2 . . . . 
        . . . 8 8 8 1 1 1 2 2 2 . . . . 
        . . . 8 8 8 1 1 1 2 2 2 . . . . 
        . . . 8 8 8 1 1 1 2 2 2 . . . . 
        . . . 8 8 8 1 1 1 2 2 2 . . . . 
        . . . 8 8 8 1 1 1 2 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, 50)
    ASTEROIDE.x += randint(0, scene.screenWidth())
    ASTEROIDE.setKind(SpriteKind.Enemy)
})
