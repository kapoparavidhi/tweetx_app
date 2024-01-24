import React, { useState } from "react";

const Popup = ({ onClose, onPost }, { fromData }) => {
  const [sentence, setSentence] = useState("");

  const handlePost = () => {
    if (sentence.trim() !== "") {
      // Generate a unique post_id (you may use a more robust method)
      const post_id = new Date().getTime().toString();
      const created_time = new Date();
      const user_id = 123;
      // Trigger the onPost callback with the new post data
      onPost({ post_id, description: sentence, created_time, user_id });

      // Close the popup
      onClose();
    } else {
      alert("Please enter a sentence before posting.");
    }
  };

  return (
    <div className="popup flex justify-center items-center">
      <textarea
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your sentence here..."
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
      />
      <br />
      <div className="gap-5 flex ">
        <div>
          <button
            class="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 border border-pink-500 rounded"
            onClick={handlePost}
          >
            Post
          </button>
        </div>
        <div>
          <button
            class="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 border border-pink-500 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
