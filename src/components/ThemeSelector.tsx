import Switch from "react-switch";
import { ReactComponent as Sun } from "../assets/sun.svg";
import { ReactComponent as Moon } from "../assets/moon.svg";

type ThemeSelectorProps = {
  checked: boolean;
  changeTheme: (nextChecked: boolean) => void;
};

const ThemeSelector: React.FunctionComponent<ThemeSelectorProps> = ({
  checked,
  changeTheme
}) => {
  return (
    <Switch
      onChange={(nextChecked) => changeTheme(nextChecked)}
      checked={checked}
      className="react-switch"
      handleDiameter={20}
      offColor="#08f"
      onColor="#363636"
      offHandleColor="#0ff"
      onHandleColor="#636363"
      height={34}
      width={60}
      activeBoxShadow="0px 0px 1px 2px #fffc35"
      uncheckedIcon={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: 5
          }}
        >
          <Sun />
        </div>
      }
      checkedIcon={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: 5
          }}
        >
          <Moon />
        </div>
      }
    />
  );
};

export default ThemeSelector;
