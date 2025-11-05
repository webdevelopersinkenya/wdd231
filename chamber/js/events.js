const events = [
    { title: "Business Expo", date: "Nov 15, 2025", location: "Nairobi Conference Center" },
    { title: "Tech Meetup", date: "Nov 22, 2025", location: "Panari Hotel" },
    { title: "Entrepreneur Workshop", date: "Dec 5, 2025", location: "KICC" }
];

const eventsPanel = document.querySelector(".events-panel");

events.forEach(event => {
    const div = document.createElement("div");
    div.classList.add("event-item");
    div.innerHTML = `<h4>${event.title}</h4>
                     <p>${event.date} - ${event.location}</p>`;
    eventsPanel.appendChild(div);
});
