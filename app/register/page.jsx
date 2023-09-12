import RegisterForm from "../components/UserAuthforms/Registerform.jsx";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Register() {
  return <RegisterForm />;
}