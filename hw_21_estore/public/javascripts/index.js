// const socket = io();

const container = document.querySelector('.container-side-content'),
  categoryList = document.querySelector('.category-list'),
  titleWrapper = document.querySelector('.title-wrapper'),
  searchFilter = document.querySelector('.search');
let groupTitle = null
// HANDLERS
//  get group by category
const categoryListHandler = async (e) => {
  if(!e.target.classList.contains('category-list_item')) return false;
  const { id } = e.target.dataset;
  const { data } = await axios.post('/group', { id });
  console.log(data);
  buildGroupList(data)
};
const onGroupHandler = async (e) => {
  if(!e.target.classList.contains('group-list_item')) return false;
  const { id, type } = e.target.dataset;
  const{ data } = await axios.post('/getFilter', { id, type });
  console.log('FILTER: +++', data);
  const { brands, filter } = data;
  const brandList = buildBrandList(brands);
  const filterForm = `
    <form name="filter">
    <h5>Выбрать бренд</h5>
      ${brandList}
      ${filter}
      <button type="submit" class="btn btn-primary submitFilter">Submit</button>
    </form>
  `;
  container.innerHTML = filterForm;
  const addTitle = brands[0].group[0].name;
  buildTitle(addTitle);
  const form = document.forms.filter;
  form.addEventListener('submit', async (e)=> {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { data } = await axios.post('/filterData', formData);
    console.log(data);
  });
}

categoryList.addEventListener('click', categoryListHandler);

function buildGroupList(data) {
  const list = data.reduce((acc, group) => {
    acc += `
      <li class="nav-item p-2 pointer group-list_item" data-type="${group.type}" data-id="${group._id}">
      ${group.name}
      </li>
    `;
    return acc; 
  }, '')
  const groupHTML = `
    <ul class="nav nav-pills flex-column mb-auto group-list">
      ${list}
    </ul>
  `;

  container.innerHTML = groupHTML;
  const groupList = document.querySelector('.group-list');
  groupList.addEventListener('click', onGroupHandler);
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

function buildBrandList(brands) {
  let list = brands.reduce((acc, brand) => {
    acc += `
      <div class="brand-check">
        <input name="${brand.name}" class="brand-check-input" type="checkbox" value="${brand._id}" id="flexCheckDefault">
        <label class="brand-check-label" for="flexCheckDefault">
          ${brand.name}
        </label>
      </div>
    `;
    return acc;
  }, '')
  return list += `<hr>`;
};

function getProductFilter(product_id) {

}



   