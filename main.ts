/**
* Functions to XG171_DRONE by Llane.
*/
//% color=#56B7F7  icon="\uf0fb" block="XG171-DRONE" blockId="XG171"
namespace XG171_DRONE {
    let SendLoopNum:number = 20
    let ReceiveLoopNum:number = 30
    let SendLoopDelay:number = 20000
    let CMDSeqStart:number = 1
    let CMDSeqLoop: number = CMDSeqStart
    export enum WorkMode {
        //% block="Normal Mode" enumval=0
        Normalmode = 0x01,
        //% block="Follow Line" enumval=1
        TrackingLine = 0x02
    }
    export enum Angleoptions {
        //% block="Clockwise"
        Clockwise = 0x00,
        //% block="Anticlockwise"
        Anticlockwise = 0x01
    }
    export enum Directionoptions {
        //% block="Forward" 
        Forward = 0x00,
        //% block="Backward"
        Backward = 0x01,
        //% block="Left" 
        Left = 0x02,
        //% block="Right"
        Right = 0x03,
        //% block="Up" 
        Up = 0x04,
        //% block="Down"
        Down = 0x05
    }
    export enum Rolloptions {
        //% block="Forward" 
        Roll_forward = 0x00,
        //% block="Back"
        Roll_back = 0x01,
        //% block="Left" 
        Roll_left = 0x02,
        //% block="Right"
        Roll_right = 0x03
    }
    export enum Shiftoptions {
        //% block="Forward" 
        Forward = 0x00,
        //% block="Backward"
        Backward = 0x01,
        //% block="Left" 
        Left = 0x02,
        //% block="Right"
        Right = 0x03,
        //% block="Clear" 
        Clear = 0x04
    }
    export enum Shapeoptions {
        //% block="Triangle"
        Triangle = 0x00,
        //% block="Circular"
        Circular = 0x01,
        //% block="Square"
        Square = 0x02
    }
    export enum Coloroptions {
        //% block="Red"
        Red = 0x0,
        //% block="Blue"
        Blue = 0x01,
        //% block="Green"
        Green = 0x02,
        //% block="Black"
        Blck = 0x03
    }
    export enum Identifyoptions{
        //% block="Target color block"
        Color_block = 0xA1,
        //% block="Target QR code"
        QR_code = 0xA2,
        //% block="Obstacle"
        Obstacle = 0xA3,
        //% block="Black Line ⎯"
        Horizontal_black_line =0xA4,
        //% block="Black Line │"
        Vertical_black_line = 0xA5,
        //% block="Black Line ┼"
        Cross_black_line = 0xA6
    }
    function CheckSUM(arr:number[],len:number):number{
        let totalSUM = 0
        for (let i = 0; i < len; i++) {
            totalSUM += arr[i]
        }
        totalSUM = 65536 - totalSUM
        return totalSUM & 0xFF
        
    }
    function Drone_sendData(arr:number[],len:number): void {
        let myBuff = pins.createBuffer(len+1)
        for (let i = 0; i < len; i++) {
            myBuff.setNumber(NumberFormat.UInt8BE, i, arr[i])
        }
        myBuff.setNumber(NumberFormat.UInt8BE, myBuff.length - 1,CheckSUM(arr, len))
        serial.writeBuffer(myBuff)
    }

    //% block="Init Drone Tx$tx Rx$rx"
    //% tx.defl=SerialPin.P1
    //% rx.defl=SerialPin.P2
    //% weight=99
    export function Set_serial_port(tx: SerialPin, rx:SerialPin):void{
        serial.redirect(tx, rx, 9600)
    }

