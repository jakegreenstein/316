require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['autoscaling'] = {};
AWS.AutoScaling = Service.defineService('autoscaling', ['2011-01-01']);

apiLoader.services['autoscaling']['2011-01-01'] = require('../apis/autoscaling-2011-01-01.min.json');
apiLoader.services['autoscaling']['2011-01-01'].paginators = require('../apis/autoscaling-2011-01-01.paginators.json').pagination;

module.exports = AWS.AutoScaling;
