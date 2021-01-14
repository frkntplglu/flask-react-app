const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const isAdmin = () => {
  return getCurrentUser().is_admin
}

const logout = () => {
    localStorage.removeItem("user");
  };

  export default {
    logout,
    getCurrentUser,
    isAdmin
  };