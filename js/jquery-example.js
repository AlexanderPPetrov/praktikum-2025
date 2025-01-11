$(document).on('click', '.logo', function() {
    console.log('logo on click')
})

$('.logo').on('click', function() {
    console.log('tralala')
})

//Document ready callback

$(function() {

   
    $('header')
    .find('.btn-success')
    .on('click', function(event) {

        const $button = $(this)
        const isActive = $button.hasClass('btn-success')
        
        if(isActive) {
            $button.addClass('btn-danger')
            .removeClass('btn-success')
            return
        } 

        $button.removeClass('btn-danger')
        .addClass('btn-success')
      

   
    })

    function renderData(response) {
        const firstElements = response.slice(0, 10)
        firstElements.forEach(({ title }) => {
            const listItem = 
            $('<li class="list-group-item text-truncate"></li>').text(title)
            $('#data-container').append(listItem)
        })
    }

    function clearRenderedData() {
        $('#data-container .list-group-item').remove()
    }

    function renderError() {
        const error = $('<div class="alert alert-danger" role="alert"></div>')
        .text("Нещо се обърка, презареди страницата")

        $('#data-container').append(error)
    }

    function clearError() {
        $('#data-container .alert-danger').remove()
    }

    function addLoader() {}

    function removeLoader() {}


    function loadData() {
        addLoader()
        clearError()
        clearRenderedData()
        // $.ajax({
        //     method: "GET",
        //     url: "https://jsonplaceholder.typicode.com/posts",
        // })
        // .done(function(response) {
        //     renderData(response)
        // })
        // .fail(function(error) {
        //     renderError()
        // })
        // .always(function() {
        //     removeLoader()
        // })

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            renderData(json)
        })
        .catch((e) => {
            renderError()
        })
        .finally(() => {
            removeLoader()
        })
        
        
    }

   
    $('#load-data-btn').on('click', function() {
        loadData()
    })

    $('#delete-data-btn').on('click', function() {
        clearRenderedData()
    })

   

    

});



function doSomething(callback) {
    //.
    //..
    //...
    //....
    const result = 3 + 4
    callback(result)
}

function logResult(result) {
    console.log(result)
}

doSomething(logResult)




