const btn = document.querySelector("#btn");
console.log(btn);

const tech = document.querySelector("#tech");
console.log(tech);

const techs = document.querySelector("#techs");
console.log(techs);

const lista = [];

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const newTech = document.createElement("option");

  lista.push(tech.value);

  lista.forEach((e) => {
    newTech.value = e;
  });

  techs.appendChild(newTech);
});
