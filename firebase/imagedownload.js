function downloadImage(imageRef, image){
	try{
	var storage = firebase.storage();
	var storageRef = storage.ref();
	storageRef.child(imageRef)
		.getDownloadURL()
		.then((url) => {
		// `url` is the download URL for 'imageRef'
		image.setAttribute('src', url);
		image.setAttribute('style', 'opacity:1');
		//return image;
	  })
	  .catch((error) => {
		// Handle any errors
        console.log("Error getting pictures: ", error);
		switch (error.code) {
		case 'storage/object-not-found':
			console.log("File doesn't exist");
		break;
		case 'storage/unauthorized':
			console.log("User doesn't have permission to access the object");
		break;
		case 'storage/canceled':
			console.log("User canceled the upload");
		break;
		case 'storage/unknown':
			console.log("Unknown error occurred, inspect the server response");
		break;
		}
		return "";
	  });
	} catch(error) {
        console.log("Error finding storage: ", error);
		return "";
    };
}




