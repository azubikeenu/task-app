class List {
    constructor() {
        this.tasks = []
    }
    addTask ( task ) {
        this.tasks.push( task )
    }
    getTasks () {
        return this.tasks
    }
    removeTask ( id ) {
        this.tasks = this.tasks.filter( task => task.id !== id )
    }
}

const myList = new List();
export { myList }