import java.util.HashSet;

class Employe{
    String name;
     int age;

     Employe(String name , int age){
        this.name=name;
        this.age=age;
     }

    @Override
    public String toString() {
        return "Employe [name=" + name + ", age=" + age + "]";
    }

}

public class Main{
    public static void main(String[] args) {
        System.out.println("Hellot");

        HashSet<Employe> hs = new HashSet<>();
        hs.add(new Employe("abhishek", 23));
        hs.add(new Employe("abhishek", 23));

        System.out.println(hs);

    }
}