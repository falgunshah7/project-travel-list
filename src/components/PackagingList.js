import { useState } from "react";
import Item from "./Item";

export default function PackagingList({ tripItems, setTripItems }) {
  const [sortBy, setSortBy] = useState("input");
  let sortItems;

  const clearList = () => {
    setTripItems([]);
    setSortBy("input");
  };

  if (sortBy === "input") {
    sortItems = tripItems;
  }
  if (sortBy === "description") {
    sortItems = tripItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortItems = tripItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortItems.map((item) => (
          <Item key={item.id} item={item} setTripItems={setTripItems} />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={clearList}>Clear List</button>
      </div>
    </div>
  );
}
