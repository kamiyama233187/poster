const STORAGE_KEY = "shukkinQuestData_v3";

let state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

if(!state.player){
state.player = {
hair:0,
body:0,
armor:0
};
}

const hairList = ["0","1","2","3"];
const clothesList = ["0","1","2","3"];

const hairSelect = document.getElementById("hairSelect");
const clothesSelect = document.getElementById("clothesSelect");

hairList.forEach((h,i)=>{
const op=document.createElement("option");
op.value=i;
op.text="Hair "+i;
hairSelect.appendChild(op);
});

clothesList.forEach((c,i)=>{
const op=document.createElement("option");
op.value=i;
op.text="Clothes "+i;
clothesSelect.appendChild(op);
});

hairSelect.value = state.player.hair;
clothesSelect.value = state.player.armor;

hairSelect.onchange = ()=>{
state.player.hair = hairSelect.value;
render();
};

clothesSelect.onchange = ()=>{
state.player.armor = clothesSelect.value;
render();
};

function render(){

document.getElementById("body").src =
"assets/body/"+state.player.body+".png";

document.getElementById("hair").src =
"assets/hair/"+state.player.hair+".png";

document.getElementById("clothes").src =
"assets/clothes/"+state.player.armor+".png";

}

function saveChar(){

localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

alert("保存しました");

}

render();