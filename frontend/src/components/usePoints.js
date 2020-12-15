import React, { useState } from "react";

export default function usePoints(players) {
  let newPlayers = {};
  players.forEach((player) => {
    newPlayers = {
      ...newPlayers,
      [player]: 0,
    };
  });
  const [points, setPoints] = useState(newPlayers);

  const addPoint = (person) => {
    setPoints({
      ...points,
      // @ts-ignore
      [person]: points[person] + 100,
    });
  };
  const subtractPoint = (person) => {
    setPoints({
      ...points,
      // @ts-ignore
      [person]: points[person] - 100,
    });
  };

  return { points, addPoint, subtractPoint };
}
