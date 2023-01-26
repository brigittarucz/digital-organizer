import { Link } from "react-router-dom";
import { SanitizedPage } from "../utils/types";

interface Props {
  page: SanitizedPage;
}

const OverviewCard = ({ page }: Props) => {
  const { key, title, description, dateCreated } = page;

  return (
    <article>
      <Link to={`/page/${key}`}> Access </Link>
      <p>{title}</p>
      <p>{description}</p>
      <p>{dateCreated}</p>
    </article>
  );
};

export default OverviewCard;
