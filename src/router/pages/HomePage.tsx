import { ReactNode, useEffect, useState } from "react";
import AllView from "./components/sidebar/AllView";
import RecentView from "./components/sidebar/RecentView";
import NavView from "./components/nav/NavView";
import Sidebar from "./components/sidebar/Sidebar";

const HomePage = () => {
  const [filter, setFilter] = useState<"all" | "recent">("all");
  const [inView, setInView] = useState<ReactNode>(<AllView />);

  useEffect(() => {
    switch (filter) {
      case "all":
        setInView(<AllView />);
        break;
      case "recent":
        setInView(<RecentView />);
        break;
      default:
        setInView(<AllView />);
    }
  }, [filter]);

  return (
    <>
      <NavView />
      <main>
        <h2> Digitalize Your Day-To-day </h2>
      </main>
      <Sidebar setFilter={setFilter} />
      {inView}
    </>
  );
};

export default HomePage;
