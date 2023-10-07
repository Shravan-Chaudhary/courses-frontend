import { Card, Typography, CardContent } from '@mui/material'


const CourseCard = (props) => {
  return (
    <div style={{
      display: 'flex',
      margin: 10
    }}>
      <Card sx={{
        minWidth: 300
      }}>
        <CardContent >
          <Typography variant={'h5'} >{props.course.title}</Typography>
          <Typography variant={'subtitle1'} sx={{mb: 1.5}} color={'text.secondary'} >{props.course.description}</Typography>
          <img src={props.course.imageLink} alt="Course-image" style={{width: 300}}/>
        </CardContent>
      </Card>
    </div>
  )
}

export default CourseCard