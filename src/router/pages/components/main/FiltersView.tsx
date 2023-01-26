interface Props {
  setFilter: (filter: "all" | "recent") => void;
}

const FiltersView = ({ setFilter }: Props) => {
  return (
    <ul>
      <li onClick={() => setFilter("all")}>All</li>
      <li onClick={() => setFilter("recent")}>Recent</li>
    </ul>
  );
};

export default FiltersView;
