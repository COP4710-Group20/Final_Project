import './App.css';

function App() {
  return (
    <div className="App">
      <form action="/users/login" method="POST">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="form-control"
            placeholder="Enter Email"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control"
            placeholder="Enter Password"
          />
        </div>
        <button type="submit" class="btn btn-primary btn-block">Login</button>
      </form> 

      <p class="lead mt-4">
        No Account? <a href="/users/register">Register</a>
      </p>
    </div>
  );
}

export default App;
