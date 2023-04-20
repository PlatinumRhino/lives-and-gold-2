function Quest3 () {
    music.play(music.createSong(hex`0078000408020400001c00010a006400f401640000040000000000000000000000000005000004400000000400030a14200c001000010f10001400011e14001800010c1c00200001122000240001252400280001082c003000011234003800030f202a3c004000010801001c000f05001202c102c20100040500280000006400280003140006020004400000000400031d252c08000c000216190c001000012418001c0001241c002000012a24002800020f1d28002c0001222c003000012738003c0001273c004000012005001c000f0a006400f4010a0000040000000000000000000000000000000002180010001400010514001800011218001c00011d20002400010c07001c00020a006400f401640000040000000000000000000000000000000003120010001400012c28002c00012c30003400010a`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(img`
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 1 3 3 3 3 3 3 1 3 3 3 3 3 3 
        3 3 3 1 2 3 3 2 1 3 3 3 2 2 2 3 
        2 2 3 1 2 2 2 2 1 3 2 2 2 2 2 2 
        2 2 2 2 2 1 5 2 2 2 2 2 2 2 2 2 
        3 2 2 2 2 5 1 2 2 2 2 2 2 3 3 3 
        3 2 2 2 2 2 2 2 2 2 2 2 3 3 3 3 
        3 3 3 3 2 2 2 2 2 2 3 3 2 2 2 3 
        3 3 3 3 2 2 2 2 3 3 3 2 2 5 2 2 
        1 3 3 3 3 2 2 3 3 3 2 2 5 5 5 2 
        1 1 3 3 3 3 3 3 3 3 2 5 5 2 5 2 
        3 1 1 3 3 1 1 1 1 3 2 5 2 5 5 4 
        3 3 3 3 1 1 3 3 3 3 2 5 4 5 5 4 
        3 3 3 3 3 3 3 3 3 3 3 d d 5 d 3 
        3 3 3 3 3 3 3 3 3 3 3 3 d d d 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 d d 3 
        `)
    adventure.addToTextlog("As you close your eyes you can hear flapping in the distance.")
    adventure.addToTextlog("Your eyes flash open! You see a red creature flying in front of you!")
    adventure.addToTextlog("You look around and raise the torch from the ground!")
    adventure.addToTextlog("(A) to smack the creature with the torch!")
    adventure.addToTextlog("(B) to try and run away.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.changeScoreOverride(adventure.Currency.Coins, 15)
    } else {
        adventure.addToTextlog("You have been beaten by the creature!")
        game.over(false)
    }
}
function Quest2 () {
    music.play(music.createSong(hex`0078000408020300001c00010a006400f401640000040000000000000000000000000005000004260008000c00010510001400011418001c00020f2528002c00012038003c000211253c004000010801001c000f05001202c102c201000405002800000064002800031400060200042700000004000220290400080001160c001000020c272000240001142c003000010c38003c0002192c03001c0001dc00690000045e0100040000000000000000000005640001040003120008000c00011d1c0020000108300034000114`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(img`
        c c c c c . 4 4 b b c c c . . . 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c 2 4 2 4 4 4 2 2 2 2 c 
        c c c c 2 2 4 4 2 5 5 5 4 4 4 2 
        c c c 2 4 2 4 4 4 5 5 5 4 2 4 2 
        c c c 2 4 4 5 5 5 5 5 5 4 4 2 2 
        c c c 2 2 5 5 5 5 5 4 4 4 4 2 c 
        c c c c d 5 5 5 5 5 4 4 4 2 c c 
        c c c c d d d 5 5 5 4 4 2 2 c c 
        c c c d d d d d c c c c c c c c 
        c c c d d d c c c c c c c c c c 
        c c d d d c c c c c c c c c c c 
        c d d d d c c c c c c c c c c c 
        d d d d c c c c c c c c c c c c 
        d d d c c c c c c c c c c c c c 
        `)
    adventure.addToTextlog("You look around and see the torch is right next to you.")
    adventure.addToTextlog("The torch appears to be the only source of light in this place.")
    adventure.addToTextlog("Your hands are freezing. Water is leaking in from somewhere.")
    adventure.addToTextlog("(A) to pick up the torch")
    adventure.addToTextlog("(B) close your eyes and wait.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        Quest3()
    } else {
        adventure.addToTextlog("Your adventure is over before it has even begun.")
        game.over(false)
    }
}
info.onLifeZero(function () {
    game.over(false)
})
function Quest1 () {
    music.play(music.createSong(hex`0078000408020400001c00010a006400f4016400000400000000000000000000000000050000040c0008000c00012518001c00012c01001c000f05001202c102c20100040500280000006400280003140006020004260000000400012208000c00010d1000140002142918001c00012020002400020d2730003400011102001c000c960064006d019001000478002c010000640032000000000a06000507000000040002192c03001c0001dc00690000045e0100040000000000000000000005640001040003060028002c000125`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(img`
        c b b 4 4 4 4 4 b b c c c c b c 
        c b b 4 5 5 4 b b b c c c b b c 
        c b b c c c c b b b c c c b c c 
        c b b c c c c b b b c c c b c c 
        c b b c c c c c b b c c c b c c 
        c b b c c c c c b b c c c b b c 
        c b b b c c c c b b c c c b b c 
        c c b b c c c c b b c c c b b c 
        c c b b c c c b b b c c c b b c 
        c b b b c c c b b b c c c b b c 
        c b b b c c c c b b c c c b b c 
        c b b c c c c c b b c c c b b c 
        c b b c c c c c b b c c c b b c 
        c b b b c c c c b b c c b b b c 
        c c b b c c c c b b c c b b b c 
        c c b b c c c c b b c c b b b c 
        `)
    adventure.addToTextlog("You wake up in a dimly lit room. The walls around you are wet and the floor is hard.")
    adventure.addToTextlog("The torch barely lights the room. You see iron bars in front of you.")
    adventure.addToTextlog("It seems you are locked in a jail cell.")
    adventure.addToTextlog("(A) to look around")
    adventure.addToTextlog("(B) to close your eyes and wait")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.changeScoreOverride(adventure.Currency.Coins, 5)
        Quest2()
    } else {
        adventure.addToTextlog("Close your eyes")
        info.changeLifeBy(-1)
        Quest3()
    }
}
info.onScore(20, function () {
    game.gameOver(true)
})
info.setLife(5)
Quest1()
