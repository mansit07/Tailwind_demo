"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Users({ params }) {
    const [userdata, setuserdata] = useState([]);
    const [postdata, setpostdata] = useState([]);
    const [currentpost, setcurrentpost] = useState(null);
    const [comments, setcomments] = useState([]);



    useEffect(() => {
        getuserdata();
        getpostdata();
    }, []);

    useEffect(() => {
        getcomments();
    }, [currentpost]);

    const getuserdata = () => {
        axios.get("https://jsonplaceholder.typicode.com/users/" + params.userid).then(res => {
            setuserdata(res.data);
        })
    }
    const getpostdata = () => {
        axios.get("https://jsonplaceholder.typicode.com/users/" + params.userid + "/posts").then(res => {
            setpostdata(res.data);
        })
    }

    const getcomments = () => {
        if (currentpost !== null) {
            axios.get("https://jsonplaceholder.typicode.com/comments?postId=" + currentpost.id).then(res => {
                setcomments(res.data);
            })
        }
    }
    const selectpost = (post) => {
        if (currentpost !== null) {
            if (post.id == currentpost?.id) {
                setcurrentpost(null)
            }
            else {
                setcurrentpost(post)
            }
        }
        else {
            setcurrentpost(post)
        }

    }

    return (
        <main className="flex min-h-screen flex-col p-2">
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-5 m-2">
                <div className="font-bold text-xl mb-2">{userdata.name}</div>
                <div className="text-sm">
                    <p className="text-gray-900 leading-none mb-1">User Name : {userdata.username}</p>
                    <p className="text-gray-900 leading-none mb-1">Email : {userdata.email}</p>
                    <p className="text-gray-900 leading-none mb-1">Company : {userdata?.company?.name}</p>
                    <p className="text-gray-600 ">Web :  {userdata.website}</p>
                    <p className="text-gray-600 mb-1">Contact :  {userdata.phone}</p>
                </div>
            </div>
            <div className="max-w-4xl rounded overflow-hidden shadow-lg p-5">
                <div className="font-semibold text-l mb-2">Posts</div>
                {postdata.length > 0 ?
                    postdata.map((post, index) => (
                        <div key={index} className="max-w rounded overflow-hidden shadow-lg p-5 cursor-pointer" onClick={() => selectpost(post)}>
                            <div className="font-semibold text-m mb-2">{post.title}</div>
                            <p className="text-gray-900 leading-none mb-1">{post.body}</p>
                            {currentpost && currentpost?.id === post.id ?
                                comments.length > 0 ?
                                    comments.map((comment, index) => (
                                        <div className="max-w rounded overflow-hidden shadow-lg p-3">
                                            <p className="text-gray-800 text-sm font-semibold leading-none mb-1">{comment.name}</p>
                                            <p className="text-gray-700 text-sm leading-none mb-1">{comment.body}</p>
                                        </div>
                                    ))
                                    : <p className="text-gray-600 mb-1">No Comments added.</p>
                                : null}
                        </div>
                    ))
                    : <p className="text-gray-600 mb-1">No Posts found with user.</p>}


            </div>

        </main>
    );
}
