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
      {resPage.images.map((image, index) => (
        <img src={image} alt="page" key={index} />
      ))}
      <p>Useful links:</p>
      {resPage.links.map((link, index) => (
        <a href={link} key={index}>
          {link}
        </a>
      ))}
    </div>
  );
};

export default PageView;
