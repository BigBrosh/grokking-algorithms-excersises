// dynamic programming practice
const shopItems = {
  guitar: { price: 1500, size: 1 },
  laptop: { price: 2000, size: 3 },
  recordPlayer: { price: 3000, size: 4 }
};

const maximumPriceTheBagCanContain = (items, bagSize) => {
  const bagTable = [];
  const itemsEntries = Object.entries(items);
  const itemsEntriesLength = itemsEntries.length;

  for (let item = 0; item < itemsEntriesLength; item++) {
    bagTable[item] = []; // create row for item

    const [itemName, { price: itemPrice, size: itemSize }] = itemsEntries[item];
    const currentItem = { itemName, itemPrice };

    for (let size = 1; size <= bagSize; size++) {
      const previousRow = bagTable[item - 1];
      let innerItems = [currentItem];
      let totalPrice = itemPrice;
      let previousSize = size - itemSize;
      let totalSize = itemSize;

      if (previousRow && previousSize >= 1) {
        const previousItem = previousRow[previousSize];
        totalPrice += previousItem.totalPrice;
        totalSize += previousItem.totalSize;
        innerItems = innerItems.concat(previousItem.items);
        previousSize -= previousItem.totalSize;
      }

      bagTable[item][size] =
        previousRow === undefined || totalPrice > previousRow[size].totalPrice
          ? { totalPrice, totalSize, items: innerItems }
          : { ...previousRow[size] };
    }
  }

  return bagTable.pop().pop();
}

console.log('result: ', maximumPriceTheBagCanContain(shopItems, 4));
// -> totalPrice: 3500, totalSize: 4, items: ['laptop', 'guitar']
