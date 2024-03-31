"use client"
import React from "react";
import { userRegistrationSchema } from "../lib/validationSchema";

export default function Page() {
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            email: event.target.email.value,
            password: event.target.password.value,
            confirmPassword: event.target.confirmPassword.value,
        };
        try {
            userRegistrationSchema.parse(formData);
            console.log("Form submitted successfully");
        } catch (error) {
            console.error(error);
        }
    }

    return (
    <div>
        Register
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column",backgroundColor: "red" }}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" id="confirmPassword" />
            <button type="submit">Submit</button>
        </form>
    </div>
);
}