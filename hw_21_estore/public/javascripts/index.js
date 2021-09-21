// const socket = io();

const container = document.querySelector('.container-side-content'),
  categoryList = document.querySelector('.category-list'),
  titleWrapper = document.querySelector('.title-wrapper');
let groupTitle = null

//  get group by category
const categoryListHandler = async (e) => {
  if(!e.target.classList.contains('category-list_item')) return false;
  const { id } = e.target.dataset;
  const { data } = await axios.post('/group', { id });
  console.log(data);
  buildGroupList(data)
};

categoryList.addEventListener('click', categoryListHandler);

function buildGroupList(data) {
  const list = data.reduce((acc, group) => {
    acc += `
      <li class="nav-item p-2 pointer group-list_item" data-id="${group._id}">
      ${group.name}
      </li>
    `;
    return acc; 
  }, '')
  const groupList = `
    <ul class="nav nav-pills flex-column mb-auto group-list">
      ${list}
    </ul>
  `;

  container.innerHTML = groupList;

  buildTitle('группы');
};

function buildTitle(addTitle) {
  const newTitle = `
    <span class="fs-4 pointer titleList ${addTitle}">/${addTitle}</span>
  `;
  titleWrapper.innerHTML += newTitle;
  groupTitle = document.querySelector(`.${addTitle}`);
};

// return to category by click on title
titleWrapper.addEventListener('click', async (e) => {
  if(!e.target.classList.contains('titleList')) return false;
  if(e.target.classList.contains('category')) {
    const { data } = await axios.get('/category');
    buildCategoryList(data);
    const categoryList = document.querySelector('.category-list');
    categoryList.addEventListener('click', categoryListHandler);
  }

});

function buildCategoryList(data) {
  const list = data.reduce((acc, category) => {
    acc += `
      <li class="nav-item p-2 pointer category-list_item" data-id="${category._id}">
      ${category.name}
      </li>
    `;
    return acc; 
  }, '')
  const categoryList = `
    <ul class="nav nav-pills flex-column mb-auto category-list">
      ${list}
    </ul>
  `;
  container.innerHTML = categoryList;
  titleWrapper.innerHTML = `<span class="fs-4 pointer titleList category">Категории</span>`
};

// product filter 




   