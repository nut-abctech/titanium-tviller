migration.up = function(db) {
    migrator.createTable({
        "columns" : {
            "id" : "text",
            "name" : "text",
            "attendance" : "integer",
            "full" : "integer",
            "capacity" : "integer",
            "program_name" : "text",
            "program_description" : "text",
            "program_image" : "text",
            "program_start" : "text",
            "program_end" : "text"
        }
    });
};

migration.down = function(db) {
    migrator.dropTable("channel");
};
