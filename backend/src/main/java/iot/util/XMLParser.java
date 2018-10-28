package iot.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import iot.data.Forecasts;

import javax.xml.bind.JAXB;
import java.io.StringReader;

public final class XMLParser {


    public static JsonNode XMLtoJSON(String xml) throws JsonProcessingException {
        StringReader reader = new StringReader(xml);
        Forecasts catalog = JAXB.unmarshal(reader, Forecasts.class);

        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValueAsBytes(catalog);
        JsonNode jsonNode = mapper.valueToTree(catalog);

        return jsonNode;
    }

}
