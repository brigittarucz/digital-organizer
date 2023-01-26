import { ReactNode, useEffect, useState } from "react";
import AllView from "./components/main/AllView";
import FiltersView from "./components/main/FiltersView";
import RecentView from "./components/main/RecentView";
import NavView from "./components/nav/NavView";

const MainPage = () => {
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
        <h1> Main Page </h1>
        <FiltersView setFilter={setFilter} />
        {inView}
      </main>
    </>
  );
};

export default MainPage;
