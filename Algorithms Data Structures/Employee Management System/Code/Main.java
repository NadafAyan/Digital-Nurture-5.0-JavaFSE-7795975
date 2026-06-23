public class Main {
    public static void main(String[] args) {
        Company company = new Company(5);

        company.addEmployee(new Employee(1, "Ayan", "developer", 40000));
        company.addEmployee(new Employee(2, "Almas", "tester", 50000));
        company.addEmployee(new Employee(3, "Punam", "sys admin", 60000));
        company.addEmployee(new Employee(4, "Vaibhav", "hr", 80000));
        company.addEmployee(new Employee(5, "Nikita", "network engineer", 70000));

        company.traverseEmployee();

        System.out.println();

        System.out.println("Searched Employee");
        company.searchEmployee(4);

        System.out.println();

        System.out.println("Employee Deleted");
        company.deleteEmployee(2);
        company.traverseEmployee();
    }    
}
