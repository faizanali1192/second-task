function codeAddress() {
    let btn = document.getElementById('btn');
    let image = document.getElementById('myimg');


    fetch('https://api.unsplash.com/photos/?client_id=9zbKcKlpuPxN_veyWG3N9joIWUlfKIdeg_RexaZWgHE').then(res => res.json()).then(result => {

        // console.log(result)
        result.forEach(element => {
            console.log(element.urls.raw)
            image.src = element.urls.raw
        });
    }).catch(err => console.log(err))
}
window.onload = codeAddress;



let image = document.getElementById('myimg');
image.onclick = function () {
    var url = image.src
    var canvas = new fabric.Canvas('canvas', {
        width: 700,
        height: 400,
        backgroundColor: 'yellow'
    });

    fabric.Image.fromURL(url, function (myImg) {
        var img1 = myImg.set({ left: 220, top: 0, width: 250, height: 150 });
        canvas.add(img1);
    });

}



let dlt = document.getElementById('deletebtn');
dlt.onclick = function () {
    var canvas = new fabric.Canvas('canvas');
    canvas.backgroundColor = 'yellow';
    var url = ""
    fabric.Image.fromURL(url, function (myImg) {
        var img1 = myImg.set({ left: 0, top: 0, width: 150, height: 150 });
        canvas.add(img1);
    });
}