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
    if ($(window).width() > 768) {
        if ($(window).scrollTop() >= 205) {
            //      $('#panelwell-details').addClass('fixedposition');
            $('#navbar-2').addClass('navfixedbtn');
            $('#createorder-section').css('margin-top', '185px');
        } else {
            //      $('#panelwell-details').removeClass('fixedposition');
            $('#navbar-2').removeClass('navfixedbtn');
            $('#createorder-section').css('margin-top', '0px');
        }
    }

});


function loadComponentTable() {
    $('#example').DataTable({
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
            text: '<i class="fa fa-plus" aria-hidden="true"></i> Add new component',
            className: 'btn btn-default btn-sm',
            action: function() {
                window.location.href = "/#componentdetails";
            }
        }]
    });
}
