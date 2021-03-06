(function() {
  var removeComments, sample, tohtml, tokenize;

  tohtml = angular.module('tohtml', []);


  /*
  	console.log tokenize '(lol (a b)) ; (a b c)\n (a)'
  	 * ['(', lol', '(', 'a', 'b', ')', ')', '(', 'a', ')']
   */

  sample = '(lol (ba) ; ((comment (comnet))) \n(a))';

  removeComments = function(inp) {
    return inp.replace(/(\;[^\n]*\n)/g, '');
  };

  tokenize = function(inp) {
    var inp1, inp2;
    inp1 = removeComments(inp);
    inp2 = inp1.split("\"").map(function(v, i) {
      if (i % 2 === 0) {
        return v.replace(/([\{\(\[\]\)\}\n])/g, " $1 ");
      } else {
        return v.replace(RegExp(" ", "g"), "!w!");
      }
    }).join("\"").trim().split(/\ +/).map(function(v) {
      return v.replace(/!w!/g, " ");
    });
    return inp2;
  };

  tohtml.constant('tokenize', tokenize);

  tohtml.constant('tohtml', function(s) {
    var brackets, c, called, closed, d, htmloutput, htmlwrite, i, level, nlevels, open, tagstack, tok, txt, _i, _len;
    htmloutput = [];
    open = "([{";
    closed = ")]}";
    brackets = open + closed;
    tok = tokenize(s);
    tagstack = [];
    level = 0;
    nlevels = 16;
    htmlwrite = function(s) {
      return htmloutput.push(s);
    };
    called = true;
    for (i in tok) {
      c = tok[i][0];
      if (c === "\n") {
        htmlwrite("<br>");
        for (_i = 0, _len = tagstack.length; _i < _len; _i++) {
          d = tagstack[_i];
          htmloutput[d] = htmloutput[d].replace("<span", "<div");
        }
      } else if (_.contains(brackets, c)) {
        if (_.contains(open, c)) {
          level++;
          tagstack.push(htmloutput.length);
          htmlwrite("<span class='layer" + (level % nlevels) + "'>");
          called = true;
        } else if (_.contains(closed, c)) {
          level--;
          txt = htmloutput[tagstack.pop()].replace(/<([A-z]+)[^>]*>/, "</$1>");
          htmlwrite(txt);
        }
      } else {
        if (called) {
          htmlwrite(tok[i] + "</b>");
          called = !called;
        } else if (tok[i][0] === "\"") {
          htmlwrite("<span class=\"string\">" + tok[i] + "</span>");
        } else if (!isNaN(tok[i])) {
          htmlwrite("<span class=\"number\">" + tok[i] + "</span>");
        } else {
          htmlwrite(tok[i]);
        }
      }
    }
    return "<div class=''>" + htmloutput.join(" " + '</div>');
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzcDJodG1sLmpzIiwic291cmNlcyI6WyJsaXNwMmh0bWwuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0FBQUEsTUFBQSx3Q0FBQTs7QUFBQSxFQUFBLE1BQUEsR0FBUyxPQUFPLENBQUMsTUFBUixDQUFlLFFBQWYsRUFBeUIsRUFBekIsQ0FBVCxDQUFBOztBQUNBO0FBQUE7OztLQURBOztBQUFBLEVBS0EsTUFBQSxHQUFTLHlDQUxULENBQUE7O0FBQUEsRUFNQSxjQUFBLEdBQWlCLFNBQUMsR0FBRCxHQUFBO1dBQ2hCLEdBQUcsQ0FBQyxPQUFKLENBQVksZUFBWixFQUE2QixFQUE3QixFQURnQjtFQUFBLENBTmpCLENBQUE7O0FBQUEsRUFTQSxRQUFBLEdBQVcsU0FBQyxHQUFELEdBQUE7QUFDVixRQUFBLFVBQUE7QUFBQSxJQUFBLElBQUEsR0FBTyxjQUFBLENBQWUsR0FBZixDQUFQLENBQUE7QUFBQSxJQUNBLElBQUEsR0FBTyxJQUFJLENBQUMsS0FBTCxDQUFXLElBQVgsQ0FBZ0IsQ0FBQyxHQUFqQixDQUFxQixTQUFDLENBQUQsRUFBSSxDQUFKLEdBQUE7QUFDM0IsTUFBQSxJQUFHLENBQUEsR0FBSSxDQUFKLEtBQVMsQ0FBWjtlQUNDLENBQUMsQ0FBQyxPQUFGLENBQVUscUJBQVYsRUFBaUMsTUFBakMsRUFERDtPQUFBLE1BQUE7ZUFHQyxDQUFDLENBQUMsT0FBRixDQUFVLE1BQUEsQ0FBTyxHQUFQLEVBQVksR0FBWixDQUFWLEVBQTRCLEtBQTVCLEVBSEQ7T0FEMkI7SUFBQSxDQUFyQixDQUtOLENBQUMsSUFMSyxDQUtBLElBTEEsQ0FLSyxDQUFDLElBTE4sQ0FBQSxDQU1OLENBQUMsS0FOSyxDQU1DLEtBTkQsQ0FNTyxDQUFDLEdBTlIsQ0FNWSxTQUFDLENBQUQsR0FBQTthQUFPLENBQUMsQ0FBQyxPQUFGLENBQVUsTUFBVixFQUFrQixHQUFsQixFQUFQO0lBQUEsQ0FOWixDQURQLENBQUE7V0FRQSxLQVRVO0VBQUEsQ0FUWCxD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QUFBQSxLQWRBO0FBNkNBLFdBQU8sZ0JBQUEsR0FBaUIsVUFBVSxDQUFDLElBQVgsQ0FBZ0IsR0FBQSxHQUFJLFFBQXBCLENBQXhCLENBL0N5QjtFQUFBLENBQTFCLENBeEJBLENBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIiMndXNlIHN0cmljdCdcclxuXHJcblxyXG4jYW5ndWxhciA9IHJlcXVpcmUoJy4vYW5ndWxhci5qcycpXHJcbiNtb2R1bGUuZXhwb3J0cyA9IHRvaHRtbCA9IGFuZ3VsYXIubW9kdWxlKCd0b2h0bWwnLCBbXSlcclxuXHJcbnRvaHRtbCA9IGFuZ3VsYXIubW9kdWxlKCd0b2h0bWwnLCBbXSlcclxuIyMjXHJcblx0Y29uc29sZS5sb2cgdG9rZW5pemUgJyhsb2wgKGEgYikpIDsgKGEgYiBjKVxcbiAoYSknXHJcblx0IyBbJygnLCBsb2wnLCAnKCcsICdhJywgJ2InLCAnKScsICcpJywgJygnLCAnYScsICcpJ11cclxuIyMjXHJcbnNhbXBsZSA9ICcobG9sIChiYSkgOyAoKGNvbW1lbnQgKGNvbW5ldCkpKSBcXG4oYSkpJ1xyXG5yZW1vdmVDb21tZW50cyA9IChpbnApIC0+XHJcblx0aW5wLnJlcGxhY2UoLyhcXDtbXlxcbl0qXFxuKS9nLCAnJylcclxuXHJcbnRva2VuaXplID0gKGlucCkgLT5cclxuXHRpbnAxID0gcmVtb3ZlQ29tbWVudHMoaW5wKVxyXG5cdGlucDIgPSBpbnAxLnNwbGl0KFwiXFxcIlwiKS5tYXAoKHYsIGkpIC0+XHJcblx0XHRpZiBpICUgMiBpcyAwXHJcblx0XHRcdHYucmVwbGFjZSAvKFtcXHtcXChcXFtcXF1cXClcXH1cXG5dKS9nLCBcIiAkMSBcIlxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR2LnJlcGxhY2UgUmVnRXhwKFwiIFwiLCBcImdcIiksIFwiIXchXCJcclxuXHQpLmpvaW4oXCJcXFwiXCIpLnRyaW0oKVxyXG5cdCAuc3BsaXQoL1xcICsvKS5tYXAoKHYpIC0+IHYucmVwbGFjZSAvIXchL2csIFwiIFwiKVxyXG5cdGlucDJcclxuXHJcbnRvaHRtbC5jb25zdGFudCAndG9rZW5pemUnLCB0b2tlbml6ZVx0XHRcclxuXHJcbiNjb25zb2xlLmxvZyB0b2tlbml6ZSAnKGxvbCAoYSBiKSA7IChhIGIgYylcXG4gKGEpJ1xyXG5cclxudG9odG1sLmNvbnN0YW50ICd0b2h0bWwnLCAocykgLT5cdFxyXG5cdCN2YXIgY2xvc2V0YWcgPSBmYWxzZTtcclxuXHRodG1sb3V0cHV0ID0gW11cclxuXHRvcGVuID0gXCIoW3tcIlxyXG5cdGNsb3NlZCA9IFwiKV19XCJcclxuXHRicmFja2V0cyA9IG9wZW4gKyBjbG9zZWRcclxuXHR0b2sgPSB0b2tlbml6ZShzKVxyXG5cdHRhZ3N0YWNrID0gW11cclxuXHQjY29uc29sZS5sb2cgdG9rXHJcblx0bGV2ZWwgPSAwXHJcblx0bmxldmVscyA9IDE2XHJcblx0IyBtYXJrIGxvY2FsIHZhcmliYWxlcyBkaWZmZXJlbnQgZnJvbSBnbG9iYWwgdmFyaWFibGVzXHJcblx0aHRtbHdyaXRlID0gKHMpIC0+XHJcblx0XHRodG1sb3V0cHV0LnB1c2ggc1xyXG5cclxuXHRjYWxsZWQgPSB0cnVlXHJcblx0Zm9yIGkgb2YgdG9rXHJcblx0XHRjID0gdG9rW2ldWzBdXHJcblx0XHQjZGVidWdnZXJcclxuXHRcdGlmIGMgaXMgXCJcXG5cIlxyXG5cdFx0XHRodG1sd3JpdGUgXCI8YnI+XCJcclxuXHRcdFx0Zm9yIGQgaW4gdGFnc3RhY2tcclxuXHRcdFx0XHQjZCA9IHRhZ3N0YWNrW2ldXHJcblx0XHRcdFx0aHRtbG91dHB1dFtkXSA9IGh0bWxvdXRwdXRbZF0ucmVwbGFjZShcIjxzcGFuXCIsIFwiPGRpdlwiKVxyXG5cdFx0ZWxzZSBpZiBfLmNvbnRhaW5zIGJyYWNrZXRzLCBjXHJcblx0XHRcdGlmIF8uY29udGFpbnMgb3BlbiwgY1xyXG5cdFx0XHRcdGxldmVsKytcclxuXHRcdFx0XHR0YWdzdGFjay5wdXNoIGh0bWxvdXRwdXQubGVuZ3RoXHJcblx0XHRcdFx0aHRtbHdyaXRlIFwiPHNwYW4gY2xhc3M9J2xheWVyI3tsZXZlbCVubGV2ZWxzfSc+XCJcclxuXHRcdFx0XHQjaHRtbHdyaXRlIFwiPGI+XCJcclxuXHRcdFx0XHRjYWxsZWQgPSB0cnVlXHJcblx0XHRcdGVsc2UgaWYgXy5jb250YWlucyBjbG9zZWQsIGNcclxuXHRcdFx0XHRsZXZlbC0tXHJcblx0XHRcdFx0dHh0ID0gaHRtbG91dHB1dFt0YWdzdGFjay5wb3AoKV0ucmVwbGFjZSgvPChbQS16XSspW14+XSo+LywgXCI8LyQxPlwiKVxyXG5cdFx0XHRcdGh0bWx3cml0ZSB0eHRcclxuXHRcdFxyXG5cdFx0I3ZhciBjb2wgPSBjb2xvcnNbbGV2ZWwlY29sb3JzLmxlbmd0aF07XHJcblx0XHRlbHNlXHJcblx0XHRcdGlmIGNhbGxlZFxyXG5cdFx0XHRcdGh0bWx3cml0ZSB0b2tbaV0gKyBcIjwvYj5cIlxyXG5cdFx0XHRcdGNhbGxlZCA9IG5vdCBjYWxsZWRcclxuXHRcdFx0ZWxzZSBpZiB0b2tbaV1bMF0gaXMgXCJcXFwiXCJcclxuXHRcdFx0XHRodG1sd3JpdGUgXCI8c3BhbiBjbGFzcz1cXFwic3RyaW5nXFxcIj5cIiArIHRva1tpXSArIFwiPC9zcGFuPlwiXHJcblx0XHRcdGVsc2UgdW5sZXNzIGlzTmFOKHRva1tpXSlcclxuXHRcdFx0XHRodG1sd3JpdGUgXCI8c3BhbiBjbGFzcz1cXFwibnVtYmVyXFxcIj5cIiArIHRva1tpXSArIFwiPC9zcGFuPlwiXHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRodG1sd3JpdGUgdG9rW2ldXHJcblx0cmV0dXJuIFwiPGRpdiBjbGFzcz0nJz5cIitodG1sb3V0cHV0LmpvaW4gXCIgXCIrJzwvZGl2PiciXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=