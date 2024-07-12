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
                { hora: "02:00 PM", tarefa: "Arrival and Registration" },
                { hora: "04:00 PM", tarefa: "Welcome and Camp Orientation" },
                { hora: "04:30 PM", tarefa: "Snack Break" },
                { hora: "05:00 PM", tarefa: "Country Presentations" },
                {
                  hora: "07:00 PM",
                  tarefa: "Welcome International Banquet and Camp Opening",
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
                { hora: "07:00 AM", tarefa: "Breakfast" },
                {
                  hora: "08:00 AM",
                  tarefa: "Historical Tour of Itu",
                },
                { hora: "12:30 PM", tarefa: "Lunch at Pedra Branca Farm" },
                { hora: "02:00 PM", tarefa: "Visit to the Mayor" },
                { hora: "05:00 PM", tarefa: "Return to Camp" },
                { hora: "06:00 PM", tarefa: "Dinner" },
                {
                  hora: "07:00 PM",
                  tarefa: "Full Moon Horseback Ride at Chácara do Rosário",
                },
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
                { hora: "06:30 AM", tarefa: "Breakfast" },
                { hora: "07:30 AM", tarefa: "Departure for Boituva" },
                { hora: "10:00 AM", tarefa: "Visit to Haras Ana Dantas Ranch" },
                {
                  hora: "12:30 PM",
                  tarefa: "Lunch at Boituva Lions Club Headquarters",
                },
                { hora: "02:30 PM", tarefa: "Return to Itu" },
                { hora: "04:00 PM", tarefa: "Group Discussions and Reflections" },
                {
                  hora: "06:30 PM",
                  tarefa: "Dinner",
                },
                {
                  hora: "07:30 PM",
                  tarefa: "Master Music Course Festival Concert",
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
                { hora: "07:00 AM", tarefa: "Breakfast" },
                {
                  hora: "08:00 AM",
                  tarefa: "Departure for São Paulo",
                },
                {
                  hora: "11:00 AM",
                  tarefa: "Visit to Ipiranga Museum",
                },
                {
                  hora: "01:00 PM",
                  tarefa: "Lunch at Lions Ipiranga",
                },
                {
                  hora: "03:00 PM",
                  tarefa: "Visit to Japan House",
                },
                {
                  hora: "03:30 PM",
                  tarefa: "Tour of the Vibrant Paulista Avenue",
                },
                {
                  hora: "07:00 PM",
                  tarefa: "Dinner at Lions Pacaembu",
                },
                {
                  hora: "08:00 PM",
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
                { hora: "07:00 AM", tarefa: "Breakfast" },
                { hora: "08:00 AM", tarefa: "Departure to Tatui" },
                {
                  hora: "10:00 AM",
                  tarefa: "Visit to the 'Paulo Setúbal' Historical Museum",
                },
                {
                  hora: "12:30 PM",
                  tarefa: "Lunch at the Tatui Lions Club Headquarters",
                },
                {
                  hora: "02:00 PM",
                  tarefa:
                    "Tour of Dr. Carlos de Campos Dramatic and Musical Conservatory",
                },
                {
                  hora: "03:00 PM",
                  tarefa: "Visit to the Fortunato Minghini Blood Bank",
                },
                {
                  hora: "05:00 PM",
                  tarefa: "Return to Itu",
                },

                { hora: "07:00 PM", tarefa: "Dinner" },
                { hora: "08:30 PM", tarefa: "Lecture: 'Name of the Presentation' (Guilherme Pinsdorf)" },
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
                { hora: "06:00 AM", tarefa: "Breakfast" },
                { hora: "07:00 AM", tarefa: "Departure to Ilhabela" },
                { hora: "10:00 AM", tarefa: "Group Discussions and Orientations" },
                { hora: "12:30 PM", tarefa: "Lunch at Dr. Osvaldo's House" },
                {
                  hora: "03:00 PM",
                  tarefa: "Waterfront Walk to the Village",
                },
                { hora: "05:00 PM", tarefa: "Municipal Council Session" },
                { hora: "06:00 PM", tarefa: "Return to Accommodations" },
                {
                  hora: "07:00 PM",
                  tarefa:
                    "Dinner at the President's house",
                },
                {
                  hora: "08:00 PM",
                  tarefa:
                    "Group Discussions and Reflections",
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
                { hora: "07:00 AM", tarefa: "Breakfast" },
                { hora: "08:00 AM", tarefa: "Boarding on the Schooner" },
                { hora: "09:00 AM", tarefa: "Snack at Fome Beach" },
                { hora: "10:00 AM", tarefa: "Beach Activities and Tours" },
                { hora: "12:30 PM", tarefa: "Lunch" },
                { hora: "02:00 PM", tarefa: "Return to Accommodations" },
                {
                  hora: "07:00 PM",
                  tarefa: "Dinner / Julina Party with Music",
                },
                { hora: "08:00 PM", tarefa: "Evening Campfire / Group Discussions and Reflections" },
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
                { hora: "07:00 AM", tarefa: "Breakfast" },
                { hora: "08:00 AM", tarefa: "Visit to the Mayor and the President of the City Council of Ilhabela" },
                {hora: "11:00 AM", tarefa: "Snack Break" },
                { hora: "12:00 PM", tarefa: "Return to Itu" },
                { hora: "03:00 PM", tarefa: "Group Discussions and Reflections" },
                { hora: "05:00 PM", tarefa: "Free Time" },
                { hora: "05:00 PM", tarefa: "Dinner" },
                { hora: "19:00 PM", tarefa: "Country Night Gathering" },
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
                { hora: "08:00 AM", tarefa: "Breakfast" },
                { hora: "09:00 AM", tarefa: "Free time" },
                { hora: "11:00 AM", tarefa: "Barbecue" },
                { hora: "02:00 PM", tarefa: "Free Time" },
                { hora: "08:00 PM", tarefa: "Farewell 😢" },
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
                { hora: "7:00 AM", tarefa: "Breakfast" },
                { hora: "9:00 AM", tarefa: "Departure for the Airport" },
              ]}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
