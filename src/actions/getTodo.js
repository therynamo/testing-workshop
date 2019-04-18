import fetch from 'unfetch';

const getTodo = async (id) => {
  const res = await fetch(`http://localhost:3010/details/${id}`);
  const details = await res.json();

  return details;
};

export default getTodo;
