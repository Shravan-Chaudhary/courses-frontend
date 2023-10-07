import CourseCard from '../components/CourseCard.component.jsx'
import { useEffect, useState } from 'react'

const Courses = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/admin/courses',{
      method: 'GET',
      headers: {
        "Content-type": "application/json",
        'authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.error(`Error from get Courses: ${err}`))
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