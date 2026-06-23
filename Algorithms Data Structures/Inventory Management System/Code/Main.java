public class Main {
    public static void main(String[] args) {
        Inventory inventory = new Inventory();

        inventory.addProduct(new Product(1, "Cotton Crewneck T-Shirt", 100, 800));
        inventory.addProduct(new Product(2, "Slim Fit Button-Down", 400, 700));
        inventory.addProduct(new Product(3, "Hooded Sweatshirt", 700, 800));
        inventory.addProduct(new Product(4, "enim Jacket", 500, 600));
        inventory.addProduct(new Product(5, "Nike Air Max Sneakers", 700, 5000));

        inventory.displayProduct();
        System.out.println();

        inventory.updateProduct(new Product(5, "RAM", 500, 3000));

        inventory.displayProduct();
        System.out.println();

        inventory.removeProduct(5);

        inventory.displayProduct();
    }
}
