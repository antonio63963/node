const express = require('express');
const router = express.Router();

const cont = {
form:`
<form id="form" name="user">
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

    <button class="submit" type="submit">SUBMIT</button>
  </form>

  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <script src="./form.js"></script>
`,

mainPage: `
  <h1 class="title">Hello NODE</h1>
  <p>Lorem ipsum dolor sit amet, consectet</p>
  <img class="img" src="./nodejsLogo.svg">

`
}


router.get('/', (req, res) => {
  const {id} = req.params;
  res.render('generic', { content: cont.mainPage })
})

router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.render('generic', { content: cont[id] })
})
module.exports = router;