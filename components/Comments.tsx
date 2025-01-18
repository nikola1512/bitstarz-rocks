"use client";

import { getComments } from "@/app/actions";
import { CommentType } from "@/types";
import { useEffect, useState } from "react";

const Comments = ({ postId }: { postId: string }) => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getComments({ id: postId })
      .then((comments) => {
        console.log("comments", comments);
        setComments(comments);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl">Comments</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className="py-4">
          {comments.map((comment) => (
            <li key={comment as unknown as string}>{comment}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comments;
