/**
* Functions to PlanetX sensor by Llane.
*/
//% color=#56B7F7  icon="\uf005" block="XG171-DRONE" blockId="XG171"
namespace PlanetX_Basic {

    /**
    * TODO: full speed move back,speed is -100.
    */
    //% blockId=cutebot_back block="Reverse at full speed"
    //% weight=85
    export function backforward(): void {
        // Add code here
        let buf = pins.createBuffer(4);
        buf[0] = 0x01;
        buf[1] = 0x01;
        buf[2] = 80;
        buf[3] = 0;
        pins.i2cWriteBuffer(0x20, buf);
        buf[0] = 0x02;
        pins.i2cWriteBuffer(0x20, buf);

    }
}