import { List } from "services/database/models";
import PointView from "./PointView";
import Button from "router/utils/Button";
import editIconOutline from "assets/graphics/icons/edit-icon-outline.svg";
import removeIcon from "assets/graphics/icons/delete-icon.svg";

interface Props {
  list: List;
  className?: string;
  edit: () => void;
  remove: () => void;
}

const ListView = ({ list, className, edit, remove }: Props) => {
  const styleClassPoint =
    list.points.length >= 3
      ? "point_container--morelists"
      : "point_container--lesslists";

  const styleClassList =
    list.points.length >= 3
      ? "list_container--morelists"
      : "list_container--lesslists";

  return (
    <article
      className={`list_container ${styleClassList} ${
        Boolean(className) ? className : ""
      }`}
    >
      <div>
        <div className="list_content-header">
          <h3>{list.title}</h3>
          <div>
            <Button onClick={edit} type="icon-filled" icon={editIconOutline} />
            <Button onClick={remove} type="icon-outline" icon={removeIcon} />
          </div>
        </div>
        <div className="list_content-meta">
          <p className="list_content-datemodified text_subtitle-1">
            <b>Created on:</b> &nbsp; {list.dateCreated}
          </p>
        </div>
        <div className="list_content-meta">
          <p className="list_content-datemodified text_subtitle-1">
            <b>Modified on:</b> &nbsp; {list.dateModified}
          </p>
        </div>
        {list.points.map((point, index) => (
          <PointView key={index} styleClass={styleClassPoint} point={point} />
        ))}
      </div>
    </article>
  );
};

export default ListView;
