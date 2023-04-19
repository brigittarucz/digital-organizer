import waterChrome from "assets/graphics/water-chrome.jpg";
import Button from "router/utils/Button";

interface Props {
  setFilter: (filter: "all" | "recent") => void;
}

const Sidebar = ({ setFilter }: Props) => {
  return (
    <div className="sidebar sidebar_container">
      <h5>Checklists</h5>
      <hr></hr>
      <ul className="sidebar_checklist">
        <div>
          <li onClick={() => setFilter("all")} className="sidebar_checklist-li">
            All
          </li>{" "}
        </div>
        <div>
          <li
            onClick={() => setFilter("recent")}
            className="sidebar_checklist-li"
          >
            Recent
          </li>
        </div>
        <div>
          <p className="sidebar_checklist-p">Vacation planner</p>{" "}
        </div>
        <div>
          <p className="sidebar_checklist-p">Project 2k23</p>
        </div>
        <div>
          <li className="sidebar_checklist-li">Drafts</li>
        </div>
        <div>
          <li className="sidebar_checklist-li">Favourites</li>
        </div>
        <div>
          <p className="sidebar_checklist-p">Resume points</p>
        </div>
        <div>
          <p className="sidebar_checklist-p">Technologies recap</p>
        </div>
        <div>
          <li className="sidebar_checklist-li">Busiest</li>
        </div>
      </ul>
      <hr></hr>
      <p className="sidebar-p text_body-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea possimus
        perferendis sint molestiae magnam, facere beatae sit ex placeat minus?
      </p>
      <img src={waterChrome} alt="Water Chromatic" />
      <Button title="Add New Page" type="elevated" />
    </div>
  );
};

export default Sidebar;
