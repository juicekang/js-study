function teamOption(obj) {
    let teams = [];
    for (let i = 0; i < obj.length; i++) {
        teams.push(obj[i]["team"]);
    }
    let teamOption = Array.from(new Set(teams));
    
    for (let i = 0; i < teamOption.length; i++) {
        let opt = document.createElement('option');
        opt.setAttribute('value', teamOption[i]);
        opt.innerHTML = teamOption[i];
        console.log(opt);
        document.querySelector('#selectTeam').appendChild(opt);
    }
}