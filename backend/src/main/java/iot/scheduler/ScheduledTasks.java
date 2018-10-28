package iot.scheduler;

import java.io.*;
import java.net.URL;

import java.net.HttpURLConnection;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;


@Component
public class ScheduledTasks {

    private static final Logger log = LoggerFactory.getLogger(ScheduledTasks.class);

    public static StringBuilder xmlResponse = new StringBuilder();

    private final String USER_AGENT = "Mozilla/5.0";

    @Scheduled(fixedRate = 900000)
    public void reportCurrentTime() throws IOException {
		xmlResponse.setLength(0);

        log.info("Getting information from weather API");

        String url = "http://www.ilmateenistus.ee/ilma_andmed/xml/forecast.php?lang=eng";

        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        con.setRequestMethod("GET");
        con.setRequestProperty("User-Agent", USER_AGENT);

        BufferedReader in = new BufferedReader(
                new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

		xmlResponse.append(response).toString();
    }
}
