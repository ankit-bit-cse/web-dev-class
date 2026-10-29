fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    console.log("First:", response);
    return response.json();
  })
  .then(data => {
    console.log("Second:", data);
    console.log("Title:", data.title);
  })
  .catch(error => console.log(error));