"use server"

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addTask(formData: FormData) {
    console.log("Adding task...");
    const task = await prisma.task.create({
        data: {
            title: formData.get("title") as string
        }
    });
    revalidatePath("/")
    return task

}

export async function getTasks() {
    console.log("Getting tasks...");
    const tasks = await prisma.task.findMany();
    return tasks
}