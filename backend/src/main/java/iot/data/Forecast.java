package iot.data;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;

@XmlAccessorType(XmlAccessType.FIELD)
public class Forecast {

    @XmlAttribute
    private String date;

    @XmlElement(name = "night")
    private ForecastInfo night;

    @XmlElement(name = "day")
    private ForecastInfo day;

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public ForecastInfo getForecastInfoNight() {
        return night;
    }

    public void setForecastInfoNight(ForecastInfo forecastInfo) {
        this.night = forecastInfo;
    }

    public ForecastInfo getForecastInfoDay() {
        return day;
    }

    public void setForecastInfoDay(ForecastInfo forecastInfo) {
        this.day = forecastInfo;
    }
}
