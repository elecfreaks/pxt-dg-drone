input.onButtonPressed(Button.A, function () {
    XG171_DRONE.moveAction(XG171_DRONE.Directionoptions.Forward, 50)
})
input.onButtonPressed(Button.AB, function () {
    XG171_DRONE.loading()
})
input.onButtonPressed(Button.B, function () {
    XG171_DRONE.rollAction(XG171_DRONE.Rolloptions.Roll_back, 1)
})
XG171_DRONE.setSerialPort(SerialPin.P1, SerialPin.P2)
XG171_DRONE.setWorkMode(XG171_DRONE.WorkMode.Normalmode)
XG171_DRONE.setHorizontalSpeed(50)
XG171_DRONE.setVerticalSpeed(50)
XG171_DRONE.setFlightAltitude(100)
XG171_DRONE.takeoff(100)
basic.pause(5000)
