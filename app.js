$(()=>{
    $('form').on('submit', (event)=>{             // load the form

        event.preventDefault();                   // stops the

        const userInput = $('input[type="text"]').val();    //  gets value from the form
        $('form').trigger('reset');                 //gets us out of the input

	$.ajax({
            url:'https://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput
        }).then(
            (data)=>{
                $('#title').html(data.Title);
                $('#year').html(data.Year);
                $('#rated').html(data.Rated);
            },
            ()=>{
                console.log('bad');
            }
        );
    })
})
