
import { updateInvoice, updateTask } from "@/app/lib/actions";
import { NextResponse } from "next/server";
import { z } from 'zod';

export const dynamic = 'force-dynamic'

const Input = z.object({
    id: z.string(),
    text: z.string(),
});

export async function POST(request: Request) {
    try {
        console.log('post')
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        const text = searchParams.get('text');
        const project_id = searchParams.get('project_id') || '';

       
        await updateTask(id, text, project_id);
        return NextResponse.json({ message: "ok" });
    } catch (error) {
        // Handle errors gracefully
        console.error("Error:", error);
        return NextResponse.error();
    }
}
