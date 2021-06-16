var db = firebase.firestore();
var SemesterID = "316";

function colorNav(id) {
    var nav_ids = ["nav_home", "nav_program", "nav_board", "nav_news", "nav_about_us",
        "nav_rooms", "nav_history", "nav_fraternity_wuerzburg", "nav_fraternity_germany"
    ];
    var size = nav_ids.length;
    for (var i = 0; i < size; i++) {
        var color = "";
        if (id != nav_ids[i]) {
            color = "white";
        } else {
            color = "red";
        }
        document.getElementById(nav_ids[i]).style.color = color;
    }
}
greeting(SemesterID);
news();
board(SemesterID, "Aktive");