function backgroundColor(e, component){
	document.getElementById(component).style.backgroundColor = e.value;
}

function textColor(e, component){
	document.getElementById(component).style.color = e.value;
}

function fontSize(e, component){
	document.getElementById(component).style.fontSize = e.options[e.selectedIndex].value.toString() + 'px';
}

function fontFamily(e, component){
	document.getElementById(component).style.fontFamily = e.options[e.selectedIndex].value;
}

function previewImage(e, control, component)	{
 	var ctrlImg = document.getElementById(control),
 		cmpImg = document.getElementById(component);

   	if(ctrlImg && cmpImg){
 	    var files = e.target.files[0],
 	    	reader = new FileReader();

 		reader.onload = (function(theFile) {
 		    var image = new Image();
 		    image.src = theFile.target.result;

 		    image.onload = function() {
 		        if(this.width == cmpImg.width && this.height == cmpImg.height){
 					ctrlImg.src = this.src;
 	 				cmpImg.src = this.src;
 		        }else{
 		        	alert("Sorry, " + e.target.name + "'s width and height not as expected.");
 		        }
 		    }
 		})
 		reader.readAsDataURL(files);
   	} else {
 		alert("Sorry, Please contact support. error code: EPM");
   	}
}