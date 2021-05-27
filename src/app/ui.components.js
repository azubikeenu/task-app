
export default class UI {
    constructor() {
        this.form = document.querySelector( '#task-form' );
        this.taskList = document.querySelector( '.collection' );
        this.clearBtn = document.querySelector( '.clear-tasks ' );
        this.filter = document.querySelector( '#filter' );
        this.taskInput = document.querySelector( '#task' );

    }
    getTaskInput () {
        return this.taskInput.value;
    }
    clearTasks ( func ) {
        this.clearBtn.addEventListener( 'click', func )
    }
    filterTasks ( func ) {
        this.filter.addEventListener( 'keyup', func )
    }
    addTask ( func ) {
        this.form.addEventListener( 'submit', func )
    }
    deleteTask ( func ) {
        this.taskList.addEventListener( 'click', func )
    }
    getFilterString () {
        return this.filter.value;
    }
}