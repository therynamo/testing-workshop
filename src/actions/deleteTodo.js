import fetch from 'unfetch';

const deleteTodo = async (id) => {
  const res = await fetch(`http://localhost:3002/details/${id}`, {
    method: 'DELETE',
    'Content-Type': 'application/json',
  });

  const json = await res.json();

  return json;
};

export default deleteTodo;
