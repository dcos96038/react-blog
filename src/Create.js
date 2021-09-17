import { useState } from "react";
import { useHistory } from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('Diego')
  const [isPending, setIsPending] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = {title, body, author}

    setIsPending(true)

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added')
      setIsPending(false);
    })

    history.push('/')
  }

  return (
    <div className="create">
      <h2>Agregar una nueva entrada</h2>
      <form onSubmit={handleSubmit}>
        <label>Titulo:</label>
        <input 
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Contenido</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Autor:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Diego">Diego</option>
          <option value="Nicolas">Nicolas</option>
        </select>
        {!isPending && <button>Agregar entrada</button>}
        {isPending && <button disabled>Agregando entrada</button>}
      </form>
    </div>
  );
}

export default Create