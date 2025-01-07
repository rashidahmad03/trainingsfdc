public class AccountController {
    @auraEnabled
    public static List<Account> getAccounts(){
        list<Account> acclist=[select id,name from account limit 10];
        return acclist;
    }
}