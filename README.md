![](https://img.shields.io/badge/Plantfrom-Micro%3Abit-red) ![](https://img.shields.io/travis/com/lionyhw/pxt-XG171-DRONE) ![](https://img.shields.io/github/v/release/lionyhw/pxt-XG171-DRONE) ![](https://img.shields.io/github/last-commit/lionyhw/pxt-XG171-DRONE) ![](https://img.shields.io/github/languages/top/lionyhw/pxt-XG171-DRONE) ![](https://img.shields.io/github/issues/lionyhw/pxt-XG171-DRONE) ![](https://img.shields.io/github/license/lionyhw/pxt-XG171-DRONE) 

# XG171-Drone Package

![](/images.png/)

This extension is designed to programme and drive the TPBot, You can [get TPBot from the Elecfreaks store](https://www.elecfreaks.com/store/tpbot.html)

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

