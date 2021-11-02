
const popupFromMessage = (mesage) => {
  const html = `
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>ERROR!</strong> ${mesage}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
};

function renderPage(payload) {
  const { html, head, scripts } = payload.component;
  const headPage = document.querySelector('head');
  const body = document.querySelector('body');
  headPage.innerHTML = head;
  deleteAllScripts();
  scripts.forEach(script => createScript(script))

  body.innerHTML = html;
};

const deleteAllScripts = () => {
  const scripts = document.querySelectorAll('script');
  scripts.forEach( script => script.remove())
};
const createScript = (path) => {
  const script = document.createElement('script');
  script.src = path;
  document.querySelector('body').appendChild(script);
};