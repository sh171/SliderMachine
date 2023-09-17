class BaseBallTeam {
    constructor(teamName, founded, location, stadium, pictureUrl) {
        this.teamName = teamName;
        this.founded = founded;
        this.location = location;
        this.stadium = stadium;
        this.pictureUrl = pictureUrl;
    }
}

// this list has Japanese professional baseball teams
const teams = [
    new BaseBallTeam("セリーグ/パリーグ", "", "", "", "https://livedoor.blogimg.jp/matomeru_swach/imgs/6/f/6f2dad30.jpg"),
    new BaseBallTeam("読売ジャイアンツ", "1934年", "東京都", "東京ドーム", "https://upload.wikimedia.org/wikipedia/commons/5/57/Yomiuri_Giants_insignia.png"),
    new BaseBallTeam("東京ヤクルトスワローズ", "1950年", "東京都", "明治神宮野球場", "https://upload.wikimedia.org/wikipedia/commons/a/ac/Tokyo_Yakult_Swallows_insignia.png"),
    new BaseBallTeam("横浜DeNAベイスターズ", "1950年", "神奈川県", "横浜スタジアム", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Yokohama_DeNA_BayStars_insignia.png/800px-Yokohama_DeNA_BayStars_insignia.png"),
    new BaseBallTeam("中日ドラゴンズ", "1936年", "愛知県", "バンテリンドームナゴヤ", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Chunichi_Dragons_insignia.png/800px-Chunichi_Dragons_insignia.png"), 
    new BaseBallTeam("阪神タイガース", "1935年", "兵庫県", "阪神甲子園球場", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Hanshin_tigers_insignia.PNG/800px-Hanshin_tigers_insignia.PNG"), 
    new BaseBallTeam("広島東洋カープ", "1950年", "広島県", "MAZDA Zoom-Zoom スタジアム広島", "https://upload.wikimedia.org/wikipedia/commons/c/c1/Hiroshima_Toyo_Carp_insignia.png"),
    new BaseBallTeam("北海道日本ハムファイターズ", "1946年", "北海道", "エスコンフィールドHOKKAIDO", "https://upload.wikimedia.org/wikipedia/commons/b/b1/Hokkaido_Nippon-Ham_Fighters_insignia.png"), 
    new BaseBallTeam("東北楽天ゴールデンイーグルス", "2005年", "宮城県", "楽天モバイルパーク宮城", "https://upload.wikimedia.org/wikipedia/commons/3/32/Rakuten_eagles_insignia.png"), 
    new BaseBallTeam("埼玉西武ライオンズ", "1950年", "埼玉県", "ベルーナドーム", "https://upload.wikimedia.org/wikipedia/commons/0/03/Seibu_lions_insignia.png"), 
    new BaseBallTeam("千葉ロッテマリーンズ", "1950年", "千葉県", "ZOZOマリンスタジアム", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Chiba_Lotte_Marines_insignia.png/800px-Chiba_Lotte_Marines_insignia.png"), 
    new BaseBallTeam("オリックス・バファローズ", "1936年", "大阪府", "京セラドーム大阪", "https://upload.wikimedia.org/wikipedia/commons/1/1b/Orix_Buffaloes_insignia.png"), 
    new BaseBallTeam("福岡ソフトバンクホークス", "1938年", "福岡県", "福岡PayPayドーム", "https://upload.wikimedia.org/wikipedia/commons/c/c3/Fukuoka_SoftBank_Hawks_insignia.png")
];

let target = document.getElementById("target");

let outer = document.createElement("div");
outer.classList.add("vh-100", "d-flex", "align-items-center");
let container = document.createElement("div");
container.classList.add("bg-pink", "col-12", "d-flex", "flex-wrap", "align-items-center");

// left container
let sliderContainer = document.createElement("div");
sliderContainer.classList.add("col-12", "col-md-6", "py-2");
let sliderShow = document.createElement("div");
sliderShow.classList.add("col-12", "d-flex", "flex-nowrap");

let main = document.createElement("div");
let extra = document.createElement("div");

main.classList.add("full-width");
extra.classList.add("full-width");

let imgDiv = document.createElement("div");
imgDiv.classList.add("d-flex", "justify-content-center");
let img = document.createElement("img");
img.src = teams[0].pictureUrl;
img.classList.add("col-8");

imgDiv.append(img);
main.append(imgDiv);
sliderShow.append(main);
sliderShow.append(extra);
sliderContainer.append(sliderShow);
container.append(sliderContainer);


// right container
let divContainer = document.createElement("div");
divContainer.classList.add("col-12", "col-md-5");

let infoContainer = document.createElement("div");
infoContainer.classList.add("col-12");

let nameP = document.createElement("p");
let stadiumP = document.createElement("p");

nameP.innerHTML = `${teams[0].teamName}`;
nameP.classList.add("text-center", "bold");
stadiumP.innerHTML = "";

infoContainer.append(nameP);
infoContainer.append(stadiumP);
divContainer.append(infoContainer);

main.setAttribute("data-index", "0");

function createButtons() {
    let btnContainer = document.createElement("div");
    btnContainer.classList.add("d-flex", "flex-wrap");
    for (let i=1; i<teams.length; i++) {
        let btnDiv = document.createElement("div");
        btnDiv.classList.add("col-3", "p-2");
        let btn = document.createElement("button");
        btn.classList.add("col-12", "btn", "btn-light");
        btn.innerHTML = i;

        btnDiv.append(btn);
        btnContainer.append(btnDiv);
    }
    divContainer.append(btnContainer);
}

createButtons();
container.append(divContainer);
outer.append(container);
target.append(outer);