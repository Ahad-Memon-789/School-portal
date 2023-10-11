import { Button, TextField } from "@mui/material";
import {useState} from 'react'
import { fbAdd } from "../../config/firebasemethod";

export default function CreateCourse(){
    const [addCourse , setAddCourse] = useState<any>({})
    const fillAddCourse = (key:string , val:any) => {
        addCourse[key] = val
        setAddCourse({...addCourse})
    }
    const addCourseToDb = () => {
        fbAdd('/Courses' , addCourse)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return(
        <>
        <div style={{ borderColor:'yellow' }} className="border-2 bg-black rounded-sm p-5">
            <h2 className="text-center text-3xl"><span style={{color:"yellow"}} className=" underline decoration-double">COURSE</span><span className="underline decoration-double text-white">FORM</span></h2>
            <div className="grid grid-cols-2">
                <div className="m-3">
                    <TextField label='Course Name' onChange={(e) => fillAddCourse('courseName' , e.target.value)} variant="filled" color="error" className="w-100 bg-white rounded-sm"/>
                </div>
                <div className="m-3">
                    <TextField label='Course Duration' onChange={(e) => fillAddCourse('courseDuration' , e.target.value)} variant="filled" color="error" className="w-100 bg-white rounded-sm"/>
                </div>
                <div className="m-3">
                    <TextField label='Course Fee'  onChange={(e) => fillAddCourse('courseFee' , e.target.value)} variant="filled" color="error" className="w-100 bg-white rounded-sm"/>
                </div>
                <div className="m-3">
                    <TextField label='Teacher' onChange={(e) => fillAddCourse('teacher' , e.target.value)} variant="filled" color="error" className="w-100 bg-white rounded-sm"/>
                </div>
            </div>
            <div className="text-center">
                <Button variant="contained" style={{ backgroundColor:'yellow' , color:'black' }} className="mx-3" onClick={addCourseToDb}>ADD Course</Button>
            </div>
        </div>
        </>
    )
}