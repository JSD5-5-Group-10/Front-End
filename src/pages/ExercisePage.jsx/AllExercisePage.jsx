import React from "react";
import Navbar from "../../component/Navbar";
import AllExercise from "../../component/ExerciseContent/AllExercise";
export const AllExercisePage = () => {
  return (
    <div className="flex">
      <div className="z-50">
        <Navbar />
      </div>
      <div className="mx-auto">
        <AllExercise />
      </div>
    </div>
  );
};
