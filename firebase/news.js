function news() {
    var db = firebase.firestore();
    var result = "<h1>Mitteilungen</h1>";
    db.collection("News")
        .orderBy("time", "desc")
        .limit("3")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                if (doc.data().internal == false && doc.data().draft == false) {
                    result += "<h3>" + doc.data().title + "</h3>";
                    for (var i = 0; i < doc.data().content.length; i++) {
                        result += "<p>" + doc.data().content[i] + "</p>";
                    }
                    if (doc.data().link != null) {
                        var link = doc.data().link;
                        var i = 0;
                        for (var property in link) {
                            var text = property;
                            var href = link[Object.keys(link)[i]];
                            result += "<a href='" + href + "'>" + property + "</a>";
                            i++;
                        }
                    }
                    if (doc.data().image != null) {
                        var imageRef = doc.data().image;
                        //TODO Download image
                        result += "<br><img id=image style='opacity:0'/>";
                        document.getElementById("news").innerHTML = result;
                        try {
                            var storage = firebase.storage();
                            var storageRef = storage.ref();
                            storageRef.child(imageRef)
                                .getDownloadURL()
                                .then((url) => {
                                    // `url` is the download URL for 'imageRef'
                                    var img = document.getElementById('image')
                                    img.setAttribute('src', url);
                                    img.setAttribute('style', 'opacity:1;width:80px;height:80px');
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
                        } catch (error) {
                            console.log("Error finding storage: ", error);
                            return "";
                        };
                        //downloadImage(doc.data().image, document.getElementById('image'));
                    }
                }
            });
            document.getElementById("news").innerHTML = result;
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}