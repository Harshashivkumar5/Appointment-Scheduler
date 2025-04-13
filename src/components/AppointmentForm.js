import React, { useState } from 'react';
import CalendarComponent from './CalendarComponent';
import { saveAppointment } from '../services/localStorageService';
import './AppointmentForm.css';

const AppointmentForm = ({ onAppointmentAdded }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [time, setTime] = useState('');
    const [doctor, setDoctor] = useState('');
    const [patient, setPatient] = useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const scheduleAppointment = (event) => {
        event.preventDefault();
        if (!selectedDate || !time || !doctor || !patient) {
            alert('Please fill in all fields');
            return;
        }

        const appointmentData = {
            date: selectedDate.toISOString().split('T')[0],
            time,
            doctor,
            patient,
        };

        try {
            saveAppointment(appointmentData);
            console.log('Appointment scheduled successfully');
            // Reset form
            setTime('');
            setDoctor('');
            setPatient('');
            setSelectedDate(null);
            // Notify parent component
            if (onAppointmentAdded) {
                onAppointmentAdded();
            }
        } catch (error) {
            console.error('Error scheduling appointment:', error);
            alert('Failed to schedule appointment');
        }
    };

    return (
        <div className="appointment-form-container">
            <h2>Schedule an Appointment</h2>
            <CalendarComponent onDateChange={handleDateChange} />
            <form onSubmit={scheduleAppointment}>
                <input
                    type="text"
                    placeholder="Patient Name"
                    value={patient}
                    onChange={(e) => setPatient(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Doctor Name"
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    required
                />
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />
                <button type="submit">Book Appointment</button>
            </form>
        </div>
    );
};

export default AppointmentForm;
