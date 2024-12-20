/* eslint-disable react/prop-types */

function Input({ label, type = "text", value, onChange, placeholder, className, error }) {
  return (
    <div className={`input-container ${className}`}>
      <label>
        {label}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="input-field"
        />
      </label>
      {error && <span className="error">{error}</span>}
    </div>
  );
}

export default Input;
