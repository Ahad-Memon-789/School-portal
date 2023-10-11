import { Button, CircularProgress, TextField, Backdrop, } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbAdd } from "../config/firebasemethod";

export default function InstituteForm() {
    const [instData, setInsTData] = useState<any>({})
    const [open, setOpen] = useState(false)
    const [isRequired, setIsRequired] = useState<any>(false)
    const navigate = useNavigate()
    const fillInstData = (key: string, val: any) => {
        instData[key] = val
        setInsTData({ ...instData })
    }
    const addInstData = () => {
        setOpen(true)
        if (!instData.instituteName || !instData.instituteType || !instData.shortName || !instData.contact || !instData.ownerContact || !instData.ownerEmail || !instData.campusNo || !instData.location || !instData.address) {
            setIsRequired(true)
            setOpen(false)
        }
        else {
            fbAdd('Institutes', instData)
                .then(res => {
                    navigate('/')
                    setOpen(false)
                })
                .catch(err => {
                    console.log(err)
                    setOpen(false)
                })
        }

    }
    return (
        <div className="flex justify-center items-center h-screen">

            <div className="bg-[#D2E0FB] border-4 border-[#8EACCD] rounded-md  shadow-lg">
                <div>
                    <Backdrop
                        sx={{ color: '#8EACCD', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                    >
                        <CircularProgress />
                    </Backdrop>
                </div>
                <div>
                    <h1 className="text-center mt-3"><span style={{color:'rgba(0,0,255,.2)'}} className="text-3xl underline decoration-double">INSTITUTE</span><span style={{ color:'rgba(0,0,70,.4)' }} className="text-3xl  underline decoration-double">FORM</span></h1>
                </div>
                <div className="text-center mt-5">
                    <Button variant="contained" style={{backgroundColor:'#8EACCD'}}  onClick={addInstData}>ADD INSTITUTE</Button>
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 text-center">
                    <div className="m-5">
                        {isRequired ? (<TextField error variant="outlined" label='This Field is Required' focused onClick={() => setIsRequired(false)} color="primary" className="bg-white rounded-sm  w-100"></TextField>) : (<TextField variant="outlined" label='Institute Name' onChange={(e) => fillInstData('instituteName', e.target.value)} color="primary" className="bg-white rounded-sm  w-100"></TextField>)}
                    </div>
                    <div className="m-5">
                        {isRequired ? (<TextField error variant="outlined" label='This Field is Required' focused onClick={() => setIsRequired(false)} color="primary" className="bg-white rounded-sm  w-100"></TextField>) : (<TextField variant="outlined" label='Institute Short Name' onChange={(e) => fillInstData('shortName', e.target.value)} color="primary" className="bg-white rounded-sm  w-100"></TextField>)}
                    </div>
                    <div className="m-5">
                        {isRequired ? (<TextField error variant="outlined" label='This Field is Required' focused onClick={() => setIsRequired(false)} color="primary" className="bg-white rounded-sm  w-100"></TextField>) : (<TextField variant="outlined" label='Campus No' onChange={(e) => fillInstData('campusNo', e.target.value)} color="primary" className="bg-white rounded-sm  w-100"></TextField>)}
                    </div>
                    <div className="m-5">
                        {isRequired ? (<TextField error variant="outlined" label='This Field is Required' focused onClick={() => setIsRequired(false)} color="primary" className="bg-white rounded-sm  w-100"></TextField>) : (<TextField variant="outlined" label='Location' onChange={(e) => fillInstData('location', e.target.value)} color="primary" className="bg-white rounded-sm  w-100"></TextField>)}

                    </div>
                    <div className="m-5">
                        {isRequired ? (<TextField error variant="outlined" label='This Field is Required' focused onClick={() => setIsRequired(false)} color="primary" className="bg-white rounded-sm  w-100"></TextField>) : (
                            <TextField variant="outlined" label='Contact' onChange={(e) => fillInstData('contact', e.target.value)} color="primary" className="bg-white rounded-sm  w-100"></TextField>)}
                    </div>
                    <div className="m-5">
                        {isRequired ? (<TextField error variant="outlined" label='This Field is Required' focused onClick={() => setIsRequired(false)} color="primary" className="bg-white rounded-sm  w-100"></TextField>) : (
                            <TextField variant="outlined" label='Owner Contact' onChange={(e) => fillInstData('ownerContact', e.target.value)} color="primary" className="bg-white rounded-sm  w-100"></TextField>)}
                    </div>
                    <div className="m-5">
                        {isRequired ? (<TextField error variant="outlined" label='This Field is Required' focused onClick={() => setIsRequired(false)} color="primary" className="bg-white rounded-sm  w-100"></TextField>) : (
                            <TextField variant="outlined" label='Owner Email' onChange={(e) => fillInstData('ownerEmail', e.target.value)} color="primary" className="bg-white rounded-sm  w-100"></TextField>)}
                    </div>
                    <div className="m-5">
                        {isRequired ? (<select placeholder="Instiude Type" onClick={() => setIsRequired(false)} color="primary" className="bg-white rounded-sm " ><option>School</option><option>University</option><option>College</option><option>Institude</option></select>) : (<select style={{ width:'200px',height:'55px' }} placeholder="Institude Type" onChange={(e) => fillInstData('instituteType', e.target.value)} color="primary" className="bg-white rounded-sm  w-100"><option>School</option><option>University</option><option>College</option><option>Institude</option></select>)}

                    </div>
                    <div className="m-5 col-span-1">
                        {isRequired ? (<TextField error variant="outlined" label='This Field is Required' focused onClick={() => setIsRequired(false)} color="primary" className="bg-white rounded-sm  w-100"></TextField>) : (<TextField variant="outlined" label='Secret Key' onChange={(e) => fillInstData('secretKey', e.target.value)} color="primary" className="bg-white rounded-sm  w-100"></TextField>)}
                    </div>

                    <div className="m-5 col-span-3">
                        {isRequired ? (<TextField error variant="outlined" label='This Field is Required' focused onClick={() => setIsRequired(false)} color="primary" fullWidth className="bg-white rounded-sm  w-100"></TextField>) : (<TextField fullWidth variant="outlined" multiline label='Address' onChange={(e) => fillInstData('address', e.target.value)} color="primary" className="bg-white rounded-sm  w-100"></TextField>)}
                    </div>
                </div>
            </div>
        </div>

    )
}