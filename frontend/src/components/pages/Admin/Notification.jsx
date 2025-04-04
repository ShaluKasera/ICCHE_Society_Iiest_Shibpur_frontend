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
        const response = await axios.get("https://iccheweb.vercel.app/api/notification");
        console.log("API Response:", response.data); 

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
      <div className="max-w-7xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-10">Notifications & Wishes</h2>

        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        
        {!loading && notifications.length === 0 && !error && (
          <p className="text-center text-gray-600">No notifications available.</p>
        )}

        <div className="space-y-8">
          {notifications.map((notif, index) => {
            const imageUrl = Array.isArray(notif.imageFile) ? notif.imageFile[0] : notif.imageFile;

            return (
              <div key={index} className="flex flex-col md:flex-row items-center bg-gray-50 rounded-xl shadow-md overflow-hidden">
                {/* Image Section */}
                {imageUrl && imageUrl !== "/uploads/default.png" && (
                  <div className="w-full md:w-1/2">
                    <img 
                      src={imageUrl} 
                      alt="Notification" 
                      className="w-full h-[350px] object-cover"
                    />
                  </div>
                )}

                {/* Text Section (Centered) */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-6">
                  <h3 className="text-2xl font-semibold text-gray-900">{notif.title}</h3>
                  <p className="text-gray-600 mt-2">{notif.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Notification;
