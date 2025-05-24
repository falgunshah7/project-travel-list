import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackagingList from "./components/PackagingList";
import Stats from "./components/Stats";

/**
 *
 * @returns {JSX.Element} The main application component.
 */
export default function App() {
  const [tripItems, setTripItems] = useState([]);
  return (
    <div className="app">
      <Logo />
      <Form setTripItems={setTripItems} />
      <PackagingList tripItems={tripItems} setTripItems={setTripItems} />
      <Stats tripItems={tripItems} />
    </div>
  );
}
