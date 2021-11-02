const albumForm = {
  html: `
    <div class="row hidden">
      <form name="album" class="col-xs-12 col-sm-8 col-md-6 offset-md-3 offset-sm-2" id="album"px-5">
        <h1 class="my-3 text-center">Create new album</h1>
        <div class="mb-3">
          <label for="name" class="form-label">Album name:</label>
          <input type="text" class="form-control" id="name" aria-describedby="emailHelp">
        </div>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Tag" aria-label="Tag" aria-describedby="button-addon2">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
        </div>

        <div class="form-floating mb-3">
          <textarea name="description" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          <label for="floatingTextarea">Description</label>
        </div>
          
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  `,
  scripts: [
    "/javascripts/album.js",
  ]
};

module.exports = albumForm;