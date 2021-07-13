class Bai2 extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({
            mode: "open",
        });
    }
    static get observedAttributes() {
    }

    attributeChangedCallback(name, oldValue, newValue) {
    }

    connectedCallback() {
        const template = `
            <button class="btn_start" id="btn_start">
                Start Ex2
            </button>
        `;
        this.shadow.innerHTML = template;
        this.ex2();
    }

    ex2() {
        let sum_chan = 0;
        let sum_le = 0;
        let last_arr = [];
        this.shadow.getElementById('btn_start').addEventListener('click', () => {
            const str = prompt("Nhập vào cân nặng của mọi người, các phẩn tử cách nhau bởi dấu phẩy: ");
            const arr = str.split(",");
            console.log(arr);

            for (let i = 0; i < arr.length; i++) {
                if (i % 2 == 0){
                    sum_chan += Number(arr[i]);
                } else {
                    sum_le += Number(arr[i]);
                }
            }
            last_arr.push(sum_chan);
            last_arr.push(sum_le);
            alert("Tổng cân nặng của người trong hàng 1 là: " + sum_chan);
            alert("Tổng cân nặng của người trong hàng 2 là: " + sum_le);
            alert("Mảng OUTPUT là: " + last_arr);
        })
    }

};

window.customElements.define("bai-2", Bai2);


