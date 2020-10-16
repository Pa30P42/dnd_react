import React, { useState } from "react";
import Board from "./Components/Boards";
import MainCalendar from "./Components/Calendar/Calendar";
import Card from "./Components/Card";
import "./main.css";

function App() {
  const [calendarOpen, setCalendarOpen] = useState(false);
  return (
    <div className="App">
      <main className="flexbox">
        {!calendarOpen ? (
          <button
            onClick={() => {
              setCalendarOpen(true);
            }}
          >
            Open Calendar
          </button>
        ) : (
          <button
            onClick={() => {
              setCalendarOpen(false);
            }}
          >
            Close Calendar
          </button>
        )}

        {calendarOpen ? (
          <MainCalendar />
        ) : (
          <>
            <Board id="bord-1" className="board">
              <Card id="card-1" className="card" draggable="true">
                Card One
              </Card>
            </Board>
            <Board id="bord-2" className="board">
              <Card id="card-2" className="card" draggable="true">
                Card Two
              </Card>
            </Board>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
