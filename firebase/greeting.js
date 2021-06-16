function greeting(SemesterID) {
    var db = firebase.firestore();
    db.collection("Semester").doc(SemesterID).onSnapshot((doc) => {
        if (doc.exists) {
            var size = doc.data().greeting.length - 1;
            var greeting = doc.data().greeting;
            var result = "";
            let i = 0;

            for (i = 0; i < size; i++) {
                result += "<p>" + greeting[i] + "</p>"
            }
            result += "<table><tr><td>" +
                greeting[i].Aktivensenior +
                "</td><td rowspan=2><img id=greetingImage height='80' width='50'></td><td>" +
                greeting[i].Philistersenior +
                "</td></tr><tr><td>Aktivensenior</td><td>Philistersenior</td></table>";

            document.getElementById("greeting").innerHTML = result;
            //add smal logo to greetingImage
            downloadImage('shields/zirkel_walhalla.png', document.getElementById('greetingImage'));
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    });
}