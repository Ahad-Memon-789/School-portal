import { useState } from "react"

export default function LMS(){
    return(
        <>
        <div style={{ borderColor:'yellow' }} className="bg-black p-5 shadow-lg rounded-md border-2 ">
        <h2 className="text-center"><span className="underline decoration-double text-white">Welcome to My</span><span style={{ color:'yellow' }} className="underline decoration-double">Institute</span></h2>
        <p className="text-white text-center mt-5 ">
        We offer a wide range of courses here, and these courses have significantly improved students' future prospects. Many students have taken our courses, and the results have been excellent.
        </p>
        </div>
        </>
    )
}