let slide = document.getElementsByClassName("supermarket")[0]
let slide2 = document.getElementsByClassName("supermarket1")[0]
let isSwipingRight = false
/********************************Image slider ***************************** */

function changeBackGround() {
  if (isSwipingRight == true) {
    slide.style.transform = "translateX(0)"
    slide2.style.transform = "translateX(0)"
    isSwipingRight = false
  } else {
    slide.style.transform = "translateX(-100%)"
    slide2.style.transform = "translateX(-100%)"
    isSwipingRight = true
  }
}
setInterval(changeBackGround, 3000)

/***************************Item Horizental Scrolling "Featured categories"************************************************* */

let list_elements = document.getElementsByClassName("food")
const list_array = Array.from(list_elements)
let i = 0
function swipeRight() {
  if (i == 0) {
    document.querySelector("#right").disabled = true
    return 0
  }

  list_array.forEach((e) => {
    if (e.style.transform == "translateX(-100%)") {
      e.style.transform = "translateX(0)"
    } else {
      e.style.transform = e.style.transform + "translateX(+100%)"
    }
  })
  i--
}
function swipeLeft() {
  if (i == list_array.length - 4) {
    document.querySelector("#left").disabled = true
    return 0
  }
  list_array.forEach((e) => {
    if (e.style.transform == "translateX(100%)") {
      e.style.transform = "translateX(0)"
    } else {
      e.style.transform = e.style.transform + "translateX(-100%)"
    }
  })
  i++
}

const svg = document.getElementById("appstore")

// Add an onclick event listener
svg.onclick = function () {
  // Open the specified URL in a new tab
  window.open("http://www.google.com", "_blank")
  window.open("https://www.apple.com", "_blank")
  window.VideoColorSpace("")
}

//************************************Drop Down Menus********************/

function addDropDownHover(dropMenuId, HoverableMenuId) {
  const dropMenuEL = document.getElementById(dropMenuId)
  const hoverableMenuEL = document.getElementById(HoverableMenuId)

  hoverableMenuEL.addEventListener("mouseover", function () {
    console.log("mouse over")
    dropMenuEL.style.display = "block"
    hoverableMenuEL.style.color = "#0aad0a"
  })
  hoverableMenuEL.addEventListener("mouseout", function () {
    console.log("mouse out")
    dropMenuEL.style.display = "none"
    hoverableMenuEL.style.color = "#000000"
  })
}

addDropDownHover("dropMenu", "hoverableMenu")
addDropDownHover("dropMenu2", "hoverableMenu2") // pass the arguments as strings not as variables that's the Problem si onon kol chy cv !
addDropDownHover("dropMenu3", "hoverableMenu3")
addDropDownHover("dropMenu4", "hoverableMenu4")
addDropDownHover("dropMenu5", "hoverableMenu5")
addDropDownHover("dropMenu6", "hoverableMenu6")

//************************************Side Bar Open And Cloase functions********************/
const bagLogo = document.getElementById("bag-logo")
const SidebarOverlayMenu = document.getElementById("sideBarMenu")
const closeSideBar = document.getElementById("sideBarCloseButton")
const overLayShadow = document.getElementById("overLayShadow")

SidebarOverlayMenu.style.transform = "translateX(100%)"

bagLogo.addEventListener("click", function () {
  SidebarOverlayMenu.style.transform = "translateX(0)"
  SidebarOverlayMenu.style.transition = "transform 0.5s ease"
  document.body.style.overflow = "hidden"
  overLayShadow.style.zIndex = "68"
  overLayShadow.style.opacity = "0.7"
})

closeSideBar.addEventListener("click", function () {
  SidebarOverlayMenu.style.transform = "translateX(+100%)"
  SidebarOverlayMenu.style.transition = "transform 0.5s ease"
  document.body.style.overflow = "visible"
  overLayShadow.style.zIndex = "-500"
  overLayShadow.style.opacity = "0"
})

overLayShadow.addEventListener("click", function () {
  SidebarOverlayMenu.style.transform = "translateX(+100%)"
  SidebarOverlayMenu.style.transition = "transform 0.5s ease"
  document.body.style.overflow = "visible"
  overLayShadow.style.zIndex = "-500"
  overLayShadow.style.opacity = "0"
  overLayShadow.style.opacity= "0"
  SidebarOverlayMenu.scrollTo.arguments(this.tabIndex)
  SidebarOverlayMenu.scrollTop.toPrecision(i)
 overLayShadow.style.scrollBehavior.replace(i)
 overLayShadow.DOCUMENT_NODE

})

// localStorage.setItem("MyFutureWife", "nympho")
// const wify = localStorage.getItem("MyFutureWife")
// console.log(wify)
// localStorage.removeItem("MyFutureWife")

