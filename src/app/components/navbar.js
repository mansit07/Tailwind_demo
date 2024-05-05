"use client";

import React from "react";
import Link from "next/link";
import Logo from "./logo";
import Button from "./button";

export default function Navbar() {
    return (
        <>
        <div className="w-full h-20 bg-emerald-800 sticky top-0">
          <div className="container mx-auto px-4 h-full">
            <div className="flex justify-between items-center h-full">
             <Logo/>
              <ul className="hidden md:flex gap-x-6 text-white">
                <li>
                  <Link href="/dashboard">
                    <p>Dashboard</p>
                  </Link>
                </li>
                <li>
                  <Link href="/users">
                    <p>Users</p>
                  </Link>
                </li>
              </ul>
              {/* <Button /> */}
            </div>
          </div>
        </div>
      </>
    );
}
