import React from 'react'
import Link from 'next/link'
import {signOut} from 'next-auth/react'

export default function LoginBtn() {
  return (
    <>
      <Link href='/login'><button className="bg-green-500 hover:bg-green-400 text-white px-4 py-1 rounded-lg">Login</button></Link>
    </>
  )
}
