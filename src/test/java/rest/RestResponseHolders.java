package rest;

import com.fasterxml.jackson.databind.JsonNode;

import javax.ws.rs.core.Response;

public class RestResponseHolders {
        public Response response;
        public String responseBody;
        public int responseStatus;
        public JsonNode json;
    }

