const todo = [
    {id: 1,
    name: 'Work on Dashboard UI',
    description: 'Complete Dashboard UI for Todo Application',
    date: {day: 9, month: 'Oct', year: '2020'},
    startTime: "12:34",
    EndTime:  "14:44",
    agenda:[
       { id:1,
        subAgenda: 'Complete Dashboard UI for Todo Application1',
        duration: "12:34",},

        { id:2,
            subAgenda: 'Complete Dashboard UI for Todo Application2',
            duration: "12:34",},
        { id:3,
            subAgenda: 'Complete Dashboard UI for Todo Application3',
            duration: "12:34",},
    ]
        

  
    },

    {id: 2,
    name: `Work on Mosh's Video`,
    description: `Finish chapter 7 of Mosh's React Video`,
    date: {day: 23, month: 'Feb', year: '2019'},
    startTime: "11:54",
    EndTime:  "15:44",
    agenda:[
        { id:1,
         subAgenda: 'Complete Dashboard UI for Todo Application',
         duration: "12:34",},
 
         { id:2,
             subAgenda: 'Complete Dashboard UI for Todo Application',
             duration: "12:34",},
         { id:3,
             subAgenda: 'Complete Dashboard UI for Todo Application',
             duration: "12:34",},
     ]
    },

    {id: 3,
    name: 'Learn Redux',
    description: `Watch and practice Mosh's Course in React Redux`,
    date: {day: 12, month: 'May', year: '2020'},
    startTime: "00:25",
    EndTime:  "02:44",
    agenda:[
        { id:1,
         subAgenda: 'Complete Dashboard UI for Todo Application',
         duration: "12:34",},
 
         { id:2,
             subAgenda: 'Complete Dashboard UI for Todo Application',
             duration: "12:34",},
         { id:3,
             subAgenda: 'Complete Dashboard UI for Todo Application',
             duration: "12:34",},
     ]
    },
]


export function getTodos(){
    return todo
}

// export { getTodos, addTodos,deleteTodo ,deleteSubAgenda}