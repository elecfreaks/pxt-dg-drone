/**
* Functions to XG171_DRONE by Llane.
*/
//% color=#56B7F7  icon="\uf005" block="XG171-DRONE" blockId="XG171"
namespace XG171_DRONE {
    export enum WorkMode {
        //% block="Normal Mode" enumval=0
        Normalmode,
        //% block="Tracking Line" enumval=1
        TrackingLine
    }
    export enum Angleoptions {
        //% block="Clockwise"
        Clockwise = 0x16,
        //% block="Anticlockwise"
        Anticlockwise = 0x17
    }
    export enum Directionoptions {
        //% block="Forward" 
        Forward = 0x12,
        //% block="Backward"
        Backward = 0x13,
        //% block="Left" 
        Left = 0x14,
        //% block="Right"
        Right = 0x15,
        //% block="Up" 
        Up = 0x10,
        //% block="Down"
        Down = 0x11
    }
    export enum Rolloptions {
        //% block="Forward" 
        Roll_forward = 0x20,
        //% block="Back"
        Roll_back = 0x21,
        //% block="Left" 
        Roll_left = 0x22,
        //% block="Right"
        Roll_right = 0x23
    }
    export enum Shiftoptions {
        //% block="Forward" 
        Forward = 0x12,
        //% block="Backward"
        Backward = 0x13,
        //% block="Left" 
        Left = 0x14,
        //% block="Right"
        Right = 0x15,
        //% block="Clear" 
        Clear = 0x10
    }
    export enum Shapeoptions {
        //% block="Triangle"
        Triangle = 0x12,
        //% block="Circular"
        Circular = 0x13,
        //% block="Square"
        Square = 0x14
    }
    export enum Coloroptions {
        //% block="Red"
        Red = 0x12,
        //% block="Blue"
        Blue = 0x13,
        //% block="Green"
        Green = 0x14,
        //% block="Black"
        Blck = 0x14
    }
    export enum Identifyoptions{
        //% block ="Target color block"
        Color_block = 0x01,
        //% block ="Target QR code"
        QR_code = 0x02,
        //% block ="Obstacle"
        Obstacle = 0x03,
        //% block ="Black Line —"
        Horizontal_black_line =0x04,
        //% block ="Black Line |"
        Vertical_black_line = 0x05,
        //% block ="Black Line +"
        Cross_black_line = 0x06
    }
    /**
    * TODO: Set work mode.
    */
    //% block="Set work mode to %mode"
    //% mode.fieldEditor="gridpicker" mode.fieldOptions.columns=2
    //% weight=91
    export function Set_work_mode(mode: WorkMode): void {
        // Add code here
    }
    /**
    * TODO: Set horizontal flight speed.
    */
    //% block="Set horizontal flight speed %speed cm/s"
    //% speed.min=0 speed.max=100
    //% weight=90
    export function Set_horizontal_speed(speed: number): void {
        // Add code here
    }
    /**
    * TODO: Set vertical flight speed.
    */
    //% block="Set vertical flight speed %speed cm/s"
    //% speed.min=10 speed.max=100
    //% speed.defl=50
    //% weight=89
    export function Set_vertical_speed(speed: number): void {
        // Add code here
    }
    /**
    * TODO: Set vertical flight speed.
    * @param altitude, eg: 100
    */
    //% block="Set flight altitude %altitude cm"
    //% altitude.min=10 altitude.max=250
    //% weight=88
    export function Set_flight_altitude(altitude: number): void {
        // Add code here
    }
    /**
    * TODO: Set precision.
    */
    //% block="Visual deviation within %deviation cm, Adjust the altitude %altitude"
    //% altitude.min=10 altitude.max=250
    //% deviation.min=5 deviation.max=100
    //% weight=87 subcategory=Visual
    export function Highaccuracy_altitude(deviation: number, altitude:number): void {
        // Add code here
    }
    /**
    * TODO: Set precision.
    */
    //% block="Visual deviation within %deviation cm, Loading"
    //% deviation.min=5 deviation.max=100
    //% weight=99 subcategory=Visual
    export function Highaccuracy_loading(deviation: number): void {
        // Add code here
    }
    /**
    * TODO: Takeoff.
    */
    //% block="Takeoff %altitude cm"
    //% altitude.min=10 altitude.max=250
    //% weight=86
    export function Takeoff(altitude: number): void {
        // Add code here
    }
    //% block="Loading"
    //% weight=85
    export function Loading() {

    }
    /**
    * TODO: Move
    */
    //% block="Move action %directionstate by %distance cm"
    //% directionstate.fieldEditor="gridpicker" directionstate.fieldOptions.columns=2
    //% weight=80
    export function Move_action(directionstate: Directionoptions, distance: number): void {

    }
    //% block="Roll action %rollstate by %circle circle"
    //% rollstate.fieldEditor="gridpicker" rollstate.fieldOptions.columns=2
    //% weight=75
    export function Roll_action(rollstate: Rolloptions, circle:number): void {

    }
    //% block="Rotation action %rotationstate by %angle °"
    //% angle.min=0 angle.max=180
    //% rotationstate.fieldEditor="gridpicker" rotationstate.fieldOptions.columns=2
    //% weight=70
    export function Rotation_action(rotationstate: Angleoptions, angle: number): void {

    }
    //% block="Vision shift %shiftstate by %distance cm"
    //% distance.min=0 distance.max=180
    //% shiftstate.fieldEditor="gridpicker" shiftstate.fieldOptions.columns=2
    //% weight=65 subcategory=Visual
    export function Vision_shifts(shiftstate: Shiftoptions, distance: number): void {

    }
    //% block="Enter identify No. %codeid QR code Mode"
    //% weight=61 subcategory=Visual
    export function Set_identify_QRcode(codeid: number) {


    }
    //% block="Follow No. %codeid QR code"
    //% weight=60 subcategory=Visual
    export function Follow_QRcode(codeid:number){
        
    }
    //% block="Correct flight direction by QR code position"
    //% weight=59 subcategory=Visual
    export function Correct_direction_byQR(color: Coloroptions) {

    }
    //% block="Enter identify %color Color block Mode"
    //% color.fieldEditor="gridpicker" color.fieldOptions.columns=2
    //% weight=51 subcategory=Visual
    export function Set_identify_color(color: Coloroptions){


    }
    //% block="Follow color %color block"
    //% color.fieldEditor="gridpicker" color.fieldOptions.columns=2
    //% weight=50 subcategory=Visual
    export function Follow_color(color: Coloroptions){

    }


