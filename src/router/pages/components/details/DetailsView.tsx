import { useEffect, useRef, useState } from "react";
import ComplexModal from "router/utils/ComplexModal";
import GenericModal from "router/utils/GenericModal";
import { List, Page } from "services/database/models";
import FooterView from "../footer/FooterView";
import AddListView from "../form/addlist/AddListView";
import EditListView from "../form/editlist/EditListView";
import RemoveListView from "../form/removelist/RemoveListView";
import ListView from "./components/ListView";
import SubPageView from "./components/SubPageView";

interface Props {
  resListArray: List[];
  resPage: Page;
}

const DetailsView = ({ resListArray, resPage }: Props) => {
  const [isEditViewVisible, setIsEditViewVisible] = useState(false);
  const [isAddViewVisible, setIsAddViewVisible] = useState(false);
  const [isRemoveViewVisible, setIsRemoveViewVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const refContainer = useRef(null);

  const refFirstColumn = useRef(null);
  const refSecondColumn = useRef(null);
  const refThirdColumn = useRef(null);

  // TODO: add throttling
  // TODO: add skeleton loading
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  const add = () => {
    setIsAddViewVisible(true);
  };

  const edit = () => {
    setIsEditViewVisible(true);
  };

  const remove = () => {
    setIsRemoveViewVisible(true);
  };

  useEffect(() => {
    if (windowWidth < 1250) {
      return;
    }

    const template = refContainer.current;

    if (!template) {
      return;
    }

    const articles = (template as HTMLDivElement).querySelectorAll(
      ".articles_template-item"
    );

    const firstColumn = refFirstColumn.current;
    const secondColumn = refSecondColumn.current;
    const thirdColumn = refThirdColumn.current;

    if (!firstColumn || !secondColumn || !thirdColumn) {
      return;
    }

    for (let n = 0; n < articles.length; n++) {
      let smallestColumnHeight = -1;
      let biggestColumnHeight = -1;

      const heightsArray = [
        (firstColumn as HTMLDivElement).getBoundingClientRect().height,
        (secondColumn as HTMLDivElement).getBoundingClientRect().height,
        (thirdColumn as HTMLDivElement).getBoundingClientRect().height,
      ];

      heightsArray.forEach((element) => {
        if (biggestColumnHeight === -1) {
          biggestColumnHeight = element;
        } else if (biggestColumnHeight < element) {
          biggestColumnHeight = element;
        }
      });

      const biggestColumnHeightIndex =
        heightsArray.indexOf(biggestColumnHeight);

      const container = document.querySelector(".details_container");

      if (!container) {
        return;
      }

      (container as HTMLDivElement).style.height = `${
        Math.floor(heightsArray[biggestColumnHeightIndex]) + 50
      }px`;

      heightsArray.forEach((element) => {
        if (smallestColumnHeight === -1) {
          smallestColumnHeight = element;
        } else if (smallestColumnHeight > element) {
          smallestColumnHeight = element;
        }
      });

      const smallestColumnHeightIndex =
        heightsArray.indexOf(smallestColumnHeight);

      switch (smallestColumnHeightIndex) {
        case 0:
          (firstColumn as HTMLDivElement).appendChild(articles[n]);
          break;
        case 1:
          (secondColumn as HTMLDivElement).appendChild(articles[n]);
          break;
        case 2:
          (thirdColumn as HTMLDivElement).appendChild(articles[n]);
      }

      if (refContainer.current) {
        (refContainer.current as HTMLDivElement).innerHTML = "";
      }
    }
  }, [windowWidth, resListArray]);

  const pageComponent =
    resPage === null ? (
      <p>Error in getting page data</p>
    ) : (
      <SubPageView resPage={resPage} />
    );

  const listComponent =
    resListArray.length === 0 ? (
      <p>No lists in page</p>
    ) : resListArray[0] === null ? (
      <p>Error in getting list data </p>
    ) : (
      true
    );

  return (
    <>
      <>
        {isAddViewVisible && (
          <ComplexModal
            isVisible={isAddViewVisible}
            setIsVisible={setIsAddViewVisible}
          >
            <AddListView />
          </ComplexModal>
        )}

        {isEditViewVisible && (
          <ComplexModal
            isVisible={isEditViewVisible}
            setIsVisible={setIsEditViewVisible}
          >
            <EditListView />
          </ComplexModal>
        )}

        {isRemoveViewVisible && (
          <GenericModal
            isVisible={isRemoveViewVisible}
            setIsVisible={setIsRemoveViewVisible}
          >
            <RemoveListView />
          </GenericModal>
        )}
      </>
      <div className="details_container">
        <div>
          <div ref={refFirstColumn} className="details_container-first_column">
            {pageComponent}
          </div>

          <div
            ref={refSecondColumn}
            className="details_container-second_column"
          >
            {listComponent === true ? (
              <ListView
                key="list-1"
                list={resListArray[0]}
                edit={edit}
                remove={remove}
              />
            ) : (
              listComponent
            )}
          </div>

          <div ref={refThirdColumn} className="details_container-third_column">
            {
              <ListView
                key="list-2"
                edit={edit}
                list={resListArray[1]}
                remove={remove}
              />
            }
          </div>
        </div>
      </div>
      <FooterView />
      <div
        style={{ display: "none" }}
        ref={refContainer}
        id="articles_template"
      >
        {resListArray.length >= 3 &&
          resListArray
            .slice(2, resListArray.length)
            .map((list, index) => (
              <ListView
                key={index}
                className="articles_template-item"
                list={list}
                edit={edit}
                remove={remove}
              />
            ))}
        <article className="articles_template-item">
          <button className="button button_elevated" onClick={add}>
            Add New List
          </button>
        </article>
      </div>
    </>
  );
};

export default DetailsView;
