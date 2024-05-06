"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/card";
import Link from "next/link";

// Import hooks provided by react-redux
import { useSelector, useDispatch } from "react-redux";
// Import all actions and bind them
import { getData } from "../redux/actions/userActions";

export default function Users() {
    const [userlist, setuserlist] = useState([]);
    const usersdata = useSelector((state) => state?.users?.usersdata);
    const dispatch = useDispatch();

    useEffect(() => {
        getuserdata();
    }, []);

    const getuserdata =async () => {
        // axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
        //     console.log(res);
        //     setuserlist(res.data);
        // })
        await axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            dispatch(getData(res.data))
            setuserlist(res.data);
            console.log(res.data)
        })
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div class="grid grid-cols-4 gap-4">
                {userlist.map((user, index) => (
                    <Link href={`users/details/${user.id}`} as={`users/${user.id}`}>
                      <Card key={index} user={user} />
                    </Link>
                ))}
            </div>
        </main>
    );
}
