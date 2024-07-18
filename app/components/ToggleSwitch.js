import React from "react";

const ToggleSwitch = ({ id, checked, onChange }) => {
  const handleToggle = () => {
    onChange({
      target: {
        name: id,
        value: !checked,
      },
    });
  };

  return (
    <div className="flex items-center cursor-pointer">
      <div className="relative" onClick={handleToggle}>
        <input
          type="checkbox"
          id={id}
          name={id}
          checked={checked}
          onChange={handleToggle}
          className="sr-only"
        />
        <div
          className={`block w-10 h-6 rounded-full ${
            checked ? "bg-active" : "bg-text-secondary"
          } transition-all`}
        ></div>
        <div
          className={`dot absolute left-1 top-1 bg-modalBg w-4 h-4 rounded-full transition-transform ${
            checked ? "transform translate-x-4" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
