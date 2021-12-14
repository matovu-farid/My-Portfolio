let objects = [
  {
      name: 'Multi-Post Stories Gain+Glory',
      description : 'hhhhh',
      featuredImage: './assets/place_holders/plaholder.png',
      technologies: ['css','html','bootstrap','ruby']
  },
  {
      name: 'Multi-Post Stories Gain+Glory',
      description : 'hhhhh',
      featuredImage: './assets/place_holders/plaholder.png',
      technologies: ['css','html','bootstrap','ruby']
  },
]

const createListItem = (technology)=>{
  let listItem = document.createElement('li');
  listItem.innerHTML = `<p class="tag bg-light-green">${technology}</p>`;
  return listItem;
}

const makeTechnologies = (technologies=[],index)=>{
    
  let project = document.querySelector(`#project${index+1} ul`)
   technologies.map((technology)=>createListItem(technology)).forEach((node)=>{
       project.appendChild(node)
   })
   
}

const makeProject = ({name,featuredImage,technologies},index)=>{

  let projectDiv = document.createElement('div')
  let projectId = `project${index+1}`;
  projectDiv.setAttribute('id', projectId);
  projectDiv.innerHTML = `
  <section class="bordered-card">
  <section class="stretched-column card">
    <figure>
      <img
        src="${featuredImage}"
        class="bg-light-green place-holder"
        alt="placeholder"
      />
    </figure>
    <section class="centered-column bg-white card">
      <header>
        <h3 class="minor-heading">
          ${name}
        </h3>
      </header>
      <ul class="tag-container">
        <li>
          
        </li>
      </ul>
      <button class="button bg-green white card">See Project</button>
    </section>
  </section>
</section>
    `;
    let myProjects = document.querySelector('.work')
    myProjects.appendChild(projectDiv)
    return projectId

}
 

objects.forEach((object,index)=>makeProject(object,index))
objects.forEach((object,index)=>makeTechnologies(object.technologies,index))

