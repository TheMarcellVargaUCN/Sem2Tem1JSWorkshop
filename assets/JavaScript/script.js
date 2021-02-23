function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

$('div').magnificPopup({
  type: 'image',
  delegate: 'a',

  gallery: { enabled: true },
  callbacks: {

    buildControls: function () {
      // re-appends controls inside the main container
      this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
    }

  }
});