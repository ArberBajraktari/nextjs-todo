'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


export async function updateInvoice(
    id: string | undefined,
    status: boolean | null
  ) {
    
    try {
        await sql`
            UPDATE tasks SET status = ${status} where id = ${id}
        `;
        revalidatePath('/')
      } catch (error) {
        // If a database error occurs, return a more specific error.
        return {
          message: 'Database Error: Failed to Update statu of task.',
        };
      }

}

export async function updateTask(
  id: string | null,
  text: string | null,
  project_id: string | undefined
) {
  try {
      await sql`
          UPDATE tasks SET name = ${text} where id = ${id}
      `;
      revalidatePath(`/${project_id}/project`);
      redirect(`/${project_id}/project`);
    } catch (error) {
      // If a database error occurs, return a more specific error.
      return {
        message: 'Database Error: Failed to Update statu of task.',
      };
    }

}

export async function insertProject(
  name: string | undefined,
  description: string | undefined,
  user_id: string | undefined
) {
  
  try {
    await sql`
        INSERT into projects(name, description, user_id) values(${name}, ${description}, ${user_id})
      `;

      revalidatePath('/projects');
      // redirect('/projects');
    } catch (error) {
      // If a database error occurs, return a more specific error.
      return {
        message: 'Database Error: Failed to Update statu of task.',
      };
    }

}

export async function insertTask(
  name: string | undefined,
  priority: string | undefined,
  project_id: string | undefined,
  user_id: string | undefined
) {
  
  try {
    await sql`
        INSERT into tasks(name, status, priority, user_id, project_id) values(${name}, false, ${priority}, ${user_id}, ${project_id})
      `;

      revalidatePath(`/${project_id}/project`);
      // redirect('/projects');
    } catch (error) {
      // If a database error occurs, return a more specific error.
      return {
        message: 'Database Error: Failed to Update statu of task.',
      };
    }
}

export async function deleteTask(
  task_id: string | undefined,
  project_id: string | undefined
) {
  
  try {
    await sql`
        DELETE FROM TASKS where id = ${task_id}
      `;

      revalidatePath(`/`);
      revalidatePath(`/${project_id}/project`);
      // redirect('/projects');
    } catch (error) {
      // If a database error occurs, return a more specific error.
      return {
        message: 'Database Error: Failed to Update statu of task.',
      };
    }
}

export async function deleteProject(
  project_id: string | undefined
) {
  try {
    await sql`
      DELETE FROM TASKS where project_id = ${project_id}
    `;
    await sql`
      DELETE FROM projects where id = ${project_id}
    `;
    } catch (error) {
      // If a database error occurs, return a more specific error.
      return {
        message: 'Database Error: Failed to Update statu of task.',
      };
    }
}