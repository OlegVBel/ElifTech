const root = document.getElementById('root');
const thumbnailsGroup = document.querySelector('.thumbnails-wrapper');

root.innerHTML = thumbnailsPage(root);
window.location.hash = "#thumbnails"

function thumbnailsPage(rootEl) {
  rootEl.innerHTML = ``; // clear the page
  const thumbnails = document.createElement('div');
  thumbnails.classList.add('thumbnails');

  const thumbnailsTitle = document.createElement('h1');
  thumbnailsTitle.classList.add('thumbnails__title');
  thumbnailsTitle.textContent = 'Most popular tanks';

  const thumbnailsWrapper = document.createElement('div');
  thumbnailsWrapper.classList.add('thumbnails-wrapper');

  let fragment = document.createDocumentFragment();
  tanks.forEach(tank => {
    const thumbnail = document.createElement('a');
    thumbnail.classList.add('thumbnail');
    thumbnail.classList.add('tooltip');
    thumbnail.setAttribute('href', `#${getTankNameFromImg(tank.preview)}`);
    const tooltip = document.createElement('span');
    tooltip.classList.add('tooltip-text');
    tooltip.textContent = `Click to details`;

    const thumbnailContent = document.createElement('div');
    thumbnailContent.classList.add('thumbnail__content');
  
    const thumbnailImage = document.createElement('img');
    thumbnailImage.classList.add('thumbnail__img');
    thumbnailImage.src = `${tank.preview}`;
    thumbnailImage.setAttribute('alt', `${tank.model}`);
    const thumbnailInfo = document.createElement('div');
    thumbnailInfo.classList.add('thumbnail__info');

    const thumbnailInfoFlag = document.createElement('img');
    thumbnailInfoFlag.classList.add('thumbnail__info-flag');
    thumbnailInfoFlag.src = `${tank.country_image}`;
    thumbnailInfoFlag.setAttribute('alt', `${tank.country}`);
    const thumbnailInfoLevel = document.createElement('p');
    thumbnailInfoLevel.classList.add('thumbnail__info-level');
    thumbnailInfoLevel.innerText = `${tank.level}`;
    const thumbnailInfoName = document.createElement('p');
    thumbnailInfoName.classList.add('thumbnail__info-name');
    thumbnailInfoName.innerText = `${tank.model}`;

    thumbnailInfo.appendChild(thumbnailInfoFlag);
    thumbnailInfo.appendChild(thumbnailInfoLevel);
    thumbnailInfo.appendChild(thumbnailInfoName);

    thumbnailContent.appendChild(thumbnailImage);
    thumbnailContent.appendChild(thumbnailInfo);

    thumbnail.appendChild(tooltip);
    thumbnail.appendChild(thumbnailContent);
    fragment.appendChild(thumbnail);
  });

  thumbnailsWrapper.appendChild(fragment);
  thumbnails.appendChild(thumbnailsTitle);
  thumbnails.appendChild(thumbnailsWrapper);
  rootEl.appendChild(thumbnails);
  return rootEl.innerHTML;
}
function detailsPage(rootEl, tank) {
  return rootEl.innerHTML = `
  <div class="tank-details">
      <div class="tank__title">
        <div class="tank__wrapper-flag tooltip">
          <img src="${tank.country_image}" alt="${tank.country}" class="tank__title-flag tooltip__flag">
          <span class="tooltip-text">${tank.country}</span>
        </div>
        <h1 class="tank__title-name">${tank.model}</h1>
        <p class="tank__title-level">(level ${tank.level})</p>
      </div>
      <div class="tank__info">
        <div class="tank__info-preview">
          <div class="tank__info-title">Preview</div>
          <img src="${tank.preview}" alt="${tank.model}" class="tank__info-img">
        </div>
        <div class="tank__info-prop">
          <div class="tank__info-title">Characteristic</div>
          <table class="tank-table">
            <tr class="tank-table__row">
              <td class="tank-table__char">damage</td>
              <td class="tank-table__item">${tank.details.damage}</td>
            </tr>
            <tr class="tank-table__row">
              <td class="tank-table__char">breoning</td>
              <td class="tank-table__item">${tank.details.breoning}</td>
            </tr>
            <tr class="tank-table__row">
              <td class="tank-table__char">attack speed</td>
              <td class="tank-table__item">${tank.details.attack_speed}</td>
            </tr>
            <tr class="tank-table__row">
              <td class="tank-table__char">time of targeting</td>
              <td class="tank-table__item">${tank.details.time_of_targeting}</td>
            </tr>
            <tr class="tank-table__row">
              <td class="tank-table__char">ammunition</td>
              <td class="tank-table__item">${tank.details.ammunition}</td>
            </tr>
          </table>          
        </div>
      </div>
      <a href="#thumbnails" class="tank__back-link"><span>Back to list view</span></a>
    </div>
  `;
}
function getTankNameFromImg(imgStr){
  return imgStr.slice((imgStr.lastIndexOf('/'))+1, imgStr.lastIndexOf('.'));
}
function getTankWithName(name){
  console.log(name);
  const res = tanks.find(tank => name == `#${getTankNameFromImg(tank.preview)}`);
  console.log(res);
  return res;
}

window.addEventListener("hashchange", () =>{
  if(window.location.hash === "#thumbnails"){
    root.innerHTML = thumbnailsPage(root);
  } else{
    root.innerHTML = detailsPage(root, getTankWithName(window.location.hash));
  }
})

