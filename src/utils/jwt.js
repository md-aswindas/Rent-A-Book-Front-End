export function decodeJwt(token) {
  if (!token || typeof token !== "string") {
    console.error("decodeJwt received invalid token:", token);
    return null;
  }
  try {
    const payload = token.split(".")[1];
    const decoded = atob(payload);
    return JSON.parse(decoded);
  } catch (e) {
    console.error("Invalid JWT", e);
    return null;
  }
}
