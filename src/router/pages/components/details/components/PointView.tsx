import { Point } from "services/database/models";

interface Props {
  point: Point;
  styleClass: string;
}
const PointView = ({ point, styleClass }: Props) => {
  return (
    <div className={`point_container ${styleClass}`}>
      <div>
        <div className="point_content-todo">
          <input type="checkbox" checked={point.checked} />
          <p className="text_body-2">{point.description}</p>
        </div>
        <p className="text_body-1 point_content-description">
          {point.additionalInformation}
        </p>
      </div>
      <div>
        {point.images &&
          point.images.map((image) => <img src={image} alt="Point" />)}
      </div>
    </div>
  );
};

export default PointView;
