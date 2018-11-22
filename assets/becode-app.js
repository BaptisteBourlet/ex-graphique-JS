/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 

Your name :     
Date :  
Contact information : 

What does this script do ? 
...

*/

// Your scripting goes here...

  
let divGraphique1 = document.createElement("div");
        let x = document.getElementById("mw-content-text"); //ligne 616 parent le plus proche du tableau

        let table1 = document.getElementById("table1");
        x.insertBefore(divGraphique1,table1);
        divGraphique1.setAttribute("id","divTable1");

    //récupération des données et création d'un tableau:
        //source des données de table1
            let tbody = table1.getElementsByTagName("tbody");
            let tr = tbody[0].getElementsByTagName("tr");
        //tableau de données:
            let donnees=[];
            let fonctionTableau=()=>{
                for (i=1;i<tr.length;i++){ //i=1 ne garde pas les données du n° de pays
                    let pays=[];
                    let th = tr[i].getElementsByTagName("th");
                    let div = th[0].getElementsByTagName("div");
                    let number = div[0].innerHTML;
                    pays.push(number);
                    let td = tr[i].getElementsByTagName("td");
                        for (y=0;y<td.length;y++){
                            let contenu = td[y].innerHTML;
                            if(contenu != ":"){
                                pays.push(contenu);
                            }
                        }
                    donnees.push(pays);
                }
            }
            fonctionTableau();
            
    //conception du graphique via dimple (attention ajout du script dimple dans l'HTML)
    let svg3 = dimple.newSvg("#divTable1", 800, 800);
    data = [];
    for (i=0;i<donnees.length;i++){
        for (j=2002;j<2013;j++){
            let year = { "Année":j, "Infractions":donnees[i][j-2000],  "Pays": donnees[i][1] };
            if (year.Infractions != undefined){
                data.push(year);
            }
        }
    }
    var myChart = new dimple.chart(svg3, data);
    var m = myChart.addCategoryAxis("x", "Année");
    myChart.addMeasureAxis("y", "Infractions");
    myChart.addSeries("Pays", dimple.plot.line);
    myChart.addLegend(0, 10, 1000, 250);
    myChart.draw();

    let tuto = document.createElement("p");
        tuto.innerHTML = "Cliquez sur la légende pour afficher ou enlever le pays.";
        x.insertBefore(tuto,divGraphique1);
        //création de "boutons" sur base de la légende dimple.
        let btn = document.querySelectorAll("g.dimple-legend");
        for (i=0;i<btn.length;i++){
            btn[i].setAttribute("onclick","afficher("+ i +")");
        }
        //définir les courbes a afficher sur le graphique et les effacer de base
        let courbe = document.querySelectorAll("g.dimple-series-group-0 path");
        for (i=0;i<courbe.length;i++){
            courbe[i].style.visibility = "hidden";
        }
        //création de la fonction afficher (ou pas)
        let afficher = (i) =>{
            if (courbe[i].style.visibility == "visible"){
                courbe[i].style.visibility = "hidden";
            } else {
                courbe[i].style.visibility = "visible";
            }
        }



//graphique2


let emp2 = document.getElementById('table2');
let graph2 = document.createElement("div");
graph2.id="dimple2";
table2.parentNode.insertBefore(graph2, table2);
//récup données
    let tbody2 = table2.getElementsByTagName("tbody");
    let tr2 = tbody2[0].getElementsByTagName("tr");

    let donnee=[];
    
    let fonctionTableau2=()=>{
        for (i=1;i<tr2.length;i++){ //i=1 ne garde pas les données du n° de pays
            let pays=[];
            let th2 = tr2[i].getElementsByTagName("th");
            let div2 = th2[0].getElementsByTagName("div");
            let number2 = div2[0].innerHTML;
            pays.push(number2);
            let td2 = tr2[i].getElementsByTagName("td");
                for (y=0;y<td2.length;y++){
                    let contenu2 = td2[y].innerHTML;
                    if(contenu2 != ":"){
                        pays.push(contenu2);
                    }
                }
            donnee.push(pays);
        }
    }
    fonctionTableau2();
   
//créa graph
let svg2 = dimple.newSvg("#dimple2", 800, 800);

let data2 = [];
for (ii=0;ii<donnee.length;ii++){
    for (jj=2;jj<4;jj++){
        let years = { "Année":jj+2000, "crimes":donnee[ii][jj], "Pays": donnee[ii][1] };
        if (years.crimes != undefined){
            data2.push(years);
        }
    }
}


let chart2 = new dimple.chart(svg2, data2);
chart2.addCategoryAxis("x", "Année");
chart2.addMeasureAxis("y", "crimes");
chart2.addSeries("Pays", dimple.plot.bar);
chart2.addLegend(0,0, 900, 250);
chart2.draw();



//graph3


let emp3 = document.getElementById('bodyContent');
let graph3 = document.createElement("div");
graph3.id="dimple3";
bodyContent.parentNode.insertBefore(graph3, bodyContent);
let databecode =[];
let data5 = [];
function loadDoc() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
databecode = JSON.parse(this.responseText);

function updateChart() {
        svg10.remove()
        xhttp.open("GET", "https://inside.becode.org/api/v1/data/random.json", true);
        xhttp.send();
        data10.push(y)
        data5 = data5.concat(databecode)
     
       //console.log(data5)
}

setTimeout(function(){updateChart()}, 5000);

    var svg10 = dimple.newSvg("#dimple3", 800, 600);
    var data10 = []; 
    for (let i = 0; i < data5.length; i++) {
        let y = {"Nombre":data5[i][0], "Value":data5[i][1]};
        data10.push(y);  
        console.log(data10)
           
    }
    

    var chart = new dimple.chart(svg10, data10);
    var x = chart.addCategoryAxis("x", "Nombre");
    var y1 = chart.addMeasureAxis("y", "Valeur" );
    var y2 = chart.addMeasureAxis("y", "Value");
    y1.overrideMin = -30;
    y1.overrideMax = 30;
    y2.overrideMin = -30;
    y2.overrideMax = 30;
    y2.hidden = true;
    chart.addSeries(null, dimple.plot.line, [x, y2]);
    chart.draw();
          }
        };

xhttp.open("GET", "https://inside.becode.org/api/v1/data/random.json", true);
xhttp.send();

}
loadDoc();