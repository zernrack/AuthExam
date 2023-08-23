import axios from "axios";

const isAuthenticated = () => {
  return !!localStorage.getItem("authToken");
};

const login = async (username, password) => {
  try {
    const response = await axios.post("https://authexamserver.onrender.com/login", { username, password });
    const token = response.data.token;
    localStorage.setItem("authToken", token);
    return true; // Login successful
  } catch (error) {
    console.error("Login error:", error);
    return false; // Login failed
  }
};

const logout = () => {
  localStorage.removeItem("authToken");
};

export { isAuthenticated, login, logout };
