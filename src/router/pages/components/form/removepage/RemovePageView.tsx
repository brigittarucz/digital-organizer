import Button from "router/utils/Button";

const RemovePageView = () => {
  return (
    <div className="remove_form">
      <h5>Are you sure you want to remove page?</h5>
      <div className="remove_form-action_buttons">
        <Button type="filled" title={"Delete"} />
        <Button type="outline" title={"Cancel"} />
      </div>
    </div>
  );
};

export default RemovePageView;
