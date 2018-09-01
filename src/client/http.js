import axios from "axios";

export async function isAuthenticated() {
  try {
    return (await axios.get("/users/current/")).data;
  } catch (thrown) {
    if (thrown?.response?.status === 401) {
      return null;
    }

    // 500 or some other unexpected thing
    throw thrown;
  }
}

export async function authenticate(credentials) {
  try {
    return (await axios.post("/users/logon/", credentials)).data;
  } catch (thrown) {
    if (thrown?.response?.status === 400) {
      return null;
    }

    // 500 or some other unexpected thing
    throw thrown;
  }
}
