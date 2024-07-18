import React from "react";

const ButtonInput = ({ value, onChange, id }) => {
  const handleDecrement = () => {
    const newValue = Math.max(0, (value || 0) - 1);
    onChange({ target: { id, value: newValue.toString() } });
  };

  const handleIncrement = () => {
    const newValue = Math.min(100, (value || 0) + 1);
    onChange({ target: { id, value: newValue.toString() } });
  };

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 100) {
      onChange({ target: { id, value: newValue.toString() } });
    } else if (e.target.value === "") {
      onChange({ target: { id, value: "" } });
    }
  };

  return (
    <div className="flex items-center space-x-2   rounded-lg">
      <div className="bg-secondary justify-between flex p-2 rounded-lg w-[117px]">
        <button
          onClick={handleDecrement}
          className="text-text-secondary hover:text-white"
        >
          -
        </button>
        <input
          id={id}
          type="text"
          value={value}
          onChange={handleChange}
          className="w-12 text-center bg-transparent text-white outline-none"
        />
        <button
          onClick={handleIncrement}
          className="text-text-secondary hover:text-white"
        >
          +
        </button>
      </div>
      <span className="text-text-secondary">%</span>
    </div>
  );
};

export default ButtonInput;
