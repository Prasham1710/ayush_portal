import Image from 'next/image'
import Dash from './components/Dash'
import { getServerSession } from "next-auth";

import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <main>
      <Dash />
    </main>
  );
}