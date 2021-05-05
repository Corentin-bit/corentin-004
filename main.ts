let temps = 0
input.onButtonPressed(Button.A, function () {
    temps = 9
})
basic.forever(function () {
    basic.showNumber(temps)
    basic.pause(100)
    temps += -1
    if (temps < 0) {
        temps = 9
    }
})