    //% block="Follow shape %shape"
    //% shape.fieldEditor="gridpicker" shape.fieldOptions.columns=3
    //% weight=44 subcategory=Visual
    export function Follow_shape(shape: Shapeoptions) {

    }
    //% block="Enter identify black-line mode"
    //% weight=43 subcategory=Visual
    export function Set_blackline_identify(color: Coloroptions) {

    }
    //% block="Identify target %state"
    //% weight=42 subcategory=Visual
    //% state.fieldEditor="gridpicker"
    //% state.fieldOptions.columns=3
    export function Identify_target(state: Identifyoptions): boolean {
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
        // Add code here
    }
    /**
    * TODO: Set precision.
    */
    //% block="Set Optical flow function $status"
    //% status.shadow="toggleOnOff"
    //% subcategory=Extended
    //% weight=89 color=#E854BC
    export function Optical_flow_func(status: boolean): void {
        // Add code here
    }
    /**
    * TODO: Set precision.
    */
    //% block="Set TOP function $status"
    //% status.shadow="toggleOnOff"
    //% subcategory=Extended
    //% weight=88 color=#E854BC
    export function TOP_func(status: boolean): void {
        // Add code here
    }
    /**
    * TODO: Set precision.
    */
    //% block="Set Servo speed %speed \\% to %angle °"
    //% subcategory=Extended
    //% speed.min=10 speed.max=100
    //% angle.min=0 angle.max=180
    //% angle.defl=90 speed.defl=50
    //% weight=87 color=#E854BC
    export function Servo_turn_with_speed(speed: number, angle:number)
    {


    }
    /**
    * TODO: Set precision.
    */
    //% block="Set Servo speed %speed \\% to %angle ° within %deviation cm"
    //% subcategory=Extended
    //% speed.min=10 speed.max=100
    //% angle.min=0 angle.max=180
    //% angle.defl=90 speed.defl=50
    //% weight=86 color=#E854BC
    export function Servo_turn_with_speed_highaccuracy(speed: number, angle: number, deviation:number) {


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

    }

    
}