import React from "react";

interface SpinnerProps {}

export const Spinner: React.FC<SpinnerProps> = () => {
  return (
    <div>
      Loading...
      <div className="spinner-sector spinner-sector-red"></div>
      <div className="spinner-sector spinner-sector-blue"></div>
      <div className="spinner-sector spinner-sector-green"></div>
    </div>
  );
};
