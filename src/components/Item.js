export default function Item({ item, setTripItems }) {
  const { id, description, quantity, packed } = item;

  function handleRemove(event) {
    event.preventDefault();
    const id = Number(event.target.value);
    // Remove the item from the list
    setTripItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleCheck(id) {
    // Update the packed status of the item
    setTripItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <li>
      <input type="checkbox" value={packed} onChange={() => handleCheck(id)} />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button value={id} onClick={(e) => handleRemove(e)}>
        ❌
      </button>
    </li>
  );
}
