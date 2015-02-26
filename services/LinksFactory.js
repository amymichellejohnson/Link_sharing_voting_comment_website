hackyNews.factory('LinksFactory', function LinksFactory() {
  var factory = {};
  factory.links = [
{ title: 'Test1', url: 'http://www.google.com', userName: 'amy123', id: 1, points: 7, comments: [], rank: 0, date: new Date()},
    { title: 'Test2', url: 'http://www.bing.com', userName: 'clem321', id: 2, points: 3, comments: [], rank: 0, date: new Date()},
  { title: 'Test3', url: 'http://www.bing.com', userName: 'clem321', id: 3, points: 10, comments: [], rank: 0, date: new Date()}
  ];

  factory.addLink = function() {
    factory.links.push({ title: factory.linkTitle,
                         url: factory.url,
                         user: factory.userName,
                         id: factory.links.length +1,
                         points: 0,
                         date: new Date(),
                         comments: [],
                         rank: 0 });
    factory.linkTitle = null;
    factory.url = null;
    factory.userName = null;
    factory.rankLinks();
  };

  factory.rankLinks = function() {
    factory.links.forEach(function(link) {
      var hoursSince = (Date.now() - link.date) / 3600000;
      var points = link.points;
      var gravity = 1.8;

      link.rank = (points -1) / Math.pow((hoursSince + 2), gravity);
    });
  }

  return factory;
})
