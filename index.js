//購物車表單&購物清單
let graphicscardList = document.querySelector('#graphicscardlist');
let harddriveList = document.querySelector('#harddrivelist');
let keyboard_mouseList = document.querySelector('#keyboard_mouselist');
let memorycardList = document.querySelector('#memorycardlist');
let screenList = document.querySelector('#screenlist');
let computerList = document.querySelector('#computerlist');
let shoppingList = document.querySelector('.shopping-list');

let  graphicscard = [
    {
        name: 'RTX4060',
        discount: 95,
        pricebefore: 9990,
        class: 'graphicscard'
    },
    {
        name: 'RTX4070',
        discount: 87,
        pricebefore: 19990,
        class: 'graphicscard'
    },
    {
        name: 'RTX4080',
        discount: 91,
        pricebefore: 29990,
        class: 'graphicscard'
    },
    {
        name: 'RTX4090',
        discount: 98,
        pricebefore: 58990,
        class: 'graphicscard'
    },
    {
        name: 'RTX3050',
        discount: 94,
        pricebefore: 8490,
        class: 'graphicscard'
    },
    {
        name: 'RTX3060',
        discount: 90,
        pricebefore: 10990,
        class: 'graphicscard'
    },
    {
        name: 'RTX3060 Ti',
        discount: 96,
        pricebefore: 11990,
        class: 'graphicscard'
    },
    {
        name: 'RTX3070 Ti',
        discount: 89,
        pricebefore: 17990,
        class: 'graphicscard'
    }
];
let  harddrive = [
    {
        name: '2TB 2.5吋行動硬碟',
        discount: 92,
        pricebefore: 2388,
        class: 'harddrive'
    },
    {
        name: '2TB 移動固態硬碟',
        discount: 91,
        pricebefore: 5500,
        class: 'harddrive'
    },
    {
        name: '4TB 行動固態硬碟',
        discount: 87,
        pricebefore: 11800,
        class: 'harddrive'
    },
    {
        name: '1TB 2.5吋行動固態硬碟',
        discount: 95,
        pricebefore: 10590,
        class: 'harddrive'
    },
    {
        name: 'SSD 512G',
        discount: 83,
        pricebefore: 828,
        class: 'harddrive'
    },
    {
        name: 'SSD 2TB',
        discount: 99,
        pricebefore: 7730,
        class: 'harddrive'
    },
    {
        name: 'SSD 4TB',
        discount: 96,
        pricebefore: 9999,
        class: 'harddrive'
    },
    {
        name: 'SSD 1TB',
        discount: 88,
        pricebefore: 2111,
        class: 'harddrive'
    }
];
let  keyboard_mouse = [
    {
        name: '無線鍵盤',
        discount: 95,
        pricebefore: 2780,
        class: 'keyboard'
    },
    {
        name: '機械電競鍵盤 青軸',
        discount: 90,
        pricebefore: 4500,
        class: 'keyboard'
    },
    {
        name: '無線機械式鍵盤',
        discount: 85,
        pricebefore: 3500,
        class: 'keyboard'
    },
    {
        name: '電競機械式鍵盤 茶軸',
        discount: 94,
        pricebefore: 4600,
        class: 'keyboard'
    },
    {
        name: '無線人體工學滑鼠',
        discount: 88,
        pricebefore: 980,
        class: 'mouse'
    },
    {
        name: '電競滑鼠',
        discount: 97,
        pricebefore: 4200,
        class: 'mouse'
    },
    {
        name: '無線電競滑鼠',
        discount: 96,
        pricebefore: 5500,
        class: 'mouse'
    },
    {
        name: '超輕量無線滑鼠',
        discount: 84,
        pricebefore: 1380,
        class: 'mouse',
    }
];
let  memorycard = [
    {
        name: '32G 記憶卡',
        discount: 90,
        pricebefore: 299,
        class:'memorycard'
    },
    {
        name: '256G 記憶卡',
        discount: 91,
        pricebefore: 749,
        class:'memorycard'
    },
    {
        name: '128G 記憶卡',
        discount: 89,
        pricebefore: 499,
        class:'memorycard'
    },
    {
        name: '64G 記憶卡',
        discount: 97,
        pricebefore: 299,
        class:'memorycard'
    },
    {
        name: '1T 記憶卡',
        discount: 99,
        pricebefore: 2399,
        class:'memorycard'
    },
    {
        name: '64G 高速記憶卡',
        discount: 98,
        pricebefore: 450,
        class:'memorycard'
    },
    {
        name: '128G 高速記憶卡',
        discount: 89,
        pricebefore: 890,
        class:'memorycard'
    },
    {
        name: '256G 高速記憶卡',
        discount: 84,
        pricebefore: 999,
        class:'memorycard'
    }
];
let  screen = [
    {
        name: '32型HDR電競螢幕',
        discount: 96,
        pricebefore: 6990,
        class:'screen'
    },
    {
        name: '27型 護眼螢幕',
        discount: 95,
        pricebefore: 2988,
        class:'screen'
    },
    {
        name: '27型 窄邊美型螢幕',
        discount: 98,
        pricebefore: 9990,
        class:'screen'
    },
    {
        name: '32行曲面螢幕',
        discount: 91,
        pricebefore: 16800,
        class:'screen'
    },
    {
        name: '27型曲面螢幕',
        discount: 89,
        pricebefore: 3888,
        class:'screen'
    },
    {
        name: '24型電競螢幕',
        discount: 88,
        pricebefore: 3988,
        class:'screen'
    },
    {
        name: '49型曲面電競螢幕',
        discount: 93,
        pricebefore: 49900,
        class:'screen'
    },
    {
        name: '曲面美型螢幕',
        discount: 87,
        pricebefore: 5990,
        class:'screen'
    }
];
let  computer = [
    {
        name: 'i7-13700KF',
        discount: 95,
        pricebefore: 19793,
        class: 'computer'
    },
    {
        name: 'i9-12900KF',
        discount: 97,
        pricebefore: 39348,
        class: 'computer'
    },
    {
        name: 'i5-12400F',
        discount: 91,
        pricebefore: 9990,
        class: 'computer'
    },
    {
        name: 'i7-13700F',
        discount: 85,
        pricebefore: 22990,
        class: 'computer'
    },
    {
        name: 'i7-11700',
        discount: 96,
        pricebefore: 33480,
        class: 'computer'
    },
    {
        name: 'i5-13400F',
        discount: 84,
        pricebefore: 10770,
        class: 'computer'
    },
    {
        name: 'i5-13400',
        discount: 91,
        pricebefore: 11474,
        class: 'computer'
    },
    {
        name: 'i9-13900KF',
        discount: 88,
        pricebefore: 27886,
        class: 'computer'
    }
];
let cartList = [graphicscard,harddrive,keyboard_mouse,memorycard,screen,computer]
let shoppingCards = [[],[],[],[],[],[]];
function intolist(){
    cartList.forEach((item,index) =>{
        item.forEach((value,key) =>{
        let newdiv = document.createElement('div');
        let priceafter = Math.round(value.pricebefore*value.discount/100);
        let imageName = 'images/'+value.class+'.jpg';
        newdiv.classList.add('commodity-col');
        newdiv.innerHTML = `
        <div class="commodity-card">
            <div class="card-cover">
                <p class="card__discount ">${value.discount.toLocaleString()}折</p>
                <img src="${imageName}" alt="" class="card__img">
            </div>
            <div class="card-content">
                <p class="card__name">${value.name}</p>
                <select name="${value.class}_${key}" id="${value.class}_${key}" class="card__select">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>
            </div>
            <div class="card-oder">
                <div class="card-price">
                    <div class="card-price__priceafter">$${priceafter.toLocaleString()}</div>
                    <div class="card-price__pricebefore">$${value.pricebefore.toLocaleString()}</div>
                </div>
                <button onclick="addcard('${value.class}',${key})" class="card__btn">加入購物車</button>
            </div>
        </div>`;
        switch (value.class) {
            case 'graphicscard':{
                graphicscardList.appendChild(newdiv);
                break;
            }
            case 'harddrive':{
                harddriveList.appendChild(newdiv);
                break;
            }
            case 'memorycard':{
                memorycardList.appendChild(newdiv);
                break;
            }
            case 'screen':{
                screenList.appendChild(newdiv);
                break;
            }
            case 'computer':{
                computerList.appendChild(newdiv);
                break;
            }
            default:{
                keyboard_mouseList.appendChild(newdiv);
                break;
            }
        }
    })
    })
}
intolist()


