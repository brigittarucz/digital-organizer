import { Point } from "services/database/models";

interface Props {
  point: Point;
}
const PointView = ({ point }: Props) => {
  return (
    <div>
      <input type="checkbox" checked={point.checked} disabled />
      <p>Additional Information: {point.additionalInformation}</p>
      <p>Description: {point.description}</p>
    </div>
  );
};

export default PointView;
