import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// =============================== READ ======================================

// Get Api
export async function GET() {
  try {
    const data = await prisma.items.findMany();
    return NextResponse.json(data);
  } catch (error) {
    // -------------------------------------------------
    return NextResponse.json(
      { error: "Failed to fetch users", details: error.message },
      { status: 500 }
    );
  }
}

// ======================= ADD  =======================
export async function POST(req) {
  try {
    const { title, price, img_url } = await req.json();

    const newItem = await prisma.items.create({
      data: { title, price, img_url },
    });

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add item", details: error.message },
      { status: 500 }
    );
  }
}

// ======================= DELETE  =======================
export async function DELETE(request) {
  try {
    const { id } = await request.json();

    await prisma.items.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete user", details: error.message },
      { status: 500 }
    );
  }
}

// ======================= UPDATE  =======================
export async function PATCH(request) {
  try {
    const { id, title, price } = await request.json();

    const updatedUser = await prisma.items.update({
      where: { id },
      data: {
        title,
        price,
      },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update user", details: error.message },
      { status: 500 }
    );
  }
}
