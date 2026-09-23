var ace = require('brace2');
require('brace2/mode/json');
require('brace2/theme/solarized_light');

var editor = ace.edit('json-editor');
editor.getSession().setMode('ace/mode/json');
editor.setTheme('ace/theme/solarized_light');
editor.setValue([
    '{'
  , ' "language": "JSON",'
  , ' "foo": "bar",'
  , ' "trailing": "comma",'
  , '}'
  ].join('\n')
);
editor.clearSelection();
