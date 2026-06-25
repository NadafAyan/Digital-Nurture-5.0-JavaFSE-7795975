import static org.mockito.Mockito.*;

import app.vercel.ayannadaf.ExternalAPI;
import app.vercel.ayannadaf.MyService;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;


public class MyServiceTest {

    @Test
    void testExternalApi() {

        // Step 1: Create Mock Object
        ExternalAPI mockApi = mock(ExternalAPI.class);

        // Step 2: Stub the Method
        when(mockApi.getData()).thenReturn("Mock Data");

        // Step 3: Use Mock in Service
        MyService service = new MyService(mockApi);

        // Call Service Method
        String result = service.fetchData();

        // Verify Result
        assertEquals("Mock Data", result);

        // Verify Method Invocation
        verify(mockApi).getData();
    }
}