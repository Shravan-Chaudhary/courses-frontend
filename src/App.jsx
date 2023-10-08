import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import '@fontsource/roboto/400.css'
import SignUp from './screens/SignUp.jsx'
import AppBar from './components/AppBar.jsx'
import SingIn from './screens/SignIn.jsx'
import AddCourse from './AddCourse.jsx'
import Courses from './screens/Courses.jsx'


function App() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#eeeeee'
    }}>
      <Router>
        <AppBar />
        <Routes>
          <Route path='/courses' element={<Courses />} />
          <Route path='/addcourse' element={<AddCourse />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SingIn />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
