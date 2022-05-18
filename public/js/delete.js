const deletePost = async (event) => {
  event.preventDefault();
  const pathArray = window.location.pathname.split('/');
  const post_id = pathArray[pathArray.length - 1];

  const response = await fetch('/api/posts/'+post_id, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    const results = await response.json();
    console.log(results);
    location.replace('/dashboard');
  } else {
    alert('Failed to save post.');
  }
};

document
  .querySelector('.delete-post')
  .addEventListener('click', deletePost);