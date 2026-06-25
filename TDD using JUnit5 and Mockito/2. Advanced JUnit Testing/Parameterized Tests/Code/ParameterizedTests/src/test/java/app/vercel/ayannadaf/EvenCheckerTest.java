package app.vercel.ayannadaf;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.*;

public class EvenCheckerTest {
    EvenChecker checker = new EvenChecker();

    @ParameterizedTest
    @ValueSource(ints = {2,3,-5,2000,-8})
    public void testEven(int number) {
        assertTrue(checker.isEven(number));
    }

    @ParameterizedTest
    @ValueSource(ints = {6,3,7,-2,5460})
    public void testOdd(int number) {
        assertFalse(checker.isEven(number));
    }
}
