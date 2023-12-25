import storeCtrl from "./storeCtrl";
export default function getLocationState() {
  const lat = storeCtrl.getItem("lat");
  const lon = storeCtrl.getItem("lon");

  if (lat && lon) {
    return true;
  } else {
    return false;
  }
}
