import "./Select.css";
// import Select from "react-select";

let options = [
  { value: "enrollee", label: "Enrollee" },
  { value: "provider", label: "Provider" },
  { value: "prospect", label: "Prospect" },
];

const Select = () => {
  const selectStyles = {
    control: (base: any, state: any) => ({
      ...base,
      width: "260px",
      height: "40px",
      color: "#7a869a",
      border: "1px solid #dfe1e6",
      background: "#fafbfc",
      fontSize: "14px",
      boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)",
      borderRadius: "3px",
    }),
  };

  const handleChange = (e: any) => {
    console.log(e);
  };

  return (
    <div>
      {/* <Select
        value="enrollee"
        onChange={handleChange}
        options={options}
        placeholder="select customer type"
        styles={selectStyles}
      /> */}
    </div>
  );
};

export default Select;
