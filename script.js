"use strict";

/////This is code for the chat
"use strict";

//elements
var conversation = $('.conversation');
var lastSentMessages = $('.messages--sent:last-child');
var textbar = $('.text-bar__field input');
var textForm = $('#form-message');
var thumber = $('.text-bar__thumb');

var scrollTop = $(window).scrollTop();



var Message = {
	currentText: "test",
	init: function(){
		var base = this;
		base.send();
	},
	send: function(){
		var base = this;
		textForm.submit(function( event ) {
		  	event.preventDefault();
			base.createGroup();
			base.saveText();
			if(base.currentText != ''){
				base.createMessage();
				base.scrollDown();
			}
		});
	},
	saveText: function(){
		var base = this;
		base.currentText = textbar.val();
		textbar.val('');
	},
	createMessage: function(){
		var base = this;
		lastSentMessages.append($('<div/>')
								.addClass('message')
								.text(base.currentText));
	},
	createGroup: function(){
		if($('.messages:last-child').hasClass('messages--received')){
			conversation.append($('<div/>')
							.addClass('messages messages--sent'));
			lastSentMessages = $('.messages--sent:last-child');
		}
	},
	scrollDown: function(){
		var base = this;
		//conversation.scrollTop(conversation[0].scrollHeight);
		conversation.stop().animate({
			scrollTop: conversation[0].scrollHeight
		}, 500);
	}
};

var Thumb = {
	init: function(){
		var base = this;
		base.send();
	},
	send: function(){
		var base = this;
		thumber.on("mousedown", function(){
			Message.createGroup();
			base.create();
			base.expand();
		});
	},
	expand: function(){
		var base = this;
		var thisThumb = lastSentMessages.find('.message:last-child');
		var size = 20;
		
		var expandInterval = setInterval(function(){ expandTimer() }, 30);
		
		function stopExpand(){
			base.stopWiggle();
			clearInterval(expandInterval);
		}
		
		var firstExpand = false;
		function expandTimer() {
			
			if(size >= 130){
				stopExpand();
				base.remove();
			}
			else{
				if(size>50){
					size += 2;
					thisThumb.removeClass('anim-wiggle');
					thisThumb.addClass('anim-wiggle-2');
				}
				else{
					size += 1;
					thisThumb.addClass()
				}
				thisThumb.width(size);
				thisThumb.height(size);
				if(firstExpand){
					conversation.scrollTop(conversation[0].scrollHeight);
				}
				else{
					Message.scrollDown();
					firstExpand = true;
				}
			}
		}
		
		thumber.on("mouseup", function(){
			stopExpand();
		});
	},
	create: function(){
		lastSentMessages.append(
			$('<div/>').addClass('message message--thumb thumb anim-wiggle')
		);
	},
	remove: function(){
		lastSentMessages.find('.message:last-child').animate({
			width: 0,
			height: 0
		}, 300);
		setTimeout(function(){
			lastSentMessages.find('.message:last-child').remove();
		}, 300);
	},
	stopWiggle: function(){
		lastSentMessages.find('.message').removeClass('anim-wiggle');
		lastSentMessages.find('.message').removeClass('anim-wiggle-2');
	}
	
}


var newMessage = Object.create(Message);
newMessage.init();

var newThumb = Object.create(Thumb);
newThumb.init();
 




/////This ends code for the chat










$(document).ready(function() {
  $("#editor").summernote({
    height: 300, // set editor height (toolbar not included???)
    focus: false, // set focus to editable area after initializing summernote
    toolbar: [
      // [groupName, [list of button]]
      ["style", ["bold", "italic", "underline", "clear"]],
      ["font", ["strikethrough", "superscript", "subscript"]],
      ["fontsize", ["fontsize"]],
      ["color", ["color"]],
      ["para", ["ul", "ol", "paragraph"]],
      ["height", ["height"]],
      ['insert', ['link', 'picture']]
    ]
  });
});



//elements
var conversation = $('.conversation');
var lastSentMessages = $('.messages--sent:last-child');
var textbar = $('.text-bar__field input');
var textForm = $('#form-message');
var thumber = $('.text-bar__thumb');

var scrollTop = $(window).scrollTop();



var Message = {
	currentText: "test",
	init: function(){
		var base = this;
		base.send();
	},
	send: function(){
		var base = this;
		textForm.submit(function( event ) {
		  	event.preventDefault();
			base.createGroup();
			base.saveText();
			if(base.currentText != ''){
				base.createMessage();
				base.scrollDown();
			}
		});
	},
	saveText: function(){
		var base = this;
		base.currentText = textbar.val();
		textbar.val('');
	},
	createMessage: function(){
		var base = this;
		lastSentMessages.append($('<div/>')
								.addClass('message')
								.text(base.currentText));
	},
	createGroup: function(){
		if($('.messages:last-child').hasClass('messages--received')){
			conversation.append($('<div/>')
							.addClass('messages messages--sent'));
			lastSentMessages = $('.messages--sent:last-child');
		}
	},
	scrollDown: function(){
		var base = this;
		//conversation.scrollTop(conversation[0].scrollHeight);
		conversation.stop().animate({
			scrollTop: conversation[0].scrollHeight
		}, 500);
	}
};

