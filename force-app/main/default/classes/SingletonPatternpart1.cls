public class SingletonPatternpart1 {
    private static SingletonPatternpart1 instance;
    private static Map<String,Account> accountMap;
    private SingletonPatternpart1() {
        accountMap=new Map<String,Account>();
        for(Account acct:[Select id, name,type from account limit 2000]){
            
            accountMap.put(acct.Name,acct);
        }
        
    }
    
    public Account getAccount(String Name){
        
        return accountMap.get(Name);
    }
    public static SingletonPatternpart1 getIntancetype(){
        if(instance == null)
            instance = new SingletonPatternpart1();
        
        return instance;
    }
}