import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../../store/slices/dark-mode-slice";

const DarkMode = () => {
  const darkModeStatus = useSelector((state) => state.darkMode.status);
  const dispatch = useDispatch();

  return (
    <FormGroup switch>
      <Input
        type="switch"
        role="switch"
        id="switch"
        checked={darkModeStatus}
        onChange={() => dispatch(setDarkMode(!darkModeStatus))}
      />
      <Label check for="switch">
        {!darkModeStatus ? "Dark Mode" : "Light Mode"}
      </Label>
    </FormGroup>
  );
};

export default DarkMode;
