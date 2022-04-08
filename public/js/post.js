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
    // const results = await response.json();
    // console.log(results);
    if (response.ok) {
      // document.location.replace('/');
      console.log(response);
    } else {
      alert('Failed to save post.');
    }
  }
};

document
  .querySelector('.post-form')
  .addEventListener('submit', submitPost);