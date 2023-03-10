import { Page } from "services/database/models";

interface Props {
  resPage: Page;
}

const PageView = ({ resPage }: Props) => {
  return (
    <div>
      <p>Date created: {resPage.dateCreated}</p>
      <p>Date modified: {resPage.dateModified}</p>
      <p>Description: {resPage.description}</p>
      {resPage.images.map((image) => (
        <img src={image} alt="page" />
      ))}
      <p>Useful links:</p>
      {resPage.links.map((link) => (
        <a href={link}>{link}</a>
      ))}
    </div>
  );
};

export default PageView;
