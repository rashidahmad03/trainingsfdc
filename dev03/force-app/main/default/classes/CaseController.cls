public with sharing class CaseController {
   @AuraEnabled(cacheable=true)
   public static List<Case> getAllCases(String subject) {
      List<Case> ls = new List<Case>();
   
        ls= new list<case>([SELECT Id,subject, CaseNumber,Status FROM Case where subject=:subject]);
    return ls;
}