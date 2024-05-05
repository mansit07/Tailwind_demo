"use client";

import React from "react";

export default function Card(props) {
    const user = props.user;
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-5">
            <div className="font-bold text-xl mb-2">{user.username}</div>
            <div className="text-sm">
                <p className="text-gray-900 leading-none">{user.company.name}</p>
                <p className="text-gray-600">{user.website}</p>
            </div>
        </div>
    );
}
