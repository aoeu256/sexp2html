(function() {
  describe('tohtmltest', function() {
    beforeEach(angular.mock.module('lisp2html'));
    beforeEach(inject(function($tokenize, $tohtml) {
      var tohtml, tokenize, _ref;
      return _ref = [$tokenize, $tohtml], tohtml = _ref[0], tokenize = _ref[1], _ref;
    }));
    return it('tokens', function() {
      return expect(tohtml).toBeDefined();
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdF9saXNwMmh0bWwuanMiLCJzb3VyY2VzIjpbInRlc3RfbGlzcDJodG1sLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtBQUFBLEVBQUEsUUFBQSxDQUFTLFlBQVQsRUFBdUIsU0FBQSxHQUFBO0FBRXRCLElBQUEsVUFBQSxDQUFXLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBYixDQUFvQixXQUFwQixDQUFYLENBQUEsQ0FBQTtBQUFBLElBQ0EsVUFBQSxDQUFXLE1BQUEsQ0FBTyxTQUFDLFNBQUQsRUFBWSxPQUFaLEdBQUE7QUFDakIsVUFBQSxzQkFBQTthQUFBLE9BQXFCLENBQUMsU0FBRCxFQUFZLE9BQVosQ0FBckIsRUFBQyxnQkFBRCxFQUFTLGtCQUFULEVBQUEsS0FEaUI7SUFBQSxDQUFQLENBQVgsQ0FEQSxDQUFBO1dBSUEsRUFBQSxDQUFHLFFBQUgsRUFBYSxTQUFBLEdBQUE7YUFDWixNQUFBLENBQU8sTUFBUCxDQUFjLENBQUMsV0FBZixDQUFBLEVBRFk7SUFBQSxDQUFiLEVBTnNCO0VBQUEsQ0FBdkIsQ0FBQSxDQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIjcmVxdWlyZSBbJ2Jhc2UvcHVibGljL2NvbnRyb2xsZXJzLmpzJ10sIChjb250cm9sbGVycykgLT5cclxuXHJcbmRlc2NyaWJlICd0b2h0bWx0ZXN0JywgLT5cclxuXHRcdFxyXG5cdGJlZm9yZUVhY2goYW5ndWxhci5tb2NrLm1vZHVsZSgnbGlzcDJodG1sJykpXHRcclxuXHRiZWZvcmVFYWNoIGluamVjdCAoJHRva2VuaXplLCAkdG9odG1sKSAtPlxyXG5cdFx0W3RvaHRtbCwgdG9rZW5pemVdID0gWyR0b2tlbml6ZSwgJHRvaHRtbF1cclxuXHJcblx0aXQgJ3Rva2VucycsIC0+XHJcblx0XHRleHBlY3QodG9odG1sKS50b0JlRGVmaW5lZCgpXHJcblxyXG5cdCMgIFx0c2NvcGUgPSAkcm9vdFNjb3BlLiRuZXcoKVxyXG5cdCMgIFx0Y3RybCA9ICRjb250cm9sbGVyICdCb2R5Q3RybCcsIHsnJHNjb3BlJzpzY29wZX1cclxuXHRcclxuXHQjYmVmb3JlRWFjaChtb2R1bGUoJ21haW4uY29udHJvbGxlcnMnKSlcclxuXHQjYmVmb3JlRWFjaCBpbmplY3QgKCRjb250cm9sbGVyLCAkcm9vdFNjb3BlKSAtPlxyXG5cdCBcdCNzY29wZSA9ICRyb290U2NvcGUuJG5ldygpXHJcblx0IFx0I2N0cmwgPSAkY29udHJvbGxlciAnQm9keUNvbnRyb2xsZXInLCB7JyRzY29wZSc6c2NvcGV9XHJcblx0IyBpdCAnbW9jaycsIC0+XHJcblx0IyBcdGV4cGVjdChtb2R1bGUpLnRvQmVEZWZpbmVkKClcclxuXHQjIHNjb3BlID0gY3RybCA9IG51bGxcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9