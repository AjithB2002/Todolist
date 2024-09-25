
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Todo from './pages/Todo'
import Login from './components/Login'
import Signup from './components/Signup'
import Addstudent from './pages/Addstudent'

function App() {


  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/add-student" element={<Addstudent />} />

          </Routes>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
