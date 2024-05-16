import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tela1 from "./components/Tela1";
import Tela2 from "./components/Tela2";
import Tela3 from "./components/Tela3";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tela1 />} />
        <Route path="/tela2" element={<Tela2 />} />
        <Route
          path="/tarefas1"
          element={
            <Tela3
              title="18/07"
              tarefas={[
                {
                  hora: "14:00",
                  tarefa: "Arrival and accommodation of the youth",
                },
                { hora: "17:00", tarefa: "Snack" },
                {
                  hora: "19:00",
                  tarefa: "International banquet and camp opening",
                },
              ]}
            />
          }
        />
        <Route
          path="/tarefas2"
          element={
            <Tela3
              title="19/07"
              tarefas={[
                { hora: "7:00", tarefa: "Breakfast" },
                { hora: "8:00", tarefa: "Knowledge Trail" },
                { hora: "12:00", tarefa: "Lunch" },
                { hora: "14:00", tarefa: "Rural Tourism" },
                { hora: "17:00", tarefa: "Return" },
                { hora: "19:00", tarefa: "Dinner" },
                { hora: "20:30", tarefa: "Lecture/Discussion of Topics" },
              ]}
            />
          }
        />
        <Route
          path="/tarefas3"
          element={
            <Tela3
              title="20/07"
              tarefas={[
                { hora: "7:00", tarefa: "Breakfast" },
                { hora: "8:00", tarefa: "Visit to Haras Ana Dantas Ranch" },
                {
                  hora: "12:30",
                  tarefa: "Lunch - Lions Club headquarters in Boituva",
                },
                { hora: "15:00", tarefa: "Return to Itu" },
                {
                  hora: "18:30",
                  tarefa:
                    "Full Moon Horseback Riding and typical dinner at Chácara do Rosário",
                },
              ]}
            />
          }
        />
        <Route
          path="/tarefas4"
          element={
            <Tela3
              title="21/07"
              tarefas={[
                { hora: "7:00", tarefa: "Breakfast" },
                {
                  hora: "8:00",
                  tarefa: "Visit to São Paulo - Ipiranga Museum and MASP",
                },
              ]}
            />
          }
        />
        <Route
          path="/tarefas5"
          element={
            <Tela3
              title="22/07"
              tarefas={[
                { hora: "7:00", tarefa: "Breakfast" },
                { hora: "8:00", tarefa: "Visit to Tatui" },
                {
                  hora: "12:30",
                  tarefa: "Lunch at the Lions Club headquarters in Tatui",
                },
                { hora: "17:00", tarefa: "Return" },
                {
                  hora: "19:00",
                  tarefa: "Discussion of Topics/ or Talent Show",
                },
                { hora: "20:30", tarefa: "Dinner" },
              ]}
            />
          }
        />
        <Route
          path="/tarefas6"
          element={
            <Tela3
              title="23/07"
              tarefas={[
                { hora: "6:00", tarefa: "Breakfast" },
                { hora: "7:00", tarefa: "Departure to Ilhabela" },
              ]}
            />
          }
        />
        <Route
          path="/tarefas7"
          element={
            <Tela3
              title="24/07"
              tarefas={[
                { hora: "7:00", tarefa: "Breakfast" },
                { hora: "8:00", tarefa: "Beach and tours" },
                { hora: "19:00", tarefa: "Dinner" },
                { hora: "20:00", tarefa: "Bonfire" },
              ]}
            />
          }
        />
        <Route
          path="/tarefas8"
          element={
            <Tela3
              title="25/07"
              tarefas={[
                { hora: "7:00", tarefa: "Breakfast" },
                { hora: "8:00", tarefa: "Beach or tour" },
                { hora: "12:00", tarefa: "Lunch" },
                { hora: "17:00", tarefa: "Return" },
                { hora: "19:00", tarefa: "Dinner" },
              ]}
            />
          }
        />
        <Route
          path="/tarefas9"
          element={
            <Tela3
              title="26/07"
              tarefas={[
                { hora: "7:00", tarefa: "Breakfast" },
                {
                  hora: "8:00",
                  tarefa: "Presentation of Countries / Talent Show",
                },
                { hora: "18:00", tarefa: "Camp closure" },
              ]}
            />
          }
        />
        <Route
          path="/tarefas10"
          element={
            <Tela3
              title="27/07"
              tarefas={[
                { hora: "7:00", tarefa: "Breakfast" },
                { hora: "9:00", tarefa: "Departure for the airport" },
              ]}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
