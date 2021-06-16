function board(semester, kind) {
    if (semester != undefined && kind != undefined) {
        let kinds = ["Aktive", "Alte Herren"];
        let design = document.getElementById("chargen");
        if (typeof semester != 'undefined') {
            design.innerHTML += "<h1>Chargen im " + semester + "</h1>";
        } else {
            design.innerHTML += "<h1>Aktivenchargen</h1>"
        }
        design.innerHTML += "<h3>I do work now</h3>";
        let oneCharge = '<table><tr><td rowspan=8 id=chargen_image style="width: 150px; border: 1px; border-color: black; border-style: solid;">Image</td></tr><tr><td id=rank><u><b>Senior</b></u></h3></td></tr><tr><td id=name><b>Felix Wenzler</b></td></tr><tr><td id=major><i>stud. aer-inf.</i></td></tr><tr><td id=pob><i>aus Reutlingen</i></td></tr><tr><td id=address>Landsteinestraße 3<br>97074 Würzburg</td></tr><tr><td id=mobile>+49 160 3759140</td></tr><tr><td id=mail>senior@walhalla-wuerzburg.de</td></tr></table>';
    }
}