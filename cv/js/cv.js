(function() {

  jQuery(function() {
    var paper, path, placeholder, _i, _len, _ref, _results;
    _ref = $('span');
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      placeholder = _ref[_i];
      path = $(placeholder).attr('id');
      paper = Raphael(placeholder, 30, 30);
      _results.push(paper.dessine(path));
    }
    return _results;
  });

}).call(this);
