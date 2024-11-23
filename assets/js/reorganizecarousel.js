$(document).ready(function () {
  if (screen.width < 990) {
    console.log("hi");
    var indicators = $("#carouselActivities")[0].children[0];
    var innercarousel = $("#carouselActivities")[0].children[1];

    var blockcounts = innercarousel.children.length;
    var cardlist = [];
    for (var i = 0; i < blockcounts; i++) {
      var innerblock = innercarousel.children[i].children[0];
      for (var j = 0; j < innerblock.children.length; j++) {
        cardlist.push(innerblock.children[j]);
        console.log(innerblock.children[j]);
      }
    }

    console.log(cardlist.length);

    indicators.innerHTML = "";
    for (var i = 0; i < cardlist.length; i++) {
      var lielement = document.createElement("li");
      lielement.setAttribute("data-target", "#carouselActivities");
      lielement.setAttribute("data-slide-to", i + "");
      if (i == 0) {
        lielement.setAttribute("class", "active");
      }
      indicators.appendChild(lielement);
    }

    innercarousel.innerHTML = "";
    for (var i = 0; i < cardlist.length; i++) {
      var carouselItem = document.createElement("div");
      if (i == 0) {
        carouselItem.setAttribute("class", "carousel-item active");
      } else {
        carouselItem.setAttribute("class", "carousel-item");
      }
      var row = document.createElement("div");
      row.setAttribute("class", "row");
      var col = document.createElement("div");
      /*col.setAttribute("class", "col-md-4 col-sm-12");
      col.appendChild(cardlist[i]);*/
      var spacecol = document.createElement("div");
      spacecol.setAttribute("class", "col-sm-2")
      row.appendChild(spacecol)
      cardlist[i].setAttribute("class", "col-sm-8");
      cardlist[i].setAttribute("style", "text-align:center")
      row.appendChild(cardlist[i]);
      //row.appendChild(col);
      carouselItem.appendChild(row);
      innercarousel.appendChild(carouselItem);
    }
  }
});
