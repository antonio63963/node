// const socket = io();

const contentContainer = document.querySelector('.content-container'),
  container = document.querySelector('.container-side-content'),
  categoryList = document.querySelector('.category-list'),
  titleWrapper = document.querySelector('.title-wrapper'),
  searchFilter = document.querySelector('.search'),
  addToCart = document.querySelector('.add-to-cart');
let groupTitle = null
// HANDLERS
//  get group by category
const categoryListHandler = async (e) => {
  if(!e.target.classList.contains('category-list_item')) return false;
  const title = e.target.textContent;
  const { id } = e.target.dataset;
  const { data } = await axios.post('/group', { id });
  console.log(data);
  titleWrapper.innerHTML += `<span class="categoryTitle pointer">/${title}</span>`;
  buildGroupList(data);
  buildTitle('группы', id);
};
const onGroupHandler = async (e) => {
  if(!e.target.classList.contains('group-list_item')) return false;
  const title = e.target.textContent;
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
  console.log(id);
  buildTitle(title, id, type);
  const form = document.forms.filter;
  form.addEventListener('submit', async (e)=> {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { data } = await axios.post('/filterData', formData);
    console.log('filterData', data);
  });

  document.querySelector('.groupTitle').dataset.type = type;
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
  // buildTitle('группы');
};

function buildTitle(addTitle, id, type) {
  const newTitle = `
  <span class=" pointer titleList groupTitle" data-id="${id}">/${addTitle}</span>
  `;
  titleWrapper.innerHTML += newTitle;
  groupTitle = document.querySelector(`.${type}`);
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
  if(e.target.dataset.type === 'laptop') {
    document.querySelector('.categoryTitle').remove();
    const { id } = e.target.dataset;
    const { data } = await axios.post('/group', { id });
    console.log(data);
    titleWrapper.innerHTML = `<span class="fs-5 titleList category pointer">Категории</span>`;
    buildGroupList(data);
    buildTitle('группы', id);
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
        <input name="brand" class="brand-check-input" type="checkbox" value="${brand._id}" id="flexCheckDefault">
        <label class="brand-check-label" for="flexCheckDefault">
          ${brand.name}
        </label>
      </div>
    `;
    return acc;
  }, '')
  return list += `<hr>`;
};

//add to cart

contentContainer.addEventListener('click', (e) => {
  if(e.target.classList.contains('add-to-cart')) {
    const card = e.target.closest('.card');
    
    const brand = card.querySelector('.product-brand').textContent;
    const name = card.querySelector('.product-name').textContent;
    const price = card.querySelector('.product-price').textContent;
    const {id} = e.target.dataset;
    const toLocalSrorage = {
      brand, name, price, id, amount: 
    };
    console.log(price);
  }
})



   