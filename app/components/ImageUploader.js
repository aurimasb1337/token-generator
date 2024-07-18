import React, { useState } from "react";

const ImageUploader = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setBackgroundImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex-1 flex justify-end">
      <div
        className="rounded-full text-xs text-text-primary w-[74px] h-[74px] p-5 flex justify-center text-center items-center bg-secondary text-white uppercase cursor-pointer"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={() => document.getElementById("fileInput").click()}
      >
        {!backgroundImage && (
          <>
            {" "}
            Add <br /> logo
          </>
        )}
      </div>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default ImageUploader;
