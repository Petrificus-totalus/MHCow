import React, { useEffect, useState } from "react";
import { firestore } from "./firebase";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";

function HomePageComponent() {
  const [posts, setPosts] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, "posts"),
      (snapshot) => {
        const newPosts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(newPosts);
      }
    );

    // Cleanup on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <button onClick={() => nav("/upload")}>upload</button>
      {posts.map((post) => (
        <div key={post.id}>
          <img src={post.imageUrl} alt="User Post" />
          <p>Location: {post.location}</p>
        </div>
      ))}
    </div>
  );
}

export default HomePageComponent;
