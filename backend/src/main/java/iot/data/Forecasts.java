package iot.data;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import java.util.ArrayList;
import java.util.List;

@XmlAccessorType(XmlAccessType.FIELD)
public class Forecasts {

    @XmlElement(name = "forecast")
    private List<Forecast> forecasts = new ArrayList<Forecast>();

    public List<Forecast> getForecasts()
    {
        return forecasts;
    }

    public void setForecasts(List<Forecast> forecasts)
    {
        this.forecasts = forecasts;
    }
}
