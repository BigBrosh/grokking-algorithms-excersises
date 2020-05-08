const usersGraph = {
  Alice: {
    job: 'CEO',
    friends: ['Sam', 'Dean']
  },
  Bob: {
    job: 'traveller',
    friends: ['Dean']
  },
  Sam: {
    job: 'hunter',
    friends: ['Alice', 'Dean']
  },
  Dean: {
    job: 'hunter',
    friends: ['Alice', 'Sam', 'Bob']
  },
};

const findFirstPersonByJob = (graph, user, job) => {
  let queue = [...graph[user].friends];
  const checked = new Set();

  while(queue.length !== 0) {
    const userName = queue[0];
    const currentUser = graph[userName];

    if (checked.has(userName)) {
      queue.shift();
      continue;
    }

    if (currentUser.job === job) {
      return userName;
    } else {
      queue.shift();
      checked.add(userName);
      queue = queue.concat(currentUser.friends);
    }
  }

  return null;
};

console.log(findFirstPersonByJob(usersGraph, 'Alice', 'traveller')); // -> Bob
console.log(findFirstPersonByJob(usersGraph, 'Alice', 'hunter')); // -> Sam
console.log(findFirstPersonByJob(usersGraph, 'Alice', 'developer')); // -> null
