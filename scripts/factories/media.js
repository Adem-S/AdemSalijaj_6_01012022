function mediaFactory(data) {
  let type = data.video ? "video" : "image";

  function createElement() {
    let element;
    if (type == "image") {
      element = `<img src=assets/media/${data.photographerId}/${data.image} alt="${data.title}" data-id=${data.id}></img>`;
    } else if (type == "video") {
      element = `<video src=assets/media/${data.photographerId}/${data.video} alt="${data.title}" data-id=${data.id}></video>`;
    }

    const li = `
              <li class="media" data-date=${data.date} data-likes=${data.likes} data-title=${data.title}>
                <a href="#" class="media__link" onclick="openLightbox('${data.id}')">
                  ${element}
                </a>
                <div class="media__info">
                  <p>${data.title}</p>
                  <div class="like" onclick="likeEvent(this)" >
                    <p>${data.likes}</p>
                    <img src="assets/icons/heart.svg" alt="coeur"/>
                  </div>
                </div>
              </li>
            `;
    return li;
  }
  return { type, createElement };
}
