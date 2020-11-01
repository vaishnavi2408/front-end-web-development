var arr_months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
setInterval(() => {
    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    let current_clock = date + " " + arr_months[month] + " " + year + " - " + hour + " hr : " + minute + " min : " + second + " sec";

    let output = document.querySelector("#date");
    output.innerHTML = current_clock;
}, 1000);