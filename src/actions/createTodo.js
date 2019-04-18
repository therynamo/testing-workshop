import fetch from 'unfetch';
import shortid from 'shortid';

const createTodo = async ({ title, description }) => {
  const uuid = shortid.generate();
  const res = await fetch(`http://localhost:3010/details/${uuid}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, description }),
  });

  return res.json();
};

export default createTodo;
