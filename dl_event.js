var ga_vs_tracking = [];
var t=Math.random().toString(18).substr(7);
var productname = ['甄选系列0065文胸','加强版聚拢0088文胸','复古蕾丝聚拢0022文胸'];
var productid = ['232353','534388','895422'];
var productprice = [500,600,300];
var productcategory = ['文胸','聚拢','蕾丝'];
var productindex = Math.floor(Math.random()*3);
//category == homepage
ga_vs_tracking.header_click = function(){
  var dataLayerLen = window.dataLayer.length;
  console.log(dataLayerLen);
  var arr = ['homepage','product detail','product list'];
  var index = Math.floor((Math.random()*arr.length)); 
  window.dataLayer.push({
      'event': 'GA-event',
      'eventDetail': {
        'category': arr[index], 
        'action': 'header',
        'label': undefined
      },
	  'ecommerce': undefined
   });
 window._hmt.push([‘_trackEvent’, category, action, opt_label,opt_value])	
};
ga_vs_tracking.footer_navigation_click = function() {
  var arr = ['homepage','product detail','product list'];
  var index = Math.floor((Math.random()*arr.length));
  window.dataLayer.push({
    'event': 'GA-event',
    'eventDetail': {
        'category': arr[index], 
        'action': 'footer',
        'label': undefined
    },
	'ecommerce': undefined
 });
}

ga_vs_tracking.first_navigation_click = function() {
  var arr = ['homepage','product detail','product list'];
  var index = Math.floor((Math.random()*arr.length));
  var arr2 = ['firstnav-文胸','firstnav-内裤','firstnav-舒适睡衣'];
  var index2 = Math.floor((Math.random()*arr2.length));
  window.dataLayer.push({
    'event': 'GA-event',
    'eventDetail': { 
      'category': arr[index],  
      'action': 'navigation',
      'label': arr2[index2]
    },
	'ecommerce': undefined
 });
}

ga_vs_tracking.second_navigation_click = function() {
  var arr = ['homepage','product detail','product list'];
  var index = Math.floor((Math.random()*arr.length));
  var arr2 = ['secnav-内裤-款式-半包臀内裤','secnav-文胸-all','secnav-文胸-效果-超薄'];
  var index2= Math.floor((Math.random()*arr2.length));
  window.dataLayer.push({
    'event': 'GA-event',
    'eventDetail': { 
      'category': arr[index], 
      'action': 'navigation',
      'label': arr2[index2]
    },
	'ecommerce': undefined
 });
}

ga_vs_tracking.product_category_click = function() {
  var arr = ['homepage','product detail','product list'];
  var index = Math.floor((Math.random()*arr.length));
  var arr2 = ['kv','section','今日特惠'];
  var index2 = Math.floor((Math.random()*arr2.length));
  window.dataLayer.push({
    'event': 'GA-event',
    'eventDetail': { 
        'category': arr[index],
        'action': arr2[index2],
        'label': 'dream angels wicked'
    },
	'ecommerce': undefined
 });
}
ga_vs_tracking.product_click =  function() {
  var arr2 = ['kv','section','今日特惠'];
  var index2 = Math.floor((Math.random()*arr2.length));
  var arr3 = ['quick view','normal'];
  var index3 = Math.floor((Math.random()*arr3.length));
  window.dataLayer.push({
      'event': 'GA-event',
      'eventDetail': { 
        'category': 'homepage',
        'action': arr2[index2],
        'label': arr3[index3]
      },
	  'ecommerce': {
        'click': {
             'products': [{
                'name': '甄选系列0066文胸',
		'id': '234567', 
		'price': 399, 
		'brand': 'pink',
		'category': '文胸', 
		'variant': '条纹|37B'
             }]
		}
	}
   });
}

ga_vs_tracking.product_search = function() {
  var arr = ['homepage','product detail','product list'];
  var index = Math.floor((Math.random()*arr.length));
  var arr2 = ['黑色文胸','运动文胸','条纹睡衣'];
  var index2 = Math.floor((Math.random()*arr2.length));
  window.dataLayer.push({
    'event': 'GA-event',
    'eventDetail': { 
        'category': arr[index],
        'action': 'search',
        'label': arr2[index2]
    },
	'ecommerce': undefined
 });
}

