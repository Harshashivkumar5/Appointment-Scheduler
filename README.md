# Appointment Scheduler

A modern, user-friendly appointment scheduling application built with React. This application allows users to schedule, view, and manage appointments with doctors.

## Features

- 📅 Interactive calendar for date selection
- 👨‍⚕️ Doctor appointment scheduling
- 👤 Patient information management
- 🕒 Time slot selection
- 📋 Appointment list view
- 🗑️ Appointment deletion
- 💾 Local storage for data persistence
- 🎨 Modern and responsive UI

## Tech Stack

- React.js
- React Calendar
- LocalStorage API
- CSS3

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/appointment-scheduler.git
```

2. Navigate to the project directory:
```bash
cd appointment-scheduler/appointment-scheduler-Frontend
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Usage

1. **Schedule an Appointment**
   - Select a date from the calendar
   - Enter patient name
   - Enter doctor name
   - Select appointment time
   - Click "Book Appointment"

2. **View Appointments**
   - All scheduled appointments are displayed below the form
   - Appointments show date, time, doctor, and patient information

3. **Delete Appointments**
   - Click the "Delete" button next to any appointment
   - Confirm deletion in the popup dialog

## Project Structure

```
appointment-scheduler/
├── appointment-scheduler-Frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AppointmentForm.js
│   │   │   ├── AppointmentList.js
│   │   │   ├── CalendarComponent.js
│   │   │   ├── Header.js
│   │   │   └── Footer.js
│   │   ├── services/
│   │   │   └── localStorageService.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React Calendar for the calendar component
- React team for the amazing framework
