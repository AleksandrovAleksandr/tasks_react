import {useState} from 'react'

const AddTask = ({onAdd}) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = e => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }

    onAdd({text, day, reminder})

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Задача</label>
        <input
          type="text"
          placeholder="Что Вы хотите сделать"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Дата и время</label>
        <input
          type="text"
          placeholder="Срок выполнения задачи"
          value={day}
          onChange={e => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Установить напоминание</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={e => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Сохранить задачу" className="btn btn-block" />
    </form>
  )
}

export default AddTask
