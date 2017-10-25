var div = 1;


function  startWatch() {

   window.addEventListener('keypress', function (event) {

        if(event.keyCode === 119) {
            div = 2;
            alert(div)
        } else if(event.keyCode = 115) {
            div = 3;
            alert(div)
        }

    });
}



startWatch();