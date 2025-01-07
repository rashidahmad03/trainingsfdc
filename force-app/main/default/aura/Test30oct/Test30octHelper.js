({
	helperMethod : function(component,helper) {
		helper.helperMethod1(component);
	},
    helperMethod1 : function(component) {
        let acc=component.get("v.account").Name;
		component.set("v.name",acc);
	},
})