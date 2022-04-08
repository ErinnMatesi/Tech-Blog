const submitPost = async (event) => {
  event.preventDefault();

  const content = document.querySelector('#postInput').value.trim();
  const title = document.querySelector('#postTitle').value.trim();
  const pathArray = window.location.pathname.split('/');
  const post_id = pathArray[pathArray.length - 1];

  if (title && content) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content, post_id }),
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
      const results = await response.json();
      console.log(results);
      const newPost = `<div class="col">
      <div class="card border-dark text-dark bg-info" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${results.title}</h5>
          <p class="card-text">${results.content}</p>
          <a href="/posts/${results.id}" class="card-link">View Post</a>
          <p class="card-text">${results.createdAt}</p>
        </div>
      </div>
    </div>`
    const something = document.createElement('div');
    something.innerHTML = newPost;
    const postContainer = document.querySelector('.posts');
    postContainer.append(something);
    } else {
      alert('Failed to save post.');
    }
  }
};

document
  .querySelector('.post-form')
  .addEventListener('submit', submitPost);