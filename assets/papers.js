'use strict';



;define('papers/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend({});
});
;define('papers/app', ['exports', 'papers/resolver', 'ember-load-initializers', 'papers/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('papers/components/month-list', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    bool: false,
    inter: 0,
    months: [{
      month: "january",
      name: "Январь"
    }, {
      month: "february",
      name: "Февраль"
    }, {
      month: "march",
      name: "Март"
    }, {
      month: "april",
      name: "Апрель"
    }, {
      month: "may",
      name: "Май"
    }, {
      month: "june",
      name: "Июнь"
    }, {
      month: "july",
      name: "Июль"
    }, {
      month: "august",
      name: "Август"
    }, {
      month: "september",
      name: "Сентябрь"
    }, {
      month: "october",
      name: "Октябрь"
    }, {
      month: "november",
      name: "Ноябрь"
    }, {
      month: "december",
      name: "Декабрь"
    }],
    actions: {
      countInter() {
        if (Ember.$('#edition option:selected').text() != "Выберите издание" && Ember.$('#year option:selected').text() != "Выберите год") {
          var monInt = 0;
          var montprice = Ember.$('#edition option:selected').attr('data-price');
          var price = 0;
          var count = 0;
          Ember.$('.mon').each(function () {
            if (Ember.$(this).prop('checked') == true) {
              monInt++;
            }
          });
          if (monInt == 12) {
            price = monInt * parseFloat(montprice) * 0.90;
            count = 10;
          } else if (monInt < 12 && monInt >= 6) {
            price = monInt * parseFloat(montprice) * 0.95;
            count = 5;
          } else {
            price = monInt * parseFloat(montprice);
          }
          Ember.$('#dother').text("Ваша цена за подписку составляет " + price + 'руб. (Скидка ' + count + '%)');
        }
      }
    }
  });
});
;define('papers/components/paper-list', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('papers/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('papers/helpers/app-version', ['exports', 'papers/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('papers/helpers/count', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.count = count;
  function count(params /*, hash*/) {

    return params;
  }

  exports.default = Ember.Helper.helper(count);
});
;define('papers/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('papers/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('papers/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'papers/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('papers/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('papers/initializers/ember-cli-mirage', ['exports', 'papers/config/environment', 'papers/mirage/config', 'ember-cli-mirage/get-rfc232-test-context', 'ember-cli-mirage/start-mirage'], function (exports, _environment, _config, _getRfc232TestContext, _startMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.startMirage = startMirage;
  exports.default = {
    name: 'ember-cli-mirage',
    initialize(application) {
      if (_config.default) {
        application.register('mirage:base-config', _config.default, { instantiate: false });
      }
      if (_config.testConfig) {
        application.register('mirage:test-config', _config.testConfig, { instantiate: false });
      }

      _environment.default['ember-cli-mirage'] = _environment.default['ember-cli-mirage'] || {};
      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }
  };
  function startMirage(env = _environment.default) {
    return (0, _startMirage.default)(null, { env, baseConfig: _config.default, testConfig: _config.testConfig });
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }
    if ((0, _getRfc232TestContext.default)()) {
      return false;
    }
    let userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    let defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    let usingInDev = env === 'development' && !addonConfig.usingProxy;
    let usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
;define('papers/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('papers/initializers/export-application-global', ['exports', 'papers/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define('papers/instance-initializers/ember-cli-mirage-autostart', ['exports', 'ember-cli-mirage/instance-initializers/ember-cli-mirage-autostart'], function (exports, _emberCliMirageAutostart) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberCliMirageAutostart.default;
    }
  });
});
;define('papers/instance-initializers/ember-data', ['exports', 'ember-data/initialize-store-service'], function (exports, _initializeStoreService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
});
;define('papers/mirage/config', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    this.namespace = '/api';

    this.get('/subscription', function () {
      return {
        data: [{
          type: 'paper',
          id: 1,
          attributes: {
            data_id: 1,
            value: 1,
            data_month: "1,3,4,5,6,11",
            name: 'Издательство Калан'
          }
        }, {
          type: 'paper',
          id: 2,
          attributes: {
            data_id: 2,
            value: 2,
            data_month: "",
            name: 'Уральский рабочий'
          }
        }, {
          type: 'paper',
          id: 3,
          attributes: {
            data_id: 3,
            value: 3,
            data_month: "6,7,12",
            name: 'Вечерняя газета'
          }
        }, {
          type: 'paper',
          id: 4,
          attributes: {
            data_id: 4,
            value: 4,
            data_month: "1,4,5",
            name: 'Утренняя газета'
          }
        }]
      };
    });
  };
});
;define("papers/mirage/scenarios/default", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () /* server */{

    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
    */

    // server.createList('post', 10);
  };
});
;define('papers/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.JSONAPISerializer.extend({});
});
;define('papers/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('papers/router', ['exports', 'papers/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('subscription');
  });

  exports.default = Router;
});
;define('papers/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    beforeModel() {
      this.replaceWith('subscription');
    }
  });
});
;define('papers/routes/subscription', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model() {
      return [{
        value: 1,
        data_id: 1,
        data_month: "1,3,4,5,6,11",
        name: 'Издательство Калан',
        price: 500
      }, {
        value: 2,
        data_id: 2,
        data_month: '',
        name: 'Уральский рабочий',
        price: 700
      }, {
        value: 3,
        data_id: 3,
        data_month: '6,7,12',
        name: 'Вечерняя газета',
        price: 900
      }, {
        value: 4,
        data_id: 4,
        data_month: '1,4,5',
        name: 'Утренняя газета',
        price: 150
      }];
    }
  });
});
;define('papers/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("papers/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3hoscI1p", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n    \"],[7,\"header\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"logo\"],[9],[0,\"\\n            \"],[7,\"img\"],[12,\"src\",[28,[[21,\"rootURL\"],\"assets/images/logo.png\"]]],[11,\"class\",\"logo-img\"],[9],[10],[0,\"\\n            \"],[7,\"label\"],[9],[0,\"Triangle\"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"hr\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "papers/templates/application.hbs" } });
});
;define("papers/templates/components/month-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Qjaj9QAv", "block": "{\"symbols\":[\"month\"],\"statements\":[[4,\"each\",[[23,[\"months\"]]],null,{\"statements\":[[7,\"div\"],[11,\"class\",\"input-field col s6 m4 l2\"],[9],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"\\n        \"],[7,\"label\"],[9],[0,\"\\n            \"],[7,\"input\"],[11,\"onclick\",\"check(); descheck();\"],[12,\"id\",[28,[[22,1,[\"month\"]]]]],[11,\"class\",\"filled-in mon\"],[11,\"type\",\"checkbox\"],[3,\"action\",[[22,0,[]],\"countInter\"],[[\"on\"],[\"change\"]]],[9],[10],[0,\"\\n            \"],[7,\"span\"],[9],[1,[22,1,[\"name\"]],false],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[7,\"div\"],[11,\"class\",\"input-field col s12 l4 offset-l8\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"switch\"],[9],[0,\"\\n        \"],[7,\"label\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"switch-label\"],[9],[0,\"Выбрать полугодие\"],[10],[0,\"\\n          \"],[7,\"input\"],[11,\"id\",\"mon6\"],[11,\"onclick\",\"mon6s()\"],[11,\"type\",\"checkbox\"],[3,\"action\",[[22,0,[]],\"countInter\"],[[\"on\"],[\"change\"]]],[9],[10],[0,\"\\n          \"],[7,\"span\"],[11,\"class\",\"lever\"],[9],[10],[0,\"\\n          Вкл\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"input-field col s12 l4 offset-l8\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"switch\"],[9],[0,\"\\n        \"],[7,\"label\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"switch-label\"],[9],[0,\"Выбрать все\"],[10],[0,\"\\n\\n          \"],[7,\"input\"],[11,\"id\",\"alls\"],[11,\"onclick\",\"alls6()\"],[11,\"type\",\"checkbox\"],[3,\"action\",[[22,0,[]],\"countInter\"],[[\"on\"],[\"change\"]]],[9],[10],[0,\"\\n          \"],[7,\"span\"],[11,\"class\",\"lever\"],[9],[10],[0,\"\\n          Вкл\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "papers/templates/components/month-list.hbs" } });
});
;define("papers/templates/components/paper-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "V0wuILuO", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "papers/templates/components/paper-list.hbs" } });
});
;define("papers/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7xs0gixb", "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "papers/templates/index.hbs" } });
});
;define("papers/templates/subscription", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OXASEuzy", "block": "{\"symbols\":[\"subscription\"],\"statements\":[[0,\"\\n\"],[7,\"form\"],[11,\"id\",\"form1\"],[11,\"runat\",\"server\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"header-help\"],[9],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col s12 m2 l4 xl6 triangle-img\"],[9],[0,\"\\n            \"],[7,\"img\"],[11,\"class\",\"triangle\"],[12,\"src\",[28,[[21,\"rootURL\"],\"assets/images/group_triangle.png\"]]],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"control-sm col s12 m10 l8 xl6\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col s11\"],[9],[0,\"\\n                \"],[7,\"h2\"],[11,\"class\",\"white-text\"],[9],[0,\"Печатные издания\"],[10],[0,\"\\n                \"],[7,\"p\"],[11,\"id\",\"dother\"],[11,\"class\",\"white-text\"],[9],[0,\"\\n                  Выберите издание, год и отметьте нужный месяц для просмотра цены подписки\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"input-field col s11\"],[9],[0,\"\\n\\n                \"],[7,\"select\"],[11,\"id\",\"edition\"],[11,\"style\",\"color: white;\"],[11,\"onchange\",\"check(); montselse ();\"],[9],[0,\"\\n                    \"],[7,\"option\"],[11,\"value\",\"none\"],[11,\"disabled\",\"\"],[11,\"selected\",\"\"],[9],[0,\"Выберите издание\"],[10],[0,\"\\n\"],[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[0,\"                      \"],[7,\"option\"],[12,\"value\",[28,[[22,1,[\"value\"]]]]],[12,\"data-id\",[28,[[22,1,[\"data_id\"]]]]],[12,\"data-price\",[28,[[22,1,[\"price\"]]]]],[12,\"data-month\",[28,[[22,1,[\"data_month\"]]]]],[9],[1,[22,1,[\"name\"]],false],[0,\" (\"],[1,[22,1,[\"price\"]],false],[0,\"руб.)\"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"                \"],[10],[0,\"\\n                \"],[7,\"label\"],[9],[0,\"Выбор печатного издания\"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"input-field col s11\"],[9],[0,\"\\n                \"],[7,\"select\"],[11,\"id\",\"year\"],[11,\"style\",\"color: white;\"],[11,\"onchange\",\"check(); montselse ();\"],[9],[0,\"\\n                    \"],[7,\"option\"],[11,\"value\",\"none\"],[11,\"disabled\",\"\"],[11,\"selected\",\"\"],[9],[0,\"Выберите год\"],[10],[0,\"\\n                    \"],[7,\"option\"],[11,\"value\",\"1\"],[9],[0,\"2016\"],[10],[0,\"\\n                    \"],[7,\"option\"],[11,\"value\",\"2\"],[9],[0,\"2017\"],[10],[0,\"\\n                    \"],[7,\"option\"],[11,\"value\",\"3\"],[9],[0,\"2018\"],[10],[0,\"\\n                    \"],[7,\"option\"],[11,\"value\",\"3\"],[9],[0,\"2019\"],[10],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"label\"],[9],[0,\"Выбор календарного года\"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[1,[21,\"month-list\"],false],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col s12 m10 offset-m1 l8 offset-l2 xl6 offset-xl3\"],[11,\"style\",\"margin-top: 60px;\"],[9],[0,\"\\n                \"],[7,\"button\"],[11,\"id\",\"button\"],[11,\"class\",\"btn waves-effect waves-light\"],[11,\"name\",\"action\"],[11,\"disabled\",\"\"],[11,\"type\",\"submit\"],[9],[0,\"Подписаться\\n                    \"],[7,\"i\"],[11,\"class\",\"material-icons right\"],[9],[0,\"send\"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[10],[0,\"\\n\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "papers/templates/subscription.hbs" } });
});
;define('papers/tests/mirage/mirage.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | mirage');

  QUnit.test('mirage/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/scenarios/default.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint\n\n');
  });
});
;

;define('papers/config/environment', [], function() {
  var prefix = 'papers';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("papers/app")["default"].create({"name":"papers","version":"0.0.0+aaffd32a"});
          }
        
//# sourceMappingURL=papers.map
