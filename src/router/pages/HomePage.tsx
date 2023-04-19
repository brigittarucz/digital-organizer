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
      <section className="homepage_header">
        <h2> Digitalize Your Day-To-day </h2>
      </section>
      <div className="homepage_content">
        <section className="homepage_content-sidebar">
          <Sidebar setFilter={setFilter} />
        </section>
        <section className="homepage_content-main">{inView}</section>
      </div>
    </>
  );
};

export default HomePage;
