![](https://img.shields.io/badge/Plantfrom-Micro%3Abit-red) ![](https://img.shields.io/travis/com/lionyhw/pxt-XG171-DRONE) ![](https://img.shields.io/github/v/release/lionyhw/pxt-XG171-DRONE) ![](https://img.shields.io/github/last-commit/lionyhw/pxt-XG171-DRONE) ![](https://img.shields.io/github/languages/top/lionyhw/pxt-XG171-DRONE) ![](https://img.shields.io/github/issues/lionyhw/pxt-XG171-DRONE) ![](https://img.shields.io/github/license/lionyhw/pxt-XG171-DRONE) 

# TPBot Package

![](/images.png/)

This extension is designed to programme and drive the TPBot, You can [get TPBot from the Elecfreaks store](https://www.elecfreaks.com/store/tpbot.html)

## Code Example
```JavaScript

let right = 0
let left = 0
TPBot.headlightColor(0xff0000)
basic.forever(function () {
    left = Math.randomRange(-100, 100)
    right = Math.randomRange(-100, 100)
    TPBot.setWheels(left, right)
    basic.pause(1000)
})

```
## Supported targets
for PXT/microbit

## License
MIT

