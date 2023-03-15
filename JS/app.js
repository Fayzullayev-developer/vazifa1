function myfun(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

let team1 = myfun(90, 80, 170).toFixed(2);
let team2 = myfun(90, 88, 160).toFixed(2);

let winner_team = (resul1, resul2) => {
    if(resul1 > resul2) {
        return "Team1 Yutdi";
    } else if (resul1 === resul2) {
        return "Durrang";
    } else {
        return "Team2 Yutdi";
    }
}

console.log(winner_team(team1, team2));