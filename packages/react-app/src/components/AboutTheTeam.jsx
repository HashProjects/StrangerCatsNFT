import React from "react";

const AboutTheTeam = () => {
  return (
    <div>
      <h2 style={{ padding: 16, width: 500, margin: "auto", paddingBottom: 16 }}>About Team StrangerCats</h2>
      <div className="row">
        <div className="column">
          <div class="card">
            <img src="https://placekitten.com/200/300" alt="Eric's Cat" style={{ width: 100 }} />
            <div className="container">
              <h2>Eric Britten</h2>
              <p className="title">CEO & Founder</p>
              <p>Favorite Cats are Siamese cat</p>
              <p>jane@example.com</p>
              <button className="button">Contact</button>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="container">
              <img src="https://placekitten.com/201/300" alt="Rosa's Cat" style={{width: 100}}/>
              <h2>Rosa Cho</h2>
              <p className="title">Programer</p>
              <p>Favorite Cats are Persian Cat</p>
              <p>mike@example.com</p>
              <button className="button">Contact</button>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="container">
              <img src="https://placekitten.com/202/300" alt="Tim's Cat" style={{width: 100}}/>
              <h2>Timothy Jan</h2>
              <p className="title">Programer</p>
              <p>Favorite Cats are Scottish Fold</p>
              <p>john@example.com</p>
              <button className="button">Contact</button>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="container">
              <img src="https://placekitten.com/203/300" alt="Danny's Cat" style={{width: 100}}/>
              <h2>Danny Tzoc</h2>
              <p className="title">Designer</p>
              <p>Favorite Cats are Sphynx cat</p>
              <p>mike@example.com</p>
              <button className="button">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTheTeam;

