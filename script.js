let $ = b => document.querySelector(b);
let log = n => console.log(n);

const projects = $('.projects');

let enable_modal = () => {
  let modal = $('.modal');
  modal.style.display = "block";
  window.onclick = event => {
    if (event.target === modal) {
console.log(this)
 //console.log(event.target)
      modal.style.display = "none";}
   
  }
}
$('#add-project').onclick = enable_modal;
$('.close_modal').onclick = () => $('.modal').style.display = "none";

$('#form1').addEventListener('submit', e => {
  e.preventDefault();
})
$('#add_to_projects').onclick = (e) => {
  e.stopPropagation();
  $('.modal').style.display ="none";
  log($('.modal').style);
}
//
const qs = (n, elem) => n.querySelector(elem);

async function addFromJSON() {
  const response = await fetch("./projects.json");
  const data = await response.json();
  console.log(data);
  
  let frag = document.createDocumentFragment();
  for (let i in data) {
    console.log(i)
   // for (let j in i) log(j);
    const { title, img_src, tags, description } = data[i];
    console.log(title,img_src,tags,description)
     
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
