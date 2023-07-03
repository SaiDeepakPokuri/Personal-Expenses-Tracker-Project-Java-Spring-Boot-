import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class Main {
    public static void main(String []args){
        try{
            Connection conn = DriverManager.getConnection("jdbc:sqlite:C:\\Users\\prems\\IdeaProjects\\TestDB\\testjava.db");
            Statement statement = conn.createStatement();
            statement.execute("CREATE TABLE IF NOT EXISTS contacts (name TEXT,phone INTEGER,email TEXT)");
//            statement.execute("INSERT INTO contacts (name, phone, email) VALUES('Tim',6545678,'tim@email.com')");
//            statement.execute("INSERT INTO contacts (name, phone, email) VALUES('Jane',8986736,'Jane@email.com')");
//            statement.execute("INSERT INTO contacts (name, phone, email) VALUES('Smith',4585678,'Smith@email.com')");
//            statement.execute("UPDATE contacts SET phone=555555 WHERE name='Jane'");
            statement.execute("DELETE FROM contacts WHERE name='Tim'");
//            statement.execute("DELETE FROM contacts WHERE name='Smith'");
            statement.close();
            conn.close();
        } catch(SQLException e){
            System.out.println("Something went wrong: " + e.getMessage());
        }
    }
}