//category == account
ga_vs_tracking.register =  function() {
  window.dataLayer.push({
      'event': 'GA-event',
      'eventDetail': { 
        'category': 'account', 
        'action': 'register',
        'label': 'success'
      },
	  'user': {
         'id': '12345678',
         'group': 'member'
     },
    'ecommerce': undefined
   });
}

ga_vs_tracking.user_logout =  function() {
  window.dataLayer.push({
      'event': 'GA-event',
      'eventDetail': { 
        'category': 'account', 
        'action': 'logout', 
        'label': undefined
      },
	  'user': {
		  'id': undefined,
		  'group': 'guest'
	  },
	  'ecommerce': undefined
   });
}

//category == chat
ga_vs_tracking.online_chat_conversation_start =  function() {
  var arr = ['header','footer','product detail'];
  var index = Math.floor((Math.random()*arr.length));
  window.dataLayer.push({
    'event': 'GA-event',
    'eventDetail': {
      'category': 'chat', 
      'action': 'start',
      'label': arr[index]
    },
	'ecommerce': undefined
  });
}

//category == search
ga_vs_tracking.search_no_results = function() {
  var arr = ['ABCDEFG','运动长裤','大秀手袋'];
  var index = Math.floor((Math.random()*arr.length));
  window.dataLayer.push({
     'event': 'GA-event',
     'eventDetail': { 
        'category': 'search no results', 
        'action': 'no results',
        'label': arr[index]
      },
	  'ecommerce': undefined
   });
}

//category == product filter
ga_vs_tracking.product_filter_pc =  function() {
  var arr = ['文胸','内裤','舒适睡衣'];
  var index = Math.floor((Math.random()*arr.length));
  var arr2 = ['款式-3|4罩杯','颜色-黑色','颜色-条纹']
  var index2 = Math.floor((Math.random()*arr2.length));
  window.dataLayer.push({
     'event': 'GA-event',
     'eventDetail': { 
        'category': 'product filter', 
        'action': arr[index],
        'label': arr2[index2]
      },
	  'ecommerce': undefined
   });
}
ga_vs_tracking.product_filter_mobile = function(){
   window.dataLayer.push({
     'event': 'GA-event',
     'eventDetail': { 
        'category': 'product filter', 
        'action': '文胸',
        'label': '款式-3|4罩杯'
      },
	  'ecommerce': undefined
   });
    window.dataLayer.push({
     'event': 'GA-event',
     'eventDetail': { 
        'category': 'product filter', 
        'action': '文胸',
        'label': '款式-黑色'
      },
	  'ecommerce': undefined
   });
    window.dataLayer.push({
     'event': 'GA-event',
     'eventDetail': { 
        'category': 'product filter', 
        'action': '文胸',
        'label': '款式-条纹'
      },
	  'ecommerce': undefined
   });
}
//category == ecommerce
ga_vs_tracking.product_view  =  function() {
    window.dataLayer.push({
     'event': 'GA-event',
     'eventDetail': { 
        'category': 'ecommerce', 
        'action': 'product view',
        'label': 'product detail'
      },
	  'ecommerce': {		
		  'detail' : {
			  'products': [{
				 'name': '甄选系列0066文胸',
				 'id': '234567', 
				 'price': 399, 
				 'brand': 'pink',
				 'category': '文胸', 
				 'variant': '条纹|37B'
			  }]
		  }
	  }
    });
}
ga_vs_tracking.add_to_shopping_cart =  function() {
    window.dataLayer.push({
     'event': 'GA-event',
     'eventDetail': { 
        'category': 'ecommerce', 
        'action': 'add to cart',
        'label': 'product detail'
      },
	  'ecommerce': {		
		  'add' : {
			  'products': [{
				 'name': '甄选系列0066文胸',
				 'id': '234567', 
				 'price': 399, 
				 'brand': 'pink',
				 'category': '文胸', 
				 'variant': '条纹|37B',
				 'quantity': 1
			  }]
		  }
	  }
    });
}
ga_vs_tracking.add_to_shopping_cart_pv =  function() {
    window.dataLayer.push({
     'event': 'GA-event',
     'eventDetail': { 
        'category': 'ecommerce', 
        'action': 'product view',
        'label': 'quick view'
      },
	  'ecommerce': {		
		  'detail' : {
			  'products': [{
				'name': '甄选系列0066文胸',
				 'id': '234567', 
				 'price': 399, 
				 'brand': 'pink',
				 'category': '文胸', 
				 'variant': '条纹|37B'
			  }]
		  }
	  }
    });
    window.dataLayer.push({
     'event': 'GA-event',
     'eventDetail': { 
        'category': 'ecommerce', 
        'action': 'add to cart',
        'label': 'quick view'
      },
	  'ecommerce': {		
		  'detail' : {
			  'products': [{
				'name': '甄选系列0066文胸',
				 'id': '234567', 
				 'price': 399, 
				 'brand': 'pink',
				 'category': '文胸', 
				 'variant': '条纹|37B',
				 'quantity': 1
			  }]
		  }
	  }
    });
}

