const addKeepButton = document.getElementById("add-keep");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("add-keep-modal");
const inputHeader = document.getElementById("keep-header-input");
const inputText = document.getElementById("keep-text-input");
const keeps = document.getElementById("keeps");

function addKeep() {
  const header = inputHeader.value;
  const text = inputText.value;

  if (!header || !text) {
    alert("Plese enter valid characters to save");
    return;
  }
  const savedKeeps = JSON.parse(localStorage.getItem("keeps"));
  if (savedKeeps)
    localStorage.setItem(
      "keeps",
      JSON.stringify([...savedKeeps, { head: header, text: text }])
    );
  else
    localStorage.setItem(
      "keeps",
      JSON.stringify([{ head: header, text: text }])
    );

  handleClose();
  this.location.reload();
}

function handleClick() {
  modal.classList.remove("closed");
  overlay.classList.remove("closed");
}

function handleClose() {
  overlay.classList.add("closed");
  modal.classList.add("closed");
}

document.addEventListener("DOMContentLoaded", function () {
  const items = JSON.parse(localStorage.getItem("keeps"));
  console.log(items);

  if (items) {
    items.forEach((item) => {
      const parent = document.createElement("div");
      parent.setAttribute("class", "keep");
      const hd = document.createElement("div");
      hd.setAttribute("class", "keep-header");
      const txt = document.createElement("div");
      txt.setAttribute("class", "keep-text");
      hd.innerText = item.head;
      txt.innerText = item.text;
      parent.append(hd);
      parent.append(txt);
      keeps.appendChild(parent);
      //   keeps.append(
      //     '<div class="keep"><div class="keep-header">' +
      //       element.head +
      //       '</div><div class="keep-text">' +
      //       element.text +
      //       "</div></div>"
      //   );
    });
  }
});
