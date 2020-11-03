document.addEventListener('DOMContentLoaded', () => {
    const json = document.querySelector('#json')
    const csv = document.querySelector('#csv')
    const button = document.querySelector('.w3-button')
    button.addEventListener('click', () => {
        console.log("click", json.value)
        loadXMLDoc()
    })


    function loadXMLDoc() {
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
                if (xmlhttp.status == 200) {
                    console.log(xmlhttp.responseText)
                    csv.innerHTML = xmlhttp.responseText;
                }
                else if (xmlhttp.status == 400) {
                    alert('There was an error 400');
                }
                else {
                    alert('something else other than 200 was returned');
                }
            }
        };

        xmlhttp.open("POST", '/');
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send((json.value));
    }
})