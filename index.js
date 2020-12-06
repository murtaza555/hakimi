window.onload = function() {



    document.getElementById("message_whatsapp").addEventListener('click', function(e) {

        console.log('hello')
        let msg = encodeURIComponent("I am interested in your products");
        let number = '+919624606852'
        const href = `https://wa.me/${number}/?text=${msg}`;

        location.replace(href)

    })





    document.getElementById("products").addEventListener('click', function(e) {

        document.getElementById('products_div').scrollIntoView();

    })

    document.getElementById("gallery").addEventListener('click', function(e) {

        document.getElementById('gallery_div').scrollIntoView();

    })

    document.getElementById("contact").addEventListener('click', function(e) {

        document.getElementById('contact_div').scrollIntoView();

    })
    document.getElementById("contact_bottom").addEventListener('click', function(e) {

        document.getElementById('contact_div').scrollIntoView();

    })
    document.getElementById("about_bottom").addEventListener('click', function(e) {

        document.getElementById('about_div').scrollIntoView();

    })


    document.getElementById("navAction").addEventListener('click', function(e) {

        href_tel = "tel:9624606852";
        location.replace(href_tel)


    })

    // document.addEventListener("scroll", function() {

    //     var x = document.activeElement.className;

    //     var scrollpos1 = window.scrollY;

    //     console.log(scrollpos1x)

    // })

}