import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Card, CardActions, CardContent, Typography } from '@mui/material'


function SignUp () {
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
            <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
            <br/><br/>
            <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" />
            <br/><br/>
          </CardContent>
          <CardActions sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Button size={'large'} variant="contained">Submit</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}

export default SignUp