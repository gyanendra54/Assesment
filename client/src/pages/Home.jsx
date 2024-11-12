import React from 'react';

export default function Home() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold  mb-4 text-slate-800'>
        Assesment Test
      </h1>
      <p className='mb-4 text-slate-700'>
        This is an assesment test where my task is create signUp and SignIn page and Profile page and perform CRUD operation
      </p>
     <p className='mb-4 text-slate-700'>
     The SignUp page allows users to create an account. When a user submits their details (username, email, and password)
     </p>
     <p className='mb-4 text-slate-700'>The SignIn page allows users to log into their accounts. Users provide their email and password. On successful login, a JWT token is returned and stored</p>
     <p className='mb-4 text-slate-700'>The Profile page shows the logged-in user’s details and allows them to update their profile or delete their account.</p>
  
    </div>
  );
}
