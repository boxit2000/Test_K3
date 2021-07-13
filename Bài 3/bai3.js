let url = document.getElementById('url');
let submit = document.getElementById('submit')
let abc = document.querySelectorAll('.choose');
var arr = Array.prototype.slice.call(abc);
let result = "";
// console.log(arr)
let index = 0;
for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener('click', function () {
        // console.log(i);
        index = i;
        console.log(index);
    })
}
submit.addEventListener('click', function () {
    let API = `https://api.shrtco.de/v2/shorten?url=${url.value}`;
    submit.classList.remove("open_submit");
    submit.classList.add("close_submit");
    fetch(API)
        .then(function (response) {
            console.log(123);
            return response.json();
        }).then(function (post) {
            console.log(1234);
            console.log(post);
            submit.classList.remove("close_submit");
            submit.classList.add("open_submit");
            switch (index) {
                case 0: result = post.result.short_link;
                    break;
                case 1: result = post.result.short_link2;
                    break;
                case 2: result = post.result.short_link3;
                    break;
            }
            alert("Link của bạn sau khi rút gọn là: " + result);
        })
})


