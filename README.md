![](https://img.shields.io/badge/Plantfrom-Micro%3Abit-red) ![](https://img.shields.io/github/v/release/elecfreaks/pxt-XG171-DRONE) ![](https://img.shields.io/github/last-commit/elecfreaks/pxt-XG171-DRONE) ![](https://img.shields.io/github/languages/top/elecfreaks/pxt-XG171-DRONE) ![](https://img.shields.io/github/issues/elecfreaks/pxt-XG171-DRONE) ![](https://img.shields.io/github/license/elecfreaks/pxt-XG171-DRONE) 

# XG DIY Drone Package

XG DIY Drone is an unmanned aerial vehicle jointly developed by XG and ELECFREAKS, which is compact and flexible in appearance. The functional parameters of XG DIY Drone have been opened, and when used with micro:bit, it will bring you endless imagination and creative space. It is a good tool for learning programming and drones.

This extension is designed to programme and drive the XG171-Drone, You can [get XG171-Drone from here.](https://detail.1688.com/offer/712881542407.html)

## Code Example
```JavaScript

input.onButtonPressed(Button.A, function () {
    XG171_DRONE.Takeoff(100)
    basic.pause(2000)
    XG171_DRONE.Move_action(XG171_DRONE.Directionoptions.Forward, 20)
    basic.pause(5000)
    XG171_DRONE.Loading()
})
XG171_DRONE.Set_serial_port(SerialPin.P1, SerialPin.P2)
XG171_DRONE.Set_status_light(true)
XG171_DRONE.Set_work_mode(XG171_DRONE.WorkMode.Normalmode)
XG171_DRONE.Set_horizontal_speed(50)
XG171_DRONE.Set_vertical_speed(50)
XG171_DRONE.Set_flight_altitude(100)


```
## Supported targets
for PXT/microbit

## License
MIT

