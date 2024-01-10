import { useState } from 'react';
import Item from './Item';

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortOrder, setSortOrder] = useState('input');

  let sortedItems;

  if (sortOrder === 'input') sortedItems = items;
  if (sortOrder === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  if (sortOrder === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((items) => (
          <Item
            key={items.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            items={items}
          />
        ))}
      </ul>

      <div className="actions">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
