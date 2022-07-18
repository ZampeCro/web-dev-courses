let input = prompt('what do u want to do?');
const todos = ['Pokupi jaja', 'Ocisti stalu'];
while (input !== 'quit' && input !== 'q') {
  if (input === 'list') {
    console.log('************');
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i} : ${todos[i]}`);
    }
    console.log('************');
  } else if (input === 'new') {
    const newTodo = prompt('Daj za listu');
    todos.push(newTodo);
    console.log(`${newTodo} dodano u listu!`);
  } else if (input === 'del') {
    const index = parseInt(prompt('Sta zelis izbrisati?'));
    if (!Number.NaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`Ok, izbrisano ${deleted[0]}`);
    }
  }
  input = prompt('What do u want to do?');
}
console.log('Ok -quitting');
