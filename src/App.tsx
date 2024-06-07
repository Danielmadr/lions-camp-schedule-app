import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/LoadingPage/Loading";
import Calendar from "./components/CalendarPage/Calendar";
import Schedule from "./components/SchedulePage/Schedule";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route
          path="/day18"
          element={
            <Schedule
              title="18"
              tarefas={[
                { hora: "14:00", tarefa: "Arrival and Check-in" },
                { hora: "17:00", tarefa: "Snack Break" },
                {
                  hora: "19:00",
                  tarefa: "Welcome International Banket and Camp Opening",
                },
              ]}
            />
          }
        />
        <Route
          path="/day19"
          element={
            <Schedule
              title="19"
              tarefas={[
                { hora: "7:00", tarefa: "Breakfast" },
                {
                  hora: "8:00",
                  tarefa: "Educational Tour Guide About History of Itu ",
                },
                { hora: "12:30", tarefa: "Lunch at Pedra Branca Farm" },
                { hora: "14:00", tarefa: "Rural Tourism Experience" },
                { hora: "17:00", tarefa: "Return to Camp" },
                { hora: "19:00", tarefa: "Dinner" },
                { hora: "20:30", tarefa: "Topic Discussion" },
              ]}
            />
          }
        />
        <Route
          path="/day20"
          element={
            <Schedule
              title="20"
              tarefas={[
                { hora: "7:00", tarefa: "Breakfast" },
                { hora: "8:00", tarefa: "Departure for Boituva" },
                { hora: "10:00", tarefa: "Visit to Haras Ana Dantas Ranch" },
                {
                  hora: "12:30",
                  tarefa: "Lunch at Boituva Lions Club Headquarters",
                },
                { hora: "14:30", tarefa: "Return to Itu" },
                {
                  hora: "18:30",
                  tarefa: "Dinner Time",
                },
                {
                  hora: "19:30",
                  tarefa: "Full Moon Horseback Ride at Chácara do Rosário",
                },
              ]}
            />
          }
        />
        <Route
          path="/day21"
          element={
            <Schedule
              title="21"
              tarefas={[
                { hora: "7:00", tarefa: "Breakfast" },
                {
                  hora: "8:00",
                  tarefa: "Departure for São Paulo",
                },
                {
                  hora: "9:00",
                  tarefa: "Visit to Ipiranga Museum",
                },
                {
                  hora: "12:00",
                  tarefa: "Lunch at Lions Ipiranga?",
                },
                {
                  hora: "14:00",
                  tarefa: "Visit to MASP Museum",
                },
                {
                  hora: "19:00",
                  tarefa: "Dinenr at Lions Pacaembu?",
                },
                {
                  hora: "20:00",
                  tarefa: "Return to Itu",
                },
              ]}
            />
          }
        />
        <Route
          path="/day22"
          element={
            <Schedule
              title="22"
              tarefas={[
                { hora: "7:00", tarefa: "Breakfast" },
                { hora: "8:00", tarefa: "Departure to Tatui" },
                {
                  hora: "10:00",
                  tarefa: "Visit to Tatui (conservatory, blood bank, etc)",
                },
                {
                  hora: "12:30",
                  tarefa: "Lunch at the Tatui Lions Club Headquarters",
                },
                { hora: "14:30", tarefa: "Return to Camp" },
                { hora: "19:00", tarefa: "Topic Discussion or Talent Show" },
                { hora: "20:30", tarefa: "Dinner" },
              ]}
            />
          }
        />
        <Route
          path="/day23"
          element={
            <Schedule
              title="23"
              tarefas={[
                { hora: "6:00", tarefa: "Breakfast" },
                { hora: "7:00", tarefa: "Departure to Ilhabela" },
                { hora: "12:30", tarefa: "Lunch at Dr. Osvaldo's House" },
                {
                  hora: "15:00",
                  tarefa: "4 km walk to the Village along the Waterfront",
                },
                { hora: "17:00", tarefa: "Municipal Council Session" },
                { hora: "18:00", tarefa: "Return to accommodations" },
                {
                  hora: "17:00",
                  tarefa:
                    "Dinner at the President's house, music, performances, etc.",
                },
              ]}
            />
          }
        />
        <Route
          path="/day24"
          element={
            <Schedule
              title="24"
              tarefas={[
                { hora: "7:00", tarefa: "Breakfast" },
                { hora: "8:00", tarefa: "Boarding on the Schooner" },
                { hora: "9:00", tarefa: "Snack at Fome Beach." },
                { hora: "10:00", tarefa: "Beach Activities and Tours" },
                { hora: "12:30", tarefa: "Lunch..." },
                { hora: "14:00", tarefa: "Return to Accommodations" },
                {
                  hora: "19:00",
                  tarefa: "Dinner, Junina Party, Music, someone's house",
                },
                { hora: "20:00", tarefa: "Bonfire" },
              ]}
            />
          }
        />
        <Route
          path="/day25"
          element={
            <Schedule
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
          path="/day26"
          element={
            <Schedule
              title="26"
              tarefas={[
                { hora: "7:00", tarefa: "Breakfast" },
                { hora: "**:00", tarefa: "..." },
                { hora: "18:00", tarefa: "Farewell dinner" },
              ]}
            />
          }
        />
        <Route
          path="/day27"
          element={
            <Schedule
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
