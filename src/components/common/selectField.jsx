import React from "react";

const Select = ({ name, label, options, error, value, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        {...rest}
        className="form-control"
        value={value}
      >
        <option value="" />
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name || option.schoolName}
          </option>
        ))}
      </select>
      <div className={error ? "is-invalid" : ""}>{error}</div>
    </div>
  );
};

export default Select;
