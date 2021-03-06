require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['cloudwatchlogs'] = {};
AWS.CloudWatchLogs = Service.defineService('cloudwatchlogs', ['2014-03-28']);

apiLoader.services['cloudwatchlogs']['2014-03-28'] = require('../apis/logs-2014-03-28.min.json');
apiLoader.services['cloudwatchlogs']['2014-03-28'].paginators = require('../apis/logs-2014-03-28.paginators.json').pagination;

module.exports = AWS.CloudWatchLogs;
