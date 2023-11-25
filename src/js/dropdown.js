document.addEventListener('DOMContentLoaded', function () {
    // Получаем ссылку и выпадающий контент
    var dropdownTrigger = document.getElementById('dropdownTrigger');
    var dropdownContent = document.getElementById('dropdownContent');

    // Показываем/скрываем выпадающий контент при клике на ссылку
    dropdownTrigger.addEventListener('click', function () {
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });

    // Закрываем выпадающий контент при клике вне него
    document.addEventListener('click', function (event) {
        if (!event.target.matches('#dropdownTrigger') && !event.target.matches('#dropdownContent')) {
            dropdownContent.style.display = 'none';
        }
    });
});