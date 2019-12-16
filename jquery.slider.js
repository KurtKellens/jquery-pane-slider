(function($){
			$(function()
			{
				var isMouseDown = false,
					$panelOne = $(".panel.one"), 
					$panelTwo = $(".panel.two"), 
					$panelContainer = $panelOne.parent(), 
					getParentWidth = function(){ return $panelContainer.width();}, 
					mouseMoveHandler = function(e){
						if(!isMouseDown)
							return;

						var w = (e.clientX / getParentWidth()) * 100;
						
						// don't allow a value that's smaller than zero;
						w = w < 0 ? 0 : w;

						// apply size to panel 1
						$panelOne.css({width:w + "%"});
						
						// apply size to panel 2
						$panelTwo.css({width:(100-w) + "%"});			
				};
				
				// mouseDown event				
				$(".slider").on("mousedown", function()
				{
					// only bind a the mouseMove handler on the first cycle
					!isMouseDown && $panelContainer.on("mousemove",mouseMoveHandler);
					isMouseDown = true;
				});
					
				$(window).on("mouseup", function(){
					isMouseDown = false;
					// detach then mouseMove handler
					$panelContainer.off("mousemove");
				});
					
					
				//$panelContainer.on("mousemove",mouseMoveHandler);
			})
		})(jQuery)