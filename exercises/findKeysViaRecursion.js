// findKeysViaRecursion in linked list
const findKeysViaRecursion = (boxes, boxesContainer = []) => {
  boxes.forEach((box) => {
    if (box.content === 'key') {
      boxesContainer.push(box.name);
    } else if (box.content !== null) {
      findKeysViaRecursion(box.content, boxesContainer);
    }
  });

  return boxesContainer;
};

const boxes = [{
  name: 1,
  content: [
    {
      name: 2,
      content: [
        {
          name: 3,
          content: null
        }
      ]
    },
    {
      name: 4,
      content: [
        {
          name: 5,
          content: 'key'
        }
      ]
    },
    {
      name: 6,
      content: 'key'
    }
  ]
}];

const emptyBoxes = [{
  name: 1,
  content: [
    {
      name: 2,
      content: [
        {
          name: 3,
          content: null
        }
      ]
    },
    {
      name: 4,
      content: [
        {
          name: 5,
          content: null
        }
      ]
    },
    {
      name: 6,
      content: null
    }
  ]
}];

console.log(findKeysViaRecursion(emptyBoxes)); // -> []
console.log(findKeysViaRecursion(boxes)); // -> [5, 6]
