
export default class Task {
    constructor( title ) {
        this.title = title;
        this.id = this.generateId();
    }
    generateId () {
        return Math.random().toString( 36 ).replace( /[^a-z]+/g, '' ).substr( 0, 5 )
    }
}