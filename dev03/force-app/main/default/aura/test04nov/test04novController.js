({
	ev : function(component, event, helper) {
        alert('fire event')
		let g=event.getParam("name");
        alert('g >>'+g);
	},
          func1 : function(component, event, helper) {
             alert('inside func1');
            //     var func2 = component.get("c.func2");
            
            let x=component.get("v.name");
            let evn=component.getEvent("cmpEvent");
            evn.setParams({"name":x});
            evn.fire();
            
            //  $A.enqueueAction(func2);
            
            },
                fireApplicationEvent : function(cmp, event) {
        // Get the application event by using the
        // e.<namespace>.<event> syntax
        var appEvent = $A.get("e.c:aeEvent");
        appEvent.setParams({
            "message" : "An application event fired me. " +
            "It all happened so fast. Now, I'm everywhere!" });
        appEvent.fire();
    }
})