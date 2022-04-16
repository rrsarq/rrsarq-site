fetch("includes/header.html")
.then((response) => {
  return response.text();
})
.then((header) => {
  document.querySelector('#header').innerHTML = header;
});

fetch("includes/footer.html")
.then((response) => {
  return response.text();
})
.then((footer) => {
  document.querySelector('#footer').innerHTML = footer;
});