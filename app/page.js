import Image from 'next/image'
import LoginForm from './components/UserAuthforms/LoginForm'
import { getServerSession } from "next-auth";

import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import Navbar from './components/Navbar';
export default async function Home() {
  const session = await getServerSession(authOptions);

  

  return (
    <main >
      
      
     <LoginForm />
      
      
    </main>
  );
}