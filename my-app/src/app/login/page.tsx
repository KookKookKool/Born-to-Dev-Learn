//หรือจะใช้ไฟล์เดียวกันได้

//import { submitFrom } from "./action"; //เพิ่มจาก Action

//export async function submitFrom( formData: FormData ) {
  //  "use server"
  //  const email = formData.get('email') as string
    //const password = formData.get('password') as string

    //console.log({ email, password })
//}



"use client"


import { useFormState } from "react-dom";
import { login  } from "./action";

export default function Page() {

    const initState = {
        message: "",
    };

    const [ state, formAction ] = useFormState(login, initState);
    return (
        <div>
            
            <h1>Login</h1>
            <form action={formAction} style={{ display: "flex", flexDirection: "column",backgroundColor: "red" }}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Submit</button>
                <p> Message: { state.message }</p>
            </form>

            
            
            {/*<h1>Login</h1>
            <form action={submitFrom} style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Submit</button>
    </form>*/}
        </div>
    );
}
