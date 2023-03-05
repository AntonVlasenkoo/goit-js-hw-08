// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);



const galleryContainer = document.querySelector(".gallery");


function createImageCardMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
 <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
 </div> 
 `;
    }).join(' ');
};


const cardMarkup = createImageCardMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardMarkup)

galleryContainer.addEventListener('click', onImageClick)

function onImageClick(event) {
   
    blockStandardAction(event);


    console.log(event.target.dataset);
   if (event.target.nodeName !== "IMG") {
       return;
    };
   


const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

    instance.show();

    galleryContainer.addEventListener('keydown', (event) => {
        if (event.code === "Escape") {
        instance.close()
    }
    });


};

function blockStandardAction(event) {
    event.preventDefault();
};



