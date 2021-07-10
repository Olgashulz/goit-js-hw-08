const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const refs = {
  galleryContainer: document.querySelector('.js-gallery'),
  modal: document.querySelector('.lightbox'),
  backdrop: document.querySelector('.lightbox__overlay'),
  modalImage: document.querySelector('.lightbox__image'),
  closeBtn: document.querySelector('.lightbox__button')  
}

//console.log(refs.closeBtn);

const cardsMarkup = createCards(galleryItems);
refs.galleryContainer.insertAdjacentHTML('afterbegin', cardsMarkup);

refs.galleryContainer.addEventListener('click', openModal);
refs.closeBtn.addEventListener('click', closeModal);
refs.backdrop.addEventListener('click', closeBackdrop);

// let altOnCurrentPicture = "";

function closeBackdrop(event) {

  if (event.target === event.currentTarget) {
    closeModal(event);
    // console.log("backdropOverlay")
  }

  // console.log(event.target);
  // console.log(event.currentTarget)
}

function openModal(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  // console.log(event.target);
  // console.log(event.srcElement.alt);

  event.preventDefault();
  addClassListIsOpen();

  const bigSizePicture = event.target.dataset.source;
  const altOnCurrentPicture = event.srcElement.alt;
  
  addBigSizeSorce(bigSizePicture, altOnCurrentPicture);
  
  window.addEventListener('keydown', closeEscModal);
  window.addEventListener('keydown', slidePictures);
  // console.log(altOnCurrentPicture);
  // return altOnCurrentPicture;

}


function slidePictures() {
  // console.log(event);
  // console.log(event.code);
  const ARROW_RIGHT = 'ArrowRight';
  const ARROW_LEFT = 'ArrowLeft';

  if (event.code === ARROW_RIGHT) {
    console.log("в право");
    return slidePicturesToRight()
  }

  console.log("лево")
  return slidePicturesToLeft()
}

// const findImageIndex = () => {
//   const src = document.querySelector('.lightbox__image').src;
  
//   return images.findIndex(image => image.original === src);
// };

// const showNext = () => {
//   let imageIndex = findImageIndex();
//   let nextImageIndex = imageIndex + 1;
//   nextImageIndex >= maxLength ? (imageIndex = 0) : imageIndex++;
//   changeImg(imageIndex);
// };
// const changeImg = imageIndex => {
//   const elem = images.find(function (value, index) {
//     if (imageIndex === index) return value;
//   });
//   document.querySelector('.lightbox__image').src = elem.original;
// };




// function slidePicturesToRight() {
//   let newArr = galleryItems.map(item => item)
//   let currentUrl = event.target.href;
//   //let currentUrl = event.srcElement.href;
//   console.log(event)
//   console.log(event.srcElement.href);
//   console.log(currentUrl);


  
//   for (let i = 0; i < newArr.length; i++){
//     if (newArr[i].original === currentUrl) {
//       addBigSizeSorce(newArr[i + 1].original, newArr[i + 1].description);
//       currentUrl = newArr[i + 1].original;
//       console.log(currentUrl);
//       console.log(event.srcElement.href);
//       return currentUrl;
//     }
//   }   
// }


function slidePicturesToRight() {
  const src = document.querySelector('.lightbox__image').src;
  let newArr = galleryItems.map(item => item)
 
  for (let i = 0; i < newArr.length -1; i++){
    if (newArr[i].original === src) {
      console.log(i)
    
      return addBigSizeSorce(newArr[i + 1].original, newArr[i + 1].description);

    }
  }   
}

function slidePicturesToLeft() {
  const src = document.querySelector('.lightbox__image').src;
  let newArr = galleryItems.map(item => item)

  for (let i = 0; i < newArr.length - 1; i++) {
    if (newArr[i].original === src) {
      console.log(i)

      return addBigSizeSorce(newArr[i - 1].original, newArr[i - 1].description);

    }
  }
 }


// const findImageIndex = () => {
//   const src = document.querySelector('.lightbox__image').src;

//   return images.findIndex(image => image.original === src);
// };

// const showNext = () => {
//   let imageIndex = findImageIndex();
//   let nextImageIndex = imageIndex + 1;
//   nextImageIndex >= maxLength ? (imageIndex = 0) : imageIndex++;
//   changeImg(imageIndex);
// };
// const changeImg = imageIndex => {
//   const elem = images.find(function (value, index) {
//     if (imageIndex === index) return value;
//   });
//   document.querySelector('.lightbox__image').src = elem.original;
// };

function closeEscModal(event) {
   //console.log(event);
  const ESC_KEY_CODE = 'Escape';
  if (event.code === ESC_KEY_CODE) {
    closeModal();
  }
}

function addBigSizeSorce(src, alt) {
  refs.modalImage.src = src;
  refs.modalImage.alt = alt;
}

function addClassListIsOpen() {
  refs.modal.classList.add('is-open');
}

function closeModal(event) {
  refs.modal.classList.remove('is-open');
  window.removeEventListener('keydown', closeModal);
  refs.modalImage.src = "";
  refs.modalImage.alt = "";
}

function createCards(galleryItems) {

  return galleryItems 
    .map(item => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
    </a>
    </li>`;
    }).join('');
  
}







