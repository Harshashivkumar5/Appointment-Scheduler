const STORAGE_KEY = 'appointments';

export const getAppointments = () => {
    const appointments = localStorage.getItem(STORAGE_KEY);
    return appointments ? JSON.parse(appointments) : [];
};

export const saveAppointment = (appointment) => {
    const appointments = getAppointments();
    const newAppointment = {
        ...appointment,
        id: Date.now().toString() // Generate a unique ID
    };
    appointments.push(newAppointment);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
    return newAppointment;
};

export const deleteAppointment = (id) => {
    const appointments = getAppointments();
    const filteredAppointments = appointments.filter(app => app.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredAppointments));
}; 