import { useState } from "react";
import Modal from "router/utils/Modal";
import { List, Page } from "services/database/models";
import AddView from "../form/AddView";
import EditView from "../form/EditView";
import ListView from "./Components/ListView";
import PageView from "./Components/PageView";

interface Props {
  resListArray: List[];
  resPage: Page;
}

const DetailsView = ({ resListArray, resPage }: Props) => {
  const [isEditViewVisible, setIsEditViewVisible] = useState(false);
  const [isAddViewVisible, setIsAddViewVisible] = useState(false);

  const add = () => {
    setIsAddViewVisible(true);
  };

  const edit = () => {
    setIsEditViewVisible(true);
  };

  const pageComponent =
    resPage === null ? (
      <p>Error in getting page data</p>
    ) : (
      <PageView resPage={resPage} />
    );

  const listComponent =
    resListArray.length === 0 ? (
      <p>No lists in page</p>
    ) : resListArray[0] === null ? (
      <p>Error in getting list data </p>
    ) : (
      resListArray.map((list, index) => <ListView key={index} list={list} />)
    );

  return (
    <>
      <button onClick={add}>Add</button>
      {isAddViewVisible && (
        <Modal isVisible={isAddViewVisible} setIsVisible={setIsAddViewVisible}>
          <AddView />
        </Modal>
      )}

      {isEditViewVisible && (
        <Modal
          isVisible={isEditViewVisible}
          setIsVisible={setIsEditViewVisible}
        >
          <EditView />
        </Modal>
      )}
      <button onClick={edit}>Edit</button>
      <div>{pageComponent}</div>
      <div>{listComponent}</div>
    </>
  );
};

export default DetailsView;
