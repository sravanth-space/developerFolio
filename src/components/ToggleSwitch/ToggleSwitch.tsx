import React, {useState, useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.css";
import emoji from "react-easy-emoji";
const ToggleSwitch = () => {
  const styleContext = useContext<any>(StyleContext);
  const [isChecked, setChecked] = useState(styleContext.isDark);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          styleContext.changeTheme();
          setChecked(!isChecked);
        }}
      />
      <span className="slider round">
        <span className="emoji">{isChecked ? emoji("🌜") : emoji("☀️")}</span>
      </span>
    </label>
  );
};
export default ToggleSwitch;
