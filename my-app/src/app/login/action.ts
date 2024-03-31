"use server"

export async function submitFrom( formData: FormData ) {

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    console.log({ email, password })
}

import { SignJWT, importJWK } from "jose"

type LoginState = {
    message: string
}

export async function login ( prevState: LoginState, formData: FormData ) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (email !== "admin" || password !== "admin") {

        return {
            message: "Invalid email or password",
        }
    }

    const secretJWK = 
    {
        "kty": "oct",
        "k": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    }

    const key = await importJWK( secretJWK, "HS256" )
    const token = await new SignJWT({ email })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("2h")
        .sign(key)

    console.log({ token })

    return {
        message: "Login successful",
    }
}