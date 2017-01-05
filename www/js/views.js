angular.module('liquium.views', []).run(['$templateCache', function($templateCache) {$templateCache.put('views/app/profile.html','<ion-view class="profile-view">\n  <ion-nav-title>\n    <span>Profile</span>\n  </ion-nav-title>\n  <ion-content>\n    <div class="top-content row">\n      <div class="profile-container">\n        <div class="user-image-container">\n          <pre-img ratio="_1_1" helper-class="rounded-image">\n            <img class="user-image" ng-src="https://skincareayurveda.com/photos/kayakalp-global-featured-image-1468303717.png" spinner-on-load>\n          </pre-img>\n        </div>\n        <div class="user-name">User</div>\n        <div class="user-twitter">@user</div>\n      </div>\n      <div class="user-background-image-outer">\n        <div multi-bg="[\'https://skincareayurveda.com/photos/kayakalp-global-featured-image-1468303717.png\']"></div>\n      </div>\n    </div>\n    <div class="bottom-content">\n      <div class="user-bio">\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('views/app/side-menu.html','<ion-side-menus enable-menu-with-back-views="false">\n  <ion-side-menu-content class="post-size-14px">\n    <ion-nav-bar class="bar app-top-bar">\n      <ion-nav-back-button>\n      </ion-nav-back-button>\n      <ion-nav-buttons side="left">\n        <button class="button button-icon button-clear ion-navicon" menu-toggle="left">\n        </button>\n      </ion-nav-buttons>\n    </ion-nav-bar>\n    <ion-nav-view name="menuContent"></ion-nav-view>\n  </ion-side-menu-content>\n\n  <ion-side-menu side="left" class="main-menu" expose-aside-when="large">\n    <ion-content>\n      <ion-list>\n        <ion-item class="heading-item item item-avatar" nav-clear menu-close ui-sref="app.profile">\n          <div class="user-image-container">\n            <pre-img ratio="_1_1" helper-class="rounded-image">\n              <img class="user-image" ng-src="https://skincareayurveda.com/photos/kayakalp-global-featured-image-1468303717.png" spinner-on-load>\n          \t</pre-img>\n          </div>\n          <h2 class="greeting">Hi user</h2>\n          <p class="message">Edit profile</p>\n        </ion-item>\n        <ion-item class="item-icon-left" nav-clear menu-close ui-sref="app.polls-list">\n          <i class="icon ion-alert"></i>\n          <h2 class="menu-text">Poll feed</h2>\n        </ion-item>\n        <ion-item class="item-icon-left" nav-clear menu-close ui-sref="app.polls-categories">\n          <i class="icon ion-radio-waves"></i>\n          <h2 class="menu-text">Categories</h2>\n        </ion-item>\n        <ion-item class="item-icon-left" nav-clear menu-close ui-sref="app.delegates">\n          <i class="icon ion-bowtie"></i>\n          <h2 class="menu-text">Delegates</h2>\n        </ion-item>\n\n    </ion-list>\n    </ion-content>\n  </ion-side-menu>\n</ion-side-menus>\n');
$templateCache.put('views/common/multi-bg.html','<div class="multi-bg-outer" ng-class="{ \'finish-loading\': loaded }">\n\t<img bg class="multi-bg {{ helperClass }}" ng-src="{{ bg_img }}"/>\n\t<span class="bg-overlay"></span>\n\t<ion-spinner ng-show="!loaded" class="spinner-on-load"></ion-spinner>\n\t<!-- <span ng-show="!loaded" class="spinner-on-load ion-load-c"></span> -->\n\t<ng-transclude></ng-transclude>\n</div>\n');
$templateCache.put('views/common/my-tab.html','<div class="tab-content ng-cloak ng-hide" ng-cloak ng-show="selected" ng-transclude></div>\n');
$templateCache.put('views/common/my-tabs.html','<div class="item item-divider card-heding">\n\t<div class="tabs-striped">\n\t\t<div class="tabs">\n\t\t\t<a ng-repeat="tab in tabs" ng-click="select(tab)" ng-class="{ active: tab.selected }" class="tab-item">{{tab.title}}</a>\n\t\t</div>\n\t</div>\n</div>\n<div class="item item-body">\n\t<div class="tabs-content" ng-transclude></div>\n</div>\n');
$templateCache.put('views/common/pre-img.html','<div class="pre-img {{ratio}} {{ helperClass }}" ng-class="{ \'finish-loading\': loaded }">\n\t<ion-spinner ng-show="!loaded" class="spinner-on-load"></ion-spinner>\n\t<!-- <span ng-show="!loaded" class="spinner-on-load ion-load-c"></span> -->\n\t<ng-transclude></ng-transclude>\n</div>\n');
$templateCache.put('views/common/show-hide-password.html','<div class="show-hide-input" ng-transclude>\n</div>\n<a class="toggle-view-anchor" on-touch="toggleType($event)">\n\t<span class="ion-eye-disabled" ng-show="show"></span>\n\t<span class="ion-eye" ng-show="!show"></span>\n</a>\n');
$templateCache.put('views/app/delegates/category-delegates.html','<ion-view class="category-delegates-view">\n  <ion-nav-title>\n    <span>{{categoryTitle}} delegates</span>\n  </ion-nav-title>\n  <ion-content>\n    <div class="list category-polls">\n      <a ng-repeat="delegate in category_delegates" class="item item-icon-right">\n          <div>\n            <span class="title">{{delegate.title}}</span>\n          </div>\n          <div>\n            <span class="title">{{delegate.address}}</span>\n          </div>\n          <button class="button button-positive button-small button-block button-assertive" ng-click="showConfirm(delegate.address)">\n            Choose\n          </button>\n      </a>\n    </div>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('views/app/delegates/delegates.html','<ion-view class="category-polls-view">\n  <ion-nav-title>\n    <span>Delegates</span>\n  </ion-nav-title>\n  <ion-content>\n    <div class="list delegates-category-row">\n      <a ng-repeat="cat_del in categories_delegates" class="item item-icon-right" ui-sref="app.category-delegates({category: (cat_del.idDelegate)})">\n        <div class="row category-row">\n          <div class="delegates-category col-md-6">\n            <span class="title">{{cat_del.name}}</span>\n          </div>\n          <div class="category-delegate col-md-6">\n            <span class="title">{{cat_del.name}}</span>\n          </div>\n          <p class="icon" style="font-size: 20px">Edit</p>\n        </div>\n      </a>\n    </div>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('views/app/polls/category-polls.html','<ion-view class="category-polls-view">\n  <ion-nav-title>\n    <span>{{categoryTitle}} polls</span>\n  </ion-nav-title>\n  <ion-content>\n    <div class="list category-polls">\n      <a ng-repeat="poll in category_polls" class="item item-icon-right" ui-sref="app.poll({pollId: (poll.title | slugify)})">\n        <div class="thumbnail-outer">\n          <pre-img ratio="_1_1" helper-class="">\n            <img class="thumbnail" ng-src="img/logo.png" spinner-on-load>\n          </pre-img>\n        </div>\n        <div>\n          <span class="title">{{poll.title}}</span>\n          <p class="description">{{poll.description}}</p>\n        </div>\n        <i class="icon ion-arrow-right-c"></i>\n      </a>\n    </div>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('views/app/polls/poll.html','<ion-view class="poll-entries-view">\n  <ion-nav-title>\n    <span>{{ poll.title }}</span>\n  </ion-nav-title>\n  <ion-content>\n\n    <div class="poll">\n      <div class="list card poll-item">\n        <div class="poll-heading item item-text-wrap">\n          <h2 class="poll-title" ng-bind-html="poll.title | rawHtml"></h2>\n          <p class="poll-date">\n            <b>Poll open until</b> <span>{{ poll.closeTime | amDateFormat: \'dddd, MMMM Do YYYY, h:mm a\' }}</span>\n          </p>\n          <p class="poll-date">\n            <b>Close for delegates:</b> <span>{{ poll.closeDelegateTime | amDateFormat: \'dddd, MMMM Do YYYY, h:mm a\' }}</span>\n          </p>\n        </div>\n        <div class="poll-content item item-text-wrap">\n          <p class="poll-excerpt">{{ poll.question }}</p>\n          <div class="poll-actions">\n            <div ng-repeat="option in poll.options" class="item item-icon-right">\n              <ion-radio ng-model="$parent.choice" ng-value="{{ option.ballot }}" required>{{ option.answer }}</ion-radio>\n            </div>\n            <div class="vote col col-center" dynamic-anchor-fix>\n              <button class="button button-positive button-small button-block button-assertive" ng-click="vote(choice)">\n                Vote\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('views/app/polls/polls-categories.html','<ion-view class="polls-categories-view">\n  <ion-nav-buttons side="left">\n    <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>\n  </ion-nav-buttons>\n  <ion-nav-title>\n    <span>Poll Categories</span>\n  </ion-nav-title>\n  <ion-content>\n    <div class="row categories-list">\n      <div ng-repeat="category in poll_categories" class="col col-50">\n        <a class="poll-category" ui-sref="app.category-polls({category: (category.idCategory)})" style="background-color: green">\n          <span class="category-title">{{category.name}}</span>\n        </a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('views/app/polls/polls-list.html','<ion-view class="category-polls-view">\n  <ion-nav-title>\n    <span>Poll Feed</span>\n  </ion-nav-title>\n  <ion-content>\n    <div class="list category-polls">\n      <a ng-repeat="poll in polls" class="item item-icon-right" ui-sref="app.poll({pollId: poll.idPoll})">\n        <div class="thumbnail-outer">\n          <pre-img ratio="_1_1" helper-class="">\n            <img class="thumbnail" ng-src="img/logo.png" spinner-on-load>\n          </pre-img>\n        </div>\n        <div>\n          <span class="title">{{poll.title}}</span>\n          <p class="description">{{poll.question}}</p>\n        </div>\n        <i class="icon ion-arrow-right-c"></i>\n      </a>\n    </div>\n  </ion-content>\n</ion-view>\n');}]);