var Thumb = {
	init: function(){
		var base = this;
		base.send();
	},
	send: function(){
		var base = this;
		thumber.on("mousedown", function(){
			Message.createGroup();
			base.create();
			base.expand();
		});
	},
	expand: function(){
		var base = this;
		var thisThumb = lastSentMessages.find('.message:last-child');
		var size = 20;
		
		var expandInterval = setInterval(function(){ expandTimer() }, 30);
		
		function stopExpand(){
			base.stopWiggle();
			clearInterval(expandInterval);
		}
		
		var firstExpand = false;
		function expandTimer() {
			
			if(size >= 130){
				stopExpand();
				base.remove();
			}
			else{
				if(size>50){
					size += 2;
					thisThumb.removeClass('anim-wiggle');
					thisThumb.addClass('anim-wiggle-2');
				}
				else{
					size += 1;
					thisThumb.addClass()
				}
				thisThumb.width(size);
				thisThumb.height(size);
				if(firstExpand){
					conversation.scrollTop(conversation[0].scrollHeight);
				}
				else{
					Message.scrollDown();
					firstExpand = true;
				}
			}
		}
		
		thumber.on("mouseup", function(){
			stopExpand();
		});
	},
	create: function(){
		lastSentMessages.append(
			$('<div/>').addClass('message message--thumb thumb anim-wiggle')
		);
	},
	remove: function(){
		lastSentMessages.find('.message:last-child').animate({
			width: 0,
			height: 0
		}, 300);
		setTimeout(function(){
			lastSentMessages.find('.message:last-child').remove();
		}, 300);
	},
	stopWiggle: function(){
		lastSentMessages.find('.message').removeClass('anim-wiggle');
		lastSentMessages.find('.message').removeClass('anim-wiggle-2');
	}
	
}


var newMessage = Object.create(Message);
newMessage.init();

var newThumb = Object.create(Thumb);
newThumb.init();

//Tree
var data = [

    { "name" : "Josh", "parent":"null" },
    { "name" : "Rumiya: Spouse", "parent":"Josh" },   
      { "name" : "Coworker 1", "parent":"Rumiya: Spouse" },
      { "name" : "Coworker 2", "parent":"Rumiya: Spouse" },
      { "name" : "Coworker 3", "parent":"Rumiya: Spouse" },
      { "name" : "Coworker 4", "parent":"Rumiya: Spouse" },
      { "name" : "Coworker 5", "parent":"Rumiya: Spouse" },
      { "name" : "Coworker 6", "parent":"Rumiya: Spouse" },
      { "name" : "Coworker 7", "parent":"Rumiya: Spouse" },
      { "name" : "Coworker 8", "parent":"Rumiya: Spouse" },
      { "name" : "Coworker 9", "parent":"Rumiya: Spouse" },
      { "name" : "Coworker 10", "parent":"Rumiya: Spouse" },
        { "name" : "Coworker's Spouse", "parent":"Coworker 10" },
        { "name" : "Coworker's Kid 1", "parent":"Coworker 10" },
        { "name" : "Coworker's Kid 2", "parent":"Coworker 10" },
        { "name" : "Coworker's Kid 3", "parent":"Coworker 10" },
          { "name" : "Kid 3's Friend", "parent":"Coworker's Kid 3" },
    { "name" : "Elliot: Son", "parent":"Josh" },
      { "name" : "Student 1", "parent":"Elliot: Son" },
      { "name" : "Student 2", "parent":"Elliot: Son" },
      { "name" : "Student 3", "parent":"Elliot: Son" },
      { "name" : "Student 4", "parent":"Elliot: Son" },
      { "name" : "Student 5", "parent":"Elliot: Son" },
    { "name" : "Eli: Son", "parent":"Josh" },
      { "name" : "Student 1", "parent":"Eli: Son" },
      { "name" : "Student 2", "parent":"Eli: Son" },
      { "name" : "Student 3", "parent":"Eli: Son" },
      { "name" : "Student 4", "parent":"Eli: Son" },
      { "name" : "Student 5", "parent":"Eli: Son" },
      { "name" : "Student 6", "parent":"Eli: Son" } 
    ];



// *********** Convert flat data into a nice tree ***************
// create a name: node map
var dataMap = data.reduce(function(map, node) {
	map[node.name] = node;
	return map;
}, {});

