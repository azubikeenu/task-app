import { UIStrings } from '../utils/constants.js'

export const renderTasks = tasks => {
    const html = tasks.map( ( { id, title } ) =>
        ` <li class="collection-item">
                        ${title}
          <a href="#${id}" class="delete-item secondary-content">
        <i class="fa fa-remove" data-value=${id}></i>
                </a>
                </li>`).join( ' ' )
    UIStrings.taskList.insertAdjacentHTML( 'afterbegin', html )


}

export const clearTasks = () => {
    while ( UIStrings.taskList.firstChild ) {
        UIStrings.taskList.removeChild( UIStrings.taskList.firstChild )
    }
}

export const removeTask = id => {
    let task = document.querySelector( `[data-value='${id}']` );
    task = task.parentElement.parentElement
    task.parentElement.removeChild( task )
}

export const clearTaskInput = () => {
    UIStrings.taskInput.value = "";
    UIStrings.taskInput.focus()
}