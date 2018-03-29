var ga_vs_tracking = [];
var t=Math.random().toString(18).substr(7);
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
  var arr = ['homepage','product detail','product list'];
  var index = Math.floor((Math.random()*arr.length));
  var arr2 = ['kv','section','今日特惠'];
  var index2 = Math.floor((Math.random()*arr2.length));
  var arr3 = ['quick view','normal'];
  var index3 = Math.floor((Math.random()*arr3.length));
  window.dataLayer.push({
      'event': 'GA-event',
      'eventDetail': { 
        'category': arr[index],
        'action': arr2[index2],
        'label': arr3[index3]
      },
	  'ecommerce': {
        'click': {
             'products': [{
                 'name': '甄选系列0065文胸',
                 'id': '123456',
                 'price': 499,
                 'brand': 'pink',
                 'category': '文胸',
                 'variant': '黑色|36B',
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
        'action': arr2[index2],
        'label': '黑色文胸'
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
  var arr = ['homepage','product detail','product list'];
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
ga_vs_tracking.product_filter =  function() {
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

//category == ecommerce
ga_vs_tracking.add_to_shopping_cart =  function() {
  var arr = ['quick view','quick view-猜您喜欢','product detail'];
  var index = Math.floor((Math.random()*arr.length));
  window.dataLayer.push({
     'event': 'GA-event',
     'eventDetail': { 
        'category': 'ecommerce', 
        'action': 'add to cart',
        'label': arr[index]
      },
	  'ecommerce': {
		  'add' : {
			  'products': [{
				  'name': '甄选系列0065文胸',
				  'id': '123456',
				  'price': 499,
				  'brand': 'pink',
				  'category': '文胸',
				  'variant': '黑色|36B',
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
				  'name': '甄选系列0065文胸',
				  'id': '123456',
				  'price': 499,
				  'brand': 'pink',
				  'category': '文胸',
				  'variant': '黑色|36B',
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
                 'name': '甄选系列0065文胸',
                 'id': '123456',
                 'price': 499,
                 'brand': 'pink',
                 'category': '文胸',
                 'variant': '黑色|36B',
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
				'revenue': 1020,
				'shipping': 20,
				'coupon': '345678'
			},
			'products': [{
                 'name': '甄选系列0065文胸',
                 'id': '123456',
                 'price': 500,
                 'brand': 'pink',
                 'category': '文胸',
                 'variant': '黑色|36B',
                 'quantity': 2,
                 'coupon': '85466876'
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

