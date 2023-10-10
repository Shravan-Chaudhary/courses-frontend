import UpdateCourseForm from '../components/UpdateCourseForm.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Grid } from '@mui/material'
import CourseCard from '../components/CourseCard.jsx'

const Course = () => {
  const [course, setCourse] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const { courseId } = useParams()

  const getCourse = async () => {
    try {
      setIsLoading(true)
      const res = await axios.get(`http://localhost:3000/api/admin/courses/${courseId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      const data = res.data
      setCourse(data)
      setIsLoading(false)
    } catch (err) {
      console.error(`Single Course: ${err}`)
    }
  }

  useEffect(() => {
    getCourse()
  }, [])

  if (isLoading) {
    return (
      <div>Loading..</div>
    )
  }

  return (
    <div>
      <Grid container sx={{
        p: 5
      }}>

        <Grid item md={8}>
          <UpdateCourseForm course={course}/>
        </Grid>

        <Grid item md={4}>
          <CourseCard course={course}/>
        </Grid>

      </Grid>
    </div>
  )
}

export default Course

