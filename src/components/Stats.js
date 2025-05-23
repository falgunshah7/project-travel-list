export default function Stats({ tripItems }) {
  let numItems = tripItems.length;
  let numPacked = tripItems.filter((item) => item.packed).length;
  let percentPacked =
    numItems === 0 ? 0 : Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You packed everything! Ready to go! ✈️"
          : `👜 You have ${numItems} items on your list, and you already packed
        ${numPacked} (${percentPacked}%)`}
      </em>
    </footer>
  );
}
