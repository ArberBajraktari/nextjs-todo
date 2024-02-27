// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'User',
      email: 'user@nextmail.com',
      password: '123456',
    },
  ];
  
const projects = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Football',
    desc: 'Managing Astro Unitd FC',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Anime',
    desc: 'Watching all of my favorite animes in german.',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Cleaning',
    desc: 'Cleaning duties, in my room and other rooms too.',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
  },
]

const tasks = [
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Run 3km',
    status: true,
    priority: 1,
    project_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Run 3k',
    status: false,
    priority: 1,
    project_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Stretch',
    status: false,
    priority: 2,
    project_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Watch JJK',
    status: false,
    priority: 2,
    project_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Wash clothes',
    status: false,
    priority: 1,
    project_id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
  },
]
  module.exports = {
    users,
    projects,
    tasks,
  };