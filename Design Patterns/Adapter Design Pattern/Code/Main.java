public class Main {
    public static void main(String[] args) {

        PaymentProcessor paymentProcessor = new GpayAdapter();
        paymentProcessor.processPayment(2500.00);

        System.out.println();

        paymentProcessor = new PaypalAdapter();
        paymentProcessor.processPayment(3200.00);
    }
}
