fetch("https://jsonplaceholder.typicode.com/posts/999999")
  .then(response => {
    console.log("Status:", response.status);
    console.log("Success:", response.ok);
    return response.json();
  })
  .then(data => console.log("Data:", data))
  .catch(error => console.log("Error:", error.message));