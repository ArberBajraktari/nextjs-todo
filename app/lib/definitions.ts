export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
  };

export type Project = {
  id: string;
  name: string;
  description: string;
  user_id: string;
}

export type Task = {
  id: string;
  name: string;
  status: boolean;
  priority: number;
  project_id: string;
  user_id: string;
  project_name: string;
}