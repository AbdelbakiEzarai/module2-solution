(function () {
'use strict';
angular.module('ShoppingListCheckOff',[])

.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var remove = this;

    remove.items = ShoppingListCheckOffService.getItems();
    remove.removeItem = function (itemIndex) {
    try {
    ShoppingListCheckOffService.removeItem(itemIndex);
         }
    catch (error) {
           remove.errorMessage = error.message;
                   }
  }
};
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
var show = this;
    
    show.boughtitems = ShoppingListCheckOffService.getboughtitems();
    show.errorMessage="Nothing bought yet.";
  };

function ShoppingListCheckOffService() {
  var service = this;
  var   items = [
                  { name:"apple",quantity: "5"},
                  { name:"watermelon",quantity: "2"},
                  { name: "melom",quantity: "1"},
                  { name: "peach", quantity: "3"},
                  { name: "pear", quantity: "4"}
                ];

    var boughtitems=[];
    var i=0;
  service.removeItem = function (itemIndex) {
         boughtitems[i]=items[itemIndex];
         i++;
         items.splice(itemIndex, 1);
    if(items.length === 0 )
    {
    throw new Error("Everything is bought." );
    }
    };

  service.getItems = function () {
      return items;
       };
  service.getboughtitems=function(){
    return boughtitems;
  };
  }
})();
