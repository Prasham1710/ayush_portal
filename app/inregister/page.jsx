import InRegisterForm from "../components/InuserAuthForms/InRegisterForm.jsx"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
export default  async function InRegister() 
{
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return <InRegisterForm />;
}