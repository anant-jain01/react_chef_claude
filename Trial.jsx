import React from 'react';
import ReactDOM from 'react-dom/client';

function Trial() {
  return (
    <section>
      <h1>Signup form</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder='***' />
        
      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);