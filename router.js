CRDeluxe.Router.map(function() {

  this.resource("auctions", {path: '/'}),

  this.resource("auction", {path: '/:auction_id'}, function() {
    this.resource('newLot')
  }),

  this.resource('lot', {path: '/:lot_id'}, function() {
    this.resource('newItem')
  })

});
