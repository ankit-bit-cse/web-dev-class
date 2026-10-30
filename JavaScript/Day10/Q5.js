console.log("A");

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log("C:", data.id));

console.log("B");