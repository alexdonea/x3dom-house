let isRoofDispatched = false;
let isDoorOpen = false;

function dispatchRoof() {
  if (isRoofDispatched) {
    closeRoof();
  } else {
    openRoof();
  }
}

function openRoof() {
  showRoof();
  isRoofDispatched = true;
}

function closeRoof() {
  hideRoof();
  isRoofDispatched = false;
}

function toggleDoor() {
  if (isDoorOpen) {
    closeDoor();
  } else {
    openDoor();
  }
}

function openDoor() {
  openMainDoor();
  isDoorOpen = true;
}

function closeDoor() {
  closeMainDoor();
  isDoorOpen = false;
}

document.addEventListener("DOMContentLoaded", () => {
  const dispatchRoofButton = document.getElementById("dispatchRoofButton");
  if (dispatchRoofButton) {
    dispatchRoofButton.addEventListener("click", dispatchRoof);
  }

  const toggleDoorButton = document.getElementById("toggleDoorButton");
  if (toggleDoorButton) {
    toggleDoorButton.addEventListener("click", toggleDoor);
  }
});

function showRoof() {
  const roofElements = document.getElementsByClassName("roof");
  setRoofTranslations(roofElements, 0, 890, 0, 0, 1070, 228, 0, 1070, -220, -130, 1120, -150, 598, 908, 0, 598, 988, 0, 598, 1060, 0, 598, 1140, 0, 598, 1200, 0, -598, 908, 0, -598, 988, 0, -598, 1060, 0, -598, 1140, 0, -598, 1200, 0);
  rotateRoofElement(roofElements[3], 0.0, 1, 0, 0);
}

function hideRoof() {
  const roofElements = document.getElementsByClassName("roof");
  setRoofTranslations(roofElements, 0, 170, 0, 0, 380, 228, 0, 380, -220, -130, 410, -150, 598, 208, 0, 598, 288, 0, 598, 360, 0, 598, 440, 0, 598, 500, 0, -598, 208, 0, -598, 288, 0, -598, 360, 0, -598, 440, 0, -598, 500, 0);
  rotateRoofElement(roofElements[3], 0.0, 0.0, 0, 10);
}

function setRoofTranslations(elements, ...translations) {
  for (let i = 0; i < elements.length; i++) {
    const translationValues = translations.slice(i * 3, (i + 1) * 3);
    const translation = translationValues.join(" ");
    elements[i].setAttribute("translation", translation);
  }
}

function rotateRoofElement(element, angle, x, y, z) {
  element.setAttribute("rotation", `${angle} ${x} ${y} ${z}`);
}

function openMainDoor() {
  const door = document.getElementsByClassName("door")[0];

  door.setAttribute("rotation", "0.0 1 0 30");
  door.setAttribute("translation", "600 78 -20");
}

function closeMainDoor() {
  const door = document.getElementsByClassName("door")[0];

  door.setAttribute("rotation", "0.0 0.0 0 10");
  door.setAttribute("translation", "670 78 60");
}
