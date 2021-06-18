const express = require('express');
const router = express.Router();
const registration = `
<label class="userLable">
  Your password: 
  <input name="user" class="userPasswordrepeat" type="password" placeholder="****">
</label>
`
const cont = {
  login: `
    <form id="form" name="user">
      <div class="formTop">
        <h1>LOGIN</h1>
        <button class="btn btn-close">x</button>
      </div>
      <label class="userLable">
        Your email: 
        <input name="user" class="userEmail" type="text" placeholder="some@mail.com">
      </label>
  
      <label class="userLable">
        Your name: 
        <input name="user" class="userName" type="text" placeholder="your name">
      </label>
      <label class="userLable">
        Your password: 
        <input name="user" class="userPassword" type="password" placeholder="****">
      </label>
        <button class="submit btn" type="submit">SUBMIT</button>
    </form>
    
      <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      <script src="./form.js"></script>
      <script src="./general.js"></script>
    `
  ,

  registration: `
  <form id="form" name="user">
    <div class="formTop">
      <h1>REGISTRATION</h1>
      <a href="/"><button class="btn btn-close">x</button></a>
    </div>
    <label class="userLable">
      Your email: 
      <input name="user" class="userEmail" type="text" placeholder="some@mail.com">
    </label>

    <label class="userLable">
      Your name: 
      <input name="user" class="userName" type="text" placeholder="your name">
    </label>
    <label class="userLable">
      Your password: 
      <input name="user" class="userPassword" type="password" placeholder="****">
    </label>

    <label class="userLable">
      Your password again: 
      <input name="user" class="userPasswordrepeat" type="password" placeholder="****">
    </label>

    <button class="submit btn" type="submit">REGISTRATION</button>
  </form>
  
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="./form.js"></script>
    <script src="./general.js"></script>
  `
  ,

  mainPage: `
      <h1 class="title">Hello NODE</h1>
      <h2>Я вам ничего не покажу, пока вы не зарегистрируетесь!</h2>
      <img class="img" src="./nodejsLogo.svg">
    
    `

}


router.get('/', (req, res) => {
  const { id } = req.params;
  res.render('generic', { content: cont.mainPage })
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.render('generic', { content: cont[id] })
})

module.exports = router;