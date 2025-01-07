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
            actionapex.setParams({name:x});
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
            alert(' end of line')
            
            },
            
            func1 : function(component, event, helper) {
            alert('inside func1');
            //     var func2 = component.get("c.func2");
            
            let x=component.get("v.name");
            let evn=component.getEvent("cmpEvent");
            evn.setParams({name:x});
            evn.fire();
            
            //  $A.enqueueAction(func2);
            
            },
            
            func2 : function(component, event, helper) {
            
            alert('inside func2');
            },
            ev : function(component, event, helper) {
            alert('fire event');
            let g=event.getParam("name");
            alert('g >>'+g);
            
           component.set("v.name",g);
            },
             handleApplicationEvent : function(cmp, event) {
        var message = event.getParam("message");

        // set the handler attributes based on event data
        cmp.set("v.messageFromEvent", message);
        var numEventsHandled = parseInt(cmp.get("v.numEvents")) + 1;
        cmp.set("v.numEvents", numEventsHandled);
    }
            })