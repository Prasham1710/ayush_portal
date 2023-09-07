import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectMongoDB } from "@/lib/mongodb";
import InUser from "@/models/inuser";
export async function POST(req) {
    try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await InUser.create({ name, email, password: hashedPassword });

        return NextResponse.json({ message: "User registered." }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: "An error occurred while registering the user." },
            { status: 500 }
        );
    }
}