//購物車
function addcard(name,index) {
    let selectName = "#" + name + "_" +index;
    let select = document.querySelector(selectName);
    let count = parseInt(select.options[select.selectedIndex].text);
    switch(name) {
        case 'graphicscard':{
            if (shoppingCards[0][index] == null){
                shoppingCards[0][index] = JSON.parse(JSON.stringify(graphicscard[index]));
                shoppingCards[0][index].quantity = count;
            } else {
                shoppingCards[0][index].quantity += count;
            }
            reloadcard()
            break;
        }
        case 'harddrive':{
            if (shoppingCards[1][index] == null){
                shoppingCards[1][index] = JSON.parse(JSON.stringify(harddrive[index]));
                selectName = "#" + name + "_" +index;
                let select = document.querySelector(selectName);
                shoppingCards[1][index].quantity = parseInt(select.options[select.selectedIndex].text);
            } else {
                shoppingCards[1][index].quantity += count;
            }
            reloadcard()
            break;
        }
        case 'keyboard_mouse':{
            if (shoppingCards[2][index] == null){
                shoppingCards[2][index] = JSON.parse(JSON.stringify(keyboard_mouse[index]));
                selectName = "#" + name + "_" +index;
                let select = document.querySelector(selectName);
                shoppingCards[2][index].quantity = parseInt(select.options[select.selectedIndex].text);
            } else {
                shoppingCards[2][index].quantity += count;
            }
            reloadcard()
            break;
        }
        case 'memorycard':{
            if (shoppingCards[3][index] == null){
                shoppingCards[3][index] = JSON.parse(JSON.stringify(memorycard[index]));
                selectName = "#" + name + "_" +index;
                let select = document.querySelector(selectName);
                shoppingCards[3][index].quantity = parseInt(select.options[select.selectedIndex].text);
            } else {
                shoppingCards[3][index].quantity += count;
            }
            reloadcard()
            break;
        }
        case 'screen':{
            if (shoppingCards[4][index] == null){
                shoppingCards[4][index] = JSON.parse(JSON.stringify(screen[index]));
                selectName = "#" + name + "_" +index;
                let select = document.querySelector(selectName);
                shoppingCards[4][index].quantity = parseInt(select.options[select.selectedIndex].text);
            } else {
                shoppingCards[4][index].quantity += count;
            }
            reloadcard()
            break;
        }
        case 'computer':{
            if (shoppingCards[5][index] == null){
                shoppingCards[5][index] = JSON.parse(JSON.stringify(computer[index]));
                selectName = "#" + name + "_" +index;
                let select = document.querySelector(selectName);
                shoppingCards[5][index].quantity = parseInt(select.options[select.selectedIndex].text);
            } else {
                shoppingCards[5][index].quantity += count;
            }
            reloadcard()
            break;
        }
    }
}
function reloadcard() {
    shoppingList.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    shoppingCards.forEach((item,index)=>{
        item.forEach((value,key)=>{
            if (value != null) {
                totalPrice = value.pricebefore * value.quantity
                count = value.quantity
                let newdiv = document.createElement('ul');
                newdiv.classList.add('shopping-cart-content');
                newdiv.innerHTML = `
                <li class="content-detail">
                            <img src="images/${value.class}.jpg" alt="" class="content__img">
                            <p class="content__name">${value.name}</p>
                        </li>
                        <li class="content__price">$${value.pricebefore}</li>
                        <li class="content__quantity">${count}</li>
                        <li class="content__total">$${totalPrice}</li>
                        <img src="images/delect.png" alt="" onclick="delectcard(${index},${key})" class="content__icon">
                `;
                shoppingList.appendChild(newdiv);
            }
        })
    })
}
function delectcard(index,key) {
    shoppingCards[index][key] = null
    reloadcard()
}

//倒數計時器
const time = document.querySelectorAll('.reciprocal__time span');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth() + 1;
let tempDay = tempDate.getDate();

const reciprocal = new Date(tempYear, tempMonth, tempDay+1, 0, 0, 0); //倒數時間
const reciprocalTime = reciprocal.getTime();

function remaindingTime() {
    const today = new Date().getTime();

    const t = reciprocalTime - today;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let hours = Math.floor((t % oneDay) / oneHour); //小時
    let minutes =  Math.floor((t % oneHour) / oneMinute); //分鐘
    let seconds = Math.floor((t % oneMinute) / 1000); //秒鐘
    
    const values = [hours,minutes,seconds];
    function format(values) {
        if (values < 10) {
            return (values = `0${values}`)
        }
        return values
    };
    
    time.forEach(function (time, index) {
        time.innerHTML = format(values[index])
    });
}

let countdown = setInterval(remaindingTime, 1000);

