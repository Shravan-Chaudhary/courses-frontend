import { Card, Typography, CardContent } from '@mui/material'

const CourseCard = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Card sx={{
        minWidth: 300
      }}>
        <CardContent >
          <Typography variant={'h5'} >Title</Typography>
          <Typography variant={'h6'} sx={{mb: 1.5}} color={'text.secondary'} >Description</Typography>
          <img src="https://gratisography.com/wp-content/uploads/2022/05/gratisography-heavenly-free-stock-photo-1170x775.jpg" alt="Course-image" style={{width: 300}}/>
        </CardContent>
      </Card>
    </div>
  )
}

export default CourseCard