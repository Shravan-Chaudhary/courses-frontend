import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import '@fontsource/roboto/400.css'
import SignUp from './SignUp.jsx'
import AppBar from './AppBar.jsx'
import SingIn from './SignIn.jsx'
import AddCourse from './AddCourse.jsx'


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
          <Route path='/addcourse' element={<AddCourse />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SingIn />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
