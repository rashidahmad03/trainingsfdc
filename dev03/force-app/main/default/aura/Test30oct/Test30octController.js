({
	myAction : function(component, event, helper) {
		let x=component.get("v.name");
        //alert(x);
        component.set('v.columns', [
            {label: 'Id', fieldName: 'Id', type: 'text'},
            {label: 'Account name', fieldName: 'Name', type: 'text'},
           
        ]);

        //helper.helperMethod(component,helper);
        var actionapex = component.get("c.getAccounts");
        actionapex.setCallback(this, function(response) {
            
                var statuscode=response.getState();      
            if(statuscode=='SUCCESS'){
                 alert(statuscode);  
            
            component.set("v.acclist",response.getReturnValue());
            }
            else if(statuscode=='ERROR'){
                alert('error')
            }
            
       });
          $A.enqueueAction(actionapex);
        
	},
   
    func1 : function(component, event, helper) {
     
   //     var func2 = component.get("c.func2");
   
            var name = component.find("name");
            alert(name);
        var localid = component.getLocalId();
         
        alert(localid);
      
var id = component.getGlobalId();
         
        alert(id);
      //  $A.enqueueAction(func2);
        
    },
    
    func2 : function(component, event, helper) {
        
        alert('inside func2');
    }

})