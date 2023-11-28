sequenceDiagram
participant browser
participant server

    HTML page fetched from the server

    The data is sent to the server via the form's submit

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: [{ "content": "write smt", "date": "2023-11-28T10:48:31.430Z" }, ... ]
    deactivate server

    Note right of browser: "note created"
