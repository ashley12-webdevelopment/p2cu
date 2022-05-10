const FormRowTextArea = ({
  name,
  value,
  labelText,
  handleChange,
  refHandler,
  additionalCss,
}) => {
  return (
    <>
      <div className={`form-row ${additionalCss}`}>
        <label htmlFor={name} className="form-label">
          {labelText || name}
        </label>
        <textarea
          className="form-textarea"
          name={name}
          id={name}
          value={value}
          onChange={handleChange}
          ref={refHandler}
        />
      </div>
    </>
  );
};

export default FormRowTextArea;
