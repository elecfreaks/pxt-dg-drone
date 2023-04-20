![](https://img.shields.io/badge/Plantform-Micro%3Abit-red) ![](https://img.shields.io/github/v/release/elecfreaks/pxt-dg-drone) ![](https://img.shields.io/github/last-commit/elecfreaks/pxt-dg-drone) ![](https://img.shields.io/github/languages/top/elecfreaks/pxt-dg-drone) ![](https://img.shields.io/github/issues/elecfreaks/pxt-dg-drone) ![](https://img.shields.io/github/license/elecfreaks/pxt-dg-drone) 

# XG DIY Drone Package

XG DIY Drone is an unmanned aerial vehicle jointly developed by XG and ELECFREAKS, which is compact and flexible in appearance. The functional parameters of XG DIY Drone have been opened, and when used with micro:bit, it will bring you endless imagination and creative space. It is a good tool for learning programming and drones.

This extension is designed to programme and drive the XG171-Drone, You can [get XG171-Drone from here.](https://detail.1688.com/offer/712881542407.html)

## Code Example
```JavaScript
input.onButtonPressed(Button.A, function () {
    XG171_DRONE.moveAction(XG171_DRONE.Directionoptions.Forward, 50)
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

```
## Supported targets
for PXT/microbit

## License
MIT

