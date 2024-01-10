export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding Items to your packing list🚀</em>
      </p>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percent = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? 'You have got everything! Ready to go ✈️'
          : `You have ${numItems} items on your list, and have packed ${packedItems}
           (${percent}%)`}
      </em>
    </footer>
  );
}
