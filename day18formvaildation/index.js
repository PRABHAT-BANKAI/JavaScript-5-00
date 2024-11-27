// JS Form Validation
// name , password , date , hobby , email , gender


// basic understanding of form validation
let userName = "batman";
let password = "12345";
let date = "12-12-2012";
let hobby = "trecking";
let email = "asd@gmail.com";
let gender = "male";

if (userName === "batman") {
  if (password === "12345") {
    if (date === "12-12-2012") {
      if (hobby === "trecking") {
        if (email === "asd@gmail.com") {
          if (gender === "male") {
            console.log("Form submitted successfully");
          } else {
            console.log("invalid gender");
          }
        } else {
          console.log("invalid email");
        }
      } else {
        console.log("invalid hobby");
      }
    } else {
      console.log("invalid date");
    }
  } else {
    console.log("invalid password");
  }
} else {
  console.log("invalid user name");
}
