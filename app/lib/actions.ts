'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


export async function updateInvoice(
    id: string | null,
    status: boolean | null
  ) {
    
    try {
        await sql`
            UPDATE tasks SET status = ${status} where id = ${id}
        `;
      } catch (error) {
        // If a database error occurs, return a more specific error.
        return {
          message: 'Database Error: Failed to Update statu of task.',
        };
      }

  }