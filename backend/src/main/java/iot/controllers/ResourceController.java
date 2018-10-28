package iot.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import iot.scheduler.ScheduledTasks;
import iot.util.XMLParser;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ResourceController {

    @CrossOrigin
    @RequestMapping("/weatherData")
    public JsonNode getWeatherData() throws JsonProcessingException {
        JsonNode jsonNode = XMLParser.XMLtoJSON(ScheduledTasks.xmlResponse.toString());
        return jsonNode;
    }
}
