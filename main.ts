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
    //% speed.min=0 speed.max=100
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
    //% weight=87
    export function Set_highaccuracy(deviation: number, altitude:number): void {
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
    /**
    * TODO: Move
    */
    //% block="Move action %directionstate by %distance cm"
    //% directionstate.fieldEditor="gridpicker" directionstate.fieldOptions.columns=2
    //% weight=85
    export function Move_action(directionstate: Directionoptions, distance: number): void {

    }
    //% block="Roll action %rollstate by %circle circle"
    //% rollstate.fieldEditor="gridpicker" rollstate.fieldOptions.columns=2
    //% weight=84
    export function Roll_action(rollstate: Rolloptions, circle:number): void {

    }
    //% block="Rotation action %rotationstate by %angle °"
    //% angle.min=0 angle.max=180
    //% rotationstate.fieldEditor="gridpicker" rotationstate.fieldOptions.columns=2
    //% weight=83
    export function Rotation_action(rotationstate: Angleoptions, angle: number): void {

    }
    //% block="Vision shift %shiftstate by %distance cm"
    //% distance.min=0 distance.max=180
    //% shiftstate.fieldEditor="gridpicker" shiftstate.fieldOptions.columns=2
    //% weight=82
    export function Vision_shifts(shiftstate: Shiftoptions, distance: number): void {

    }
}