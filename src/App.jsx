import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import '@fontsource/roboto/400.css'
import SignUp from './screens/SignUp.jsx'
import AppBar from './components/AppBar.jsx'
import SingIn from './screens/SignIn.jsx'
import AddCourse from './screens/AddCourse.jsx'
import Courses from './screens/Courses.jsx'
import Course from './screens/Course.jsx'


function App() {
  // TODO - me route on backend
  // TODO - course page
  // TODO - update course component
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#eeeeee'
    }}>
      <Router>
        <AppBar />
        <Routes>
          <Route path='/course/:courseId' element={<Course />} />
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
