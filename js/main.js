function GetURLParameter(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}


jQuery(document).ready(function (){
	var hasRegistered = GetURLParameter('thank_you');
	if (hasRegistered == 1) {
		jQuery(".sign-up-shortcut").hide();
		jQuery(".thank-you-message").css('display', 'inline-block');
	}
});
