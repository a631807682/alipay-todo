angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope,$ionicPopup) {
    $scope.settings = {
        enableFriends: true
    };


    $scope.pay = function() {

        var time = new Date();
        var tradeNo = time.getTime();
        window.alipay.pay({
            tradeNo: tradeNo,
            subject: "测试标题",
            body: "我是测试内容",
            price: 0.02,
            notifyUrl: "http://your.server.notify.url"
        }, function(successResults) {

            $ionicPopup.alert({
                template:'success:'+JSON.stringify(successResults) 
            })
        }, function(errorResults) {
      
            $ionicPopup.alert({
                template:'error:'+JSON.stringify(errorResults) 
            })
        });

    }


});
