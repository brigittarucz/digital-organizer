import Button from "router/utils/Button";
import { Page } from "services/database/models";
import editIconOutline from "assets/graphics/icons/edit-icon-outline.svg";
import removeIcon from "assets/graphics/icons/delete-icon.svg";

interface Props {
  resPage: Page;
  edit: () => void;
  remove: () => void;
}

const SubPageView = ({ resPage, edit, remove }: Props) => {
  return (
    <article className="page_container">
      <div className="page_content-header">
        <h3>Additional Details</h3>
        <div>
          <Button onClick={edit} type="icon-filled" icon={editIconOutline} />
          <Button onClick={remove} type="icon-outline" icon={removeIcon} />
        </div>
      </div>
      <div className="page_content-meta">
        <p className="page_content-datecreated text_subtitle-1">
          {resPage.dateCreated}
        </p>
      </div>
      <div className="page_content-meta">
        <p className="page_content-datemodified text_subtitle-1">
          {resPage.dateModified}
        </p>
      </div>
      <div className="page_content-grid">
        <div>
          <p className="page_content-description text_body-2">
            {resPage.description}
          </p>
        </div>

        <div>
          <h6>Useful links:</h6>
          {resPage.links.map((link, index) => (
            <a
              className="page_content page_content-link text_overline"
              href={link}
              key={index}
            >
              Link {index + 1}
            </a>
          ))}
        </div>
      </div>

      {resPage.images.map((image, index) => (
        <img src={image} alt="page" key={index} />
      ))}
    </article>
  );
};

export default SubPageView;
