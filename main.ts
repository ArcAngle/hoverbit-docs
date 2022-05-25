let Roll = 0
basic.forever(function () {
    let Throttle = 0
    let Arm = 0
    Roll = input.rotation(Rotation.Roll)
    basic.clearScreen()
    if (Arm) {
        led.plot(0, 0)
    }
    led.plot(0, 4 - Throttle / 25)
})
