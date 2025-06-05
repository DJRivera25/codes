// Step 1: Select key DOM elements
const button = document.getElementById("load-posts");
const postList = document.getElementById("post-list");
const addForm = document.getElementById("form-add-post");
const btnDelAll = document.getElementById("delete-all");

// Step 2: Load posts from API and render to DOM
async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("Network response was not ok");

    const posts = await response.json();
    postList.innerHTML = ""; // Clear old posts

    posts.forEach((post) => appendPostToDOM(post));
  } catch (error) {
    postList.innerHTML = "<p>Error loading posts</p>";
    console.error("Fetch error:", error);
  }
}

// Step 3: Append single post to the DOM
function appendPostToDOM(post) {
  const div = document.createElement("div");
  div.id = `post-${post.id}`;

  const h3 = document.createElement("h3");
  h3.id = `post-title-${post.id}`;
  h3.textContent = post.title;

  const p = document.createElement("p");
  p.id = `post-body-${post.id}`;
  p.textContent = post.body;

  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Delete";
  btnDelete.addEventListener("click", () => deletePost(post.id));

  const btnEdit = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnEdit.addEventListener("click", () => editPost(post.id));

  div.append(h3);
  div.append(p);
  div.append(btnEdit);
  div.append(btnDelete);

  postList.append(div); // Add new posts to the top
  /* postList.prepend(div); // Add new posts to the top */
}

// Step 4: Remove a post from the DOM
function deletePost(postId) {
  const postDiv = document.getElementById(`post-${postId}`);
  if (postDiv) {
    postDiv.remove();
  }
}

// Step 5: Submit handler to add a new post
async function addPost(event) {
  event.preventDefault();
  const formTitle = document.getElementById("txt-title").value;
  const formBody = document.getElementById("txt-body").value;

  if (!formTitle.trim() || !formBody.trim()) {
    alert("Title and body are required.");
    return;
  }

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: formTitle,
        body: formBody,
        userId: 11,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const newPost = await response.json();
    alert("Post added successfully!");
    appendPostToDOM(newPost);
    addForm.reset();
  } catch (error) {
    console.error("Error adding post:", error);
    alert("There was an error adding your post.");
  }
}

// 🧩 Step 6: Placeholder for editing logic (do it yourself!)
async function editPost(postId) {
  const postDiv = document.getElementById(`post-${postId}`);
  const titleEl = document.getElementById(`post-title-${postId}`);
  const bodyEl = document.getElementById(`post-body-${postId}`);

  // Disable other buttons inside this post while editing
  const buttons = postDiv.querySelectorAll("button");
  buttons.forEach((btn) => (btn.disabled = true));

  // Create styled input for title
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.value = titleEl.textContent;
  styleInput(titleInput);

  // Create styled textarea for body
  const bodyInput = document.createElement("textarea");
  bodyInput.value = bodyEl.textContent;
  bodyInput.rows = 4;
  styleInput(bodyInput);

  // Create Save button
  const btnSave = createButton("Save", "#28a745");
  // Create Cancel button
  const btnCancel = createButton("Cancel", "#dc3545");

  // Save handler
  btnSave.addEventListener("click", () => {
    const updatedTitle = titleInput.value.trim();
    const updatedBody = bodyInput.value.trim();

    if (!updatedTitle || !updatedBody) {
      alert("Title and body cannot be empty.");
      return;
    }

    titleEl.textContent = updatedTitle;
    bodyEl.textContent = updatedBody;

    postDiv.replaceChild(titleEl, titleInput);
    postDiv.replaceChild(bodyEl, bodyInput);
    postDiv.removeChild(btnSave);
    postDiv.removeChild(btnCancel);

    buttons.forEach((btn) => (btn.disabled = false));
    clearHighlight();
  });

  // Cancel handler
  btnCancel.addEventListener("click", () => {
    postDiv.replaceChild(titleEl, titleInput);
    postDiv.replaceChild(bodyEl, bodyInput);
    postDiv.removeChild(btnSave);
    postDiv.removeChild(btnCancel);

    buttons.forEach((btn) => (btn.disabled = false));
    clearHighlight();
  });

  // Replace title and body with inputs
  postDiv.replaceChild(titleInput, titleEl);
  postDiv.replaceChild(bodyInput, bodyEl);

  // Append Save and Cancel buttons
  postDiv.appendChild(btnSave);
  postDiv.appendChild(btnCancel);

  // Highlight editing area
  postDiv.style.backgroundColor = "#f0f8ff";
  postDiv.style.padding = "10px";
  postDiv.style.borderRadius = "6px";

  function clearHighlight() {
    postDiv.style.backgroundColor = "";
    postDiv.style.padding = "";
    postDiv.style.borderRadius = "";
  }

  // Helper for consistent input/textarea styling
  function styleInput(el) {
    el.style.width = "100%";
    el.style.padding = "8px";
    el.style.marginBottom = "8px";
    el.style.border = "2px solid #007bff";
    el.style.borderRadius = "4px";
    el.style.boxSizing = "border-box";
  }

  // Helper to create styled buttons
  function createButton(text, bgColor) {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.style.marginRight = "8px";
    btn.style.backgroundColor = bgColor;
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.padding = "6px 12px";
    btn.style.borderRadius = "4px";
    btn.style.cursor = "pointer";
    return btn;
  }
}

function deleteAll(postId) {
  const postDiv = document.getElementById(`post-list`);
  if (postDiv) {
    alert(`All posts will be deleted`);
    postDiv.innerHTML = "";
  }
}

// Step 7: Hook up event listeners
btnDelAll.addEventListener("click", deleteAll);
button.addEventListener("click", fetchUsers);
addForm.addEventListener("submit", addPost);
