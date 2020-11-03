document.addEventListener('DOMContentLoaded', () => {
    const json = document.querySelector('#json')
    const csv = document.querySelector('#csv')
    const convert = document.querySelector('#convert')
    convert.addEventListener('click', () => {
        console.log("click", json.value)
        loadXMLDoc()
    })
    const clear = document.querySelector('#clear')
    clear.addEventListener('click', () => {
        json.value = '';
        csv.innerHTML = '';
    })
    // const convert1 = document.querySelector('#convert1')
    // convert1.addEventListener('click', (e) => {
    //     console.log("click")
    //     e.preventDefault()
    // })


    function loadXMLDoc() {
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
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

        xmlhttp.open("POST", '/xml');
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send((json.value));
    }
})