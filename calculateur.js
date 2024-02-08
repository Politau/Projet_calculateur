document.getElementById('calculer').addEventListener('click', function() {

    var R301 = parseFloat(document.getElementById('R301').value);
    var R302 = parseFloat(document.getElementById('R302').value);
    var R303 = parseFloat(document.getElementById('R303').value);
    var R304 = parseFloat(document.getElementById('R304').value);
    var R305 = parseFloat(document.getElementById('R305').value);
    var R306 = parseFloat(document.getElementById('R306').value);
    var R307 = parseFloat(document.getElementById('R307').value);
    var R308 = parseFloat(document.getElementById('R308').value);
    var R309 = parseFloat(document.getElementById('R309').value);
    var R310 = parseFloat(document.getElementById('R310').value);
    var R311 = parseFloat(document.getElementById('R311').value);
    var R312 = parseFloat(document.getElementById('R312').value);
    var R313 = parseFloat(document.getElementById('R313').value);
    var R314 = parseFloat(document.getElementById('R314').value);
    var SAE3 = parseFloat(document.getElementById('SAE3').value) * 40;

    if (isNaN(SAE3) || isNaN(R301) || isNaN(R302) || isNaN(R303) || isNaN(R304) || isNaN(R305) || isNaN(R306) || isNaN(R307) || isNaN(R308) || isNaN(R309) || isNaN(R310) || isNaN(R311) || isNaN(R312) || isNaN(R313) || isNaN(R314)) {
        alert("Il manque une note.");
        return;
    }

    var UE301 = (SAE3 + 15 * R301 + 10 * R302 + 12 * R303 + 15 * R304 + 8 * R311) / 100;
    var UE302 = (SAE3 + 5 * R301 + 13 * R302 + 5 * R303 + 5 * R306 + 17 * R308 + 10 * R309 + 5 * R312) / 100;
    var UE303 = (SAE3 + 5 * R301 + 22 * R305 + 18 * R306 + 10 * R309 + 5 * R312) / 100;
    var UE304 = (SAE3 + 10 * R301 + 25 * R307 + 5 * R308 + 5 * R309 + 10 * R310 + 5 * R311) / 100;
    var UE305 = (SAE3 + 10 * R303 + 8 * R304 + 18 * R310 + 10 * R311 + 7 * R312 + 7 * R313) / 100;
    var UE306 = (SAE3 + 5 * R304 + 16 * R310 + 8 * R312 + 16 * R313 + 15 * R314) / 100;


        document.getElementById('UE301').innerText = UE301.toFixed(2);
        document.getElementById('UE302').innerText = UE302.toFixed(2);
        document.getElementById('UE303').innerText = UE303.toFixed(2);
        document.getElementById('UE304').innerText = UE304.toFixed(2);
        document.getElementById('UE305').innerText = UE305.toFixed(2);
        document.getElementById('UE306').innerText = UE306.toFixed(2);

        if (UE301 >= 10 && UE302 >= 10 && UE303 >= 10 && UE304 >= 10 && UE305 >= 10 && UE306 >= 10) {
            document.getElementById('passage').style.color = "green";
            document.getElementById('passage').innerText = 'OUI';
        } else {
            document.getElementById('passage').style.color = "red";
            document.getElementById('passage').innerText = 'NON';
        }


});
