import { useEffect, useState } from "react"
import { Button } from "../button"
import { Navbar } from "../navbar"
import { menu } from "@/app/page"

export default function Layout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {

    return (
      <div className="bg-white h-screen dark:bg-inherit">
        <div className="flex">
          <Navbar />
        </div>
        <main className="p-4">{children}</main>
      </div>
    )
  }