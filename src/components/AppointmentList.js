import React, { useEffect, useState } from 'react';
import { getAppointments, deleteAppointment } from '../services/localStorageService';
import './AppointmentList.css';

const AppointmentList = () => {
    const [appointments, setAppointments] = useState([]);

    const fetchAppointments = () => {
        const storedAppointments = getAppointments();
        setAppointments(storedAppointments);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this appointment?')) {
            deleteAppointment(id);
            fetchAppointments();
        }
    };

    useEffect(() => {
        fetchAppointments();
    }, []);

    return (
        <div className="appointment-list-container">
            <h2>Appointments</h2>
            {appointments.length === 0 ? (
                <p>No appointments scheduled</p>
            ) : (
                <ul className="appointment-list">
                    {appointments.map((appointment) => (
                        <li key={appointment.id} className="appointment-item">
                            <div className="appointment-details">
                                <strong>Date:</strong> {appointment.date}<br />
                                <strong>Time:</strong> {appointment.time}<br />
                                <strong>Doctor:</strong> {appointment.doctor}<br />
                                <strong>Patient:</strong> {appointment.patient}
                            </div>
                            <button 
                                className="delete-button"
                                onClick={() => handleDelete(appointment.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AppointmentList;
