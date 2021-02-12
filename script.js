
$(function(){

    // socket io connect
    //pasitikrinti ar localstorage yra tuscias
    // ir jeigu jis tuscias trigerinam modal

    if(!localStorage.username)
    {
        $('#myModal').modal()

    }

    $('#modalButton').on('click', function(){
        var username = $('#modalInput').val();

    localStorage.setItem("username", username);

    })
    var message;

    //KAI SPAUDZIAME AND BTN 
    $('#send-message').on('click', function(){
        // console.log("labas")
        // noriu imti id message value
        
        message = $('#message').val();
        console.log(message)
        // socket.send(message)

        //si dalis keliaus zemiau, TIK PARODAU KAIP RODOME ZINUTES
        const p = document.createElement('p');
        p.innerHTML = message;
        $("#display-message-area").append(p);

  
        
    })

    // rodysim zinutes kai gaunam is socket io data
    // sukuriam nauja paragrapfa ir dedam prie display mesasge area
    // socket.on('message', data => {
    //     const p = document.createElement('p');
    //     p.innerHTML = data;
    //     $("#display-message-area").append(p);
    // })

})
