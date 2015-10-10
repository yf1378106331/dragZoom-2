window.onload = function () {
    var oDiv = document.getElementById("compRB");
    var oDiv2 = document.getElementById("ablanuxe_com_2");
    var h2 = document.getElementById("s");
    var mouseStart = {};
    var divStart = {};
    var rightStart = {};
    var bottomStart = {};

    //往左右同时拽
    oDiv.onmousedown = function (ev) {
        var oEvent = ev || event;
        mouseStart.x = oEvent.clientX;
        mouseStart.y = oEvent.clientY;
        divStart.x = oDiv.offsetLeft;
        divStart.y = oDiv.offsetTop;
        if (oDiv.setCapture) {
            oDiv.onmousemove = doDrag;
            oDiv.onmouseup = stopDrag;
            oDiv.setCapture();
        }
        else {
            document.addEventListener("mousemove", doDrag, true);
            document.addEventListener("mouseup", stopDrag, true);
        }

    };
    function doDrag(ev) {
        var oEvent = ev || event;
        var l = oEvent.clientX - mouseStart.x + divStart.x;
        var t = oEvent.clientY - mouseStart.y + divStart.y;
        var w = l + oDiv.offsetWidth;
        var h = t + oDiv.offsetHeight;
        if (w < oDiv.offsetWidth) {
            w = oDiv.offsetWidth;
        }
        else if (w > document.documentElement.clientWidth - oDiv2.offsetLeft) {
            w = document.documentElement.clientWidth - oDiv2.offsetLeft - 2;
        }
        if (h < oDiv.offsetHeight) {
            h = oDiv.offsetHeight;
        }
        else if (h > document.documentElement.clientHeight - oDiv2.offsetTop) {
            h = document.documentElement.clientHeight - oDiv2.offsetTop - 2;
        }
        oDiv2.style.width = w + "px";
        oDiv2.style.height = h + "px";
    };
    function stopDrag() {
        if (oDiv.releaseCapture) {
            oDiv.onmousemove = null;
            oDiv.onmouseup = null;
            oDiv.releaseCapture();
        }
        else {
            document.removeEventListener("mousemove", doDrag, true);
            document.removeEventListener("mouseup", stopDrag, true);
        }

    };
    //h2完美拖拽
    h2.onmousedown = function (ev) {
        var oEvent = ev || event;
        mouseStart.x = oEvent.clientX;
        mouseStart.y = oEvent.clientY;
        divStart.x = oDiv2.offsetLeft;
        divStart.y = oDiv2.offsetTop;
        if (h2.setCapture) {
            h2.onmousemove = doDrag3;
            h2.onmouseup = stopDrag3;
            h2.setCapture();
        }
        else {
            document.addEventListener("mousemove", doDrag3, true);
            document.addEventListener("mouseup", stopDrag3, true);
        }

    };
    function doDrag3(ev) {
        var oEvent = ev || event;
        var l = oEvent.clientX - mouseStart.x + divStart.x;
        var t = oEvent.clientY - mouseStart.y + divStart.y;
        if (l < 0) {
            l = 0;
        }
        else if (l > document.documentElement.clientWidth - oDiv2.offsetWidth) {
            l = document.documentElement.clientWidth - oDiv2.offsetWidth;
        }
        if (t < 0) {
            t = 0;
        }
        else if (t > document.documentElement.clientHeight - oDiv2.offsetHeight) {
            t = document.documentElement.clientHeight - oDiv2.offsetHeight;
        }
        oDiv2.style.left = l + "px";
        oDiv2.style.top = t + "px";
    };
    function stopDrag3() {
        if (h2.releaseCapture) {
            h2.onmousemove = null;
            h2.onmouseup = null;
            h2.releaseCapture();
        }
        else {
            document.removeEventListener("mousemove", doDrag3, true);
            document.removeEventListener("mouseup", stopDrag3, true);
        }

    }
};