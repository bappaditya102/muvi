$(document).ready(function () {
    if ($(window).outerWidth() > 992) {
        $("nav.side-navbar").mCustomScrollbar({
            scrollInertia: 200
        });
    }
    //sidenav
    $('#toggle-btn').on('click', function (e) {

        e.preventDefault();

        if ($(window).outerWidth() > 1198) {
            $('nav.side-navbar').toggleClass('shrink');
            $('.page').toggleClass('active');
        } else {
            $('nav.side-navbar').toggleClass('show-sm');
            $('.page').toggleClass('active-sm');
        }
    });
    //add content
    $(".add-content").click(function(){
        $(".content-propertices").addClass("cp-open");
    })
    $(".cp-close").click(function(){
        $(".content-propertices").removeClass("cp-open");
    })

    var input = document.querySelector('input[name=tags]');
    new Tagify(input)

    var input1 = document.querySelector('input[name=tags1]');
    new Tagify(input1)

    var input2 = document.querySelector('input[name=tags2]');
    new Tagify(input2)

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        nav:false,
        responsive:{
            0:{
                items:3,                
            },
            600:{
                items:3,
                
            },
            1000:{
                items:4,               
                loop:false
            }
        }
    })

    $('#prim_skills').multiselect({
        nonSelectedText: 'Movies',
        enableFiltering: true,
        enableCaseInsensitiveFiltering: true,
        buttonWidth:'100%',
        });
        
        $('#prim_skills_form').on('submit', function(event){
        event.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
        url:"insert.php",
        method:"POST",
        data:form_data,
        success:function(data)
        {
        $('#prim_skills option:selected').each(function(){
        $(this).prop('selected', false);
        });
        $('#prim_skills').multiselect('refresh');
        alert(data);
        }
        });
        });


        $('#prim_skills_1').multiselect({
            nonSelectedText: 'Movies Kart',
            enableFiltering: true,
            enableCaseInsensitiveFiltering: true,
            buttonWidth:'100%',
            });
            
            $('#prim_skills_form_1').on('submit', function(event){
            event.preventDefault();
            var form_data = $(this).serialize();
            $.ajax({
            url:"insert.php",
            method:"POST",
            data:form_data,
            success:function(data)
            {
            $('#prim_skills_1 option:selected').each(function(){
            $(this).prop('selected', false);
            });
            $('#prim_skills_1').multiselect('refresh');
            alert(data);
            }
            });
            });

            $('#prim_skills_2').multiselect({
                nonSelectedText: 'Last Update',
                enableFiltering: true,
                enableCaseInsensitiveFiltering: true,
                buttonWidth:'100%',
                });
                
                $('#prim_skills_form_2').on('submit', function(event){
                event.preventDefault();
                var form_data = $(this).serialize();
                $.ajax({
                url:"insert.php",
                method:"POST",
                data:form_data,
                success:function(data)
                {
                $('#prim_skills_2 option:selected').each(function(){
                $(this).prop('selected', false);
                });
                $('#prim_skills_2').multiselect('refresh');
                alert(data);
                }
                });
                });

                $('#prim_skills_3').multiselect({
                    nonSelectedText: 'Video',
                    enableFiltering: true,
                    enableCaseInsensitiveFiltering: true,
                    buttonWidth:'100%',
                    });
                    
                    $('#prim_skills_form_3').on('submit', function(event){
                    event.preventDefault();
                    var form_data = $(this).serialize();
                    $.ajax({
                    url:"insert.php",
                    method:"POST",
                    data:form_data,
                    success:function(data)
                    {
                    $('#prim_skills_3 option:selected').each(function(){
                    $(this).prop('selected', false);
                    });
                    $('#prim_skills_3').multiselect('refresh');
                    alert(data);
                    }
                    });
                    });

});