// get products from localstorage ******************************************************* nedhir solution*********************************************
// const localStorgeBtn = document.getElementById("additem")
// const gettingTheProdcuts = localStorage.getItem("products")
// let productsArray = JSON.parse(gettingTheProdcuts)
// if (productsArray == null) {
//   productsArray = []
// }

// const productItemTemplate = `<div class="shopCartItem">
// <div class="shopItemProperty">
//   <img
//     class="shopItemImage"
//     src="Assets/images/product-img-1.jpg"
//     alt=""
//   />
//   <div class="sideBarItemProperties">
//     <div class="cardtitle itemTitle">
//       Haldiram's Sev Bhujia
//     </div>
//     <div class="cardtext itemProperty">.98 / lb</div>
//     <div class="removeSideBarItem">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="14"
//         height="14"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         stroke-width="2"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         class="feather feather-trash-2 text-success"
//       >
//         <polyline points="3 6 5 6 21 6"></polyline>
//         <path
//           d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
//         ></path>
//         <line x1="10" y1="11" x2="10" y2="17"></line>
//         <line x1="14" y1="11" x2="14" y2="17"></line>
//       </svg>
//       <div class="cardtext">Remove</div>
//     </div>
//   </div>
// </div>
// <div class="sideBarItemSpinner">
//   <div class="buttonMinus">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="10"
//       height="10"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="rgb(92, 108, 117)"
//       stroke-width="2.5"
//       stroke-linecap="round"
//       stroke-linejoin="round"
//     >
//       <line x1="5" y1="12" x2="19" y2="12"></line>
//     </svg>
//   </div>
//   <div class="itemUpDown">
//     <div class="itemUp">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="10"
//         height="10"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="rgb(92, 108, 117)"
//         stroke-width="2.5"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       >
//         <path d="M18 15l-6-6-6 6" />
//       </svg>
//     </div>
//     <div class="itemDown">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="10"
//         height="10"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="rgb(92, 108, 117)"
//         stroke-width="2.5"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       >
//         <path d="M6 9l6 6 6-6" />
//       </svg>
//     </div>
//   </div>
//   <div class="buttonPlus">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="10"
//       height="10"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="rgb(92, 108, 117)"
//       stroke-width="2.5"
//       stroke-linecap="round"
//       stroke-linejoin="round"
//     >
//       <line x1="12" y1="5" x2="12" y2="19"></line>
//       <line x1="5" y1="12" x2="19" y2="12"></line>
//     </svg>
//   </div>
// </div>
// <div class="cardtitle">$5.00</div>
// </div>`

// for (let i = 0; i < productsArray.length; i++) {
//   const productsContainer = document.getElementById("shopCartItemsContainer")
//   productsContainer.innerHTML += productItemTemplate
// }

// function saveProduct(prodname) {
//   if (productsArray == null) {
//     productsArray = []
//   }
//   productsArray.push(prodname)
//   localStorage.setItem("products", JSON.stringify(productsArray))
//   console.log("stringified")
//   const productsContainer = document.getElementById("shopCartItemsContainer")
//   productsContainer.innerHTML += productItemTemplate
// }

//onclick="saveProduct('Haldiram\'s Sev Bhujia')" on click method

const additem = document.getElementById("additem")

let productsArray = []

function addItemDetails(title, imgScr) {
  const productObject = { title, imgScr }
  productsArray.push(productObject)
  console.log(productsArray[0].title)
  console.log(productsArray[0].imgScr)
}

additem.addEventListener("click", function () {
  const productDiv = document.getElementById("firstCardItem")
  const imgSrc = new URL(productDiv.querySelector(".productimage").src).pathname
  const title = productDiv.querySelector(".cardtext").textContent
  

  const productItemTemplate = `<div class="shopCartItem">
<div class="shopItemProperty">
  <img
    class="shopItemImage"
    src="${imgSrc}"
    alt=""
  />
  <div class="sideBarItemProperties">
    <div class="cardtitle itemTitle">
      ${title}
    </div>
    <div class="cardtext itemProperty">.98 / lb</div>
    <div class="removeSideBarItem">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-trash-2 text-success"
      >
        <polyline points="3 6 5 6 21 6"></polyline>
        <path
          d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
        ></path>
        <line x1="10" y1="11" x2="10" y2="17"></line>
        <line x1="14" y1="11" x2="14" y2="17"></line>
      </svg>
      <div class="cardtext">Remove</div>
    </div>
  </div>
</div>
<div class="sideBarItemSpinner">
  <div class="buttonMinus">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgb(92, 108, 117)"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  </div>
  <div class="itemUpDown">
    <div class="itemUp">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgb(92, 108, 117)"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </div>
    <div class="itemDown">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgb(92, 108, 117)"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  </div>
  <div class="buttonPlus">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgb(92, 108, 117)"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  </div>
</div>
<div class="cardtitle">$5.00</div>
</div>`

  const productsContainer = document.getElementById("shopCartItemsContainer")
  productsContainer.innerHTML += productItemTemplate
})
