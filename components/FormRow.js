const FormRow = ({
  type,
  name,
  value,
  labelText,
  required,
  handleChange,
  refHandler,
}) => {
  return (
    <>
      <div className={`form-row`}>
        <label htmlFor={name} className={`form-label`}>
          {labelText || name}
          {required && <span className={`form-row-required`}>*</span>}
        </label>
        <input
          className={`form-input`}
          type={type}
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

export default FormRow;
