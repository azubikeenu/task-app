class List {
    constructor() {
        this.tasks = []
    }
    addTask ( task ) {
        this.tasks.push( task )
    }
    getTasks () {
        const storedTasks = JSON.parse( localStorage.getItem( "tasks" ) )
        this.tasks = storedTasks || [];
        return this.tasks;
    }
    removeTask ( id ) {
        this.tasks = this.tasks.filter( task => task.id !== id )
    }
    addToStorage () {
        localStorage.setItem( "tasks", JSON.stringify( this.tasks ) )
    }
    removeFromStorage ( id ) {
        let tasks = !localStorage.getItem( "tasks" ) ? [] : JSON.parse( localStorage.getItem( "tasks" ) );
        tasks = tasks.filter( task => task.id !== id );
        localStorage.setItem( "tasks", JSON.stringify( tasks ) )
    }

}

export const myList = new List();
