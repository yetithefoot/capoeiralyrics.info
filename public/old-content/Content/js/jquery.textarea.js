


     function textarea_getSelection(element){
      if(!!document.selection)
        return document.selection.createRange().text;
      else if(!!element.setSelectionRange)
        return element.value.substring(element.selectionStart,element.selectionEnd);
      else
      return false;
    }
	
    function textarea_replaceSelection(element, text){
      var scroll_top = element.scrollTop;
      if(!!document.selection){
        element.focus();
        var range = (element.range) ? element.range : document.selection.createRange();
        range.text = text;
        range.select();
      }else if(!!element.setSelectionRange){
        var selection_start = element.selectionStart;
        element.value = element.value.substring(0,selection_start) + text + element.value.substring(element.selectionEnd);
        element.setSelectionRange(selection_start + text.length,selection_start + text.length);
      }
      element.focus();
      element.scrollTop = scroll_top;
    }

    function textarea_wrapSelection(element, before,after){
        this.textarea_replaceSelection(element, before + textarea_getSelection(element) + after);
    }
 





