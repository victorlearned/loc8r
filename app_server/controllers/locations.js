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
  res.render('location-info', {
    title: 'Ballard Coffee Works',
    pageHeader: {
      title: 'Ballard Coffee Works'
    },
    sidebar: {
      context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get work done.',
      callToAction: 'If you\'ve been and you like it - or you don\' - please leave a review to help others.'
    },
    location: {
      name: 'Ballard Coffee Works',
      address: '2060 Market Street, Seattle, WA 98107',
      rating: 4,
      facilities: ['Quiet', 'Beer', 'Wifi'],
      coords: {
        lat: 51.455041,
        lng: -0.9690884
      },
      openingTimes: [{
        days: 'Monday - Friday',
        opening: '7:00am',
        closing: '7:00pm',
        close: false
      }, {
        days: 'Saturday',
        opening: '8:00am',
        closing: '5:00pm',
        closed: false
      }, {
        days: 'Sunday',
        closed: true
      }],
      reviews: [{
        author: 'Simon Holmes',
        rating: 5,
        timestamp: '16 July 2013',
        reviewText: 'What a great place. I can\'t say enough good things about it.'
      }, {
        author: 'Victor Learned',
        rating: 3,
        timestamp: '19 January 2017',
        reviewText: 'Was okay. Wifi isn\'t the best'
      }]
    }
  });
};

/* Get 'Add review' page */
module.exports.addReview = function(req, res) {
  res.render('location-review-form', {
    title: 'Review Ballard Coffee Works on Loc8',
    pageHeader: {
      title: 'Review Ballard Coffee Works'
    }
  });
};
