import React from "react";
import sass from "../main.module.scss";
import edu from "../img/edu.jpeg";
import kids from "../img/edu2.jpg";
import books from "../img/books.jpeg";
import First from "../img/h1.png";
import h1 from "../img/home-2.png";
import h2 from "../img/h-3.png";
import h3 from "../img/h-4.png";
import Comp from "../img/comp.png";
import Child from "../img/endof.png";
function Home() {
  return (
    <div className={sass.home}>
      <div className={sass.container}>
        <div className={sass.showcase}>
          <div className={sass.left}>
            <img src={First} alt="" width="580" />
          </div>
          <div className={sass.right}>
            <h1>
              For every student, <br /> every classroom. <br /> Real results.
            </h1>
            <p>
              We’re a nonprofit with the mission to provide a free, world-class{" "}
              <br /> education for anyone, anywhere.
            </p>
            <button>
              <a href="/register">Start Here</a>
            </button>
          </div>
        </div>
        <div className={sass.why}>
          <h1>Why BilimHeal works</h1>
          <ul>
            <li>
              <img src={h1} alt="" />
              <div className={sass.text}>
                <h4>Personalized learning</h4>
                <p>
                  Students practice at their own pace, first filling in gaps in
                  their understanding and then accelerating their learning.
                </p>
              </div>
            </li>
            <li>
              <img src={h2} alt="" />
              <div className={sass.text}>
                <h4>Personalized learning</h4>
                <p>
                  Created by experts, Khan Academy’s library of trusted practice
                  and lessons covers math, science, and more. Always free for
                  learners and teachers.
                </p>
              </div>
            </li>
            <li>
              <img src={h3} alt="" />
              <div className={sass.text}>
                <h4>Tools to empower teachers</h4>
                <p>
                  With Khan Academy, teachers can identify gaps in their
                  students’ understanding, tailor instruction, and meet the
                  needs of every student.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={sass.learn}>
         <div className={sass.container}>
           <div className={sass.left}>
            <h4>LEARNS AND STUDENTS</h4>
            <h2>You can learning anything.</h2>
            <p>Build a deep, solid understanding in math, science, and more.</p>
            <button>
              <a href="/register">Learns, start here</a>
            </button>
          </div>
          <div className={sass.right}>
            <img src={Comp} alt="" width="590" />
          </div></div>
        </div> 
      <div className={sass.comment}>
        <h3>
          “I come from a poor family. At home it’s one room, just a room we live{" "}
          <br /> in. When I was a child, I used to fear mathematics. But now, I
          am in love <br /> with mathematics because of BilimHeal.”
        </h3>
      </div>
      <div className={sass.child}>
        <div className={sass.container}>
          <div className={sass.left}>
            <img src={Child} alt="" width="600" />
          </div>
          <div className={sass.right}>
            <h4>TOGETHER WE CAN MAKE A DIFFERENCE</h4>
            <h2>Every child deserves the chance to learn.</h2>
            <p>
              Across the globe, 617 million children are missing basic math and
              reading skills. We’re a nonprofit delivering the education they
              need, and we need your help. You can change the course of a
              child’s life.
            </p>
            <button>
              <a href="">Give them the chance </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