    /**
    * TODO: Set work mode.
    */
    //% block="Set work mode to %mode"
    //% mode.fieldEditor="gridpicker" mode.fieldOptions.columns=2
    //% weight=91
    export function Set_work_mode(mode: WorkMode): void {
        let loopNum:number = 0
        let dataArr: number[] = [0x06, 0x05, CMDSeqLoop, mode]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        while (loopNum < SendLoopNum){
            Drone_sendData(dataArr,dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
    }
    /**
    * TODO: Set horizontal flight speed.
    */
    //% block="Set horizontal flight speed %speed cm/s"
    //% speed.min=10 speed.max=100 speed.defl=50
    //% weight=90 
    export function Set_horizontal_speed(speed: number): void {
        let loopNum: number = 0
        let dataArr: number[] = [0x04, 0x05, CMDSeqLoop]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        dataArr[3] = speed > 100 ? speed = 100 : speed
        dataArr[3] = speed < 10 ? speed = 10 : speed

        while (loopNum < SendLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
    }
    /**
    * TODO: Set vertical flight speed.
    */
    //% block="Set vertical flight speed %speed cm/s"
    //% speed.min=10 speed.max=100 speed.defl=50
    //% weight=89
    export function Set_vertical_speed(speed: number): void {
        let loopNum: number = 0
        let dataArr: number[] = [0x0F, 0x05, CMDSeqLoop]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        dataArr[3] = speed > 100 ? speed = 100 : speed
        dataArr[3] = speed < 10 ? speed = 10 : speed

        while (loopNum < SendLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
    }
    /**
    * TODO: Set vertical flight speed.
    * @param altitude, eg: 100
    */
    //% block="Set flight altitude %altitude cm"
    //% altitude.min=10 altitude.max=250 altitude.defl=100
    //% weight=88
    export function Set_flight_altitude(altitude: number): void {
        let loopNum: number = 0
        let dataArr: number[] = [0x05, 0x05, CMDSeqLoop]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        dataArr[3] = altitude > 250 ? altitude = 250 : altitude
        dataArr[3] = altitude < 10 ? altitude = 10 : altitude

        while (loopNum < SendLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
    }
    /**
    * TODO: Set precision.
    */
    //% block="Visual deviation within %deviation cm, Adjust the altitude %altitude"
    //% altitude.min=10 altitude.max=250 altitude.defl=10
    //% deviation.min=5 deviation.max=100 deviation.defl=5
    //% weight=87 subcategory=Visual color=#EE7C78
    export function Highaccuracy_altitude(deviation: number, altitude:number): void {
        let loopNum: number = 0
        let dataArr: number[] = [0x13, 0x06, CMDSeqLoop]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        dataArr[3] = deviation > 100 ? deviation = 100 : deviation
        dataArr[3] = deviation < 5 ? deviation = 5 : deviation

        dataArr[4] = altitude > 250 ? altitude = 250 : altitude
        dataArr[4] = altitude < 10 ? altitude = 10 : altitude

        while (loopNum < SendLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
    }
    /**
    * TODO: Set precision.
    */
    //% block="Visual deviation within %deviation cm, Loading"
    //% deviation.min=5 deviation.max=100 deviation.defl=5
    //% weight=99 subcategory=Visual color=#EE7C78
    export function Highaccuracy_loading(deviation: number): void {
        let loopNum: number = 0
        let dataArr: number[] = [0x16, 0x05, CMDSeqLoop]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        dataArr[3] = deviation > 100 ? deviation = 100 : deviation
        dataArr[3] = deviation < 10 ? deviation = 10 : deviation

        while (loopNum < SendLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
    }
    /**
    * TODO: Takeoff.
    */
    //% block="Takeoff %altitude cm"
    //% altitude.min=10 altitude.max=250 altitude.defl=100
    //% weight=86
    export function Takeoff(altitude: number): void {
        let loopNum: number = 0
        let dataArr: number[] = [0x00, 0x05, CMDSeqLoop]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        dataArr[3] = altitude > 250 ? altitude = 250 : altitude
        dataArr[3] = altitude < 10 ? altitude = 10 : altitude

        while (loopNum < SendLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
    }

    //% block="Loading"
    //% weight=85
    export function Loading() {
        let loopNum: number = 0
        let dataArr: number[] = [0x08, 0x04, CMDSeqLoop]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        while (loopNum < SendLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
    }
    /**
    * TODO: Move
    */
    //% block="Move action %directionstate by %distance cm"
    //% distance.min=0 distance.max=250 distance.defl=20
    //% directionstate.fieldEditor="gridpicker" directionstate.fieldOptions.columns=2
    //% weight=80
    export function Move_action(directionstate: Directionoptions, distance: number): void {
        let loopNum: number = 0
        let dataArr: number[] = [0x01, 0x06, CMDSeqLoop, directionstate]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        dataArr[4] = distance > 250 ? distance = 250 : distance
        dataArr[4] = distance < 10 ? distance = 10 : distance

        while (loopNum < SendLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
    }
    //% block="Roll action %rollstate by %circle circle"
    //% rollstate.fieldEditor="gridpicker" rollstate.fieldOptions.columns=2
    //% circle.min=1 circle.max=2 circle.defl=1
    //% weight=75
    export function Roll_action(rollstate: Rolloptions, circle:number): void {
        let loopNum: number = 0
        let dataArr: number[] = [0x02, 0x06, CMDSeqLoop, rollstate]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        dataArr[4] = circle > 2 ? circle = 2 : circle
        dataArr[4] = circle < 1 ? circle = 1 : circle

        while (loopNum < SendLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
    }
    //% block="Rotation action %rotationstate by %angle °"
    //% angle.min=0 angle.max=180
    //% angle.shadow="protractorPicker"
    //% rotationstate.fieldEditor="gridpicker" rotationstate.fieldOptions.columns=2
    //% weight=70
    export function Rotation_action(rotationstate: Angleoptions, angle: number=90): void {
        let loopNum: number = 0
        let dataArr: number[] = [0x03, 0x06, CMDSeqLoop, rotationstate]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        dataArr[4] = angle > 180 ? angle = 180 : angle
        dataArr[4] = angle < 0 ? angle = 0 : angle

        while (loopNum < SendLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
    }
    //% block="Drone current altitude"
    //% weight=69
    export function Drone_current_altitude(): number{
        serial.readBuffer(0)
        let loopNum: number = 0
        let dataArr: number[] = [0x0D, 0x05, CMDSeqLoop, 0xB1]
        let recvBuff = pins.createBuffer(4)
        let recvdata: number[]
        let altitude: number
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1
        while (loopNum < ReceiveLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            recvBuff = serial.readBuffer(0)
            recvdata = recvBuff.toArray(NumberFormat.UInt8BE)
            if (recvdata[0] == 0xAF && recvdata[1] == 0xBF && recvdata[2] == 0xB1) {
                return recvdata[3];
            }
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
        return -1
    }
    //% block="Drone battery level"
    //% weight=68
    export function Drone_battery_level(): number {
        serial.readBuffer(0)
        let loopNum: number = 0
        let dataArr: number[] = [0x0D, 0x05, CMDSeqLoop, 0xB2]
        let recvBuff = pins.createBuffer(4)
        let recvdata: number[]
        let battery_level :number
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1
        while (loopNum < ReceiveLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            recvBuff = serial.readBuffer(0)
            recvdata = recvBuff.toArray(NumberFormat.UInt8LE)
            if (recvdata[0] == 0xAF && recvdata[1] == 0xBF && recvdata[2] == 0xB2) {
                return  recvdata[3];
            }
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
        return -1
    }
    //% block="Vision shift %shiftstate by %distance cm"
    //% distance.min=0 distance.max=100
    //% shiftstate.fieldEditor="gridpicker" shiftstate.fieldOptions.columns=2
    //% weight=65 subcategory=Visual color=#EE7C78
    export function Vision_shifts(shiftstate: Shiftoptions, distance: number): void {
        let loopNum: number = 0
        let dataArr: number[] = [0x12, 0x06, CMDSeqLoop, shiftstate]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        dataArr[4] = distance > 100 ? distance = 100 : distance
        dataArr[4] = distance < 0 ? distance = 0 : distance

        while (loopNum < SendLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
    }
    //% block="Enter identify No. %codeid QR code Mode"
    //% weight=61 subcategory=Visual color=#EE7C78
    export function Set_identify_QRcode(codeid: number) {
        let loopNum: number = 0
        let dataArr: number[] = [0x12, 0x06, CMDSeqLoop,0x07,codeid]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        while (loopNum < SendLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
    }
    //% block="Follow No. %codeid QR code"
    //% weight=60 subcategory=Visual color=#EE7C78
    export function Follow_QRcode(codeid:number){
        let loopNum: number = 0
        let dataArr: number[] = [0x06, 0x06, CMDSeqLoop,0x02,codeid]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        while (loopNum < SendLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
    }
    //% block="Correct flight direction by QR code position"
    //% weight=59 subcategory=Visual color=#EE7C78
    export function Correct_direction_byQR(color: Coloroptions) {
        let loopNum: number = 0
        let dataArr: number[] = [0x14, 0x04, CMDSeqLoop]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        while (loopNum < SendLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
    }
    //% block="Enter identify %color Color block Mode"
    //% color.fieldEditor="gridpicker" color.fieldOptions.columns=2
    //% weight=51 subcategory=Visual color=#EE7C78
    export function Set_identify_color(color: Coloroptions){
        let loopNum: number = 0
        let dataArr: number[] = [0x06, 0x06, CMDSeqLoop, 0x06, color]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        while (loopNum < SendLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }

    }
    //% block="Follow color %color block"
    //% color.fieldEditor="gridpicker" color.fieldOptions.columns=2
    //% weight=50 subcategory=Visual color=#EE7C78
    export function Follow_color(color: Coloroptions){
        let loopNum: number = 0
        let dataArr: number[] = [0x06, 0x06, CMDSeqLoop, 0x00, color]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        while (loopNum < SendLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
    }

    //% block="Follow shape %shape"
    //% shape.fieldEditor="gridpicker" shape.fieldOptions.columns=3
    //% weight=44 subcategory=Visual color=#EE7C78
    export function Follow_shape(shape: Shapeoptions) {
        let loopNum: number = 0
        let dataArr: number[] = [0x06, 0x06, CMDSeqLoop,0x03,shape]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        while (loopNum < SendLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
    }

    //% block="Enter identify black-line mode"
    //% weight=43 subcategory=Visual color=#EE7C78
    export function Set_blackline_identify(color: Coloroptions) {
        let loopNum: number = 0
        let dataArr: number[] = [0x06, 0x05, CMDSeqLoop, 0x08]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        while (loopNum < SendLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
    }

    //% block="Identify target %state"
    //% weight=42 subcategory=Visual color=#EE7C78
    //% state.fieldEditor="gridpicker"
    //% state.fieldOptions.columns=3
    export function Identify_target(state: Identifyoptions): boolean {
        serial.readBuffer(0)
        let loopNum: number = 0
        let dataArr: number[] = [0x0D, 0x05, CMDSeqLoop, state]
        let recvBuff = pins.createBuffer(4)
        let recvdata: number[]
        let altitude: number
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1
        while (loopNum < ReceiveLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            recvBuff = serial.readBuffer(0)
            recvdata = recvBuff.toArray(NumberFormat.UInt8LE)
            if (recvdata[0] == 0xAF && recvdata[1] == 0xBF) {
                return recvdata[2] == state? true :false
            }
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
        return false
    }

    /**
    * TODO: Set extension function.
    */
    //% block="Set extension function $status"
    //% status.shadow="toggleOnOff"
    //% subcategory=Extended
    //% weight=90 color=#E854BC
    export function Extension_func(status: boolean): void {
        let loopNum: number = 0
        let dataArr: number[] = [0x0A, 0x05, CMDSeqLoop]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        dataArr[3] = status ? 0 : 1

        while (loopNum < SendLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
    }
    /**
    * TODO: Set extension function.
    */
    //% block="Set magnet function $status"
    //% status.shadow="toggleOnOff"
    //% subcategory=Extended
    //% weight=89 color=#E854BC
    export function Extension_magnet_func(status: boolean): void {
        Extension_func(status)
    }
    /**
    * TODO: Set extension function.
    */
    //% block="Set webcam function $status"
    //% status.shadow="toggleOnOff"
    //% subcategory=Extended
    //% weight=88 color=#E854BC
    export function Extension_webcam_func(status: boolean): void {
        Extension_func(status)
    }
    /**
    * TODO: Set extension function.
    */
    //% block="Set avoid obstacle function $status"
    //% status.shadow="toggleOnOff"
    //% subcategory=Extended
    //% weight=87 color=#E854BC
    export function Extension_avoid_func(status: boolean): void {
        Extension_func(status)
    }
    /**
    * TODO: Set precision.
    */
    //% block="Set Optical flow function $status"
    //% status.shadow="toggleOnOff"
    //% subcategory=Extended
    //% weight=86 color=#E854BC
    export function Optical_flow_func(status: boolean): void {
        let loopNum: number = 0
        let dataArr: number[] = [0x10, 0x05, CMDSeqLoop]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        dataArr[3] = status ? 0 : 1

        while (loopNum < SendLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
    }
    /**
    * TODO: Set precision.
    */
    //% block="Set TOF function $status"
    //% status.shadow="toggleOnOff"
    //% subcategory=Extended
    //% weight=85 color=#E854BC
    export function TOF_func(status: boolean): void {
        let loopNum: number = 0
        let dataArr: number[] = [0x11, 0x05, CMDSeqLoop]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        dataArr[3] = status ? 0 : 1

        while (loopNum < SendLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
    }
    /**
    * TODO: Set precision.
    */
    //% block="Set Servo speed %speed \\% to %angle °"
    //% subcategory=Extended
    //% speed.min=10 speed.max=100
    //% angle.min=0 angle.max=180
    //% angle.shadow="protractorPicker"
    //% angle.defl=90 speed.defl=50
    //% weight=84 color=#E854BC
    export function Servo_turn_with_speed(speed: number, angle:number)
    {
        let loopNum: number = 0
        let dataArr: number[] = [0x0E, 0x06, CMDSeqLoop]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        dataArr[3] = speed > 100 ? speed = 100 : speed
        dataArr[3] = speed < 0 ? speed = 0 : speed

        dataArr[4] = angle > 180 ? angle = 180 : angle
        dataArr[4] = angle < 0 ? angle = 0 : angle

        while (loopNum < SendLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }

    }
    /**
    * TODO: Set precision.
    */
    //% block="Deviation within %deviation cm, Set Servo speed %speed \\% to %angle °"
    //% subcategory=Extended
    //% speed.min=10 speed.max=100
    //% angle.min=0 angle.max=180
    //% angle.shadow="protractorPicker"
    //% angle.defl=90 speed.defl=50
    //% deviation.min=0 deviation.max=250 deviation.defl=5
    //% weight=83 color=#E854BC
    export function Servo_turn_with_speed_highaccuracy(deviation:number, speed: number, angle: number) {
        let loopNum: number = 0
        let dataArr: number[] = [0x17, 0x07, CMDSeqLoop]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        dataArr[3] = deviation > 250 ? deviation = 250 : deviation
        dataArr[3] = deviation < 0 ? deviation = 0 : deviation

        dataArr[4] = speed > 100 ? speed = 100 : speed
        dataArr[4] = speed < 0 ? speed = 0 : speed

        dataArr[5] = angle > 180 ? angle = 180 : angle
        dataArr[5] = angle < 0 ? angle = 0 : angle

        while (loopNum < SendLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
    }

    /**
    * Set RGB color of lamp.
    * @param R color value of RGB color, eg: 83
    * @param G color value of RGB color, eg: 202
    * @param B color value of RGB color, eg: 236
    */
    //% weight=80 subcategory=Extended
    //% inlineInputMode=inline color=#E854BC
    //% block="Set lamp color to R:%r G:%g B:%b"
    //% r.min=0 r.max=255
    //% g.min=0 g.max=255
    //% b.min=0 b.max=255
    export function Set_lamp_RGB(R: number, G: number, B: number): void {
        let loopNum: number = 0
        let dataArr: number[] = [0x0B, 0x0A, CMDSeqLoop,0x08,0x03]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        dataArr[5] = R > 255 ? R = 255 : R
        dataArr[5] = R < 0 ? R = 0 : R

        dataArr[6] = G > 255 ? G = 255 : G
        dataArr[6] = G < 0 ? G = 0 : G

        dataArr[7] = B > 255 ? B = 255 : B
        dataArr[7] = B < 0 ? B = 0 : B

        dataArr[8] = 0

        while (loopNum < SendLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
    }
    /**
    * Select a color to Set lamp.
    */
    //% block="Set lamp color to $color"
    //% weight=75 subcategory=Extended
    //% color.shadow="colorNumberPicker" color=#E854BC
    export function Set_lamp_color(color: number) {
        let r, g, b: number = 0
        r = color >> 16
        g = (color >> 8) & 0xFF
        b = color & 0xFF
        Set_lamp_RGB(r, g, b)
    }
    /**
    * Select a color to Set lamp.
    */
    //% block="Set lamp to close"
    //% weight=74 subcategory=Extended
    //% color=#E854BC
    export function Set_lamp_close() {
        let loopNum: number = 0
        let dataArr: number[] = [0x0B, 0x0A, CMDSeqLoop, 0x08, 0x03,0x00,0x00,0x00,0x00]
        CMDSeqLoop = CMDSeqLoop == 255 ? CMDSeqLoop = CMDSeqStart : CMDSeqLoop+=1

        while (loopNum < SendLoopNum) {
            Drone_sendData(dataArr, dataArr.length)
            control.waitMicros(SendLoopDelay)
            loopNum++
        }
    }
    
}