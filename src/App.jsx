import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import '@fontsource/roboto/400.css'
import SignUp from './SignUp.jsx'
import AppBar from './AppBar.jsx'

function App() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#eeeeee'
    }}>
      <AppBar />
      <Router>
        <Routes>
          <Route path={'/signup'} element={<SignUp />} />
          <Route path={'/signup'} element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
