# jTextFill
Search and Fill the text box from list of json

##Usage
include js and css files
<code><pre>
var options={
  list:,/*list of items */
  minlength:1,/*minimum key press required to start listing*/
  limit:10,/*Limit of items in list*/
  done:function(list_item){ /* function called when list is filled in text field with selected list as argument*/}
}
$(input).jTextFill(options)
</pre></code>
###List types
####Normal list
<code><pre>
options.list=["example","second","third"]
</pre></code>
#### html list
<code><pre>
options.list=[{html:<img src="image.jpg">,value:"example"},{html:<img src="image2.jpg">,value:"other"},{html:"<img src="image3.jpg">",value:"another"}]
here html is list items
on selecting html value will be filled inside textbox
</pre></code>
####Ajax
<code><pre>
option.list="http://example.com/data.json"
here this url should output any of above list formats
</pre></code>
