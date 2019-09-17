const $ = b => document.querySelector(b);
const log = n => console.log(n);

const projects = $('.projects');

const enable_modal = () => {
  $('html').style.overflow = "hidden";
  const modal = $('.modal');
  modal.style.display = "block";
  window.onclick = event => {
    if (event.target === modal) {
      //console.log(this)
      modal.style.display = "none";
      $('html').style.overflow = "visible";
    }
  }
}
$('#add-project').onclick = enable_modal;
$('#close-modal').onclick = () => {
  $('.modal').style.display = "none";
  log('Modal not closing');
}


$('#form1').addEventListener('submit', e => {
  e.preventDefault();
})
// $('#add_to_projects').onclick = (e) => {
//   e.stopPropagation();
//   $('.modal').style.display = "none";
//   log($('.modal').style);
// }
const qs = (n, elem) => n.querySelector(elem);
const $$ = n => document.querySelectorAll(n);

function fragment(data) {
  let frag = document.createDocumentFragment();
  for (let i in data) {
    const { title, img_src, tags, description } = data[i];
    let clonedTemplate = $('.project').cloneNode(true);
    qs(clonedTemplate, '.title').textContent = title;
    qs(clonedTemplate, '.logo').src = img_src;
    qs(clonedTemplate, '.technologies').innerHTML = '';
    tags.forEach(x => {
      let a = document.createElement('p');
      a.textContent = x;
      qs(clonedTemplate, '.technologies').appendChild(a)
    });
    qs(clonedTemplate, '.info').textContent = description;
    qs(clonedTemplate, '.info').textContent = description;
    frag.appendChild(clonedTemplate);
  }
  $('.projects').appendChild(frag);
  delete frag;
}


async function addFromJSON() {
  const response = await fetch("./projects.json");
  const data = await response.json();
  fragment(data);
}
addFromJSON();



function addFromIndex() {
  let data = {
    "title": `${$('#project-name').value}`,
    "project link": `${$('#project-link').value}`,
    "tags": $('#project-tags').value.split(','),
    "description": `${$('#project-description').value}`,
    "Image URL": `${$('#image-url').value}`,
  };
  log(data);
  
  for (let i of $$('#choose-image option')){
    if (i.selected === "react"){
      data["Image URL"] = "./OSP logos/rn.JPG";
    }
    else if (i.selected === "guage"){
      data["Image URL"] = "./OSP logos/guage.png";
    }
  }
  fragment({data});
  /*let frag = document.createDocumentFragment();
  for (let i in data) {
    const { title, img_src, tags, description } = data[i];
    let clonedTemplate = $('.project').cloneNode(true);
    qs(clonedTemplate, '.title').textContent = title;
    qs(clonedTemplate, '.logo').src = img_src;
    qs(clonedTemplate, '.technologies').innerHTML = '';
    tags.forEach(x => {
      let a = document.createElement('p');
      a.textContent = x;
      qs(clonedTemplate, '.technologies').appendChild(a)
    });
    qs(clonedTemplate, '.info').textContent = description;
    qs(clonedTemplate, '.info').textContent = description;
    frag.appendChild(clonedTemplate);
  }
  $('.projects').appendChild(frag);
  delete frag;*/
}

$('#add-to-projects').onclick = addFromIndex;















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
