import Button from "router/utils/Button";

const RemoveListView = () => {
  return (
    <div className="remove_form">
      <h5>Are you sure you want to remove list?</h5>
      <div className="remove_form-action_buttons">
        <Button type="filled" title={"Delete"} />
        <Button type="outline" title={"Cancel"} />
      </div>
    </div>
  );
};

export default RemoveListView;
