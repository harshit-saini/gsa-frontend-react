import React from "react";

const InputField = ({ type, name, value, label, onChange, error }) => {
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor={name}>{label} :</label>
        <input
          onChange={onChange}
          id={name}
          name={name}
          className="form-control"
          type={type}
          value={value}
        />
        <div className={error ? "is-invalid" : ""}>{error}</div>
      </div>
    </React.Fragment>
  );
};

export default InputField;
