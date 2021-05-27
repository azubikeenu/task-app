import * as tasksview from './view/tasksview.js'
import Task from './model/Task.js'
import { myList as tasks } from './model/List.js'

export const run = ( ui ) => {
    // add Task to task list
    ui.addTask( e => {
        e.preventDefault()
        const input = ui.getTaskInput()
        const task = new Task( input );

        if ( input === '' ) {
            return alert( 'Task field cannot be empty' )
        }
        // add to the list
        tasks.addTask( task )
        // prepare the UI for display
        tasksview.clearTasks()
        //display in the UI
        tasksview.renderTasks( tasks.getTasks() )
        // clear Input field and setFocus
        tasksview.clearTaskInput()

    } )

    // delete task
    ui.deleteTask( e => {
        if ( e.target.matches( '.delete-item *' ) ) {
            const [, id] = e.target.parentElement.href.split( '#' )
            // remove from the list
            tasks.removeTask( id )
            // remove from ui
            tasksview.removeTask( id )

        }
    } )

    // filter tasks
    ui.filterTasks( () => {
        const filterString = ui.getFilterString();
        // console.log( filterString )
        tasksview.filterTasks( filterString )


    } )



}