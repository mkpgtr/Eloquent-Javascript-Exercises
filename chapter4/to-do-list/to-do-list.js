let todolist = []

function remember(task){
    todolist.push(task)
}

function getTask(){
    return todolist.shift()
}

function rememberUrgently(task){
    todolist.unshift(task)
}

remember("Make a grid layout")
remember("write a nested loop")
rememberUrgently("say your evening prayers")
remember("play guitar")
rememberUrgently("meditate")
remember("learn dsa")
remember("listen to rap music")
remember("read a history book")
// getTask()


// ! this will assign gt to "meditate" and will remove "meditate" as it was at the beginning of the array
const gt = getTask()
// ! the array looks something like this



console.log(todolist)
