fetch("./list.json")
.then((res) => {
  return res.json()
})
.then((obj) => {

    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
        let teamName = e.target.selectTeam.value;
        let sortTeam = obj.filter( tg => tg["team"] === teamName);
        makeCard(sortTeam);
    });

    document.addEventListener('click', e => {
        if(e.target.className === 'card'){
            //console.log(obj);
            let targetName = e.target.innerHTML;
            let profile = obj.find( tg => tg["name-kr"] === targetName);
            console.log(profile);
            modal.style.display = 'block';
            document.querySelector('body').style.overflow = 'hidden';
            makeProfile(profile);
        }
    });
    //makeTeam(obj);
})
.catch(() => {
    console.log('error occured!');
})

let dTeam = document.querySelector('#selectTeam');
let dbody = document.querySelector('.name-card');
let btnSubmit = document.querySelector('.btn-submit');
let modalCloseBtn = document.querySelector('.modal-close');
let modal = document.querySelector('.modal');
let pImg = document.querySelector('.profile-img img');
let pNameKr = document.querySelector('.profile-info h2');
let pNameEng = document.querySelector('.profile-info small');
let pTime = document.querySelector('.profile-info time');
let pTeam = document.querySelector('.profile-info .team-name');
let pDate = document.querySelector('.profile-dsc .startdate');
let pPhone = document.querySelector('.profile-info .phone');
let pMail = document.querySelector('.profile-dsc .email');
let pAddress = document.querySelector('.profile-dsc .address');

// // 명함 카드 생성
function makeCard(obj){
    // obj["name-eng"];
    dbody.innerHTML = '';
    for (let i = 0; i < obj.length; i++) {
        let cardobj = document.createElement('div');
        cardobj.setAttribute('class', 'card');
        cardobj.innerHTML = obj[i]["name-kr"];
        cardobj.style.backgroundColor = obj[i].color;
        dbody.appendChild(cardobj);
    }
}

// function makeTeam(obj){
//     let teamList = obj.filter( tg => tg["team"] === teamName);
//     for (let i = 0; i < teamList; i++){
//         console.log('right');
//     }
// }

// 모달

function makeProfile(profile){
    if(profile["photo"] === ''){
        pImg.src = `https://via.placeholder.com/150x200`;
    } else {
        pImg.src = `photo/${profile["photo"]}`;
    }
    pNameKr.innerText = profile["name-kr"];
    pNameEng.innerText = profile["name-eng"];
    pTeam.innerText = profile["team"];
    pDate.innerText = `입사일: ${profile["startdate"]}`;
    pPhone.innerText = profile["info"][0]["phone"];
    pTime.innerText = profile["time"];
    pMail.innerHTML = `e-mail: <a href="mailto:${profile["info"][0]["email"]}">${profile["info"][0]["email"]}</a>`;
    pAddress.innerText = `주소: ${profile["info"][0]["address"]}`;
    //console.log(Object.keys(profile).length);
    Object.keys(profile).forEach(function(k){
        console.log('키값 : '+k + ', 데이터값 : ' + profile[k]);
    });
}

modalCloseBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
    pImg.src = '';
    pNameKr.innerText = '';
    pNameEng.innerText = '';
    pTeam.innerText = '';
    pDate.innerText = '';
    pPhone.innerText = '';
    pTime.innerText = '';
    pMail.innerText = '';
    pAddress.innerText = '';
});

