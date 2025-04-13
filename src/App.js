import React, { useState } from 'react';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [refreshList, setRefreshList] = useState(false);

  const handleAppointmentAdded = () => {
    setRefreshList(prev => !prev);
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="container">
          <AppointmentForm onAppointmentAdded={handleAppointmentAdded} />
          <AppointmentList key={refreshList} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;