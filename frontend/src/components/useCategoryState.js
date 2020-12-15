import React, { useState } from "react";

export default function useCategoryState() {
  const [category, setCategory] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const updateCategory = (question) => {
    console.log(question);
    setCategory({
      ...category,
      [question]: true,
    });
  };

  return [category, updateCategory];
}
