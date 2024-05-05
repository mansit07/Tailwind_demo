"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
    const [userlist, setuserlist] = useState([]);

    useEffect(() => {
        getuserdata();
    }, []);

    const getuserdata = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
            console.log(res)
        })
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>dashboard</h1>
        </main>
    );
}
