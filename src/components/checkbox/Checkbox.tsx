import React from "react";
import "./Checkbox.css";

interface CheckboxProps {}

const Checkbox: React.FC<CheckboxProps> = () => {
  return (
    <section>
      <div className="checkbox-container">
        <input type="checkbox" id="cb1" />
        <label htmlFor="cb1">Checkbox 1</label>
      </div>
      <div className="checkbox-container">
        <input type="checkbox" id="cb2" />
        <label htmlFor="cb2">Checkbox 2</label>
      </div>
      <div className="checkbox-container">
        <input type="checkbox" id="cb2" />
        <label htmlFor="cb3">Checkbox 3</label>
      </div>
    </section>
  );
};

export default Checkbox;
