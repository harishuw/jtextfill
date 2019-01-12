# jQuery jTextFill
Search and Fill the text box from list of json
### Usage
include jquery, js and css files
```sh
var options={
    list:,/*list of items */
    minlength:1,/*minimum key press required to start listing*/
    limit:10,/*Limit of items in list*/
    filled:function(list_item){
	    /* function called when list item is
	    filled in text field 
	    selected list as argument*/
    },
    clicked:function(list_item){
        /* function called when a list item is clicked 
        selected list as argument*/
    },
    attach:function(){/*return some json which will pass to ajax list*/
        return {some:json}
    },
    before:function(thisref){  /* function to call before ajax*/     
        /*thisref is element*/
    },
    loaded:function(thisref,json){ /*ajax success function*/     
      /*thisref is element  json is ajax result */
    },
}
$(input).jTextFill(options)
```


### List types

#### Normal list

```sh
options.list=["example","second","third"]
```
#### Object list
```sh
option.list=[
    {value:"first","some":"other","json":"items"},
    {value:"second","some":"other","json":"items"},
    {value:"third","some":"other","json":"items"},
]
```
Here value is list item 
you will get selected object in `clicked` and `filled` functions

#### html list

```sh
options.list=[
    {html:"< img src=image.jpg>",value:"example"},
    {html:< img src="image2.jpg">,value:"other"},
    {html:"< img src="image3.jpg">",value:"another"}
]
```
Here *html* is list items
on selecting html value will be filled inside textbox


#### Ajax
```sh
option.list="http://example.com/data.json"
```
Here this url should output any of above list formats

