import BAButton from '../../BAButton'
import Input from '../../Input';
import img1 from "../../img/download-removebg-preview.png"
import { useState } from "react";
import SignUp from "../signup/signup";
import { fbSignIn } from '../../../config/firebasemethod';
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
export default function Login() {
    const [model, setModel] = useState<any>({});

    const fillModel = (key: string, val: any) => {
        model[key] = val;
        setModel({ ...model });
    };
    let navigate = useNavigate()
    let LoginUser = () => {
        console.log(model);
        fbSignIn(model)
            .then((res) => {
                if (res.role === "admin") {
                    navigate(`/`)
                } else {
                    navigate(`/Student`)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    let loginRout = () => {
        navigate(`/signup`)
    }
    return (
        <div className="flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-screen h-screen">
            <div className="w-[500px] ease-in duration-300 bg-[rgba(255,255,255,.2)] p-10 rounded-lg border-t-4border-indigo-500 flex flex-col justify-center p-10">
                <img src={img1} alt="" width={100} className="mx-auto" />
                <h1 className="mx-auto mb-5">LOGIN</h1>
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
                <Typography className="chat-notification-message cursor-pointer text-center" color={'red'}>Already don't have an account please go <span className="chat-notification-message" >:</span> <span className="text-indigo-800" onClick={() => loginRout()}>Sign Up</span><span className="chat-notification-message">?</span></Typography>
                <BAButton btnChange={LoginUser} btnValue="Login" />
            </div>
        </div>
    )
}