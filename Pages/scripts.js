var teamName = "Kansas State"; //example team, in future iterations this will be input and changable by user
var year = "2024"; //example year, in future iterations this will be input and changable by user
let wins = 0;
let losses = 0;

const week1 = ["FCS", "Win", "55-17"];
const week2 = ["Tulane", "Win", "45-0"];
var schedule = [week1, week2]; //example schedule, can be filled by user but will not save on refresh - working on that in future iterations

const x = ["Bear McCreary", 3];
const y = ["Jeff Odom", 4];
var recruits = [x, y];

const rec1 = ["Bo Jack", "RB", 13, null, null, null, 500, 2, 1098, 14];
var stats = [rec1];

const draft1 = ["Cooper Beebe", "LG", 3];
var draft = [draft1];


function home() { //Loads home page with pre-filled varable examples
    document.getElementById("teamname").innerHTML = teamName;
    document.getElementById("year").innerHTML = "Year " + year;

    runInitialRecord();
    //best all time year is 2024 by default
    //national championships Won is 0, dynamic adjustment will be added after schedules can save to server.
}

function populateSchedule() { //populates pre-filled example schedule 
    document.getElementById("year").innerHTML = "Year " + year; 
    scheduleRunner(schedule[0][0], schedule[0][1], schedule[0][2]);
    scheduleRunner(schedule[1][0], schedule[1][1], schedule[1][2]);
    runInitialRecord();
}

function populateRecruits() { //populates pre-filled example recruits 
    recruitRunner(recruits[0][0], recruits[0][1]);
    recruitRunner(recruits[1][0], recruits[1][1]);
}

function populateStats() {
    statsRunner(rec1);
}

function populateDraft() {
    draftRunner(draft[0][0], draft[0][1], draft[0][2]);
}

function runInitialRecord() {
    for (i = 0; i < schedule.length; i++) { //adjusts wins/losses based on current schedule, in full build this for loop won't be needed. Only for example data
        if (schedule[i][1] == "Win") {
            wins++;
        }
        else {
            losses++;
        }
    }
    runRecord();
}

function runRecord() {
    document.getElementById("record").innerHTML = wins + " - " + losses;
}



function submitSchedule() { //create new game record in schedule.html
    let x = document.getElementById("opponent1").value;
    let result = document.getElementById("result");
    let y = "Loss"
    if (result.checked) {
        y = "Win";
        wins++; //adds win to win column for record purposes.
    }
    else {
        losses++;
    }
    let z = document.getElementById("score").value;
    const array = [x, y, z];
    schedule.push(array); //push to the schedule array for usage in other functions, or gloabal use in future iterations
    scheduleRunner(x, y, z);
    runRecord();
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

    const array = [x, y];
    schedule.push(array); //push to the recruits array for usage in other functions, or gloabal use in future iterations
    recruitRunner(x, y);
}

function recruitRunner(x, y) {
    var table = document.getElementById("recruitTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = x;
    cell2.innerHTML = y;
}

function submitStats() { //create new stats row for stats table in stats.html
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

    const array = [name, pos, games, passy, passtd, int, recy, rectd, rushy, rushtd];
    stats.push(array);
    statsRunner(array);
}

function statsRunner(array){
    var table = document.getElementById("statsTable");
    var row = table.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = year;
    for (i = 0; i < array.length; i++) {
        var cell = row.insertCell(i+1);
        cell.innerHTML = array[i];
    }
}

function submitDraft() { //create a new drafted player for the table in drafted.html
    
    let name = document.getElementById("name").value;
    let pos = document.getElementById("position").value;
    let round = document.getElementById("round").value;

    const array = [name, pos, round];

    draftRunner(name, pos, round);
}

function draftRunner(name, pos, round) {
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