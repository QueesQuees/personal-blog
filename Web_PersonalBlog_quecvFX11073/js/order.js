



/* function erro message */
function erroMessage(idElement, textTitle, lengthElement, maxLength) {
    if (lengthElement > maxLength) {
        idElement.setCustomValidity(textTitle);
    }else if (lengthElement == 0) {
        idElement.setCustomValidity("Ban chua dien phan nay");
        return false;
    } else {
        idElement.setCustomValidity('');
        return true;
    } 
}

/* kiểm tra phần Chọn sách */
function selectChon() {
    var idSelect = document.getElementById('selectBook');
    var valueSelect = idSelect.value;
    if (valueSelect == 'mkns' || valueSelect == 'htvpd' || valueSelect == 'kntcttn' || valueSelect == 'tk') {
        idSelect.setCustomValidity('');
    return true;
    } else {
        idSelect.setCustomValidity('Chon mot product');
        return false;
    }
}

function erroNoiDung() {
    /* Infomation for Noi dung */
    var idNoiDung = document.getElementById('contactFormMessage');
    var contentNoiDung = idNoiDung.title;
    var valueNoiDung = idNoiDung.value;
    var lengthNoiDung = valueNoiDung.length;
    var maxLengthNoiDung = 500;
    if (lengthNoiDung > maxLengthNoiDung) {
        idNoiDung.setCustomValidity(contentNoiDung);
        return false;
    }else if (lengthNoiDung == 0) {
        idNoiDung.setCustomValidity("Ban chua dien phan nay");
        return false;
    } else {
        idNoiDung.setCustomValidity("");
        alert("gui thanh cong");
        return true;
    } 
}

function subMit() {


    /* kiểm tra phần Chọn sách */
    selectChon();

    /* Infomation "Ten cua ban" */
    var idName = document.getElementById('yname');
    var contentName = idName.title;
    var valueName = idName.value;
    var lengthName = valueName.length;
    var maxLengthName = 100;
    erroMessage(idName, contentName, lengthName, maxLengthName);

    /* Infomation "Mau chu ky" */
    var idsigN = document.getElementById('sign');
    var contentSign = idsigN.title;
    var valueSign = idsigN.value;
    var lengthSign = valueSign.length;
    var maxLengthSign = 30;
    erroMessage(idsigN, contentSign, lengthSign, maxLengthSign);

    erroNoiDung();
}

/* tắt thông báo phàn date */
function daTe(mgs) {
    mgs.setCustomValidity('');
}
