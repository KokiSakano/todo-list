import prisma from "@/lib/prisma";
import { NextResponse } from 'next/server';

export async function PATCH(
  request: Request,
  {
    params,
  }: {
    params: { id: string };
  },
) {
  const req = await request.json();
  const task = await prisma.tasks.update(
    {
      where: { id: Number(params.id) },
      data: { completed: req.completed }
    }
  );
  return NextResponse.json({ task });
}