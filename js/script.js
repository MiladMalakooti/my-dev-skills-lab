$('.add').on('click', function(e) {
    e.preventDefault();
    let skill = $('#input').val();
    console.log(skill);

    let template = 
    `<div class="skills">
    <button class="remove">x</button>
    <p>${skill}</p>
    </div>`

    $('form').append(template);
        $('#input').val('');

})

$('form').on('click', 'button', function() {
    var row = $(this).closest('.skills');
    row.remove();  
});