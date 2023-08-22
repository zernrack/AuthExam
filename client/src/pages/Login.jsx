import "../assets/styles/login.css";
export default function Login() {
  return (
    <>
      <main>
        <h1>Login</h1>
        <div className="loginBox">
          <span>Username:</span>
          <input type="text" name="username" id="username" />
          <span>Password:</span>
          <input type="password" name="password" id="password" />
          <button type="button">Login</button>
        </div>
      </main>
    </>
  );
}
