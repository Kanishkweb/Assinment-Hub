function validateURL(url) {
  const urlRegex = /^(https?:\/\/)[\w\d\S]+?\.[a-zA-Z]+$/;

  if (url.match(urlRegex)) {
    console.log("The URL is valid.");
  } else {
    console.log("The URL is invalid.");
  }
}

const testURL1 = "https://www.kanishk.com";
const testURL2 = "http://123.kbc";
const testURL3 = "ftp://invalid.url";

validateURL(testURL1);
validateURL(testURL2);
validateURL(testURL3);
