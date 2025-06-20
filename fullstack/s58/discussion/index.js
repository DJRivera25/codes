// Sample Syntax for get request

// GET
/*
	fetch("api url")
	.then(function(response){
		return response.json()
	})
	.then(function(data){
		// what to do with the data
	})
*/
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    // console.log(response)
    // console.log(response.json())
    return response.json();
  })
  .then(function (data) {
    // response data from the server
    console.log(data); // all posts documents

    showPosts(data); // data = all posts documents
  });

const showPosts = function (posts) {
  // posts <- data <- all posts documents

  // container of all post elements
  let postEntries = "";

  // forEach of the post will be having a template and will be concatenated in postEntries
  posts.forEach(function (post) {
    postEntries += `
			<div id="post-${post.id}">
				<h3 id="post-title-${post.id}">${post.title}</h3>
				<p id="post-body-${post.id}">${post.body}</p>
				<button onclick="editPost(${post.id})">Edit</button>
				<button onclick="deletePost(${post.id})">Delete</button>
			</div>
		`;
  });

  console.log(postEntries);
  console.log(document.querySelector("#div-post-entries").innerHTML);

  document.querySelector("#div-post-entries").innerHTML = postEntries;
};

document.querySelector("#form-add-post").addEventListener("submit", function (event) {
  // prevents default behavior during an event
  // in our case: redirection
  event.preventDefault();

  let titleInput = document.querySelector("#txt-title").value;
  let bodyInput = document.querySelector("#txt-body").value;

  alert("Hello! The form has been submitted");

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: titleInput,
      body: bodyInput,
      userId: 11,
    }),
    headers: { "Content-type": "application/json" },
  })
    .then(function (response) {
      // console.log(response)
      // console.log(response.json())
      return response.json();
    })
    .then(function (data) {
      // response data from the server
      console.log(data); // all posts documents

      // data = {
      // 	title: 'Weather',
      // 	body: "It's cloudy today",
      // 	userId: 11,
      // 	id: 101
      // }

      document.querySelector("#div-post-entries").innerHTML += `
			<div id="post-${data.id}">
				<h3 id="post-title-${data.id}">${data.title}</h3>
				<p id="post-body-${data.id}">${data.body}</p>
				<button onclick="editPost(${data.id})">Edit</button>
				<button onclick="deletePost(${data.id})">Delete</button>
			</div>
		`;
    });
});

const editPost = function (id) {
  // console.log(id)
  let title = document.querySelector(`#post-title-${id}`).innerHTML;
  let body = document.querySelector(`#post-body-${id}`).innerHTML;
  // console.log(title,body);
  console.log(document.querySelector(`#txt-edit-id`).value);
  document.querySelector(`#txt-edit-id`).value = id;
  document.querySelector(`#txt-edit-title`).value = title;
  document.querySelector(`#txt-edit-body`).value = body;
  // enable submit button
  document.querySelector(`#btn-submit-update`).disabled = false;
};

document.querySelector("#form-edit-post").addEventListener("submit", function (event) {
  event.preventDefault();
  let titleInput = document.querySelector(`#txt-edit-title`).value;
  let bodyInput = document.querySelector(`#txt-edit-body`).value;
  let id = document.querySelector(`#txt-edit-id`).value;
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      id: id,
      title: titleInput,
      body: bodyInput,
      userId: 11,
    }),
    headers: { "Content-type": "application/json" },
  })
    .then(function (response) {
      // console.log(response)
      // console.log(response.json())
      return response.json();
    })
    .then((updatedPost) => {
      document.querySelector(`#post-title-${id}`).innerHTML = titleInput;
      document.querySelector(`#post-body-${id}`).innerHTML = bodyInput;
      console.log(updatedPost);
      alert(`Successfully updated`);
    });
  document.querySelector("#form-edit-post").reset();
  document.querySelector(`#btn-submit-update`).disabled = true;
});

const deletePost = function (id) {
  const post = document.querySelector(`#post-${id}`);
  alert(`Post successfully deleted`);
  post.remove();
};

const deleteAll = function () {
  const posts = document.querySelector(`#div-post-entries`);
  alert(`All Posts Deleted`);
  posts.remove();
};

document.querySelector(`#delete-all`).addEventListener("click", deleteAll);
