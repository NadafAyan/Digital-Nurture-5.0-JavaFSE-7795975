public class PayPalPayment implements PaymentStrategy {
    private String email;

    public PayPalPayment(String email) {
        this.email = email;
    }

    @Override
    public void pay(int amount) {
        System.out.println("Email: " + email);
        System.out.println("Paid " + amount + " using PayPal.");
    }
}
