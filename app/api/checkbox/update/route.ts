import { updateInvoice } from "@/app/lib/actions";
import { NextResponse } from "next/server";
import { z } from 'zod';

const Checkbox = z.object({
    id: z.string(),
    status: z.boolean(),
});

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        const status = searchParams.get('status');

        // Validate and parse the query parameters using Zod
        const validatedFields = Checkbox.safeParse({
            id: id ?? '', // Ensure a default value for id
            status: status === 'true', // Convert status string to boolean
        });

        // If form validation fails, return errors early. Otherwise, continue.
        if (!validatedFields.success) {
            return NextResponse.json({ message: "Values not entered correctly" });
        }     

        // Extract values from the validated fields
        const { id: validatedId, status: validatedStatus } = validatedFields.data;

        const oppositeStatus = !validatedStatus;
        // Call updateInvoice function with parsed values
        const data = await updateInvoice(validatedId, oppositeStatus);
        
        // Return success response
        return NextResponse.json({ message: "ok" });
    } catch (error) {
        // Handle errors gracefully
        console.error("Error:", error);
        return NextResponse.error();
    }
}
