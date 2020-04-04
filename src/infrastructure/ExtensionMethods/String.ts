


declare global {
    export interface String {
        normalizeTime(): string;
    }
    
}
String.prototype.normalizeTime = function () {
    const str = `${this.substring(0, 5)}`;
   
    return str;
}
export { }; 