import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Card, CardActions, CardContent, Typography } from '@mui/material'
import { useState } from 'react'


function AddCourseForm () {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [imageLink, setImageLink] = useState('')

  const handleOnSubmit = () => {
    // TODO - Axios
    fetch('http://localhost:3000/api/admin/courses',{
      method: 'POST',
      body: JSON.stringify({title, description, imageLink}),
      headers: {
        "Content-type": "application/json",
        'authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error('AddCourseForm Fetch: ' + err))
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
        <Typography variant={'h5'}>To add course enter information below</Typography>
      </div>

      <div style={{
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Card>
          <CardContent sx={{ width: 400 }}>
            <TextField fullWidth id="title" label="Title" variant="outlined" value={title} onChange={e => setTitle(e.target.value)}/>
            <br/><br/>
            <TextField fullWidth id="description" label="Description" variant="outlined" value={description} onChange={e => setDescription(e.target.value)}/>
            <br/><br/>
            <TextField fullWidth id="image-link" label="Image Link" variant="outlined" value={imageLink} onChange={e => setImageLink(e.target.value)}/>
            <br/><br/>
          </CardContent>
          <CardActions sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Button size={'large'} variant="contained" onClick={handleOnSubmit}>Add Course</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}

export default AddCourseForm