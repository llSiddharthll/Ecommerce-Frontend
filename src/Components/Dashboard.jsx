import React, { useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
    profilePicture: "",
  });

  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditDetails = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleAddAddress = (e) => {
    e.preventDefault();
    if (newAddress.trim()) {
      setAddresses([...addresses, newAddress]);
      setNewAddress("");
    }
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setUser({ ...user, profilePicture: reader.result });
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-500 text-white p-6 flex items-center justify-between">
          <h1 className="text-xl font-bold">User Dashboard</h1>
          <button
            onClick={() => alert("Logging out...")}
            className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200"
          >
            Logout
          </button>
        </div>

        {/* Main Content */}
        <div className="p-6 space-y-6">
          {/* User Details */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={
                    user.profilePicture ||
                    "https://via.placeholder.com/100?text=Profile"
                  }
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <label className="absolute bottom-0 right-0 bg-blue-500 text-white text-xs p-1 rounded-full cursor-pointer hover:bg-blue-600">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePictureChange}
                    className="hidden"
                  />
                  Edit
                </label>
              </div>
              <div>
                {isEditing ? (
                  <form
                    onSubmit={handleEditDetails}
                    className="space-y-2 text-sm"
                  >
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      value={user.name}
                      onChange={(e) =>
                        setUser({ ...user, name: e.target.value })
                      }
                    />
                    <input
                      type="email"
                      className="w-full p-2 border rounded"
                      value={user.email}
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                    />
                    <input
                      type="tel"
                      className="w-full p-2 border rounded"
                      value={user.phone}
                      onChange={(e) =>
                        setUser({ ...user, phone: e.target.value })
                      }
                    />
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Save
                    </button>
                  </form>
                ) : (
                  <div>
                    <h2 className="text-lg font-bold">{user.name}</h2>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="text-blue-500 underline mt-2"
                    >
                      Edit Details
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Add Address */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Add Address</h3>
            <form onSubmit={handleAddAddress} className="flex space-x-2">
              <input
                type="text"
                placeholder="Enter your address"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                className="flex-grow p-2 border rounded"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add
              </button>
            </form>
          </div>

          {/* Saved Addresses */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Saved Addresses</h3>
            {addresses.length > 0 ? (
              <ul className="space-y-2">
                {addresses.map((address, index) => (
                  <li
                    key={index}
                    className="bg-white p-2 rounded shadow flex justify-between items-center"
                  >
                    <span>{address}</span>
                    <button
                      onClick={() =>
                        setAddresses(addresses.filter((_, i) => i !== index))
                      }
                      className="text-red-500 text-sm"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No addresses saved yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
