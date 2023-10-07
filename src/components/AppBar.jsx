import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const AppBar = () => {
  const navigate  = useNavigate()
  return (
    <>
      <nav style={{
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: 10
      }}>
        <div style={{marginLeft: 10,}}>
          <Typography variant={'h6'}>Coursera</Typography>
        </div>
        <div style={{
          display: 'flex',
          marginRight: 10
        }}>
          <div style={{marginRight: 10}}>
            <Button size={'large'} variant={'contained'} onClick={() => {navigate('/signup')}} >Sign Up</Button>
          </div>
          <div>
            <Button size={'large'} variant={'text'} onClick={() => {navigate('/signin')}}>Sign In</Button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default AppBar