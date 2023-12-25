function setItem(key, value) {
  localStorage.setItem(key, value);
  return "done";
}

function getItem(key) {
  return localStorage.getItem(key);
}

function clearItem(key) {
  localStorage.removeItem(key);
}

const obj = { setItem, clearItem, getItem };

export default obj;
