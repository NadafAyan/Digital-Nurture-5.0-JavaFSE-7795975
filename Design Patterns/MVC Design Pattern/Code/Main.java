
public class Main {
    public static void main(String[] args) {

        System.out.println();

        Student model = new Student("Ayan Nadaf", 1, "B");
        
        StudentView view = new StudentView();
        
        StudentController controller = new StudentController(model, view);
        
        controller.updateView();
        
        controller.setStudentName("Almas Shaikh");
        controller.setStudentGrade("A+");
        
        controller.updateView();
    }
}
