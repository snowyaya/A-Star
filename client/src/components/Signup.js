import PageNavBar from "./PageNavbar";

function SignUp() {
  return (
    <div>
        <PageNavBar />
      <h1>SignUp</h1>
      <form>
        <label>
            Name:
            <input type="text" name="name" />
        </label>
        <label>
            Email:
            <input type="text" name="email" />
        </label>
        <label>
            Password:
            <input type="text" name="password" />
        </label>
        <input type="submit" value="Submit" />
        </form>

    </div>
  );
}

export default SignUp;