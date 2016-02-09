var wrap = $("#wrap");

wrap.on("clic", function(e) {
	alert("OKKK");
  if (this.scrollTop > 147) {
    wrap.addClass("fix-search");
  } else {
    wrap.removeClass("fix-search");
  }
  
});