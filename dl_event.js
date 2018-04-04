var ga_vs_tracking = [];
var t=Math.random().toString(18).substr(7);
var productname = ['甄选系列0065文胸','加强版聚拢0088文胸','复古蕾丝聚拢0022文胸'];
var productid = ['232353','534388','895422'];
var productprice = [500,600,300];
var productcategory = ['文胸','聚拢','蕾丝'];
var productindex = Math.floor(Math.random()*3);
//category == homepage
ga_vs_tracking.header_click = function(pageName){
  var dataLayerLen = window.dataLayer.length;
  console.log(dataLayerLen);
  window.dataLayer.push({
      'event': 'GA-event',
      'eventDetail': {
        'category': pageName, 
        'action': 'header',
        'label': undefined
      },
	  'ecommerce': undefined
   });
};
ga_vs_tracking.footer_navigation_click = function(pageName) {
  window.dataLayer.push({
    'event': 'GA-event',
    'eventDetail': {
        'category': pageName, 
        'action': 'footer',
        'label': undefined
    },
	'ecommerce': undefined
 });
}

ga_vs_tracking.first_navigation_click = function(pageName, firstNavigationLabel) {
  window.dataLayer.push({
    'event': 'GA-event',
    'eventDetail': { 
      'category': pageName,  
      'action': 'navigation',
      'label': firstNavigationLabel
    },
	'ecommerce': undefined
 });
}

ga_vs_tracking.second_navigation_click = function(pageName, secondNavigationLabel) {
  window.dataLayer.push({
    'event': 'GA-event',
    'eventDetail': { 
      'category': pageName, 
      'action': 'navigation',
      'label': secondNavigationLabel
    },
	'ecommerce': undefined
 });
}

ga_vs_tracking.product_category_click = function(pageName, clickPosition) {
  window.dataLayer.push({
    'event': 'GA-event',
    'eventDetail': { 
        'category': pageName,
        'action': clickPosition,
        'label': 'dream angels wicked'
    },
	'ecommerce': undefined
 });
}

ga_vs_tracking.product_click =  function(pageName, clickPosition, viewMode) {
  window.dataLayer.push({
      'event': 'GA-event',
      'eventDetail': { 
        'category': pageName,
        'action': clickPosition,
        'label': viewMode
      },
	  'ecommerce': {
        'click': {
             'products': [{
                 'name': productname[productindex],
                 'id': productid[productindex],
                 'price': productprice[productindex],
                 'brand': 'pink',
                 'category': productcategory[productindex],
                 'variant': '黑色|36B',
             }]
		}
	}
   });
}

ga_vs_tracking.product_search = function(pageName, searchCriteria) {
  window.dataLayer.push({
    'event': 'GA-event',
    'eventDetail': { 
        'category': pageName,
        'action': 'search',
        'label': searchCriteria
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
ga_vs_tracking.online_chat_conversation_start =  function(chatPosition) {
  window.dataLayer.push({
    'event': 'GA-event',
    'eventDetail': {
      'category': 'chat', 
      'action': 'start',
      'label': chatPosition
    },
	'ecommerce': undefined
  });
}

//category == search
ga_vs_tracking.search_no_results = function(keyword) {
  window.dataLayer.push({
     'event': 'GA-event',
     'eventDetail': { 
        'category': 'search no results', 
        'action': 'no results',
        'label': keyword
      },
	  'ecommerce': undefined
   });
}

//category == product filter
ga_vs_tracking.product_filter_pc =  function(filterTarget, filterCriteria) {
  window.dataLayer.push({
     'event': 'GA-event',
     'eventDetail': { 
        'category': 'product filter', 
        'action': filterTarget,
        'label': filterCriteria
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
ga_vs_tracking.add_to_shopping_cart =  function(position) {
  window.dataLayer.push({
     'event': 'GA-event',
     'eventDetail': { 
        'category': 'ecommerce', 
        'action': 'add to cart',
        'label': position
      },
	  'ecommerce': {
		  'add' : {
			  'products': [{
				  'name': productname[productindex],
                 		  'id': productid[productindex],
               			  'price': productprice[productindex],
               			  'brand': 'pink',
               			  'category': productcategory[productindex],
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
				  'name': productname[productindex],
                 		  'id': productid[productindex],
               			  'price': productprice[productindex],
               			  'brand': 'pink',
               			  'category': productcategory[productindex],
				  'variant': '黑色|36B',
				  'quantity': 1
			  }]
		  }
	  }
   });
}

ga_vs_tracking.checkout_order_submit =  function(visitorType) {
  window.dataLayer.push({
     'event': 'GA-event',
     'eventDetail': { 
        'category': 'ecommerce', 
        'action': 'order submit',
        'label': visitorType
      },
	  'ecommerce': {
		  'checkout': {
			  'actionField': {'step': 1, 'option': 'order submit'},
			  'products': [{
				  'name': productname[productindex],
                 		  'id': productid[productindex],
               			  'price': productprice[productindex],
               			  'brand': 'pink',
               			  'category': productcategory[productindex],
              			  'variant': '黑色|36B',
              			  'quantity': 3
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
				'revenue': productprice[productindex]*3-20,
				'shipping': 20,
				'coupon': '345678'
			},
			'products': [{
				  'name': productname[productindex],
                 		  'id': productid[productindex],
               			  'price': productprice[productindex],
               			  'brand': 'pink',
               			  'category': productcategory[productindex],
               			  'variant': '黑色|36B',
               			  'quantity': 3,
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

ga_vs_tracking.refund_and_return_confirm = function(type, reason) {
  window.dataLayer.push({
    'event': 'GA-event',
    'eventDetail': { 
      'category': 'ecommerce', 
      'action': type,
      'label': reason
    },
    'ecommerce': undefined
 });
}

