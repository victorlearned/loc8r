/* Get 'home' page */
module.exports.homelist = function(req, res) {
  res.render('locations-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you!'
    },
    sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint?",
    locations: [{
      name: 'Starcups',
      address: '125 High Street, Reading RG6 1PS',
      rating: 3,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '100m'
    },{
      name: 'Cafe Hero',
      address: '20100 Market Street, Seattle, WA 98107',
      rating: 4,
      facilities: ['Hot drinks', 'Food', "Premium wifi"],
      distance: '200m'
    },{
      name: "Ballard Coffee Works",
      address: '2060 Market Street, Seattle, WA 98107',
      rating: 4,
      facilities: ['Beer', 'Quiet', 'wifi'],
      distance: '120m'
    }]
  });
};

/* Get 'Location info' page */
module.exports.locationInfo = function(req, res) {
  res.render('location-info', { title: 'Location info' });
};

/* Get 'Add review' page */
module.exports.addReview = function(req, res) {
  res.render('location-review-form', { title: 'Add review' });
};
