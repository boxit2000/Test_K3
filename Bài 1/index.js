class Bai1 extends HTMLElement {
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
                Start Ex1
            </button>
        `;
        this.shadow.innerHTML = template;
        this.ex1();
    }

    ex1() {
        const arr_tich = [];
        const arr_obj = [];
        this.shadow.getElementById('btn_start').addEventListener('click', () => {
            // console.log(123)
            const str = prompt("Nhập vào mảng số nguyên, các phẩn tử cách nhau bởi dấu phẩy: ");
            const arr = str.split(",");
            console.log(arr);
            for (let i = 0; i < arr.length - 1; i++) {
                let tich = arr[i] * arr[i + 1];
                arr_tich.push(tich);
                arr_obj.push({
                    mot: arr[i],
                    hai: arr[i + 1]
                });
            }
            console.log(arr_tich);
            console.log(arr_obj);
            let maxInNumbers = Math.max.apply(Math, arr_tich);
            console.log(maxInNumbers);
            for (let i = 0; i < arr_tich.length; i++) {
                if(maxInNumbers == arr_tich[i]){
                    alert("Tích lớn nhất là tích của " + arr_obj[i].mot + " và " + arr_obj[i].hai + " đó là: " + maxInNumbers );
                }
            }
        })
    }

};

window.customElements.define("bai-1", Bai1);


