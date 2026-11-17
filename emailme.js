// gives the email subject a random number so it's "Hello 4821" instead of just "Hello"
document.getElementById("acquaint").addEventListener("click", function () {
  this.href = "mailto:gastonjameson@gmail.com?subject=Hello%20" + Math.floor(Math.random() * 10000);
});
