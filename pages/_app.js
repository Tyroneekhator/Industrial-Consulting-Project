import "../styles/global.css"
import Sidebar from '../components/Sidebar'
import { SessionProvider } from 'next-auth/react'
import {Alert} from "../components/Alert/AlertComponent"
import Head from "next/head"


export default function App({ Component, pageProps: {session, ...pageProps} }) {
    return (
        <>
            <Head>
                <title>Next.js - Alert (Toaster) Notifications</title>
            </Head>
            <SessionProvider session={session}>
                <Alert />
                <Sidebar>
                <Component {...pageProps} />
                </Sidebar>
            </SessionProvider>
        </>
    )    
}    