// create the tree array
var treeData = [];
data.forEach(function(node) {
	// add to parent
	var parent = dataMap[node.parent];
	if (parent) {
		// create child array if it doesn't exist
		(parent.children || (parent.children = []))
			// add node to child array
			.push(node);
	} else {
		// parent is null or missing
		treeData.push(node);
	}
});

// ************** Generate the tree diagram	 *****************
var margin = {top: 20, right: 120, bottom: 20, left: 120},
	width = 1800 - margin.right - margin.left,
	height = 500 - margin.top - margin.bottom;
	
var i = 0,
	duration = 750,
	root;

var tree = d3.layout.tree()
	.size([height, width]);

var diagonal = d3.svg.diagonal()
	.projection(function(d) { return [d.y, d.x]; });

var svg = d3.select("body").append("svg")
	.attr("width", width + margin.right + margin.left)
	.attr("height", height + margin.top + margin.bottom)
  .append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

root = treeData[0];
root.x0 = height / 2;
root.y0 = 0;
  
update(root);


d3.select(self.frameElement).style("height", "500px");
  



  
function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
	  links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 180; });

  // Update the nodes…
  var node = svg.selectAll("g.node")
	  .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
	  .attr("class", "node")
	  .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
	  .on("click", click);

  nodeEnter.append("circle")
	  .attr("r", 1e-6)
	  .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeEnter.append("text")
	  .attr("x", function(d) { return d.children || d._children ? -13 : 13; })
	  .attr("dy", ".35em")
	  .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
	  .text(function(d) { return d.name; })
	  .style("fill-opacity", 1e-6);

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
	  .duration(duration)
	  .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

  nodeUpdate.select("circle")
	  .attr("r", 10)
	  .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeUpdate.select("text")
	  .style("fill-opacity", 1);

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
	  .duration(duration)
	  .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
	  .remove();

  nodeExit.select("circle")
	  .attr("r", 1e-6);

  nodeExit.select("text")
	  .style("fill-opacity", 1e-6);

  // Update the links…
  var link = svg.selectAll("path.link")
	  .data(links, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
	  .attr("class", "link")
	  .attr("d", function(d) {
		var o = {x: source.x0, y: source.y0};
		return diagonal({source: o, target: o});
	  });

  // Transition links to their new position.
  link.transition()
	  .duration(duration)
	  .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
	  .duration(duration)
	  .attr("d", function(d) {
		var o = {x: source.x, y: source.y};
		return diagonal({source: o, target: o});
	  })
	  .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
	d.x0 = d.x;
	d.y0 = d.y;
  });
}

// Toggle children on click.
function click(d) {
  if (d.children) {
	d._children = d.children;
	d.children = null;
  } 
  else {
	d.children = d._children;
	d._children = null;
  }
  update(d);
}

//read/write to Google Sheets
//based off of https://codepen.io/Ranjithkumar10/full/zoJzbp combined with [whatever thing Brian found to write to Sheets]
var employeeData;

function refreshData() {
  //clear the dropdown menu
  $('#employeeSelect').html("");
  //fetch all the info, even info fetched before
  $.get( "https://sheets.googleapis.com/v4/spreadsheets/1DSMxZYIZIgNXdI77YldOliWo-es5R7pVYdcpNHY6Asg/values/Sheet1!A2:E100?key=AIzaSyB5WTjIR5OZt108xl9uQApzeoNRWuMyYRE", function( data ) {
    employeeData = data;
    console.log(data);
    for(i=0;i<data.values.length;i++){
      var employeeName = data.values[i][1]; //email
      $('#employeeSelect').append($('<option>', {
        value: employeeName,
        text: employeeName
      }));
    }
    $('#employeeList').show();
    $('#loading').hide();
  });
  
  data.push({
    parent:   "Josh",
    value: "Oscar"
  });
  
  update(root);
}

//$(document).ready(function(){
//  refreshData();
//});

$('#employeeList').submit(function(e){
  e.preventDefault();
  displayEmployee($('#employeeSelect').val())
});

function displayEmployee(name){
  for(i=0;i<employeeData.values.length;i++){
    var employee = employeeData.values[i];
    if(employee[1] == name){ //look at email, make sure index is same as above
      $('#employeeDetails').html("Name : " +  employee[2] + " Email : " + employee[1] + " Date : " + employee[0]);
      $('#employeeDetails').show();
    }
  }
}

$("#refresh").click(function() {
  refreshData();
});

//code inside following snippet runs once the page loads
$( function() {
  //already inside HTML script tag
  //$("#tabs").tabs();
  //$("#input").checkboxradio();

  refreshData();
  
  //voting confirmation
  $("#vote").click(function() {
    if($("#radio-1").is(':checked')) {
      $("#msg").text("hello world");
    } else if($("#radio-2").is(':checked')) {
      $("#msg").text("goodbye world");
    } else if($("#radio-3").is(':checked')) {
      $("#msg").text("dlrow olleh");
    } else {
      $("#msg").text("select an option");
    }
  });
});
