# jTextFill
Search and Fill the text box from list of json
##Usage
include js and css files
<pre><code>
var options={
  list:,/*list of items */
  minlength:1,/*minimum key press required to start listing*/
  limit:10,/*Limit of items in list*/
  done:function(list_item){ /* function called when list is filled in text field with selected list as argument*/}
}
$(input).jTextFill(options)
</code></pre>



####Ajax
<pre><code>option.list="http://example.com/data.json"
here this url should output any of above list formats</code></pre>
