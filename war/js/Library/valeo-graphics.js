/**
 * Created by radia on 11/05/2015.
 */

jQuery(document).ready(function(){

    var width = $(window).width();
    if ( width >= 768) {
        $(".nav").find('.dropdown').on('hide.bs.dropdown', function () {
            return false;
        });
    }
   var navListItems = $('div.setup-panel div a'),
          allWells = $('.setup-content'),
          allNextBtn = $('.nextBtn');

  allWells.hide();

  navListItems.click(function (e) {
      e.preventDefault();
      var $target = $($(this).attr('href')),
              $item = $(this);

      if (!$item.hasClass('disabled')) {
          allWells.hide();
          $target.show();
          $target.find('input:eq(0)').focus();
      }
  });

  allNextBtn.click(function(){
      var curStep = $(this).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
          curInputs = curStep.find("input[type='text'],input[type='url']"),
          isValid = true;

      $(".form-group").removeClass("has-error");
      for(var i=0; i<curInputs.length; i++){
          if (!curInputs[i].validity.valid){
              isValid = false;
              $(curInputs[i]).closest(".form-group").addClass("has-error");
          }
      }

      if (isValid)
          nextStepWizard.removeAttr('disabled').trigger('click');
  });

  $('div.setup-panel div a.btn-success').first().trigger('click');
    function updateQueryStringParameter(uri, key, value) {
      var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
      var separator = uri.indexOf('?') !== -1 ? "&" : "?";
      if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
      }
      else {
        return uri + separator + key + "=" + value;
      }
    }
  $(".language li a").click(function(){
      console.log($(this).text() == " FR");
      $(".language-dropdown:first-child").html($(this).html() + ' <span class="caret"></span>');
      $(".language-dropdown:first-child").val($(this).text());
     /* if($(this).text() == " FR"){
          window.location.href = updateQueryStringParameter(window.location.href, "locale", "fr_FR")
      }
      else{
          window.location.href = updateQueryStringParameter(window.location.href, "locale", "en_US")
      }*/
   });

  $('.input-group.date').datepicker({
    autoclose: true
});


});
