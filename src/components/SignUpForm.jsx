import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Card, CardActions, CardContent, Typography } from '@mui/material'
import { useState } from 'react'
import axios from 'axios'


function SignUpForm () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleOnSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:3000/api/admin/signup',{
        email,
        password
      })
      const data = res.data
      localStorage.setItem('token', data.token)
    }
    catch(err){
      console.error(`SignUp Error: ${err}`)
    }
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center',
      paddingTop: 150
    }}>
      <div>
        <Typography variant={'h5'}>Welcome to Coursera. Sign Up below</Typography>
      </div>

      <div style={{
        marginTop: 10
      }}>
        <Card>
          <CardContent sx={{ minWidth: 400 }}>
            <TextField fullWidth id="email" label="Email" variant="outlined" value={email} onChange={e => setEmail(e.target.value)}/>
            <br/><br/>
            <TextField fullWidth id="password" label="Password" variant="outlined" value={password} onChange={e => setPassword(e.target.value)} />
            <br/><br/>
          </CardContent>
          <CardActions sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Button onClick={handleOnSubmit} size={'large'} variant="contained">Sign Up</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}

export default SignUpForm