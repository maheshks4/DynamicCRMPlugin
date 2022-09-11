function DisplayHelloWorld(executionContext)
{
    var formContext = executionContext.getFormContext();  
    
    var firstName = formContext.getAttribute("firstname").getValue();    

    formContext.ui.setFormNotification("DisplayHelloWorld called & captured firstname" + firstName, "INFO", "1");
}


var Sdk = window.Sdk || {};
(
    function () {

        this.formOnload = function (executionContext) {
            var formContext = executionContext.getFormContext();
            var firstName = formContext.getAttribute("firstname").getValue();            
            formContext.ui.setFormNotification("SDK onload called & captured firstname" + firstName, "INFO", "1");
        }

    }  
    
).call(Sdk);
