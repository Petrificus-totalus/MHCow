import React, { useState } from "react";
import { storage, firestore } from "./firebase"; // Paths to your Firebase setup
import { serverTimestamp, doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function UploadComponent() {
  const [file, setFile] = useState(null);
  const [location, setLocation] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file && location) {
      // Upload file to Firebase Storage
      const storageRef = ref(storage, `${file.name}`);
      await uploadBytes(storageRef, file);
      const fileUrl = await getDownloadURL(storageRef);

      // Add location and URL to Firestore
      await setDoc(doc(firestore, "posts", uuidv4()), {
        imageUrl: fileUrl,
        location: location,
        createdAt: serverTimestamp(),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <input
        type="text"
        value={location}
        onChange={handleLocationChange}
        placeholder="Enter location"
      />
      <button type="submit">Upload</button>
    </form>
  );
}

export default UploadComponent;
