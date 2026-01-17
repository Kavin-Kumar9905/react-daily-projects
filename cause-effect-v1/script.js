// -------------------------------
// Hardcoded test data
// -------------------------------
const people = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    address: "123 Main Street, New York, NY",
    phone: "555-123-4567",
    birthday: "1990-04-15",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    address: "45 Park Avenue, Boston, MA",
    phone: "555-987-6543",
    birthday: "1988-09-02",
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Johnson",
    address: "78 Lake View Road, Chicago, IL",
    phone: "555-456-7890",
    birthday: "1992-12-21",
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Brown",
    address: "9 Sunset Blvd, Los Angeles, CA",
    phone: "555-321-6549",
    birthday: "1995-06-10",
  },
];

// -------------------------------
// DOM references
// -------------------------------
const listPane = document.querySelector(".list-pane");
const detailPane = document.querySelector(".detail-pane");

// Keep track of selected item
let selectedItem = null;

// -------------------------------
// Render summary list
// -------------------------------
people.forEach((person) => {
  const item = document.createElement("div");
  item.textContent = `${person.firstName} ${person.lastName}`;
  item.classList.add("list-item");

  // Click handler (CAUSE)
  item.addEventListener("click", () => {
    // Remove selection from previous item
    if (selectedItem) {
      selectedItem.classList.remove("selected");
    }

    // Add selection to current item
    item.classList.add("selected");
    selectedItem = item;

    // Update detail pane (EFFECT)
    showPersonDetails(person);
  });

  listPane.appendChild(item);
});

// -------------------------------
// Update detail pane
// -------------------------------
function showPersonDetails(person) {
  detailPane.innerHTML = `
    <h3>${person.firstName} ${person.lastName}</h3>
    <p><strong>Address:</strong> ${person.address}</p>
    <p><strong>Phone:</strong> ${person.phone}</p>
    <p><strong>Birthday:</strong> ${person.birthday}</p>
  `;
}