ga_vs_tracking.remove_from_shopping_cart =  function() {
  window.dataLayer.push({
     'event': 'GA-event',
     'eventDetail': { 
        'category': 'ecommerce', 
        'action': 'remove from cart',
        'label': 'shopping cart'
      },
	  'ecommerce': {
		  'remove': {
			  'products': [{
				 'name': '甄选系列0066文胸',
				 'id': '234567', 
				 'price': 399, 
				 'brand': 'pink',
				 'category': '文胸', 
				 'variant': '条纹|37B',
				 'quantity': 1
			  }]
		  }
	  }
   });
}

ga_vs_tracking.checkout_order_submit =  function() {
  var arr = ['member','guest'];
  var index = Math.floor((Math.random()*arr.length));
  window.dataLayer.push({
     'event': 'GA-event',
     'eventDetail': { 
        'category': 'ecommerce', 
        'action': 'order submit',
        'label': arr[index]
      },
	  'ecommerce': {
		  'checkout': {
			  'actionField': {'step': 1, 'option': 'order submit'},
			  'products': [{
				 'name': '甄选系列0066文胸',
				 'id': '234567', 
				 'price': 399, 
				 'brand': 'pink',
				 'category': '文胸', 
				 'variant': '条纹|37B',
				 'quantity': 1
             }]
		  }
	  }
   });
}

ga_vs_tracking.payment_successful = function() {
  window.dataLayer.push({
    'event': 'GA-event',
    'eventDetail': { 
      'category': 'ecommerce', 
      'action': 'successful transaction',
      'label': undefined
    },	  
    'ecommerce': {
		'purchase': {
			'actionField': {
				'id': t,
				'affiliation': 'alipay',
				'revenue': (399*3+0)*0.8,
				'shipping': 0,
				'coupon': '345678'
			},
			'products': [{
				 'name': '甄选系列0066文胸',
				 'id': '234567', 
				 'price': 399, 
				 'brand': 'pink',
				 'category': '文胸', 
				 'variant': '条纹|37B',
               			 'quantity': 3
             }]
		}
	}
 });
}

ga_vs_tracking.payment_unsuccessful = function() {
  window.dataLayer.push({
    'event': 'GA-event',
    'eventDetail': { 
      'category': 'ecommerce', 
      'action': 'fail transaction',
      'label': undefined,
    },
    'ecommerce': undefined
 });
}

ga_vs_tracking.refund_and_return_confirm = function() {
  var arr = ['refund','return'];
  var index = Math.floor((Math.random()*arr.length));
  var arr2 = ['不想要了','尺码不合适'];
  var index2 = Math.floor((Math.random()*arr2.length));
  window.dataLayer.push({
    'event': 'GA-event',
    'eventDetail': { 
      'category': 'ecommerce', 
      'action': arr[index],
      'label': arr2[index2]
    },
    'ecommerce': undefined
 });
}

