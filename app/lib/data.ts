import {sql} from '@vercel/postgres'

import {
    Project,
    User,
    Task
} from './definitions';

export async function fetchProjects(user_id: string | undefined){
    try{
        const data = await sql<Project>`SELECT * FROM projects where user_id = ${user_id}`;
        return data.rows;
    }catch(error){
        console.error('Database error', error);
        throw new Error('Failed to fetch projects data.')
    }
}

export async function fetchProjectInfo(project_id: string | undefined){
    try{
        const data = await sql<Project>`SELECT * FROM projects where id = ${project_id}`;
        return data.rows[0] as Project;
    }catch(error){
        console.error('Database error', error);
        throw new Error('Failed to fetch projects data.')
    }
}

export async function fetchProjectTasks(project_id: string | undefined){
    try{
        const data = await sql<Task>`SELECT tasks.*, projects.name as project_name FROM tasks join projects on projects.id = tasks.project_id where project_id = ${project_id}`;
        return data.rows;
    }catch(error){
        console.error('Database error', error);
        throw new Error('Failed to fetch tasks data.')
    }
}

export async function fetchTasks(){
    try{
        const data = await sql<Task>`SELECT tasks.*, projects.name as project_name FROM tasks join projects on projects.id = tasks.project_id`;
        return data.rows;
    }catch(error){
        console.error('Database error', error);
        throw new Error('Failed to fetch tasks data.')
    }
}