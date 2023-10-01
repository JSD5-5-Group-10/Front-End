import React from "react";
import { Link } from "react-router-dom";

class ExerciseCard {
  constructor(title, imgSrc, altText, description,router) {
    this.title = title;
    this.imgSrc = imgSrc;
    this.altText = altText;
    this.description = description;
    this.router = router;
  }

  render() {
    return (
      <div className="relative w-[300px] md:w-auto md:h-auto">
        <Link to={this.router}>
        <img
          src={this.imgSrc}
          alt={this.altText}
          className="rounded-2xl opacity-70 hover:shadow-md hover:shadow-[#8278D9] hover:opacity-100"
        />
        </Link>
        <div className="textContainer">
          <h3 className="absolute text-3xl md:text-5xl text-white font-medium top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2">
            {this.title}
          </h3>
          <p className="absolute hidden md:inline text-base text-center italic max-w-[100%] m-1">
            {this.description}
          </p>

        </div>
      </div>
    );
  }
}

function AllExercise() {
  const exercises = [
    new ExerciseCard(
      "Yoga",
      "https://drive.google.com/uc?id=1ac0TttcdlGiTQJqTa9aSnepGii6xeJXy",
      "yoga img",
      "Spiritual discipline based on a science, which focuses on mind and body",
      "/yogaPage"
    ),
    new ExerciseCard(
      "Running",
      "https://drive.google.com/uc?id=1fyjE-yDQwA0QOVK6lukz8WDZMN1vwpXx",
      "running img",
      "Foot racing over a variety of distances and courses, popular sports in nearly all times and places",
      "/runningPage"
    ),
    new ExerciseCard (
      "Thai Boxing",
      "https://drive.google.com/uc?id=1sUyURiEbC6jvFeVkfiCey8fJ5xhMvLH7",
      "boxing img",
      "Combat Sport (martial art) has been developed in Thailand",
      "/thaiBoxingPage"
    ), 
    new ExerciseCard (
      "Weight Training",
      "https://drive.google.com/uc?id=1r8mkjX6rfXWrvAYO5jBgBw1N1c8XYnnv",
      "weight img",
      "System of physical conditioning using free weights",
      "/weightPage"
    ), 
    new ExerciseCard (
      "Aerobics",
      "https://drive.google.com/uc?id=1mAgZEdxYEBU4EOhWFPWG_72zVpRYfO4u",
      "aerobics img",
      "Physical exercise of low to high intensity that depends on the aerobic energy-generating process",
      "/aerobicsPage"
    ), 
  ];

  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-medium text-center my-[20px]">
        Exercise Content
      </h1>
      <div className="place-items-center grid grid-cols-1 gap-5 md:grid-cols-3 md:mx-[10px] md:gap-y-[110px] lg:gap-y-[80px]">
        {exercises.map((exercise, index) => (
          <div key={index}>{exercise.render()}</div>
        ))}
      </div>
    </div>
  );
}

export default AllExercise

