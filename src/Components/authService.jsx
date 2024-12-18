import axios from "axios"
export const logout = () => {
  localStorage.removeItem("auth_token");
};

export const isAuthenticated = () => {
  try {
    const token = localStorage.getItem("auth_token");
    if (!token) return null; // No token means not authenticated
    axios
      .get("http://127.0.0.1:8000/auth/users/me/", {
        headers: {
          Authorization: `Token ${localStorage.getItem("auth_token")}`
        }
      })
      .then((response) => {
        console.log(response);
        return response.data;
      });
  } catch (error) {
    console.error("Invalid auth token in localStorage:", error);
    return null; // Return null if token is invalid
  }
};
