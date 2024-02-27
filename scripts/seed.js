const { db } = require('@vercel/postgres');
const { projects, tasks, users } = require('../lib/placeholder-data');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
    try {
        await client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await client.query(`
            CREATE TABLE IF NOT EXISTS users (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL
            )
        `);

        console.log(`Created "users" table`);

        const insertedUsers = await Promise.all(
            users.map(async (user) => {
                const hashedPassword = await bcrypt.hash(user.password, 10);
                return client.query(`
                    INSERT INTO users (id, name, email, password)
                    VALUES ($1, $2, $3, $4)
                    ON CONFLICT (id) DO NOTHING
                `, [user.id, user.name, user.email, hashedPassword]);
            })
        );

        console.log(`Seeded ${insertedUsers.length} users`);
    } catch (error) {
        console.error('Error seeding users:', error);
        throw error;
    }
}

async function seedProjects(client) {
    try {
        await client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await client.query(`
            CREATE TABLE IF NOT EXISTS projects (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                description VARCHAR(255) NOT NULL,
                user_id UUID NOT NULL
            )
        `);

        console.log(`Created "projects" table`);

        const insertedProjects = await Promise.all(
            projects.map(async (project) => {
                return client.query(`
                    INSERT INTO projects (id, name, description, user_id)
                    VALUES ($1, $2, $3, $4)
                    ON CONFLICT (id) DO NOTHING
                `, [project.id, project.name, project.desc, project.user_id]);
            })
        );

        console.log(`Seeded ${insertedProjects.length} projects`);
    } catch (error) {
        console.error('Error seeding projects:', error);
        throw error;
    }
}

async function seedTasks(client) {
    try {
        await client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await client.query(`
            CREATE TABLE IF NOT EXISTS tasks (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                status BOOLEAN,
                priority INTEGER,
                project_id UUID NOT NULL,
                user_id UUID NOT NULL
            )
        `);

        console.log(`Created "tasks" table`);

        const insertedTasks = await Promise.all(
            tasks.map(async (task) => {
                return client.query(`
                    INSERT INTO tasks (id, name, status, priority, project_id, user_id)
                    VALUES ($1, $2, $3, $4, $5, $6)
                    ON CONFLICT (id) DO NOTHING
                `, [task.id, task.name, task.status, task.priority, task.project_id, task.user_id]);
            })
        );

        console.log(`Seeded ${insertedTasks.length} tasks`);
    } catch (error) {
        console.error('Error seeding tasks:', error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();

    try {
        await seedUsers(client);
        await seedProjects(client);
        await seedTasks(client);
    } finally {
        await client.end();
    }
}

main().catch((err) => {
    console.error('An error occurred while attempting to seed the database:', err);
});
