'use strict';
console.log('link : script');
var size = 9;
var ants = {};

var ant = {
	init : function(){
		ant.create();
		ant.move();
	},
	create : function(){
		var fourmi = $('#ant-template').html();
		var placed = false;
		for (var i = 0; i < size; i++){
			for (var j = 0; j < size; j++){
				var tileChecked = $('#row'+i).find('.tile'+j).find('div');
				if (!tileChecked.hasClass('occupied')){
					tileChecked.addClass('occupied');
					tileChecked.append(fourmi);
					placed = true;
					break;
				}
			};
			if (placed){
				break;
			}
		}
	},
	move : function(){
		$(document).on('click', function(){
			console.log($(this));
		})
	}
}

var app = {
	boardSize : size,
	init : function(){
		console.log('init');
		app.tilesCreation(this.boardSize);
		var ant1 = new ant.init();
	},
	tilesCreation : function(size){
		var tile = $('#tile-template').html();
		for (var i = 0; i < size; i++){
			$('#game-content').append('<tr id="row' + i + '"></tr>');
			for (var j = 0; j < size; j++){
				$('#row' + i).append('<td class="tile' + j + '">' + tile + '<td>');
			}
		}
	}
}