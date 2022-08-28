const content = document.querySelector("#tableInit");
let num = 0;
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("name") !== null) {
    const prevName = localStorage.getItem("name").split("#");
    const prevSkill = localStorage.getItem("skill").split("#");
    const prevLevel = localStorage.getItem("level").split("#");
    const prevComment = localStorage.getItem("comment").split("#");
    for (let num = 0; num < prevName.length; num++)
      content.innerHTML +=
        '<tr><th scope="row">' +
        (num + 1) +
        "</th><td>" +
        prevName[num] +
        "</td><td>" +
        prevSkill[num] +
        "</td><td>" +
        prevLevel[num] +
        "</td><td>" +
        prevComment[num] +
        "</td></tr>";
  }
  num++;
});
function tableMaker() {
  const name = document.querySelector("#name");
  const skill = document.querySelector("#skill");
  const level = document.querySelector("#level");
  const comment = document.querySelector("#comment");
  if (localStorage.getItem("name") === null) {
    var n = name.value;
    var s = skill.value;
    var l = level.options[level.selectedIndex].text;
    var c = comment.value;
  } else {
    var n = localStorage.getItem("name") + "#" + name.value;
    var s = localStorage.getItem("skill") + "#" + skill.value;
    var l =
      localStorage.getItem("level") +
      "#" +
      level.options[level.selectedIndex].text;
    var c = localStorage.getItem("comment") + "#" + comment.value;
  }
  localStorage.setItem("name", n);
  localStorage.setItem("skill", s);
  localStorage.setItem("level", l);
  localStorage.setItem("comment", c);
  num++;
}
