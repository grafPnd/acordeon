var 
	render = function(){
		var
			cont = $('#j_tree');
		cont.empty();
		(function(arr, id, p){
			var
				i = 0,
				l = arr.length,
				m = p ? p  : 0;
			for(i = 0; i < l; i++){
				if(arr[i].children && arr[i].children.length){
					cont.append($('<div ' + (m ? 'style = "margin-left: ' + m + 'px; margin-right:' + m + 'px;"' : '') + ' class = "j_toggler j_dragBlock s_pointer straightBox ' + (id ? 'v_hidden' : '') + ' rightRb rightItem" data-sub-key = "' + arr[i].id + '" ' + (id ? 'data-sub-rel = "' + id + '"' : '')  + ' >' + arr[i].name + '</div>'));
					arguments.callee(arr[i].children, arr[i].id, m + 10);
				}else{
					cont.append($(' <div ' + (m ? 'style = "margin-left: ' + m + 'px; margin-right:' + m + 'px;"' : '') + ' class = "j_dragBlock straightBox ' + (id ? 'v_hidden' : '') + ' rightRb rightItem" data-sub-rel = "' + (id || arr[i].id) + '" >' + arr[i].name + '</div>'));
				}
			}
		}(d));
	},
	d = [
	{
	name: 'FOLDER 1',
	id: 'folder1',
	children: [
			{
			name: 'FOLDER 2',
			id: 'folder2',
			children: [
				{
				name: 'FOLDER 3',
				id: 'folder3',
				children: [
						{
						name: 'FOLDER 4',
						id: 'folder4',
						children: [
								{
								name: 'FOLDER 5',
								id: 'folder5',
								children: [
										{
										name: 'FOLDER 6',
										id: 'folder6',
										children: [
												{
												name: 'just element 6_1',
												id: 'just element6_1'
												},
												{
												name: 'just element 6_2',
												id: 'just element6_2'
												},	
												{
												name: 'just element 6_3',
												id: 'just element6_3'
												},	
												{
												name: 'just element 6_4',
												id: 'just element6_4'
												}
											]
										},
										{
										name: 'just element 5_2',
										id: 'just element5_2'
										},	
										{
										name: 'just element 5_3',
										id: 'just element5_3'
										},	
										{
										name: 'just element 5_4',
										id: 'just element5_4'
										}
									]
								},
								{
								name: 'just element 4_2',
								id: 'just element4_2'
								},	
								{
								name: 'just element 4_3',
								id: 'just element4_3'
								},	
								{
								name: 'just element 4_4',
								id: 'just element4_4'
								}
							]
						},
						{
						name: 'just element 3_2',
						id: 'just element3_2'
						},	
						{
						name: 'just element 3_3',
						id: 'just element3_3'
						},	
						{
						name: 'just element 3_4',
						id: 'just element3_4'
						}
					]
				},
				{
				name: 'just element 2_2',
				id: 'just element2_2'
				},	
				{
				name: 'just element 2_3',
				id: 'just element2_3'
				},	
				{
				name: 'just element 2_4',
				id: 'just element2_4'
				}
			]
			},
			{
			name: 'just element 1_2',
			id: 'just element1_2'
			},
			{
			name: 'just element 1_3',
			id: 'just element1_3'
			},
			{
			name: 'just element 1_4',
			id: 'just element1_4'
			}
		]
	},
	{
	name: 'FOLDER 9',
	id: 'folder9',
	children: [
			{
			name: 'just element 9_1',
			id: 'just element9_1'
			},
			{
			name: 'just element 9_2',
			id: 'just element9_2'
			},
			{
			name: 'just element 9_3',
			id: 'just element9_3'
			},
			{
			name: 'just element 9_4',
			id: 'just element9_4'
			}
		]
	},
	{
	name: 'FOLDER 10',
	id: 'folder10',
	children: [
			{
			name: 'just element 10_1',
			id: 'just element10_1'
			},
			{
			name: 'just element 10_2',
			id: 'just element10_2'
			},
			{
			name: 'just element 10_3',
			id: 'just element10_3'
			},
			{
			name: 'just element 10_4',
			id: 'just element10_4'
			}
		]
	},
	{
	name: 'FOLDER 11',
	id: 'folder11',
	children: [
			{
			name: 'just element 11_1',
			id: 'just element11_1'
			},
			{
			name: 'just element 11_2',
			id: 'just element11_2'
			},
			{
			name: 'just element 11_3',
			id: 'just element11_3'
			},
			{
			name: 'just element 11_4',
			id: 'just element11_4'
			}
		]
	},
	{
	name: 'FOLDER 12',
	id: 'folder12',
	children: [
			{
			name: 'just element 12_1',
			id: 'just element12_1'
			},
			{
			name: 'just element 12_2',
			id: 'just element12_2'
			},
			{
			name: 'just element 12_3',
			id: 'just element12_3'
			},
			{
			name: 'just element 12_4',
			id: 'just element12_4'
			}
		]
	},
	{
	name: 'FOLDER 13',
	id: 'folder13',
	children: [
			{
			name: 'just element 13_1',
			id: 'just element13_1'
			},
			{
			name: 'just element 13_2',
			id: 'just element13_2'
			},
			{
			name: 'just element 13_3',
			id: 'just element13_3'
			},
			{
			name: 'just element 13_4',
			id: 'just element13_4'
			}
		]
	},
	{
	name: 'just root element 1',
	id: 'roorelement1'
	},
	{
	name: 'just root element 2',
	id: 'roorelement2'
	},
	{
	name: 'just root element 3',
	id: 'roorelement3'
	}
];