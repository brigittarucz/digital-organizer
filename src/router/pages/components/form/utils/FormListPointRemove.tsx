import { MouseEvent } from "react";
import Button from "router/utils/Button";

interface Props {
  pointsCount: number;
  setPointsCount: (x: number) => void;
  listPointsInputs: (string | undefined)[];
  listPointsDescriptionsInputs: (string | undefined)[];
  setListPointsInputs: (x: (string | undefined)[]) => void;
  setListPointsDescriptionsInputs: (x: (string | undefined)[]) => void;
}
const FormListPointRemove = ({
  pointsCount,
  listPointsInputs,
  listPointsDescriptionsInputs,
  setListPointsInputs,
  setListPointsDescriptionsInputs,
  setPointsCount,
}: Props) => {
  return (
    <Button
      type={"outline"}
      onClick={(ev: MouseEvent<HTMLElement>) => {
        ev.preventDefault();
        const count = pointsCount - 1;

        // Check if either one of them has values other than undefined
        let hasValues = 0;
        for (let i = 0; i < listPointsInputs.length; i++) {
          if (listPointsInputs[i] !== undefined) {
            hasValues = 1;
            break;
          }
        }

        for (let i = 0; i < listPointsDescriptionsInputs.length; i++) {
          if (hasValues) {
            break;
          }
          if (listPointsDescriptionsInputs[i] !== undefined) {
            hasValues = 1;
            break;
          }
        }

        // If not, create a new inputs array
        if (!hasValues) {
          let inputs = [...Array(count)];
          setListPointsInputs(inputs);
          setListPointsDescriptionsInputs(inputs);
        }

        if (hasValues) {
          const pointsInputs = listPointsInputs;
          pointsInputs.pop();
          const descriptionInputs = listPointsDescriptionsInputs;
          descriptionInputs.pop();
          setListPointsInputs(pointsInputs);
          setListPointsDescriptionsInputs(descriptionInputs);
        }

        setPointsCount(count);
      }}
      title={"Remove Point"}
    />
  );
};

export default FormListPointRemove;
