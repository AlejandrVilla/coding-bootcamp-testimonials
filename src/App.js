import { ReactComponent as CurveSVG } from "./icon/pattern-curve.svg";
import { useState } from "react";
import { Card } from "./components/Card";
import "./App.scss";

const testimonials = [
  {
    id: 0,
    text: "“ I’ve been interested in coding for a while but never taken the jump, until now I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    username: "Tanya Sinclair",
    job: "UX Engineer",
    imageUrl: "./images/image-tanya.jpg"
  },
  {
    id: 1,
    text: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    username: "John Tarkpor",
    job: "Junior Front-end Developer",
    imageUrl: "./images/image-john.jpg"
  }
]

function App(){
  const [ indx, setIndx ] = useState(0);

  const incrementIndx = (e) => {
    e.stopPropagation();
    setIndx( (indx + 1) % testimonials.length );
  }

  const decrementIndx = (e) => {
    e.stopPropagation();
    if (indx === 0)
      setIndx(testimonials.length-1);
    else
      setIndx(indx - 1);
  }

  const item = testimonials.filter(testimonial => {
    return testimonial.id === indx;
  });

  return (
    <div className="app">
      <Card
        item={item[0]}
        handleNext={incrementIndx}
        handlePrev={decrementIndx}
      />
      <CurveSVG className="curve"/>
    </div>
  )
}

export { App };