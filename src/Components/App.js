import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackinglList';
import Stats from './Stats';

export default function App() {
  const [items, SetItems] = useState([]);

  function addNewItem(newItem) {
    SetItems((items) => [...items, newItem]);
    // console.log(items);
  }

  function handleDeleteItem(id) {
    SetItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    SetItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete all items ?'
    );
    if (confirmDelete) SetItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={addNewItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
