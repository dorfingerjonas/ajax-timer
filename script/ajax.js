window.addEventListener('load', () => {
    let myRequest;

    setInterval(() => {
        getAJAX();
        console.log('hell yeah');
    }, 2000);
    
    function getAJAX() {
        myRequest = new XMLHttpRequest();
        myRequest.open("GET", "./assets/textfile.txt?_=" + new Date().getTime());
        myRequest.onreadystatechange = checkData;
        myRequest.send(null);
    }
    
    function checkData() {
        if (myRequest.readyState === 4 && myRequest.status === 200) {
            var element1 = document.getElementById("platzhalter");
            var text1 = myRequest.responseText;
            element1.innerHTML = text1;
        }
    }
});