import { client } from "@/lib/client";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// POST: Add a new email subscriber
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email } = body;

    // Validation
    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and email are required." },
        { status: 400 }
      );
    }

    // Create a new document in Sanity
    const newSubscriber = await client.create({
      _type: "emailList",
      name,
      email,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        message: "Successfully subscribed to the email list!",
        subscriber: newSubscriber,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding subscriber:", error);
    return NextResponse.json(
      { message: "An error occurred while adding the subscriber." },
      { status: 500 }
    );
  }
}
