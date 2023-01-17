import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";



const AppSelectBox = (props) => {
  const {
    data,
    name,
    id,
    value,
    onChange,
    variant,
    valueKey,
    labelKey,
    label,
    ...rest
  } = props;

  return (
    <FormControl
      variant={variant}
      size={'small'}
      fullWidth={true}
    >
      {label && <InputLabel id={"label-" + id || name}>{label}</InputLabel>}
      <Select
        {...rest}
        name={name}
        labelId={"label-" + id || name}
        id={id || name}
        value={value}
        onChange={onChange}
        label={label}
        displayEmpty={true}
      >
        {data.length ? (
          data &&
          data.map((item, index) => (
            <MenuItem
              key={index}
              value={valueKey ? item[valueKey] : item}
              disabled={
                window.location.pathname.includes("add-passenger")
                  ? item[labelKey].includes("Not available")
                    ? true
                    : false
                  : false
              }
            >
              {item[labelKey]}
            </MenuItem>
          ))
        ) : (
          <MenuItem key={"1"} value={"no data"} disabled>
            No data found
          </MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

export default AppSelectBox;