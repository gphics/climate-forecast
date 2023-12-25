import storeCtrl from "./storeCtrl"
const options = { enableHighAccuracy: true };

function onSuccess(position) {
    const {latitude, longitude} = position.coords
    storeCtrl.setItem("lat", latitude)
    storeCtrl.setItem("lon", longitude)
    alert("your location is stored. Thanks for trusting us.")
}

function onError(err) {
  alert(err.message);
}

export default function getLocation() {
  navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
}
