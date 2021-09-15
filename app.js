require.config({ paths: { 'vs': './node_modules/monaco-editor/min/vs' } });
require(['vs/editor/editor.main'], function () {

    // Init variables
    var fileCounter = 0;
    var editorArray = [];
    var defaultCode = [
        '# My Pythone example',
        'print(\"Hello World\")',
    ].join('\n');

    // Editor theme
    monaco.editor.defineTheme('myTheme', {
        base: 'vs',
        inherit: true,
        rules: [{ background: 'EDF9FA' }],
    });
    monaco.editor.setTheme('myTheme');

    // Create editor
    function newEditor(container_id, code, language) {
        var model = monaco.editor.createModel(code, language);
        var editor = monaco.editor.create(document.getElementById(container_id), {
            model: model,
        });
        editorArray.push(editor);
        return editor;
    }

    // Create div
    function addNewEditor(code, language) {
        var new_container = document.createElement("DIV");
        new_container.id = "container-" + fileCounter.toString(10);
        new_container.className = "container";
        document.getElementById("root").appendChild(new_container);
        newEditor(new_container.id, code, language);
        fileCounter += 1;
    }

    addNewEditor(defaultCode, 'python');
});
