import { List } from "services/database/models";
import PointView from "./PointView";

interface Props {
  list: List;
}

const ListView = ({ list }: Props) => {
  return (
    <div>
      <p>Title: {list.title}</p>
      <p>Date created: {list.dateCreated}</p>
      <p>Date modified: {list.dateModified}</p>
      Points:
      {list.points.map((point, index) => (
        <PointView key={index} point={point} />
      ))}
    </div>
  );
};

export default ListView;
