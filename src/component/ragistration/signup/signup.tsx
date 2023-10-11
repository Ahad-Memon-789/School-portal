import BAButton from "../../BAButton";
import Input from "../../Input";
import img1 from "../../img/download-removebg-preview.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbSignUp } from "../../../config/firebasemethod";
import { Backdrop, CircularProgress, Typography } from "@mui/material";
export default function SignUp() {
    const [model, setModel] = useState<any>({});
    const [open, setOpen] = useState<boolean>(false)

    const fillModel = (key: string, val: any) => {
        model[key] = val;
        setModel({ ...model });
    };

    const navigate = useNavigate();
    let signUpUser = () => {
        // console.log(model);
        model.role = "user"
        setOpen(true)
        fbSignUp(model)
            .then((res) => {
                if (model.role === "user") {
                    navigate(`/Student`)
                } else {
                    navigate(`/`)
                }
                setOpen(false)
            })
            .catch((err) => {
                alert('Please enter valid email or password');
                setOpen(false)
            });
    };
    let loginRout = () => {
        navigate(`/login`)
    }
    return (
        <div className="flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-screen h-screen">
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            // onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <div className="w-[500px] ease-in duration-300 bg-[rgba(255,255,255,.2)] p-10  rounded-lg border-t-4border-indigo-500 flex flex-col justify-center">
                <img src={img1} alt="" width={100} className="mx-auto" />
                <h1 className="mx-auto mb-5">SignUp</h1>
                {/* <Button onClick={handleOpen}>Show backdrop</Button> */}
                <Input inpValue={model.UserName}
                    inpChange={(e: any) => fillModel("User Name", e.target.value)}
                    inplabel="User Name"
                    inpType="text" />
                <Input inpValue={model.UserEmail}
                    inpChange={(e: any) => fillModel("email", e.target.value)}
                    inplabel="User Email"
                    inpType="email"
                />
                <Input inpValue={model.EmailPassword}
                    inpChange={(e: any) => fillModel("password", e.target.value)}
                    inplabel="Email Password"
                    inpType="password"
                />
                <Typography className="chat-notification-message cursor-pointer text-center" color={'red'} >Already have an account please go<span className="chat-notification-message" >:</span> <span className="text-indigo-800" onClick={() => loginRout()}>Log in</span><span className="chat-notification-message">?</span></Typography>
                <BAButton btnChange={signUpUser} btnValue="Signup" />
            </div>
        </div>
    )
}