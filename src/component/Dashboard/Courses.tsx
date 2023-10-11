import {useState , useEffect} from 'react'
import { fbGet } from '../../config/firebasemethod'
import {  useNavigate } from 'react-router-dom'
export default function Courses(){
    const [courseList , setCourseList] = useState<any>([])
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
    } , [])
    const naviate = useNavigate()
    return(
        <>
        <div className="bg-black rounded-md">
        <h1 className="text-center py-3"><span style={{color:'yellow'}} className="underline decoration-double">COURSE</span><span className="text-white decoration-double underline">LIST</span></h1>
        <table className="table table-dark text-center table-hover table-striped" style={{cursor:'pointer' }}>
            <thead  >
                <tr>
                    <th style={{color:'yellow'}} className='underline'>Course Name</th>
                    <th style={{color:'yellow'}} className='underline'>Course Duration</th>
                    <th style={{color:'yellow'}} className='underline'>Course Fee</th>
                    <th style={{color:'yellow'}} className='underline'>Course Teacher</th>
                </tr>
            </thead>
            {courseList.map((x:any,i:any) => {
                return(
                    <tbody  >
                        <tr onClick={() => naviate(`/admissionForm/${x.id}`)}>
                            <td>{x.courseName}</td>
                            <td>{x.courseDuration}</td>
                            <td>{x.courseFee}</td>
                            <td>{x.teacher}</td>
                        </tr>
                    </tbody>
                )
            })}
            
        </table>
        </div>
        </>
    )
}