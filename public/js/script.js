function visible(index) {
    const data = $('.form-floating.d-flex').eq(index);
    if (data.children('button').children('ion-icon').attr('name') == 'eye-outline') {
        data.children('button').children('ion-icon').attr('name', 'eye-off-outline')
        data.children('input').attr('type', 'text');
    } else {
        data.children('button').children('ion-icon').attr('name', 'eye-outline')
        data.children('input').attr('type', 'password');
    }
}