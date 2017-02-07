$(function(){
	var
		expand = function($el){
			var
				subs = $('[data-sub-rel = ' + $el.data('subKey') + ']', $el.parent());
			subs.each(function(i,el){
				var
					$el = $(el),
					getDepth = function($el){
						var
							counter = 0,
							parent =$('[data-sub-key = ' + $el.data('subRel') + ']', $el.parent());
						return (function(parent){
							if(parent.length){
								counter++;
								return arguments.callee($('[data-sub-key = ' + parent.data('subRel') + ']', $el.parent()));
							}
							return counter;
						})(parent);
					},
					level = getDepth($el);
				$el.css({
					marginLeft: level * 10 + 'px',
					marginRight:level * 10 + 'px'
				});
				if($el.hasClass('j_toggler')){
					if($el.data('defferedExpand')){
						expand($el);
						$el.data('defferedExpand',false);
					}
				}
			});
			subs.show(200);
			$el.data('expanded', true);
		},
		collapse = function($el){
			var
				subs = $('[data-sub-rel = ' + $el.data('subKey') + ']', $el.parent());
			subs.each(function(i,el){
				var
					$el = $(el);
				if($el.hasClass('j_toggler')){
					if($el.data('expanded')){
						$el.data('defferedExpand',true)
					}
					collapse($el);
				}
			});
			subs.hide(200);
			$el.data('expanded', false);
		},
		moveSubs = function($el){
			subs = $('[data-sub-rel = ' + $el.data('subKey') + ']', $el.parent());
			$el.after(subs);
			subs.each(function(i,sub){
				var
					$sub = $(sub);
				if($sub.data('subKey')){
					moveSubs($sub);
				}
			});
		};
		render();
	$('.j_toggler')
		.on('click', function(){
			var 
				$el = $(this);
			if($el.data('expanded')){
				collapse($el);
			}else{
				expand($el);
			}
		});
	$('.j_dragBlock').SbmFreeDrag({
		lock: 'j_locked',
		rel: '.j_dragBlock',
		sensitivity: 10,
		scope: 'parent',
		align: {
			x: 'center',
			sensitivity: 150
		},
		// leaveScope: 'x',
		sortable: 'y',
		onLeavingScope: function(el,p){
			console.log('leaving')
			},
		onLeaveScope: function(){console.log('left')},
		onReachingScope: function(){console.log('reach')},
		onReplaceOrigin: function(el, p){
			var
				$prev = (function($prev){
					return $prev.filter(':visible').length ? $prev : $prev.prev().length ? arguments.callee($prev.prev()) : [];
				})($(el).prev()),
				$el = $(el),
				margin = 0;
			if(p.prev != $prev[0]){
				p.prev = $prev[0];
				if($prev.length){
					if($prev.hasClass('j_toggler')){
						if($prev.data('expanded')){//insert inside folder
							margin = (parseInt($prev.css('marginLeft'), 10) || 0) + 10;
							$el.data('data-sub-rel',$prev.attr('data-sub-key'));
							$el.css({marginLeft: margin + 'px', marginRight: margin + 'px'});
						}else{//insert after folder
							margin = (parseInt($prev.css('marginLeft'), 10) || 0);
							$el.attr('data-sub-rel',$prev.data('data-sub-rel'));
							$el.css({marginLeft: margin + 'px', marginRight: margin + 'px'});
						}
					}else{//commonElement
						margin = (parseInt($prev.css('marginLeft'), 10) || 0);
						$el.attr('data-sub-rel',$prev.attr('data-sub-rel'));
						$el.css({marginLeft: margin + 'px', marginRight: margin + 'px'});
					}
				}else{//topRoot
					margin = 0;
					$el.attr('data-sub-rel',false);
					$el.css({marginLeft: '0px', marginRight: '0px'});
				}
				el.dragEl.style.width = (p.rootWidth - margin*2) + 'px';
			}
		},
		onDragStart: function(el,p){
			var
				$el = $(el);
			p.rootWidth = el.scope.clientWidth;
			p.prev = false;
			if($el.hasClass('j_toggler')){
				if($el.data('expanded')){
					$el.data('defferedExpand',true)
				}
				collapse($el);
			}
		},
		onDragEnd: function(el,p){
			var
				$el = $(el);
			moveSubs($el);
			if($el.hasClass('j_toggler')){
				if($el.data('defferedExpand')){
					expand($el);
					$el.data('defferedExpand',false);
				}
			}
		}
	});
});