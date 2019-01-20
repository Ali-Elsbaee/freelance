var menu = document.getElementById('menu');

document.onload = set_popup_height();

function drop_nav_menu() {
    var flag = true;
    if (menu.style.display === 'none' || menu.style.display === '') {
        flag = false;
    }
    close_all_menus();
    if (!flag) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

function drop_action_menu(edit) {
    var action = edit.nextElementSibling;
    var flag = true;
    if (action.style.display === 'none' || action.style.display === '') {
        flag = false;
    }
    close_all_menus();
    if (!flag) {
        action.style.display = 'block';
    } else {
        action.style.display = 'none';
    }
}

var checkboxes = document.getElementsByName('checkbox');
function check_all(source) {
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = source.checked;
    }
}

function check_if_all_checked() {
    var flag = true;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked == false) {
            flag = false;
        }
    }
    document.getElementById('check-all').checked = flag;
}

document.body.addEventListener('click', function (e) {
    if (!(e.target.id === 'drop-menu-btn') && !(e.target.classList.contains('ion-android-menu'))) {
        close_all_menus();
    }
});

function close_all_menus() {
    var actions = document.getElementsByClassName('ion-android-menu');
    for (var i = 0; i < actions.length; i++) {
        actions[i].nextElementSibling.style.display = 'none';
    }
    menu.style.display = 'none';
}


function set_popup_height() {
    var popups = document.getElementsByClassName('popup-body');
    for (var i = 0; i <popups.length; i++) {
        popups[i].style.height = (window.innerHeight - 120) + 'px';
    }
}

function close_popups() {
    var popups = document.getElementsByClassName('popup');
    for (var i = 0; i < popups.length; i++) {
        popups[i].style.display = 'none';
    }
}

function open_sales_popup() {
    document.getElementById('sales-order-popup').style.display = 'block';
}

function open_cash_popup() {
    document.getElementById('cash-order-popup').style.display = 'block';
}

function change_tab(id) {
    if (id === 'so-details-lbl') {
        document.getElementById('so-details').style.display = 'block';
        document.getElementById('so-item-details').style.display = 'none';
    } else if (id === 'so-item-details-lbl') {
        document.getElementById('so-item-details').style.display = 'block';
        document.getElementById('so-details').style.display = 'none';
    } else if (id === 'cs-details-lbl') {
        document.getElementById('cs-details').style.display = 'block';
        document.getElementById('cs-item-details').style.display = 'none';
    } else if (id === 'cs-item-details-lbl') {
        document.getElementById('cs-item-details').style.display = 'block';
        document.getElementById('cs-details').style.display = 'none';
        document.getElementById('pay-details').style.display = 'none';
    } else if (id === 'pay-details-lbl') {
        document.getElementById('pay-details').style.display = 'block';
        document.getElementById('cs-details').style.display = 'none';
        document.getElementById('cs-item-details').style.display = 'none';
    }
}

function check_other_pay_method() {
    document.getElementById('other-pay').checked = 'true';
}