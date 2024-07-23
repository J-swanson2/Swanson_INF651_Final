var teamName = "Kansas State";
var year = "2024";

const week1 = ["FCS", "win", "55-17"];
const week2 = ["Tulane", "win", "45-0"];
var schedule = [week1, week2];


function home() { //Loads home page with pre-filled varable examples
    document.getElementById("teamname").innerHTML = teamName;
    document.getElementById("year").innerHTML = "Year " + year;
}

function populateSchedule(){ //populates pre-filled example schedule 
    scheduleRunner(schedule[0][0], schedule[0][1], schedule[0][2]);
    scheduleRunner(schedule[1][0], schedule[1][1], schedule[1][2]);
}





function submitSchedule() { //create new game record in schedule.html
    let x = document.getElementById("opponent1").value;
    let result = document.getElementById("result");
    let y = "Loss"
    if (result.checked) {
        y = "Win";
    }
    let z = document.getElementById("score").value;
    const array = [x, y, z];
    schedule.push(array); //push to the schedule array for usage in other functions, or gloabal use in future iterations
    scheduleRunner(x, y, z);
}

function scheduleRunner(name, result, score) { //handles the adding of row and cell to table in schedule.html
    var table = document.getElementById("scheduleTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = result;
    cell3.innerHTML = score;

}

function submitRecruit() { //create new recruit row for table in recruits.html
    let x = document.getElementById("name").value;
    let y = document.getElementById("stars").value;

    var table = document.getElementById("recruitTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = x;
    cell2.innerHTML = y;
}

function submitStats() { //create new stats row for stats table in stats.html
    let year = document.getElementById("year").value;
    let name = document.getElementById("name").value;
    let pos = document.getElementById("position").value;
    let games = document.getElementById("games").value;
    let passy = document.getElementById("passYards").value;
    let passtd = document.getElementById("passTD").value;
    let int = document.getElementById("int").value;
    let recy = document.getElementById("recYards").value;
    let rectd = document.getElementById("recTD").value;
    let rushy = document.getElementById("rushYards").value;
    let rushtd = document.getElementById("rushTD").value;

    var table = document.getElementById("statsTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    var cell11 = row.insertCell(10);

    cell1.innerHTML = year;
    cell2.innerHTML = name;
    cell3.innerHTML = pos;
    cell4.innerHTML = games;
    cell5.innerHTML = passy;
    cell6.innerHTML = passtd;
    cell7.innerHTML = int;
    cell8.innerHTML = recy;
    cell9.innerHTML = rectd;
    cell10.innerHTML = rushy;
    cell11.innerHTML = rushtd;
}

function submitDraft() { //create a new drafted player for the table in drafted.html
    let year = document.getElementById("year").value;
    let name = document.getElementById("name").value;
    let pos = document.getElementById("position").value;
    let round = document.getElementById("round").value;

    var table = document.getElementById("draftTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = year;
    cell2.innerHTML = name;
    cell3.innerHTML = pos;
    cell4.innerHTML = round;
}