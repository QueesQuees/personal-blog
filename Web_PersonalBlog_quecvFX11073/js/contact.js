/* function for Name */
function mesName(idElement, lengthElement, maxLengthElement, titleElement) {
    if (lengthElement > maxLengthElement) {
        idElement.setCustomValidity(titleElement);
    } else if (lengthElement == 0) {
        idElement.setCustomValidity('Hay nhap ten vao day');
    } else {
        idElement.setCustomValidity('')
    }
    return true;
}


/* Ham cho phan noi dung */
function messageText() {
    var idMessage = document.getElementById('yourmaseger');
    var valueMessage = idMessage.value;
    var lengthMessage = valueMessage.length;
    if (lengthMessage == 0) {
        idMessage.setCustomValidity("Hay nhap Noi dung vao day");
        return false;
    } else if (lengthMessage > 500) {
        idMessage.setCustomValidity("Nhap duoi 500 ky tu");
    } else {
        idMessage.setCustomValidity("");
        alert('gui thanh cong')
        return true;
    }
    return true;
}

/* Function for Chu de */
function mesSub() {
    var idSub = document.getElementById('subject');
    var valueSub = idSub.value;
    var lengthSub = valueSub.length;
    if (lengthSub < 25) {
        idSub.setCustomValidity('Nhap hon 25 ky tu');
    } else if (lengthSub > 100) {
        idSub.setCustomValidity('nhap duoi 100 ky tu');
    } else {
        idSub.setCustomValidity('');
        return true;
    }
}

/* ham thong bao loi cho mail */
function errorEmail() {
    var idEmail = document.getElementById('yourmail');
    var regExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    var email = document.getElementById('yourmail').value;
    if (regExp.test(email) == true) {
        idEmail.setCustomValidity("");
    } else {
        idEmail.setCustomValidity('nhap sai email. Mail phai co "@", ".com"');
    }
    return true;
}

    /* thong bao khi submit thanh cong */
    /* function loadXMLDoc() {
    var xhtml = new XMLHttpRequest();
    xhtml.onreadystatechange = function() {
        alert('gui du lieu thanh cong');
        
    } 
    }*/

/* goi ham khi an submit */
function subMit() {
    /* thong tin phan Ten */
    var idNameYou = document.getElementById("nameyou");
    var valueNameYou = idNameYou.value;
    var lengthNameYou = valueNameYou.length;
    var titleNameYou = idNameYou.title;
    var maxLengthNameYou = 100;
    mesName(idNameYou, lengthNameYou, maxLengthNameYou, titleNameYou);/* thong bao loi phan ten */

    mesSub();/* thong bao loi phan chu de */

    messageText();/* goi ham thong bao loi cho Noi dung */

    errorEmail();

    //loadXMLDoc();

    return true;
}




