$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("delete.feature");
formatter.feature({
  "line": 1,
  "name": "This feature will test the DELETE request of a REST API",
  "description": "",
  "id": "this-feature-will-test-the-delete-request-of-a-rest-api",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify the delete request send by rest api",
  "description": "",
  "id": "this-feature-will-test-the-delete-request-of-a-rest-api;verify-the-delete-request-send-by-rest-api",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@suite"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User wants to delete registration by id \"987654321\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User should receive \"200\" as Status code",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User should receive following response body",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 8
    },
    {
      "cells": [
        "registrationId",
        "987654321"
      ],
      "line": 9
    },
    {
      "cells": [
        "status",
        "Deleted"
      ],
      "line": 10
    },
    {
      "cells": [
        "registrationDate",
        "2016-10-24"
      ],
      "line": 11
    },
    {
      "cells": [
        "processingDate",
        "2016-10-25T09:30:47Z"
      ],
      "line": 12
    },
    {
      "cells": [
        "isActive",
        "true"
      ],
      "line": 13
    },
    {
      "cells": [
        "cost",
        "100.75"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should receive following response body key and types",
  "rows": [
    {
      "cells": [
        "key",
        "type"
      ],
      "line": 16
    },
    {
      "cells": [
        "registrationId",
        "int"
      ],
      "line": 17
    },
    {
      "cells": [
        "status",
        "string"
      ],
      "line": 18
    },
    {
      "cells": [
        "registrationDate",
        "date"
      ],
      "line": 19
    },
    {
      "cells": [
        "processingDate",
        "datetime"
      ],
      "line": 20
    },
    {
      "cells": [
        "isActive",
        "boolean"
      ],
      "line": 21
    },
    {
      "cells": [
        "cost",
        "double"
      ],
      "line": 22
    },
    {
      "cells": [
        "nullKey",
        "null"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "987654321",
      "offset": 41
    }
  ],
  "location": "RestStepDefs.user_wants_to_delete_registration_by_id(String)"
});
formatter.result({
  "duration": 24387807933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "RestStepDefs.user_should_receive_as_Status_code(String)"
});
formatter.result({
  "duration": 1495237,
  "status": "passed"
});
formatter.match({
  "location": "RestStepDefs.user_should_receive_following_response_body(DataTable)"
});
formatter.result({
  "duration": 1220948,
  "status": "passed"
});
formatter.match({
  "location": "RestStepDefs.user_should_receive_following_response_body_key_and_types(DataTable)"
});
formatter.result({
  "duration": 1547630,
  "status": "passed"
});
formatter.uri("get.feature");
formatter.feature({
  "line": 1,
  "name": "This feature will test the GET request of a REST API",
  "description": "",
  "id": "this-feature-will-test-the-get-request-of-a-rest-api",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "User wants to get registration by id",
  "description": "",
  "id": "this-feature-will-test-the-get-request-of-a-rest-api;user-wants-to-get-registration-by-id",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@suite"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User requests for registration detail for id \"123456789\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User should receive \"200\" as Status code",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User should receive following response body",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 8
    },
    {
      "cells": [
        "registrationId",
        "123456789"
      ],
      "line": 9
    },
    {
      "cells": [
        "status",
        "Approved"
      ],
      "line": 10
    },
    {
      "cells": [
        "registrationDate",
        "2016-10-24"
      ],
      "line": 11
    },
    {
      "cells": [
        "processingDate",
        "2016-10-25T09:30:47Z"
      ],
      "line": 12
    },
    {
      "cells": [
        "isActive",
        "true"
      ],
      "line": 13
    },
    {
      "cells": [
        "cost",
        "100.75"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should receive following response body key and types",
  "rows": [
    {
      "cells": [
        "key",
        "type"
      ],
      "line": 16
    },
    {
      "cells": [
        "registrationId",
        "int"
      ],
      "line": 17
    },
    {
      "cells": [
        "status",
        "string"
      ],
      "line": 18
    },
    {
      "cells": [
        "registrationDate",
        "date"
      ],
      "line": 19
    },
    {
      "cells": [
        "processingDate",
        "datetime"
      ],
      "line": 20
    },
    {
      "cells": [
        "isActive",
        "boolean"
      ],
      "line": 21
    },
    {
      "cells": [
        "cost",
        "double"
      ],
      "line": 22
    },
    {
      "cells": [
        "nullKey",
        "null"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "123456789",
      "offset": 46
    }
  ],
  "location": "RestStepDefs.user_requests_for_registration_detail(String)"
});
formatter.result({
  "duration": 15776714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "RestStepDefs.user_should_receive_as_Status_code(String)"
});
formatter.result({
  "duration": 46167,
  "status": "passed"
});
formatter.match({
  "location": "RestStepDefs.user_should_receive_following_response_body(DataTable)"
});
formatter.result({
  "duration": 102665,
  "status": "passed"
});
formatter.match({
  "location": "RestStepDefs.user_should_receive_following_response_body_key_and_types(DataTable)"
});
formatter.result({
  "duration": 157747,
  "status": "passed"
});
formatter.uri("post.feature");
formatter.feature({
  "line": 1,
  "name": "This feature will test the POST request of a REST API",
  "description": "",
  "id": "this-feature-will-test-the-post-request-of-a-rest-api",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify the post request send by rest api",
  "description": "",
  "id": "this-feature-will-test-the-post-request-of-a-rest-api;verify-the-post-request-send-by-rest-api",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@suite"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User sends the following parameters as a registration object as a POST request",
  "rows": [
    {
      "cells": [
        "Parameter",
        "Value"
      ],
      "line": 6
    },
    {
      "cells": [
        "registrationId",
        "123456789"
      ],
      "line": 7
    },
    {
      "cells": [
        "status",
        "Approved"
      ],
      "line": 8
    },
    {
      "cells": [
        "registrationDate",
        "2016-10-24"
      ],
      "line": 9
    },
    {
      "cells": [
        "processingDate",
        "2016-10-25T09:30:47Z"
      ],
      "line": 10
    },
    {
      "cells": [
        "isActive",
        "true"
      ],
      "line": 11
    },
    {
      "cells": [
        "cost",
        "100.75"
      ],
      "line": 12
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User should receive \"200\" as Status code",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User should receive following response body",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 15
    },
    {
      "cells": [
        "registrationId",
        "123456789"
      ],
      "line": 16
    },
    {
      "cells": [
        "status",
        "Approved"
      ],
      "line": 17
    },
    {
      "cells": [
        "registrationDate",
        "2016-10-24"
      ],
      "line": 18
    },
    {
      "cells": [
        "processingDate",
        "2016-10-25T09:30:47Z"
      ],
      "line": 19
    },
    {
      "cells": [
        "isActive",
        "true"
      ],
      "line": 20
    },
    {
      "cells": [
        "cost",
        "100.75"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should receive following response body key and types",
  "rows": [
    {
      "cells": [
        "key",
        "type"
      ],
      "line": 23
    },
    {
      "cells": [
        "registrationId",
        "int"
      ],
      "line": 24
    },
    {
      "cells": [
        "status",
        "string"
      ],
      "line": 25
    },
    {
      "cells": [
        "registrationDate",
        "date"
      ],
      "line": 26
    },
    {
      "cells": [
        "processingDate",
        "datetime"
      ],
      "line": 27
    },
    {
      "cells": [
        "isActive",
        "boolean"
      ],
      "line": 28
    },
    {
      "cells": [
        "cost",
        "double"
      ],
      "line": 29
    },
    {
      "cells": [
        "nullKey",
        "null"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RestStepDefs.user_sends_the_following_parameters_as_a_post_request(DataTable)"
});
formatter.result({
  "duration": 407915368,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "RestStepDefs.user_should_receive_as_Status_code(String)"
});
formatter.result({
  "duration": 48493,
  "status": "passed"
});
formatter.match({
  "location": "RestStepDefs.user_should_receive_following_response_body(DataTable)"
});
formatter.result({
  "duration": 139099,
  "status": "passed"
});
formatter.match({
  "location": "RestStepDefs.user_should_receive_following_response_body_key_and_types(DataTable)"
});
formatter.result({
  "duration": 182980,
  "status": "passed"
});
formatter.uri("put.feature");
formatter.feature({
  "line": 1,
  "name": "This feature will test the PUT request of a REST API",
  "description": "",
  "id": "this-feature-will-test-the-put-request-of-a-rest-api",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify the put request send by rest api",
  "description": "",
  "id": "this-feature-will-test-the-put-request-of-a-rest-api;verify-the-put-request-send-by-rest-api",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@suite"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User sends the following parameters as a registration object as a PUT request",
  "rows": [
    {
      "cells": [
        "Parameter",
        "Value"
      ],
      "line": 6
    },
    {
      "cells": [
        "registrationId",
        "123456789"
      ],
      "line": 7
    },
    {
      "cells": [
        "status",
        "Approved"
      ],
      "line": 8
    },
    {
      "cells": [
        "registrationDate",
        "2016-10-24"
      ],
      "line": 9
    },
    {
      "cells": [
        "processingDate",
        "2016-10-25T09:30:47Z"
      ],
      "line": 10
    },
    {
      "cells": [
        "isActive",
        "true"
      ],
      "line": 11
    },
    {
      "cells": [
        "cost",
        "100.75"
      ],
      "line": 12
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User should receive \"200\" as Status code",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User should receive following response body",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 15
    },
    {
      "cells": [
        "registrationId",
        "987654321"
      ],
      "line": 16
    },
    {
      "cells": [
        "status",
        "Pending"
      ],
      "line": 17
    },
    {
      "cells": [
        "registrationDate",
        "2016-10-24"
      ],
      "line": 18
    },
    {
      "cells": [
        "processingDate",
        "2016-10-25T09:30:47Z"
      ],
      "line": 19
    },
    {
      "cells": [
        "isActive",
        "false"
      ],
      "line": 20
    },
    {
      "cells": [
        "cost",
        "100.75"
      ],
      "line": 21
    },
    {
      "cells": [
        "parent.node1",
        "value1"
      ],
      "line": 22
    },
    {
      "cells": [
        "parent.booleanNode",
        "true"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User should receive following response body key and types",
  "rows": [
    {
      "cells": [
        "key",
        "type"
      ],
      "line": 25
    },
    {
      "cells": [
        "registrationId",
        "int"
      ],
      "line": 26
    },
    {
      "cells": [
        "status",
        "string"
      ],
      "line": 27
    },
    {
      "cells": [
        "registrationDate",
        "date"
      ],
      "line": 28
    },
    {
      "cells": [
        "processingDate",
        "datetime"
      ],
      "line": 29
    },
    {
      "cells": [
        "isActive",
        "boolean"
      ],
      "line": 30
    },
    {
      "cells": [
        "cost",
        "double"
      ],
      "line": 31
    },
    {
      "cells": [
        "nullKey",
        "null"
      ],
      "line": 32
    },
    {
      "cells": [
        "parent",
        "object"
      ],
      "line": 33
    },
    {
      "cells": [
        "parent.node1",
        "string"
      ],
      "line": 34
    },
    {
      "cells": [
        "parent.booleanNode",
        "boolean"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RestStepDefs.user_sends_the_following_parameters_as_a_put_request(DataTable)"
});
formatter.result({
  "duration": 16791140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "RestStepDefs.user_should_receive_as_Status_code(String)"
});
formatter.result({
  "duration": 60042,
  "status": "passed"
});
formatter.match({
  "location": "RestStepDefs.user_should_receive_following_response_body(DataTable)"
});
formatter.result({
  "duration": 140534,
  "status": "passed"
});
formatter.match({
  "location": "RestStepDefs.user_should_receive_following_response_body_key_and_types(DataTable)"
});
formatter.result({
  "duration": 185036,
  "status": "passed"
});
});