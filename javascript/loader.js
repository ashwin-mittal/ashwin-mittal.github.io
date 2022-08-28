function load_page(name) {
  const request = new XMLHttpRequest();
  request.open("GET", `${name}.htm`);
  request.onload = () => {
    const response = request.responseText;
    document.querySelector(`.${name}`).innerHTML = response;
  };
  request.send();
}
