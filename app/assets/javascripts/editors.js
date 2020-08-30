function preview_image(event, id1, id2)	{
 	var ctrlImg = document.getElementById(id1),
 		cmpImg = document.getElementById(id2);

   	if(ctrlImg && cmpImg){
 	    var files = event.target.files[0],
 	    	reader = new FileReader();

 		reader.onload = (function(theFile) {
 		    var image = new Image();
 		    image.src = theFile.target.result;

 		    image.onload = function() {
 		        if(this.width == cmpImg.width && this.height == cmpImg.height){
 					ctrlImg.src = this.src;
 	 				cmpImg.src = this.src;
 		        }else{
 		        	alert("Sorry, " + event.target.name + "'s width and height not as expected.");
 		        }
 		    }
 		})
 		reader.readAsDataURL(files);
   	} else {
 		alert("Sorry, Please contact support. error code: EPM");
   	}
}