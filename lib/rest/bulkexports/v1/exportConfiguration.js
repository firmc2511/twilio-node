'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../base/Page');  /* jshint ignore:line */
var serialize = require('../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var ExportConfigurationList;
var ExportConfigurationPage;
var ExportConfigurationInstance;
var ExportConfigurationContext;

/* jshint ignore:start */
/**
 * Initialize the ExportConfigurationList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Bulkexports.V1.ExportConfigurationList
 *
 * @param {Twilio.Bulkexports.V1} version - Version of the resource
 */
/* jshint ignore:end */
ExportConfigurationList = function ExportConfigurationList(version) {
  /* jshint ignore:start */
  /**
   * @function exportConfiguration
   * @memberof Twilio.Bulkexports.V1#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Bulkexports.V1.ExportConfigurationContext}
   */
  /* jshint ignore:end */
  function ExportConfigurationListInstance(sid) {
    return ExportConfigurationListInstance.get(sid);
  }

  ExportConfigurationListInstance._version = version;
  // Path Solution
  ExportConfigurationListInstance._solution = {};
  /* jshint ignore:start */
  /**
   * Constructs a export_configuration
   *
   * @function get
   * @memberof Twilio.Bulkexports.V1.ExportConfigurationList#
   *
   * @param {string} resourceType - The type of communication – Messages, Calls
   *
   * @returns {Twilio.Bulkexports.V1.ExportConfigurationContext}
   */
  /* jshint ignore:end */
  ExportConfigurationListInstance.get = function get(resourceType) {
    return new ExportConfigurationContext(this._version, resourceType);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Bulkexports.V1.ExportConfigurationList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  ExportConfigurationListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  ExportConfigurationListInstance[util.inspect.custom] = function inspect(depth,
      options) {
    return util.inspect(this.toJSON(), options);
  };

  return ExportConfigurationListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the ExportConfigurationPage
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Bulkexports.V1.ExportConfigurationPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {ExportConfigurationSolution} solution - Path solution
 *
 * @returns ExportConfigurationPage
 */
/* jshint ignore:end */
ExportConfigurationPage = function ExportConfigurationPage(version, response,
                                                            solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(ExportConfigurationPage.prototype, Page.prototype);
ExportConfigurationPage.prototype.constructor = ExportConfigurationPage;

/* jshint ignore:start */
/**
 * Build an instance of ExportConfigurationInstance
 *
 * @function getInstance
 * @memberof Twilio.Bulkexports.V1.ExportConfigurationPage#
 *
 * @param {ExportConfigurationPayload} payload - Payload response from the API
 *
 * @returns ExportConfigurationInstance
 */
/* jshint ignore:end */
ExportConfigurationPage.prototype.getInstance = function getInstance(payload) {
  return new ExportConfigurationInstance(this._version, payload);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Bulkexports.V1.ExportConfigurationPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
ExportConfigurationPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

ExportConfigurationPage.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the ExportConfigurationContext
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Bulkexports.V1.ExportConfigurationInstance
 *
 * @property {boolean} enabled - Whether files are automatically generated
 * @property {string} webhookUrl - URL targeted at export
 * @property {string} webhookMethod - Whether to GET or POST to the webhook url
 * @property {string} resourceType - The type of communication – Messages, Calls
 * @property {string} url - The URL of this resource.
 *
 * @param {V1} version - Version of the resource
 * @param {ExportConfigurationPayload} payload - The instance payload
 * @param {string} resourceType - The type of communication – Messages, Calls
 */
/* jshint ignore:end */
ExportConfigurationInstance = function ExportConfigurationInstance(version,
    payload, resourceType) {
  this._version = version;

  // Marshaled Properties
  this.enabled = payload.enabled; // jshint ignore:line
  this.webhookUrl = payload.webhook_url; // jshint ignore:line
  this.webhookMethod = payload.webhook_method; // jshint ignore:line
  this.resourceType = payload.resource_type; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {resourceType: resourceType || this.resourceType, };
};

Object.defineProperty(ExportConfigurationInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new ExportConfigurationContext(this._version, this._solution.resourceType);
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * fetch a ExportConfigurationInstance
 *
 * @function fetch
 * @memberof Twilio.Bulkexports.V1.ExportConfigurationInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ExportConfigurationInstance
 */
/* jshint ignore:end */
ExportConfigurationInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a ExportConfigurationInstance
 *
 * @function update
 * @memberof Twilio.Bulkexports.V1.ExportConfigurationInstance#
 *
 * @param {object} [opts] - Options for request
 * @param {boolean} [opts.enabled] - Whether files are automatically generated
 * @param {string} [opts.webhookUrl] - URL targeted at export
 * @param {string} [opts.webhookMethod] - Whether to GET or POST to the webhook url
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ExportConfigurationInstance
 */
/* jshint ignore:end */
ExportConfigurationInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Bulkexports.V1.ExportConfigurationInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
ExportConfigurationInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

ExportConfigurationInstance.prototype[util.inspect.custom] = function
    inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the ExportConfigurationContext
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Bulkexports.V1.ExportConfigurationContext
 *
 * @param {V1} version - Version of the resource
 * @param {string} resourceType - The type of communication – Messages, Calls
 */
/* jshint ignore:end */
ExportConfigurationContext = function ExportConfigurationContext(version,
    resourceType) {
  this._version = version;

  // Path Solution
  this._solution = {resourceType: resourceType, };
  this._uri = `/Exports/${resourceType}/Configuration`;
};

/* jshint ignore:start */
/**
 * fetch a ExportConfigurationInstance
 *
 * @function fetch
 * @memberof Twilio.Bulkexports.V1.ExportConfigurationContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ExportConfigurationInstance
 */
/* jshint ignore:end */
ExportConfigurationContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new ExportConfigurationInstance(
      this._version,
      payload,
      this._solution.resourceType
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * update a ExportConfigurationInstance
 *
 * @function update
 * @memberof Twilio.Bulkexports.V1.ExportConfigurationContext#
 *
 * @param {object} [opts] - Options for request
 * @param {boolean} [opts.enabled] - Whether files are automatically generated
 * @param {string} [opts.webhookUrl] - URL targeted at export
 * @param {string} [opts.webhookMethod] - Whether to GET or POST to the webhook url
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ExportConfigurationInstance
 */
/* jshint ignore:end */
ExportConfigurationContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'Enabled': serialize.bool(_.get(opts, 'enabled')),
    'WebhookUrl': _.get(opts, 'webhookUrl'),
    'WebhookMethod': _.get(opts, 'webhookMethod')
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new ExportConfigurationInstance(
      this._version,
      payload,
      this._solution.resourceType
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Bulkexports.V1.ExportConfigurationContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
ExportConfigurationContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

ExportConfigurationContext.prototype[util.inspect.custom] = function
    inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  ExportConfigurationList: ExportConfigurationList,
  ExportConfigurationPage: ExportConfigurationPage,
  ExportConfigurationInstance: ExportConfigurationInstance,
  ExportConfigurationContext: ExportConfigurationContext
};
