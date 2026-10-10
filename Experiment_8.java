
import java.util.Scanner;
class Employee {
    String name;
    double basicSalary;

    Employee(String name, double basicSalary) {
        this.name = name;
        this.basicSalary = basicSalary;
    }

    void calculateSalary() {

    }

}

class ContractEmployee extends Employee {
    ContractEmployee(String name, double basicSalary) {
        super(name, basicSalary);
    }

    @Override
    void calculateSalary() {
        double mysalary = super.basicSalary * 1.1;
        System.out.println("Final Salary: " + mysalary);
    }
}

class PermanentEmployee extends Employee {
    PermanentEmployee(String name, double basicSalary) {
        super(name, basicSalary);
    }

    @Override
    void calculateSalary() {
        double mysalary = super.basicSalary * 1.2;
        System.out.println("Final Salary: " + mysalary);
    }
}

public class experiment {
    public static void main(String[] args) {
        int test;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number of testcases: ");
        test = sc.nextInt();
        for (int i = 0; i < test; i++) {
            String employee_type;
            String employee_name;
            double salary;
            employee_type = sc.next();
            employee_name = sc.next();
            salary = sc.nextDouble();
            if (employee_type.equals("P")) {
                PermanentEmployee emp = new PermanentEmployee(employee_name, salary);
                System.out.println("Employee: " + emp.name);
                emp.calculateSalary();

            } else {
                ContractEmployee emp = new ContractEmployee(employee_name, salary);
                System.out.println("Employee: " + emp.name);
                emp.calculateSalary();
            }
        }
        sc.close();
    }
}
