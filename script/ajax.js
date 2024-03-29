window.addEventListener('load', () => {
    const button = document.getElementById('button');
    let myRequest;

    setInterval(() => {
        getAJAX();
    }, 2000);

    button.addEventListener('click', getAJAX);
    
    function getAJAX() {
        myRequest = new XMLHttpRequest();
        myRequest.open("GET", "./assets/textfile.txt?_=" + new Date().getTime());
        myRequest.onreadystatechange = checkData;
        myRequest.send(null);
    }
    
    function checkData() {
        if (myRequest.readyState === 4 && myRequest.status === 200) {
            let element1 = document.getElementById("placeholder");
            let text1 = myRequest.responseText;
            element1.textContent = text1;
        }
    }
});