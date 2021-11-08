export const fetchPosts = () => async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  dispatch({ type: 'FETCH_POSTS', payload: data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();
  dispatch({ type: 'FETCH_USERS', payload: data });
};
