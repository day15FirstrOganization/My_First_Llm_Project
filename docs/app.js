async function main() {
  async function hanldeCC() {
    document.querySelector("#box").textContent = await (
      await fetch("http://127.0.0.1:3000")
    ).text();
  }

  document.querySelector("#button").addEventListener("click", hanldeCC);
}

document.addEventListener("DOMContentLoaded", main);
