var ace = require('brace2');
require('brace2/mode/css');
require('brace2/theme/solarized_light');

var editor = ace.edit('css-editor');
editor.setTheme('ace/theme/solarized_light');
editor.getSession().setMode('ace/mode/css');
