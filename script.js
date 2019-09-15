const $ = b => document.querySelector(b);
const log = n => console.log(n);

const projects = $('.projects');

const enable_modal = () => {
  const modal = $('.modal');
  modal.style.display = "block";
  window.onclick = event => {
    if (event.target === modal) modal.style.display = "none";
  }
}
$('#add-project').onclick = enable_modal;
$('.close_modal').onclick = () => $('.modal').style.display = "none";

$('#form1').addEventListener('submit', e => {
  e.preventDefault();
})
$('#addProject').onclick = () => {
  $('.modal').style.display = "none";
  log($('.modal'))
}
const qs = (n, elem) => n.querySelector(elem);

async function addFromJSON() {
  const response = await fetch("./projects.json");
  const data = await response.json();
  
  let frag = document.createDocumentFragment();
  for (let i in data) {
    for (let j in i) log(j);
    // const { title, img_src, tags, description } = i;
    // let clonedTemplate = $('.project').cloneNode(true);
    // qs(clonedTemplate, '.title').textContent = title;
    // qs(clonedTemplate, '.info').textContent = description;
    // qs(clonedTemplate, '.info').textContent = description;
    // frag.appendChild(clonedTemplate);
  }
  $('.projects').appendChild(frag);
  delete frag;
}
addFromJSON();



















/*
const projects = $('.projects');
const add_project = () => {
  project_name = $('#project_name');
  project_link = $('#project_link');
  project_description = $('#project_description');
  //alert('eff')
  //const b = "border: 1px solid #509fbe;margin: 2bw auto;border-radius: 5px;padding: 20px;line-height: 2em;display: flex;flex-flow: column wrap;justify-content: center;"
  let a = `
    <div>
      <p>Project Name: ${project_name.value}</p>
      <p>Project link: <a href = ${project_link}>${project_link.value}</a></p>
      <p>Project Description: ${project_description.value}</p>
    </div>
  `
  //a.classList.add('projects_div_class');
  projects.innerHTML += a;
}
$('#add_to_projects').onclick = add_project;
*/
