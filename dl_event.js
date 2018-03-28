var ga_vs_tracking = [];
var t=Math.random().toString(18).substr(7);
//category == homepage
ga_vs_tracking.header_click = function(){
  var dataLayerLen = window.dataLayer.length;
  console.log(dataLayerLen)
  window.dataLayer.push({
      'event': 'GA-event',
      'eventDetail': {
        'category': 'homepage', 
        'action': 'header',
        'label': undefined
      },
	  'ecommerce': undefined
   });
};

ga_vs_tracking.footer_navigation_click = function() {
  window.dataLayer.push({
    'event': 'GA-event',
    'eventDetail': {
        'category': 'homepage', 
        'action': 'footer',
        'label': undefined
    },
	'ecommerce': undefined
 });
}

ga_vs_tracking.first_navigation_click = function() {
  window.dataLayer.push({
    'event': 'GA-event',
    'eventDetail': { 
      'category': 'homepage', 
      'action': 'navigation',
      'label': 'firstnav-文胸'
    },
	'ecommerce': undefined
 });
}

ga_vs_tracking.second_navigation_click = function() {
  window.dataLayer.push({
    'event': 'GA-event',
    'eventDetail': { 
      'category': 'homepage', 
      'action': 'navigation',
      'label': 'secnav-内裤-款式-半包臀内裤'
    },
	'ecommerce': undefined
 });
}

ga_vs_tracking.product_category_click = function() {
  window.dataLayer.push({
    'event': 'GA-event',
    'eventDetail': { 
        'category': 'homepage',
        'action': 'kv',
        'label': 'dream angels wicked'
    },
	'ecommerce': undefined
 });
}

ga_vs_tracking.product_click =  function() {
  window.dataLayer.push({
      'event': 'GA-event',
      'eventDetail': { 
        'category': 'product detail page', 
        'action': 'section-精选搭配',
        'label': 'quick view'
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
                 'quantity': 1
             }]
		}
	}
   });
}

ga_vs_tracking.product_search = function() {
  window.dataLayer.push({
    'event': 'GA-event',
    'eventDetail': { 
        'category': 'homepage',
        'action': 'search',
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
  window.dataLayer.push({
    'event': 'GA-event',
    'eventDetail': {
      'category': 'chat', 
      'action': 'start',
      'label': 'header'
    },
	'ecommerce': undefined
  });
}

//category == search
ga_vs_tracking.search_no_result =  function() {
  window.dataLayer.push({
     'event': 'GA-event',
     'eventDetail': { 
        'category': 'search no result page', 
        'action': 'search no result',
        'label': 'ABCDEFG'
      },
	  'ecommerce': undefined
   });
}

//category == product filter
ga_vs_tracking.product_filter =  function() {
  window.dataLayer.push({
     'event': 'GA-event',
     'eventDetail': { 
        'category': 'product filter', 
        'action': '文胸',
        'label': '款式-3|4罩杯'
      },
	  'ecommerce': undefined
   });
}

//category == ecommerce
ga_vs_tracking.add_to_shopping_cart =  function() {
  window.dataLayer.push({
     'event': 'GA-event',
     'eventDetail': { 
        'category': 'ecommerce', 
        'action': 'add to cart',
        'label': 'quick view',
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
  window.dataLayer.push({
     'event': 'GA-event',
     'eventDetail': { 
        'category': 'ecommerce', 
        'action': 'order submit',
        'label': 'member'
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
  window.dataLayer.push({
    'event': 'GA-event',
    'eventDetail': { 
      'category': 'ecommerce', 
      'action': 'refund',
      'label': '不想要了',
    },
    'ecommerce': undefined
 });
}

