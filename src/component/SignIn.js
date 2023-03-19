import React from 'react'

function SignIn() {
  return (
    <div>
      <form>
        <div className='form-group'>
          <h2>Sign in</h2>
        <label htmlFor='email'>Email Address</label>
        <input
        type='email'
        className='form-control'   
        />

      </div>
      <div className='form-group'>
        <label>Password</label>
        <input type='password' 
        />
      <button>Sign in</button>   


      </div>
      </form>
      
    </div>
  )
}

export default SignIn
