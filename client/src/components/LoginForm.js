import React from 'react'

function LoginForm (props){
 return<div>
     <form onSubmit={props.onSubmit}>
        <label>
          Email :
          <input
            type="text"
            name="email"
            value={props.values.email}
            onChange={props.onChange}
          />
        </label>
        <label>
          Password:
          <input
           type="text"
           name="password"
           value={props.values.password}
           onChange={props.onChange}
          />
        </label>
        <input type="submit" />
      </form>
 </div>
}

export default LoginForm