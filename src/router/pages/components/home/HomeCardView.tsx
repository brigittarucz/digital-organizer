import { Link } from "react-router-dom";
import { SanitizedPage } from "./utils/types";
import deskAesthetics from "assets/graphics/writing-aesthetics.jpg";

interface Props {
  page: SanitizedPage;
}

const HomeCardView = ({ page }: Props) => {
  const { key, title, description, dateCreated } = page;

  return (
    <article className="homecard_article">
      <div className="homecard_article-image">
        <img src={deskAesthetics} alt="Writing Aesthetics" />
      </div>
      <div className="homecard_article-content">
        <div className="homecard_article-content_links">
          <p className="homecard_article-link text_overline">link 1</p>
          <p className="homecard_article-link text_overline">link 2</p>
          <p className="homecard_article-link text_overline">link 3</p>
          <Link to={`/page/${key}`}> Access </Link>
        </div>
        <div className="homecard_article-content_details">
          <h3 className="homecard_article-title">{title}</h3>
          <div className="homecard_article-captions">
            <p className="homecard_article-list text_caption">3 lists</p>
            <p className="homecard_article-datecreated text_caption">
              {dateCreated}
            </p>
          </div>
          <p className="homecard_article-description text_body-2">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default HomeCardView;
