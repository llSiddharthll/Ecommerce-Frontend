import axios from "axios"
export const logout = () => {
  localStorage.removeItem("auth_token");
  localStorage.removeItem("user_data");
};

export const isAuthenticated = async () => {
  const token = localStorage.getItem("auth_token");
  if (!token) {
    console.log("No token found.");
    return null; // No token means not authenticated
  }

  const auth_str = `Token ${token}`;

  try {
    const response = await axios.get("http://127.0.0.1:8000/auth/users/me/", {
      headers: {
        Authorization: auth_str,
      },
    });
    localStorage.setItem("user_data", JSON.stringify(response.data));
    return response.data; // Return user data if authenticated
  } catch (error) {
    if (error.response) {
      console.error("Error Response:", error.response.status, error.response.data);
    } else if (error.request) {
      console.error("Error Request:", error.request);
    } else {
      console.error("Unexpected Error:", error.message);
    }
    return null; // Return null if not authenticated
  }
};
