(function($){
  $(function(){
      
    $('.sidenav').sidenav();
    $('.fixed-action-btn').floatingActionButton();
    


    var options = { "swipeable": true };
    var el = document.getElementById('tabs');
    var tabsInstance = M.Tabs.init(el, options);

    
  }); // end of document ready
})(jQuery); // end of jQuery name space

function showInfo() {
  jQuery.each( info.modules, function(i, mp) {
    $('#test-swipe-3 .collapsible').first().append('<li><div class="collapsible-header">'+mp.code+' - '+mp.name+'</div><div class="collapsible-body"><div class="row"></div></div></li>');

    jQuery.each( mp.ufs, function(j, uf) {
      $('#test-swipe-3 .row').last().append('<label><div class="col s6 m4" style="color:black;"><input class="ufs" type="checkbox"><span>'+uf.code+' - '+uf.name+'</span></div></label>');
    })

    
  });

  jQuery.each(userInfo, function (i, u){
    $('#test-swipe-4 .collection').first().append(`<li class="collection-item">${i}: ${u}</li>`)
  })
}

function calculatePrice(){
  let UF_PRICE = 25
  let finalPrice = 0;
  let count = 0;
  $('#test-swipe-3 input[type="checkbox"]:checked').each(function(){
    count++;
    if ((UF_PRICE * count) > 360) {
      finalPrice = 360;
    } else {
      finalPrice = UF_PRICE * count;
    }
  })
  $('span.total-price').text(`${finalPrice} €`);

}

function lockUFs() {
  $('#test-swipe-3 input[type="checkbox"]').each(function () {
    $(this).attr('disabled', function(_, attr){ return !attr});
  })
}

function toggleSelection(){
  $('#test-swipe-3 input[type="checkbox"]').each(function () {
    $(this).attr('checked', function(_, attr){ return !attr});
  })
}


document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    
    $(document).ready(function(){
      $('.collapsible').collapsible();
      showInfo();
      $('#test-swipe-3 input[type="checkbox"]').each(function () {
        $(this).on('click', calculatePrice)
      })
      $('#test-swipe-3 button#lock').on('click', lockUFs)
      $('#test-swipe-3 button#select-all').on('click', toggleSelection)

      
    });
  }