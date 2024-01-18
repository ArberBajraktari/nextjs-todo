-- Create Projects Table
CREATE TABLE projects (
    project_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_name VARCHAR(255),
    project_description TEXT,
    user_id UUID REFERENCES auth.users(id)
);

-- Create Chapters Table
CREATE TABLE chapters (
    chapter_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    chapter_name VARCHAR(255),
    chapter_description TEXT,
    project_id UUID REFERENCES projects(project_id),
    user_id UUID REFERENCES auth.users(id)
);

-- Create Tasks Table
CREATE TABLE tasks (
    task_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    task_name VARCHAR(255),
    task_description TEXT,
    chapter_id UUID REFERENCES chapters(chapter_id),
    deadline TIMESTAMPTZ,
    user_id UUID REFERENCES auth.users(id)
);

-- Create Todos Table
CREATE TABLE todos (
    todo_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    todo_name VARCHAR(255),
    todo_status BOOLEAN,
    task_id UUID REFERENCES tasks(task_id),
    user_id UUID REFERENCES auth.users(id)
);
