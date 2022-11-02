export default function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}
