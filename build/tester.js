(function() {
  var log,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  log = {};

  log.logs = {
    'main': {}
  };

  log.curlog = 'main';

  log.skip = [];

  log = function(s, logN) {
    if (logN == null) {
      logN = null;
    }
    return log.logs[logN || log.curlog].push(s);
  };

  log.printLog = function(skip) {
    var $logDiv, $pre, contents, h1, i, name, _ref, _results;
    if (skip == null) {
      skip = null;
    }
    $logDiv = $('<div>').appendTo('body');
    $pre = $logDiv('<pre>').appendTo($logDiv);
    skip = skip || log.skip;
    _ref = log.logs;
    _results = [];
    for (name in _ref) {
      contents = _ref[name];
      if (__indexOf.call(skip, name) < 0) {
        h1 = $("<h1>", {
          text: name
        });
        h1.appendTo($pre);
        _results.push((function() {
          var _i, _len, _results1;
          _results1 = [];
          for (_i = 0, _len = contents.length; _i < _len; _i++) {
            i = contents[_i];
            _results1.push($("<h4>", {
              text: i
            }).appendTo($pre));
          }
          return _results1;
        })());
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGVyLmpzIiwic291cmNlcyI6WyJ0ZXN0ZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0FBQUEsTUFBQSxHQUFBO0lBQUEscUpBQUE7O0FBQUEsRUFBQSxHQUFBLEdBQU0sRUFBTixDQUFBOztBQUFBLEVBRUEsR0FBRyxDQUFDLElBQUosR0FBVztBQUFBLElBQUMsTUFBQSxFQUFPLEVBQVI7R0FGWCxDQUFBOztBQUFBLEVBR0EsR0FBRyxDQUFDLE1BQUosR0FBYSxNQUhiLENBQUE7O0FBQUEsRUFJQSxHQUFHLENBQUMsSUFBSixHQUFXLEVBSlgsQ0FBQTs7QUFBQSxFQUtBLEdBQUEsR0FBTSxTQUFDLENBQUQsRUFBSSxJQUFKLEdBQUE7O01BQUksT0FBSztLQUNkO1dBQUEsR0FBRyxDQUFDLElBQUssQ0FBQSxJQUFBLElBQVEsR0FBRyxDQUFDLE1BQVosQ0FBbUIsQ0FBQyxJQUE3QixDQUFrQyxDQUFsQyxFQURLO0VBQUEsQ0FMTixDQUFBOztBQUFBLEVBUUEsR0FBRyxDQUFDLFFBQUosR0FBZSxTQUFDLElBQUQsR0FBQTtBQUNkLFFBQUEsb0RBQUE7O01BRGUsT0FBSztLQUNwQjtBQUFBLElBQUEsT0FBQSxHQUFVLENBQUEsQ0FBRSxPQUFGLENBQVUsQ0FBQyxRQUFYLENBQW9CLE1BQXBCLENBQVYsQ0FBQTtBQUFBLElBQ0EsSUFBQSxHQUFPLE9BQUEsQ0FBUSxPQUFSLENBQWdCLENBQUMsUUFBakIsQ0FBMEIsT0FBMUIsQ0FEUCxDQUFBO0FBQUEsSUFFQSxJQUFBLEdBQU8sSUFBQSxJQUFRLEdBQUcsQ0FBQyxJQUZuQixDQUFBO0FBR0E7QUFBQTtTQUFBLFlBQUE7NEJBQUE7QUFDQyxNQUFBLElBQUcsZUFBWSxJQUFaLEVBQUEsSUFBQSxLQUFIO0FBQ0MsUUFBQSxFQUFBLEdBQUssQ0FBQSxDQUFFLE1BQUYsRUFBVTtBQUFBLFVBQUEsSUFBQSxFQUFNLElBQU47U0FBVixDQUFMLENBQUE7QUFBQSxRQUNBLEVBQUUsQ0FBQyxRQUFILENBQVksSUFBWixDQURBLENBQUE7QUFBQTs7QUFFQTtlQUFBLCtDQUFBOzZCQUFBO0FBQ0MsMkJBQUEsQ0FBQSxDQUFFLE1BQUYsRUFBVTtBQUFBLGNBQUEsSUFBQSxFQUFLLENBQUw7YUFBVixDQUFpQixDQUFDLFFBQWxCLENBQTJCLElBQTNCLEVBQUEsQ0FERDtBQUFBOzthQUZBLENBREQ7T0FBQSxNQUFBOzhCQUFBO09BREQ7QUFBQTtvQkFKYztFQUFBLENBUmYsQ0FBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4jYXNzZXJ0ID0gKHMpIC0+XHJcblx0I29wZXJhdG9ycyA9IFsnPT0nLCAnPicsICc8JywgJzw9JywgJz49J11cclxuXHQjdG9rID0gcy5zcGxpdCgnICcpXHJcblxyXG5cdCN0aHJvdyBFcnJvcignJylcclxubG9nID0ge31cclxuXHJcbmxvZy5sb2dzID0geydtYWluJzp7fX1cclxubG9nLmN1cmxvZyA9ICdtYWluJ1xyXG5sb2cuc2tpcCA9IFtdXHJcbmxvZyA9IChzLCBsb2dOPW51bGwpIC0+XHJcblx0bG9nLmxvZ3NbbG9nTiB8fCBsb2cuY3VybG9nXS5wdXNoKHMpXHJcblxyXG5sb2cucHJpbnRMb2cgPSAoc2tpcD1udWxsKSAtPlxyXG5cdCRsb2dEaXYgPSAkKCc8ZGl2PicpLmFwcGVuZFRvKCdib2R5JylcclxuXHQkcHJlID0gJGxvZ0RpdignPHByZT4nKS5hcHBlbmRUbygkbG9nRGl2KVxyXG5cdHNraXAgPSBza2lwIHx8IGxvZy5za2lwXHJcblx0Zm9yIG5hbWUsIGNvbnRlbnRzIG9mIGxvZy5sb2dzXHJcblx0XHRpZiBuYW1lIG5vdCBpbiBza2lwXHJcblx0XHRcdGgxID0gJChcIjxoMT5cIiwgdGV4dDogbmFtZSlcclxuXHRcdFx0aDEuYXBwZW5kVG8oJHByZSlcclxuXHRcdFx0Zm9yIGkgaW4gY29udGVudHNcclxuXHRcdFx0XHQkKFwiPGg0PlwiLCB0ZXh0OmkpLmFwcGVuZFRvKCRwcmUpXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==