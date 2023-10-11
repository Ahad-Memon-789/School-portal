import { useEffect, useState } from "react"
import { fbGet } from "../../config/firebasemethod"

export default function CoursesList() {
  const [courseList, setCourseList] = useState<any>([])
  const getCourseList = () => {
    fbGet('Courses')
      .then(res => {
        setCourseList([...res])
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    getCourseList()
  }, [])
  return (
    <>
      <div className="grid md:grid-cols-1  sm:grid-cols-2 grid-cols-1  ">
        {courseList.map((x: any, i: any) => {
          return (
            <div style={{ borderColor:'yellow' }} className="bg-black rounded-sm border-2 shadow-lg p-5 m-3">
              <h5 ><span className="text-white text-3xl underline decoration-double">{x.courseName}</span></h5>
              <h5 ><span style={{ color:'yellow' }}>Course Duration</span><span className="text-white">:</span><span className="text-white">{x.courseDuration}</span></h5>
              <h5 ><span style={{ color:'yellow' }}>Course Fee</span><span className="text-white">:</span><span className="text-white">{x.courseFee}</span></h5>
              <h5 ><span style={{ color:'yellow' }}>Course Teacher</span><span className="text-white">:</span><span className="text-white">{x.teacher}</span></h5>
            </div>
          )
        })}
      </div>

    </>
  )
}