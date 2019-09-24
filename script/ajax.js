window.addEventListener('load', () => {
    let myRequest;

    setInterval(() => {
        getAJAX();
    }, 2000);
    
    function getAJAX() {
        myRequest = new XMLHttpRequest();
        myRequest.open("GET", "./assets/textfile.txt?_=" + new Date().getTime());
        myRequest.onreadystatechange = checkData;
        myRequest.send(null);
    }
    
    function checkData() {
        if (myRequest.readyState === 4 && myRequest.status === 200) {
            let element1 = document.getElementById("platzhalter");
            let text1 = myRequest.responseText;
            element1.innerHTML = text1;
        }
    }
});