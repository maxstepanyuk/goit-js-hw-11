import{a as u,S as f,i as l}from"./assets/vendor-BGqwtSVv.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="https://pixabay.com/api/",g="38535962-5f658dcdecdcf7989cf195384";function y(a){const s={q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",key:g};return u.get(p,{params:s}).then(({data:e})=>e)}const c=document.querySelector(".loader"),m=document.querySelector(".gallery"),d={captionsData:"alt",captionDelay:250,className:"lightbox-custom"},h=new f(".open-modal-link",d);function b(a){const s=a.map(e=>`
      <li class="gallery-item">
        <a
          class="gallery-link open-modal-link"
          href="${e.largeImageURL}"
        >
          <img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="Photo of ${e.name} by ${e.user}"
            with="360"
            height="152"
          />
          <ul class="gallery-item-stats">
            <li class="gallery-item-stat">
              <p class="gallery-item-stat-name">Likes</p>
              <p class="gallery-item-stat-value">${e.likes}</p>
            </li>
            <li class="gallery-item-stat">
              <p class="gallery-item-stat-name">Views</p>
              <p class="gallery-item-stat-value">${e.views}</p>
            </li>
            <li class="gallery-item-stat">
              <p class="gallery-item-stat-name">Comments</p>
              <p class="gallery-item-stat-value">${e.comments}</p>
            </li>
            <li class="gallery-item-stat">
              <p class="gallery-item-stat-name">Downloads</p>
              <p class="gallery-item-stat-value">${e.downloads}</p>
            </li>
          </ul>
        </a>
      </li>`).join("");m.insertAdjacentHTML("beforeend",s),h.refresh()}function L(){m.innerHTML=""}function w(){c.classList.remove("hidden")}function S(){c.classList.add("hidden")}const v=document.querySelector(".form");v.addEventListener("submit",P);function P(a){a.preventDefault();const e=a.target.elements["search-text"].value.trim();if(e.length<=0){n("empty search","error");return}L(),w(),y(e).then(o=>{const{hits:t}=o;t.length<=0?n("Sorry, there are no images matching your search query. Please try again!","warning"):b(t)}).catch(o=>{console.log("Error on getImagesByQuery",o),n("Sorry, there was an error getting images. Please try again!","error")}).finally(()=>{S()})}function n(a,s="success"){const e={message:a,position:"topRight",timeoot:5e3};switch(s){case"success":l.success(e);break;case"error":l.error(e);break;case"warning":l.warning(e);break;case"info":l.info(e);break;default:l.error({...e,message:"invalid type of tosat"});break}}
//# sourceMappingURL=index.js.map
