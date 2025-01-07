public with sharing class ContactController {
    public ContactController() {

    }
    
   

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
         List<Contact> ls = new List<Contact>();
        try {

           ls= new list<contact>([SELECT FirstName,LastName,Email FROM contact  where FirstName!=null limit 5  ]);
        }catch (Exception e) {
            // "Convert" the exception into an AuraHandledException
            throw new AuraHandledException('Here is what');    
        }

return ls;
    }
    
    
}