var get_source = function(main_dir, dir, file){
        var disclaimer = "";
        if(file != "Facade")
            var url = "Model/design_patterns/" + main_dir + "/" + dir + "/" + file + ".js";
        else var url = "Model/design_patterns/"+file + ".js";
        $.ajax({
            url: url,
            dataType: "script",
            success: function(data){
                var editor = ace.edit("editor_"+file);
                editor.setTheme("ace/theme/chrome");
                editor.getSession().setMode("ace/mode/javascript");
                editor.getSession().setUseWrapMode(true);
                editor.setReadOnly(true);
                editor.setValue(disclaimer+data,-1);
            },
            error: function(data){
                var editor = ace.edit("editor_"+file);
                editor.setTheme("ace/theme/chrome");
                editor.getSession().setMode("ace/mode/javascript");
                editor.getSession().setUseWrapMode(true);
                //editor.setReadOnly(true);
                editor.setValue(disclaimer+"//Not yet",-1);
            }
        });
    }
