function validateLinkedInURL(url) {
  const linkedInRegex =
    /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/?$/;

  if (url.match(linkedInRegex)) {
    console.log("Valid LinkedIn profile URL.");
  } else {
    console.log("Invalid LinkedIn profile URL.");
  }
}

const testURL1 = "https://www.linkedin.com/in/kanishk99511";
const testURL2 = "https://www.linkedin.com/invalid";

validateLinkedInURL(testURL1);
validateLinkedInURL(testURL2);
