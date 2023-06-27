![](https://img.shields.io/badge/Plantform-Micro%3Abit-red) ![](https://img.shields.io/github/v/release/elecfreaks/pxt-dg-drone) ![](https://img.shields.io/github/last-commit/elecfreaks/pxt-dg-drone) ![](https://img.shields.io/github/languages/top/elecfreaks/pxt-dg-drone) ![](https://img.shields.io/github/issues/elecfreaks/pxt-dg-drone) ![](https://img.shields.io/github/license/elecfreaks/pxt-dg-drone) 

# XG DIY Drone Package

XG DIY Drone is an unmanned aerial vehicle jointly developed by XG and ELECFREAKS, which is compact and flexible in appearance. The functional parameters of XG DIY Drone have been opened, and when used with micro:bit, it will bring you endless imagination and creative space. It is a good tool for learning programming and drones.

This extension is designed to programme and drive the XG171-Drone, You can [get XG171-Drone from here.](https://item.taobao.com/item.htm?ut_sk=1.Y1Zty/Huj2QDAP20hb7mDMJG_21380790_1687837652994.Copy.ShareGlobalNavigation_1&id=726583831726&sourceType=item&suid=F1469777-7FE8-4E3E-BD69-565629DFB282&un=0254f7633e86c72e369525b0c1cfb16c&share_crt_v=1&un_site=0&spm=a2159r.13376460.0.0&sp_abtk=gray_ShareGlobalNavigation_1_code_simpleios2&tbSocialPopKey=shareItem&sp_tk=OVlZa2RJeGhLa2o%3D&cpp=1&shareurl=true&short_name=h.UAKYLBF&bxsign=scdcMufzlnEdn2yZMDud0JFKjBqliqMg0F5690o_GdDNWyyIlgNwx82RF-ExA81Zl-ufVMlpDFuCIQuRWsfOCLfrN0UbaiOfEL9djol3Hn5_1nA-AsgZEOZWVFP5EDwCTo4kx52hBAnWLTWahmVXRkLSA&tk=9YYkdIxhKkj&app=chrome), And you can refer to this [wiki](http://www.xgsteam.com/aidNew?code=27)

## Code Example
```JavaScript
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


```
## Supported targets
for PXT/microbit

## License
MIT

