const submitComment = async (event) => {
  event.preventDefault();

  const content = document.querySelector('#commentInput').value.trim();
  const pathArray = window.location.pathname.split('/');
  const post_id = pathArray[pathArray.length - 1];

  if (content) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ content, post_id }),
      headers: { 'Content-Type': 'application/json' },
    });
    // const results = await response.json();
    // console.log(results);
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to save comment.');
    }
  }
};

document
  .querySelector('.comment-form')
  .addEventListener('submit', submitComment);