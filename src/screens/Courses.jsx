import CourseCard from '../components/CourseCard.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Courses = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/admin/courses', {
      headers: {
        "authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => {
        setCourses(res.data)
      })
      .catch(err => console.error('Get courses: ' + err))
  }, [])


  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      flexGrow: 1,
      justifyContent: 'center'
    }}>
      {
        courses.map(course => (
          <CourseCard key={course._id} course={course} />
        ))
      }
    </div>
  )
}

export default Courses