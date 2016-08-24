$(document).ready(function() {

    $('#planningcust-table').DataTable({

        dom: 'Bfrtip',
        responsive: {
            details: {
                type: 'column',
                target: -1
            }
        },
        columnDefs: [{
            className: 'control',
            orderable: false,
            targets: -1
        }],
        buttons: [{
            text: '<i class="fa fa-plus" aria-hidden="true"></i> New',
            className: 'btn btn-default btn-sm',
            action: function() {
                $('#plancustdevlivery-modal').modal('show');
            }
        }]
    });
});
$(window).scroll(function(event) {
//    if ($(window).width() > 992) {
//        if ($(window).scrollTop() >= 205) {
//            $('#navbar-2').addClass('navfixedbtn');
//            $('#createorder-section').css('margin-top', '185px');
//        } else {
//            $('#navbar-2').removeClass('navfixedbtn');
//            $('#createorder-section').css('margin-top', '0px');
//        }
//    }

});


