import { ChangeEventHandler } from "react";
import "./RadioButton.scss";

type RadioButtonProps = {
  label: string;
  value: any;
  groupName: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
};

const RadioButton = ({
  label,
  value,
  groupName,
  handleChange,
  checked
}: RadioButtonProps) => {
  return (
    <div className="radio-button">
      <input
        onChange={handleChange}
        className="radio-button-input"
        type="checkbox"
        id={value}
        name={groupName}
        value={value}
        checked={checked}
      />
      <label className="radio-button-label" htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
