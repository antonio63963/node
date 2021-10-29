const successReg = {
  html: `
    <div class="container">
      <h1>You have regidtred!!!</h1>
      <img src="/images/connect.gif" alt="png-connect">
      <button type="button" class="btn btn-primary logout">Logout</button>
    </div>
  `,
  scripts: ["javascripts/authPage.js"]
};

const loginForm = {
  html: `
  <h1>LOGIN</h1>
  <p>Welcome to <%= title %></p>
  <form class="row g-3" name="login">
  
    <div class="col-auto">
      <label for="staticEmail2" class="visually-hidden">Email</label>
      <input name="email" type="text" class="form-control-plaintext" placeholder="email@example.com">
    </div>
    <div class="col-auto">
      <label for="inputPassword2" class="visually-hidden">Password</label>
      <input name="password" type="password" class="form-control" placeholder="Password">
    </div>
    <button class="btn btn-primary btn-registr">Registration</button>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-3 submit">Confirm identity</button>
    </div>
  </form>
  `,
  scripts: ["javascripts/login.js"]
};

const regForm = {
  html: `
  <h1>REGISTRATION</h1>
  <p>Welcome to <%= title %></p>
  <form class="row g-3" name="reg">
    <div class="col-auto">
      <label for="staticEmail2" class="visually-hidden">Name</label>
      <input name="name" type="text" class="form-control-plaintext" placeholder="user name">
    </div>
    <div class="col-auto">
      <label for="staticEmail2" class="visually-hidden">Email</label>
      <input name="email" type="text" class="form-control-plaintext" placeholder="email@example.com">
    </div>
    <div class="col-auto">
      <label for="inputPassword2" class="visually-hidden">Password</label>
      <input name="password" type="password" class="form-control" placeholder="Password">
    </div>
    <button class="btn btn-primary btn-login">Login</button>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-3 submit">Confirm identity</button>
    </div>
  </form>
  `,
  scripts: ["javascripts/regForm.js"]
}


module.exports = {
  successReg,
  loginForm,
  regForm
}