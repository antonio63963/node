const express = require("express");
const path = require("path");
const crypto = require("crypto");
const fs = require("fs");
const multer = require("multer");
const mainRoute = require("./routes/mainRoute");

const upload = multer({
  dest: path.join(__dirname, "./public/upload"),
});

function getHash(pathFile) {
  console.log(pathFile);
  const file = fs.readFileSync(pathFile);
  const sha1sum = crypto.createHash("sha1").update(file).digest("hex");
  console.log("file's hash: ", sha1sum);
  return sha1sum;
}
const server = express();
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");
server.use(express.static(path.join(__dirname, "./public/js")));
server.use(express.static(path.join(__dirname, "./public/style")));
server.use(express.json());

server.use("/file", mainRoute);
server.post("/form/req", upload.single("fileSend"), (req, res) => {
  console.log(req.file);
  const name = req.file.filename;
  const newName = getHash(`./public/upload/${name}`);
  fs.rename(`./public/upload/${name}`, `./public/upload/${newName}`, () =>
    console.log(`file was renamed`)
  );

  res.json({ status: "ok" });
});

server.listen(2233, () => console.log("server start"));
