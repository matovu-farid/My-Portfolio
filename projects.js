const objects = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    image: './assets/place_holders/plaholder.png',
    featuredImage: './assets/backgrounds/details.jpeg',
    desktopFeatured: './assets/backgrounds/desktop_freatured.png',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    desktopTechnologies: ['CodeKit', 'Github', 'Javascript', 'Terminal', 'CodePen'],
    linkToLiveVersion: 'https://matovu-farid.github.io/My-Portfolio',
    linkToSource: 'https://github.com/matovu-farid/My-Portfolio',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    image: './assets/place_holders/plaholder.png',
    featuredImage: './assets/backgrounds/details.jpeg',
    desktopFeatured: './assets/backgrounds/desktop_freatured.png',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    desktopTechnologies: ['CodeKit', 'Github', 'Javascript', 'Terminal', 'CodePen'],
    linkToLiveVersion: 'https://matovu-farid.github.io/My-Portfolio',
    linkToSource: 'https://github.com/matovu-farid/My-Portfolio',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    image: './assets/place_holders/plaholder.png',
    featuredImage: './assets/backgrounds/details.jpeg',
    desktopFeatured: './assets/backgrounds/desktop_freatured.png',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    desktopTechnologies: ['CodeKit', 'Github', 'Javascript', 'Terminal', 'CodePen'],
    linkToLiveVersion: 'https://matovu-farid.github.io/My-Portfolio',
    linkToSource: 'https://github.com/matovu-farid/My-Portfolio',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    image: './assets/place_holders/plaholder.png',
    featuredImage: './assets/backgrounds/details.jpeg',
    desktopFeatured: './assets/backgrounds/desktop_freatured.png',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    desktopTechnologies: ['CodeKit', 'Github', 'Javascript', 'Terminal', 'CodePen'],
    linkToLiveVersion: 'https://matovu-farid.github.io/My-Portfolio',
    linkToSource: 'https://github.com/matovu-farid/My-Portfolio',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    image: './assets/place_holders/plaholder.png',
    featuredImage: './assets/backgrounds/details.jpeg',
    desktopFeatured: './assets/backgrounds/desktop_freatured.png',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    desktopTechnologies: ['CodeKit', 'Github', 'Javascript', 'Terminal', 'CodePen'],
    linkToLiveVersion: 'https://matovu-farid.github.io/My-Portfolio',
    linkToSource: 'https://github.com/matovu-farid/My-Portfolio',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    image: './assets/place_holders/plaholder.png',
    featuredImage: './assets/backgrounds/details.jpeg',
    desktopFeatured: './assets/backgrounds/desktop_freatured.png',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    desktopTechnologies: ['CodeKit', 'Github', 'Javascript', 'Terminal', 'CodePen'],
    linkToLiveVersion: 'https://matovu-farid.github.io/My-Portfolio',
    linkToSource: 'https://github.com/matovu-farid/My-Portfolio',
  },

];

const isDesktop = () => window.matchMedia('(min-width: 993px)').matches;

function createProjectHtml(image, name) {
  const projectHtml = document.createElement('div');
  projectHtml.innerHTML = `
  <section class="bordered-card">
  <section class="stretched-column card">
    <figure>
      <img
        src="${image}"
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
  return projectHtml;
}

function createDetailsHtml(featuredImage, description, desktopFeatured) {
  const detailsHtml = document.createElement('section');
  detailsHtml.classList.add(...['details', 'blur']);
  const imageSource = isDesktop() ? desktopFeatured : featuredImage;
  detailsHtml.innerHTML = `
  <div class="card">
<i class="fa fa-times close" aria-hidden="true"></i>
<img class="featuredImage" src="${imageSource}" alt="project-image">

  <div class="card-content">
  <h2 class="dark-blue">Keeping track of hundreds of
  components</h2>
  <ul class="tag-container">
  </ul>
  <p class="blue medium-text">
    ${description}
  </p>
  <div class="button-list">
  <button class="button bg-green white card see-live">See Live <img class="icon" src="./assets/icons/seelive.svg" alt="see live"></button>
              <button class="button bg-green white card github">See Source <img class="icon" src="./assets/icons/github.png" alt="github"></button>
  </div>
  </div>
  </div>
  `;
  return detailsHtml;
}

const createListItem = (technology) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `<p class="tag bg-light-green">${technology}</p>`;
  return listItem;
};

const addCloseFunction = (detailsHtml) => {
  const close = detailsHtml.querySelector('.close');

  close.addEventListener('click', () => {
    detailsHtml.setAttribute('style', 'display:none');
  });
};

const addTechnologies = (detailsHtml, { technologies, desktopTechnologies }) => {
  const tagContainer = detailsHtml.querySelector('.tag-container');
  const tags = isDesktop() ? desktopTechnologies : technologies;
  tags.forEach((technology) => {
    const listItem = createListItem(technology);
    tagContainer.appendChild(listItem);
  });
};

const showPopup = (detailsHtml) => {
  detailsHtml.setAttribute('style', 'display: flex');
  document.body.appendChild(detailsHtml);
};

const addLinkToSource = (detailsHtml, linkToSource) => {
  const github = detailsHtml.querySelector('.github');
  github.addEventListener('click', () => window.open(linkToSource));
};

const addLinkToLive = (detailsHtml, linkToLiveVersion) => {
  const seeLive = detailsHtml.querySelector('.see-live');
  seeLive.addEventListener('click', () => window.open(linkToLiveVersion));
};

const addButtonFunctionality = (detailsHtml, linkToLiveVersion, linkToSource) => {
  addLinkToLive(detailsHtml, linkToLiveVersion);
  addLinkToSource(detailsHtml, linkToSource);
  addCloseFunction(detailsHtml);
};

const makeProjectTechnologies = (projectHtml, technologies) => {
  const tagContainer = projectHtml.querySelector('ul');
  technologies.map((technology) => createListItem(technology)).forEach((node) => {
    tagContainer.appendChild(node);
  });
};

const makeDetails = (object) => {
  const {
    linkToLiveVersion, linkToSource, description, featuredImage, desktopFeatured,
  } = object;
  const detailsHtml = createDetailsHtml(featuredImage, description, desktopFeatured);
  addButtonFunctionality(detailsHtml, linkToLiveVersion, linkToSource);
  addTechnologies(detailsHtml, object);
  showPopup(detailsHtml);
};

const addDetails = (projectHtml, object) => {
  const seeResume = projectHtml.querySelector('.button');
  seeResume.addEventListener('click', () => makeDetails(object));
};

const makeProject = (object) => {
  const { name, image, technologies } = object;
  const projectHtml = createProjectHtml(image, name);
  makeProjectTechnologies(projectHtml, technologies);
  addDetails(projectHtml, object);
  const myProjects = document.querySelector('.work');
  myProjects.appendChild(projectHtml);
};

const createAllProjects = (objects = []) => {
  objects.forEach(makeProject);
};
createAllProjects(objects);