fetch("./list.json")
.then((res) => {
  return res.json()
})
.then((obj) => {
    teamOption(obj);
    makeCard(obj);
    let sortTeam = obj;
    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
        let teamName = e.target.selectTeam.value;
        if(teamName === ''){
            sortTeam = obj;
            document.querySelector('form select').selectedIndex = 0;
        } else {
            sortTeam = obj.filter( obj => obj["team"] === teamName);
        }
        makeCard(sortTeam);
        return sortTeam;
    });

    let profile;
    document.addEventListener('click', e => {
        if(e.target.className === 'card'){
            let targetName = e.target.innerHTML;
            //profile = obj.find( obj => obj["name-kr"] === targetName);
            // console.log(profile);
            profile = obj.find(obj => obj["memberId"] === e.target.id);
            modal.style.display = 'block';
            document.querySelector('body').style.overflow = 'hidden';
            makeProfile(profile);
            saveImage(profile);
            console.log(profile);
        }
        if(e.target.id === 'viewAll') {
            makeCard(obj);
            document.querySelector('form select').selectedIndex = 0;
            sortTeam = obj;
        }
        if(e.target.id === 'sortByName') {
            sortName(sortTeam);
            makeCard(sortTeam);
        }
        if(e.target.id === 'sortByTime') {
            sortTime(sortTeam);
            makeCard(sortTeam);
        }
        if(e.target.id === 'downloadButton') {
            let url = document.querySelector('canvas').toDataURL();
            const a = document.createElement('a');
            a.href = url;
            a.download = `${profile["name-eng"]}.png`;
            a.click();
            a.remove();
        }
    });
    
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
let nameObj;
let dWrap = document.querySelector('#wrap');

// // 명함 카드 생성
function makeCard(obj){
    dbody.innerHTML = '';
    for (let i = 0; i < obj.length; i++) {
        obj[i].memberId =  `member${i}`;
        let cardobj = document.createElement('div');
        cardobj.setAttribute('class', 'card');
        cardobj.id = obj[i].memberId;
        cardobj.innerHTML = obj[i]["name-kr"];
        cardobj.style.backgroundColor = obj[i].color;
        dbody.appendChild(cardobj);
        
    }
    console.log(obj);
}

// 이름 정렬
function sortName(obj){
    nameObj = obj.sort((a, b) => {
        if (a["name-kr"] < b["name-kr"]) {
            return -1;
        }
    });
}
// 출근 시간 정렬
function sortTime(obj){
    timeObj = obj.sort((a, b) => {
        if (a["time"] < b["time"]) {
            return -1;
        }
    });
}

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
        document.querySelector('#selectTeam').appendChild(opt);
    }
}

// 모달

function makeProfile(profile){
    if(profile["photo"] === ''){
        pImg.src = `photo/profile-default.jpg`;
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
    document.querySelector('canvas').remove();
});

// canvas

function saveImage(profile) {
    let canvas = document.createElement('canvas');
    canvas.id = 'saveProfile';
    canvas.width = 600;
    canvas.height = 350;
    dWrap.appendChild(canvas);
    
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // const img = new Image();
    
    // if(profile["photo"] === ''){
    //     img.src = `photo/profile-default.jpg`;
    // } else {
    //     img.src = `photo/${profile["photo"]}`;
    // }
    // img.onload = function(){
        
    //     // let imgWidth = img.offsetWidth;
    //     // let imgHeight= img.offsetHeight;
       
    //     // ctx.drawImage(img, 0, 0, imgWidth, imgHeight, imgWidth - 150, imgWidth - 200, 150, 200);
        
    //    //console.log(img);
    //    ctx.drawImage(img,(img.width / 2) - 150, (img.height / 2) - 200, img.width, img.height, 20, 30, 150, 200);
       
    // };
    let profileImage = document.querySelector('.profile-img img');
    let divAspect = 200 / 150;
    let imgAspect = profileImage.height / profileImage.width;
    profileImage.addEventListener("load", (e) => {
        ctx.drawImage(profileImage, 20, 30, 150, 200);
        // if (imgAspect > divAspect) {
        //     console.log(divAspect);
        // }
    });
    

    ctx.fillStyle = 'black';
    ctx.font = '700 30px pretendard';
    ctx.fillText('sketchbook', 190, 80);
    
    ctx.font = '400 18px pretendard';
    ctx.fillText(profile["team"], 190, 115);

    ctx.font = '700 25px pretendard';
    ctx.fillText(profile["name-kr"], 190, 160);
    ctx.font = '400 16px pretendard';
    ctx.fillText(profile["name-eng"], 190, 185);

    ctx.font = '600 20px pretendard';
    ctx.fillText(`서울특별시 서초구 강남대로 37길 42 2층`, 20, 270);
    ctx.font = '400 18px pretendard';
    ctx.fillText(`email: ` + profile["info"][0]["email"], 20, 300);
    ctx.fillText(`phone: ` + profile["info"][0]["phone"], 20, 330);
}

