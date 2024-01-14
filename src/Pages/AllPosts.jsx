import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  return (
    <div>
      <Container>
        <div className="flex flex-wrap">
          {posts &&
            posts.map((post) => {
              return (
                <div key={post.$id} className="p-2 w-1/4">
                  <PostCard post={post} />;
                </div>
              );
            })}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
