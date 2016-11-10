package models;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import org.joda.time.DateTime;
import org.joda.time.LocalDate;

@JsonAutoDetect
public class Origin {
    public int registrationId;
    public String status;
    public LocalDate registrationDate;
    public DateTime processingDate;
    public boolean isActive;
    public double cost;

}
