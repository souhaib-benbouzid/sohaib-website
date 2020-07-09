import React from "react";

export const FormField = ({
  htmlFor,
  label,
  input,
  type,
  autoComplete = "off",
  id,
  name,
  value,
  onChange,
  required,
  errors,
  className,
}) => {
  const pr = {
    type,
    autoComplete,
    id,
    name,
    value,
    onChange,
    required: required ? required : "",
    className,
  };

  return (
    <label htmlFor={htmlFor}>
      {label}
      {input === "textarea" ? (
        <textarea
          autoComplete={autoComplete}
          name={name}
          id={id}
          cols="25"
          rows="8"
          value={value}
          onChange={onchange}
          className={className}
          required
        ></textarea>
      ) : (
        <input {...pr} />
      )}

      {errors && Object.keys(errors).length > 0 ? (
        <div className="form-error">{errors}</div>
      ) : (
        <></>
      )}
    </label>
  );
};
