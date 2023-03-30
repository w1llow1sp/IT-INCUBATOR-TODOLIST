import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistsType = {
    id:string
    title:string
    filter:FilterValuesType
}


function App() {

    let todolistID1=v1();
    let todolistID2=v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]:[
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]:[
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });



    function removeTask(todolistID:string,id: string) {
        setTasks({...tasks,
            [todolistID]:tasks[todolistID].filter(
                t=> t.id != id
            )})
    }

    function addTask(todolistID:string,title: string) {
        let newTasks = {id: v1(), title, isDone: false}
        setTasks({...tasks,
        [todolistID]:[newTasks,...tasks[todolistID]]})
    }

    function changeStatus(todolistID:string,taskId: string, isDone: boolean) {
        setTasks({...tasks,
            [todolistID]:tasks[todolistID].map(task =>
                task.id === taskId ? {...task,isDone} : task
            )
        })
    }

    function changeFilter(todolistID:string,value: FilterValuesType) {
        setTodolists(
                todolists.map(
                filtered => filtered.id === todolistID ?
                    {...filtered,filter:value}
                    : filtered))

    }

    return (
        <div className="App">
            {todolists.map((mapTodolists) => {
                let tasksForTodolist = tasks[mapTodolists.id]
                if (mapTodolists.filter === "active") {
                    tasksForTodolist = tasks[mapTodolists.id].filter(t => t.isDone === false);
                }
                if (mapTodolists.filter  === "completed") {
                    tasksForTodolist = tasks[mapTodolists.id].filter(t => t.isDone === true);
                }
                return (
                    <Todolist
                        todolistsId={mapTodolists.id}
                        key={mapTodolists.id}
                        title={mapTodolists.title}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeTaskStatus={changeStatus}
                      filter={mapTodolists.filter}
            />
                )
            })}
        </div>
    );
}

export default App;
