/**
 * Current Contract:
 *
 * [{
 *    id: '134',
 *    title: 'MY TITLE,
 *    description: 'MY DESC',
 * }]
 *
 */

/**
 * Expected Contract:
 *
 * {
 *   '134': {
 *     id: '134',
 *     title: 'MY TITLE',
 *     description: 'MY DESC',
 *   }
 * }
 */

const todoDetailsTransform = todoList => todoList.reduce((todo, acc) => {
  if (acc[todo.id]) {
    return acc;
  }

  return { ...acc, [todo.id]: todo };
}, {});

export default todoDetailsTransform;
