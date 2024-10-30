import React, { useState, useEffect } from "react";
import {
  Calendar as BigCalendar,
  momentLocalizer,
  Views,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../assets/css/Events.css"; // Ensure your scoped modal styles are here

const localizer = momentLocalizer(moment);

export default function Events() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null); // State for the selected event
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((response) => response.json())
      .then((data) => {
        const eventsWithDates = data.map((event) => ({
          ...event,
          start: new Date(event.start), // Convert to Date object
          end: new Date(event.end), // Convert to Date object
        }));
        setEvents(eventsWithDates);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  // Event click handler
  const handleEventClick = (event) => {
    setSelectedEvent(event); // Set the selected event
    setIsModalOpen(true); // Open modal
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="events">
      <h1>Evenements</h1>
      <BigCalendar
        localizer={localizer}
        events={events} // Pass events here
        views={{ week: true }} // Only show the Week view
        defaultView={Views.WEEK} // Set default view to Week
        min={new Date(1970, 1, 1, 9, 0, 0)} // Start at 9:00 AM
        max={new Date(1970, 1, 1, 21, 0, 0)} // End at 8:00 PM
        onSelectEvent={handleEventClick} // Handle event click
      />

      {/* Modal Component */}
      {isModalOpen && selectedEvent && (
        <div className="modal-unique-overlay" onClick={closeModal}>
          <div
            className="modal-unique-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <h2>{selectedEvent.title}</h2>
            <p>
              <strong>Description:</strong> {selectedEvent.description}
            </p>
            <p>
              <strong>Start:</strong> {selectedEvent.start.toLocaleString()}
            </p>
            <p>
              <strong>End:</strong> {selectedEvent.end.toLocaleString()}
            </p>
            <button className="modal-unique-close" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
