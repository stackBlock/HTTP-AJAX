import React, { useEffect, useState } from "react";
import Post from "./Post";

const FriendList = props => {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/friends")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch.");
        }
        return response.json();
      })
      .then(data => {
        setIsLoading(false);
        setFriends(data);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  // let content = friends
  //   ? friends.map(friend => ({
  //       id: friend.id,
  //       name: friend.name,
  //       age: friend.age,
  //       email: friend.email
  //     }))
  //   : [];

  // console.log(content);

  return (
    <div>
      {friends.map(friend => (
        <Post
          id={friend.id}
          name={friend.name}
          age={friend.age}
          email={friend.email}
        />
      ))}
    </div>
  );
};

export default FriendList;
