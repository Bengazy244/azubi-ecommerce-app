import React from 'react'

function SignIn() {
  return (
    <div>
      <form>
      <div className='form-group'>
        <label>Email Address</label>
        <input
        type='email'
        className='form-control'   
        />

      </div>
      <div className='form-group'>
        <label>Password</label>
        <input type='password' 

        />


      </div>
      </form>
      
    </div>
  )
}

export default SignIn
