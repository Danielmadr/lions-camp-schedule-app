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
              title="18"
              tarefas={[
                { hora: "14:00", tarefa: "Arrival and Check-in" },
                { hora: "17:00", tarefa: "Snack Break" },
                {
                  hora: "19:00",
                  tarefa: "Welcome International Dinner and Camp Opening",
                },
              ]}
            />
          }
        />
        <Route
          path="/tarefas2"
          element={
            <Tela3
              title="19"
              tarefas={[
                { hora: "7:00", tarefa: "Breakfast" },
                { hora: "8:00", tarefa: "Educational Trail" },
                { hora: "12:00", tarefa: "Lunch" },
                { hora: "14:00", tarefa: "Rural Tourism Experience" },
                { hora: "17:00", tarefa: "Return to Camp" },
                { hora: "19:00", tarefa: "Dinner" },
                { hora: "20:30", tarefa: "Topic Discussion" },
              ]}
            />
          }
        />
        <Route
          path="/tarefas3"
          element={
            <Tela3
              title="20"
              tarefas={[
                { hora: "7:00", tarefa: "Breakfast" },
                { hora: "8:00", tarefa: "Visit to Haras Ana Dantas Ranch" },
                {
                  hora: "12:30",
                  tarefa: "Lunch at Boituva Lions Club Headquarters",
                },
                { hora: "15:00", tarefa: "Return to Itu" },
                {
                  hora: "18:30",
                  tarefa: "Horseback Riding and Dinner at Chácara do Rosário",
                },
              ]}
            />
          }
        />
        <Route
          path="/tarefas4"
          element={
            <Tela3
              title="21"
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
              title="22"
              tarefas={[
                { hora: "7:00", tarefa: "Breakfast" },
                { hora: "8:00", tarefa: "Visit to Tatui" },
                {
                  hora: "12:30",
                  tarefa: "Lunch at the Tatui Lions Club Headquarters",
                },
                { hora: "17:00", tarefa: "Return to Camp" },
                { hora: "19:00", tarefa: "Topic Discussion or Talent Show" },
                { hora: "20:30", tarefa: "Dinner" },
              ]}
            />
          }
        />
        <Route
          path="/tarefas6"
          element={
            <Tela3
              title="23"
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
              title="24"
              tarefas={[
                { hora: "7:00", tarefa: "Breakfast" },
                { hora: "8:00", tarefa: "Beach Activities and Tours" },
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
              title="25"
              tarefas={[
                { hora: "7:00", tarefa: "Breakfast" },
                { hora: "8:00", tarefa: "Beach or Tour" },
                { hora: "12:00", tarefa: "Lunch" },
                { hora: "17:00", tarefa: "Return to Camp" },
                { hora: "19:00", tarefa: "Dinner" },
              ]}
            />
          }
        />
        <Route
          path="/tarefas9"
          element={
            <Tela3
              title="26"
              tarefas={[
                { hora: "7:00", tarefa: "Breakfast" },
                { hora: "8:00", tarefa: "Country Presentation/Talent Show" },
                { hora: "18:00", tarefa: "Camp Closing" },
              ]}
            />
          }
        />
        <Route
          path="/tarefas10"
          element={
            <Tela3
              title="27"
              tarefas={[
                { hora: "7:00", tarefa: "Breakfast" },
                { hora: "9:00", tarefa: "Departure for the Airport" },
              ]}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
