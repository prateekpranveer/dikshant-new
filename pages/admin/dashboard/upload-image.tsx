import React, { useEffect, useState } from "react";
import axios from "../../../axios";
import { SET_ACTIVE, SET_CATEGORY } from "@/store/reducers/categoryData";
import { useDispatch, useSelector } from "react-redux";

const UploadImage = () => {
  const [imageFile, setImageFile] = useState(null);
  const category = useSelector((state: any) => state.category);
  console.log(category.active);

  const dispatch = useDispatch();
  React.useEffect(() => {
    const category = async () => {
      await axios.get("/image/getallcat").then((res) =>
        dispatch({
          type: SET_CATEGORY,
          payload: res.data,
        })
      );
    };
    category();
  }, []);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleCatidChange = (event: any) => {
    const value = event.target.value;
    dispatch({
      type: SET_ACTIVE,
      payload: value,
    });
  };

  const handleUpload = () => {
    if (!imageFile) {
      // If imageFile is null, show an error message or prevent form submission.
      console.error("No image selected!");
      return;
    }

    const formData = new FormData();
    formData.append("image", imageFile);

    axios
      .post(`https://dikshant-0.onrender.com/upload/${category.active}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set proper Content-Type header for file upload
        },
      })
      .then((response) => {
        console.log(response.data);
        // Handle success response
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  return (
    <div className="w-4/5 mx-auto pt-12 font-pop-300">
      <h1>Upload an Image</h1>
      <div className="flex flex-col space-y-4 mt-6">
        <input
          className="border w-1/3 py-3 px-2 rounded-md"
          type="text"
          placeholder="Enter a slug"
        />
        <input
          onChange={handleFileChange}
          className="border w-1/3 py-3 px-2 rounded-md"
          type="file"
        />
        <div className="px-4 py-4 border max-w-fit">
          <select onChange={handleCatidChange} className="" name="category">
            {category.category?.map((p: any, id: any) => (
              <option key={id} value={p.catId}>
                {p.catName}
              </option>
            ))}

            {/* Add more options for different categories */}
          </select>
        </div>
        <button
          onClick={handleUpload}
          className="max-w-fit px-2 py-1 bg-sky-400 text-white"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default UploadImage;
