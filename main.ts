namespace archi {
    /*
    * Architronic extension
    */
    //% blockId="ArchBit"
    //% block="Start"
    export function begin(): void {
        basic.showIcon(IconNames.Heart)
    }
    //% blockId="ArchBit"
    //% block="End"
    export function end(): void {
        basic.showIcon(IconNames.Angry)
    }
}
