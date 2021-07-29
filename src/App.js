import React, { useState } from 'react'
import AddTask from './components/AddTask'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Take dog for grooming',
      day: 'Feb 12th at 5:00pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Taking some class',
      day: 'Jan 8th at 12:30pm',
      reminder: false,
    },
  ])

  const addTask = (task) => {
    console.log('----', task)
    const id = Math.floor(Math.random() * 1000 + 1)
    console.log(id)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
    console.log(task)
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className='container'>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        toggleAddButton={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Task to show'
      )}
    </div>
  )
}

export default App
