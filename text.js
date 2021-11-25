
function heading() {
    var text = document.getElementById("heading").value;

    var canvas = new fabric.Canvas('canvas', {
        width: 700,
        height: 400,

    });
    var text = new fabric.Text(text, {
        fontSize: 70
    });

    // Render the Text on Canvas
    canvas.add(text);
}


function subHeading() {
    var text = document.getElementById("subheading").value;

    var canvas = new fabric.Canvas('canvas', {
        width: 700,
        height: 400,

    });
    var text = new fabric.Text(text, {
        fontSize: 40
    });

    // Render the Text on Canvas
    canvas.add(text);


}

function paragraph() {
    var text = document.getElementById("paragraph").value;

    var canvas = new fabric.Canvas('canvas', {
        width: 700,
        height: 400,

    });
    var text = new fabric.Text(text, {
        fontSize: 20
    });

    // Render the Text on Canvas
    canvas.add(text);


}


let dlt = document.getElementById('deletebtn');
dlt.onclick = function () {
    document.getElementById("heading").value = "";
    document.getElementById("subheading").value = "";
    document.getElementById("paragraph").value = "";


    var canvas = new fabric.Canvas('canvas', {
        width: 700,
        height: 400,

    });
    var text = new fabric.Text(text, {
        fontSize: 20
    });

    // Render the Text on Canvas
    canvas.add(text);

}