import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../layout/Layout";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/notification");
        console.log("API Response:", response.data); // Debug API Response

        if (Array.isArray(response.data)) {
          setNotifications(response.data);
        } else {
          console.error("Invalid API response:", response.data);
          setNotifications([]);
        }
      } catch (err) {
        console.error("Error fetching notifications:", err);
        setError("Failed to fetch notifications!");
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg text-xs sm:text-base">
        <h2 className="text-2xl font-semibold text-center mb-6">Notifications</h2>

        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && notifications.length === 0 && !error && (
          <p className="text-center">No notifications available.</p>
        )}

        {/* Display Notifications */}
        <div className="space-y-6">
          {notifications.map((notif, index) => (
            <div key={index} className="p-10 border rounded-lg shadow-md bg-gray-50 flex flex-col sm:flex-row gap-10 items-center">
              
              {/* Fixing Image Not Showing Issue */}
              {notif.imageFile && notif.imageFile !== "/uploads/default.png" && (
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src={Array.isArray(notif.imageFile) ? notif.imageFile[0] : notif.imageFile} 
                    alt="Notification" 
                    className="w-[500px] h-[500px] object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                  <p className="text-xs text-gray-500 mt-2">{notif.imageFile}</p> {/* Debug URL */}
                </div>
              )}

              {/* Notification Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold">{notif.title}</h3>
                <p className="text-gray-600">{notif.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Notification;
