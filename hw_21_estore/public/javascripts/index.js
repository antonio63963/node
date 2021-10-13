// const socket = io();

const contentContainer = document.querySelector('.content-container'),
  cartCount = document.querySelector('.cartCount'),
  goToStore = document.querySelector('.goToStore'),
  storage = document.querySelector('.storage'),
  storageContent = document.querySelector('.storage-content'),
  storageBuy = document.querySelector('.storage-buy')
  closeStorage = document.querySelector('.closeStorage'),
  container = document.querySelector('.container-side-content'),
  categoryList = document.querySelector('.category-list'),
  titleWrapper = document.querySelector('.title-wrapper'),
  searchFilter = document.querySelector('.search'),
  addToCart = document.querySelector('.add-to-cart'),
  searchForm = document.forms.searchForm;
let groupTitle = null


// get product's amount from localStorage
cartCount.textContent = howManyProducts();

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

function getCardData(e) {
  const card = e.target.closest('.card');
  const brand = card.querySelector('.product-brand').textContent;
  const name = card.querySelector('.product-name').textContent;
  const price = card.querySelector('.product-price').textContent;
  const img = card.querySelector('.card-img-top').src;
  const { id } = card.dataset; 
  return {
    brand, name, price, id, img
  };
}
// show product details
function showProductPage(product) {
  const page = `
    <div class="product-page" data-id="${product.id}">
      <h1>${product.name}</h1>
      <img class="card-img-top w-50" src="${product.img}">
      <span>${product.price}</span>
      <h3>Оставить отзыв</h3>
      <textarea id="product-recall"></textarea>
      <button class="btn btn-primary send-recall">Send recall</button>
    </div>
  `;
  contentContainer.innerHTML = page;
  const sendRecall = document.querySelector('.send-recall');
  sendRecall.addEventListener('click', async() => {
    const user = document.querySelector('.userRegistration') || null;
    const recallText = document.querySelector('#product-recall').value;
    const productPage = document.querySelector('.product-page');
    const recallData = {
      user: user.dataset.id,
      text: recallText,
      product_id: productPage.dataset.id
    };
    const { data } = await axios.post('/recall', recallData);
    console.log('recall::::', data);
  })
  
}
contentContainer.addEventListener('click', async (e) => {
  if(e.target.classList.contains('add-to-cart')) {
    const toLocalStorage = getCardData(e);
    addToStore(toLocalStorage);
    +cartCount.textContent++;
  }
  if(e.target.classList.contains('card')) {
    const { id } = e.target.dataset;
    const { data } = await axios.get(`/product/${ id }`);
  }
});

// Storages 
goToStore.addEventListener('click', (e) => {
  console.log('Message');
  storage.classList.remove('d-none');
  const store = getStore();
  store.forEach(( prod, ind ) => {
    buildCartRow(prod, storageContent, ind);
  })
});
closeStorage.addEventListener('click', (e) => {
  storage.classList.add('d-none');
});

storage.addEventListener('click', (e) => {
  const target = e.target;
  if(target.classList.contains('storage-buy') || target.classList.contains('increase') || target.classList.contains('reduce')) return false;

  const { id } = target.dataset;
  const productRow = e.target.closest(`${id}`)
  console.log(productRow);
  console.log('wwwww');


})

function buildCartRow(product, container, ind) {
  const { name, price, amount, id } = product;
  const row = `
    <tr class="${id}">
      <th scope="row" class="text-center">${ind + 1}</th>
      <td class="text-center">${ name }</td>
      <td class="text-center">${ price }</td>
      <td class="text-center">${ amount }</td>
      <td class="text-center">${ price * amount }</td>
      <td class="text-center">
          <div class="btn-group me-2" role="group" aria-label="First group">
              <button type="button" class="btn btn-outline-secondary increase" data-id="${id}">+</button>
              <button type="button" class="btn btn-outline-secondary reduce">-</button>
          </div>
      </td>
    </tr>
  `;
  container.innerHTML += row;
};

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const searchData = new FormData(e.target);
  console.log(searchData.getAll('search'));
  const { data } = await axios.post('/search', searchData);
  console.log(data);
})




   