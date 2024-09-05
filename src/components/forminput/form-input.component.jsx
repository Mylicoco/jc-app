import "./form-input.styles.scss";
const FormInput = ({ label, handlechange, ...othersprops }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handlechange} {...othersprops} />
      {label ? (
        <label
          className={`${othersprops.value.length ? "shrink" : ""} form-input-label`}
        >
       { label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
