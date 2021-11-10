// https://dev.to/muhajirdev/how-to-watermark-an-image-with-node-js-4n64
const Jimp = require("jimp");

const main = async (imagePath, waterPath, margin, savePath) => {
  const ORIGINAL_IMAGE = imagePath;
  const LOGO = waterPath;
  const LOGO_MARGIN_PERCENTAGE = margin;

const FILENAME = savePath;
  console.log('wow! Jimp works!!!');
  const [image, logo] = await Promise.all([
    Jimp.read(ORIGINAL_IMAGE),
    Jimp.read(LOGO)
  ]);

  logo.resize(image.bitmap.width / 10, Jimp.AUTO);

  const xMargin = (image.bitmap.width * LOGO_MARGIN_PERCENTAGE) / 100;
  const yMargin = (image.bitmap.width * LOGO_MARGIN_PERCENTAGE) / 100;

  const X = image.bitmap.width - logo.bitmap.width - xMargin;
  const Y = image.bitmap.height - logo.bitmap.height - yMargin;

  return image.composite(logo, X, Y, [
    {
      mode: Jimp.BLEND_SCREEN,
      opacitySource: 0.1,
      opacityDest: 1
    }
  ]);
};

// main().then(image => image.write(FILENAME)); //execute with running

module.exports = main;