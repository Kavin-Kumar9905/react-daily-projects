import { useState } from "react";

function CauseEffect() {
  // -------------------------------
  // Hardcoded test data (same idea as v1)
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
  // State: selected person
  // -------------------------------
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <div>
      <h2 className="mb-4">Cause & Effect (React)</h2>

      <div className="d-flex">
        {/* Summary Pane */}
        <div style={{ width: "200px", borderRight: "1px solid #ccc" }}>
          {people.map((person) => {
            const isSelected = selectedPerson?.id === person.id;

            return (
              <div
                key={person.id}
                onClick={() => setSelectedPerson(person)}
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  backgroundColor: isSelected ? "#cce5ff" : "transparent",
                  fontWeight: isSelected ? "bold" : "normal",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    isSelected ? "#cce5ff" : "#f0f0f0")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    isSelected ? "#cce5ff" : "transparent")
                }
              >
                {person.firstName} {person.lastName}
              </div>
            );
          })}
        </div>

        {/* Detail Pane */}
        <div style={{ flex: 1, paddingLeft: "20px" }}>
          {!selectedPerson ? (
            <p>Select a person to see details</p>
          ) : (
            <>
              <h3>
                {selectedPerson.firstName} {selectedPerson.lastName}
              </h3>
              <p>
                <strong>Address:</strong> {selectedPerson.address}
              </p>
              <p>
                <strong>Phone:</strong> {selectedPerson.phone}
              </p>
              <p>
                <strong>Birthday:</strong> {selectedPerson.birthday}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CauseEffect;
