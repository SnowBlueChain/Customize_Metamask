LavaPack.loadBundle([
["F:\\metamask-extension\\app\\scripts\\account-import-strategies\\index.js", {"../../../shared/modules/hexstring-utils":"F:\\metamask-extension\\shared\\modules\\hexstring-utils.ts","../lib/util":"F:\\metamask-extension\\app\\scripts\\lib\\util.ts","@ethersproject/hdnode":"F:\\metamask-extension\\node_modules\\@ethersproject\\hdnode\\lib\\index.js","ethereumjs-util":"F:\\metamask-extension\\node_modules\\ethereumjs-util\\dist.browser\\index.js","ethereumjs-wallet":"F:\\metamask-extension\\node_modules\\ethereumjs-wallet\\index.js","ethereumjs-wallet/thirdparty":"F:\\metamask-extension\\node_modules\\ethereumjs-wallet\\thirdparty.js","loglevel":"F:\\metamask-extension\\node_modules\\loglevel\\lib\\loglevel.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Caccount-import-strategies%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hdnode = require("@ethersproject/hdnode");
var _ethereumjsUtil = require("ethereumjs-util");
var _ethereumjsWallet = _interopRequireDefault(require("ethereumjs-wallet"));
var _thirdparty = _interopRequireDefault(require("ethereumjs-wallet/thirdparty"));
var _loglevel = _interopRequireDefault(require("loglevel"));
var _hexstringUtils = require("../../../shared/modules/hexstring-utils");
var _util = require("../lib/util");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const accountImporter = {
  async importAccount(strategy, args) {
    const importer = this.strategies[strategy];
    const privateKeyHex = importer(...args);
    return privateKeyHex;
  },
  strategies: {
    'Private Key': privateKey => {
      if (!privateKey) {
        throw new Error('Cannot import an empty key.'); // It should never get here, because this should be stopped in the UI
      }

      // Check if the user has entered an SRP by mistake instead of a private key
      if ((0, _hdnode.isValidMnemonic)(privateKey.trim())) {
        throw new Error(`t('importAccountErrorIsSRP')`);
      }
      const trimmedPrivateKey = privateKey.replace(/\s+/gu, ''); // Remove all whitespace

      const prefixedPrivateKey = (0, _util.addHexPrefix)(trimmedPrivateKey);
      let buffer;
      try {
        buffer = (0, _ethereumjsUtil.toBuffer)(prefixedPrivateKey);
      } catch (e) {
        throw new Error(`t('importAccountErrorNotHexadecimal')`);
      }
      try {
        if (!(0, _ethereumjsUtil.isValidPrivate)(buffer) || (0, _ethereumjsUtil.getBinarySize)(prefixedPrivateKey) !== 64 + '0x'.length // Fixes issue #17719 -- isValidPrivate() will let a key of 63 hex digits through without complaining, this line ensures 64 hex digits + '0x' = 66 digits
        ) {
          throw new Error(`t('importAccountErrorNotAValidPrivateKey')`);
        }
      } catch (e) {
        throw new Error(`t('importAccountErrorNotAValidPrivateKey')`);
      }
      const strippedPrivateKey = (0, _hexstringUtils.stripHexPrefix)(prefixedPrivateKey);
      return strippedPrivateKey;
    },
    'JSON File': (input, password) => {
      let wallet;
      try {
        wallet = _thirdparty.default.fromEtherWallet(input, password);
      } catch (e) {
        _loglevel.default.debug('Attempt to import as EtherWallet format failed, trying V3');
        wallet = _ethereumjsWallet.default.fromV3(input, password, true);
      }
      return walletToPrivateKey(wallet);
    }
  }
};
function walletToPrivateKey(wallet) {
  const privateKeyBuffer = wallet.getPrivateKey();
  return (0, _ethereumjsUtil.bufferToHex)(privateKeyBuffer);
}
var _default = accountImporter;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\account-import-strategies\\index.js",}],
["F:\\metamask-extension\\app\\scripts\\constants\\contracts.ts", {}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Cconstants%5Ccontracts.ts
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SINGLE_CALL_BALANCES_ADDRESS_SEPOLIA = exports.SINGLE_CALL_BALANCES_ADDRESS_POLYGON = exports.SINGLE_CALL_BALANCES_ADDRESS_OPTIMISM = exports.SINGLE_CALL_BALANCES_ADDRESS_GOERLI = exports.SINGLE_CALL_BALANCES_ADDRESS_FANTOM = exports.SINGLE_CALL_BALANCES_ADDRESS_BSC = exports.SINGLE_CALL_BALANCES_ADDRESS_AVALANCHE = exports.SINGLE_CALL_BALANCES_ADDRESS_ARBITRUM = exports.SINGLE_CALL_BALANCES_ADDRESS = void 0;
const SINGLE_CALL_BALANCES_ADDRESS = '0xb1f8e55c7f64d203c1400b9d8555d050f94adf39';
exports.SINGLE_CALL_BALANCES_ADDRESS = SINGLE_CALL_BALANCES_ADDRESS;
const SINGLE_CALL_BALANCES_ADDRESS_GOERLI = '0x9788C4E93f9002a7ad8e72633b11E8d1ecd51f9b';
// TODO(SEPOLIA) There is currently no balance call address for Sepolia
exports.SINGLE_CALL_BALANCES_ADDRESS_GOERLI = SINGLE_CALL_BALANCES_ADDRESS_GOERLI;
const SINGLE_CALL_BALANCES_ADDRESS_SEPOLIA = '';
exports.SINGLE_CALL_BALANCES_ADDRESS_SEPOLIA = SINGLE_CALL_BALANCES_ADDRESS_SEPOLIA;
const SINGLE_CALL_BALANCES_ADDRESS_BSC = '0x2352c63A83f9Fd126af8676146721Fa00924d7e4';
exports.SINGLE_CALL_BALANCES_ADDRESS_BSC = SINGLE_CALL_BALANCES_ADDRESS_BSC;
const SINGLE_CALL_BALANCES_ADDRESS_OPTIMISM = '0xB1c568e9C3E6bdaf755A60c7418C269eb11524FC';
exports.SINGLE_CALL_BALANCES_ADDRESS_OPTIMISM = SINGLE_CALL_BALANCES_ADDRESS_OPTIMISM;
const SINGLE_CALL_BALANCES_ADDRESS_POLYGON = '0x2352c63A83f9Fd126af8676146721Fa00924d7e4';
exports.SINGLE_CALL_BALANCES_ADDRESS_POLYGON = SINGLE_CALL_BALANCES_ADDRESS_POLYGON;
const SINGLE_CALL_BALANCES_ADDRESS_AVALANCHE = '0xD023D153a0DFa485130ECFdE2FAA7e612EF94818';
exports.SINGLE_CALL_BALANCES_ADDRESS_AVALANCHE = SINGLE_CALL_BALANCES_ADDRESS_AVALANCHE;
const SINGLE_CALL_BALANCES_ADDRESS_FANTOM = '0x07f697424ABe762bB808c109860c04eA488ff92B';
exports.SINGLE_CALL_BALANCES_ADDRESS_FANTOM = SINGLE_CALL_BALANCES_ADDRESS_FANTOM;
const SINGLE_CALL_BALANCES_ADDRESS_ARBITRUM = '0x151E24A486D7258dd7C33Fb67E4bB01919B7B32c';
exports.SINGLE_CALL_BALANCES_ADDRESS_ARBITRUM = SINGLE_CALL_BALANCES_ADDRESS_ARBITRUM;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\constants\\contracts.ts",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\alert.js", {"../../../shared/constants/alerts":"F:\\metamask-extension\\shared\\constants\\alerts.ts","@metamask/obs-store":"F:\\metamask-extension\\node_modules\\@metamask\\obs-store\\dist\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Calert.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _obsStore = require("@metamask/obs-store");
var _alerts = require("../../../shared/constants/alerts");
/**
 * @typedef {object} AlertControllerInitState
 * @property {object} alertEnabledness - A map of alerts IDs to booleans, where
 * `true` indicates that the alert is enabled and shown, and `false` the opposite.
 * @property {object} unconnectedAccountAlertShownOrigins - A map of origin
 * strings to booleans indicating whether the "switch to connected" alert has
 * been shown (`true`) or otherwise (`false`).
 */
/**
 * @typedef {object} AlertControllerOptions
 * @property {AlertControllerInitState} initState - The initial controller state
 */
const defaultState = {
  alertEnabledness: _alerts.TOGGLEABLE_ALERT_TYPES.reduce((alertEnabledness, alertType) => {
    alertEnabledness[alertType] = true;
    return alertEnabledness;
  }, {}),
  unconnectedAccountAlertShownOrigins: {},
  web3ShimUsageOrigins: {}
};

/**
 * Controller responsible for maintaining alert-related state.
 */
class AlertController {
  /**
   * @param {AlertControllerOptions} [opts] - Controller configuration parameters
   */
  constructor(opts = {}) {
    const {
      initState = {},
      preferencesStore
    } = opts;
    const state = {
      ...defaultState,
      alertEnabledness: {
        ...defaultState.alertEnabledness,
        ...initState.alertEnabledness
      }
    };
    this.store = new _obsStore.ObservableStore(state);
    this.selectedAddress = preferencesStore.getState().selectedAddress;
    preferencesStore.subscribe(({
      selectedAddress
    }) => {
      const currentState = this.store.getState();
      if (currentState.unconnectedAccountAlertShownOrigins && this.selectedAddress !== selectedAddress) {
        this.selectedAddress = selectedAddress;
        this.store.updateState({
          unconnectedAccountAlertShownOrigins: {}
        });
      }
    });
  }
  setAlertEnabledness(alertId, enabledness) {
    let {
      alertEnabledness
    } = this.store.getState();
    alertEnabledness = {
      ...alertEnabledness
    };
    alertEnabledness[alertId] = enabledness;
    this.store.updateState({
      alertEnabledness
    });
  }

  /**
   * Sets the "switch to connected" alert as shown for the given origin
   *
   * @param {string} origin - The origin the alert has been shown for
   */
  setUnconnectedAccountAlertShown(origin) {
    let {
      unconnectedAccountAlertShownOrigins
    } = this.store.getState();
    unconnectedAccountAlertShownOrigins = {
      ...unconnectedAccountAlertShownOrigins
    };
    unconnectedAccountAlertShownOrigins[origin] = true;
    this.store.updateState({
      unconnectedAccountAlertShownOrigins
    });
  }

  /**
   * Gets the web3 shim usage state for the given origin.
   *
   * @param {string} origin - The origin to get the web3 shim usage state for.
   * @returns {undefined | 1 | 2} The web3 shim usage state for the given
   * origin, or undefined.
   */
  getWeb3ShimUsageState(origin) {
    return this.store.getState().web3ShimUsageOrigins[origin];
  }

  /**
   * Sets the web3 shim usage state for the given origin to RECORDED.
   *
   * @param {string} origin - The origin the that used the web3 shim.
   */
  setWeb3ShimUsageRecorded(origin) {
    this._setWeb3ShimUsageState(origin, _alerts.Web3ShimUsageAlertStates.recorded);
  }

  /**
   * Sets the web3 shim usage state for the given origin to DISMISSED.
   *
   * @param {string} origin - The origin that the web3 shim notification was
   * dismissed for.
   */
  setWeb3ShimUsageAlertDismissed(origin) {
    this._setWeb3ShimUsageState(origin, _alerts.Web3ShimUsageAlertStates.dismissed);
  }

  /**
   * @private
   * @param {string} origin - The origin to set the state for.
   * @param {number} value - The state value to set.
   */
  _setWeb3ShimUsageState(origin, value) {
    let {
      web3ShimUsageOrigins
    } = this.store.getState();
    web3ShimUsageOrigins = {
      ...web3ShimUsageOrigins
    };
    web3ShimUsageOrigins[origin] = value;
    this.store.updateState({
      web3ShimUsageOrigins
    });
  }
}
exports.default = AlertController;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\alert.js",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\app-state.js", {"../../../shared/constants/alarms":"F:\\metamask-extension\\shared\\constants\\alarms.js","../../../shared/constants/app":"F:\\metamask-extension\\shared\\constants\\app.ts","../../../shared/constants/preferences":"F:\\metamask-extension\\shared\\constants\\preferences.ts","../../../shared/constants/time":"F:\\metamask-extension\\shared\\constants\\time.ts","../../../shared/modules/mv3.utils":"F:\\metamask-extension\\shared\\modules\\mv3.utils.js","../../../ui/helpers/utils/build-types":"F:\\metamask-extension\\ui\\helpers\\utils\\build-types.js","../metamask-controller":"F:\\metamask-extension\\app\\scripts\\metamask-controller.js","@metamask/controller-utils":"F:\\metamask-extension\\node_modules\\@metamask\\controller-utils\\dist\\index.js","@metamask/obs-store":"F:\\metamask-extension\\node_modules\\@metamask\\obs-store\\dist\\index.js","events":"F:\\metamask-extension\\node_modules\\browserify\\node_modules\\events\\events.js","loglevel":"F:\\metamask-extension\\node_modules\\loglevel\\lib\\loglevel.js","uuid":"F:\\metamask-extension\\node_modules\\uuid\\dist\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Capp-state.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _events = _interopRequireDefault(require("events"));
var _obsStore = require("@metamask/obs-store");
var _uuid = require("uuid");
var _loglevel = _interopRequireDefault(require("loglevel"));
var _controllerUtils = require("@metamask/controller-utils");
var _metamaskController = require("../metamask-controller");
var _time = require("../../../shared/constants/time");
var _alarms = require("../../../shared/constants/alarms");
var _mv = require("../../../shared/modules/mv3.utils");
var _buildTypes = require("../../../ui/helpers/utils/build-types");
var _app = require("../../../shared/constants/app");
var _preferences = require("../../../shared/constants/preferences");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class AppStateController extends _events.default {
  /**
   * @param {object} opts
   */
  constructor(opts = {}) {
    const {
      addUnlockListener,
      isUnlocked,
      initState,
      onInactiveTimeout,
      preferencesStore,
      qrHardwareStore,
      messenger
    } = opts;
    super();
    this.onInactiveTimeout = onInactiveTimeout || (() => undefined);
    this.store = new _obsStore.ObservableStore({
      timeoutMinutes: _preferences.DEFAULT_AUTO_LOCK_TIME_LIMIT,
      connectedStatusPopoverHasBeenShown: true,
      defaultHomeActiveTabName: null,
      browserEnvironment: {},
      popupGasPollTokens: [],
      notificationGasPollTokens: [],
      fullScreenGasPollTokens: [],
      recoveryPhraseReminderHasBeenShown: false,
      recoveryPhraseReminderLastShown: new Date().getTime(),
      outdatedBrowserWarningLastShown: new Date().getTime(),
      nftsDetectionNoticeDismissed: false,
      showTestnetMessageInDropdown: true,
      showBetaHeader: (0, _buildTypes.isBeta)(),
      showProductTour: true,
      trezorModel: null,
      currentPopupId: undefined,
      ...initState,
      qrHardware: {},
      nftsDropdownState: {},
      usedNetworks: {
        '0x1': true,
        '0x5': true,
        '0x539': true
      },
      serviceWorkerLastActiveTime: 0
    });
    this.timer = null;
    this.isUnlocked = isUnlocked;
    this.waitingForUnlock = [];
    addUnlockListener(this.handleUnlock.bind(this));
    preferencesStore.subscribe(({
      preferences
    }) => {
      const currentState = this.store.getState();
      if (currentState.timeoutMinutes !== preferences.autoLockTimeLimit) {
        this._setInactiveTimeout(preferences.autoLockTimeLimit);
      }
    });
    qrHardwareStore.subscribe(state => {
      this.store.updateState({
        qrHardware: state
      });
    });
    const {
      preferences
    } = preferencesStore.getState();
    this._setInactiveTimeout(preferences.autoLockTimeLimit);
    this.messagingSystem = messenger;
    this._approvalRequestId = null;
  }

  /**
   * Get a Promise that resolves when the extension is unlocked.
   * This Promise will never reject.
   *
   * @param {boolean} shouldShowUnlockRequest - Whether the extension notification
   * popup should be opened.
   * @returns {Promise<void>} A promise that resolves when the extension is
   * unlocked, or immediately if the extension is already unlocked.
   */
  getUnlockPromise(shouldShowUnlockRequest) {
    return new Promise(resolve => {
      if (this.isUnlocked()) {
        resolve();
      } else {
        this.waitForUnlock(resolve, shouldShowUnlockRequest);
      }
    });
  }

  /**
   * Adds a Promise's resolve function to the waitingForUnlock queue.
   * Also opens the extension popup if specified.
   *
   * @param {Promise.resolve} resolve - A Promise's resolve function that will
   * be called when the extension is unlocked.
   * @param {boolean} shouldShowUnlockRequest - Whether the extension notification
   * popup should be opened.
   */
  waitForUnlock(resolve, shouldShowUnlockRequest) {
    this.waitingForUnlock.push({
      resolve
    });
    this.emit(_metamaskController.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE);
    if (shouldShowUnlockRequest) {
      this._requestApproval();
    }
  }

  /**
   * Drains the waitingForUnlock queue, resolving all the related Promises.
   */
  handleUnlock() {
    if (this.waitingForUnlock.length > 0) {
      while (this.waitingForUnlock.length > 0) {
        this.waitingForUnlock.shift().resolve();
      }
      this.emit(_metamaskController.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE);
    }
    this._acceptApproval();
  }

  /**
   * Sets the default home tab
   *
   * @param {string} [defaultHomeActiveTabName] - the tab name
   */
  setDefaultHomeActiveTabName(defaultHomeActiveTabName) {
    this.store.updateState({
      defaultHomeActiveTabName
    });
  }

  /**
   * Record that the user has seen the connected status info popover
   */
  setConnectedStatusPopoverHasBeenShown() {
    this.store.updateState({
      connectedStatusPopoverHasBeenShown: true
    });
  }

  /**
   * Record that the user has been shown the recovery phrase reminder.
   */
  setRecoveryPhraseReminderHasBeenShown() {
    this.store.updateState({
      recoveryPhraseReminderHasBeenShown: true
    });
  }

  /**
   * Record the timestamp of the last time the user has seen the recovery phrase reminder
   *
   * @param {number} lastShown - timestamp when user was last shown the reminder.
   */
  setRecoveryPhraseReminderLastShown(lastShown) {
    this.store.updateState({
      recoveryPhraseReminderLastShown: lastShown
    });
  }

  /**
   * Record the timestamp of the last time the user has acceoted the terms of use
   *
   * @param {number} lastAgreed - timestamp when user last accepted the terms of use
   */
  setTermsOfUseLastAgreed(lastAgreed) {
    this.store.updateState({
      termsOfUseLastAgreed: lastAgreed
    });
  }

  /**
   * Record the timestamp of the last time the user has seen the outdated browser warning
   *
   * @param {number} lastShown - Timestamp (in milliseconds) of when the user was last shown the warning.
   */
  setOutdatedBrowserWarningLastShown(lastShown) {
    this.store.updateState({
      outdatedBrowserWarningLastShown: lastShown
    });
  }

  /**
   * Sets the last active time to the current time.
   */
  setLastActiveTime() {
    this._resetTimer();
  }

  /**
   * Sets the inactive timeout for the app
   *
   * @private
   * @param {number} timeoutMinutes - The inactive timeout in minutes.
   */
  _setInactiveTimeout(timeoutMinutes) {
    this.store.updateState({
      timeoutMinutes
    });
    this._resetTimer();
  }

  /**
   * Resets the internal inactive timer
   *
   * If the {@code timeoutMinutes} state is falsy (i.e., zero) then a new
   * timer will not be created.
   *
   * @private
   */
  /* eslint-disable no-undef */
  _resetTimer() {
    const {
      timeoutMinutes
    } = this.store.getState();
    if (this.timer) {
      clearTimeout(this.timer);
    } else if (_mv.isManifestV3) {
      chrome.alarms.clear(_alarms.AUTO_LOCK_TIMEOUT_ALARM);
    }
    if (!timeoutMinutes) {
      return;
    }
    if (_mv.isManifestV3) {
      chrome.alarms.create(_alarms.AUTO_LOCK_TIMEOUT_ALARM, {
        delayInMinutes: timeoutMinutes,
        periodInMinutes: timeoutMinutes
      });
      chrome.alarms.onAlarm.addListener(alarmInfo => {
        if (alarmInfo.name === _alarms.AUTO_LOCK_TIMEOUT_ALARM) {
          this.onInactiveTimeout();
          chrome.alarms.clear(_alarms.AUTO_LOCK_TIMEOUT_ALARM);
        }
      });
    } else {
      this.timer = setTimeout(() => this.onInactiveTimeout(), timeoutMinutes * _time.MINUTE);
    }
  }

  /**
   * Sets the current browser and OS environment
   *
   * @param os
   * @param browser
   */
  setBrowserEnvironment(os, browser) {
    this.store.updateState({
      browserEnvironment: {
        os,
        browser
      }
    });
  }

  /**
   * Adds a pollingToken for a given environmentType
   *
   * @param pollingToken
   * @param pollingTokenType
   */
  addPollingToken(pollingToken, pollingTokenType) {
    if (pollingTokenType !== _app.POLLING_TOKEN_ENVIRONMENT_TYPES[_app.ENVIRONMENT_TYPE_BACKGROUND]) {
      const prevState = this.store.getState()[pollingTokenType];
      this.store.updateState({
        [pollingTokenType]: [...prevState, pollingToken]
      });
    }
  }

  /**
   * removes a pollingToken for a given environmentType
   *
   * @param pollingToken
   * @param pollingTokenType
   */
  removePollingToken(pollingToken, pollingTokenType) {
    if (pollingTokenType !== _app.POLLING_TOKEN_ENVIRONMENT_TYPES[_app.ENVIRONMENT_TYPE_BACKGROUND]) {
      const prevState = this.store.getState()[pollingTokenType];
      this.store.updateState({
        [pollingTokenType]: prevState.filter(token => token !== pollingToken)
      });
    }
  }

  /**
   * clears all pollingTokens
   */
  clearPollingTokens() {
    this.store.updateState({
      popupGasPollTokens: [],
      notificationGasPollTokens: [],
      fullScreenGasPollTokens: []
    });
  }

  /**
   * Sets whether the testnet dismissal link should be shown in the network dropdown
   *
   * @param showTestnetMessageInDropdown
   */
  setShowTestnetMessageInDropdown(showTestnetMessageInDropdown) {
    this.store.updateState({
      showTestnetMessageInDropdown
    });
  }

  /**
   * Sets whether the beta notification heading on the home page
   *
   * @param showBetaHeader
   */
  setShowBetaHeader(showBetaHeader) {
    this.store.updateState({
      showBetaHeader
    });
  }

  /**
   * Sets whether the product tour should be shown
   *
   * @param showProductTour
   */
  setShowProductTour(showProductTour) {
    this.store.updateState({
      showProductTour
    });
  }

  /**
   * Sets a property indicating the model of the user's Trezor hardware wallet
   *
   * @param trezorModel - The Trezor model.
   */
  setTrezorModel(trezorModel) {
    this.store.updateState({
      trezorModel
    });
  }

  /**
   * A setter for the `nftsDropdownState` property
   *
   * @param nftsDropdownState
   */
  updateNftDropDownState(nftsDropdownState) {
    this.store.updateState({
      nftsDropdownState
    });
  }

  /**
   * Updates the array of the first time used networks
   *
   * @param chainId
   * @returns {void}
   */
  setFirstTimeUsedNetwork(chainId) {
    const currentState = this.store.getState();
    const {
      usedNetworks
    } = currentState;
    usedNetworks[chainId] = true;
    this.store.updateState({
      usedNetworks
    });
  }

  /**
   * A setter for the currentPopupId which indicates the id of popup window that's currently active
   *
   * @param currentPopupId
   */
  setCurrentPopupId(currentPopupId) {
    this.store.updateState({
      currentPopupId
    });
  }

  /**
   * A getter to retrieve currentPopupId saved in the appState
   */
  getCurrentPopupId() {
    return this.store.getState().currentPopupId;
  }
  setServiceWorkerLastActiveTime(serviceWorkerLastActiveTime) {
    this.store.updateState({
      serviceWorkerLastActiveTime
    });
  }
  _requestApproval() {
    this._approvalRequestId = (0, _uuid.v4)();
    this.messagingSystem.call('ApprovalController:addRequest', {
      id: this._approvalRequestId,
      origin: _app.ORIGIN_METAMASK,
      type: _controllerUtils.ApprovalType.Unlock
    }, true).catch(() => {
      // Intentionally ignored as promise not currently used
    });
  }
  _acceptApproval() {
    if (!this._approvalRequestId) {
      _loglevel.default.error('Attempted to accept missing unlock approval request');
      return;
    }
    try {
      this.messagingSystem.call('ApprovalController:acceptRequest', this._approvalRequestId);
    } catch (error) {
      _loglevel.default.error('Failed to accept transaction approval request', error);
    }
    this._approvalRequestId = null;
  }
}
exports.default = AppStateController;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\app-state.js",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\backup.js", {"../../../shared/modules/string-utils":"F:\\metamask-extension\\shared\\modules\\string-utils.ts"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Cbackup.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _stringUtils = require("../../../shared/modules/string-utils");
class BackupController {
  constructor(opts = {}) {
    const {
      preferencesController,
      addressBookController,
      networkController,
      trackMetaMetricsEvent
    } = opts;
    this.preferencesController = preferencesController;
    this.addressBookController = addressBookController;
    this.networkController = networkController;
    this._trackMetaMetricsEvent = trackMetaMetricsEvent;
  }
  async restoreUserData(jsonString) {
    const existingPreferences = this.preferencesController.store.getState();
    const {
      preferences,
      addressBook,
      network
    } = JSON.parse(jsonString);
    if (preferences) {
      preferences.identities = existingPreferences.identities;
      preferences.lostIdentities = existingPreferences.lostIdentities;
      preferences.selectedAddress = existingPreferences.selectedAddress;
      this.preferencesController.store.updateState(preferences);
    }
    if (addressBook) {
      this.addressBookController.update(addressBook, true);
    }
    if (network) {
      this.networkController.loadBackup(network);
    }
    if (preferences || addressBook || network) {
      this._trackMetaMetricsEvent({
        event: 'User Data Imported',
        category: 'Backup'
      });
    }
  }
  async backupUserData() {
    const userData = {
      preferences: {
        ...this.preferencesController.store.getState()
      },
      addressBook: {
        ...this.addressBookController.state
      },
      network: {
        networkConfigurations: this.networkController.state.networkConfigurations
      }
    };

    /**
     * We can remove these properties since we will won't be restoring identities from backup
     */
    delete userData.preferences.identities;
    delete userData.preferences.lostIdentities;
    delete userData.preferences.selectedAddress;
    const result = JSON.stringify(userData);
    const date = new Date();
    const prefixZero = num => (0, _stringUtils.prependZero)(num, 2);

    /*
     * userData.YYYY_MM_DD_HH_mm_SS e.g userData.2022_01_13_13_45_56
     * */
    const userDataFileName = `MetaMaskUserData.${date.getFullYear()}_${prefixZero(date.getMonth() + 1)}_${prefixZero(date.getDay())}_${prefixZero(date.getHours())}_${prefixZero(date.getMinutes())}_${prefixZero(date.getDay())}.json`;
    return {
      fileName: userDataFileName,
      data: result
    };
  }
}
exports.default = BackupController;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\backup.js",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\cached-balances.js", {"@metamask/obs-store":"F:\\metamask-extension\\node_modules\\@metamask\\obs-store\\dist\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Ccached-balances.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _obsStore = require("@metamask/obs-store");
/**
 * @typedef {object} CachedBalancesOptions
 * @property {object} accountTracker An {@code AccountTracker} reference
 * @property {Function} getCurrentChainId A function to get the current chain id
 * @property {object} initState The initial controller state
 */
/**
 * Background controller responsible for maintaining
 * a cache of account balances in local storage
 */
class CachedBalancesController {
  /**
   * Creates a new controller instance
   *
   * @param {CachedBalancesOptions} [opts] - Controller configuration parameters
   */
  constructor(opts = {}) {
    const {
      accountTracker,
      getCurrentChainId
    } = opts;
    this.accountTracker = accountTracker;
    this.getCurrentChainId = getCurrentChainId;
    const initState = {
      cachedBalances: {},
      ...opts.initState
    };
    this.store = new _obsStore.ObservableStore(initState);
    this._registerUpdates();
  }

  /**
   * Updates the cachedBalances property for the current chain. Cached balances will be updated to those in the passed accounts
   * if balances in the passed accounts are truthy.
   *
   * @param {object} obj - The the recently updated accounts object for the current chain
   * @param obj.accounts
   * @returns {Promise<void>}
   */
  async updateCachedBalances({
    accounts
  }) {
    const chainId = this.getCurrentChainId();
    const balancesToCache = await this._generateBalancesToCache(accounts, chainId);
    this.store.updateState({
      cachedBalances: balancesToCache
    });
  }
  _generateBalancesToCache(newAccounts, chainId) {
    const {
      cachedBalances
    } = this.store.getState();
    const currentChainBalancesToCache = {
      ...cachedBalances[chainId]
    };
    Object.keys(newAccounts).forEach(accountID => {
      const account = newAccounts[accountID];
      if (account.balance) {
        currentChainBalancesToCache[accountID] = account.balance;
      }
    });
    const balancesToCache = {
      ...cachedBalances,
      [chainId]: currentChainBalancesToCache
    };
    return balancesToCache;
  }

  /**
   * Removes cachedBalances
   */

  clearCachedBalances() {
    this.store.updateState({
      cachedBalances: {}
    });
  }

  /**
   * Sets up listeners and subscriptions which should trigger an update of cached balances. These updates will
   * happen when the current account changes. Which happens on block updates, as well as on network and account
   * selections.
   *
   * @private
   */
  _registerUpdates() {
    const update = this.updateCachedBalances.bind(this);
    this.accountTracker.store.subscribe(update);
  }
}
exports.default = CachedBalancesController;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\cached-balances.js",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\decrypt-message.ts", {"../../../shared/constants/metametrics":"F:\\metamask-extension\\shared\\constants\\metametrics.ts","../../../shared/modules/hexstring-utils":"F:\\metamask-extension\\shared\\modules\\hexstring-utils.ts","@metamask/base-controller":"F:\\metamask-extension\\node_modules\\@metamask\\base-controller\\dist\\index.js","@metamask/controller-utils":"F:\\metamask-extension\\node_modules\\@metamask\\controller-utils\\dist\\index.js","@metamask/message-manager":"F:\\metamask-extension\\node_modules\\@metamask\\message-manager\\dist\\index.js","buffer":"F:\\metamask-extension\\node_modules\\browserify\\node_modules\\buffer\\index.js","events":"F:\\metamask-extension\\node_modules\\browserify\\node_modules\\events\\events.js","loglevel":"F:\\metamask-extension\\node_modules\\loglevel\\lib\\loglevel.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Cdecrypt-message.ts
      return function (require, module, exports) {
(function (Buffer){(function (){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultState = exports.default = void 0;
var _events = _interopRequireDefault(require("events"));
var _loglevel = _interopRequireDefault(require("loglevel"));
var _messageManager = require("@metamask/message-manager");
var _baseController = require("@metamask/base-controller");
var _controllerUtils = require("@metamask/controller-utils");
var _metametrics = require("../../../shared/constants/metametrics");
var _hexstringUtils = require("../../../shared/modules/hexstring-utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const controllerName = 'DecryptMessageController';
const stateMetadata = {
  unapprovedDecryptMsgs: {
    persist: false,
    anonymous: false
  },
  unapprovedDecryptMsgCount: {
    persist: false,
    anonymous: false
  }
};
const getDefaultState = () => ({
  unapprovedDecryptMsgs: {},
  unapprovedDecryptMsgCount: 0
});
exports.getDefaultState = getDefaultState;
/**
 * Controller for decrypt signing requests requiring user approval.
 */
class DecryptMessageController extends _baseController.BaseControllerV2 {
  /**
   * Construct a DecryptMessage controller.
   *
   * @param options - The controller options.
   * @param options.getState - Callback to retrieve all user state.
   * @param options.keyringController - An instance of a keyring controller used to decrypt message
   * @param options.messenger - A reference to the messaging system.
   * @param options.metricsEvent - A function for emitting a metric event.
   */
  constructor({
    getState,
    keyringController,
    metricsEvent,
    messenger
  }) {
    super({
      metadata: stateMetadata,
      messenger,
      name: controllerName,
      state: getDefaultState()
    });
    _defineProperty(this, "hub", void 0);
    _defineProperty(this, "_getState", void 0);
    _defineProperty(this, "_keyringController", void 0);
    _defineProperty(this, "_metricsEvent", void 0);
    _defineProperty(this, "_decryptMessageManager", void 0);
    this._getState = getState;
    this._keyringController = keyringController;
    this._metricsEvent = metricsEvent;
    this.hub = new _events.default();
    this._decryptMessageManager = new _messageManager.DecryptMessageManager(undefined, undefined, undefined, ['decrypted']);
    this._decryptMessageManager.hub.on('updateBadge', () => {
      this.hub.emit('updateBadge');
    });
    this._decryptMessageManager.hub.on('unapprovedMessage', messageParams => {
      this._requestApproval(messageParams);
    });
    this._subscribeToMessageState(this._decryptMessageManager, (state, newMessages, messageCount) => {
      state.unapprovedDecryptMsgs = newMessages;
      state.unapprovedDecryptMsgCount = messageCount;
    });
  }

  /**
   * A getter for the number of 'unapproved' Messages in the DecryptMessageManager.
   *
   * @returns The number of 'unapproved' Messages in the DecryptMessageManager.
   */
  get unapprovedDecryptMsgCount() {
    return this._decryptMessageManager.getUnapprovedMessagesCount();
  }

  /**
   * Reset the controller state to the initial state.
   */
  resetState() {
    this.update(() => getDefaultState());
  }

  /**
   * Clears all unapproved messages from memory.
   */
  clearUnapproved() {
    this._decryptMessageManager.update({
      unapprovedMessages: {},
      unapprovedMessagesCount: 0
    });
  }

  /**
   * Called when a dapp uses the eth_decrypt method
   *
   * @param messageParams - The params passed to eth_decrypt.
   * @param req - The original request, containing the origin.
   * @returns Promise resolving to the raw data of the signature request.
   */
  async newRequestDecryptMessage(messageParams, req) {
    return this._decryptMessageManager.addUnapprovedMessageAsync(messageParams, req);
  }

  /**
   * Signifies a user's approval to decrypt a message in queue.
   * Triggers decrypt, and the callback function from newUnsignedDecryptMessage.
   *
   * @param messageParams - The params of the message to decrypt & return to the Dapp.
   * @returns A full state update.
   */
  async decryptMessage(messageParams) {
    const messageId = messageParams.metamaskId;
    try {
      const cleanMessageParams = await this._decryptMessageManager.approveMessage(messageParams);
      cleanMessageParams.data = this._parseMessageData(cleanMessageParams.data);
      const rawMessage = await this._keyringController.decryptMessage(cleanMessageParams);
      this._decryptMessageManager.setMessageStatusAndResult(messageId, rawMessage, 'decrypted');
      this._acceptApproval(messageId);
    } catch (error) {
      _loglevel.default.info('MetaMaskController - eth_decrypt failed.', error);
      this._cancelAbstractMessage(this._decryptMessageManager, messageId);
      throw error;
    }
    return this._getState();
  }

  /**
   * Only decrypt message and don't touch transaction state
   *
   * @param messageParams - The params of the message to decrypt.
   * @returns A full state update.
   */
  async decryptMessageInline(messageParams) {
    const messageId = messageParams.metamaskId;
    messageParams.data = this._parseMessageData(messageParams.data);
    const rawMessage = await this._keyringController.decryptMessage(messageParams);
    this._decryptMessageManager.setResult(messageId, rawMessage);
    return this._getState();
  }

  /**
   * Used to cancel a eth_decrypt type message.
   *
   * @param messageId - The ID of the message to cancel.
   * @returns A full state update.
   */
  cancelDecryptMessage(messageId) {
    this._decryptMessageManager.rejectMessage(messageId);
    this._rejectApproval(messageId);
    return this._getState();
  }

  /**
   * Reject all unapproved messages of any type.
   *
   * @param reason - A message to indicate why.
   */
  rejectUnapproved(reason) {
    Object.keys(this._decryptMessageManager.getUnapprovedMessages()).forEach(messageId => {
      this._cancelAbstractMessage(this._decryptMessageManager, messageId, reason);
    });
  }
  _acceptApproval(messageId) {
    this.messagingSystem.call('ApprovalController:acceptRequest', messageId);
  }
  _cancelAbstractMessage(messageManager, messageId, reason) {
    if (reason) {
      this._metricsEvent({
        event: reason,
        category: _metametrics.MetaMetricsEventCategory.Messages,
        properties: {
          action: 'Decrypt Message Request'
        }
      });
    }
    messageManager.rejectMessage(messageId);
    this._rejectApproval(messageId);
    return this._getState();
  }
  _subscribeToMessageState(messageManager, updateState) {
    messageManager.subscribe(state => {
      const newMessages = this._migrateMessages(state.unapprovedMessages);
      this.update(draftState => {
        updateState(draftState, newMessages, state.unapprovedMessagesCount);
      });
    });
  }
  _migrateMessages(coreMessages) {
    const stateMessages = {};
    for (const messageId of Object.keys(coreMessages)) {
      const coreMessage = coreMessages[messageId];
      const stateMessage = this._migrateMessage(coreMessage);
      stateMessages[messageId] = stateMessage;
    }
    return stateMessages;
  }
  _migrateMessage(coreMessage) {
    const {
      messageParams,
      ...coreMessageData
    } = coreMessage;
    const stateMessage = {
      ...coreMessageData,
      rawSig: coreMessage.rawSig,
      msgParams: messageParams,
      origin: messageParams.origin
    };
    return stateMessage;
  }
  _requestApproval(messageParams) {
    const id = messageParams.metamaskId;
    const origin = messageParams.origin || _controllerUtils.ORIGIN_METAMASK;
    try {
      this.messagingSystem.call('ApprovalController:addRequest', {
        id,
        origin,
        type: _controllerUtils.ApprovalType.EthDecrypt
      }, true);
    } catch (error) {
      _loglevel.default.info('Error adding request to approval controller', error);
    }
  }
  _parseMessageData(data) {
    const stripped = (0, _hexstringUtils.stripHexPrefix)(data);
    const buff = Buffer.from(stripped, 'hex');
    return JSON.parse(buff.toString('utf8'));
  }
  _rejectApproval(messageId) {
    try {
      this.messagingSystem.call('ApprovalController:rejectRequest', messageId, 'Cancel');
    } catch (error) {
      _loglevel.default.info('Error rejecting request to approval controller', error);
    }
  }
}
exports.default = DecryptMessageController;

}).call(this)}).call(this,require("buffer").Buffer)

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\decrypt-message.ts",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\detect-tokens.js", {"../../../shared/constants/metametrics":"F:\\metamask-extension\\shared\\constants\\metametrics.ts","../../../shared/constants/network":"F:\\metamask-extension\\shared\\constants\\network.ts","../../../shared/constants/time":"F:\\metamask-extension\\shared\\constants\\time.ts","../../../shared/constants/tokens":"F:\\metamask-extension\\shared\\constants\\tokens.js","../../../shared/constants/transaction":"F:\\metamask-extension\\shared\\constants\\transaction.ts","../../../shared/modules/network.utils":"F:\\metamask-extension\\shared\\modules\\network.utils.ts","../../../shared/modules/string-utils":"F:\\metamask-extension\\shared\\modules\\string-utils.ts","loglevel":"F:\\metamask-extension\\node_modules\\loglevel\\lib\\loglevel.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Cdetect-tokens.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _loglevel = require("loglevel");
var _time = require("../../../shared/constants/time");
var _network = require("../../../shared/constants/network");
var _tokens = require("../../../shared/constants/tokens");
var _network2 = require("../../../shared/modules/network.utils");
var _stringUtils = require("../../../shared/modules/string-utils");
var _transaction = require("../../../shared/constants/transaction");
var _metametrics = require("../../../shared/constants/metametrics");
// By default, poll every 3 minutes
const DEFAULT_INTERVAL = _time.MINUTE * 3;

/**
 * A controller that polls for token exchange
 * rates based on a user's current token list
 */
class DetectTokensController {
  /**
   * Creates a DetectTokensController
   *
   * @param {object} [config] - Options to configure controller
   * @param config.interval
   * @param config.preferences
   * @param config.network
   * @param config.keyringMemStore
   * @param config.tokenList
   * @param config.tokensController
   * @param config.assetsContractController
   * @param config.trackMetaMetricsEvent
   * @param config.messenger
   */
  constructor({
    messenger,
    interval = DEFAULT_INTERVAL,
    preferences,
    network,
    keyringMemStore,
    tokenList,
    tokensController,
    assetsContractController = null,
    trackMetaMetricsEvent
  } = {}) {
    var _this$preferences, _this$preferences2, _this$tokensControlle, _this$tokensControlle2, _this$tokensControlle3;
    this.messenger = messenger;
    this.assetsContractController = assetsContractController;
    this.tokensController = tokensController;
    this.preferences = preferences;
    this.interval = interval;
    this.network = network;
    this.keyringMemStore = keyringMemStore;
    this.tokenList = tokenList;
    this.useTokenDetection = (_this$preferences = this.preferences) === null || _this$preferences === void 0 ? void 0 : _this$preferences.store.getState().useTokenDetection;
    this.selectedAddress = (_this$preferences2 = this.preferences) === null || _this$preferences2 === void 0 ? void 0 : _this$preferences2.store.getState().selectedAddress;
    this.tokenAddresses = (_this$tokensControlle = this.tokensController) === null || _this$tokensControlle === void 0 ? void 0 : _this$tokensControlle.state.tokens.map(token => {
      return token.address;
    });
    this.hiddenTokens = (_this$tokensControlle2 = this.tokensController) === null || _this$tokensControlle2 === void 0 ? void 0 : _this$tokensControlle2.state.ignoredTokens;
    this.detectedTokens = (_this$tokensControlle3 = this.tokensController) === null || _this$tokensControlle3 === void 0 ? void 0 : _this$tokensControlle3.state.detectedTokens;
    this.chainId = this.getChainIdFromNetworkStore();
    this._trackMetaMetricsEvent = trackMetaMetricsEvent;
    preferences === null || preferences === void 0 ? void 0 : preferences.store.subscribe(({
      selectedAddress,
      useTokenDetection
    }) => {
      if (this.selectedAddress !== selectedAddress || this.useTokenDetection !== useTokenDetection) {
        this.selectedAddress = selectedAddress;
        this.useTokenDetection = useTokenDetection;
        this.restartTokenDetection({
          selectedAddress
        });
      }
    });
    tokensController === null || tokensController === void 0 ? void 0 : tokensController.subscribe(({
      tokens = [],
      ignoredTokens = [],
      detectedTokens = []
    }) => {
      this.tokenAddresses = tokens.map(token => {
        return token.address;
      });
      this.hiddenTokens = ignoredTokens;
      this.detectedTokens = detectedTokens;
    });
    messenger.subscribe('NetworkController:stateChange', () => {
      if (this.chainId !== this.getChainIdFromNetworkStore()) {
        const chainId = this.getChainIdFromNetworkStore();
        this.chainId = chainId;
        this.restartTokenDetection({
          chainId: this.chainId
        });
      }
    });
  }

  /**
   * For each token in the tokenlist provided by the TokenListController, check selectedAddress balance.
   *
   * @param options
   * @param options.selectedAddress - the selectedAddress against which to detect for token balances
   * @param options.chainId - the chainId against which to detect for token balances
   */
  async detectNewTokens({
    selectedAddress,
    chainId
  } = {}) {
    const addressAgainstWhichToDetect = selectedAddress ?? this.selectedAddress;
    const chainIdAgainstWhichToDetect = chainId ?? this.getChainIdFromNetworkStore();
    if (!this.isActive) {
      return;
    }
    if (!(0, _network2.isTokenDetectionEnabledForNetwork)(chainIdAgainstWhichToDetect)) {
      return;
    }
    if (!this.useTokenDetection && chainIdAgainstWhichToDetect !== _network.CHAIN_IDS.MAINNET) {
      return;
    }
    const isTokenDetectionInactiveInMainnet = !this.useTokenDetection && chainIdAgainstWhichToDetect === _network.CHAIN_IDS.MAINNET;
    const {
      tokenList
    } = this._tokenList.state;
    const tokenListUsed = isTokenDetectionInactiveInMainnet ? _tokens.STATIC_MAINNET_TOKEN_LIST : tokenList;
    const tokensToDetect = [];
    for (const tokenAddress in tokenListUsed) {
      if (!this.tokenAddresses.find(address => (0, _stringUtils.isEqualCaseInsensitive)(address, tokenAddress)) && !this.hiddenTokens.find(address => (0, _stringUtils.isEqualCaseInsensitive)(address, tokenAddress)) && !this.detectedTokens.find(({
        address
      }) => (0, _stringUtils.isEqualCaseInsensitive)(address, tokenAddress))) {
        tokensToDetect.push(tokenAddress);
      }
    }
    const sliceOfTokensToDetect = [tokensToDetect.slice(0, 1000), tokensToDetect.slice(1000, tokensToDetect.length - 1)];
    for (const tokensSlice of sliceOfTokensToDetect) {
      let result;
      try {
        result = await this.assetsContractController.getBalancesInSingleCall(addressAgainstWhichToDetect, tokensSlice);
      } catch (error) {
        (0, _loglevel.warn)(`MetaMask - DetectTokensController single call balance fetch failed`, error);
        return;
      }
      const tokensWithBalance = [];
      const eventTokensDetails = [];
      if (result) {
        const nonZeroTokenAddresses = Object.keys(result);
        for (const nonZeroTokenAddress of nonZeroTokenAddresses) {
          const {
            address,
            symbol,
            decimals
          } = tokenListUsed[nonZeroTokenAddress];
          eventTokensDetails.push(`${symbol} - ${address}`);
          tokensWithBalance.push({
            address,
            symbol,
            decimals
          });
        }
        if (tokensWithBalance.length > 0) {
          this._trackMetaMetricsEvent({
            event: _metametrics.MetaMetricsEventName.TokenDetected,
            category: _metametrics.MetaMetricsEventCategory.Wallet,
            properties: {
              tokens: eventTokensDetails,
              token_standard: _transaction.TokenStandard.ERC20,
              asset_type: _transaction.AssetType.token
            }
          });
          await this.tokensController.addDetectedTokens(tokensWithBalance, {
            selectedAddress: addressAgainstWhichToDetect,
            chainId: chainIdAgainstWhichToDetect
          });
        }
      }
    }
  }

  /**
   * Restart token detection polling period and call detectNewTokens
   * in case of address change or user session initialization.
   *
   * @param options
   * @param options.selectedAddress - the selectedAddress against which to detect for token balances
   * @param options.chainId - the chainId against which to detect for token balances
   */
  restartTokenDetection({
    selectedAddress,
    chainId
  } = {}) {
    const addressAgainstWhichToDetect = selectedAddress ?? this.selectedAddress;
    const chainIdAgainstWhichToDetect = chainId ?? this.chainId;
    if (!(this.isActive && addressAgainstWhichToDetect)) {
      return;
    }
    this.detectNewTokens({
      selectedAddress: addressAgainstWhichToDetect,
      chainId: chainIdAgainstWhichToDetect
    });
    this.interval = DEFAULT_INTERVAL;
  }
  getChainIdFromNetworkStore() {
    var _this$network;
    return (_this$network = this.network) === null || _this$network === void 0 ? void 0 : _this$network.state.providerConfig.chainId;
  }

  /* eslint-disable accessor-pairs */
  /**
   * @type {number}
   */
  set interval(interval) {
    this._handle && clearInterval(this._handle);
    if (!interval) {
      return;
    }
    this._handle = setInterval(() => {
      this.detectNewTokens();
    }, interval);
  }

  /**
   * In setter when isUnlocked is updated to true, detectNewTokens and restart polling
   *
   * @type {object}
   */
  set keyringMemStore(keyringMemStore) {
    if (!keyringMemStore) {
      return;
    }
    this._keyringMemStore = keyringMemStore;
    this._keyringMemStore.subscribe(({
      isUnlocked
    }) => {
      if (this.isUnlocked !== isUnlocked) {
        this.isUnlocked = isUnlocked;
        if (isUnlocked) {
          this.restartTokenDetection();
        }
      }
    });
  }

  /**
   * @type {object}
   */
  set tokenList(tokenList) {
    if (!tokenList) {
      return;
    }
    this._tokenList = tokenList;
  }

  /**
   * Internal isActive state
   *
   * @type {object}
   */
  get isActive() {
    return this.isOpen && this.isUnlocked;
  }
  /* eslint-enable accessor-pairs */
}
exports.default = DetectTokensController;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\detect-tokens.js",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\encryption-public-key.ts", {"../../../shared/constants/app":"F:\\metamask-extension\\shared\\constants\\app.ts","../../../shared/constants/keyring":"F:\\metamask-extension\\shared\\constants\\keyring.ts","../../../shared/constants/metametrics":"F:\\metamask-extension\\shared\\constants\\metametrics.ts","@metamask/base-controller":"F:\\metamask-extension\\node_modules\\@metamask\\base-controller\\dist\\index.js","@metamask/message-manager":"F:\\metamask-extension\\node_modules\\@metamask\\message-manager\\dist\\index.js","events":"F:\\metamask-extension\\node_modules\\browserify\\node_modules\\events\\events.js","loglevel":"F:\\metamask-extension\\node_modules\\loglevel\\lib\\loglevel.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Cencryption-public-key.ts
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _events = _interopRequireDefault(require("events"));
var _loglevel = _interopRequireDefault(require("loglevel"));
var _messageManager = require("@metamask/message-manager");
var _baseController = require("@metamask/base-controller");
var _metametrics = require("../../../shared/constants/metametrics");
var _keyring = require("../../../shared/constants/keyring");
var _app = require("../../../shared/constants/app");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const controllerName = 'EncryptionPublicKeyController';
const methodNameGetEncryptionPublicKey = 'eth_getEncryptionPublicKey';
const stateMetadata = {
  unapprovedEncryptionPublicKeyMsgs: {
    persist: false,
    anonymous: false
  },
  unapprovedEncryptionPublicKeyMsgCount: {
    persist: false,
    anonymous: false
  }
};
const getDefaultState = () => ({
  unapprovedEncryptionPublicKeyMsgs: {},
  unapprovedEncryptionPublicKeyMsgCount: 0
});
/**
 * Controller for requesting encryption public key requests requiring user approval.
 */
class EncryptionPublicKeyController extends _baseController.BaseControllerV2 {
  /**
   * Construct a EncryptionPublicKey controller.
   *
   * @param options - The controller options.
   * @param options.messenger - The restricted controller messenger for the EncryptionPublicKey controller.
   * @param options.keyringController - An instance of a keyring controller used to extract the encryption public key.
   * @param options.getState - Callback to retrieve all user state.
   * @param options.metricsEvent - A function for emitting a metric event.
   */
  constructor({
    messenger,
    keyringController,
    getState,
    metricsEvent
  }) {
    super({
      name: controllerName,
      metadata: stateMetadata,
      messenger,
      state: getDefaultState()
    });
    _defineProperty(this, "hub", void 0);
    _defineProperty(this, "_keyringController", void 0);
    _defineProperty(this, "_getState", void 0);
    _defineProperty(this, "_encryptionPublicKeyManager", void 0);
    _defineProperty(this, "_metricsEvent", void 0);
    this._keyringController = keyringController;
    this._getState = getState;
    this._metricsEvent = metricsEvent;
    this.hub = new _events.default();
    this._encryptionPublicKeyManager = new _messageManager.EncryptionPublicKeyManager(undefined, undefined, undefined, ['received']);
    this._encryptionPublicKeyManager.hub.on('updateBadge', () => {
      this.hub.emit('updateBadge');
    });
    this._encryptionPublicKeyManager.hub.on('unapprovedMessage', msgParams => {
      this._requestApproval(msgParams, methodNameGetEncryptionPublicKey);
    });
    this._subscribeToMessageState(this._encryptionPublicKeyManager, (state, newMessages, messageCount) => {
      state.unapprovedEncryptionPublicKeyMsgs = newMessages;
      state.unapprovedEncryptionPublicKeyMsgCount = messageCount;
    });
  }

  /**
   * A getter for the number of 'unapproved' Messages in this.messages
   *
   * @returns The number of 'unapproved' Messages in this.messages
   */
  get unapprovedMsgCount() {
    return this._encryptionPublicKeyManager.getUnapprovedMessagesCount();
  }

  /**
   * Reset the controller state to the initial state.
   */
  resetState() {
    this.update(() => getDefaultState());
  }

  /**
   * Called when a Dapp uses the eth_getEncryptionPublicKey method, to request user approval.
   *
   * @param address - The address from the encryption public key will be extracted.
   * @param [req] - The original request, containing the origin.
   */
  async newRequestEncryptionPublicKey(address, req) {
    const keyring = await this._keyringController.getKeyringForAccount(address);
    switch (keyring.type) {
      case _keyring.KeyringType.ledger:
        {
          return new Promise((_, reject) => {
            reject(new Error('Ledger does not support eth_getEncryptionPublicKey.'));
          });
        }
      case _keyring.KeyringType.trezor:
        {
          return new Promise((_, reject) => {
            reject(new Error('Trezor does not support eth_getEncryptionPublicKey.'));
          });
        }
      case _keyring.KeyringType.lattice:
        {
          return new Promise((_, reject) => {
            reject(new Error('Lattice does not support eth_getEncryptionPublicKey.'));
          });
        }
      case _keyring.KeyringType.qr:
        {
          return Promise.reject(new Error('QR hardware does not support eth_getEncryptionPublicKey.'));
        }
      default:
        {
          return this._encryptionPublicKeyManager.addUnapprovedMessageAsync({
            from: address
          }, req);
        }
    }
  }

  /**
   * Signifies a user's approval to receiving encryption public key in queue.
   *
   * @param msgParams - The params of the message to receive & return to the Dapp.
   * @returns A full state update.
   */
  async encryptionPublicKey(msgParams) {
    _loglevel.default.info('MetaMaskController - encryptionPublicKey');
    const messageId = msgParams.metamaskId;
    // sets the status op the message to 'approved'
    // and removes the metamaskId for decryption
    try {
      const cleanMessageParams = await this._encryptionPublicKeyManager.approveMessage(msgParams);

      // EncryptionPublicKey message
      const publicKey = await this._keyringController.getEncryptionPublicKey(cleanMessageParams.from);

      // tells the listener that the message has been processed
      // and can be returned to the dapp
      this._encryptionPublicKeyManager.setMessageStatusAndResult(messageId, publicKey, 'received');
      this._acceptApproval(messageId);
      return this._getState();
    } catch (error) {
      _loglevel.default.info('MetaMaskController - eth_getEncryptionPublicKey failed.', error);
      this._cancelAbstractMessage(this._encryptionPublicKeyManager, messageId);
      throw error;
    }
  }

  /**
   * Used to cancel a message submitted via eth_getEncryptionPublicKey.
   *
   * @param msgId - The id of the message to cancel.
   */
  cancelEncryptionPublicKey(msgId) {
    return this._cancelAbstractMessage(this._encryptionPublicKeyManager, msgId);
  }

  /**
   * Reject all unapproved messages of any type.
   *
   * @param reason - A message to indicate why.
   */
  rejectUnapproved(reason) {
    Object.keys(this._encryptionPublicKeyManager.getUnapprovedMessages()).forEach(messageId => {
      this._cancelAbstractMessage(this._encryptionPublicKeyManager, messageId, reason);
    });
  }

  /**
   * Clears all unapproved messages from memory.
   */
  clearUnapproved() {
    this._encryptionPublicKeyManager.update({
      unapprovedMessages: {},
      unapprovedMessagesCount: 0
    });
  }
  _cancelAbstractMessage(messageManager, messageId, reason) {
    if (reason) {
      this._metricsEvent({
        event: reason,
        category: _metametrics.MetaMetricsEventCategory.Messages,
        properties: {
          action: 'Encryption public key Request'
        }
      });
    }
    messageManager.rejectMessage(messageId);
    this._rejectApproval(messageId);
    return this._getState();
  }
  _subscribeToMessageState(messageManager, updateState) {
    messageManager.subscribe(state => {
      const newMessages = this._migrateMessages(state.unapprovedMessages);
      this.update(draftState => {
        updateState(draftState, newMessages, state.unapprovedMessagesCount);
      });
    });
  }
  _migrateMessages(coreMessages) {
    const stateMessages = {};
    for (const messageId of Object.keys(coreMessages)) {
      const coreMessage = coreMessages[messageId];
      const stateMessage = this._migrateMessage(coreMessage);
      stateMessages[messageId] = stateMessage;
    }
    return stateMessages;
  }
  _migrateMessage(coreMessage) {
    const {
      messageParams,
      ...coreMessageData
    } = coreMessage;

    // Core message managers use messageParams but frontend uses msgParams with lots of references
    const stateMessage = {
      ...coreMessageData,
      rawSig: coreMessage.rawSig,
      msgParams: messageParams.from,
      origin: messageParams.origin
    };
    return stateMessage;
  }
  _requestApproval(msgParams, type) {
    const id = msgParams.metamaskId;
    const origin = msgParams.origin || _app.ORIGIN_METAMASK;
    this.messagingSystem.call('ApprovalController:addRequest', {
      id,
      origin,
      type
    }, true).catch(() => {
      // Intentionally ignored as promise not currently used
    });
  }
  _acceptApproval(messageId) {
    this.messagingSystem.call('ApprovalController:acceptRequest', messageId);
  }
  _rejectApproval(messageId) {
    this.messagingSystem.call('ApprovalController:rejectRequest', messageId, 'Cancel');
  }
}
exports.default = EncryptionPublicKeyController;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\encryption-public-key.ts",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\ens\\ens.js", {"../../../../shared/constants/network":"F:\\metamask-extension\\shared\\constants\\network.ts","@ethersproject/providers":"F:\\metamask-extension\\node_modules\\@ethersproject\\providers\\lib\\index.js","ethereum-ens-network-map":"F:\\metamask-extension\\node_modules\\ethereum-ens-network-map\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Cens%5Cens.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _providers = require("@ethersproject/providers");
var _ethereumEnsNetworkMap = _interopRequireDefault(require("ethereum-ens-network-map"));
var _network = require("../../../../shared/constants/network");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class Ens {
  static getNetworkEnsSupport(network) {
    return Boolean(_ethereumEnsNetworkMap.default[network]);
  }
  constructor({
    network,
    provider
  } = {}) {
    const networkName = _network.NETWORK_ID_TO_ETHERS_NETWORK_NAME_MAP[network];
    const ensAddress = _ethereumEnsNetworkMap.default[network];
    const ethProvider = new _providers.Web3Provider(provider, {
      chainId: parseInt(network, 10),
      name: networkName,
      ensAddress
    });
    this._ethProvider = ethProvider;
  }
  lookup(ensName) {
    return this._ethProvider.resolveName(ensName);
  }
  reverse(address) {
    return this._ethProvider.lookupAddress(address);
  }
}
exports.default = Ens;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\ens\\ens.js",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\ens\\index.js", {"../../../../shared/constants/network":"F:\\metamask-extension\\shared\\constants\\network.ts","../../../../shared/modules/hexstring-utils":"F:\\metamask-extension\\shared\\modules\\hexstring-utils.ts","./ens":"F:\\metamask-extension\\app\\scripts\\controllers\\ens\\ens.js","@metamask/obs-store":"F:\\metamask-extension\\node_modules\\@metamask\\obs-store\\dist\\index.js","loglevel":"F:\\metamask-extension\\node_modules\\loglevel\\lib\\loglevel.js","punycode/punycode":"F:\\metamask-extension\\node_modules\\punycode\\punycode.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Cens%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _punycode = _interopRequireDefault(require("punycode/punycode"));
var _obsStore = require("@metamask/obs-store");
var _loglevel = _interopRequireDefault(require("loglevel"));
var _network = require("../../../../shared/constants/network");
var _hexstringUtils = require("../../../../shared/modules/hexstring-utils");
var _ens = _interopRequireDefault(require("./ens"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
const ZERO_X_ERROR_ADDRESS = '0x';
class EnsController {
  constructor({
    ens,
    provider,
    onNetworkDidChange,
    getCurrentChainId
  } = {}) {
    const initState = {
      ensResolutionsByAddress: {}
    };
    this._ens = ens;
    if (!this._ens) {
      const chainId = getCurrentChainId();
      const network = _network.CHAIN_ID_TO_NETWORK_ID_MAP[chainId];
      if (_ens.default.getNetworkEnsSupport(network)) {
        this._ens = new _ens.default({
          network,
          provider
        });
      }
    }
    this.store = new _obsStore.ObservableStore(initState);
    this.resetState = () => {
      this.store.updateState(initState);
    };
    onNetworkDidChange(() => {
      this.store.putState(initState);
      const chainId = getCurrentChainId();
      const network = _network.CHAIN_ID_TO_NETWORK_ID_MAP[chainId];
      if (_ens.default.getNetworkEnsSupport(network)) {
        this._ens = new _ens.default({
          network,
          provider
        });
      } else {
        delete this._ens;
      }
    });
  }
  reverseResolveAddress(address) {
    return this._reverseResolveAddress((0, _hexstringUtils.toChecksumHexAddress)(address));
  }
  async _reverseResolveAddress(address) {
    if (!this._ens) {
      return undefined;
    }
    const state = this.store.getState();
    if (state.ensResolutionsByAddress[address]) {
      return state.ensResolutionsByAddress[address];
    }
    let domain;
    try {
      domain = await this._ens.reverse(address);
    } catch (error) {
      _loglevel.default.debug(error);
      return undefined;
    }
    let registeredAddress;
    try {
      registeredAddress = await this._ens.lookup(domain);
    } catch (error) {
      _loglevel.default.debug(error);
      return undefined;
    }
    if (registeredAddress === ZERO_ADDRESS || registeredAddress === ZERO_X_ERROR_ADDRESS) {
      return undefined;
    }
    if ((0, _hexstringUtils.toChecksumHexAddress)(registeredAddress) !== address) {
      return undefined;
    }
    this._updateResolutionsByAddress(address, _punycode.default.toASCII(domain));
    return domain;
  }
  _updateResolutionsByAddress(address, domain) {
    const oldState = this.store.getState();
    this.store.putState({
      ensResolutionsByAddress: {
        ...oldState.ensResolutionsByAddress,
        [address]: domain
      }
    });
  }
}
exports.default = EnsController;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\ens\\index.js",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\incoming-transactions.js", {"../../../shared/constants/network":"F:\\metamask-extension\\shared\\constants\\network.ts","../../../shared/constants/transaction":"F:\\metamask-extension\\shared\\constants\\transaction.ts","../../../shared/modules/conversion.utils":"F:\\metamask-extension\\shared\\modules\\conversion.utils.ts","../../../shared/modules/fetch-with-timeout":"F:\\metamask-extension\\shared\\modules\\fetch-with-timeout.ts","../../../shared/modules/random-id":"F:\\metamask-extension\\shared\\modules\\random-id.js","../lib/util":"F:\\metamask-extension\\app\\scripts\\lib\\util.ts","@metamask/obs-store":"F:\\metamask-extension\\node_modules\\@metamask\\obs-store\\dist\\index.js","bn.js":"F:\\metamask-extension\\node_modules\\bn.js\\lib\\bn.js","loglevel":"F:\\metamask-extension\\node_modules\\loglevel\\lib\\loglevel.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Cincoming-transactions.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _obsStore = require("@metamask/obs-store");
var _loglevel = _interopRequireDefault(require("loglevel"));
var _bn = _interopRequireDefault(require("bn.js"));
var _randomId = _interopRequireDefault(require("../../../shared/modules/random-id"));
var _util = require("../lib/util");
var _fetchWithTimeout = _interopRequireDefault(require("../../../shared/modules/fetch-with-timeout"));
var _transaction = require("../../../shared/constants/transaction");
var _network = require("../../../shared/constants/network");
var _conversion = require("../../../shared/modules/conversion.utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const fetchWithTimeout = (0, _fetchWithTimeout.default)();

/**
 * @typedef {__import__('../../../shared/constants/transaction').TransactionMeta} TransactionMeta
 */

/**
 * A transaction object in the format returned by the Etherscan API.
 *
 * Note that this is not an exhaustive type definiton; only the properties we use are defined
 *
 * @typedef {object} EtherscanTransaction
 * @property {string} blockNumber - The number of the block this transaction was found in, in decimal
 * @property {string} from - The hex-prefixed address of the sender
 * @property {string} gas - The gas limit, in decimal GWEI
 * @property {string} [gasPrice] - The gas price, in decimal WEI
 * @property {string} [maxFeePerGas] - The maximum fee per gas, inclusive of tip, in decimal WEI
 * @property {string} [maxPriorityFeePerGas] - The maximum tip per gas in decimal WEI
 * @property {string} hash - The hex-prefixed transaction hash
 * @property {string} isError - Whether the transaction was confirmed or failed (0 for confirmed, 1 for failed)
 * @property {string} nonce - The transaction nonce, in decimal
 * @property {string} timeStamp - The timestamp for the transaction, in seconds
 * @property {string} to - The hex-prefixed address of the recipient
 * @property {string} value - The amount of ETH sent in this transaction, in decimal WEI
 */

/**
 * This controller is responsible for retrieving incoming transactions. Etherscan is polled once every block to check
 * for new incoming transactions for the current selected account on the current network
 *
 * Note that only Etherscan-compatible networks are supported. We will not attempt to retrieve incoming transactions
 * on non-compatible custom RPC endpoints.
 */
class IncomingTransactionsController {
  constructor(opts = {}) {
    const {
      blockTracker,
      onNetworkDidChange,
      getCurrentChainId,
      preferencesController,
      onboardingController
    } = opts;
    this.blockTracker = blockTracker;
    this.getCurrentChainId = getCurrentChainId;
    this.preferencesController = preferencesController;
    this.onboardingController = onboardingController;
    this._onLatestBlock = async newBlockNumberHex => {
      const selectedAddress = this.preferencesController.getSelectedAddress();
      const newBlockNumberDec = parseInt(newBlockNumberHex, 16);
      await this._update(selectedAddress, newBlockNumberDec);
    };
    const incomingTxLastFetchedBlockByChainId = Object.keys(_network.ETHERSCAN_SUPPORTED_NETWORKS).reduce((network, chainId) => {
      network[chainId] = null;
      return network;
    }, {});
    const initState = {
      incomingTransactions: {},
      incomingTxLastFetchedBlockByChainId,
      ...opts.initState
    };
    this.store = new _obsStore.ObservableStore(initState);
    this.preferencesController.store.subscribe((0, _util.previousValueComparator)((prevState, currState) => {
      const {
        featureFlags: {
          showIncomingTransactions: prevShowIncomingTransactions
        } = {}
      } = prevState;
      const {
        featureFlags: {
          showIncomingTransactions: currShowIncomingTransactions
        } = {}
      } = currState;
      if (currShowIncomingTransactions === prevShowIncomingTransactions) {
        return;
      }
      if (prevShowIncomingTransactions && !currShowIncomingTransactions) {
        this.stop();
        return;
      }
      this.start();
    }, this.preferencesController.store.getState()));
    this.preferencesController.store.subscribe((0, _util.previousValueComparator)(async (prevState, currState) => {
      const {
        selectedAddress: prevSelectedAddress
      } = prevState;
      const {
        selectedAddress: currSelectedAddress
      } = currState;
      if (currSelectedAddress === prevSelectedAddress) {
        return;
      }
      await this._update(currSelectedAddress);
    }, this.preferencesController.store.getState()));
    this.onboardingController.store.subscribe((0, _util.previousValueComparator)(async (prevState, currState) => {
      const {
        completedOnboarding: prevCompletedOnboarding
      } = prevState;
      const {
        completedOnboarding: currCompletedOnboarding
      } = currState;
      if (!prevCompletedOnboarding && currCompletedOnboarding) {
        const address = this.preferencesController.getSelectedAddress();
        await this._update(address);
      }
    }, this.onboardingController.store.getState()));
    onNetworkDidChange(async () => {
      const address = this.preferencesController.getSelectedAddress();
      await this._update(address);
    });
  }
  start() {
    const {
      featureFlags = {}
    } = this.preferencesController.store.getState();
    const {
      showIncomingTransactions
    } = featureFlags;
    if (!showIncomingTransactions) {
      return;
    }
    this.blockTracker.removeListener('latest', this._onLatestBlock);
    this.blockTracker.addListener('latest', this._onLatestBlock);
  }
  stop() {
    this.blockTracker.removeListener('latest', this._onLatestBlock);
  }

  /**
   * Determines the correct block number to begin looking for new transactions
   * from, fetches the transactions and then saves them and the next block
   * number to begin fetching from in state. Block numbers and transactions are
   * stored per chainId.
   *
   * @private
   * @param {string} address - address to lookup transactions for
   * @param {number} [newBlockNumberDec] - block number to begin fetching from
   */
  async _update(address, newBlockNumberDec) {
    const {
      completedOnboarding
    } = this.onboardingController.store.getState();
    const chainId = this.getCurrentChainId();
    if (!Object.hasOwnProperty.call(_network.ETHERSCAN_SUPPORTED_NETWORKS, chainId) || !address || !completedOnboarding) {
      return;
    }
    try {
      const currentState = this.store.getState();
      const currentBlock = parseInt(this.blockTracker.getCurrentBlock(), 16);
      const mostRecentlyFetchedBlock = currentState.incomingTxLastFetchedBlockByChainId[chainId];
      const blockToFetchFrom = mostRecentlyFetchedBlock ?? newBlockNumberDec ?? currentBlock;
      const newIncomingTxs = await this._getNewIncomingTransactions(address, blockToFetchFrom, chainId);
      let newMostRecentlyFetchedBlock = blockToFetchFrom;
      newIncomingTxs.forEach(tx => {
        if (tx.blockNumber && parseInt(newMostRecentlyFetchedBlock, 10) < parseInt(tx.blockNumber, 10)) {
          newMostRecentlyFetchedBlock = parseInt(tx.blockNumber, 10);
        }
      });
      this.store.updateState({
        incomingTxLastFetchedBlockByChainId: {
          ...currentState.incomingTxLastFetchedBlockByChainId,
          [chainId]: newMostRecentlyFetchedBlock + 1
        },
        incomingTransactions: newIncomingTxs.reduce((transactions, tx) => {
          transactions[tx.hash] = tx;
          return transactions;
        }, {
          ...currentState.incomingTransactions
        })
      });
    } catch (err) {
      _loglevel.default.error(err);
    }
  }

  /**
   * fetches transactions for the given address and chain, via etherscan, then
   * processes the data into the necessary shape for usage in this controller.
   *
   * @private
   * @param {string} [address] - Address to fetch transactions for
   * @param {number} [fromBlock] - Block to look for transactions at
   * @param {string} [chainId] - The chainId for the current network
   * @returns {TransactionMeta[]}
   */
  async _getNewIncomingTransactions(address, fromBlock, chainId) {
    const etherscanDomain = _network.ETHERSCAN_SUPPORTED_NETWORKS[chainId].domain;
    const etherscanSubdomain = _network.ETHERSCAN_SUPPORTED_NETWORKS[chainId].subdomain;
    const apiUrl = `https://${etherscanSubdomain}.${etherscanDomain}`;
    let url = `${apiUrl}/api?module=account&action=txlist&address=${address}&tag=latest&page=1`;
    if (fromBlock) {
      url += `&startBlock=${parseInt(fromBlock, 10)}`;
    }
    const response = await fetchWithTimeout(url);
    const {
      status,
      result
    } = await response.json();
    let newIncomingTxs = [];
    if (status === '1' && Array.isArray(result) && result.length > 0) {
      const remoteTxList = {};
      const remoteTxs = [];
      result.forEach(tx => {
        if (!remoteTxList[tx.hash]) {
          remoteTxs.push(this._normalizeTxFromEtherscan(tx, chainId));
          remoteTxList[tx.hash] = 1;
        }
      });
      newIncomingTxs = remoteTxs.filter(tx => {
        var _tx$txParams, _tx$txParams$to;
        return ((_tx$txParams = tx.txParams) === null || _tx$txParams === void 0 ? void 0 : (_tx$txParams$to = _tx$txParams.to) === null || _tx$txParams$to === void 0 ? void 0 : _tx$txParams$to.toLowerCase()) === address.toLowerCase();
      });
      newIncomingTxs.sort((a, b) => a.time < b.time ? -1 : 1);
    }
    return newIncomingTxs;
  }

  /**
   * Transmutes a EtherscanTransaction into a TransactionMeta
   *
   * @param {EtherscanTransaction} etherscanTransaction - the transaction to normalize
   * @param {string} chainId - The chainId of the current network
   * @returns {TransactionMeta}
   */
  _normalizeTxFromEtherscan(etherscanTransaction, chainId) {
    const time = parseInt(etherscanTransaction.timeStamp, 10) * 1000;
    const status = etherscanTransaction.isError === '0' ? _transaction.TransactionStatus.confirmed : _transaction.TransactionStatus.failed;
    const txParams = {
      from: etherscanTransaction.from,
      gas: (0, _conversion.bnToHex)(new _bn.default(etherscanTransaction.gas)),
      nonce: (0, _conversion.bnToHex)(new _bn.default(etherscanTransaction.nonce)),
      to: etherscanTransaction.to,
      value: (0, _conversion.bnToHex)(new _bn.default(etherscanTransaction.value))
    };
    if (etherscanTransaction.gasPrice) {
      txParams.gasPrice = (0, _conversion.bnToHex)(new _bn.default(etherscanTransaction.gasPrice));
    } else if (etherscanTransaction.maxFeePerGas) {
      txParams.maxFeePerGas = (0, _conversion.bnToHex)(new _bn.default(etherscanTransaction.maxFeePerGas));
      txParams.maxPriorityFeePerGas = (0, _conversion.bnToHex)(new _bn.default(etherscanTransaction.maxPriorityFeePerGas));
    }
    return {
      blockNumber: etherscanTransaction.blockNumber,
      id: (0, _randomId.default)(),
      chainId,
      metamaskNetworkId: _network.ETHERSCAN_SUPPORTED_NETWORKS[chainId].networkId,
      status,
      time,
      txParams,
      hash: etherscanTransaction.hash,
      type: _transaction.TransactionType.incoming
    };
  }
}
exports.default = IncomingTransactionsController;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\incoming-transactions.js",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\metametrics.js", {"../../../shared/constants/alarms":"F:\\metamask-extension\\shared\\constants\\alarms.js","../../../shared/constants/app":"F:\\metamask-extension\\shared\\constants\\app.ts","../../../shared/constants/metametrics":"F:\\metamask-extension\\shared\\constants\\metametrics.ts","../../../shared/constants/time":"F:\\metamask-extension\\shared\\constants\\time.ts","../../../shared/modules/mv3.utils":"F:\\metamask-extension\\shared\\modules\\mv3.utils.js","../lib/util":"F:\\metamask-extension\\app\\scripts\\lib\\util.ts","@metamask/obs-store":"F:\\metamask-extension\\node_modules\\@metamask\\obs-store\\dist\\index.js","buffer":"F:\\metamask-extension\\node_modules\\browserify\\node_modules\\buffer\\index.js","ethereumjs-util":"F:\\metamask-extension\\node_modules\\ethereumjs-util\\dist.browser\\index.js","lodash":"F:\\metamask-extension\\node_modules\\lodash\\lodash.js","uuid":"F:\\metamask-extension\\node_modules\\uuid\\dist\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Cmetametrics.js
      return function (require, module, exports) {
(function (Buffer){(function (){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = require("lodash");
var _obsStore = require("@metamask/obs-store");
var _ethereumjsUtil = require("ethereumjs-util");
var _uuid = require("uuid");
var _app = require("../../../shared/constants/app");
var _metametrics = require("../../../shared/constants/metametrics");
var _time = require("../../../shared/constants/time");
var _mv = require("../../../shared/modules/mv3.utils");
var _alarms = require("../../../shared/constants/alarms");
var _util = require("../lib/util");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const EXTENSION_UNINSTALL_URL = 'https://metamask.io/uninstalled';
const defaultCaptureException = err => {
  // throw error on clean stack so its captured by platform integrations (eg sentry)
  // but does not interrupt the call stack
  setTimeout(() => {
    throw err;
  });
};

// The function is used to build a unique messageId for segment messages
// It uses actionId and uniqueIdentifier from event if present
const buildUniqueMessageId = args => {
  const messageIdParts = [];
  if (args.uniqueIdentifier) {
    messageIdParts.push(args.uniqueIdentifier);
  }
  if (args.actionId) {
    messageIdParts.push(args.actionId);
  }
  if (messageIdParts.length && args.isDuplicateAnonymizedEvent) {
    messageIdParts.push('0x000');
  }
  if (messageIdParts.length) {
    return messageIdParts.join('-');
  }
  return (0, _util.generateRandomId)();
};
const exceptionsToFilter = {
  [`You must pass either an "anonymousId" or a "userId".`]: true
};

/**
 * @typedef {__import__('../../../shared/constants/metametrics').MetaMetricsContext} MetaMetricsContext
 * @typedef {__import__('../../../shared/constants/metametrics').MetaMetricsEventPayload} MetaMetricsEventPayload
 * @typedef {__import__('../../../shared/constants/metametrics').MetaMetricsEventOptions} MetaMetricsEventOptions
 * @typedef {__import__('../../../shared/constants/metametrics').SegmentEventPayload} SegmentEventPayload
 * @typedef {__import__('../../../shared/constants/metametrics').SegmentInterface} SegmentInterface
 * @typedef {__import__('../../../shared/constants/metametrics').MetaMetricsPagePayload} MetaMetricsPagePayload
 * @typedef {__import__('../../../shared/constants/metametrics').MetaMetricsPageOptions} MetaMetricsPageOptions
 * @typedef {__import__('../../../shared/constants/metametrics').MetaMetricsEventFragment} MetaMetricsEventFragment
 * @typedef {__import__('../../../shared/constants/metametrics').MetaMetricsTraits} MetaMetricsTraits
 */

/**
 * @typedef {object} MetaMetricsControllerState
 * @property {string} [metaMetricsId] - The user's metaMetricsId that will be
 *  attached to all non-anonymized event payloads
 * @property {boolean} [participateInMetaMetrics] - The user's preference for
 *  participating in the MetaMetrics analytics program. This setting controls
 *  whether or not events are tracked
 * @property {{[string]: MetaMetricsEventFragment}} [fragments] - Object keyed
 *  by UUID with stored fragments as values.
 * @property {Array} [eventsBeforeMetricsOptIn] - Array of queued events added before
 *  a user opts into metrics.
 * @property {object} [traits] - Traits that are not derived from other state keys.
 * @property {Record<string any>} [previousUserTraits] - The user traits the last
 *  time they were computed.
 */

class MetaMetricsController {
  /**
   * @param {object} options
   * @param {object} options.segment - an instance of analytics for tracking
   *  events that conform to the new MetaMetrics tracking plan.
   * @param {object} options.preferencesStore - The preferences controller store, used
   *  to access and subscribe to preferences that will be attached to events
   * @param {Function} options.onNetworkDidChange - Used to attach a listener to the
   *  networkDidChange event emitted by the networkController
   * @param {Function} options.getCurrentChainId - Gets the current chain id from the
   *  network controller
   * @param {string} options.version - The version of the extension
   * @param {string} options.environment - The environment the extension is running in
   * @param {string} options.extension - webextension-polyfill
   * @param {MetaMetricsControllerState} options.initState - State to initialized with
   * @param options.captureException
   */
  constructor({
    segment,
    preferencesStore,
    onNetworkDidChange,
    getCurrentChainId,
    version,
    environment,
    initState,
    extension,
    captureException = defaultCaptureException
  }) {
    /**
     * Returns an array of all of the NFTs the user
     * possesses across all networks and accounts.
     *
     * @param {object} allNfts
     * @returns {[]}
     */
    _defineProperty(this, "_getAllNFTsFlattened", (0, _lodash.memoize)((allNfts = {}) => {
      return Object.values(allNfts).reduce((result, chainNFTs) => {
        return result.concat(...Object.values(chainNFTs));
      }, []);
    }));
    /**
     * Segment accepts any data type value. We have special logic to validate arrays.
     *
     * @param {*} value
     * @returns {boolean}
     */
    _defineProperty(this, "_isValidTraitArray", value => {
      return Array.isArray(value) && (value.every(element => {
        return typeof element === 'string';
      }) || value.every(element => {
        return typeof element === 'boolean';
      }) || value.every(element => {
        return typeof element === 'number';
      }));
    });
    /**
     * Returns true if the value is an accepted date type
     *
     * @param {*} value
     * @returns {boolean}
     */
    _defineProperty(this, "_isValidTraitDate", value => {
      return Object.prototype.toString.call(value) === '[object Date]';
    });
    this._captureException = err => {
      // This is a temporary measure. Currently there are errors flooding sentry due to a problem in how we are tracking anonymousId
      // We intend on removing this as soon as we understand how to correctly solve that problem.
      if (!exceptionsToFilter[err.message]) {
        captureException(err);
      }
    };
    const prefState = preferencesStore.getState();
    this.chainId = getCurrentChainId();
    this.locale = prefState.currentLocale.replace('_', '-');
    this.version = environment === 'production' ? version : `${version}-${environment}`;
    this.extension = extension;
    this.environment = environment;
    const abandonedFragments = (0, _lodash.omitBy)(initState === null || initState === void 0 ? void 0 : initState.fragments, 'persist');
    const segmentApiCalls = (initState === null || initState === void 0 ? void 0 : initState.segmentApiCalls) || {};
    this.store = new _obsStore.ObservableStore({
      participateInMetaMetrics: null,
      metaMetricsId: null,
      eventsBeforeMetricsOptIn: [],
      traits: {},
      ...initState,
      fragments: {
        ...(initState === null || initState === void 0 ? void 0 : initState.fragments)
      },
      segmentApiCalls: {
        ...segmentApiCalls
      }
    });
    preferencesStore.subscribe(({
      currentLocale
    }) => {
      this.locale = currentLocale.replace('_', '-');
    });
    onNetworkDidChange(() => {
      this.chainId = getCurrentChainId();
    });
    this.segment = segment;

    // Track abandoned fragments that weren't properly cleaned up.
    // Abandoned fragments are those that were stored in persistent memory
    // and are available at controller instance creation, but do not have the
    // 'persist' flag set. This means anytime the extension is unlocked, any
    // fragments that are not marked as persistent will be purged and the
    // failure event will be emitted.
    Object.values(abandonedFragments).forEach(fragment => {
      this.finalizeEventFragment(fragment.id, {
        abandoned: true
      });
    });

    // Code below submits any pending segmentApiCalls to Segment if/when the controller is re-instantiated
    if (_mv.isManifestV3) {
      Object.values(segmentApiCalls).forEach(({
        eventType,
        payload
      }) => {
        this._submitSegmentAPICall(eventType, payload);
      });
    }

    // Close out event fragments that were created but not progressed. An
    // interval is used to routinely check if a fragment has not been updated
    // within the fragment's timeout window. When creating a new event fragment
    // a timeout can be specified that will cause an abandoned event to be
    // tracked if the event isn't progressed within that amount of time.
    if (_mv.isManifestV3) {
      /* eslint-disable no-undef */
      chrome.alarms.getAll(alarms => {
        const hasAlarm = (0, _util.checkAlarmExists)(alarms, _alarms.METAMETRICS_FINALIZE_EVENT_FRAGMENT_ALARM);
        if (!hasAlarm) {
          chrome.alarms.create(_alarms.METAMETRICS_FINALIZE_EVENT_FRAGMENT_ALARM, {
            delayInMinutes: 1,
            periodInMinutes: 1
          });
        }
      });
      chrome.alarms.onAlarm.addListener(alarmInfo => {
        if (alarmInfo.name === _alarms.METAMETRICS_FINALIZE_EVENT_FRAGMENT_ALARM) {
          this.finalizeAbandonedFragments();
        }
      });
    } else {
      setInterval(() => {
        this.finalizeAbandonedFragments();
      }, _time.SECOND * 30);
    }
  }
  finalizeAbandonedFragments() {
    Object.values(this.store.getState().fragments).forEach(fragment => {
      if (fragment.timeout && Date.now() - fragment.lastUpdated / 1000 > fragment.timeout) {
        this.finalizeEventFragment(fragment.id, {
          abandoned: true
        });
      }
    });
  }
  generateMetaMetricsId() {
    return (0, _ethereumjsUtil.bufferToHex)((0, _ethereumjsUtil.keccak)(Buffer.from(String(Date.now()) + String(Math.round(Math.random() * Number.MAX_SAFE_INTEGER)))));
  }

  /**
   * Create an event fragment in state and returns the event fragment object.
   *
   * @param {MetaMetricsEventFragment} options - Fragment settings and properties
   *  to initiate the fragment with.
   * @returns {MetaMetricsEventFragment}
   */
  createEventFragment(options) {
    if (!options.successEvent || !options.category) {
      throw new Error(`Must specify success event and category. Success event was: ${options.event}. Category was: ${options.category}. Payload keys were: ${Object.keys(options)}. ${typeof options.properties === 'object' ? `Payload property keys were: ${Object.keys(options.properties)}` : ''}`);
    }
    const {
      fragments
    } = this.store.getState();
    const id = options.uniqueIdentifier ?? (0, _uuid.v4)();
    const fragment = {
      id,
      ...options,
      lastUpdated: Date.now()
    };
    this.store.updateState({
      fragments: {
        ...fragments,
        [id]: fragment
      }
    });
    if (options.initialEvent) {
      this.trackEvent({
        event: fragment.initialEvent,
        category: fragment.category,
        properties: fragment.properties,
        sensitiveProperties: fragment.sensitiveProperties,
        page: fragment.page,
        referrer: fragment.referrer,
        revenue: fragment.revenue,
        value: fragment.value,
        currency: fragment.currency,
        environmentType: fragment.environmentType,
        actionId: options.actionId,
        uniqueIdentifier: options.uniqueIdentifier
      });
    }
    return fragment;
  }

  /**
   * Returns the fragment stored in memory with provided id or undefined if it
   * does not exist.
   *
   * @param {string} id - id of fragment to retrieve
   * @returns {[MetaMetricsEventFragment]}
   */
  getEventFragmentById(id) {
    const {
      fragments
    } = this.store.getState();
    const fragment = fragments[id];
    return fragment;
  }

  /**
   * Updates an event fragment in state
   *
   * @param {string} id - The fragment id to update
   * @param {MetaMetricsEventFragment} payload - Fragment settings and
   *  properties to initiate the fragment with.
   */
  updateEventFragment(id, payload) {
    const {
      fragments
    } = this.store.getState();
    const fragment = fragments[id];
    if (!fragment) {
      throw new Error(`Event fragment with id ${id} does not exist.`);
    }
    this.store.updateState({
      fragments: {
        ...fragments,
        [id]: (0, _lodash.merge)(fragments[id], {
          ...payload,
          lastUpdated: Date.now()
        })
      }
    });
  }

  /**
   * Finalizes a fragment, tracking either a success event or failure Event
   * and then removes the fragment from state.
   *
   * @param {string} id - UUID of the event fragment to be closed
   * @param {object} options
   * @param {boolean} [options.abandoned] - if true track the failure
   *  event instead of the success event
   * @param {MetaMetricsContext.page} [options.page] - page the final event
   *  occurred on. This will override whatever is set on the fragment
   * @param {MetaMetricsContext.referrer} [options.referrer] - Dapp that
   *  originated the fragment. This is for fallback only, the fragment referrer
   *  property will take precedence.
   */
  finalizeEventFragment(id, {
    abandoned = false,
    page,
    referrer
  } = {}) {
    const fragment = this.store.getState().fragments[id];
    if (!fragment) {
      throw new Error(`Funnel with id ${id} does not exist.`);
    }
    const eventName = abandoned ? fragment.failureEvent : fragment.successEvent;
    this.trackEvent({
      event: eventName,
      category: fragment.category,
      properties: fragment.properties,
      sensitiveProperties: fragment.sensitiveProperties,
      page: page ?? fragment.page,
      referrer: fragment.referrer ?? referrer,
      revenue: fragment.revenue,
      value: fragment.value,
      currency: fragment.currency,
      environmentType: fragment.environmentType,
      actionId: fragment.actionId,
      // We append success or failure to the unique-identifier so that the
      // messageId can still be idempotent, but so that it differs from the
      // initial event fired. The initial event was preventing new events from
      // making it to mixpanel because they were using the same unique ID as
      // the events processed in other parts of the fragment lifecycle.
      uniqueIdentifier: fragment.uniqueIdentifier ? `${fragment.uniqueIdentifier}-${abandoned ? 'failure' : 'success'}` : undefined
    });
    const {
      fragments
    } = this.store.getState();
    delete fragments[id];
    this.store.updateState({
      fragments
    });
  }

  /**
   * Calls this._identify with validated metaMetricsId and user traits if user is participating
   * in the MetaMetrics analytics program
   *
   * @param {object} userTraits
   */
  identify(userTraits) {
    const {
      metaMetricsId,
      participateInMetaMetrics
    } = this.state;
    if (!participateInMetaMetrics || !metaMetricsId || !userTraits) {
      return;
    }
    if (typeof userTraits !== 'object') {
      console.warn(`MetaMetricsController#identify: userTraits parameter must be an object. Received type: ${typeof userTraits}`);
      return;
    }
    const allValidTraits = this._buildValidTraits(userTraits);
    this._identify(allValidTraits);
  }

  // It sets an uninstall URL ("Sorry to see you go!" page),
  // which is opened if a user uninstalls the extension.
  updateExtensionUninstallUrl(participateInMetaMetrics, metaMetricsId) {
    const query = {};
    if (participateInMetaMetrics) {
      // We only want to track these things if a user opted into metrics.
      query.mmi = Buffer.from(metaMetricsId).toString('base64');
      query.env = this.environment;
      query.av = this.version;
    }
    const queryString = new URLSearchParams(query);

    // this.extension not currently defined in tests
    if (this.extension && this.extension.runtime) {
      this.extension.runtime.setUninstallURL(`${EXTENSION_UNINSTALL_URL}?${queryString}`);
    }
  }

  /**
   * Setter for the `participateInMetaMetrics` property
   *
   * @param {boolean} participateInMetaMetrics - Whether or not the user wants
   *  to participate in MetaMetrics
   * @returns {string|null} the string of the new metametrics id, or null
   *  if not set
   */
  setParticipateInMetaMetrics(participateInMetaMetrics) {
    let {
      metaMetricsId
    } = this.state;
    if (participateInMetaMetrics && !metaMetricsId) {
      metaMetricsId = this.generateMetaMetricsId();
    } else if (participateInMetaMetrics === false) {
      metaMetricsId = null;
    }
    this.store.updateState({
      participateInMetaMetrics,
      metaMetricsId
    });
    if (participateInMetaMetrics) {
      this.trackEventsAfterMetricsOptIn();
      this.clearEventsAfterMetricsOptIn();
    }

    ///: BEGIN:ONLY_INCLUDE_IN(build-main,build-beta,build-flask)
    this.updateExtensionUninstallUrl(participateInMetaMetrics, metaMetricsId);
    ///: END:ONLY_INCLUDE_IN

    return metaMetricsId;
  }
  get state() {
    return this.store.getState();
  }

  /**
   * track a page view with Segment
   *
   * @param {MetaMetricsPagePayload} payload - details of the page viewed
   * @param {MetaMetricsPageOptions} [options] - options for handling the page
   *  view
   */
  trackPage({
    name,
    params,
    environmentType,
    page,
    referrer,
    actionId
  }, options) {
    try {
      if (this.state.participateInMetaMetrics === false) {
        return;
      }
      if (this.state.participateInMetaMetrics === null && !(options !== null && options !== void 0 && options.isOptInPath)) {
        return;
      }
      const {
        metaMetricsId
      } = this.state;
      const idTrait = metaMetricsId ? 'userId' : 'anonymousId';
      const idValue = metaMetricsId ?? _metametrics.METAMETRICS_ANONYMOUS_ID;
      this._submitSegmentAPICall('page', {
        messageId: buildUniqueMessageId({
          actionId
        }),
        [idTrait]: idValue,
        name,
        properties: {
          params,
          locale: this.locale,
          chain_id: this.chainId,
          environment_type: environmentType
        },
        context: this._buildContext(referrer, page)
      });
    } catch (err) {
      this._captureException(err);
    }
  }

  /**
   * submits a metametrics event, not waiting for it to complete or allowing its error to bubble up
   *
   * @param {MetaMetricsEventPayload} payload - details of the event
   * @param {MetaMetricsEventOptions} [options] - options for handling/routing the event
   */
  trackEvent(payload, options) {
    // validation is not caught and handled
    this.validatePayload(payload);
    this.submitEvent(payload, options).catch(err => this._captureException(err));
  }

  /**
   * submits (or queues for submission) a metametrics event, performing necessary payload manipulation and
   * routing the event to the appropriate segment source. Will split events
   * with sensitiveProperties into two events, tracking the sensitiveProperties
   * with the anonymousId only.
   *
   * @param {MetaMetricsEventPayload} payload - details of the event
   * @param {MetaMetricsEventOptions} [options] - options for handling/routing the event
   * @returns {Promise<void>}
   */
  async submitEvent(payload, options) {
    this.validatePayload(payload);
    if (!this.state.participateInMetaMetrics && !(options !== null && options !== void 0 && options.isOptIn)) {
      return;
    }

    // We might track multiple events if sensitiveProperties is included, this array will hold
    // the promises returned from this._track.
    const events = [];
    if (payload.sensitiveProperties) {
      // sensitiveProperties will only be tracked using the anonymousId property and generic id
      // If the event options already specify to exclude the metaMetricsId we throw an error as
      // a signal to the developer that the event was implemented incorrectly
      if ((options === null || options === void 0 ? void 0 : options.excludeMetaMetricsId) === true) {
        throw new Error('sensitiveProperties was specified in an event payload that also set the excludeMetaMetricsId flag');
      }
      const combinedProperties = (0, _lodash.merge)(payload.sensitiveProperties, payload.properties);
      events.push(this._track(this._buildEventPayload({
        ...payload,
        properties: combinedProperties,
        isDuplicateAnonymizedEvent: true
      }), {
        ...options,
        excludeMetaMetricsId: true
      }));
    }
    events.push(this._track(this._buildEventPayload(payload), options));
    await Promise.all(events);
  }

  /**
   * validates a metametrics event
   *
   * @param {MetaMetricsEventPayload} payload - details of the event
   */
  validatePayload(payload) {
    // event and category are required fields for all payloads
    if (!payload.event || !payload.category) {
      throw new Error(`Must specify event and category. Event was: ${payload.event}. Category was: ${payload.category}. Payload keys were: ${Object.keys(payload)}. ${typeof payload.properties === 'object' ? `Payload property keys were: ${Object.keys(payload.properties)}` : ''}`);
    }
  }
  handleMetaMaskStateUpdate(newState) {
    const userTraits = this._buildUserTraitsObject(newState);
    if (userTraits) {
      this.identify(userTraits);
    }
  }

  // Track all queued events after a user opted into metrics.
  trackEventsAfterMetricsOptIn() {
    const {
      eventsBeforeMetricsOptIn
    } = this.store.getState();
    eventsBeforeMetricsOptIn.forEach(eventBeforeMetricsOptIn => {
      this.trackEvent(eventBeforeMetricsOptIn);
    });
  }

  // Once we track queued events after a user opts into metrics, we want to clear the event queue.
  clearEventsAfterMetricsOptIn() {
    this.store.updateState({
      eventsBeforeMetricsOptIn: []
    });
  }

  // It adds an event into a queue, which is only tracked if a user opts into metrics.
  addEventBeforeMetricsOptIn(event) {
    const prevState = this.store.getState().eventsBeforeMetricsOptIn;
    this.store.updateState({
      eventsBeforeMetricsOptIn: [...prevState, event]
    });
  }

  // Add or update traits for tracking.
  updateTraits(newTraits) {
    const {
      traits
    } = this.store.getState();
    this.store.updateState({
      traits: {
        ...traits,
        ...newTraits
      }
    });
  }

  /** PRIVATE METHODS */

  /**
   * Build the context object to attach to page and track events.
   *
   * @private
   * @param {Pick<MetaMetricsContext, 'referrer'>} [referrer] - dapp origin that initialized
   *  the notification window.
   * @param {Pick<MetaMetricsContext, 'page'>} [page] - page object describing the current
   *  view of the extension. Defaults to the background-process object.
   * @returns {MetaMetricsContext}
   */
  _buildContext(referrer, page = _metametrics.METAMETRICS_BACKGROUND_PAGE_OBJECT) {
    return {
      app: {
        name: 'MetaMask Extension',
        version: this.version
      },
      userAgent: window.navigator.userAgent,
      page,
      referrer
    };
  }

  /**
   * Build's the event payload, processing all fields into a format that can be
   * fed to Segment's track method
   *
   * @private
   * @param {
   *  Omit<MetaMetricsEventPayload, 'sensitiveProperties'>
   * } rawPayload - raw payload provided to trackEvent
   * @returns {SegmentEventPayload} formatted event payload for segment
   */
  _buildEventPayload(rawPayload) {
    const {
      event,
      properties,
      revenue,
      value,
      currency,
      category,
      page,
      referrer,
      environmentType = _app.ENVIRONMENT_TYPE_BACKGROUND
    } = rawPayload;
    return {
      event,
      messageId: buildUniqueMessageId(rawPayload),
      properties: {
        // These values are omitted from properties because they have special meaning
        // in segment. https://segment.com/docs/connections/spec/track/#properties.
        // to avoid accidentally using these inappropriately, you must add them as top
        // level properties on the event payload. We also exclude locale to prevent consumers
        // from overwriting this context level property. We track it as a property
        // because not all destinations map locale from context.
        ...(0, _lodash.omit)(properties, ['revenue', 'locale', 'currency', 'value']),
        revenue,
        value,
        currency,
        category,
        locale: this.locale,
        chain_id: (properties === null || properties === void 0 ? void 0 : properties.chain_id) ?? this.chainId,
        environment_type: environmentType
      },
      context: this._buildContext(referrer, page)
    };
  }

  /**
   * This method generates the MetaMetrics user traits object, omitting any
   * traits that have not changed since the last invocation of this method.
   *
   * @param {object} metamaskState - Full metamask state object.
   * @returns {MetaMetricsTraits | null} traits that have changed since last update
   */
  _buildUserTraitsObject(metamaskState) {
    const {
      traits,
      previousUserTraits
    } = this.store.getState();
    /** @type {MetaMetricsTraits} */
    const currentTraits = {
      [_metametrics.MetaMetricsUserTrait.AddressBookEntries]: (0, _lodash.sum)(Object.values(metamaskState.addressBook).map(_lodash.size)),
      [_metametrics.MetaMetricsUserTrait.InstallDateExt]: traits[_metametrics.MetaMetricsUserTrait.InstallDateExt] || '',
      [_metametrics.MetaMetricsUserTrait.LedgerConnectionType]: metamaskState.ledgerTransportType,
      [_metametrics.MetaMetricsUserTrait.NetworksAdded]: Object.values(metamaskState.networkConfigurations).map(networkConfiguration => networkConfiguration.chainId),
      [_metametrics.MetaMetricsUserTrait.NetworksWithoutTicker]: Object.values(metamaskState.networkConfigurations).filter(({
        ticker
      }) => !ticker).map(({
        chainId
      }) => chainId),
      [_metametrics.MetaMetricsUserTrait.NftAutodetectionEnabled]: metamaskState.useNftDetection,
      [_metametrics.MetaMetricsUserTrait.NumberOfAccounts]: Object.values(metamaskState.identities).length,
      [_metametrics.MetaMetricsUserTrait.NumberOfNftCollections]: this._getAllUniqueNFTAddressesLength(metamaskState.allNfts),
      [_metametrics.MetaMetricsUserTrait.NumberOfNfts]: this._getAllNFTsFlattened(metamaskState.allNfts).length,
      [_metametrics.MetaMetricsUserTrait.NumberOfTokens]: this._getNumberOfTokens(metamaskState),
      [_metametrics.MetaMetricsUserTrait.OpenseaApiEnabled]: metamaskState.openSeaEnabled,
      [_metametrics.MetaMetricsUserTrait.ThreeBoxEnabled]: false,
      // deprecated, hard-coded as false
      [_metametrics.MetaMetricsUserTrait.Theme]: metamaskState.theme || 'default',
      [_metametrics.MetaMetricsUserTrait.TokenDetectionEnabled]: metamaskState.useTokenDetection,
      [_metametrics.MetaMetricsUserTrait.SecurityProviders]: metamaskState.transactionSecurityCheckEnabled ? ['opensea'] : []
    };
    if (!previousUserTraits) {
      this.store.updateState({
        previousUserTraits: currentTraits
      });
      return currentTraits;
    }
    if (previousUserTraits && !(0, _lodash.isEqual)(previousUserTraits, currentTraits)) {
      const updates = (0, _lodash.pickBy)(currentTraits, (v, k) => !(0, _lodash.isEqual)(previousUserTraits[k], v));
      this.store.updateState({
        previousUserTraits: currentTraits
      });
      return updates;
    }
    return null;
  }

  /**
   * Returns a new object of all valid user traits. For dates, we transform them into ISO-8601 timestamp strings.
   *
   * @see {@link https://segment.com/docs/connections/spec/common/#timestamps}
   * @param {object} userTraits
   * @returns {object}
   */
  _buildValidTraits(userTraits) {
    return Object.entries(userTraits).reduce((validTraits, [key, value]) => {
      if (this._isValidTraitDate(value)) {
        validTraits[key] = value.toISOString();
      } else if (this._isValidTrait(value)) {
        validTraits[key] = value;
      } else {
        console.warn(`MetaMetricsController: "${key}" value is not a valid trait type`);
      }
      return validTraits;
    }, {});
  }
  /**
   * Returns the number of unique NFT addresses the user
   * possesses across all networks and accounts.
   *
   * @param {object} allNfts
   * @returns {number}
   */
  _getAllUniqueNFTAddressesLength(allNfts = {}) {
    const allNFTAddresses = this._getAllNFTsFlattened(allNfts).map(nft => nft.address);
    const uniqueAddresses = new Set(allNFTAddresses);
    return uniqueAddresses.size;
  }

  /**
   * @param {object} metamaskState
   * @returns number of unique token addresses
   */
  _getNumberOfTokens(metamaskState) {
    return Object.values(metamaskState.allTokens).reduce((result, accountsByChain) => {
      return result + (0, _lodash.sum)(Object.values(accountsByChain).map(_lodash.size));
    }, 0);
  }

  /**
   * Calls segment.identify with given user traits
   *
   * @see {@link https://segment.com/docs/connections/sources/catalog/libraries/server/node/#identify}
   * @private
   * @param {object} userTraits
   */
  _identify(userTraits) {
    const {
      metaMetricsId
    } = this.state;
    if (!userTraits || Object.keys(userTraits).length === 0) {
      console.warn('MetaMetricsController#_identify: No userTraits found');
      return;
    }
    try {
      this._submitSegmentAPICall('identify', {
        userId: metaMetricsId,
        traits: userTraits
      });
    } catch (err) {
      this._captureException(err);
    }
  }

  /**
   * Validates the trait value. Segment accepts any data type. We are adding validation here to
   * support data types for our Segment destination(s) e.g. MixPanel
   *
   * @param {*} value
   * @returns {boolean}
   */
  _isValidTrait(value) {
    const type = typeof value;
    return type === 'string' || type === 'boolean' || type === 'number' || this._isValidTraitArray(value) || this._isValidTraitDate(value);
  }
  /**
   * Perform validation on the payload and update the id type to use before
   * sending to Segment. Also examines the options to route and handle the
   * event appropriately.
   *
   * @private
   * @param {SegmentEventPayload} payload - properties to attach to event
   * @param {MetaMetricsEventOptions} [options] - options for routing and
   *  handling the event
   * @returns {Promise<void>}
   */
  _track(payload, options) {
    const {
      isOptIn,
      metaMetricsId: metaMetricsIdOverride,
      matomoEvent,
      flushImmediately
    } = options || {};
    let idType = 'userId';
    let idValue = this.state.metaMetricsId;
    let excludeMetaMetricsId = (options === null || options === void 0 ? void 0 : options.excludeMetaMetricsId) ?? false;
    // This is carried over from the old implementation, and will likely need
    // to be updated to work with the new tracking plan. I think we should use
    // a config setting for this instead of trying to match the event name
    const isSendFlow = Boolean(payload.event.match(/^send|^confirm/iu));
    if (isSendFlow) {
      excludeMetaMetricsId = true;
    }
    // If we are tracking sensitive data we will always use the anonymousId
    // property as well as our METAMETRICS_ANONYMOUS_ID. This prevents us from
    // associating potentially identifiable information with a specific id.
    // During the opt in flow we will track all events, but do so with the
    // anonymous id. The one exception to that rule is after the user opts in
    // to MetaMetrics. When that happens we receive back the user's new
    // MetaMetrics id before it is fully persisted to state. To avoid a race
    // condition we explicitly pass the new id to the track method. In that
    // case we will track the opt in event to the user's id. In all other cases
    // we use the metaMetricsId from state.
    if (excludeMetaMetricsId || isOptIn && !metaMetricsIdOverride) {
      idType = 'anonymousId';
      idValue = _metametrics.METAMETRICS_ANONYMOUS_ID;
    } else if (isOptIn && metaMetricsIdOverride) {
      idValue = metaMetricsIdOverride;
    }
    payload[idType] = idValue;

    // If this is an event on the old matomo schema, add a key to the payload
    // to designate it as such
    if (matomoEvent === true) {
      payload.properties.legacy_event = true;
    }

    // Promises will only resolve when the event is sent to segment. For any
    // event that relies on this promise being fulfilled before performing UI
    // updates, or otherwise delaying user interaction, supply the
    // 'flushImmediately' flag to the trackEvent method.
    return new Promise((resolve, reject) => {
      const callback = err => {
        if (err) {
          // The error that segment gives us has some manipulation done to it
          // that seemingly breaks with lockdown enabled. Creating a new error
          // here prevents the system from freezing when the network request to
          // segment fails for any reason.
          const safeError = new Error(err.message);
          safeError.stack = err.stack;
          return reject(safeError);
        }
        return resolve();
      };
      this._submitSegmentAPICall('track', payload, callback);
      if (flushImmediately) {
        this.segment.flush();
      }
    });
  }

  // Method below submits the request to analytics SDK.
  // It will also add event to controller store
  // and pass a callback to remove it from store once request is submitted to segment
  // Saving segmentApiCalls in controller store in MV3 ensures that events are tracked
  // even if service worker terminates before events are submiteed to segment.
  _submitSegmentAPICall(eventType, payload, callback) {
    const {
      metaMetricsId,
      participateInMetaMetrics
    } = this.state;
    if (!participateInMetaMetrics || !metaMetricsId) {
      return;
    }
    const messageId = payload.messageId || (0, _util.generateRandomId)();
    let timestamp = new Date();
    if (payload.timestamp) {
      const payloadDate = new Date(payload.timestamp);
      if ((0, _util.isValidDate)(payloadDate)) {
        timestamp = payloadDate;
      }
    }
    const modifiedPayload = {
      ...payload,
      messageId,
      timestamp
    };
    this.store.updateState({
      segmentApiCalls: {
        ...this.store.getState().segmentApiCalls,
        [messageId]: {
          eventType,
          payload: {
            ...modifiedPayload,
            timestamp: modifiedPayload.timestamp.toString()
          }
        }
      }
    });
    const modifiedCallback = result => {
      const {
        segmentApiCalls
      } = this.store.getState();
      delete segmentApiCalls[messageId];
      this.store.updateState({
        segmentApiCalls
      });
      return callback === null || callback === void 0 ? void 0 : callback(result);
    };
    this.segment[eventType](modifiedPayload, modifiedCallback);
  }
}
exports.default = MetaMetricsController;

}).call(this)}).call(this,require("buffer").Buffer)

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\metametrics.js",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\onboarding.js", {"@metamask/obs-store":"F:\\metamask-extension\\node_modules\\@metamask\\obs-store\\dist\\index.js","loglevel":"F:\\metamask-extension\\node_modules\\loglevel\\lib\\loglevel.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Conboarding.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _obsStore = require("@metamask/obs-store");
var _loglevel = _interopRequireDefault(require("loglevel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @typedef {object} InitState
 * @property {boolean} seedPhraseBackedUp Indicates whether the user has completed the seed phrase backup challenge
 * @property {boolean} completedOnboarding Indicates whether the user has completed the onboarding flow
 */

/**
 * @typedef {object} OnboardingOptions
 * @property {InitState} initState The initial controller state
 */
/**
 * Controller responsible for maintaining
 * state related to onboarding
 */
class OnboardingController {
  /**
   * Creates a new controller instance
   *
   * @param {OnboardingOptions} [opts] - Controller configuration parameters
   */
  constructor(opts = {}) {
    /**
     * Registering a site as having initiated onboarding
     *
     * @param {string} location - The location of the site registering
     * @param {string} tabId - The id of the tab registering
     */
    _defineProperty(this, "registerOnboarding", async (location, tabId) => {
      if (this.store.getState().completedOnboarding) {
        _loglevel.default.debug('Ignoring registerOnboarding; user already onboarded');
        return;
      }
      const onboardingTabs = {
        ...this.store.getState().onboardingTabs
      };
      if (!onboardingTabs[location] || onboardingTabs[location] !== tabId) {
        _loglevel.default.debug(`Registering onboarding tab at location '${location}' with tabId '${tabId}'`);
        onboardingTabs[location] = tabId;
        this.store.updateState({
          onboardingTabs
        });
      }
    });
    const initialTransientState = {
      onboardingTabs: {}
    };
    const initState = {
      seedPhraseBackedUp: null,
      firstTimeFlowType: null,
      completedOnboarding: false,
      ...opts.initState,
      ...initialTransientState
    };
    this.store = new _obsStore.ObservableStore(initState);
  }
  setSeedPhraseBackedUp(newSeedPhraseBackUpState) {
    this.store.updateState({
      seedPhraseBackedUp: newSeedPhraseBackUpState
    });
  }

  // /**
  //  * Sets the completedOnboarding state to true, indicating that the user has completed the
  //  * onboarding process.
  //  */
  async completeOnboarding() {
    this.store.updateState({
      completedOnboarding: true
    });
    return true;
  }

  /**
   * Setter for the `firstTimeFlowType` property
   *
   * @param {string} type - Indicates the type of first time flow - create or import - the user wishes to follow
   */
  setFirstTimeFlowType(type) {
    this.store.updateState({
      firstTimeFlowType: type
    });
  }
}
exports.default = OnboardingController;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\onboarding.js",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\permissions\\background-api.js", {"../../../../shared/constants/permissions":"F:\\metamask-extension\\shared\\constants\\permissions.ts","nanoid":"F:\\metamask-extension\\node_modules\\nanoid\\index.browser.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Cpermissions%5Cbackground-api.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPermissionBackgroundApiMethods = getPermissionBackgroundApiMethods;
var _nanoid = _interopRequireDefault(require("nanoid"));
var _permissions = require("../../../../shared/constants/permissions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function getPermissionBackgroundApiMethods(permissionController) {
  return {
    addPermittedAccount: (origin, account) => {
      const existing = permissionController.getCaveat(origin, _permissions.RestrictedMethods.eth_accounts, _permissions.CaveatTypes.restrictReturnedAccounts);
      if (existing.value.includes(account)) {
        return;
      }
      permissionController.updateCaveat(origin, _permissions.RestrictedMethods.eth_accounts, _permissions.CaveatTypes.restrictReturnedAccounts, [...existing.value, account]);
    },
    removePermittedAccount: (origin, account) => {
      const existing = permissionController.getCaveat(origin, _permissions.RestrictedMethods.eth_accounts, _permissions.CaveatTypes.restrictReturnedAccounts);
      if (!existing.value.includes(account)) {
        return;
      }
      const remainingAccounts = existing.value.filter(existingAccount => existingAccount !== account);
      if (remainingAccounts.length === 0) {
        permissionController.revokePermission(origin, _permissions.RestrictedMethods.eth_accounts);
      } else {
        permissionController.updateCaveat(origin, _permissions.RestrictedMethods.eth_accounts, _permissions.CaveatTypes.restrictReturnedAccounts, remainingAccounts);
      }
    },
    requestAccountsPermissionWithId: async origin => {
      const id = (0, _nanoid.default)();
      permissionController.requestPermissions({
        origin
      }, {
        eth_accounts: {}
      }, {
        id
      });
      return id;
    }
  };
}

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\permissions\\background-api.js",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\permissions\\caveat-mutators.js", {"../../../../shared/constants/permissions":"F:\\metamask-extension\\shared\\constants\\permissions.ts","@metamask/permission-controller":"F:\\metamask-extension\\node_modules\\@metamask\\permission-controller\\dist\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Cpermissions%5Ccaveat-mutators.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CaveatMutatorFactories = void 0;
var _permissionController = require("@metamask/permission-controller");
var _permissions = require("../../../../shared/constants/permissions");
/**
 * Factories that construct caveat mutator functions that are passed to
 * PermissionController.updatePermissionsByCaveat.
 */
const CaveatMutatorFactories = {
  [_permissions.CaveatTypes.restrictReturnedAccounts]: {
    removeAccount
  }
};

/**
 * Removes the target account from the value arrays of all
 * `restrictReturnedAccounts` caveats. No-ops if the target account is not in
 * the array, and revokes the parent permission if it's the only account in
 * the array.
 *
 * @param {string} targetAccount - The address of the account to remove from
 * all accounts permissions.
 * @param {string[]} existingAccounts - The account address array from the
 * account permissions.
 */
exports.CaveatMutatorFactories = CaveatMutatorFactories;
function removeAccount(targetAccount, existingAccounts) {
  const newAccounts = existingAccounts.filter(address => address !== targetAccount);
  if (newAccounts.length === existingAccounts.length) {
    return {
      operation: _permissionController.CaveatMutatorOperation.noop
    };
  } else if (newAccounts.length > 0) {
    return {
      operation: _permissionController.CaveatMutatorOperation.updateValue,
      value: newAccounts
    };
  }
  return {
    operation: _permissionController.CaveatMutatorOperation.revokePermission
  };
}

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\permissions\\caveat-mutators.js",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\permissions\\enums.js", {}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Cpermissions%5Cenums.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WALLET_PREFIX = exports.NOTIFICATION_NAMES = exports.LOG_METHOD_TYPES = exports.LOG_LIMIT = exports.LOG_IGNORE_METHODS = void 0;
const WALLET_PREFIX = 'wallet_';
exports.WALLET_PREFIX = WALLET_PREFIX;
const NOTIFICATION_NAMES = {
  accountsChanged: 'metamask_accountsChanged',
  unlockStateChanged: 'metamask_unlockStateChanged',
  chainChanged: 'metamask_chainChanged'
};
exports.NOTIFICATION_NAMES = NOTIFICATION_NAMES;
const LOG_IGNORE_METHODS = ['wallet_registerOnboarding', 'wallet_watchAsset'];
exports.LOG_IGNORE_METHODS = LOG_IGNORE_METHODS;
const LOG_METHOD_TYPES = {
  restricted: 'restricted',
  internal: 'internal'
};

/**
 * The permission activity log size limit.
 */
exports.LOG_METHOD_TYPES = LOG_METHOD_TYPES;
const LOG_LIMIT = 100;
exports.LOG_LIMIT = LOG_LIMIT;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\permissions\\enums.js",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\permissions\\index.js", {"./background-api":"F:\\metamask-extension\\app\\scripts\\controllers\\permissions\\background-api.js","./caveat-mutators":"F:\\metamask-extension\\app\\scripts\\controllers\\permissions\\caveat-mutators.js","./enums":"F:\\metamask-extension\\app\\scripts\\controllers\\permissions\\enums.js","./permission-log":"F:\\metamask-extension\\app\\scripts\\controllers\\permissions\\permission-log.js","./selectors":"F:\\metamask-extension\\app\\scripts\\controllers\\permissions\\selectors.js","./specifications":"F:\\metamask-extension\\app\\scripts\\controllers\\permissions\\specifications.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Cpermissions%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _caveatMutators = require("./caveat-mutators");
Object.keys(_caveatMutators).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _caveatMutators[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _caveatMutators[key];
    }
  });
});
var _backgroundApi = require("./background-api");
Object.keys(_backgroundApi).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _backgroundApi[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _backgroundApi[key];
    }
  });
});
var _enums = require("./enums");
Object.keys(_enums).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _enums[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _enums[key];
    }
  });
});
var _permissionLog = require("./permission-log");
Object.keys(_permissionLog).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _permissionLog[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _permissionLog[key];
    }
  });
});
var _specifications = require("./specifications");
Object.keys(_specifications).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _specifications[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _specifications[key];
    }
  });
});
var _selectors = require("./selectors");
Object.keys(_selectors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _selectors[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _selectors[key];
    }
  });
});

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\permissions\\index.js",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\permissions\\permission-log.js", {"../../../../shared/constants/permissions":"F:\\metamask-extension\\shared\\constants\\permissions.ts","./enums":"F:\\metamask-extension\\app\\scripts\\controllers\\permissions\\enums.js","@metamask/obs-store":"F:\\metamask-extension\\node_modules\\@metamask\\obs-store\\dist\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Cpermissions%5Cpermission-log.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PermissionLogController = void 0;
var _obsStore = require("@metamask/obs-store");
var _permissions = require("../../../../shared/constants/permissions");
var _enums = require("./enums");
/**
 * Controller with middleware for logging requests and responses to restricted
 * and permissions-related methods.
 */
class PermissionLogController {
  /**
   * @param {{ restrictedMethods: Set<string>, initState: Record<string, unknown> }} options - Options bag.
   */
  constructor({
    restrictedMethods,
    initState
  }) {
    this.restrictedMethods = restrictedMethods;
    this.store = new _obsStore.ObservableStore({
      permissionHistory: {},
      permissionActivityLog: [],
      ...initState
    });
  }

  /**
   * Get the restricted method activity log.
   *
   * @returns {Array<object>} The activity log.
   */
  getActivityLog() {
    return this.store.getState().permissionActivityLog;
  }

  /**
   * Update the restricted method activity log.
   *
   * @param {Array<object>} logs - The new activity log array.
   */
  updateActivityLog(logs) {
    this.store.updateState({
      permissionActivityLog: logs
    });
  }

  /**
   * Get the permission history log.
   *
   * @returns {object} The permissions history log.
   */
  getHistory() {
    return this.store.getState().permissionHistory;
  }

  /**
   * Update the permission history log.
   *
   * @param {object} history - The new permissions history log object.
   */
  updateHistory(history) {
    this.store.updateState({
      permissionHistory: history
    });
  }

  /**
   * Updates the exposed account history for the given origin.
   * Sets the 'last seen' time to Date.now() for the given accounts.
   * Does **not** update the 'lastApproved' time for the permission itself.
   * Returns if the accounts array is empty.
   *
   * @param {string} origin - The origin that the accounts are exposed to.
   * @param {Array<string>} accounts - The accounts.
   */
  updateAccountsHistory(origin, accounts) {
    if (accounts.length === 0) {
      return;
    }
    const accountToTimeMap = getAccountToTimeMap(accounts, Date.now());
    this.commitNewHistory(origin, {
      eth_accounts: {
        accounts: accountToTimeMap
      }
    });
  }

  /**
   * Create a permissions log middleware. Records permissions activity and history:
   *
   * Activity: requests and responses for restricted and most wallet_ methods.
   *
   * History: for each origin, the last time a permission was granted, including
   * which accounts were exposed, if any.
   *
   * @returns {JsonRpcEngineMiddleware} The permissions log middleware.
   */
  createMiddleware() {
    return (req, res, next, _end) => {
      let activityEntry, requestedMethods;
      const {
        origin,
        method
      } = req;
      const isInternal = method.startsWith(_enums.WALLET_PREFIX);

      // we only log certain methods
      if (!_enums.LOG_IGNORE_METHODS.includes(method) && (isInternal || this.restrictedMethods.has(method))) {
        activityEntry = this.logRequest(req, isInternal);
        if (method === `${_enums.WALLET_PREFIX}requestPermissions`) {
          // get the corresponding methods from the requested permissions so
          // that we can record permissions history
          requestedMethods = this.getRequestedMethods(req);
        }
      } else if (method === 'eth_requestAccounts') {
        // eth_requestAccounts is a special case; we need to extract the accounts
        // from it
        activityEntry = this.logRequest(req, isInternal);
        requestedMethods = ['eth_accounts'];
      } else {
        // no-op
        next();
        return;
      }

      // call next with a return handler for capturing the response
      next(cb => {
        const time = Date.now();
        this.logResponse(activityEntry, res, time);
        if (requestedMethods && !res.error && res.result) {
          // any permissions or accounts changes will be recorded on the response,
          // so we only log permissions history here
          this.logPermissionsHistory(requestedMethods, origin, res.result, time, method === 'eth_requestAccounts');
        }
        cb();
      });
    };
  }

  /**
   * Creates and commits an activity log entry, without response data.
   *
   * @param {object} request - The request object.
   * @param {boolean} isInternal - Whether the request is internal.
   */
  logRequest(request, isInternal) {
    const activityEntry = {
      id: request.id,
      method: request.method,
      methodType: isInternal ? _enums.LOG_METHOD_TYPES.internal : _enums.LOG_METHOD_TYPES.restricted,
      origin: request.origin,
      requestTime: Date.now(),
      responseTime: null,
      success: null
    };
    this.commitNewActivity(activityEntry);
    return activityEntry;
  }

  /**
   * Adds response data to an existing activity log entry.
   * Entry assumed already committed (i.e., in the log).
   *
   * @param {object} entry - The entry to add a response to.
   * @param {object} response - The response object.
   * @param {number} time - Output from Date.now()
   */
  logResponse(entry, response, time) {
    if (!entry || !response) {
      return;
    }

    // The JSON-RPC 2.0 specification defines "success" by the presence of
    // either the "result" or "error" property. The specification forbids
    // both properties from being present simultaneously, and our JSON-RPC
    // stack is spec-compliant at the time of writing.
    entry.success = Object.hasOwnProperty.call(response, 'result');
    entry.responseTime = time;
  }

  /**
   * Commit a new entry to the activity log.
   * Removes the oldest entry from the log if it exceeds the log limit.
   *
   * @param {object} entry - The activity log entry.
   */
  commitNewActivity(entry) {
    const logs = this.getActivityLog();

    // add new entry to end of log
    logs.push(entry);

    // remove oldest log if exceeding size limit
    if (logs.length > _enums.LOG_LIMIT) {
      logs.shift();
    }
    this.updateActivityLog(logs);
  }

  /**
   * Create new permissions history log entries, if any, and commit them.
   *
   * @param {Array<string>} requestedMethods - The method names corresponding to the requested permissions.
   * @param {string} origin - The origin of the permissions request.
   * @param {Array<IOcapLdCapability} result - The permissions request response.result.
   * @param {string} time - The time of the request, i.e. Date.now().
   * @param {boolean} isEthRequestAccounts - Whether the permissions request was 'eth_requestAccounts'.
   */
  logPermissionsHistory(requestedMethods, origin, result, time, isEthRequestAccounts) {
    let accounts, newEntries;
    if (isEthRequestAccounts) {
      accounts = result;
      const accountToTimeMap = getAccountToTimeMap(accounts, time);
      newEntries = {
        eth_accounts: {
          accounts: accountToTimeMap,
          lastApproved: time
        }
      };
    } else {
      // Records new "lastApproved" times for the granted permissions, if any.
      // Special handling for eth_accounts, in order to record the time the
      // accounts were last seen or approved by the origin.
      newEntries = result.map(perm => {
        if (perm.parentCapability === 'eth_accounts') {
          accounts = this.getAccountsFromPermission(perm);
        }
        return perm.parentCapability;
      }).reduce((acc, method) => {
        // all approved permissions will be included in the response,
        // not just the newly requested ones
        if (requestedMethods.includes(method)) {
          if (method === 'eth_accounts') {
            const accountToTimeMap = getAccountToTimeMap(accounts, time);
            acc[method] = {
              lastApproved: time,
              accounts: accountToTimeMap
            };
          } else {
            acc[method] = {
              lastApproved: time
            };
          }
        }
        return acc;
      }, {});
    }
    if (Object.keys(newEntries).length > 0) {
      this.commitNewHistory(origin, newEntries);
    }
  }

  /**
   * Commit new entries to the permissions history log.
   * Merges the history for the given origin, overwriting existing entries
   * with the same key (permission name).
   *
   * @param {string} origin - The requesting origin.
   * @param {object} newEntries - The new entries to commit.
   */
  commitNewHistory(origin, newEntries) {
    // a simple merge updates most permissions
    const history = this.getHistory();
    const newOriginHistory = {
      ...history[origin],
      ...newEntries
    };

    // eth_accounts requires special handling, because of information
    // we store about the accounts
    const existingEthAccountsEntry = history[origin] && history[origin].eth_accounts;
    const newEthAccountsEntry = newEntries.eth_accounts;
    if (existingEthAccountsEntry && newEthAccountsEntry) {
      // we may intend to update just the accounts, not the permission
      // itself
      const lastApproved = newEthAccountsEntry.lastApproved || existingEthAccountsEntry.lastApproved;

      // merge old and new eth_accounts history entries
      newOriginHistory.eth_accounts = {
        lastApproved,
        accounts: {
          ...existingEthAccountsEntry.accounts,
          ...newEthAccountsEntry.accounts
        }
      };
    }
    history[origin] = newOriginHistory;
    this.updateHistory(history);
  }

  /**
   * Get all requested methods from a permissions request.
   *
   * @param {object} request - The request object.
   * @returns {Array<string>} The names of the requested permissions.
   */
  getRequestedMethods(request) {
    if (!request.params || !request.params[0] || typeof request.params[0] !== 'object' || Array.isArray(request.params[0])) {
      return null;
    }
    return Object.keys(request.params[0]);
  }

  /**
   * Get the permitted accounts from an eth_accounts permissions object.
   * Returns an empty array if the permission is not eth_accounts.
   *
   * @param {object} perm - The permissions object.
   * @returns {Array<string>} The permitted accounts.
   */
  getAccountsFromPermission(perm) {
    if (perm.parentCapability !== 'eth_accounts' || !perm.caveats) {
      return [];
    }
    const accounts = new Set();
    for (const caveat of perm.caveats) {
      if (caveat.type === _permissions.CaveatTypes.restrictReturnedAccounts && Array.isArray(caveat.value)) {
        for (const value of caveat.value) {
          accounts.add(value);
        }
      }
    }
    return [...accounts];
  }
}

// helper functions

/**
 * Get a map from account addresses to the given time.
 *
 * @param {Array<string>} accounts - An array of addresses.
 * @param {number} time - A time, e.g. Date.now().
 * @returns {object} A string:number map of addresses to time.
 */
exports.PermissionLogController = PermissionLogController;
function getAccountToTimeMap(accounts, time) {
  return accounts.reduce((acc, account) => ({
    ...acc,
    [account]: time
  }), {});
}

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\permissions\\permission-log.js",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\permissions\\selectors.js", {"../../../../shared/constants/permissions":"F:\\metamask-extension\\shared\\constants\\permissions.ts","reselect":"F:\\metamask-extension\\node_modules\\reselect\\lib\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Cpermissions%5Cselectors.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPermittedAccountsByOrigin = exports.getChangedAccounts = void 0;
var _reselect = require("reselect");
var _permissions = require("../../../../shared/constants/permissions");
/**
 * This file contains selectors for PermissionController selector event
 * subscriptions, used to detect whenever a subject's accounts change so that
 * we can notify the subject via the `accountsChanged` provider event.
 */
/**
 * @param {Record<string, Record<string, unknown>>} state - The
 * PermissionController state.
 * @returns {Record<string, unknown>} The PermissionController subjects.
 */
const getSubjects = state => state.subjects;

/**
 * Get the permitted accounts for each subject, keyed by origin.
 * The values of the returned map are immutable values from the
 * PermissionController state.
 *
 * @returns {Map<string, string[]>} The current origin:accounts[] map.
 */
const getPermittedAccountsByOrigin = (0, _reselect.createSelector)(getSubjects, subjects => {
  return Object.values(subjects).reduce((originToAccountsMap, subject) => {
    var _subject$permissions, _subject$permissions$;
    const caveat = (_subject$permissions = subject.permissions) === null || _subject$permissions === void 0 ? void 0 : (_subject$permissions$ = _subject$permissions.eth_accounts) === null || _subject$permissions$ === void 0 ? void 0 : _subject$permissions$.caveats.find(({
      type
    }) => type === _permissions.CaveatTypes.restrictReturnedAccounts);
    if (caveat) {
      originToAccountsMap.set(subject.origin, caveat.value);
    }
    return originToAccountsMap;
  }, new Map());
});

/**
 * Given the current and previous exposed accounts for each PermissionController
 * subject, returns a new map containing all accounts that have changed.
 * The values of each map must be immutable values directly from the
 * PermissionController state, or an empty array instantiated in this
 * function.
 *
 * @param {Map<string, string[]>} newAccountsMap - The new origin:accounts[] map.
 * @param {Map<string, string[]>} [previousAccountsMap] - The previous origin:accounts[] map.
 * @returns {Map<string, string[]>} The origin:accounts[] map of changed accounts.
 */
exports.getPermittedAccountsByOrigin = getPermittedAccountsByOrigin;
const getChangedAccounts = (newAccountsMap, previousAccountsMap) => {
  if (previousAccountsMap === undefined) {
    return newAccountsMap;
  }
  const changedAccounts = new Map();
  if (newAccountsMap === previousAccountsMap) {
    return changedAccounts;
  }
  const newOrigins = new Set([...newAccountsMap.keys()]);
  for (const origin of previousAccountsMap.keys()) {
    const newAccounts = newAccountsMap.get(origin) ?? [];

    // The values of these maps are references to immutable values, which is why
    // a strict equality check is enough for diffing. The values are either from
    // PermissionController state, or an empty array initialized in the previous
    // call to this function. `newAccountsMap` will never contain any empty
    // arrays.
    if (previousAccountsMap.get(origin) !== newAccounts) {
      changedAccounts.set(origin, newAccounts);
    }
    newOrigins.delete(origin);
  }

  // By now, newOrigins is either empty or contains some number of previously
  // unencountered origins, and all of their accounts have "changed".
  for (const origin of newOrigins.keys()) {
    changedAccounts.set(origin, newAccountsMap.get(origin));
  }
  return changedAccounts;
};
exports.getChangedAccounts = getChangedAccounts;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\permissions\\selectors.js",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\permissions\\specifications.js", {"../../../../shared/constants/permissions":"F:\\metamask-extension\\shared\\constants\\permissions.ts","@metamask/permission-controller":"F:\\metamask-extension\\node_modules\\@metamask\\permission-controller\\dist\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Cpermissions%5Cspecifications.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unrestrictedMethods = exports.getPermissionSpecifications = exports.getCaveatSpecifications = void 0;
var _permissionController = require("@metamask/permission-controller");
var _permissions = require("../../../../shared/constants/permissions");
/**
 * This file contains the specifications of the permissions and caveats
 * that are recognized by our permission system. See the PermissionController
 * README in @metamask/controllers for details.
 */
/**
 * The "keys" of all of permissions recognized by the PermissionController.
 * Permission keys and names have distinct meanings in the permission system.
 */
const PermissionNames = Object.freeze({
  ..._permissions.RestrictedMethods
});

/**
 * Factory functions for all caveat types recognized by the
 * PermissionController.
 */
const CaveatFactories = Object.freeze({
  [_permissions.CaveatTypes.restrictReturnedAccounts]: accounts => {
    return {
      type: _permissions.CaveatTypes.restrictReturnedAccounts,
      value: accounts
    };
  }
});

/**
 * A PreferencesController identity object.
 *
 * @typedef {object} Identity
 * @property {string} address - The address of the identity.
 * @property {string} name - The name of the identity.
 * @property {number} [lastSelected] - Unix timestamp of when the identity was
 * last selected in the UI.
 */

/**
 * Gets the specifications for all caveats that will be recognized by the
 * PermissionController.
 *
 * @param {{
 *   getIdentities: () => Record<string, Identity>,
 * }} options - Options bag.
 */
const getCaveatSpecifications = ({
  getIdentities
}) => {
  return {
    [_permissions.CaveatTypes.restrictReturnedAccounts]: {
      type: _permissions.CaveatTypes.restrictReturnedAccounts,
      decorator: (method, caveat) => {
        return async args => {
          const result = await method(args);
          return result.filter(account => caveat.value.includes(account));
        };
      },
      validator: (caveat, _origin, _target) => validateCaveatAccounts(caveat.value, getIdentities)
    }
  };
};

/**
 * Gets the specifications for all permissions that will be recognized by the
 * PermissionController.
 *
 * @param {{
 *   getAllAccounts: () => Promise<string[]>,
 *   getIdentities: () => Record<string, Identity>,
 * }} options - Options bag.
 * @param options.getAllAccounts - A function that returns all Ethereum accounts
 * in the current MetaMask instance.
 * @param options.getIdentities - A function that returns the
 * `PreferencesController` identity objects for all Ethereum accounts in the
 * @param options.captureKeyringTypesWithMissingIdentities - A function that
 * captures extra error information about the "Missing identity for address"
 * error.
 * current MetaMask instance.
 */
exports.getCaveatSpecifications = getCaveatSpecifications;
const getPermissionSpecifications = ({
  getAllAccounts,
  getIdentities,
  captureKeyringTypesWithMissingIdentities
}) => {
  return {
    [PermissionNames.eth_accounts]: {
      permissionType: _permissionController.PermissionType.RestrictedMethod,
      targetName: PermissionNames.eth_accounts,
      allowedCaveats: [_permissions.CaveatTypes.restrictReturnedAccounts],
      factory: (permissionOptions, requestData) => {
        if (Array.isArray(permissionOptions.caveats)) {
          throw new Error(`${PermissionNames.eth_accounts} error: Received unexpected caveats. Any permitted caveats will be added automatically.`);
        }

        // This value will be further validated as part of the caveat.
        if (!requestData.approvedAccounts) {
          throw new Error(`${PermissionNames.eth_accounts} error: No approved accounts specified.`);
        }
        return (0, _permissionController.constructPermission)({
          ...permissionOptions,
          caveats: [CaveatFactories[_permissions.CaveatTypes.restrictReturnedAccounts](requestData.approvedAccounts)]
        });
      },
      methodImplementation: async _args => {
        const accounts = await getAllAccounts();
        const identities = getIdentities();
        return accounts.sort((firstAddress, secondAddress) => {
          if (!identities[firstAddress]) {
            captureKeyringTypesWithMissingIdentities(identities, accounts);
            throw new Error(`Missing identity for address: "${firstAddress}".`);
          } else if (!identities[secondAddress]) {
            captureKeyringTypesWithMissingIdentities(identities, accounts);
            throw new Error(`Missing identity for address: "${secondAddress}".`);
          } else if (identities[firstAddress].lastSelected === identities[secondAddress].lastSelected) {
            return 0;
          } else if (identities[firstAddress].lastSelected === undefined) {
            return 1;
          } else if (identities[secondAddress].lastSelected === undefined) {
            return -1;
          }
          return identities[secondAddress].lastSelected - identities[firstAddress].lastSelected;
        });
      },
      validator: (permission, _origin, _target) => {
        const {
          caveats
        } = permission;
        if (!caveats || caveats.length !== 1 || caveats[0].type !== _permissions.CaveatTypes.restrictReturnedAccounts) {
          throw new Error(`${PermissionNames.eth_accounts} error: Invalid caveats. There must be a single caveat of type "${_permissions.CaveatTypes.restrictReturnedAccounts}".`);
        }
      }
    }
  };
};

/**
 * Validates the accounts associated with a caveat. In essence, ensures that
 * the accounts value is an array of non-empty strings, and that each string
 * corresponds to a PreferencesController identity.
 *
 * @param {string[]} accounts - The accounts associated with the caveat.
 * @param {() => Record<string, Identity>} getIdentities - Gets all
 * PreferencesController identities.
 */
exports.getPermissionSpecifications = getPermissionSpecifications;
function validateCaveatAccounts(accounts, getIdentities) {
  if (!Array.isArray(accounts) || accounts.length === 0) {
    throw new Error(`${PermissionNames.eth_accounts} error: Expected non-empty array of Ethereum addresses.`);
  }
  const identities = getIdentities();
  accounts.forEach(address => {
    if (!address || typeof address !== 'string') {
      throw new Error(`${PermissionNames.eth_accounts} error: Expected an array of Ethereum addresses. Received: "${address}".`);
    }
    if (!identities[address]) {
      throw new Error(`${PermissionNames.eth_accounts} error: Received unrecognized address: "${address}".`);
    }
  });
}

/**
 * All unrestricted methods recognized by the PermissionController.
 * Unrestricted methods are ignored by the permission system, but every
 * JSON-RPC request seen by the permission system must correspond to a
 * restricted or unrestricted method, or the request will be rejected with a
 * "method not found" error.
 */
const unrestrictedMethods = Object.freeze(['eth_blockNumber', 'eth_call', 'eth_chainId', 'eth_coinbase', 'eth_decrypt', 'eth_estimateGas', 'eth_feeHistory', 'eth_gasPrice', 'eth_getBalance', 'eth_getBlockByHash', 'eth_getBlockByNumber', 'eth_getBlockTransactionCountByHash', 'eth_getBlockTransactionCountByNumber', 'eth_getCode', 'eth_getEncryptionPublicKey', 'eth_getFilterChanges', 'eth_getFilterLogs', 'eth_getLogs', 'eth_getProof', 'eth_getStorageAt', 'eth_getTransactionByBlockHashAndIndex', 'eth_getTransactionByBlockNumberAndIndex', 'eth_getTransactionByHash', 'eth_getTransactionCount', 'eth_getTransactionReceipt', 'eth_getUncleByBlockHashAndIndex', 'eth_getUncleByBlockNumberAndIndex', 'eth_getUncleCountByBlockHash', 'eth_getUncleCountByBlockNumber', 'eth_getWork', 'eth_hashrate', 'eth_mining', 'eth_newBlockFilter', 'eth_newFilter', 'eth_newPendingTransactionFilter', 'eth_protocolVersion', 'eth_sendRawTransaction', 'eth_sendTransaction', 'eth_sign', 'eth_signTypedData', 'eth_signTypedData_v1', 'eth_signTypedData_v3', 'eth_signTypedData_v4', 'eth_submitHashrate', 'eth_submitWork', 'eth_syncing', 'eth_uninstallFilter', 'metamask_getProviderState', 'metamask_watchAsset', 'net_listening', 'net_peerCount', 'net_version', 'personal_ecRecover', 'personal_sign', 'wallet_watchAsset', 'web3_clientVersion', 'web3_sha3']);
exports.unrestrictedMethods = unrestrictedMethods;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\permissions\\specifications.js",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\preferences.js", {"../../../shared/constants/hardware-wallets":"F:\\metamask-extension\\shared\\constants\\hardware-wallets.ts","../../../shared/constants/network":"F:\\metamask-extension\\shared\\constants\\network.ts","../../../shared/constants/preferences":"F:\\metamask-extension\\shared\\constants\\preferences.ts","../../../shared/modules/network.utils":"F:\\metamask-extension\\shared\\modules\\network.utils.ts","@metamask/obs-store":"F:\\metamask-extension\\node_modules\\@metamask\\obs-store\\dist\\index.js","eth-sig-util":"F:\\metamask-extension\\node_modules\\eth-sig-util\\dist\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Cpreferences.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _obsStore = require("@metamask/obs-store");
var _ethSigUtil = require("eth-sig-util");
var _network = require("../../../shared/constants/network");
var _hardwareWallets = require("../../../shared/constants/hardware-wallets");
var _preferences = require("../../../shared/constants/preferences");
var _network2 = require("../../../shared/modules/network.utils");
class PreferencesController {
  /**
   *
   * @typedef {object} PreferencesController
   * @param {object} opts - Overrides the defaults for the initial state of this.store
   * @property {object} store The stored object containing a users preferences, stored in local storage
   * @property {boolean} store.useBlockie The users preference for blockie identicons within the UI
   * @property {boolean} store.useNonceField The users preference for nonce field within the UI
   * @property {object} store.featureFlags A key-boolean map, where keys refer to features and booleans to whether the
   * user wishes to see that feature.
   *
   * Feature flags can be set by the global function `setPreference(feature, enabled)`, and so should not expose any sensitive behavior.
   * @property {object} store.knownMethodData Contains all data methods known by the user
   * @property {string} store.currentLocale The preferred language locale key
   * @property {string} store.selectedAddress A hex string that matches the currently selected address in the app
   */
  constructor(opts = {}) {
    const initState = {
      useBlockie: false,
      useNonceField: false,
      usePhishDetect: true,
      dismissSeedBackUpReminder: false,
      disabledRpcMethodPreferences: {
        eth_sign: false
      },
      useMultiAccountBalanceChecker: true,
      // set to true means the dynamic list from the API is being used
      // set to false will be using the static list from contract-metadata
      useTokenDetection: false,
      useNftDetection: false,
      useCurrencyRateCheck: true,
      openSeaEnabled: false,
      advancedGasFee: null,
      // WARNING: Do not use feature flags for security-sensitive things.
      // Feature flag toggling is available in the global namespace
      // for convenient testing of pre-release features, and should never
      // perform sensitive operations.
      featureFlags: {
        showIncomingTransactions: true
      },
      knownMethodData: {},
      currentLocale: opts.initLangCode,
      identities: {},
      lostIdentities: {},
      forgottenPassword: false,
      preferences: {
        autoLockTimeLimit: undefined,
        showFiatInTestnets: false,
        showTestNetworks: false,
        useNativeCurrencyAsPrimaryCurrency: true,
        hideZeroBalanceTokens: false
      },
      // ENS decentralized website resolution
      ipfsGateway: _network.IPFS_DEFAULT_GATEWAY_URL,
      infuraBlocked: null,
      ledgerTransportType: window.navigator.hid ? _hardwareWallets.LedgerTransportTypes.webhid : _hardwareWallets.LedgerTransportTypes.u2f,
      snapRegistryList: {},
      transactionSecurityCheckEnabled: false,
      theme: _preferences.ThemeType.os,
      isLineaMainnetReleased: false,
      ...opts.initState
    };
    this.network = opts.network;
    this._onInfuraIsBlocked = opts.onInfuraIsBlocked;
    this._onInfuraIsUnblocked = opts.onInfuraIsUnblocked;
    this.store = new _obsStore.ObservableStore(initState);
    this.store.setMaxListeners(13);
    this.tokenListController = opts.tokenListController;
    this._subscribeToInfuraAvailability();
    global.setPreference = (key, value) => {
      return this.setFeatureFlag(key, value);
    };
    this._showShouldLineaMainnetNetwork();
  }
  // PUBLIC METHODS

  /**
   * Sets the {@code forgottenPassword} state property
   *
   * @param {boolean} forgottenPassword - whether or not the user has forgotten their password
   */
  setPasswordForgotten(forgottenPassword) {
    this.store.updateState({
      forgottenPassword
    });
  }

  /**
   * Setter for the `useBlockie` property
   *
   * @param {boolean} val - Whether or not the user prefers blockie indicators
   */
  setUseBlockie(val) {
    this.store.updateState({
      useBlockie: val
    });
  }

  /**
   * Setter for the `useNonceField` property
   *
   * @param {boolean} val - Whether or not the user prefers to set nonce
   */
  setUseNonceField(val) {
    this.store.updateState({
      useNonceField: val
    });
  }

  /**
   * Setter for the `usePhishDetect` property
   *
   * @param {boolean} val - Whether or not the user prefers phishing domain protection
   */
  setUsePhishDetect(val) {
    this.store.updateState({
      usePhishDetect: val
    });
  }

  /**
   * Setter for the `useMultiAccountBalanceChecker` property
   *
   * @param {boolean} val - Whether or not the user prefers to turn off/on all security settings
   */
  setUseMultiAccountBalanceChecker(val) {
    this.store.updateState({
      useMultiAccountBalanceChecker: val
    });
  }

  /**
   * Setter for the `useTokenDetection` property
   *
   * @param {boolean} val - Whether or not the user prefers to use the static token list or dynamic token list from the API
   */
  setUseTokenDetection(val) {
    this.store.updateState({
      useTokenDetection: val
    });
    this.tokenListController.updatePreventPollingOnNetworkRestart(!val);
    if (val) {
      this.tokenListController.start();
    } else {
      this.tokenListController.clearingTokenListData();
      this.tokenListController.stop();
    }
  }

  /**
   * Setter for the `useNftDetection` property
   *
   * @param {boolean} useNftDetection - Whether or not the user prefers to autodetect NFTs.
   */
  setUseNftDetection(useNftDetection) {
    this.store.updateState({
      useNftDetection
    });
  }

  /**
   * Setter for the `useCurrencyRateCheck` property
   *
   * @param {boolean} val - Whether or not the user prefers to use currency rate check for ETH and tokens.
   */
  setUseCurrencyRateCheck(val) {
    this.store.updateState({
      useCurrencyRateCheck: val
    });
  }

  /**
   * Setter for the `openSeaEnabled` property
   *
   * @param {boolean} openSeaEnabled - Whether or not the user prefers to use the OpenSea API for NFTs data.
   */
  setOpenSeaEnabled(openSeaEnabled) {
    this.store.updateState({
      openSeaEnabled
    });
  }

  /**
   * Setter for the `advancedGasFee` property
   *
   * @param {object} val - holds the maxBaseFee and PriorityFee that the user set as default advanced settings.
   */
  setAdvancedGasFee(val) {
    this.store.updateState({
      advancedGasFee: val
    });
  }

  /**
   * Setter for the `theme` property
   *
   * @param {string} val - 'default' or 'dark' value based on the mode selected by user.
   */
  setTheme(val) {
    this.store.updateState({
      theme: val
    });
  }

  /**
   * Setter for the `transactionSecurityCheckEnabled` property
   *
   * @param transactionSecurityCheckEnabled
   */
  setTransactionSecurityCheckEnabled(transactionSecurityCheckEnabled) {
    this.store.updateState({
      transactionSecurityCheckEnabled
    });
  }

  /**
   * Add new methodData to state, to avoid requesting this information again through Infura
   *
   * @param {string} fourBytePrefix - Four-byte method signature
   * @param {string} methodData - Corresponding data method
   */
  addKnownMethodData(fourBytePrefix, methodData) {
    const {
      knownMethodData
    } = this.store.getState();
    knownMethodData[fourBytePrefix] = methodData;
    this.store.updateState({
      knownMethodData
    });
  }

  /**
   * Setter for the `currentLocale` property
   *
   * @param {string} key - he preferred language locale key
   */
  setCurrentLocale(key) {
    const textDirection = ['ar', 'dv', 'fa', 'he', 'ku'].includes(key) ? 'rtl' : 'auto';
    this.store.updateState({
      currentLocale: key,
      textDirection
    });
    return textDirection;
  }

  /**
   * Updates identities to only include specified addresses. Removes identities
   * not included in addresses array
   *
   * @param {string[]} addresses - An array of hex addresses
   */
  setAddresses(addresses) {
    const oldIdentities = this.store.getState().identities;
    const identities = addresses.reduce((ids, address, index) => {
      const oldId = oldIdentities[address] || {};
      ids[address] = {
        name: `Account ${index + 1}`,
        address,
        ...oldId
      };
      return ids;
    }, {});
    this.store.updateState({
      identities
    });
  }

  /**
   * Removes an address from state
   *
   * @param {string} address - A hex address
   * @returns {string} the address that was removed
   */
  removeAddress(address) {
    const {
      identities
    } = this.store.getState();
    if (!identities[address]) {
      throw new Error(`${address} can't be deleted cause it was not found`);
    }
    delete identities[address];
    this.store.updateState({
      identities
    });

    // If the selected account is no longer valid,
    // select an arbitrary other account:
    if (address === this.getSelectedAddress()) {
      const [selected] = Object.keys(identities);
      this.setSelectedAddress(selected);
    }
    return address;
  }

  /**
   * Adds addresses to the identities object without removing identities
   *
   * @param {string[]} addresses - An array of hex addresses
   */
  addAddresses(addresses) {
    const {
      identities
    } = this.store.getState();
    addresses.forEach(address => {
      // skip if already exists
      if (identities[address]) {
        return;
      }
      // add missing identity
      const identityCount = Object.keys(identities).length;
      identities[address] = {
        name: `Account ${identityCount + 1}`,
        address
      };
    });
    this.store.updateState({
      identities
    });
  }

  /**
   * Synchronizes identity entries with known accounts.
   * Removes any unknown identities, and returns the resulting selected address.
   *
   * @param {Array<string>} addresses - known to the vault.
   * @returns {Promise<string>} selectedAddress the selected address.
   */
  syncAddresses(addresses) {
    if (!Array.isArray(addresses) || addresses.length === 0) {
      throw new Error('Expected non-empty array of addresses. Error #11201');
    }
    const {
      identities,
      lostIdentities
    } = this.store.getState();
    const newlyLost = {};
    Object.keys(identities).forEach(identity => {
      if (!addresses.includes(identity)) {
        newlyLost[identity] = identities[identity];
        delete identities[identity];
      }
    });

    // Identities are no longer present.
    if (Object.keys(newlyLost).length > 0) {
      // store lost accounts
      Object.keys(newlyLost).forEach(key => {
        lostIdentities[key] = newlyLost[key];
      });
    }
    this.store.updateState({
      identities,
      lostIdentities
    });
    this.addAddresses(addresses);

    // If the selected account is no longer valid,
    // select an arbitrary other account:
    let selected = this.getSelectedAddress();
    if (!addresses.includes(selected)) {
      [selected] = addresses;
      this.setSelectedAddress(selected);
    }
    return selected;
  }

  /**
   * Setter for the `selectedAddress` property
   *
   * @param {string} _address - A new hex address for an account
   */
  setSelectedAddress(_address) {
    const address = (0, _ethSigUtil.normalize)(_address);
    const {
      identities
    } = this.store.getState();
    const selectedIdentity = identities[address];
    if (!selectedIdentity) {
      throw new Error(`Identity for '${address} not found`);
    }
    selectedIdentity.lastSelected = Date.now();
    this.store.updateState({
      identities,
      selectedAddress: address
    });
  }

  /**
   * Getter for the `selectedAddress` property
   *
   * @returns {string} The hex address for the currently selected account
   */
  getSelectedAddress() {
    return this.store.getState().selectedAddress;
  }

  /**
   * Sets a custom label for an account
   *
   * @param {string} account - the account to set a label for
   * @param {string} label - the custom label for the account
   * @returns {Promise<string>}
   */
  async setAccountLabel(account, label) {
    if (!account) {
      throw new Error(`setAccountLabel requires a valid address, got ${String(account)}`);
    }
    const address = (0, _ethSigUtil.normalize)(account);
    const {
      identities
    } = this.store.getState();
    identities[address] = identities[address] || {};
    identities[address].name = label;
    this.store.updateState({
      identities
    });
    return label;
  }

  /**
   * Updates the `featureFlags` property, which is an object. One property within that object will be set to a boolean.
   *
   * @param {string} feature - A key that corresponds to a UI feature.
   * @param {boolean} activated - Indicates whether or not the UI feature should be displayed
   * @returns {Promise<object>} Promises a new object; the updated featureFlags object.
   */
  async setFeatureFlag(feature, activated) {
    const currentFeatureFlags = this.store.getState().featureFlags;
    const updatedFeatureFlags = {
      ...currentFeatureFlags,
      [feature]: activated
    };
    this.store.updateState({
      featureFlags: updatedFeatureFlags
    });
    return updatedFeatureFlags;
  }

  /**
   * Updates the `preferences` property, which is an object. These are user-controlled features
   * found in the settings page.
   *
   * @param {string} preference - The preference to enable or disable.
   * @param {boolean} value - Indicates whether or not the preference should be enabled or disabled.
   * @returns {Promise<object>} Promises a new object; the updated preferences object.
   */
  async setPreference(preference, value) {
    const currentPreferences = this.getPreferences();
    const updatedPreferences = {
      ...currentPreferences,
      [preference]: value
    };
    this.store.updateState({
      preferences: updatedPreferences
    });
    return updatedPreferences;
  }

  /**
   * A getter for the `preferences` property
   *
   * @returns {object} A key-boolean map of user-selected preferences.
   */
  getPreferences() {
    return this.store.getState().preferences;
  }

  /**
   * A getter for the `ipfsGateway` property
   *
   * @returns {string} The current IPFS gateway domain
   */
  getIpfsGateway() {
    return this.store.getState().ipfsGateway;
  }

  /**
   * A setter for the `ipfsGateway` property
   *
   * @param {string} domain - The new IPFS gateway domain
   * @returns {Promise<string>} A promise of the update IPFS gateway domain
   */
  async setIpfsGateway(domain) {
    this.store.updateState({
      ipfsGateway: domain
    });
    return domain;
  }

  /**
   * A setter for the `ledgerTransportType` property.
   *
   * @param {string} ledgerTransportType - Either 'ledgerLive', 'webhid' or 'u2f'
   * @returns {string} The transport type that was set.
   */
  setLedgerTransportPreference(ledgerTransportType) {
    this.store.updateState({
      ledgerTransportType
    });
    return ledgerTransportType;
  }

  /**
   * A getter for the `ledgerTransportType` property.
   *
   * @returns {string} The current preferred Ledger transport type.
   */
  getLedgerTransportPreference() {
    return this.store.getState().ledgerTransportType;
  }

  /**
   * A setter for the user preference to dismiss the seed phrase backup reminder
   *
   * @param {bool} dismissSeedBackUpReminder - User preference for dismissing the back up reminder.
   */
  async setDismissSeedBackUpReminder(dismissSeedBackUpReminder) {
    await this.store.updateState({
      dismissSeedBackUpReminder
    });
  }

  /**
   * A setter for the user preference to enable/disable rpc methods
   *
   * @param {string} methodName - The RPC method name to change the setting of
   * @param {bool} isEnabled - true to enable the rpc method
   */
  async setDisabledRpcMethodPreference(methodName, isEnabled) {
    const currentRpcMethodPreferences = this.store.getState().disabledRpcMethodPreferences;
    const updatedRpcMethodPreferences = {
      ...currentRpcMethodPreferences,
      [methodName]: isEnabled
    };
    this.store.updateState({
      disabledRpcMethodPreferences: updatedRpcMethodPreferences
    });
  }
  getRpcMethodPreferences() {
    return this.store.getState().disabledRpcMethodPreferences;
  }

  //
  // PRIVATE METHODS
  //

  _subscribeToInfuraAvailability() {
    this._onInfuraIsBlocked(() => {
      this._setInfuraBlocked(true);
    });
    this._onInfuraIsUnblocked(() => {
      this._setInfuraBlocked(false);
    });
  }

  /**
   *
   * A setter for the `infuraBlocked` property
   *
   * @param {boolean} isBlocked - Bool indicating whether Infura is blocked
   */
  _setInfuraBlocked(isBlocked) {
    const {
      infuraBlocked
    } = this.store.getState();
    if (infuraBlocked === isBlocked) {
      return;
    }
    this.store.updateState({
      infuraBlocked: isBlocked
    });
  }

  /**
   * A method to check is the linea mainnet network should be displayed
   */
  _showShouldLineaMainnetNetwork() {
    const showLineaMainnet = (0, _network2.shouldShowLineaMainnet)();
    this.store.updateState({
      isLineaMainnetReleased: showLineaMainnet
    });
  }
}
exports.default = PreferencesController;


      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\preferences.js",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\swaps.js", {"../../../shared/constants/common":"F:\\metamask-extension\\shared\\constants\\common.ts","../../../shared/constants/gas":"F:\\metamask-extension\\shared\\constants\\gas.ts","../../../shared/constants/network":"F:\\metamask-extension\\shared\\constants\\network.ts","../../../shared/constants/smartTransactions":"F:\\metamask-extension\\shared\\constants\\smartTransactions.js","../../../shared/constants/swaps":"F:\\metamask-extension\\shared\\constants\\swaps.ts","../../../shared/constants/time":"F:\\metamask-extension\\shared\\constants\\time.ts","../../../shared/lib/fetch-with-cache":"F:\\metamask-extension\\shared\\lib\\fetch-with-cache.js","../../../shared/lib/swaps-utils":"F:\\metamask-extension\\shared\\lib\\swaps-utils.js","../../../shared/lib/transactions-controller-utils":"F:\\metamask-extension\\shared\\lib\\transactions-controller-utils.js","../../../shared/modules/Numeric":"F:\\metamask-extension\\shared\\modules\\Numeric.ts","../../../shared/modules/conversion.utils":"F:\\metamask-extension\\shared\\modules\\conversion.utils.ts","../../../shared/modules/string-utils":"F:\\metamask-extension\\shared\\modules\\string-utils.ts","../../../shared/modules/swaps.utils":"F:\\metamask-extension\\shared\\modules\\swaps.utils.js","../../../ui/helpers/utils/optimism/fetchEstimatedL1Fee":"F:\\metamask-extension\\ui\\helpers\\utils\\optimism\\fetchEstimatedL1Fee.js","@ethersproject/contracts":"F:\\metamask-extension\\node_modules\\@ethersproject\\contracts\\lib\\index.js","@ethersproject/providers":"F:\\metamask-extension\\node_modules\\@ethersproject\\providers\\lib\\index.js","@metamask/obs-store":"F:\\metamask-extension\\node_modules\\@metamask\\obs-store\\dist\\index.js","bignumber.js":"F:\\metamask-extension\\node_modules\\bignumber.js\\bignumber.js","human-standard-token-abi":"F:\\metamask-extension\\node_modules\\human-standard-token-abi\\index.js","lodash":"F:\\metamask-extension\\node_modules\\lodash\\lodash.js","loglevel":"F:\\metamask-extension\\node_modules\\loglevel\\lib\\loglevel.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Cswaps.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utils = exports.default = void 0;
var _providers = require("@ethersproject/providers");
var _contracts = require("@ethersproject/contracts");
var _loglevel = _interopRequireDefault(require("loglevel"));
var _bignumber = _interopRequireDefault(require("bignumber.js"));
var _obsStore = require("@metamask/obs-store");
var _lodash = require("lodash");
var _humanStandardTokenAbi = _interopRequireDefault(require("human-standard-token-abi"));
var _conversion = require("../../../shared/modules/conversion.utils");
var _swaps = require("../../../shared/constants/swaps");
var _gas = require("../../../shared/constants/gas");
var _network = require("../../../shared/constants/network");
var _smartTransactions = require("../../../shared/constants/smartTransactions");
var _swaps2 = require("../../../shared/modules/swaps.utils");
var _swapsUtils = require("../../../shared/lib/swaps-utils");
var _fetchWithCache = _interopRequireDefault(require("../../../shared/lib/fetch-with-cache"));
var _time = require("../../../shared/constants/time");
var _stringUtils = require("../../../shared/modules/string-utils");
var _transactionsControllerUtils = require("../../../shared/lib/transactions-controller-utils");
var _fetchEstimatedL1Fee = _interopRequireDefault(require("../../../ui/helpers/utils/optimism/fetchEstimatedL1Fee"));
var _Numeric = require("../../../shared/modules/Numeric");
var _common = require("../../../shared/constants/common");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// The MAX_GAS_LIMIT is a number that is higher than the maximum gas costs we have observed on any aggregator
const MAX_GAS_LIMIT = 2500000;

// To ensure that our serves are not spammed if MetaMask is left idle, we limit the number of fetches for quotes that are made on timed intervals.
// 3 seems to be an appropriate balance of giving users the time they need when MetaMask is not left idle, and turning polling off when it is.
const POLL_COUNT_LIMIT = 3;

// If for any reason the MetaSwap API fails to provide a refresh time,
// provide a reasonable fallback to avoid further errors
const FALLBACK_QUOTE_REFRESH_TIME = _time.MINUTE;
function calculateGasEstimateWithRefund(maxGas = MAX_GAS_LIMIT, estimatedRefund = 0, estimatedGas = 0) {
  const maxGasMinusRefund = new _bignumber.default(maxGas, 10).minus(estimatedRefund, 10);
  const isMaxGasMinusRefundNegative = maxGasMinusRefund.lt(0);
  const gasEstimateWithRefund = !isMaxGasMinusRefundNegative && maxGasMinusRefund.lt(estimatedGas, 16) ? `0x${maxGasMinusRefund.toString(16)}` : estimatedGas;
  return gasEstimateWithRefund;
}
const initialState = {
  swapsState: {
    quotes: {},
    quotesPollingLimitEnabled: false,
    fetchParams: null,
    tokens: null,
    tradeTxId: null,
    approveTxId: null,
    quotesLastFetched: null,
    customMaxGas: '',
    customGasPrice: null,
    customMaxFeePerGas: null,
    customMaxPriorityFeePerGas: null,
    swapsUserFeeLevel: '',
    selectedAggId: null,
    customApproveTxData: '',
    errorKey: '',
    topAggId: null,
    routeState: '',
    swapsFeatureIsLive: true,
    saveFetchedQuotes: false,
    swapsQuoteRefreshTime: FALLBACK_QUOTE_REFRESH_TIME,
    swapsQuotePrefetchingRefreshTime: FALLBACK_QUOTE_REFRESH_TIME,
    swapsStxBatchStatusRefreshTime: _smartTransactions.FALLBACK_SMART_TRANSACTIONS_REFRESH_TIME,
    swapsStxGetTransactionsRefreshTime: _smartTransactions.FALLBACK_SMART_TRANSACTIONS_REFRESH_TIME,
    swapsStxMaxFeeMultiplier: _smartTransactions.FALLBACK_SMART_TRANSACTIONS_MAX_FEE_MULTIPLIER,
    swapsFeatureFlags: {}
  }
};
class SwapsController {
  constructor({
    getBufferedGasLimit,
    networkController,
    provider,
    getProviderConfig,
    getTokenRatesState,
    fetchTradesInfo = _swapsUtils.fetchTradesInfo,
    getCurrentChainId,
    getEIP1559GasFeeEstimates,
    onNetworkStateChange
  }, state) {
    var _state$swapsState;
    this.store = new _obsStore.ObservableStore({
      swapsState: {
        ...initialState.swapsState,
        swapsFeatureFlags: (state === null || state === void 0 ? void 0 : (_state$swapsState = state.swapsState) === null || _state$swapsState === void 0 ? void 0 : _state$swapsState.swapsFeatureFlags) || {}
      }
    });
    this.resetState = () => {
      var _state$swapsState2;
      this.store.updateState({
        swapsState: {
          ...initialState.swapsState,
          swapsFeatureFlags: state === null || state === void 0 ? void 0 : (_state$swapsState2 = state.swapsState) === null || _state$swapsState2 === void 0 ? void 0 : _state$swapsState2.swapsFeatureFlags
        }
      });
    };
    this._fetchTradesInfo = fetchTradesInfo;
    this._getCurrentChainId = getCurrentChainId;
    this._getEIP1559GasFeeEstimates = getEIP1559GasFeeEstimates;
    this.getBufferedGasLimit = getBufferedGasLimit;
    this.getTokenRatesState = getTokenRatesState;
    this.pollCount = 0;
    this.getProviderConfig = getProviderConfig;
    this.indexOfNewestCallInFlight = 0;
    this.ethersProvider = new _providers.Web3Provider(provider);
    this._currentNetworkId = networkController.state.networkId;
    onNetworkStateChange(() => {
      const {
        networkId,
        networkStatus
      } = networkController.state;
      if (networkStatus === _network.NetworkStatus.Available && networkId !== this._currentNetworkId) {
        this._currentNetworkId = networkId;
        this.ethersProvider = new _providers.Web3Provider(provider);
      }
    });
  }
  async fetchSwapsNetworkConfig(chainId) {
    const response = await (0, _fetchWithCache.default)((0, _swapsUtils.getBaseApi)('network', chainId), {
      method: 'GET'
    }, {
      cacheRefreshTime: 600000
    });
    const {
      refreshRates,
      parameters = {}
    } = response || {};
    if (!refreshRates || typeof refreshRates.quotes !== 'number' || typeof refreshRates.quotesPrefetching !== 'number') {
      throw new Error(`MetaMask - invalid response for refreshRates: ${response}`);
    }
    // We presently use milliseconds in the UI.
    return {
      quotes: refreshRates.quotes * 1000,
      quotesPrefetching: refreshRates.quotesPrefetching * 1000,
      stxGetTransactions: refreshRates.stxGetTransactions * 1000,
      stxBatchStatus: refreshRates.stxBatchStatus * 1000,
      stxStatusDeadline: refreshRates.stxStatusDeadline,
      stxMaxFeeMultiplier: parameters.stxMaxFeeMultiplier
    };
  }

  // Sets the network config from the MetaSwap API.
  async _setSwapsNetworkConfig() {
    var _swapsNetworkConfig, _swapsNetworkConfig2, _swapsNetworkConfig3, _swapsNetworkConfig4, _swapsNetworkConfig5, _swapsNetworkConfig6;
    const chainId = this._getCurrentChainId();
    let swapsNetworkConfig;
    try {
      swapsNetworkConfig = await this.fetchSwapsNetworkConfig(chainId);
    } catch (e) {
      console.error('Request for Swaps network config failed: ', e);
    }
    const {
      swapsState: latestSwapsState
    } = this.store.getState();
    this.store.updateState({
      swapsState: {
        ...latestSwapsState,
        swapsQuoteRefreshTime: ((_swapsNetworkConfig = swapsNetworkConfig) === null || _swapsNetworkConfig === void 0 ? void 0 : _swapsNetworkConfig.quotes) || FALLBACK_QUOTE_REFRESH_TIME,
        swapsQuotePrefetchingRefreshTime: ((_swapsNetworkConfig2 = swapsNetworkConfig) === null || _swapsNetworkConfig2 === void 0 ? void 0 : _swapsNetworkConfig2.quotesPrefetching) || FALLBACK_QUOTE_REFRESH_TIME,
        swapsStxGetTransactionsRefreshTime: ((_swapsNetworkConfig3 = swapsNetworkConfig) === null || _swapsNetworkConfig3 === void 0 ? void 0 : _swapsNetworkConfig3.stxGetTransactions) || _smartTransactions.FALLBACK_SMART_TRANSACTIONS_REFRESH_TIME,
        swapsStxBatchStatusRefreshTime: ((_swapsNetworkConfig4 = swapsNetworkConfig) === null || _swapsNetworkConfig4 === void 0 ? void 0 : _swapsNetworkConfig4.stxBatchStatus) || _smartTransactions.FALLBACK_SMART_TRANSACTIONS_REFRESH_TIME,
        swapsStxStatusDeadline: ((_swapsNetworkConfig5 = swapsNetworkConfig) === null || _swapsNetworkConfig5 === void 0 ? void 0 : _swapsNetworkConfig5.stxStatusDeadline) || _smartTransactions.FALLBACK_SMART_TRANSACTIONS_DEADLINE,
        swapsStxMaxFeeMultiplier: ((_swapsNetworkConfig6 = swapsNetworkConfig) === null || _swapsNetworkConfig6 === void 0 ? void 0 : _swapsNetworkConfig6.stxMaxFeeMultiplier) || _smartTransactions.FALLBACK_SMART_TRANSACTIONS_MAX_FEE_MULTIPLIER
      }
    });
  }

  // Once quotes are fetched, we poll for new ones to keep the quotes up to date. Market and aggregator contract conditions can change fast enough
  // that quotes will no longer be available after 1 or 2 minutes. When fetchAndSetQuotes is first called, it receives fetch parameters that are stored in
  // state. These stored parameters are used on subsequent calls made during polling.
  // Note: we stop polling after 3 requests, until new quotes are explicitly asked for. The logic that enforces that maximum is in the body of fetchAndSetQuotes
  pollForNewQuotes() {
    const {
      swapsState: {
        swapsQuoteRefreshTime,
        swapsQuotePrefetchingRefreshTime,
        quotesPollingLimitEnabled
      }
    } = this.store.getState();
    // swapsQuoteRefreshTime is used on the View Quote page, swapsQuotePrefetchingRefreshTime is used on the Build Quote page.
    const quotesRefreshRateInMs = quotesPollingLimitEnabled ? swapsQuoteRefreshTime : swapsQuotePrefetchingRefreshTime;
    this.pollingTimeout = setTimeout(() => {
      var _swapsState$fetchPara;
      const {
        swapsState
      } = this.store.getState();
      this.fetchAndSetQuotes(swapsState.fetchParams, (_swapsState$fetchPara = swapsState.fetchParams) === null || _swapsState$fetchPara === void 0 ? void 0 : _swapsState$fetchPara.metaData, true);
    }, quotesRefreshRateInMs);
  }
  stopPollingForQuotes() {
    if (this.pollingTimeout) {
      clearTimeout(this.pollingTimeout);
    }
  }
  async fetchAndSetQuotes(fetchParams, fetchParamsMetaData = {}, isPolledRequest) {
    const {
      chainId
    } = fetchParamsMetaData;
    const {
      swapsState: {
        quotesPollingLimitEnabled,
        saveFetchedQuotes
      }
    } = this.store.getState();
    if (!fetchParams) {
      return null;
    }
    // Every time we get a new request that is not from the polling, we reset the poll count so we can poll for up to three more sets of quotes with these new params.
    if (!isPolledRequest) {
      this.pollCount = 0;
    }

    // If there are any pending poll requests, clear them so that they don't get call while this new fetch is in process
    clearTimeout(this.pollingTimeout);
    if (!isPolledRequest) {
      this.setSwapsErrorKey('');
    }
    const indexOfCurrentCall = this.indexOfNewestCallInFlight + 1;
    this.indexOfNewestCallInFlight = indexOfCurrentCall;
    if (!saveFetchedQuotes) {
      this.setSaveFetchedQuotes(true);
    }
    let [newQuotes] = await Promise.all([this._fetchTradesInfo(fetchParams, {
      ...fetchParamsMetaData
    }), this._setSwapsNetworkConfig()]);
    const {
      swapsState: {
        saveFetchedQuotes: saveFetchedQuotesAfterResponse
      }
    } = this.store.getState();

    // If saveFetchedQuotesAfterResponse is false, it means a user left Swaps (we cleaned the state)
    // and we don't want to set any API response with quotes into state.
    if (!saveFetchedQuotesAfterResponse) {
      return [{},
      // quotes
      null // selectedAggId
      ];
    }

    newQuotes = (0, _lodash.mapValues)(newQuotes, quote => ({
      ...quote,
      sourceTokenInfo: fetchParamsMetaData.sourceTokenInfo,
      destinationTokenInfo: fetchParamsMetaData.destinationTokenInfo
    }));
    if (chainId === _network.CHAIN_IDS.OPTIMISM && Object.values(newQuotes).length > 0) {
      await Promise.all(Object.values(newQuotes).map(async quote => {
        if (quote.trade) {
          const multiLayerL1TradeFeeTotal = await (0, _fetchEstimatedL1Fee.default)(chainId, {
            txParams: quote.trade,
            chainId
          }, this.ethersProvider);
          quote.multiLayerL1TradeFeeTotal = multiLayerL1TradeFeeTotal;
        }
        return quote;
      }));
    }
    const quotesLastFetched = Date.now();
    let approvalRequired = false;
    if (!(0, _swaps2.isSwapsDefaultTokenAddress)(fetchParams.sourceToken, chainId) && Object.values(newQuotes).length) {
      const allowance = await this._getERC20Allowance(fetchParams.sourceToken, fetchParams.fromAddress, chainId);
      const [firstQuote] = Object.values(newQuotes);

      // For a user to be able to swap a token, they need to have approved the MetaSwap contract to withdraw that token.
      // _getERC20Allowance() returns the amount of the token they have approved for withdrawal. If that amount is greater
      // than 0, it means that approval has already occurred and is not needed. Otherwise, for tokens to be swapped, a new
      // call of the ERC-20 approve method is required.
      approvalRequired = firstQuote.approvalNeeded && allowance.eq(0) && firstQuote.aggregator !== 'wrappedNative';
      if (!approvalRequired) {
        newQuotes = (0, _lodash.mapValues)(newQuotes, quote => ({
          ...quote,
          approvalNeeded: null
        }));
      } else if (!isPolledRequest) {
        const {
          gasLimit: approvalGas
        } = await this.timedoutGasReturn(firstQuote.approvalNeeded);
        newQuotes = (0, _lodash.mapValues)(newQuotes, quote => ({
          ...quote,
          approvalNeeded: {
            ...quote.approvalNeeded,
            gas: approvalGas || _swaps.DEFAULT_ERC20_APPROVE_GAS
          }
        }));
      }
    }
    let topAggId = null;

    // We can reduce time on the loading screen by only doing this after the
    // loading screen and best quote have rendered.
    if (!approvalRequired && !(fetchParams !== null && fetchParams !== void 0 && fetchParams.balanceError)) {
      newQuotes = await this.getAllQuotesWithGasEstimates(newQuotes);
    }
    if (Object.values(newQuotes).length === 0) {
      this.setSwapsErrorKey(_swaps.QUOTES_NOT_AVAILABLE_ERROR);
    } else {
      const [_topAggId, quotesWithSavingsAndFeeData] = await this._findTopQuoteAndCalculateSavings(newQuotes);
      topAggId = _topAggId;
      newQuotes = quotesWithSavingsAndFeeData;
    }

    // If a newer call has been made, don't update state with old information
    // Prevents timing conflicts between fetches
    if (this.indexOfNewestCallInFlight !== indexOfCurrentCall) {
      throw new Error(_swaps.SWAPS_FETCH_ORDER_CONFLICT);
    }
    const {
      swapsState
    } = this.store.getState();
    let {
      selectedAggId
    } = swapsState;
    if (!newQuotes[selectedAggId]) {
      selectedAggId = null;
    }
    this.store.updateState({
      swapsState: {
        ...swapsState,
        quotes: newQuotes,
        fetchParams: {
          ...fetchParams,
          metaData: fetchParamsMetaData
        },
        quotesLastFetched,
        selectedAggId,
        topAggId
      }
    });
    if (quotesPollingLimitEnabled) {
      // We only want to do up to a maximum of three requests from polling if polling limit is enabled.
      // Otherwise we won't increase pollCount, so polling will run without a limit.
      this.pollCount += 1;
    }
    if (!quotesPollingLimitEnabled || this.pollCount < POLL_COUNT_LIMIT + 1) {
      this.pollForNewQuotes();
    } else {
      this.resetPostFetchState();
      this.setSwapsErrorKey(_swaps.QUOTES_EXPIRED_ERROR);
      return null;
    }
    return [newQuotes, topAggId];
  }
  safeRefetchQuotes() {
    const {
      swapsState
    } = this.store.getState();
    if (!this.pollingTimeout && swapsState.fetchParams) {
      this.fetchAndSetQuotes(swapsState.fetchParams);
    }
  }
  setSelectedQuoteAggId(selectedAggId) {
    const {
      swapsState
    } = this.store.getState();
    this.store.updateState({
      swapsState: {
        ...swapsState,
        selectedAggId
      }
    });
  }
  setSwapsTokens(tokens) {
    const {
      swapsState
    } = this.store.getState();
    this.store.updateState({
      swapsState: {
        ...swapsState,
        tokens
      }
    });
  }
  clearSwapsQuotes() {
    const {
      swapsState
    } = this.store.getState();
    this.store.updateState({
      swapsState: {
        ...swapsState,
        quotes: {}
      }
    });
  }
  setSwapsErrorKey(errorKey) {
    const {
      swapsState
    } = this.store.getState();
    this.store.updateState({
      swapsState: {
        ...swapsState,
        errorKey
      }
    });
  }
  async getAllQuotesWithGasEstimates(quotes) {
    const quoteGasData = await Promise.all(Object.values(quotes).map(async quote => {
      const {
        gasLimit,
        simulationFails
      } = await this.timedoutGasReturn(quote.trade);
      return [gasLimit, simulationFails, quote.aggregator];
    }));
    const newQuotes = {};
    quoteGasData.forEach(([gasLimit, simulationFails, aggId]) => {
      if (gasLimit && !simulationFails) {
        const gasEstimateWithRefund = calculateGasEstimateWithRefund(quotes[aggId].maxGas, quotes[aggId].estimatedRefund, gasLimit);
        newQuotes[aggId] = {
          ...quotes[aggId],
          gasEstimate: gasLimit,
          gasEstimateWithRefund
        };
      } else if (quotes[aggId].approvalNeeded) {
        // If gas estimation fails, but an ERC-20 approve is needed, then we do not add any estimate property to the quote object
        // Such quotes will rely on the maxGas and averageGas properties from the api
        newQuotes[aggId] = quotes[aggId];
      }
      // If gas estimation fails and no approval is needed, then we filter that quote out, so that it is not shown to the user
    });

    return newQuotes;
  }
  timedoutGasReturn(tradeTxParams) {
    return new Promise(resolve => {
      let gasTimedOut = false;
      const gasTimeout = setTimeout(() => {
        gasTimedOut = true;
        resolve({
          gasLimit: null,
          simulationFails: true
        });
      }, _time.SECOND * 5);

      // Remove gas from params that will be passed to the `estimateGas` call
      // Including it can cause the estimate to fail if the actual gas needed
      // exceeds the passed gas
      const tradeTxParamsForGasEstimate = {
        data: tradeTxParams.data,
        from: tradeTxParams.from,
        to: tradeTxParams.to,
        value: tradeTxParams.value
      };
      this.getBufferedGasLimit({
        txParams: tradeTxParamsForGasEstimate
      }, 1).then(({
        gasLimit,
        simulationFails
      }) => {
        if (!gasTimedOut) {
          clearTimeout(gasTimeout);
          resolve({
            gasLimit,
            simulationFails
          });
        }
      }).catch(e => {
        _loglevel.default.error(e);
        if (!gasTimedOut) {
          clearTimeout(gasTimeout);
          resolve({
            gasLimit: null,
            simulationFails: true
          });
        }
      });
    });
  }
  async setInitialGasEstimate(initialAggId) {
    const {
      swapsState
    } = this.store.getState();
    const quoteToUpdate = {
      ...swapsState.quotes[initialAggId]
    };
    const {
      gasLimit: newGasEstimate,
      simulationFails
    } = await this.timedoutGasReturn(quoteToUpdate.trade);
    if (newGasEstimate && !simulationFails) {
      const gasEstimateWithRefund = calculateGasEstimateWithRefund(quoteToUpdate.maxGas, quoteToUpdate.estimatedRefund, newGasEstimate);
      quoteToUpdate.gasEstimate = newGasEstimate;
      quoteToUpdate.gasEstimateWithRefund = gasEstimateWithRefund;
    }
    this.store.updateState({
      swapsState: {
        ...swapsState,
        quotes: {
          ...swapsState.quotes,
          [initialAggId]: quoteToUpdate
        }
      }
    });
  }
  setApproveTxId(approveTxId) {
    const {
      swapsState
    } = this.store.getState();
    this.store.updateState({
      swapsState: {
        ...swapsState,
        approveTxId
      }
    });
  }
  setTradeTxId(tradeTxId) {
    const {
      swapsState
    } = this.store.getState();
    this.store.updateState({
      swapsState: {
        ...swapsState,
        tradeTxId
      }
    });
  }
  setQuotesLastFetched(quotesLastFetched) {
    const {
      swapsState
    } = this.store.getState();
    this.store.updateState({
      swapsState: {
        ...swapsState,
        quotesLastFetched
      }
    });
  }
  setSwapsTxGasPrice(gasPrice) {
    const {
      swapsState
    } = this.store.getState();
    this.store.updateState({
      swapsState: {
        ...swapsState,
        customGasPrice: gasPrice
      }
    });
  }
  setSwapsTxMaxFeePerGas(maxFeePerGas) {
    const {
      swapsState
    } = this.store.getState();
    this.store.updateState({
      swapsState: {
        ...swapsState,
        customMaxFeePerGas: maxFeePerGas
      }
    });
  }
  setSwapsUserFeeLevel(swapsUserFeeLevel) {
    const {
      swapsState
    } = this.store.getState();
    this.store.updateState({
      swapsState: {
        ...swapsState,
        swapsUserFeeLevel
      }
    });
  }
  setSwapsQuotesPollingLimitEnabled(quotesPollingLimitEnabled) {
    const {
      swapsState
    } = this.store.getState();
    this.store.updateState({
      swapsState: {
        ...swapsState,
        quotesPollingLimitEnabled
      }
    });
  }
  setSwapsTxMaxFeePriorityPerGas(maxPriorityFeePerGas) {
    const {
      swapsState
    } = this.store.getState();
    this.store.updateState({
      swapsState: {
        ...swapsState,
        customMaxPriorityFeePerGas: maxPriorityFeePerGas
      }
    });
  }
  setSwapsTxGasLimit(gasLimit) {
    const {
      swapsState
    } = this.store.getState();
    this.store.updateState({
      swapsState: {
        ...swapsState,
        customMaxGas: gasLimit
      }
    });
  }
  setCustomApproveTxData(data) {
    const {
      swapsState
    } = this.store.getState();
    this.store.updateState({
      swapsState: {
        ...swapsState,
        customApproveTxData: data
      }
    });
  }
  setBackgroundSwapRouteState(routeState) {
    const {
      swapsState
    } = this.store.getState();
    this.store.updateState({
      swapsState: {
        ...swapsState,
        routeState
      }
    });
  }
  setSaveFetchedQuotes(status) {
    const {
      swapsState
    } = this.store.getState();
    this.store.updateState({
      swapsState: {
        ...swapsState,
        saveFetchedQuotes: status
      }
    });
  }
  setSwapsLiveness(swapsLiveness) {
    const {
      swapsState
    } = this.store.getState();
    const {
      swapsFeatureIsLive
    } = swapsLiveness;
    this.store.updateState({
      swapsState: {
        ...swapsState,
        swapsFeatureIsLive
      }
    });
  }
  setSwapsFeatureFlags(swapsFeatureFlags) {
    const {
      swapsState
    } = this.store.getState();
    this.store.updateState({
      swapsState: {
        ...swapsState,
        swapsFeatureFlags
      }
    });
  }
  resetPostFetchState() {
    const {
      swapsState
    } = this.store.getState();
    this.store.updateState({
      swapsState: {
        ...initialState.swapsState,
        tokens: swapsState.tokens,
        fetchParams: swapsState.fetchParams,
        swapsFeatureIsLive: swapsState.swapsFeatureIsLive,
        swapsQuoteRefreshTime: swapsState.swapsQuoteRefreshTime,
        swapsQuotePrefetchingRefreshTime: swapsState.swapsQuotePrefetchingRefreshTime,
        swapsFeatureFlags: swapsState.swapsFeatureFlags
      }
    });
    clearTimeout(this.pollingTimeout);
  }
  resetSwapsState() {
    const {
      swapsState
    } = this.store.getState();
    this.store.updateState({
      swapsState: {
        ...initialState.swapsState,
        swapsQuoteRefreshTime: swapsState.swapsQuoteRefreshTime,
        swapsQuotePrefetchingRefreshTime: swapsState.swapsQuotePrefetchingRefreshTime,
        swapsFeatureFlags: swapsState.swapsFeatureFlags
      }
    });
    clearTimeout(this.pollingTimeout);
  }
  async _findTopQuoteAndCalculateSavings(quotes = {}) {
    const {
      contractExchangeRates: tokenConversionRates
    } = this.getTokenRatesState();
    const {
      swapsState: {
        customGasPrice,
        customMaxPriorityFeePerGas
      }
    } = this.store.getState();
    const chainId = this._getCurrentChainId();
    const numQuotes = Object.keys(quotes).length;
    if (!numQuotes) {
      return {};
    }
    const newQuotes = (0, _lodash.cloneDeep)(quotes);
    const {
      gasFeeEstimates,
      gasEstimateType
    } = await this._getEIP1559GasFeeEstimates();
    let usedGasPrice = '0x0';
    if (gasEstimateType === _gas.GasEstimateTypes.feeMarket) {
      const {
        high: {
          suggestedMaxPriorityFeePerGas
        },
        estimatedBaseFee
      } = gasFeeEstimates;
      const suggestedMaxPriorityFeePerGasInHexWEI = (0, _conversion.decGWEIToHexWEI)(suggestedMaxPriorityFeePerGas);
      const estimatedBaseFeeNumeric = new _Numeric.Numeric(estimatedBaseFee, 10, _common.EtherDenomination.GWEI).toDenomination(_common.EtherDenomination.WEI);
      usedGasPrice = new _Numeric.Numeric(customMaxPriorityFeePerGas || suggestedMaxPriorityFeePerGasInHexWEI, 16).add(estimatedBaseFeeNumeric).round(6).toString();
    } else if (gasEstimateType === _gas.GasEstimateTypes.legacy) {
      usedGasPrice = customGasPrice || (0, _conversion.decGWEIToHexWEI)(gasFeeEstimates.high);
    } else if (gasEstimateType === _gas.GasEstimateTypes.ethGasPrice) {
      usedGasPrice = customGasPrice || (0, _conversion.decGWEIToHexWEI)(gasFeeEstimates.gasPrice);
    }
    let topAggId = null;
    let overallValueOfBestQuoteForSorting = null;
    Object.values(newQuotes).forEach(quote => {
      const {
        aggregator,
        approvalNeeded,
        averageGas,
        destinationAmount = 0,
        destinationToken,
        destinationTokenInfo,
        gasEstimateWithRefund,
        sourceAmount,
        sourceToken,
        trade,
        fee: metaMaskFee,
        multiLayerL1TradeFeeTotal
      } = quote;
      const tradeGasLimitForCalculation = gasEstimateWithRefund ? new _bignumber.default(gasEstimateWithRefund, 16) : new _bignumber.default(averageGas || MAX_GAS_LIMIT, 10);
      const totalGasLimitForCalculation = tradeGasLimitForCalculation.plus((approvalNeeded === null || approvalNeeded === void 0 ? void 0 : approvalNeeded.gas) || '0x0', 16).toString(16);
      let gasTotalInWeiHex = (0, _transactionsControllerUtils.calcGasTotal)(totalGasLimitForCalculation, usedGasPrice);
      if (multiLayerL1TradeFeeTotal !== null) {
        gasTotalInWeiHex = (0, _conversion.sumHexes)(gasTotalInWeiHex || '0x0', multiLayerL1TradeFeeTotal || '0x0');
      }

      // trade.value is a sum of different values depending on the transaction.
      // It always includes any external fees charged by the quote source. In
      // addition, if the source asset is the selected chain's default token, trade.value
      // includes the amount of that token.
      const totalWeiCost = new _Numeric.Numeric(gasTotalInWeiHex, 16, _common.EtherDenomination.WEI).add(new _Numeric.Numeric(trade.value, 16, _common.EtherDenomination.WEI));
      const totalEthCost = totalWeiCost.toDenomination(_common.EtherDenomination.ETH).round(6).value;

      // The total fee is aggregator/exchange fees plus gas fees.
      // If the swap is from the selected chain's default token, subtract
      // the sourceAmount from the total cost. Otherwise, the total fee
      // is simply trade.value plus gas fees.
      const ethFee = (0, _swaps2.isSwapsDefaultTokenAddress)(sourceToken, chainId) ? totalWeiCost.minus(new _Numeric.Numeric(sourceAmount, 10)).toDenomination(_common.EtherDenomination.ETH).round(6).value : totalEthCost;
      const decimalAdjustedDestinationAmount = (0, _transactionsControllerUtils.calcTokenAmount)(destinationAmount, destinationTokenInfo.decimals);
      const tokenPercentageOfPreFeeDestAmount = new _bignumber.default(100, 10).minus(metaMaskFee, 10).div(100);
      const destinationAmountBeforeMetaMaskFee = decimalAdjustedDestinationAmount.div(tokenPercentageOfPreFeeDestAmount);
      const metaMaskFeeInTokens = destinationAmountBeforeMetaMaskFee.minus(decimalAdjustedDestinationAmount);
      const tokenConversionRate = tokenConversionRates[Object.keys(tokenConversionRates).find(tokenAddress => (0, _stringUtils.isEqualCaseInsensitive)(tokenAddress, destinationToken))];
      const conversionRateForSorting = tokenConversionRate || 1;
      const ethValueOfTokens = decimalAdjustedDestinationAmount.times(conversionRateForSorting.toString(10), 10);
      const conversionRateForCalculations = (0, _swaps2.isSwapsDefaultTokenAddress)(destinationToken, chainId) ? 1 : tokenConversionRate;
      const overallValueOfQuoteForSorting = conversionRateForCalculations === undefined ? ethValueOfTokens : ethValueOfTokens.minus(ethFee, 10);
      quote.ethFee = ethFee.toString(10);
      if (conversionRateForCalculations !== undefined) {
        quote.ethValueOfTokens = ethValueOfTokens.toString(10);
        quote.overallValueOfQuote = overallValueOfQuoteForSorting.toString(10);
        quote.metaMaskFeeInEth = metaMaskFeeInTokens.times(conversionRateForCalculations.toString(10)).toString(10);
      }
      if (overallValueOfBestQuoteForSorting === null || overallValueOfQuoteForSorting.gt(overallValueOfBestQuoteForSorting)) {
        topAggId = aggregator;
        overallValueOfBestQuoteForSorting = overallValueOfQuoteForSorting;
      }
    });
    const isBest = (0, _swaps2.isSwapsDefaultTokenAddress)(newQuotes[topAggId].destinationToken, chainId) || Boolean(tokenConversionRates[Object.keys(tokenConversionRates).find(tokenAddress => {
      var _newQuotes$topAggId;
      return (0, _stringUtils.isEqualCaseInsensitive)(tokenAddress, (_newQuotes$topAggId = newQuotes[topAggId]) === null || _newQuotes$topAggId === void 0 ? void 0 : _newQuotes$topAggId.destinationToken);
    })]);
    let savings = null;
    if (isBest) {
      const bestQuote = newQuotes[topAggId];
      savings = {};
      const {
        ethFee: medianEthFee,
        metaMaskFeeInEth: medianMetaMaskFee,
        ethValueOfTokens: medianEthValueOfTokens
      } = getMedianEthValueQuote(Object.values(newQuotes));

      // Performance savings are calculated as:
      //   (ethValueOfTokens for the best trade) - (ethValueOfTokens for the media trade)
      savings.performance = new _bignumber.default(bestQuote.ethValueOfTokens, 10).minus(medianEthValueOfTokens, 10);

      // Fee savings are calculated as:
      //   (fee for the median trade) - (fee for the best trade)
      savings.fee = new _bignumber.default(medianEthFee).minus(bestQuote.ethFee, 10);
      savings.metaMaskFee = bestQuote.metaMaskFeeInEth;

      // Total savings are calculated as:
      //   performance savings + fee savings - metamask fee
      savings.total = savings.performance.plus(savings.fee).minus(savings.metaMaskFee).toString(10);
      savings.performance = savings.performance.toString(10);
      savings.fee = savings.fee.toString(10);
      savings.medianMetaMaskFee = medianMetaMaskFee;
      newQuotes[topAggId].isBestQuote = true;
      newQuotes[topAggId].savings = savings;
    }
    return [topAggId, newQuotes];
  }
  async _getERC20Allowance(contractAddress, walletAddress, chainId) {
    const contract = new _contracts.Contract(contractAddress, _humanStandardTokenAbi.default, this.ethersProvider);
    return await contract.allowance(walletAddress, _swaps.SWAPS_CHAINID_CONTRACT_ADDRESS_MAP[chainId]);
  }
}

/**
 * Calculates the median overallValueOfQuote of a sample of quotes.
 *
 * @param {Array} _quotes - A sample of quote objects with overallValueOfQuote, ethFee, metaMaskFeeInEth, and ethValueOfTokens properties
 * @returns {object} An object with the ethValueOfTokens, ethFee, and metaMaskFeeInEth of the quote with the median overallValueOfQuote
 */
exports.default = SwapsController;
function getMedianEthValueQuote(_quotes) {
  if (!Array.isArray(_quotes) || _quotes.length === 0) {
    throw new Error('Expected non-empty array param.');
  }
  const quotes = [..._quotes];
  quotes.sort((quoteA, quoteB) => {
    const overallValueOfQuoteA = new _bignumber.default(quoteA.overallValueOfQuote, 10);
    const overallValueOfQuoteB = new _bignumber.default(quoteB.overallValueOfQuote, 10);
    if (overallValueOfQuoteA.equals(overallValueOfQuoteB)) {
      return 0;
    }
    return overallValueOfQuoteA.lessThan(overallValueOfQuoteB) ? -1 : 1;
  });
  if (quotes.length % 2 === 1) {
    // return middle values
    const medianOverallValue = quotes[(quotes.length - 1) / 2].overallValueOfQuote;
    const quotesMatchingMedianQuoteValue = quotes.filter(quote => medianOverallValue === quote.overallValueOfQuote);
    return meansOfQuotesFeesAndValue(quotesMatchingMedianQuoteValue);
  }

  // return mean of middle two values
  const upperIndex = quotes.length / 2;
  const lowerIndex = upperIndex - 1;
  const overallValueAtUpperIndex = quotes[upperIndex].overallValueOfQuote;
  const overallValueAtLowerIndex = quotes[lowerIndex].overallValueOfQuote;
  const quotesMatchingUpperIndexValue = quotes.filter(quote => overallValueAtUpperIndex === quote.overallValueOfQuote);
  const quotesMatchingLowerIndexValue = quotes.filter(quote => overallValueAtLowerIndex === quote.overallValueOfQuote);
  const feesAndValueAtUpperIndex = meansOfQuotesFeesAndValue(quotesMatchingUpperIndexValue);
  const feesAndValueAtLowerIndex = meansOfQuotesFeesAndValue(quotesMatchingLowerIndexValue);
  return {
    ethFee: new _bignumber.default(feesAndValueAtUpperIndex.ethFee, 10).plus(feesAndValueAtLowerIndex.ethFee, 10).dividedBy(2).toString(10),
    metaMaskFeeInEth: new _bignumber.default(feesAndValueAtUpperIndex.metaMaskFeeInEth, 10).plus(feesAndValueAtLowerIndex.metaMaskFeeInEth, 10).dividedBy(2).toString(10),
    ethValueOfTokens: new _bignumber.default(feesAndValueAtUpperIndex.ethValueOfTokens, 10).plus(feesAndValueAtLowerIndex.ethValueOfTokens, 10).dividedBy(2).toString(10)
  };
}

/**
 * Calculates the arithmetic mean for each of three properties - ethFee, metaMaskFeeInEth and ethValueOfTokens - across
 * an array of objects containing those properties.
 *
 * @param {Array} quotes - A sample of quote objects with overallValueOfQuote, ethFee, metaMaskFeeInEth and
 * ethValueOfTokens properties
 * @returns {object} An object with the arithmetic mean each of the ethFee, metaMaskFeeInEth and ethValueOfTokens of
 * the passed quote objects
 */
function meansOfQuotesFeesAndValue(quotes) {
  const feeAndValueSumsAsBigNumbers = quotes.reduce((feeAndValueSums, quote) => ({
    ethFee: feeAndValueSums.ethFee.plus(quote.ethFee, 10),
    metaMaskFeeInEth: feeAndValueSums.metaMaskFeeInEth.plus(quote.metaMaskFeeInEth, 10),
    ethValueOfTokens: feeAndValueSums.ethValueOfTokens.plus(quote.ethValueOfTokens, 10)
  }), {
    ethFee: new _bignumber.default(0, 10),
    metaMaskFeeInEth: new _bignumber.default(0, 10),
    ethValueOfTokens: new _bignumber.default(0, 10)
  });
  return {
    ethFee: feeAndValueSumsAsBigNumbers.ethFee.div(quotes.length, 10).toString(10),
    metaMaskFeeInEth: feeAndValueSumsAsBigNumbers.metaMaskFeeInEth.div(quotes.length, 10).toString(10),
    ethValueOfTokens: feeAndValueSumsAsBigNumbers.ethValueOfTokens.div(quotes.length, 10).toString(10)
  };
}
const utils = {
  getMedianEthValueQuote,
  meansOfQuotesFeesAndValue
};
exports.utils = utils;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\swaps.js",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\transactions\\index.js", {"../../../../shared/constants/app":"F:\\metamask-extension\\shared\\constants\\app.ts","../../../../shared/constants/gas":"F:\\metamask-extension\\shared\\constants\\gas.ts","../../../../shared/constants/metametrics":"F:\\metamask-extension\\shared\\constants\\metametrics.ts","../../../../shared/constants/network":"F:\\metamask-extension\\shared\\constants\\network.ts","../../../../shared/constants/transaction":"F:\\metamask-extension\\shared\\constants\\transaction.ts","../../../../shared/lib/transactions-controller-utils":"F:\\metamask-extension\\shared\\lib\\transactions-controller-utils.js","../../../../shared/modules/Numeric":"F:\\metamask-extension\\shared\\modules\\Numeric.ts","../../../../shared/modules/conversion.utils":"F:\\metamask-extension\\shared\\modules\\conversion.utils.ts","../../../../shared/modules/swaps.utils":"F:\\metamask-extension\\shared\\modules\\swaps.utils.js","../../../../shared/modules/transaction.utils":"F:\\metamask-extension\\shared\\modules\\transaction.utils.js","../../lib/cleanErrorStack":"F:\\metamask-extension\\app\\scripts\\lib\\cleanErrorStack.js","../../lib/util":"F:\\metamask-extension\\app\\scripts\\lib\\util.ts","../../metamask-controller":"F:\\metamask-extension\\app\\scripts\\metamask-controller.js","./lib/util":"F:\\metamask-extension\\app\\scripts\\controllers\\transactions\\lib\\util.js","./pending-tx-tracker":"F:\\metamask-extension\\app\\scripts\\controllers\\transactions\\pending-tx-tracker.js","./tx-gas-utils":"F:\\metamask-extension\\app\\scripts\\controllers\\transactions\\tx-gas-utils.js","./tx-state-manager":"F:\\metamask-extension\\app\\scripts\\controllers\\transactions\\tx-state-manager.js","@ethereumjs/common":"F:\\metamask-extension\\node_modules\\@ethereumjs\\common\\dist\\index.js","@ethereumjs/tx":"F:\\metamask-extension\\node_modules\\@ethereumjs\\tx\\dist\\index.js","@metamask/controller-utils":"F:\\metamask-extension\\node_modules\\@metamask\\controller-utils\\dist\\index.js","@metamask/obs-store":"F:\\metamask-extension\\node_modules\\@metamask\\obs-store\\dist\\index.js","@metamask/safe-event-emitter":"F:\\metamask-extension\\node_modules\\@metamask\\safe-event-emitter\\index.js","bignumber.js":"F:\\metamask-extension\\node_modules\\bignumber.js\\bignumber.js","eth-rpc-errors":"F:\\metamask-extension\\node_modules\\eth-rpc-errors\\dist\\index.js","ethereumjs-util":"F:\\metamask-extension\\node_modules\\ethereumjs-util\\dist.browser\\index.js","ethjs-query":"F:\\metamask-extension\\node_modules\\ethjs-query\\lib\\index.js","lodash":"F:\\metamask-extension\\node_modules\\lodash\\lodash.js","loglevel":"F:\\metamask-extension\\node_modules\\loglevel\\lib\\loglevel.js","nonce-tracker":"F:\\metamask-extension\\node_modules\\nonce-tracker\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Ctransactions%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _safeEventEmitter = _interopRequireDefault(require("@metamask/safe-event-emitter"));
var _obsStore = require("@metamask/obs-store");
var _ethereumjsUtil = require("ethereumjs-util");
var _ethjsQuery = _interopRequireDefault(require("ethjs-query"));
var _ethRpcErrors = require("eth-rpc-errors");
var _common = require("@ethereumjs/common");
var _tx = require("@ethereumjs/tx");
var _controllerUtils = require("@metamask/controller-utils");
var _nonceTracker = _interopRequireDefault(require("nonce-tracker"));
var _loglevel = _interopRequireDefault(require("loglevel"));
var _bignumber = _interopRequireDefault(require("bignumber.js"));
var _lodash = require("lodash");
var _cleanErrorStack = _interopRequireDefault(require("../../lib/cleanErrorStack"));
var _util = require("../../lib/util");
var _transaction = require("../../../../shared/constants/transaction");
var _metamaskController = require("../../metamask-controller");
var _gas = require("../../../../shared/constants/gas");
var _conversion = require("../../../../shared/modules/conversion.utils");
var _swaps = require("../../../../shared/modules/swaps.utils");
var _metametrics = require("../../../../shared/constants/metametrics");
var _network = require("../../../../shared/constants/network");
var _transaction2 = require("../../../../shared/modules/transaction.utils");
var _app = require("../../../../shared/constants/app");
var _transactionsControllerUtils = require("../../../../shared/lib/transactions-controller-utils");
var _Numeric = require("../../../../shared/modules/Numeric");
var _txStateManager = _interopRequireDefault(require("./tx-state-manager"));
var _txGasUtils = _interopRequireDefault(require("./tx-gas-utils"));
var _pendingTxTracker = _interopRequireDefault(require("./pending-tx-tracker"));
var txUtils = _interopRequireWildcard(require("./lib/util"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MAX_MEMSTORE_TX_LIST_SIZE = 100; // Number of transactions (by unique nonces) to keep in memory
const UPDATE_POST_TX_BALANCE_TIMEOUT = 5000;
const SWAP_TRANSACTION_TYPES = [_transaction.TransactionType.swap, _transaction.TransactionType.swapApproval];

// Only certain types of transactions should be allowed to be specified when
// adding a new unapproved transaction.
const VALID_UNAPPROVED_TRANSACTION_TYPES = [...SWAP_TRANSACTION_TYPES, _transaction.TransactionType.simpleSend, _transaction.TransactionType.tokenMethodTransfer, _transaction.TransactionType.tokenMethodTransferFrom, _transaction.TransactionType.contractInteraction];

/**
 * @typedef {__import__('../../../../shared/constants/transaction').TransactionMeta} TransactionMeta
 * @typedef {__import__('../../../../shared/constants/gas').TxGasFees} TxGasFees
 */

const METRICS_STATUS_FAILED = 'failed on-chain';

/**
 * @typedef {object} CustomGasSettings
 * @property {string} [gas] - The gas limit to use for the transaction
 * @property {string} [gasPrice] - The gasPrice to use for a legacy transaction
 * @property {string} [maxFeePerGas] - The maximum amount to pay per gas on a
 *  EIP-1559 transaction
 * @property {string} [maxPriorityFeePerGas] - The maximum amount of paid fee
 *  to be distributed to miner in an EIP-1559 transaction
 */

/**
 * Transaction Controller is an aggregate of sub-controllers and trackers
 * composing them in a way to be exposed to the metamask controller
 *
 * - `txStateManager
 * responsible for the state of a transaction and
 * storing the transaction
 * - pendingTxTracker
 * watching blocks for transactions to be include
 * and emitting confirmed events
 * - txGasUtil
 * gas calculations and safety buffering
 * - nonceTracker
 * calculating nonces
 *
 * @param {object} opts
 * @param {object} opts.initState - initial transaction list default is an empty array
 * @param {Function} opts.getNetworkId - Get the current network ID.
 * @param {Function} opts.getNetworkStatus - Get the current network status.
 * @param {Function} opts.onNetworkStateChange - Subscribe to network state change events.
 * @param {object} opts.blockTracker - An instance of eth-blocktracker
 * @param {object} opts.provider - A network provider.
 * @param {Function} opts.signTransaction - function the signs an @ethereumjs/tx
 * @param {object} opts.getPermittedAccounts - get accounts that an origin has permissions for
 * @param {Function} opts.signTransaction - ethTx signer that returns a rawTx
 * @param {number} [opts.txHistoryLimit] - number *optional* for limiting how many transactions are in state
 * @param {object} opts.preferencesStore
 */

class TransactionController extends _safeEventEmitter.default {
  constructor(opts) {
    super();
    this.getNetworkId = opts.getNetworkId;
    this.getNetworkStatus = opts.getNetworkStatus;
    this._getCurrentChainId = opts.getCurrentChainId;
    this.getProviderConfig = opts.getProviderConfig;
    this._getCurrentNetworkEIP1559Compatibility = opts.getCurrentNetworkEIP1559Compatibility;
    this._getCurrentAccountEIP1559Compatibility = opts.getCurrentAccountEIP1559Compatibility;
    this.preferencesStore = opts.preferencesStore || new _obsStore.ObservableStore({});
    this.provider = opts.provider;
    this.getPermittedAccounts = opts.getPermittedAccounts;
    this.blockTracker = opts.blockTracker;
    this.signEthTx = opts.signTransaction;
    this.inProcessOfSigning = new Set();
    this._trackMetaMetricsEvent = opts.trackMetaMetricsEvent;
    this._getParticipateInMetrics = opts.getParticipateInMetrics;
    this._getEIP1559GasFeeEstimates = opts.getEIP1559GasFeeEstimates;
    this.createEventFragment = opts.createEventFragment;
    this.updateEventFragment = opts.updateEventFragment;
    this.finalizeEventFragment = opts.finalizeEventFragment;
    this.getEventFragmentById = opts.getEventFragmentById;
    this.getDeviceModel = opts.getDeviceModel;
    this.getAccountType = opts.getAccountType;
    this.getTokenStandardAndDetails = opts.getTokenStandardAndDetails;
    this.securityProviderRequest = opts.securityProviderRequest;
    this.messagingSystem = opts.messenger;
    this.memStore = new _obsStore.ObservableStore({});
    this.resetState = () => {
      this._updateMemstore();
    };
    this.query = new _ethjsQuery.default(this.provider);
    this.txGasUtil = new _txGasUtils.default(this.provider);
    this._mapMethods();
    this.txStateManager = new _txStateManager.default({
      initState: opts.initState,
      txHistoryLimit: opts.txHistoryLimit,
      getNetworkId: this.getNetworkId,
      getNetworkStatus: this.getNetworkStatus,
      getCurrentChainId: opts.getCurrentChainId
    });
    this.store = this.txStateManager.store;
    this.nonceTracker = new _nonceTracker.default({
      provider: this.provider,
      blockTracker: this.blockTracker,
      getPendingTransactions: (...args) => {
        const pendingTransactions = this.txStateManager.getPendingTransactions(...args);
        const externalPendingTransactions = opts.getExternalPendingTransactions(...args);
        return [...pendingTransactions, ...externalPendingTransactions];
      },
      getConfirmedTransactions: this.txStateManager.getConfirmedTransactions.bind(this.txStateManager)
    });
    this.pendingTxTracker = new _pendingTxTracker.default({
      provider: this.provider,
      nonceTracker: this.nonceTracker,
      publishTransaction: rawTx => this.query.sendRawTransaction(rawTx),
      getPendingTransactions: () => {
        const pending = this.txStateManager.getPendingTransactions();
        const approved = this.txStateManager.getApprovedTransactions();
        return [...pending, ...approved];
      },
      approveTransaction: this._approveTransaction.bind(this),
      getCompletedTransactions: this.txStateManager.getConfirmedTransactions.bind(this.txStateManager)
    });
    this.txStateManager.store.subscribe(() => this.emit(_metamaskController.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE));
    this._setupListeners();
    // memstore is computed from a few different stores
    this._updateMemstore();
    this.txStateManager.store.subscribe(() => this._updateMemstore());
    opts.onNetworkStateChange(() => {
      this._onBootCleanUp();
      this._updateMemstore();
    });

    // request state update to finalize initialization
    this._updatePendingTxsAfterFirstBlock();
    this._onBootCleanUp();
  }

  /**
   * Gets the current chainId in the network store as a number, returning 0 if
   * the chainId parses to NaN.
   *
   * @returns {number} The numerical chainId.
   */
  getChainId() {
    const networkStatus = this.getNetworkStatus();
    const chainId = this._getCurrentChainId();
    const integerChainId = parseInt(chainId, 16);
    if (networkStatus !== _network.NetworkStatus.Available || Number.isNaN(integerChainId)) {
      return 0;
    }
    return integerChainId;
  }
  async getEIP1559Compatibility(fromAddress) {
    const currentNetworkIsCompatible = await this._getCurrentNetworkEIP1559Compatibility();
    const fromAccountIsCompatible = await this._getCurrentAccountEIP1559Compatibility(fromAddress);
    return currentNetworkIsCompatible && fromAccountIsCompatible;
  }

  /**
   * `@ethereumjs/tx` uses `@ethereumjs/common` as a configuration tool for
   * specifying which chain, network, hardfork and EIPs to support for
   * a transaction. By referencing this configuration, and analyzing the fields
   * specified in txParams, `@ethereumjs/tx` is able to determine which EIP-2718
   * transaction type to use.
   *
   * @param fromAddress
   * @returns {Common} common configuration object
   */
  async getCommonConfiguration(fromAddress) {
    const {
      type,
      nickname: name
    } = this.getProviderConfig();
    const supportsEIP1559 = await this.getEIP1559Compatibility(fromAddress);

    // This logic below will have to be updated each time a hardfork happens
    // that carries with it a new Transaction type. It is inconsequential for
    // hardforks that do not include new types.
    const hardfork = supportsEIP1559 ? _common.Hardfork.London : _common.Hardfork.Berlin;

    // type will be one of our default network names or 'rpc'. the default
    // network names are sufficient configuration, simply pass the name as the
    // chain argument in the constructor.
    if (type !== _network.NETWORK_TYPES.RPC && type !== _network.NETWORK_TYPES.SEPOLIA && type !== _network.NETWORK_TYPES.LINEA_GOERLI && type !== _network.NETWORK_TYPES.LINEA_MAINNET) {
      return new _common.Common({
        chain: type,
        hardfork
      });
    }

    // For 'rpc' we need to use the same basic configuration as mainnet, since
    // we only support EVM compatible chains, and then override the
    // name, chainId and networkId properties. This is done using the
    // `forCustomChain` static method on the Common class.
    const chainId = parseInt(this._getCurrentChainId(), 16);
    const networkStatus = this.getNetworkStatus();
    const networkId = this.getNetworkId();
    return _common.Common.custom({
      name,
      chainId,
      // It is improbable for a transaction to be signed while the network
      // is loading for two reasons.
      // 1. Pending, unconfirmed transactions are wiped on network change
      // 2. The UI is unusable (loading indicator) when network is loading.
      // setting the networkId to 0 is for type safety and to explicity lead
      // the transaction to failing if a user is able to get to this branch
      // on a custom network that requires valid network id. I have not ran
      // into this limitation on any network I have attempted, even when
      // hardcoding networkId to 'loading'.
      networkId: networkStatus === _network.NetworkStatus.Available ? parseInt(networkId, 10) : 0,
      hardfork
    });
  }

  /**
   * Adds a tx to the txlist
   *
   * @param txMeta
   * @fires ${txMeta.id}:unapproved
   */
  addTransaction(txMeta) {
    this.txStateManager.addTransaction(txMeta);
    this.emit(`${txMeta.id}:unapproved`, txMeta);
    this._trackTransactionMetricsEvent(txMeta, _transaction.TransactionMetaMetricsEvent.added, txMeta.actionId);
  }

  /**
   * Wipes the transactions for a given account
   *
   * @param {string} address - hex string of the from address for txs being removed
   */
  wipeTransactions(address) {
    this.txStateManager.wipeTransactions(address);
  }

  /**
   * Add a new unapproved transaction to the pipeline
   *
   * @returns {Promise<string>} the hash of the transaction after being submitted to the network
   * @param {object} txParams - txParams for the transaction
   * @param {object} opts - with the key origin to put the origin on the txMeta
   */
  async newUnapprovedTransaction(txParams, opts = {}) {
    _loglevel.default.debug(`MetaMaskController newUnapprovedTransaction ${JSON.stringify(txParams)}`);
    const {
      txMeta: initialTxMeta,
      isExisting
    } = await this._createTransaction(opts.method, txParams, opts.origin, undefined, undefined, opts.id);
    const txId = initialTxMeta.id;
    const isCompleted = this._isTransactionCompleted(initialTxMeta);
    const finishedPromise = isCompleted ? Promise.resolve(initialTxMeta) : this._waitForTransactionFinished(txId);
    if (!isExisting && !isCompleted) {
      try {
        await this._requestTransactionApproval(initialTxMeta);
      } catch (error) {
        // Errors generated from final status using finished event
      }
    }
    const finalTxMeta = await finishedPromise;
    const finalStatus = finalTxMeta === null || finalTxMeta === void 0 ? void 0 : finalTxMeta.status;
    switch (finalStatus) {
      case _transaction.TransactionStatus.submitted:
        return finalTxMeta.hash;
      case _transaction.TransactionStatus.rejected:
        throw (0, _cleanErrorStack.default)(_ethRpcErrors.ethErrors.provider.userRejectedRequest('MetaMask Tx Signature: User denied transaction signature.'));
      case _transaction.TransactionStatus.failed:
        throw (0, _cleanErrorStack.default)(_ethRpcErrors.ethErrors.rpc.internal(finalTxMeta.err.message));
      default:
        throw (0, _cleanErrorStack.default)(_ethRpcErrors.ethErrors.rpc.internal(`MetaMask Tx Signature: Unknown problem: ${JSON.stringify(finalTxMeta === null || finalTxMeta === void 0 ? void 0 : finalTxMeta.txParams)}`));
    }
  }

  /**
   * Creates approvals for all unapproved transactions in the txStateManager.
   */
  initApprovals() {
    const unapprovedTxs = this.txStateManager.getUnapprovedTxList();
    Object.values(unapprovedTxs).forEach(txMeta => {
      this._requestTransactionApproval(txMeta, {
        shouldShowRequest: false
      }).catch(error => {
        _loglevel.default.error('Error during persisted transaction approval', error);
      });
    });
  }

  // ====================================================================================================================================================

  /**
   * @param {number} txId
   * @returns {TransactionMeta} the txMeta who matches the given id if none found
   * for the network returns undefined
   */
  _getTransaction(txId) {
    const {
      transactions
    } = this.store.getState();
    return transactions[txId];
  }

  /**
   * @param {number} txId
   * @returns {boolean}
   */
  _isUnapprovedTransaction(txId) {
    return this.txStateManager.getTransaction(txId).status === _transaction.TransactionStatus.unapproved;
  }

  /**
   * @param {number} txId
   * @param {string} fnName
   */
  _throwErrorIfNotUnapprovedTx(txId, fnName) {
    if (!this._isUnapprovedTransaction(txId)) {
      throw new Error(`TransactionsController: Can only call ${fnName} on an unapproved transaction.
         Current tx status: ${this.txStateManager.getTransaction(txId).status}`);
    }
  }
  _updateTransaction(txId, proposedUpdate, note) {
    const txMeta = this.txStateManager.getTransaction(txId);
    const updated = (0, _lodash.merge)(txMeta, proposedUpdate);
    this.txStateManager.updateTransaction(updated, note);
  }

  /**
   * updates the params that are editible in the send edit flow
   *
   * @param {string} txId - transaction id
   * @param {object} previousGasParams - holds the parameter to update
   * @param {string} previousGasParams.maxFeePerGas
   * @param {string} previousGasParams.maxPriorityFeePerGas
   * @param {string} previousGasParams.gasLimit
   * @returns {TransactionMeta} the txMeta of the updated transaction
   */
  updatePreviousGasParams(txId, {
    maxFeePerGas,
    maxPriorityFeePerGas,
    gasLimit
  }) {
    const previousGasParams = {
      previousGas: {
        maxFeePerGas,
        maxPriorityFeePerGas,
        gasLimit
      }
    };

    // only update what is defined
    previousGasParams.previousGas = (0, _lodash.pickBy)(previousGasParams.previousGas);
    const note = `Update Previous Gas for ${txId}`;
    this._updateTransaction(txId, previousGasParams, note);
    return this._getTransaction(txId);
  }

  /**
   *
   * @param {string} txId - transaction id
   * @param {object} editableParams - holds the eip1559 fees parameters
   * @param {object} editableParams.data
   * @param {string} editableParams.from
   * @param {string} editableParams.to
   * @param {string} editableParams.value
   * @param {string} editableParams.gas
   * @param {string} editableParams.gasPrice
   * @returns {TransactionMeta} the txMeta of the updated transaction
   */
  async updateEditableParams(txId, {
    data,
    from,
    to,
    value,
    gas,
    gasPrice
  }) {
    this._throwErrorIfNotUnapprovedTx(txId, 'updateEditableParams');
    const editableParams = {
      txParams: {
        data,
        from,
        to,
        value,
        gas,
        gasPrice
      }
    };

    // only update what is defined
    editableParams.txParams = (0, _lodash.pickBy)(editableParams.txParams, prop => prop !== undefined);

    // update transaction type in case it has changes
    const transactionBeforeEdit = this._getTransaction(txId);
    const {
      type
    } = await (0, _transaction2.determineTransactionType)({
      ...transactionBeforeEdit.txParams,
      ...editableParams.txParams
    }, this.query);
    editableParams.type = type;
    const note = `Update Editable Params for ${txId}`;
    this._updateTransaction(txId, editableParams, note);
    return this._getTransaction(txId);
  }

  /**
   * updates the gas fees of the transaction with id if the transaction state is unapproved
   *
   * @param {string} txId - transaction id
   * @param {TxGasFees} txGasFees - holds the gas fees parameters
   * @returns {TransactionMeta} the txMeta of the updated transaction
   */
  updateTransactionGasFees(txId, {
    gas,
    gasLimit,
    gasPrice,
    maxPriorityFeePerGas,
    maxFeePerGas,
    estimateUsed,
    estimateSuggested,
    defaultGasEstimates,
    originalGasEstimate,
    userEditedGasLimit,
    userFeeLevel
  }) {
    this._throwErrorIfNotUnapprovedTx(txId, 'updateTransactionGasFees');
    let txGasFees = {
      txParams: {
        gas,
        gasLimit,
        gasPrice,
        maxPriorityFeePerGas,
        maxFeePerGas
      },
      estimateUsed,
      estimateSuggested,
      defaultGasEstimates,
      originalGasEstimate,
      userEditedGasLimit,
      userFeeLevel
    };

    // only update what is defined
    txGasFees.txParams = (0, _lodash.pickBy)(txGasFees.txParams);
    txGasFees = (0, _lodash.pickBy)(txGasFees);
    const note = `Update Transaction Gas Fees for ${txId}`;
    this._updateTransaction(txId, txGasFees, note);
    return this._getTransaction(txId);
  }

  /**
   * updates the estimate base fees of the transaction with id if the transaction state is unapproved
   *
   * @param {string} txId - transaction id
   * @param {object} txEstimateBaseFees - holds the estimate base fees parameters
   * @param {string} txEstimateBaseFees.estimatedBaseFee
   * @param {string} txEstimateBaseFees.decEstimatedBaseFee
   * @returns {TransactionMeta} the txMeta of the updated transaction
   */
  updateTransactionEstimatedBaseFee(txId, {
    estimatedBaseFee,
    decEstimatedBaseFee
  }) {
    this._throwErrorIfNotUnapprovedTx(txId, 'updateTransactionEstimatedBaseFee');
    let txEstimateBaseFees = {
      estimatedBaseFee,
      decEstimatedBaseFee
    };
    // only update what is defined
    txEstimateBaseFees = (0, _lodash.pickBy)(txEstimateBaseFees);
    const note = `Update Transaction Estimated Base Fees for ${txId}`;
    this._updateTransaction(txId, txEstimateBaseFees, note);
    return this._getTransaction(txId);
  }

  /**
   * updates a transaction's user settings only if the transaction state is unapproved
   *
   * @param {string} txId
   * @param {object} userSettings - holds the metadata
   * @param {string} userSettings.userEditedGasLimit
   * @param {string} userSettings.userFeeLevel
   * @returns {TransactionMeta} the txMeta of the updated transaction
   */
  updateTransactionUserSettings(txId, {
    userEditedGasLimit,
    userFeeLevel
  }) {
    this._throwErrorIfNotUnapprovedTx(txId, 'updateTransactionUserSettings');
    let userSettings = {
      userEditedGasLimit,
      userFeeLevel
    };
    // only update what is defined
    userSettings = (0, _lodash.pickBy)(userSettings);
    const note = `Update User Settings for ${txId}`;
    this._updateTransaction(txId, userSettings, note);
    return this._getTransaction(txId);
  }

  /**
   * append new sendFlowHistory to the transaction with id if the transaction
   * state is unapproved. Returns the updated transaction.
   *
   * @param {string} txId - transaction id
   * @param {number} currentSendFlowHistoryLength - sendFlowHistory entries currently
   * @param {Array<{ entry: string, timestamp: number }>} sendFlowHistory -
   *  history to add to the sendFlowHistory property of txMeta.
   * @returns {TransactionMeta} the txMeta of the updated transaction
   */
  updateTransactionSendFlowHistory(txId, currentSendFlowHistoryLength, sendFlowHistory) {
    var _txMeta$sendFlowHisto;
    this._throwErrorIfNotUnapprovedTx(txId, 'updateTransactionSendFlowHistory');
    const txMeta = this._getTransaction(txId);
    if (currentSendFlowHistoryLength === ((txMeta === null || txMeta === void 0 ? void 0 : (_txMeta$sendFlowHisto = txMeta.sendFlowHistory) === null || _txMeta$sendFlowHisto === void 0 ? void 0 : _txMeta$sendFlowHisto.length) || 0)) {
      // only update what is defined
      const note = `Update sendFlowHistory for ${txId}`;
      this.txStateManager.updateTransaction({
        ...txMeta,
        sendFlowHistory: [...((txMeta === null || txMeta === void 0 ? void 0 : txMeta.sendFlowHistory) ?? []), ...sendFlowHistory]
      }, note);
    }
    return this._getTransaction(txId);
  }
  async addTransactionGasDefaults(txMeta) {
    const contractCode = await (0, _transaction2.determineTransactionContractCode)(txMeta.txParams, this.query);
    let updateTxMeta = txMeta;
    try {
      updateTxMeta = await this.addTxGasDefaults(txMeta, contractCode);
    } catch (error) {
      _loglevel.default.warn(error);
      updateTxMeta = this.txStateManager.getTransaction(txMeta.id);
      updateTxMeta.loadingDefaults = false;
      this.txStateManager.updateTransaction(txMeta, 'Failed to calculate gas defaults.');
      throw error;
    }
    updateTxMeta.loadingDefaults = false;

    // The history note used here 'Added new unapproved transaction.' is confusing update call only updated the gas defaults.
    // We need to improve `this.addTransaction` to accept history note and change note here.
    this.txStateManager.updateTransaction(updateTxMeta, 'Added new unapproved transaction.');
    return updateTxMeta;
  }

  // ====================================================================================================================================================

  /**
   * Validates and generates a txMeta with defaults and puts it in txStateManager
   * store.
   *
   * actionId is used to uniquely identify a request to create a transaction.
   * Only 1 transaction will be created for multiple requests with same actionId.
   * actionId is fix used for making this action idempotent to deal with scenario when
   * action is invoked multiple times with same parameters in MV3 due to service worker re-activation.
   *
   * @param txMethodType
   * @param txParams
   * @param origin
   * @param transactionType
   * @param sendFlowHistory
   * @param actionId
   * @param options
   */
  async addUnapprovedTransaction(txMethodType, txParams, origin, transactionType, sendFlowHistory = [], actionId, options) {
    const {
      txMeta,
      isExisting
    } = await this._createTransaction(txMethodType, txParams, origin, transactionType, sendFlowHistory, actionId, options);
    if (isExisting) {
      const isCompleted = this._isTransactionCompleted(txMeta);
      return isCompleted ? txMeta : await this._waitForTransactionFinished(txMeta.id);
    }
    if ((options === null || options === void 0 ? void 0 : options.requireApproval) === false) {
      await this._updateAndApproveTransaction(txMeta, actionId);
    } else {
      await this._requestTransactionApproval(txMeta, {
        actionId
      });
    }
    return txMeta;
  }

  /**
   * Adds the tx gas defaults: gas && gasPrice
   *
   * @param {object} txMeta - the txMeta object
   * @param getCodeResponse
   * @returns {Promise<object>} resolves with txMeta
   */
  async addTxGasDefaults(txMeta, getCodeResponse) {
    const eip1559Compatibility = txMeta.txParams.type !== _transaction.TransactionEnvelopeType.legacy && (await this.getEIP1559Compatibility());
    const {
      gasPrice: defaultGasPrice,
      maxFeePerGas: defaultMaxFeePerGas,
      maxPriorityFeePerGas: defaultMaxPriorityFeePerGas
    } = await this._getDefaultGasFees(txMeta, eip1559Compatibility);
    const {
      gasLimit: defaultGasLimit,
      simulationFails
    } = await this._getDefaultGasLimit(txMeta, getCodeResponse);

    // eslint-disable-next-line no-param-reassign
    txMeta = this.txStateManager.getTransaction(txMeta.id);
    if (simulationFails) {
      txMeta.simulationFails = simulationFails;
    }
    if (eip1559Compatibility) {
      const advancedGasFeeDefaultValues = this.getAdvancedGasFee();
      if (Boolean(advancedGasFeeDefaultValues) && !SWAP_TRANSACTION_TYPES.includes(txMeta.type)) {
        txMeta.userFeeLevel = _gas.CUSTOM_GAS_ESTIMATE;
        txMeta.txParams.maxFeePerGas = (0, _conversion.decGWEIToHexWEI)(advancedGasFeeDefaultValues.maxBaseFee);
        txMeta.txParams.maxPriorityFeePerGas = (0, _conversion.decGWEIToHexWEI)(advancedGasFeeDefaultValues.priorityFee);
      } else if (txMeta.txParams.gasPrice && !txMeta.txParams.maxFeePerGas && !txMeta.txParams.maxPriorityFeePerGas) {
        // If the dapp has suggested a gas price, but no maxFeePerGas or maxPriorityFeePerGas
        //  then we set maxFeePerGas and maxPriorityFeePerGas to the suggested gasPrice.
        txMeta.txParams.maxFeePerGas = txMeta.txParams.gasPrice;
        txMeta.txParams.maxPriorityFeePerGas = txMeta.txParams.gasPrice;
        if (txMeta.origin === _app.ORIGIN_METAMASK) {
          txMeta.userFeeLevel = _gas.CUSTOM_GAS_ESTIMATE;
        } else {
          txMeta.userFeeLevel = _gas.PriorityLevels.dAppSuggested;
        }
      } else {
        if (defaultMaxFeePerGas && defaultMaxPriorityFeePerGas && !txMeta.txParams.maxFeePerGas && !txMeta.txParams.maxPriorityFeePerGas || txMeta.origin === _app.ORIGIN_METAMASK) {
          txMeta.userFeeLevel = _gas.GasRecommendations.medium;
        } else {
          txMeta.userFeeLevel = _gas.PriorityLevels.dAppSuggested;
        }
        if (defaultMaxFeePerGas && !txMeta.txParams.maxFeePerGas) {
          // If the dapp has not set the gasPrice or the maxFeePerGas, then we set maxFeePerGas
          // with the one returned by the gasFeeController, if that is available.
          txMeta.txParams.maxFeePerGas = defaultMaxFeePerGas;
        }
        if (defaultMaxPriorityFeePerGas && !txMeta.txParams.maxPriorityFeePerGas) {
          // If the dapp has not set the gasPrice or the maxPriorityFeePerGas, then we set maxPriorityFeePerGas
          // with the one returned by the gasFeeController, if that is available.
          txMeta.txParams.maxPriorityFeePerGas = defaultMaxPriorityFeePerGas;
        }
        if (defaultGasPrice && !txMeta.txParams.maxFeePerGas) {
          // If the dapp has not set the gasPrice or the maxFeePerGas, and no maxFeePerGas is available
          // from the gasFeeController, then we set maxFeePerGas to the defaultGasPrice, assuming it is
          // available.
          txMeta.txParams.maxFeePerGas = defaultGasPrice;
        }
        if (txMeta.txParams.maxFeePerGas && !txMeta.txParams.maxPriorityFeePerGas) {
          // If the dapp has not set the gasPrice or the maxPriorityFeePerGas, and no maxPriorityFeePerGas is
          // available from the gasFeeController, then we set maxPriorityFeePerGas to
          // txMeta.txParams.maxFeePerGas, which will either be the gasPrice from the controller, the maxFeePerGas
          // set by the dapp, or the maxFeePerGas from the controller.
          txMeta.txParams.maxPriorityFeePerGas = txMeta.txParams.maxFeePerGas;
        }
      }

      // We remove the gasPrice param entirely when on an eip1559 compatible network

      delete txMeta.txParams.gasPrice;
    } else {
      // We ensure that maxFeePerGas and maxPriorityFeePerGas are not in the transaction params
      // when not on a EIP1559 compatible network

      delete txMeta.txParams.maxPriorityFeePerGas;
      delete txMeta.txParams.maxFeePerGas;
    }

    // If we have gotten to this point, and none of gasPrice, maxPriorityFeePerGas or maxFeePerGas are
    // set on txParams, it means that either we are on a non-EIP1559 network and the dapp didn't suggest
    // a gas price, or we are on an EIP1559 network, and none of gasPrice, maxPriorityFeePerGas or maxFeePerGas
    // were available from either the dapp or the network.
    if (defaultGasPrice && !txMeta.txParams.gasPrice && !txMeta.txParams.maxPriorityFeePerGas && !txMeta.txParams.maxFeePerGas) {
      txMeta.txParams.gasPrice = defaultGasPrice;
    }
    if (defaultGasLimit && !txMeta.txParams.gas) {
      txMeta.txParams.gas = defaultGasLimit;
      txMeta.originalGasEstimate = defaultGasLimit;
    }
    txMeta.defaultGasEstimates = {
      estimateType: txMeta.userFeeLevel,
      gas: txMeta.txParams.gas,
      gasPrice: txMeta.txParams.gasPrice,
      maxFeePerGas: txMeta.txParams.maxFeePerGas,
      maxPriorityFeePerGas: txMeta.txParams.maxPriorityFeePerGas
    };
    return txMeta;
  }

  /**
   * Gets default gas fees, or returns `undefined` if gas fees are already set
   *
   * @param {object} txMeta - The txMeta object
   * @param eip1559Compatibility
   * @returns {Promise<string|undefined>} The default gas price
   */
  async _getDefaultGasFees(txMeta, eip1559Compatibility) {
    if (!eip1559Compatibility && txMeta.txParams.gasPrice || eip1559Compatibility && txMeta.txParams.maxFeePerGas && txMeta.txParams.maxPriorityFeePerGas) {
      return {};
    }
    try {
      const {
        gasFeeEstimates,
        gasEstimateType
      } = await this._getEIP1559GasFeeEstimates();
      if (eip1559Compatibility && gasEstimateType === _gas.GasEstimateTypes.feeMarket) {
        const {
          medium: {
            suggestedMaxPriorityFeePerGas,
            suggestedMaxFeePerGas
          } = {}
        } = gasFeeEstimates;
        if (suggestedMaxPriorityFeePerGas && suggestedMaxFeePerGas) {
          return {
            maxFeePerGas: (0, _conversion.decGWEIToHexWEI)(suggestedMaxFeePerGas),
            maxPriorityFeePerGas: (0, _conversion.decGWEIToHexWEI)(suggestedMaxPriorityFeePerGas)
          };
        }
      } else if (gasEstimateType === _gas.GasEstimateTypes.legacy) {
        // The LEGACY type includes low, medium and high estimates of
        // gas price values.
        return {
          gasPrice: (0, _conversion.decGWEIToHexWEI)(gasFeeEstimates.medium)
        };
      } else if (gasEstimateType === _gas.GasEstimateTypes.ethGasPrice) {
        // The ETH_GASPRICE type just includes a single gas price property,
        // which we can assume was retrieved from eth_gasPrice
        return {
          gasPrice: (0, _conversion.decGWEIToHexWEI)(gasFeeEstimates.gasPrice)
        };
      }
    } catch (e) {
      console.error(e);
    }
    const gasPrice = await this.query.gasPrice();
    return {
      gasPrice: gasPrice && (0, _util.addHexPrefix)(gasPrice.toString(16))
    };
  }

  /**
   * Gets default gas limit, or debug information about why gas estimate failed.
   *
   * @param {object} txMeta - The txMeta object
   * @returns {Promise<object>} Object containing the default gas limit, or the simulation failure object
   */
  async _getDefaultGasLimit(txMeta) {
    const chainId = this._getCurrentChainId();
    const customNetworkGasBuffer = _network.CHAIN_ID_TO_GAS_LIMIT_BUFFER_MAP[chainId];
    const chainType = (0, _util.getChainType)(chainId);
    if (txMeta.txParams.gas) {
      return {};
    } else if (txMeta.txParams.to && txMeta.type === _transaction.TransactionType.simpleSend && chainType !== 'custom' && !txMeta.txParams.data) {
      // This is a standard ether simple send, gas requirement is exactly 21k
      return {
        gasLimit: _gas.GAS_LIMITS.SIMPLE
      };
    }
    const {
      blockGasLimit,
      estimatedGasHex,
      simulationFails
    } = await this.txGasUtil.analyzeGasUsage(txMeta);

    // add additional gas buffer to our estimation for safety
    const gasLimit = this.txGasUtil.addGasBuffer((0, _util.addHexPrefix)(estimatedGasHex), blockGasLimit, customNetworkGasBuffer);
    return {
      gasLimit,
      simulationFails
    };
  }

  /**
   * Given a TransactionMeta object, generate new gas params such that if the
   * transaction was an EIP1559 transaction, it only has EIP1559 gas fields,
   * otherwise it only has gasPrice. Will use whatever custom values are
   * specified in customGasSettings, or falls back to incrementing by a percent
   * which is defined by specifying a numerator. 11 is a 10% bump, 12 would be
   * a 20% bump, and so on.
   *
   * @param {TransactionMeta} originalTxMeta - Original transaction to use as
   *  base
   * @param {CustomGasSettings} [customGasSettings] - overrides for the gas
   *  fields to use instead of the multiplier
   * @param {number} [incrementNumerator] - Numerator from which to generate a
   *  percentage bump of gas price. E.g 11 would be a 10% bump over base.
   * @returns {{ newGasParams: CustomGasSettings, previousGasParams: CustomGasSettings }}
   */
  generateNewGasParams(originalTxMeta, customGasSettings = {}, incrementNumerator = 11) {
    const {
      txParams
    } = originalTxMeta;
    const previousGasParams = {};
    const newGasParams = {};
    if (customGasSettings.gasLimit) {
      newGasParams.gas = (customGasSettings === null || customGasSettings === void 0 ? void 0 : customGasSettings.gas) ?? _gas.GAS_LIMITS.SIMPLE;
    }
    if (customGasSettings.estimateSuggested) {
      newGasParams.estimateSuggested = customGasSettings.estimateSuggested;
    }
    if (customGasSettings.estimateUsed) {
      newGasParams.estimateUsed = customGasSettings.estimateUsed;
    }
    if ((0, _transaction2.isEIP1559Transaction)(originalTxMeta)) {
      previousGasParams.maxFeePerGas = txParams.maxFeePerGas;
      previousGasParams.maxPriorityFeePerGas = txParams.maxPriorityFeePerGas;
      newGasParams.maxFeePerGas = (customGasSettings === null || customGasSettings === void 0 ? void 0 : customGasSettings.maxFeePerGas) || (0, _conversion.bnToHex)((0, _util.BnMultiplyByFraction)((0, _util.hexToBn)(txParams.maxFeePerGas), incrementNumerator, 10));
      newGasParams.maxPriorityFeePerGas = (customGasSettings === null || customGasSettings === void 0 ? void 0 : customGasSettings.maxPriorityFeePerGas) || (0, _conversion.bnToHex)((0, _util.BnMultiplyByFraction)((0, _util.hexToBn)(txParams.maxPriorityFeePerGas), incrementNumerator, 10));
    } else {
      previousGasParams.gasPrice = txParams.gasPrice;
      newGasParams.gasPrice = (customGasSettings === null || customGasSettings === void 0 ? void 0 : customGasSettings.gasPrice) || (0, _conversion.bnToHex)((0, _util.BnMultiplyByFraction)((0, _util.hexToBn)(txParams.gasPrice), incrementNumerator, 10));
    }
    return {
      previousGasParams,
      newGasParams
    };
  }

  /**
   * Creates a new approved transaction to attempt to cancel a previously submitted transaction. The
   * new transaction contains the same nonce as the previous, is a basic ETH transfer of 0x value to
   * the sender's address, and has a higher gasPrice than that of the previous transaction.
   *
   * @param {number} originalTxId - the id of the txMeta that you want to attempt to cancel
   * @param {CustomGasSettings} [customGasSettings] - overrides to use for gas
   *  params instead of allowing this method to generate them
   * @param options
   * @param options.estimatedBaseFee
   * @param options.actionId
   * @returns {txMeta}
   */
  async createCancelTransaction(originalTxId, customGasSettings, {
    estimatedBaseFee,
    actionId
  } = {}) {
    // If transaction is found for same action id, do not create a new cancel transaction.
    if (actionId) {
      const existingTxMeta = this.txStateManager.getTransactionWithActionId(actionId);
      if (existingTxMeta) {
        return existingTxMeta;
      }
    }
    const originalTxMeta = this.txStateManager.getTransaction(originalTxId);
    const {
      txParams
    } = originalTxMeta;
    const {
      from,
      nonce
    } = txParams;
    const {
      previousGasParams,
      newGasParams
    } = this.generateNewGasParams(originalTxMeta, {
      ...customGasSettings,
      // We want to override the previous transactions gasLimit because it
      // will now be a simple send instead of whatever it was before such
      // as a token transfer or contract call.
      gasLimit: customGasSettings.gasLimit || _gas.GAS_LIMITS.SIMPLE
    });
    const newTxMeta = this.txStateManager.generateTxMeta({
      txParams: {
        from,
        to: from,
        nonce,
        value: '0x0',
        ...newGasParams
      },
      previousGasParams,
      loadingDefaults: false,
      status: _transaction.TransactionStatus.approved,
      type: _transaction.TransactionType.cancel,
      actionId
    });
    if (estimatedBaseFee) {
      newTxMeta.estimatedBaseFee = estimatedBaseFee;
    }
    this.addTransaction(newTxMeta);
    await this._approveTransaction(newTxMeta.id, actionId, {
      hasApprovalRequest: false
    });
    return newTxMeta;
  }

  /**
   * Creates a new approved transaction to attempt to speed up a previously submitted transaction. The
   * new transaction contains the same nonce as the previous. By default, the new transaction will use
   * the same gas limit and a 10% higher gas price, though it is possible to set a custom value for
   * each instead.
   *
   * @param {number} originalTxId - the id of the txMeta that you want to speed up
   * @param {CustomGasSettings} [customGasSettings] - overrides to use for gas
   *  params instead of allowing this method to generate them
   * @param options
   * @param options.estimatedBaseFee
   * @param options.actionId
   * @returns {txMeta}
   */
  async createSpeedUpTransaction(originalTxId, customGasSettings, {
    estimatedBaseFee,
    actionId
  } = {}) {
    // If transaction is found for same action id, do not create a new speed-up transaction.
    if (actionId) {
      const existingTxMeta = this.txStateManager.getTransactionWithActionId(actionId);
      if (existingTxMeta) {
        return existingTxMeta;
      }
    }
    const originalTxMeta = this.txStateManager.getTransaction(originalTxId);
    const {
      txParams
    } = originalTxMeta;
    const {
      previousGasParams,
      newGasParams
    } = this.generateNewGasParams(originalTxMeta, customGasSettings);
    const newTxMeta = this.txStateManager.generateTxMeta({
      txParams: {
        ...txParams,
        ...newGasParams
      },
      previousGasParams,
      loadingDefaults: false,
      status: _transaction.TransactionStatus.approved,
      type: _transaction.TransactionType.retry,
      originalType: originalTxMeta.type,
      actionId
    });
    if (estimatedBaseFee) {
      newTxMeta.estimatedBaseFee = estimatedBaseFee;
    }
    this.addTransaction(newTxMeta);
    await this._approveTransaction(newTxMeta.id, actionId);
    return newTxMeta;
  }

  /**
   * updates the txMeta in the txStateManager
   *
   * @param {object} txMeta - the updated txMeta
   */
  async updateTransaction(txMeta) {
    this.txStateManager.updateTransaction(txMeta, 'confTx: user updated transaction');
  }
  async approveTransactionsWithSameNonce(listOfTxParams = []) {
    if (listOfTxParams.length === 0) {
      return '';
    }
    const initialTx = listOfTxParams[0];
    const common = await this.getCommonConfiguration(initialTx.from);
    const initialTxAsEthTx = _tx.TransactionFactory.fromTxData(initialTx, {
      common
    });
    const initialTxAsSerializedHex = (0, _ethereumjsUtil.bufferToHex)(initialTxAsEthTx.serialize());
    if (this.inProcessOfSigning.has(initialTxAsSerializedHex)) {
      return '';
    }
    this.inProcessOfSigning.add(initialTxAsSerializedHex);
    let rawTxes, nonceLock;
    try {
      // TODO: we should add a check to verify that all transactions have the same from address
      const fromAddress = initialTx.from;
      nonceLock = await this.nonceTracker.getNonceLock(fromAddress);
      const nonce = nonceLock.nextNonce;
      rawTxes = await Promise.all(listOfTxParams.map(txParams => {
        txParams.nonce = (0, _util.addHexPrefix)(nonce.toString(16));
        return this.signExternalTransaction(txParams);
      }));
    } catch (err) {
      _loglevel.default.error(err);
      // must set transaction to submitted/failed before releasing lock
      // continue with error chain
      throw err;
    } finally {
      if (nonceLock) {
        nonceLock.releaseLock();
      }
      this.inProcessOfSigning.delete(initialTxAsSerializedHex);
    }
    return rawTxes;
  }
  async signExternalTransaction(_txParams) {
    const normalizedTxParams = txUtils.normalizeTxParams(_txParams);
    // add network/chain id
    const chainId = this.getChainId();
    const type = (0, _transaction2.isEIP1559Transaction)({
      txParams: normalizedTxParams
    }) ? _transaction.TransactionEnvelopeType.feeMarket : _transaction.TransactionEnvelopeType.legacy;
    const txParams = {
      ...normalizedTxParams,
      type,
      gasLimit: normalizedTxParams.gas,
      chainId: new _Numeric.Numeric(chainId, 10).toPrefixedHexString()
    };
    // sign tx
    const fromAddress = txParams.from;
    const common = await this.getCommonConfiguration(fromAddress);
    const unsignedEthTx = _tx.TransactionFactory.fromTxData(txParams, {
      common
    });
    const signedEthTx = await this.signEthTx(unsignedEthTx, fromAddress);
    const rawTx = (0, _ethereumjsUtil.bufferToHex)(signedEthTx.serialize());
    return rawTx;
  }

  /**
   * adds the chain id and signs the transaction and set the status to signed
   *
   * @param {number} txId - the tx's Id
   * @returns {string} rawTx
   */
  async signTransaction(txId) {
    const txMeta = this.txStateManager.getTransaction(txId);
    // add network/chain id
    const chainId = this.getChainId();
    const type = (0, _transaction2.isEIP1559Transaction)(txMeta) ? _transaction.TransactionEnvelopeType.feeMarket : _transaction.TransactionEnvelopeType.legacy;
    const txParams = {
      ...txMeta.txParams,
      type,
      chainId,
      gasLimit: txMeta.txParams.gas
    };
    // sign tx
    const fromAddress = txParams.from;
    const common = await this.getCommonConfiguration(txParams.from);
    const unsignedEthTx = _tx.TransactionFactory.fromTxData(txParams, {
      common
    });
    const signedEthTx = await this.signEthTx(unsignedEthTx, fromAddress);

    // add r,s,v values for provider request purposes see createMetamaskMiddleware
    // and JSON rpc standard for further explanation
    txMeta.r = (0, _util.addHexPrefix)(signedEthTx.r.toString(16));
    txMeta.s = (0, _util.addHexPrefix)(signedEthTx.s.toString(16));
    txMeta.v = (0, _util.addHexPrefix)(signedEthTx.v.toString(16));
    this.txStateManager.updateTransaction(txMeta, 'transactions#signTransaction: add r, s, v values');

    // set state to signed
    this.txStateManager.setTxStatusSigned(txMeta.id);
    const rawTx = (0, _ethereumjsUtil.bufferToHex)(signedEthTx.serialize());
    return rawTx;
  }

  /**
   * publishes the raw tx and sets the txMeta to submitted
   *
   * @param {number} txId - the tx's Id
   * @param {string} rawTx - the hex string of the serialized signed transaction
   * @returns {Promise<void>}
   * @param {number} actionId - actionId passed from UI
   */
  async publishTransaction(txId, rawTx, actionId) {
    const txMeta = this.txStateManager.getTransaction(txId);
    txMeta.rawTx = rawTx;
    if (txMeta.type === _transaction.TransactionType.swap) {
      const preTxBalance = await this.query.getBalance(txMeta.txParams.from);
      txMeta.preTxBalance = preTxBalance.toString(16);
    }
    this.txStateManager.updateTransaction(txMeta, 'transactions#publishTransaction');
    let txHash;
    try {
      txHash = await this.query.sendRawTransaction(rawTx);
    } catch (error) {
      if (error.message.toLowerCase().includes('known transaction')) {
        txHash = (0, _ethereumjsUtil.keccak)((0, _ethereumjsUtil.toBuffer)((0, _util.addHexPrefix)(rawTx), 'hex')).toString('hex');
        txHash = (0, _util.addHexPrefix)(txHash);
      } else {
        throw error;
      }
    }
    this.setTxHash(txId, txHash);
    this.txStateManager.setTxStatusSubmitted(txId);
    this._trackTransactionMetricsEvent(txMeta, _transaction.TransactionMetaMetricsEvent.submitted, actionId);
  }
  async updatePostTxBalance({
    txMeta,
    txId,
    numberOfAttempts = 6
  }) {
    const postTxBalance = await this.query.getBalance(txMeta.txParams.from);
    const latestTxMeta = this.txStateManager.getTransaction(txId);
    const approvalTxMeta = latestTxMeta.approvalTxId ? this.txStateManager.getTransaction(latestTxMeta.approvalTxId) : null;
    latestTxMeta.postTxBalance = postTxBalance.toString(16);
    const isDefaultTokenAddress = (0, _swaps.isSwapsDefaultTokenAddress)(txMeta.destinationTokenAddress, txMeta.chainId);
    if (isDefaultTokenAddress && txMeta.preTxBalance === latestTxMeta.postTxBalance && numberOfAttempts > 0) {
      setTimeout(() => {
        // If postTxBalance is the same as preTxBalance, try it again.
        this.updatePostTxBalance({
          txMeta,
          txId,
          numberOfAttempts: numberOfAttempts - 1
        });
      }, UPDATE_POST_TX_BALANCE_TIMEOUT);
    } else {
      this.txStateManager.updateTransaction(latestTxMeta, 'transactions#confirmTransaction - add postTxBalance');
      this._trackSwapsMetrics(latestTxMeta, approvalTxMeta);
    }
  }

  /**
   * Sets the status of the transaction to confirmed and sets the status of nonce duplicates as
   * dropped if the txParams have data it will fetch the txReceipt
   *
   * @param {number} txId - The tx's ID
   * @param txReceipt
   * @param baseFeePerGas
   * @param blockTimestamp
   * @returns {Promise<void>}
   */
  async confirmTransaction(txId, txReceipt, baseFeePerGas, blockTimestamp) {
    // get the txReceipt before marking the transaction confirmed
    // to ensure the receipt is gotten before the ui revives the tx
    const txMeta = this.txStateManager.getTransaction(txId);
    if (!txMeta) {
      return;
    }
    try {
      const gasUsed = txUtils.normalizeTxReceiptGasUsed(txReceipt.gasUsed);
      txMeta.txReceipt = {
        ...txReceipt,
        gasUsed
      };
      if (baseFeePerGas) {
        txMeta.baseFeePerGas = baseFeePerGas;
      }
      if (blockTimestamp) {
        txMeta.blockTimestamp = blockTimestamp;
      }
      this.txStateManager.setTxStatusConfirmed(txId);
      this._markNonceDuplicatesDropped(txId);
      const {
        submittedTime
      } = txMeta;
      const metricsParams = {
        gas_used: gasUsed
      };
      if (submittedTime) {
        metricsParams.completion_time = this._getTransactionCompletionTime(submittedTime);
      }
      if (txReceipt.status === '0x0') {
        metricsParams.status = METRICS_STATUS_FAILED;
        // metricsParams.error = TODO: figure out a way to get the on-chain failure reason
      }

      this._trackTransactionMetricsEvent(txMeta, _transaction.TransactionMetaMetricsEvent.finalized, undefined, metricsParams);
      this.txStateManager.updateTransaction(txMeta, 'transactions#confirmTransaction - add txReceipt');
      if (txMeta.type === _transaction.TransactionType.swap) {
        await this.updatePostTxBalance({
          txMeta,
          txId
        });
      }
    } catch (err) {
      _loglevel.default.error(err);
    }
  }
  async confirmExternalTransaction(txMeta, txReceipt, baseFeePerGas) {
    // add external transaction
    await this.txStateManager.addExternalTransaction(txMeta);
    if (!txMeta) {
      return;
    }
    const txId = txMeta.id;
    try {
      const gasUsed = txUtils.normalizeTxReceiptGasUsed(txReceipt.gasUsed);
      txMeta.txReceipt = {
        ...txReceipt,
        gasUsed
      };
      if (baseFeePerGas) {
        txMeta.baseFeePerGas = baseFeePerGas;
      }
      this.txStateManager.setTxStatusConfirmed(txId);
      this._markNonceDuplicatesDropped(txId);
      const {
        submittedTime
      } = txMeta;
      const metricsParams = {
        gas_used: gasUsed
      };
      if (submittedTime) {
        metricsParams.completion_time = this._getTransactionCompletionTime(submittedTime);
      }
      if (txReceipt.status === '0x0') {
        metricsParams.status = METRICS_STATUS_FAILED;
        // metricsParams.error = TODO: figure out a way to get the on-chain failure reason
      }

      this._trackTransactionMetricsEvent(txMeta, _transaction.TransactionMetaMetricsEvent.finalized, undefined, metricsParams);
      this.txStateManager.updateTransaction(txMeta, 'transactions#confirmTransaction - add txReceipt');
      if (txMeta.type === _transaction.TransactionType.swap) {
        await this.updatePostTxBalance({
          txMeta,
          txId
        });
      }
    } catch (err) {
      _loglevel.default.error(err);
    }
  }

  /**
   * Sets the txHas on the txMeta
   *
   * @param {number} txId - the tx's Id
   * @param {string} txHash - the hash for the txMeta
   */
  setTxHash(txId, txHash) {
    // Add the tx hash to the persisted meta-tx object
    const txMeta = this.txStateManager.getTransaction(txId);
    txMeta.hash = txHash;
    this.txStateManager.updateTransaction(txMeta, 'transactions#setTxHash');
  }

  /**
   * Convenience method for the UI to easily create event fragments when the
   * fragment does not exist in state.
   *
   * @param {number} transactionId - The transaction id to create the event
   *  fragment for
   * @param {valueOf<TransactionMetaMetricsEvent>} event - event type to create
   * @param {string} actionId - actionId passed from UI
   */
  async createTransactionEventFragment(transactionId, event, actionId) {
    const txMeta = this.txStateManager.getTransaction(transactionId);
    const {
      properties,
      sensitiveProperties
    } = await this._buildEventFragmentProperties(txMeta);
    this._createTransactionEventFragment(txMeta, event, properties, sensitiveProperties, actionId);
  }

  //
  //           PRIVATE METHODS
  //

  _isTransactionCompleted(txMeta) {
    return [_transaction.TransactionStatus.submitted, _transaction.TransactionStatus.rejected, _transaction.TransactionStatus.failed, _transaction.TransactionStatus.dropped, _transaction.TransactionStatus.confirmed].includes(txMeta.status);
  }
  async _waitForTransactionFinished(txId) {
    return new Promise(resolve => {
      this.txStateManager.once(`${txId}:finished`, txMeta => {
        resolve(txMeta);
      });
    });
  }
  async _createTransaction(txMethodType, txParams, origin, transactionType, sendFlowHistory = [], actionId, options) {
    if (transactionType !== undefined && !VALID_UNAPPROVED_TRANSACTION_TYPES.includes(transactionType)) {
      throw new Error(`TransactionController - invalid transactionType value: ${transactionType}`);
    }

    // If a transaction is found with the same actionId, do not create a new speed-up transaction.
    if (actionId) {
      let existingTxMeta = this.txStateManager.getTransactionWithActionId(actionId);
      if (existingTxMeta) {
        existingTxMeta = await this.addTransactionGasDefaults(existingTxMeta);
        return {
          txMeta: existingTxMeta,
          isExisting: true
        };
      }
    }

    // validate
    const normalizedTxParams = txUtils.normalizeTxParams(txParams);
    const eip1559Compatibility = await this.getEIP1559Compatibility();
    txUtils.validateTxParams(normalizedTxParams, eip1559Compatibility);

    /**
     * `generateTxMeta` adds the default txMeta properties to the passed object.
     * These include the tx's `id`. As we use the id for determining order of
     * txes in the tx-state-manager, it is necessary to call the asynchronous
     * method `determineTransactionType` after `generateTxMeta`.
     */
    let txMeta = this.txStateManager.generateTxMeta({
      txParams: normalizedTxParams,
      origin,
      sendFlowHistory
    });

    // Add actionId to txMeta to check if same actionId is seen again
    // IF request to create transaction with same actionId is submitted again, new transaction will not be added for it.
    if (actionId) {
      txMeta.actionId = actionId;
    }
    if (origin === _app.ORIGIN_METAMASK) {
      // Assert the from address is the selected address
      if (normalizedTxParams.from !== this.getSelectedAddress()) {
        throw _ethRpcErrors.ethErrors.rpc.internal({
          message: `Internally initiated transaction is using invalid account.`,
          data: {
            origin,
            fromAddress: normalizedTxParams.from,
            selectedAddress: this.getSelectedAddress()
          }
        });
      }
    } else {
      // Assert that the origin has permissions to initiate transactions from
      // the specified address
      const permittedAddresses = await this.getPermittedAccounts(origin);
      if (!permittedAddresses.includes(normalizedTxParams.from)) {
        throw _ethRpcErrors.ethErrors.provider.unauthorized({
          data: {
            origin
          }
        });
      }
    }
    const {
      type
    } = await (0, _transaction2.determineTransactionType)(normalizedTxParams, this.query);
    txMeta.type = transactionType || type;

    // ensure value
    txMeta.txParams.value = txMeta.txParams.value ? (0, _util.addHexPrefix)(txMeta.txParams.value) : '0x0';
    if (txMethodType && this.securityProviderRequest) {
      const securityProviderResponse = await this.securityProviderRequest(txMeta, txMethodType);
      txMeta.securityProviderResponse = securityProviderResponse;
    }
    this.addTransaction(txMeta);
    txMeta = await this.addTransactionGasDefaults(txMeta);
    if ([_transaction.TransactionType.swap, _transaction.TransactionType.swapApproval].includes(transactionType)) {
      txMeta = await this._createSwapsTransaction(options === null || options === void 0 ? void 0 : options.swaps, transactionType, txMeta);
    }
    return {
      txMeta,
      isExisting: false
    };
  }
  async _createSwapsTransaction(swapOptions, transactionType, txMeta) {
    // The simulationFails property is added if the estimateGas call fails. In cases
    // when no swaps approval tx is required, this indicates that the swap will likely
    // fail. There was an earlier estimateGas call made by the swaps controller,
    // but it is possible that external conditions have change since then, and
    // a previously succeeding estimate gas call could now fail. By checking for
    // the `simulationFails` property here, we can reduce the number of swap
    // transactions that get published to the blockchain only to fail and thereby
    // waste the user's funds on gas.
    if (transactionType === _transaction.TransactionType.swap && (swapOptions === null || swapOptions === void 0 ? void 0 : swapOptions.hasApproveTx) === false && txMeta.simulationFails) {
      await this._cancelTransaction(txMeta.id);
      throw new Error('Simulation failed');
    }
    const swapsMeta = swapOptions === null || swapOptions === void 0 ? void 0 : swapOptions.meta;
    if (!swapsMeta) {
      return txMeta;
    }
    if (transactionType === _transaction.TransactionType.swapApproval) {
      this.emit('newSwapApproval', txMeta);
      return this._updateSwapApprovalTransaction(txMeta.id, swapsMeta);
    }
    if (transactionType === _transaction.TransactionType.swap) {
      this.emit('newSwap', txMeta);
      return this._updateSwapTransaction(txMeta.id, swapsMeta);
    }
    return txMeta;
  }

  /**
   * updates a swap approval transaction with provided metadata and source token symbol
   *  if the transaction state is unapproved.
   *
   * @param {string} txId
   * @param {object} swapApprovalTransaction - holds the metadata and token symbol
   * @param {string} swapApprovalTransaction.type
   * @param {string} swapApprovalTransaction.sourceTokenSymbol
   * @returns {TransactionMeta} the txMeta of the updated transaction
   */
  _updateSwapApprovalTransaction(txId, {
    type,
    sourceTokenSymbol
  }) {
    this._throwErrorIfNotUnapprovedTx(txId, 'updateSwapApprovalTransaction');
    let swapApprovalTransaction = {
      type,
      sourceTokenSymbol
    };
    // only update what is defined
    swapApprovalTransaction = (0, _lodash.pickBy)(swapApprovalTransaction);
    const note = `Update Swap Approval Transaction for ${txId}`;
    this._updateTransaction(txId, swapApprovalTransaction, note);
    return this._getTransaction(txId);
  }

  /**
   * updates a swap transaction with provided metadata and source token symbol
   *  if the transaction state is unapproved.
   *
   * @param {string} txId
   * @param {object} swapTransaction - holds the metadata
   * @param {string} swapTransaction.sourceTokenSymbol
   * @param {string} swapTransaction.destinationTokenSymbol
   * @param {string} swapTransaction.type
   * @param {string} swapTransaction.destinationTokenDecimals
   * @param {string} swapTransaction.destinationTokenAddress
   * @param {string} swapTransaction.swapMetaData
   * @param {string} swapTransaction.swapTokenValue
   * @param {string} swapTransaction.estimatedBaseFee
   * @param {string} swapTransaction.approvalTxId
   * @returns {TransactionMeta} the txMeta of the updated transaction
   */
  _updateSwapTransaction(txId, {
    sourceTokenSymbol,
    destinationTokenSymbol,
    type,
    destinationTokenDecimals,
    destinationTokenAddress,
    swapMetaData,
    swapTokenValue,
    estimatedBaseFee,
    approvalTxId
  }) {
    this._throwErrorIfNotUnapprovedTx(txId, 'updateSwapTransaction');
    let swapTransaction = {
      sourceTokenSymbol,
      destinationTokenSymbol,
      type,
      destinationTokenDecimals,
      destinationTokenAddress,
      swapMetaData,
      swapTokenValue,
      estimatedBaseFee,
      approvalTxId
    };

    // only update what is defined
    swapTransaction = (0, _lodash.pickBy)(swapTransaction);
    const note = `Update Swap Transaction for ${txId}`;
    this._updateTransaction(txId, swapTransaction, note);
    return this._getTransaction(txId);
  }

  /**
   * updates and approves the transaction
   *
   * @param {object} txMeta
   * @param {string} actionId
   */
  async _updateAndApproveTransaction(txMeta, actionId) {
    this.txStateManager.updateTransaction(txMeta, 'confTx: user approved transaction');
    await this._approveTransaction(txMeta.id, actionId);
  }

  /**
   * sets the tx status to approved
   * auto fills the nonce
   * signs the transaction
   * publishes the transaction
   * if any of these steps fails the tx status will be set to failed
   *
   * @param {number} txId - the tx's Id
   * @param {string} actionId - actionId passed from UI
   */
  async _approveTransaction(txId, actionId) {
    // TODO: Move this safety out of this function.
    // Since this transaction is async,
    // we need to keep track of what is currently being signed,
    // So that we do not increment nonce + resubmit something
    // that is already being incremented & signed.
    const txMeta = this.txStateManager.getTransaction(txId);
    if (this.inProcessOfSigning.has(txId)) {
      return;
    }
    this.inProcessOfSigning.add(txId);
    let nonceLock;
    try {
      // approve
      this.txStateManager.setTxStatusApproved(txId);
      // get next nonce
      const fromAddress = txMeta.txParams.from;
      // wait for a nonce
      let {
        customNonceValue
      } = txMeta;
      customNonceValue = Number(customNonceValue);
      nonceLock = await this.nonceTracker.getNonceLock(fromAddress);
      // add nonce to txParams
      // if txMeta has previousGasParams then it is a retry at same nonce with
      // higher gas settings and therefor the nonce should not be recalculated
      const nonce = txMeta.previousGasParams ? txMeta.txParams.nonce : nonceLock.nextNonce;
      const customOrNonce = customNonceValue === 0 ? customNonceValue : customNonceValue || nonce;
      txMeta.txParams.nonce = (0, _util.addHexPrefix)(customOrNonce.toString(16));
      // add nonce debugging information to txMeta
      txMeta.nonceDetails = nonceLock.nonceDetails;
      if (customNonceValue) {
        txMeta.nonceDetails.customNonceValue = customNonceValue;
      }
      this.txStateManager.updateTransaction(txMeta, 'transactions#approveTransaction');
      // sign transaction
      const rawTx = await this.signTransaction(txId);
      await this.publishTransaction(txId, rawTx, actionId);
      this._trackTransactionMetricsEvent(txMeta, _transaction.TransactionMetaMetricsEvent.approved, actionId);
      // must set transaction to submitted/failed before releasing lock
      nonceLock.releaseLock();
    } catch (err) {
      // this is try-catch wrapped so that we can guarantee that the nonceLock is released
      try {
        this._failTransaction(txId, err, actionId);
      } catch (err2) {
        _loglevel.default.error(err2);
      }
      // must set transaction to submitted/failed before releasing lock
      if (nonceLock) {
        nonceLock.releaseLock();
      }
      // continue with error chain
      throw err;
    } finally {
      this.inProcessOfSigning.delete(txId);
    }
  }

  /**
   * Convenience method for the ui thats sets the transaction to rejected
   *
   * @param {number} txId - the tx's Id
   * @param {string} actionId - actionId passed from UI
   * @returns {Promise<void>}
   */
  async _cancelTransaction(txId, actionId) {
    const txMeta = this.txStateManager.getTransaction(txId);
    this.txStateManager.setTxStatusRejected(txId);
    this._trackTransactionMetricsEvent(txMeta, _transaction.TransactionMetaMetricsEvent.rejected, actionId);
  }

  /** maps methods for convenience*/
  _mapMethods() {
    /** @returns {object} the state in transaction controller */
    this.getState = () => this.memStore.getState();

    /** @returns {string} the user selected address */
    this.getSelectedAddress = () => this.preferencesStore.getState().selectedAddress;

    /** @returns {Array} transactions whos status is unapproved */
    this.getUnapprovedTxCount = () => Object.keys(this.txStateManager.getUnapprovedTxList()).length;

    /**
     * @returns {number} number of transactions that have the status submitted
     * @param {string} account - hex prefixed account
     */
    this.getPendingTxCount = account => this.txStateManager.getPendingTransactions(account).length;

    /**
     * see txStateManager
     *
     * @param opts
     */
    this.getTransactions = opts => this.txStateManager.getTransactions(opts);

    /** @returns {object} the saved default values for advancedGasFee */
    this.getAdvancedGasFee = () => this.preferencesStore.getState().advancedGasFee;
  }

  // called once on startup
  async _updatePendingTxsAfterFirstBlock() {
    // wait for first block so we know we're ready
    await this.blockTracker.getLatestBlock();
    // get status update for all pending transactions (for the current network)
    await this.pendingTxTracker.updatePendingTxs();
  }

  /**
   * If transaction controller was rebooted with transactions that are uncompleted
   * in steps of the transaction signing or user confirmation process it will either
   * transition txMetas to a failed state or try to redo those tasks.
   */

  _onBootCleanUp() {
    this.txStateManager.getTransactions({
      searchCriteria: {
        status: _transaction.TransactionStatus.unapproved,
        loadingDefaults: true
      }
    }).forEach(tx => {
      this.addTxGasDefaults(tx).then(txMeta => {
        txMeta.loadingDefaults = false;
        this.txStateManager.updateTransaction(txMeta, 'transactions: gas estimation for tx on boot');
      }).catch(error => {
        const txMeta = this.txStateManager.getTransaction(tx.id);
        txMeta.loadingDefaults = false;
        this.txStateManager.updateTransaction(txMeta, 'failed to estimate gas during boot cleanup.');
        this._failTransaction(txMeta.id, error);
      });
    });
    this.txStateManager.getTransactions({
      searchCriteria: {
        status: _transaction.TransactionStatus.approved
      }
    }).forEach(txMeta => {
      // Line below will try to publish transaction which is in
      // APPROVED state at the time of controller bootup
      this._approveTransaction(txMeta.id);
    });
  }

  /**
   * is called in constructor applies the listeners for pendingTxTracker txStateManager
   * and blockTracker
   */
  _setupListeners() {
    this.txStateManager.on('tx:status-update', this.emit.bind(this, 'tx:status-update'));
    this._setupBlockTrackerListener();
    this.pendingTxTracker.on('tx:warning', txMeta => {
      this.txStateManager.updateTransaction(txMeta, 'transactions/pending-tx-tracker#event: tx:warning');
    });
    this.pendingTxTracker.on('tx:failed', (txId, error) => {
      this._failTransaction(txId, error);
    });
    this.pendingTxTracker.on('tx:confirmed', (txId, transactionReceipt, baseFeePerGas, blockTimestamp) => this.confirmTransaction(txId, transactionReceipt, baseFeePerGas, blockTimestamp));
    this.pendingTxTracker.on('tx:dropped', txId => {
      this._dropTransaction(txId);
    });
    this.pendingTxTracker.on('tx:block-update', (txMeta, latestBlockNumber) => {
      if (!txMeta.firstRetryBlockNumber) {
        txMeta.firstRetryBlockNumber = latestBlockNumber;
        this.txStateManager.updateTransaction(txMeta, 'transactions/pending-tx-tracker#event: tx:block-update');
      }
    });
    this.pendingTxTracker.on('tx:retry', txMeta => {
      if (!('retryCount' in txMeta)) {
        txMeta.retryCount = 0;
      }
      txMeta.retryCount += 1;
      this.txStateManager.updateTransaction(txMeta, 'transactions/pending-tx-tracker#event: tx:retry');
    });
  }

  /**
   * Sets other txMeta statuses to dropped if the txMeta that has been confirmed has other transactions
   * in the list have the same nonce
   *
   * @param {number} txId - the txId of the transaction that has been confirmed in a block
   */
  _markNonceDuplicatesDropped(txId) {
    // get the confirmed transactions nonce and from address
    const txMeta = this.txStateManager.getTransaction(txId);
    const {
      nonce,
      from
    } = txMeta.txParams;
    const sameNonceTxs = this.txStateManager.getTransactions({
      searchCriteria: {
        nonce,
        from
      }
    });
    if (!sameNonceTxs.length) {
      return;
    }
    // mark all same nonce transactions as dropped and give i a replacedBy hash
    sameNonceTxs.forEach(otherTxMeta => {
      if (otherTxMeta.id === txId) {
        return;
      }
      otherTxMeta.replacedBy = txMeta.hash;
      otherTxMeta.replacedById = txMeta.id;
      this.txStateManager.updateTransaction(txMeta, 'transactions/pending-tx-tracker#event: tx:confirmed reference to confirmed txHash with same nonce');
      // Drop any transaction that wasn't previously failed (off chain failure)
      if (otherTxMeta.status !== _transaction.TransactionStatus.failed) {
        this._dropTransaction(otherTxMeta.id);
      }
    });
  }
  _setupBlockTrackerListener() {
    let listenersAreActive = false;
    const latestBlockHandler = this._onLatestBlock.bind(this);
    const {
      blockTracker,
      txStateManager
    } = this;
    txStateManager.on('tx:status-update', updateSubscription);
    updateSubscription();
    function updateSubscription() {
      const pendingTxs = txStateManager.getPendingTransactions();
      if (!listenersAreActive && pendingTxs.length > 0) {
        blockTracker.on('latest', latestBlockHandler);
        listenersAreActive = true;
      } else if (listenersAreActive && !pendingTxs.length) {
        blockTracker.removeListener('latest', latestBlockHandler);
        listenersAreActive = false;
      }
    }
  }
  async _onLatestBlock(blockNumber) {
    try {
      await this.pendingTxTracker.updatePendingTxs();
    } catch (err) {
      _loglevel.default.error(err);
    }
    try {
      await this.pendingTxTracker.resubmitPendingTxs(blockNumber);
    } catch (err) {
      _loglevel.default.error(err);
    }
  }

  /**
   * Updates the memStore in transaction controller
   */
  _updateMemstore() {
    const unapprovedTxs = this.txStateManager.getUnapprovedTxList();
    const currentNetworkTxList = this.txStateManager.getTransactions({
      limit: MAX_MEMSTORE_TX_LIST_SIZE
    });
    this.memStore.updateState({
      unapprovedTxs,
      currentNetworkTxList
    });
  }
  _calculateTransactionsCost(txMeta, approvalTxMeta) {
    let approvalGasCost = '0x0';
    if (approvalTxMeta !== null && approvalTxMeta !== void 0 && approvalTxMeta.txReceipt) {
      approvalGasCost = (0, _transactionsControllerUtils.calcGasTotal)(approvalTxMeta.txReceipt.gasUsed, approvalTxMeta.txReceipt.effectiveGasPrice);
    }
    const tradeGasCost = (0, _transactionsControllerUtils.calcGasTotal)(txMeta.txReceipt.gasUsed, txMeta.txReceipt.effectiveGasPrice);
    const tradeAndApprovalGasCost = new _bignumber.default(tradeGasCost, 16).plus(approvalGasCost, 16).toString(16);
    return {
      approvalGasCostInEth: Number((0, _conversion.hexWEIToDecETH)(approvalGasCost)),
      tradeGasCostInEth: Number((0, _conversion.hexWEIToDecETH)(tradeGasCost)),
      tradeAndApprovalGasCostInEth: Number((0, _conversion.hexWEIToDecETH)(tradeAndApprovalGasCost))
    };
  }
  _trackSwapsMetrics(txMeta, approvalTxMeta) {
    if (this._getParticipateInMetrics() && txMeta.swapMetaData) {
      if (txMeta.txReceipt.status === '0x0') {
        this._trackMetaMetricsEvent({
          event: 'Swap Failed',
          sensitiveProperties: {
            ...txMeta.swapMetaData
          },
          category: _metametrics.MetaMetricsEventCategory.Swaps
        });
      } else {
        const tokensReceived = (0, _transactionsControllerUtils.getSwapsTokensReceivedFromTxMeta)(txMeta.destinationTokenSymbol, txMeta, txMeta.destinationTokenAddress, txMeta.txParams.from, txMeta.destinationTokenDecimals, approvalTxMeta, txMeta.chainId);
        const quoteVsExecutionRatio = tokensReceived ? `${new _bignumber.default(tokensReceived, 10).div(txMeta.swapMetaData.token_to_amount, 10).times(100).round(2)}%` : null;
        const estimatedVsUsedGasRatio = txMeta.txReceipt.gasUsed && txMeta.swapMetaData.estimated_gas ? `${new _bignumber.default(txMeta.txReceipt.gasUsed, 16).div(txMeta.swapMetaData.estimated_gas, 10).times(100).round(2)}%` : null;
        const transactionsCost = this._calculateTransactionsCost(txMeta, approvalTxMeta);
        this._trackMetaMetricsEvent({
          event: 'Swap Completed',
          category: _metametrics.MetaMetricsEventCategory.Swaps,
          sensitiveProperties: {
            ...txMeta.swapMetaData,
            token_to_amount_received: tokensReceived,
            quote_vs_executionRatio: quoteVsExecutionRatio,
            estimated_vs_used_gasRatio: estimatedVsUsedGasRatio,
            approval_gas_cost_in_eth: transactionsCost.approvalGasCostInEth,
            trade_gas_cost_in_eth: transactionsCost.tradeGasCostInEth,
            trade_and_approval_gas_cost_in_eth: transactionsCost.tradeAndApprovalGasCostInEth
          }
        });
      }
    }
  }

  /**
   * The allowance amount in relation to the dapp proposed amount for specific token
   *
   * @param {string} transactionApprovalAmountType - The transaction approval amount type
   * @param {string} originalApprovalAmount - The original approval amount is the originally dapp proposed token amount
   * @param {string} finalApprovalAmount - The final approval amount is the chosen amount which will be the same as the
   * originally dapp proposed token amount if the user does not edit the amount or will be a custom token amount set by the user
   */
  _allowanceAmountInRelationToDappProposedValue(transactionApprovalAmountType, originalApprovalAmount, finalApprovalAmount) {
    if (transactionApprovalAmountType === _transaction.TransactionApprovalAmountType.custom && originalApprovalAmount && finalApprovalAmount) {
      return `${new _bignumber.default(originalApprovalAmount, 10).div(finalApprovalAmount, 10).times(100).round(2)}`;
    }
    return null;
  }

  /**
   * The allowance amount in relation to the balance for that specific token
   *
   * @param {string} transactionApprovalAmountType - The transaction approval amount type
   * @param {string} dappProposedTokenAmount - The dapp proposed token amount
   * @param {string} currentTokenBalance - The balance of the token that is being send
   */
  _allowanceAmountInRelationToTokenBalance(transactionApprovalAmountType, dappProposedTokenAmount, currentTokenBalance) {
    if ((transactionApprovalAmountType === _transaction.TransactionApprovalAmountType.custom || transactionApprovalAmountType === _transaction.TransactionApprovalAmountType.dappProposed) && dappProposedTokenAmount && currentTokenBalance) {
      return `${new _bignumber.default(dappProposedTokenAmount, 16).div(currentTokenBalance, 10).times(100).round(2)}`;
    }
    return null;
  }
  async _buildEventFragmentProperties(txMeta, extraParams) {
    const {
      type,
      time,
      status,
      chainId,
      origin: referrer,
      txParams: {
        gasPrice,
        gas: gasLimit,
        maxFeePerGas,
        maxPriorityFeePerGas,
        estimateSuggested,
        estimateUsed
      },
      defaultGasEstimates,
      originalType,
      replacedById,
      metamaskNetworkId: network,
      customTokenAmount,
      dappProposedTokenAmount,
      currentTokenBalance,
      originalApprovalAmount,
      finalApprovalAmount,
      contractMethodName,
      securityProviderResponse
    } = txMeta;
    const source = referrer === _app.ORIGIN_METAMASK ? 'user' : 'dapp';
    const {
      assetType,
      tokenStandard
    } = await (0, _transaction2.determineTransactionAssetType)(txMeta, this.query, this.getTokenStandardAndDetails);
    const gasParams = {};
    if ((0, _transaction2.isEIP1559Transaction)(txMeta)) {
      gasParams.max_fee_per_gas = maxFeePerGas;
      gasParams.max_priority_fee_per_gas = maxPriorityFeePerGas;
    } else {
      gasParams.gas_price = gasPrice;
    }
    if (defaultGasEstimates) {
      const {
        estimateType
      } = defaultGasEstimates;
      if (estimateType) {
        gasParams.default_estimate = estimateType;
        let defaultMaxFeePerGas = txMeta.defaultGasEstimates.maxFeePerGas;
        let defaultMaxPriorityFeePerGas = txMeta.defaultGasEstimates.maxPriorityFeePerGas;
        if ([_gas.GasRecommendations.low, _gas.GasRecommendations.medium, _gas.GasRecommendations.high].includes(estimateType)) {
          var _gasFeeEstimates$esti, _gasFeeEstimates$esti3;
          const {
            gasFeeEstimates
          } = await this._getEIP1559GasFeeEstimates();
          if (gasFeeEstimates !== null && gasFeeEstimates !== void 0 && (_gasFeeEstimates$esti = gasFeeEstimates[estimateType]) !== null && _gasFeeEstimates$esti !== void 0 && _gasFeeEstimates$esti.suggestedMaxFeePerGas) {
            var _gasFeeEstimates$esti2;
            defaultMaxFeePerGas = (_gasFeeEstimates$esti2 = gasFeeEstimates[estimateType]) === null || _gasFeeEstimates$esti2 === void 0 ? void 0 : _gasFeeEstimates$esti2.suggestedMaxFeePerGas;
            gasParams.default_max_fee_per_gas = defaultMaxFeePerGas;
          }
          if (gasFeeEstimates !== null && gasFeeEstimates !== void 0 && (_gasFeeEstimates$esti3 = gasFeeEstimates[estimateType]) !== null && _gasFeeEstimates$esti3 !== void 0 && _gasFeeEstimates$esti3.suggestedMaxPriorityFeePerGas) {
            var _gasFeeEstimates$esti4;
            defaultMaxPriorityFeePerGas = (_gasFeeEstimates$esti4 = gasFeeEstimates[estimateType]) === null || _gasFeeEstimates$esti4 === void 0 ? void 0 : _gasFeeEstimates$esti4.suggestedMaxPriorityFeePerGas;
            gasParams.default_max_priority_fee_per_gas = defaultMaxPriorityFeePerGas;
          }
        }
      }
      if (txMeta.defaultGasEstimates.gas) {
        gasParams.default_gas = txMeta.defaultGasEstimates.gas;
      }
      if (txMeta.defaultGasEstimates.gasPrice) {
        gasParams.default_gas_price = txMeta.defaultGasEstimates.gasPrice;
      }
    }
    if (estimateSuggested) {
      gasParams.estimate_suggested = estimateSuggested;
    }
    if (estimateUsed) {
      gasParams.estimate_used = estimateUsed;
    }
    if (extraParams !== null && extraParams !== void 0 && extraParams.gas_used) {
      gasParams.gas_used = extraParams.gas_used;
    }
    const gasParamsInGwei = this._getGasValuesInGWEI(gasParams);
    let eip1559Version = '0';
    if (txMeta.txParams.maxFeePerGas) {
      eip1559Version = '2';
    }
    const contractInteractionTypes = [_transaction.TransactionType.contractInteraction, _transaction.TransactionType.tokenMethodApprove, _transaction.TransactionType.tokenMethodSafeTransferFrom, _transaction.TransactionType.tokenMethodSetApprovalForAll, _transaction.TransactionType.tokenMethodTransfer, _transaction.TransactionType.tokenMethodTransferFrom, _transaction.TransactionType.smart, _transaction.TransactionType.swap, _transaction.TransactionType.swapApproval].includes(type);
    const contractMethodNames = {
      APPROVE: 'Approve'
    };
    let transactionApprovalAmountType;
    let transactionContractMethod;
    let transactionApprovalAmountVsProposedRatio;
    let transactionApprovalAmountVsBalanceRatio;
    let transactionType = _transaction.TransactionType.simpleSend;
    if (type === _transaction.TransactionType.cancel) {
      transactionType = _transaction.TransactionType.cancel;
    } else if (type === _transaction.TransactionType.retry) {
      transactionType = originalType;
    } else if (type === _transaction.TransactionType.deployContract) {
      transactionType = _transaction.TransactionType.deployContract;
    } else if (contractInteractionTypes) {
      transactionType = _transaction.TransactionType.contractInteraction;
      transactionContractMethod = contractMethodName;
      if (transactionContractMethod === contractMethodNames.APPROVE && tokenStandard === _transaction.TokenStandard.ERC20) {
        if (dappProposedTokenAmount === '0' || customTokenAmount === '0') {
          transactionApprovalAmountType = _transaction.TransactionApprovalAmountType.revoke;
        } else if (customTokenAmount) {
          transactionApprovalAmountType = _transaction.TransactionApprovalAmountType.custom;
        } else if (dappProposedTokenAmount) {
          transactionApprovalAmountType = _transaction.TransactionApprovalAmountType.dappProposed;
        }
        transactionApprovalAmountVsProposedRatio = this._allowanceAmountInRelationToDappProposedValue(transactionApprovalAmountType, originalApprovalAmount, finalApprovalAmount);
        transactionApprovalAmountVsBalanceRatio = this._allowanceAmountInRelationToTokenBalance(transactionApprovalAmountType, dappProposedTokenAmount, currentTokenBalance);
      }
    }
    const replacedTxMeta = this._getTransaction(replacedById);
    const TRANSACTION_REPLACEMENT_METHODS = {
      RETRY: _transaction.TransactionType.retry,
      CANCEL: _transaction.TransactionType.cancel,
      SAME_NONCE: 'other'
    };
    let transactionReplaced;
    if (extraParams !== null && extraParams !== void 0 && extraParams.dropped) {
      transactionReplaced = TRANSACTION_REPLACEMENT_METHODS.SAME_NONCE;
      if ((replacedTxMeta === null || replacedTxMeta === void 0 ? void 0 : replacedTxMeta.type) === _transaction.TransactionType.cancel) {
        transactionReplaced = TRANSACTION_REPLACEMENT_METHODS.CANCEL;
      } else if ((replacedTxMeta === null || replacedTxMeta === void 0 ? void 0 : replacedTxMeta.type) === _transaction.TransactionType.retry) {
        transactionReplaced = TRANSACTION_REPLACEMENT_METHODS.RETRY;
      }
    }
    let uiCustomizations;
    if ((securityProviderResponse === null || securityProviderResponse === void 0 ? void 0 : securityProviderResponse.flagAsDangerous) === 1) {
      uiCustomizations = ['flagged_as_malicious'];
    } else if ((securityProviderResponse === null || securityProviderResponse === void 0 ? void 0 : securityProviderResponse.flagAsDangerous) === 2) {
      uiCustomizations = ['flagged_as_safety_unknown'];
    } else {
      uiCustomizations = null;
    }
    let properties = {
      chain_id: chainId,
      referrer,
      source,
      network,
      eip_1559_version: eip1559Version,
      gas_edit_type: 'none',
      gas_edit_attempted: 'none',
      account_type: await this.getAccountType(this.getSelectedAddress()),
      device_model: await this.getDeviceModel(this.getSelectedAddress()),
      asset_type: assetType,
      token_standard: tokenStandard,
      transaction_type: transactionType,
      transaction_speed_up: type === _transaction.TransactionType.retry,
      ui_customizations: uiCustomizations
    };
    if (transactionContractMethod === contractMethodNames.APPROVE) {
      properties = {
        ...properties,
        transaction_approval_amount_type: transactionApprovalAmountType
      };
    }
    let sensitiveProperties = {
      status,
      transaction_envelope_type: (0, _transaction2.isEIP1559Transaction)(txMeta) ? _transactionsControllerUtils.TRANSACTION_ENVELOPE_TYPE_NAMES.FEE_MARKET : _transactionsControllerUtils.TRANSACTION_ENVELOPE_TYPE_NAMES.LEGACY,
      first_seen: time,
      gas_limit: gasLimit,
      transaction_contract_method: transactionContractMethod,
      transaction_replaced: transactionReplaced,
      ...extraParams,
      ...gasParamsInGwei
    };
    if (transactionContractMethod === contractMethodNames.APPROVE) {
      sensitiveProperties = {
        ...sensitiveProperties,
        transaction_approval_amount_vs_balance_ratio: transactionApprovalAmountVsBalanceRatio,
        transaction_approval_amount_vs_proposed_ratio: transactionApprovalAmountVsProposedRatio
      };
    }
    return {
      properties,
      sensitiveProperties
    };
  }

  /**
   * Helper method that checks for the presence of an existing fragment by id
   * appropriate for the type of event that triggered fragment creation. If the
   * appropriate fragment exists, then nothing is done. If it does not exist a
   * new event fragment is created with the appropriate payload.
   *
   * @param {TransactionMeta} txMeta - Transaction meta object
   * @param {TransactionMetaMetricsEvent} event - The event type that
   *  triggered fragment creation
   * @param {object} properties - properties to include in the fragment
   * @param {object} [sensitiveProperties] - sensitive properties to include in
   * @param {object} [actionId] - actionId passed from UI
   *  the fragment
   */
  _createTransactionEventFragment(txMeta, event, properties, sensitiveProperties, actionId) {
    const isSubmitted = [_transaction.TransactionMetaMetricsEvent.finalized, _transaction.TransactionMetaMetricsEvent.submitted].includes(event);
    const uniqueIdentifier = `transaction-${isSubmitted ? 'submitted' : 'added'}-${txMeta.id}`;
    const fragment = this.getEventFragmentById(uniqueIdentifier);
    if (typeof fragment !== 'undefined') {
      return;
    }
    switch (event) {
      // When a transaction is added to the controller, we know that the user
      // will be presented with a confirmation screen. The user will then
      // either confirm or reject that transaction. Each has an associated
      // event we want to track. While we don't necessarily need an event
      // fragment to model this, having one allows us to record additional
      // properties onto the event from the UI. For example, when the user
      // edits the transactions gas params we can record that property and
      // then get analytics on the number of transactions in which gas edits
      // occur.
      case _transaction.TransactionMetaMetricsEvent.added:
        this.createEventFragment({
          category: _metametrics.MetaMetricsEventCategory.Transactions,
          initialEvent: _transaction.TransactionMetaMetricsEvent.added,
          successEvent: _transaction.TransactionMetaMetricsEvent.approved,
          failureEvent: _transaction.TransactionMetaMetricsEvent.rejected,
          properties,
          sensitiveProperties,
          persist: true,
          uniqueIdentifier,
          actionId
        });
        break;
      // If for some reason an approval or rejection occurs without the added
      // fragment existing in memory, we create the added fragment but without
      // the initialEvent firing. This is to prevent possible duplication of
      // events. A good example why this might occur is if the user had
      // unapproved transactions in memory when updating to the version that
      // includes this change. A migration would have also helped here but this
      // implementation hardens against other possible bugs where a fragment
      // does not exist.
      case _transaction.TransactionMetaMetricsEvent.approved:
      case _transaction.TransactionMetaMetricsEvent.rejected:
        this.createEventFragment({
          category: _metametrics.MetaMetricsEventCategory.Transactions,
          successEvent: _transaction.TransactionMetaMetricsEvent.approved,
          failureEvent: _transaction.TransactionMetaMetricsEvent.rejected,
          properties,
          sensitiveProperties,
          persist: true,
          uniqueIdentifier,
          actionId
        });
        break;
      // When a transaction is submitted it will always result in updating
      // to a finalized state (dropped, failed, confirmed) -- eventually.
      // However having a fragment started at this stage allows augmenting
      // analytics data with user interactions such as speeding up and
      // canceling the transactions. From this controllers perspective a new
      // transaction with a new id is generated for speed up and cancel
      // transactions, but from the UI we could augment the previous ID with
      // supplemental data to show user intent. Such as when they open the
      // cancel UI but don't submit. We can record that this happened and add
      // properties to the transaction event.
      case _transaction.TransactionMetaMetricsEvent.submitted:
        this.createEventFragment({
          category: _metametrics.MetaMetricsEventCategory.Transactions,
          initialEvent: _transaction.TransactionMetaMetricsEvent.submitted,
          successEvent: _transaction.TransactionMetaMetricsEvent.finalized,
          properties,
          sensitiveProperties,
          persist: true,
          uniqueIdentifier,
          actionId
        });
        break;
      // If for some reason a transaction is finalized without the submitted
      // fragment existing in memory, we create the submitted fragment but
      // without the initialEvent firing. This is to prevent possible
      // duplication of events. A good example why this might occur is if th
      // user had pending transactions in memory when updating to the version
      // that includes this change. A migration would have also helped here but
      // this implementation hardens against other possible bugs where a
      // fragment does not exist.
      case _transaction.TransactionMetaMetricsEvent.finalized:
        this.createEventFragment({
          category: _metametrics.MetaMetricsEventCategory.Transactions,
          successEvent: _transaction.TransactionMetaMetricsEvent.finalized,
          properties,
          sensitiveProperties,
          persist: true,
          uniqueIdentifier,
          actionId
        });
        break;
      default:
        break;
    }
  }

  /**
   * Extracts relevant properties from a transaction meta
   * object and uses them to create and send metrics for various transaction
   * events.
   *
   * @param {object} txMeta - the txMeta object
   * @param {TransactionMetaMetricsEvent} event - the name of the transaction event
   * @param {string} actionId - actionId passed from UI
   * @param {object} extraParams - optional props and values to include in sensitiveProperties
   */
  async _trackTransactionMetricsEvent(txMeta, event, actionId, extraParams = {}) {
    if (!txMeta) {
      return;
    }
    const {
      properties,
      sensitiveProperties
    } = await this._buildEventFragmentProperties(txMeta, extraParams);

    // Create event fragments for event types that spawn fragments, and ensure
    // existence of fragments for event types that act upon them.
    this._createTransactionEventFragment(txMeta, event, properties, sensitiveProperties, actionId);
    let id;
    switch (event) {
      // If the user approves a transaction, finalize the transaction added
      // event fragment.
      case _transaction.TransactionMetaMetricsEvent.approved:
        id = `transaction-added-${txMeta.id}`;
        this.updateEventFragment(id, {
          properties,
          sensitiveProperties
        });
        this.finalizeEventFragment(id);
        break;
      // If the user rejects a transaction, finalize the transaction added
      // event fragment. with the abandoned flag set.
      case _transaction.TransactionMetaMetricsEvent.rejected:
        id = `transaction-added-${txMeta.id}`;
        this.updateEventFragment(id, {
          properties,
          sensitiveProperties
        });
        this.finalizeEventFragment(id, {
          abandoned: true
        });
        break;
      // When a transaction is finalized, also finalize the transaction
      // submitted event fragment.
      case _transaction.TransactionMetaMetricsEvent.finalized:
        id = `transaction-submitted-${txMeta.id}`;
        this.updateEventFragment(id, {
          properties,
          sensitiveProperties
        });
        this.finalizeEventFragment(`transaction-submitted-${txMeta.id}`);
        break;
      default:
        break;
    }
  }
  _getTransactionCompletionTime(submittedTime) {
    return Math.round((Date.now() - submittedTime) / 1000).toString();
  }
  _getGasValuesInGWEI(gasParams) {
    const gasValuesInGwei = {};
    for (const param in gasParams) {
      if ((0, _ethereumjsUtil.isHexString)(gasParams[param])) {
        gasValuesInGwei[param] = (0, _conversion.hexWEIToDecGWEI)(gasParams[param]);
      } else {
        gasValuesInGwei[param] = gasParams[param];
      }
    }
    return gasValuesInGwei;
  }
  _failTransaction(txId, error, actionId) {
    this.txStateManager.setTxStatusFailed(txId, error);
    const txMeta = this.txStateManager.getTransaction(txId);
    this._trackTransactionMetricsEvent(txMeta, _transaction.TransactionMetaMetricsEvent.finalized, actionId, {
      error: error.message
    });
  }
  _dropTransaction(txId) {
    this.txStateManager.setTxStatusDropped(txId);
    const txMeta = this.txStateManager.getTransaction(txId);
    this._trackTransactionMetricsEvent(txMeta, _transaction.TransactionMetaMetricsEvent.finalized, undefined, {
      dropped: true
    });
  }

  // Approvals

  async _requestTransactionApproval(txMeta, {
    shouldShowRequest = true,
    actionId
  } = {}) {
    let txId, result;
    try {
      var _result;
      txId = txMeta.id;
      const {
        origin
      } = txMeta;
      const approvalResult = await this._requestApproval(String(txId), origin, {
        txId
      }, {
        shouldShowRequest
      });
      result = approvalResult.resultCallbacks;
      const {
        value
      } = approvalResult;
      const {
        txMeta: updatedTxMeta
      } = value;
      await this._updateAndApproveTransaction(updatedTxMeta, actionId);
      (_result = result) === null || _result === void 0 ? void 0 : _result.success();
    } catch (error) {
      var _result2;
      const transaction = this.txStateManager.getTransaction(txId);
      if (transaction && !this._isTransactionCompleted(transaction)) {
        if (error.code === _ethRpcErrors.errorCodes.provider.userRejectedRequest) {
          await this._cancelTransaction(txId, actionId);
        } else {
          this._failTransaction(txId, error, actionId);
        }
      }
      (_result2 = result) === null || _result2 === void 0 ? void 0 : _result2.error(error);
      throw error;
    }
  }
  async _requestApproval(id, origin, requestData, {
    shouldShowRequest
  } = {
    shouldShowRequest: true
  }) {
    const type = _controllerUtils.ApprovalType.Transaction;
    return this.messagingSystem.call('ApprovalController:addRequest', {
      id,
      origin,
      type,
      requestData,
      expectsResult: true
    }, shouldShowRequest);
  }
}
exports.default = TransactionController;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\transactions\\index.js",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\transactions\\lib\\tx-state-history-helpers.js", {"fast-json-patch":"F:\\metamask-extension\\node_modules\\fast-json-patch\\index.js","lodash":"F:\\metamask-extension\\node_modules\\lodash\\lodash.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Ctransactions%5Clib%5Ctx-state-history-helpers.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateHistoryEntry = generateHistoryEntry;
exports.migrateFromSnapshotsToDiffs = migrateFromSnapshotsToDiffs;
exports.replayHistory = replayHistory;
exports.snapshotFromTxMeta = snapshotFromTxMeta;
var _fastJsonPatch = _interopRequireDefault(require("fast-json-patch"));
var _lodash = require("lodash");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * converts non-initial history entries into diffs
 *
 * @param {Array} longHistory
 * @returns {Array}
 */
function migrateFromSnapshotsToDiffs(longHistory) {
  return longHistory
  // convert non-initial history entries into diffs
  .map((entry, index) => {
    if (index === 0) {
      return entry;
    }
    return generateHistoryEntry(longHistory[index - 1], entry);
  });
}

/**
 * Generates an array of history objects sense the previous state.
 * The object has the keys
 * op (the operation performed),
 * path (the key and if a nested object then each key will be separated with a `/`)
 * value
 * with the first entry having the note and a timestamp when the change took place
 *
 * @param {object} previousState - the previous state of the object
 * @param {object} newState - the update object
 * @param {string} [note] - a optional note for the state change
 * @returns {Array}
 */
function generateHistoryEntry(previousState, newState, note) {
  const entry = _fastJsonPatch.default.compare(previousState, newState);
  // Add a note to the first op, since it breaks if we append it to the entry
  if (entry[0]) {
    if (note) {
      entry[0].note = note;
    }
    entry[0].timestamp = Date.now();
  }
  return entry;
}

/**
 * Recovers previous txMeta state obj
 *
 * @param _shortHistory
 * @returns {object}
 */
function replayHistory(_shortHistory) {
  const shortHistory = (0, _lodash.cloneDeep)(_shortHistory);
  return shortHistory.reduce((val, entry) => _fastJsonPatch.default.applyPatch(val, entry).newDocument);
}

/**
 * Snapshot {@code txMeta}
 *
 * @param {object} txMeta - the tx metadata object
 * @returns {object} a deep clone without history
 */
function snapshotFromTxMeta(txMeta) {
  const shallow = {
    ...txMeta
  };
  delete shallow.history;
  return (0, _lodash.cloneDeep)(shallow);
}


      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\transactions\\lib\\tx-state-history-helpers.js",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\transactions\\lib\\util.js", {"../../../../../shared/constants/transaction":"F:\\metamask-extension\\shared\\constants\\transaction.ts","../../../../../shared/modules/hexstring-utils":"F:\\metamask-extension\\shared\\modules\\hexstring-utils.ts","../../../../../shared/modules/transaction.utils":"F:\\metamask-extension\\shared\\modules\\transaction.utils.js","../../../lib/util":"F:\\metamask-extension\\app\\scripts\\lib\\util.ts","@ethersproject/abi":"F:\\metamask-extension\\node_modules\\@ethersproject\\abi\\lib\\index.js","eth-rpc-errors":"F:\\metamask-extension\\node_modules\\eth-rpc-errors\\dist\\index.js","human-standard-token-abi":"F:\\metamask-extension\\node_modules\\human-standard-token-abi\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Ctransactions%5Clib%5Cutil.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFinalStates = getFinalStates;
exports.normalizeAndValidateTxParams = normalizeAndValidateTxParams;
exports.normalizeTxParams = normalizeTxParams;
exports.normalizeTxReceiptGasUsed = normalizeTxReceiptGasUsed;
exports.validateConfirmedExternalTransaction = void 0;
exports.validateFrom = validateFrom;
exports.validateInputData = validateInputData;
exports.validateRecipient = validateRecipient;
exports.validateTxParams = validateTxParams;
var _ethRpcErrors = require("eth-rpc-errors");
var _abi = require("@ethersproject/abi");
var _humanStandardTokenAbi = _interopRequireDefault(require("human-standard-token-abi"));
var _util = require("../../../lib/util");
var _transaction = require("../../../../../shared/constants/transaction");
var _transaction2 = require("../../../../../shared/modules/transaction.utils");
var _hexstringUtils = require("../../../../../shared/modules/hexstring-utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const normalizers = {
  from: _util.addHexPrefix,
  to: (to, lowerCase) => lowerCase ? (0, _util.addHexPrefix)(to).toLowerCase() : (0, _util.addHexPrefix)(to),
  nonce: _util.addHexPrefix,
  value: _util.addHexPrefix,
  data: _util.addHexPrefix,
  gas: _util.addHexPrefix,
  gasPrice: _util.addHexPrefix,
  maxFeePerGas: _util.addHexPrefix,
  maxPriorityFeePerGas: _util.addHexPrefix,
  type: _util.addHexPrefix,
  estimateSuggested: estimate => estimate,
  estimateUsed: estimate => estimate
};
function normalizeAndValidateTxParams(txParams, lowerCase = true) {
  const normalizedTxParams = normalizeTxParams(txParams, lowerCase);
  validateTxParams(normalizedTxParams);
  return normalizedTxParams;
}

/**
 * Normalizes the given txParams
 *
 * @param {object} txParams - The transaction params
 * @param {boolean} [lowerCase] - Whether to lowercase the 'to' address.
 * Default: true
 * @returns {object} the normalized tx params
 */
function normalizeTxParams(txParams, lowerCase = true) {
  // apply only keys in the normalizers
  const normalizedTxParams = {};
  for (const key in normalizers) {
    if (txParams[key]) {
      normalizedTxParams[key] = normalizers[key](txParams[key], lowerCase);
    }
  }
  return normalizedTxParams;
}

/**
 * Given two fields, ensure that the second field is not included in txParams,
 * and if it is throw an invalidParams error.
 *
 * @param {object} txParams - the transaction parameters object
 * @param {string} fieldBeingValidated - the current field being validated
 * @param {string} mutuallyExclusiveField - the field to ensure is not provided
 * @throws {ethErrors.rpc.invalidParams} Throws if mutuallyExclusiveField is
 *  present in txParams.
 */
function ensureMutuallyExclusiveFieldsNotProvided(txParams, fieldBeingValidated, mutuallyExclusiveField) {
  if (typeof txParams[mutuallyExclusiveField] !== 'undefined') {
    throw _ethRpcErrors.ethErrors.rpc.invalidParams(`Invalid transaction params: specified ${fieldBeingValidated} but also included ${mutuallyExclusiveField}, these cannot be mixed`);
  }
}

/**
 * Ensures that the provided value for field is a string, throws an
 * invalidParams error if field is not a string.
 *
 * @param {object} txParams - the transaction parameters object
 * @param {string} field - the current field being validated
 * @throws {ethErrors.rpc.invalidParams} Throws if field is not a string
 */
function ensureFieldIsString(txParams, field) {
  if (typeof txParams[field] !== 'string') {
    throw _ethRpcErrors.ethErrors.rpc.invalidParams(`Invalid transaction params: ${field} is not a string. got: (${txParams[field]})`);
  }
}

/**
 * Ensures that the provided txParams has the proper 'type' specified for the
 * given field, if it is provided. If types do not match throws an
 * invalidParams error.
 *
 * @param {object} txParams - the transaction parameters object
 * @param {'gasPrice' | 'maxFeePerGas' | 'maxPriorityFeePerGas'} field - the
 *  current field being validated
 * @throws {ethErrors.rpc.invalidParams} Throws if type does not match the
 *  expectations for provided field.
 */
function ensureProperTransactionEnvelopeTypeProvided(txParams, field) {
  switch (field) {
    case 'maxFeePerGas':
    case 'maxPriorityFeePerGas':
      if (txParams.type && txParams.type !== _transaction.TransactionEnvelopeType.feeMarket) {
        throw _ethRpcErrors.ethErrors.rpc.invalidParams(`Invalid transaction envelope type: specified type "${txParams.type}" but including maxFeePerGas and maxPriorityFeePerGas requires type: "${_transaction.TransactionEnvelopeType.feeMarket}"`);
      }
      break;
    case 'gasPrice':
    default:
      if (txParams.type && txParams.type === _transaction.TransactionEnvelopeType.feeMarket) {
        throw _ethRpcErrors.ethErrors.rpc.invalidParams(`Invalid transaction envelope type: specified type "${txParams.type}" but included a gasPrice instead of maxFeePerGas and maxPriorityFeePerGas`);
      }
  }
}

/**
 * Validates the given tx parameters
 *
 * @param {object} txParams - the tx params
 * @param {boolean} eip1559Compatibility - whether or not the current network supports EIP-1559 transactions
 * @throws {Error} if the tx params contains invalid fields
 */
function validateTxParams(txParams, eip1559Compatibility = true) {
  if (!txParams || typeof txParams !== 'object' || Array.isArray(txParams)) {
    throw _ethRpcErrors.ethErrors.rpc.invalidParams('Invalid transaction params: must be an object.');
  }
  if (!txParams.to && !txParams.data) {
    throw _ethRpcErrors.ethErrors.rpc.invalidParams('Invalid transaction params: must specify "data" for contract deployments, or "to" (and optionally "data") for all other types of transactions.');
  }
  if ((0, _transaction2.isEIP1559Transaction)({
    txParams
  }) && !eip1559Compatibility) {
    throw _ethRpcErrors.ethErrors.rpc.invalidParams('Invalid transaction params: params specify an EIP-1559 transaction but the current network does not support EIP-1559');
  }
  Object.entries(txParams).forEach(([key, value]) => {
    // validate types
    switch (key) {
      case 'from':
        validateFrom(txParams);
        break;
      case 'to':
        validateRecipient(txParams);
        break;
      case 'gasPrice':
        ensureProperTransactionEnvelopeTypeProvided(txParams, 'gasPrice');
        ensureMutuallyExclusiveFieldsNotProvided(txParams, 'gasPrice', 'maxFeePerGas');
        ensureMutuallyExclusiveFieldsNotProvided(txParams, 'gasPrice', 'maxPriorityFeePerGas');
        ensureFieldIsString(txParams, 'gasPrice');
        break;
      case 'maxFeePerGas':
        ensureProperTransactionEnvelopeTypeProvided(txParams, 'maxFeePerGas');
        ensureMutuallyExclusiveFieldsNotProvided(txParams, 'maxFeePerGas', 'gasPrice');
        ensureFieldIsString(txParams, 'maxFeePerGas');
        break;
      case 'maxPriorityFeePerGas':
        ensureProperTransactionEnvelopeTypeProvided(txParams, 'maxPriorityFeePerGas');
        ensureMutuallyExclusiveFieldsNotProvided(txParams, 'maxPriorityFeePerGas', 'gasPrice');
        ensureFieldIsString(txParams, 'maxPriorityFeePerGas');
        break;
      case 'value':
        ensureFieldIsString(txParams, 'value');
        if (value.toString().includes('-')) {
          throw _ethRpcErrors.ethErrors.rpc.invalidParams(`Invalid transaction value "${value}": not a positive number.`);
        }
        if (value.toString().includes('.')) {
          throw _ethRpcErrors.ethErrors.rpc.invalidParams(`Invalid transaction value of "${value}": number must be in wei.`);
        }
        if (!value.match(/^0x[a-fA-F0-9]+$/u)) {
          throw _ethRpcErrors.ethErrors.rpc.invalidParams(`Invalid transaction value of "${value}": not a valid hex string.`);
        }
        break;
      case 'chainId':
        if (typeof value !== 'number' && typeof value !== 'string') {
          throw _ethRpcErrors.ethErrors.rpc.invalidParams(`Invalid transaction params: ${key} is not a Number or hex string. got: (${value})`);
        }
        break;
      case 'data':
        validateInputData(value);
        ensureFieldIsString(txParams, 'data');
        break;
      default:
        ensureFieldIsString(txParams, key);
    }
  });
}

/**
 *
 * @param {*} value
 */
function validateInputData(value) {
  if (value !== null) {
    // Validate the input data
    const hstInterface = new _abi.Interface(_humanStandardTokenAbi.default);
    try {
      hstInterface.parseTransaction({
        data: value
      });
    } catch (e) {
      // Throw an invalidParams error if BUFFER_OVERRUN
      /* eslint require-unicode-regexp: off */
      if (e.message.match(/BUFFER_OVERRUN/)) {
        throw _ethRpcErrors.ethErrors.rpc.invalidParams(`Invalid transaction params: data out-of-bounds, BUFFER_OVERRUN.`);
      }
    }
  }
}

/**
 * Validates the {@code from} field in the given tx params
 *
 * @param {object} txParams
 * @throws {Error} if the from address isn't valid
 */
function validateFrom(txParams) {
  if (!(typeof txParams.from === 'string')) {
    throw _ethRpcErrors.ethErrors.rpc.invalidParams(`Invalid "from" address "${txParams.from}": not a string.`);
  }
  if (!(0, _hexstringUtils.isValidHexAddress)(txParams.from, {
    allowNonPrefixed: false
  })) {
    throw _ethRpcErrors.ethErrors.rpc.invalidParams('Invalid "from" address.');
  }
}

/**
 * Validates the {@code to} field in the given tx params
 *
 * @param {object} txParams - the tx params
 * @returns {object} the tx params
 * @throws {Error} if the recipient is invalid OR there isn't tx data
 */
function validateRecipient(txParams) {
  if (txParams.to === '0x' || txParams.to === null) {
    if (txParams.data) {
      delete txParams.to;
    } else {
      throw _ethRpcErrors.ethErrors.rpc.invalidParams('Invalid "to" address.');
    }
  } else if (txParams.to !== undefined && !(0, _hexstringUtils.isValidHexAddress)(txParams.to, {
    allowNonPrefixed: false
  })) {
    throw _ethRpcErrors.ethErrors.rpc.invalidParams('Invalid "to" address.');
  }
  return txParams;
}
const validateConfirmedExternalTransaction = ({
  txMeta,
  pendingTransactions,
  confirmedTransactions
} = {}) => {
  if (!txMeta || !txMeta.txParams) {
    throw _ethRpcErrors.ethErrors.rpc.invalidParams('"txMeta" or "txMeta.txParams" is missing');
  }
  if (txMeta.status !== _transaction.TransactionStatus.confirmed) {
    throw _ethRpcErrors.ethErrors.rpc.invalidParams('External transaction status should be "confirmed"');
  }
  const externalTxNonce = txMeta.txParams.nonce;
  if (pendingTransactions && pendingTransactions.length > 0) {
    const foundPendingTxByNonce = pendingTransactions.find(el => {
      var _el$txParams;
      return ((_el$txParams = el.txParams) === null || _el$txParams === void 0 ? void 0 : _el$txParams.nonce) === externalTxNonce;
    });
    if (foundPendingTxByNonce) {
      throw _ethRpcErrors.ethErrors.rpc.invalidParams('External transaction nonce should not be in pending txs');
    }
  }
  if (confirmedTransactions && confirmedTransactions.length > 0) {
    const foundConfirmedTxByNonce = confirmedTransactions.find(el => {
      var _el$txParams2;
      return ((_el$txParams2 = el.txParams) === null || _el$txParams2 === void 0 ? void 0 : _el$txParams2.nonce) === externalTxNonce;
    });
    if (foundConfirmedTxByNonce) {
      throw _ethRpcErrors.ethErrors.rpc.invalidParams('External transaction nonce should not be in confirmed txs');
    }
  }
};

/**
 * Returns a list of final states
 *
 * @returns {string[]} the states that can be considered final states
 */
exports.validateConfirmedExternalTransaction = validateConfirmedExternalTransaction;
function getFinalStates() {
  return [_transaction.TransactionStatus.rejected,
  // the user has responded no!
  _transaction.TransactionStatus.confirmed,
  // the tx has been included in a block.
  _transaction.TransactionStatus.failed,
  // the tx failed for some reason, included on tx data.
  _transaction.TransactionStatus.dropped // the tx nonce was already used
  ];
}

/**
 * Normalizes tx receipt gas used to be a hexadecimal string.
 * It seems that sometimes the numerical values being returned from
 * this.query.getTransactionReceipt are BN instances and not strings.
 *
 * @param {string or BN instance} gasUsed
 * @returns normalized gas used as hexadecimal string
 */
function normalizeTxReceiptGasUsed(gasUsed) {
  return typeof gasUsed === 'string' ? gasUsed : gasUsed.toString(16);
}

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\transactions\\lib\\util.js",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\transactions\\pending-tx-tracker.js", {"../../../../shared/constants/transaction":"F:\\metamask-extension\\shared\\constants\\transaction.ts","./tx-state-manager":"F:\\metamask-extension\\app\\scripts\\controllers\\transactions\\tx-state-manager.js","@metamask/safe-event-emitter":"F:\\metamask-extension\\node_modules\\@metamask\\safe-event-emitter\\index.js","ethjs-query":"F:\\metamask-extension\\node_modules\\ethjs-query\\lib\\index.js","loglevel":"F:\\metamask-extension\\node_modules\\loglevel\\lib\\loglevel.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Ctransactions%5Cpending-tx-tracker.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _safeEventEmitter = _interopRequireDefault(require("@metamask/safe-event-emitter"));
var _loglevel = _interopRequireDefault(require("loglevel"));
var _ethjsQuery = _interopRequireDefault(require("ethjs-query"));
var _transaction = require("../../../../shared/constants/transaction");
var _txStateManager = require("./tx-state-manager");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Event emitter utility class for tracking the transactions as they
 * go from a pending state to a confirmed (mined in a block) state.
 *
 * As well as continues broadcast while in the pending state.
 */
class PendingTransactionTracker extends _safeEventEmitter.default {
  /**
   * @param {object} config - Configuration.
   * @param {Function} config.approveTransaction - Approves a transaction.
   * @param {Function} config.confirmTransaction - Set a transaction as confirmed.
   * @param {Function} config.getCompletedTransactions - Returns completed transactions.
   * @param {Function} config.getPendingTransactions - Returns an array of pending transactions,
   * @param {object} config.nonceTracker - see nonce tracker
   * @param {object} config.provider - A network provider.
   * @param {object} config.query - An EthQuery instance.
   * @param {Function} config.publishTransaction - Publishes a raw transaction,
   */
  constructor(config) {
    super();
    /**
     * We wait this many blocks before emitting a 'tx:dropped' event
     *
     * This is because we could be talking to a node that is out of sync.
     *
     * @type {number}
     */
    _defineProperty(this, "DROPPED_BUFFER_COUNT", 3);
    /**
     * A map of transaction hashes to the number of blocks we've seen
     * since first considering it dropped
     *
     * @type {Map<string, number>}
     */
    _defineProperty(this, "droppedBlocksBufferByHash", new Map());
    this.query = config.query || new _ethjsQuery.default(config.provider);
    this.nonceTracker = config.nonceTracker;
    this.getPendingTransactions = config.getPendingTransactions;
    this.getCompletedTransactions = config.getCompletedTransactions;
    this.publishTransaction = config.publishTransaction;
    this.approveTransaction = config.approveTransaction;
    this.confirmTransaction = config.confirmTransaction;
  }

  /**
   * checks the network for signed txs and releases the nonce global lock if it is
   */
  async updatePendingTxs() {
    // in order to keep the nonceTracker accurate we block it while updating pending transactions
    const nonceGlobalLock = await this.nonceTracker.getGlobalLock();
    try {
      const pendingTxs = this.getPendingTransactions();
      await Promise.all(pendingTxs.map(txMeta => this._checkPendingTx(txMeta)));
    } catch (err) {
      _loglevel.default.error('PendingTransactionTracker - Error updating pending transactions');
      _loglevel.default.error(err);
    }
    nonceGlobalLock.releaseLock();
  }

  /**
   * Resubmits each pending transaction
   *
   * @param {string} blockNumber - the latest block number in hex
   * @fires tx:warning
   * @returns {Promise<void>}
   */
  async resubmitPendingTxs(blockNumber) {
    const pending = this.getPendingTransactions();
    if (!pending.length) {
      return;
    }
    for (const txMeta of pending) {
      try {
        await this._resubmitTx(txMeta, blockNumber);
      } catch (err) {
        var _err$value, _err$value$message;
        const errorMessage = ((_err$value = err.value) === null || _err$value === void 0 ? void 0 : (_err$value$message = _err$value.message) === null || _err$value$message === void 0 ? void 0 : _err$value$message.toLowerCase()) || err.message.toLowerCase();
        const isKnownTx =
        // geth
        errorMessage.includes('replacement transaction underpriced') || errorMessage.includes('known transaction') ||
        // parity
        errorMessage.includes('gas price too low to replace') || errorMessage.includes('transaction with the same hash was already imported') ||
        // other
        errorMessage.includes('gateway timeout') || errorMessage.includes('nonce too low');
        // ignore resubmit warnings, return early
        if (isKnownTx) {
          return;
        }
        // encountered real error - transition to error state
        txMeta.warning = {
          error: errorMessage,
          message: _txStateManager.ERROR_SUBMITTING
        };
        this.emit('tx:warning', txMeta, err);
      }
    }
  }

  /**
   * Attempts to resubmit the given transaction with exponential backoff
   *
   * Will only attempt to retry the given tx every {@code 2**(txMeta.retryCount)} blocks.
   *
   * @param {object} txMeta - the transaction metadata
   * @param {string} latestBlockNumber - the latest block number in hex
   * @returns {Promise<string|undefined>} the tx hash if retried
   * @fires tx:block-update
   * @fires tx:retry
   * @private
   */
  async _resubmitTx(txMeta, latestBlockNumber) {
    if (!txMeta.firstRetryBlockNumber) {
      this.emit('tx:block-update', txMeta, latestBlockNumber);
    }
    const firstRetryBlockNumber = txMeta.firstRetryBlockNumber || latestBlockNumber;
    const txBlockDistance = Number.parseInt(latestBlockNumber, 16) - Number.parseInt(firstRetryBlockNumber, 16);
    const retryCount = txMeta.retryCount || 0;

    // Exponential backoff to limit retries at publishing (capped at ~15 minutes between retries)
    if (txBlockDistance < Math.min(50, Math.pow(2, retryCount))) {
      return undefined;
    }

    // Only auto-submit already-signed txs:
    if (!('rawTx' in txMeta)) {
      return this.approveTransaction(txMeta.id);
    }
    const {
      rawTx
    } = txMeta;
    const txHash = await this.publishTransaction(rawTx);

    // Increment successful tries:
    this.emit('tx:retry', txMeta);
    return txHash;
  }

  /**
   * Query the network to see if the given {@code txMeta} has been included in a block
   *
   * @param {object} txMeta - the transaction metadata
   * @returns {Promise<void>}
   * @fires tx:confirmed
   * @fires tx:dropped
   * @fires tx:failed
   * @fires tx:warning
   * @private
   */

  async _checkPendingTx(txMeta) {
    const txHash = txMeta.hash;
    const txId = txMeta.id;

    // Only check submitted txs
    if (txMeta.status !== _transaction.TransactionStatus.submitted) {
      return;
    }

    // extra check in case there was an uncaught error during the
    // signature and submission process

    let hasNoHash = !txHash;
    if (hasNoHash) {
      const noTxHashErr = new Error('We had an error while submitting this transaction, please try again.');
      noTxHashErr.name = 'NoTxHashError';
      this.emit('tx:failed', txId, noTxHashErr);
      return;
    }
    if (await this._checkIfNonceIsTaken(txMeta)) {
      this.emit('tx:dropped', txId);
      return;
    }
    try {
      const transactionReceipt = await this.query.getTransactionReceipt(txHash);
      if (transactionReceipt !== null && transactionReceipt !== void 0 && transactionReceipt.blockNumber) {
        const {
          baseFeePerGas,
          timestamp: blockTimestamp
        } = await this.query.getBlockByHash(transactionReceipt === null || transactionReceipt === void 0 ? void 0 : transactionReceipt.blockHash, false);
        this.emit('tx:confirmed', txId, transactionReceipt, baseFeePerGas, blockTimestamp);
        return;
      }
    } catch (err) {
      txMeta.warning = {
        error: err.message,
        message: 'There was a problem loading this transaction.'
      };
      this.emit('tx:warning', txMeta, err);
      return;
    }
    if (await this._checkIfTxWasDropped(txMeta)) {
      this.emit('tx:dropped', txId);
    }
  }

  /**
   * Checks whether the nonce in the given {@code txMeta} is behind the network nonce
   *
   * @param {object} txMeta - the transaction metadata
   * @returns {Promise<boolean>}
   * @private
   */
  async _checkIfTxWasDropped(txMeta) {
    const {
      hash: txHash,
      txParams: {
        nonce,
        from
      }
    } = txMeta;
    const networkNextNonce = await this.query.getTransactionCount(from);
    if (parseInt(nonce, 16) >= networkNextNonce.toNumber()) {
      return false;
    }
    if (!this.droppedBlocksBufferByHash.has(txHash)) {
      this.droppedBlocksBufferByHash.set(txHash, 0);
    }
    const currentBlockBuffer = this.droppedBlocksBufferByHash.get(txHash);
    if (currentBlockBuffer < this.DROPPED_BUFFER_COUNT) {
      this.droppedBlocksBufferByHash.set(txHash, currentBlockBuffer + 1);
      return false;
    }
    this.droppedBlocksBufferByHash.delete(txHash);
    return true;
  }

  /**
   * Checks whether the nonce in the given {@code txMeta} is correct against the local set of transactions
   *
   * @param {object} txMeta - the transaction metadata
   * @returns {Promise<boolean>}
   * @private
   */
  async _checkIfNonceIsTaken(txMeta) {
    const address = txMeta.txParams.from;
    const completed = this.getCompletedTransactions(address);
    return completed.some(
    // This is called while the transaction is in-flight, so it is possible that the
    // list of completed transactions now includes the transaction we were looking at
    // and if that is the case, don't consider the transaction to have taken its own nonce
    other => !(other.id === txMeta.id) && other.txParams.nonce === txMeta.txParams.nonce);
  }
}
exports.default = PendingTransactionTracker;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\transactions\\pending-tx-tracker.js",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\transactions\\tx-gas-utils.js", {"../../../../shared/modules/conversion.utils":"F:\\metamask-extension\\shared\\modules\\conversion.utils.ts","../../lib/util":"F:\\metamask-extension\\app\\scripts\\lib\\util.ts","ethereumjs-util":"F:\\metamask-extension\\node_modules\\ethereumjs-util\\dist.browser\\index.js","ethjs-query":"F:\\metamask-extension\\node_modules\\ethjs-query\\lib\\index.js","lodash":"F:\\metamask-extension\\node_modules\\lodash\\lodash.js","loglevel":"F:\\metamask-extension\\node_modules\\loglevel\\lib\\loglevel.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Ctransactions%5Ctx-gas-utils.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ethjsQuery = _interopRequireDefault(require("ethjs-query"));
var _loglevel = _interopRequireDefault(require("loglevel"));
var _ethereumjsUtil = require("ethereumjs-util");
var _lodash = require("lodash");
var _util = require("../../lib/util");
var _conversion = require("../../../../shared/modules/conversion.utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Result of gas analysis, including either a gas estimate for a successful analysis, or
 * debug information for a failed analysis.
 *
 * @typedef {object} GasAnalysisResult
 * @property {string} blockGasLimit - The gas limit of the block used for the analysis
 * @property {string} estimatedGasHex - The estimated gas, in hexadecimal
 * @property {object} simulationFails - Debug information about why an analysis failed
 */
/**
 * tx-gas-utils are gas utility methods for Transaction manager
 * its passed ethquery
 * and used to do things like calculate gas of a tx.
 *
 * @param {object} provider - A network provider.
 */
class TxGasUtil {
  constructor(provider) {
    this.query = new _ethjsQuery.default(provider);
  }

  /**
   * @param {object} txMeta - the txMeta object
   * @returns {GasAnalysisResult} The result of the gas analysis
   */
  async analyzeGasUsage(txMeta) {
    const block = await this.query.getBlockByNumber('latest', false);

    // fallback to block gasLimit
    const blockGasLimitBN = (0, _util.hexToBn)(block.gasLimit);
    const saferGasLimitBN = (0, _util.BnMultiplyByFraction)(blockGasLimitBN, 19, 20);
    let estimatedGasHex = (0, _conversion.bnToHex)(saferGasLimitBN);
    let simulationFails;
    try {
      estimatedGasHex = await this.estimateTxGas(txMeta);
    } catch (error) {
      _loglevel.default.warn(error);
      simulationFails = {
        reason: error.message,
        errorKey: error.errorKey,
        debug: {
          blockNumber: block.number,
          blockGasLimit: block.gasLimit
        }
      };
    }
    return {
      blockGasLimit: block.gasLimit,
      estimatedGasHex,
      simulationFails
    };
  }

  /**
   * Estimates the tx's gas usage
   *
   * @param {object} txMeta - the txMeta object
   * @returns {string} the estimated gas limit as a hex string
   */
  async estimateTxGas(txMeta) {
    const txParams = (0, _lodash.cloneDeep)(txMeta.txParams);

    // `eth_estimateGas` can fail if the user has insufficient balance for the
    // value being sent, or for the gas cost. We don't want to check their
    // balance here, we just want the gas estimate. The gas price is removed
    // to skip those balance checks. We check balance elsewhere. We also delete
    // maxFeePerGas and maxPriorityFeePerGas to support EIP-1559 txs.
    delete txParams.gasPrice;
    delete txParams.maxFeePerGas;
    delete txParams.maxPriorityFeePerGas;

    // estimate tx gas requirements
    return await this.query.estimateGas(txParams);
  }

  /**
   * Adds a gas buffer with out exceeding the block gas limit
   *
   * @param {string} initialGasLimitHex - the initial gas limit to add the buffer too
   * @param {string} blockGasLimitHex - the block gas limit
   * @param multiplier
   * @returns {string} the buffered gas limit as a hex string
   */
  addGasBuffer(initialGasLimitHex, blockGasLimitHex, multiplier = 1.5) {
    const initialGasLimitBn = (0, _util.hexToBn)(initialGasLimitHex);
    const blockGasLimitBn = (0, _util.hexToBn)(blockGasLimitHex);
    const upperGasLimitBn = blockGasLimitBn.muln(0.9);
    const bufferedGasLimitBn = initialGasLimitBn.muln(multiplier);

    // if initialGasLimit is above blockGasLimit, dont modify it
    if (initialGasLimitBn.gt(upperGasLimitBn)) {
      return (0, _conversion.bnToHex)(initialGasLimitBn);
    }
    // if bufferedGasLimit is below blockGasLimit, use bufferedGasLimit
    if (bufferedGasLimitBn.lt(upperGasLimitBn)) {
      return (0, _conversion.bnToHex)(bufferedGasLimitBn);
    }
    // otherwise use blockGasLimit
    return (0, _conversion.bnToHex)(upperGasLimitBn);
  }
  async getBufferedGasLimit(txMeta, multiplier) {
    const {
      blockGasLimit,
      estimatedGasHex,
      simulationFails
    } = await this.analyzeGasUsage(txMeta);
    // add additional gas buffer to our estimation for safety
    const gasLimit = this.addGasBuffer((0, _ethereumjsUtil.addHexPrefix)(estimatedGasHex), blockGasLimit, multiplier);
    return {
      gasLimit,
      simulationFails
    };
  }
}
exports.default = TxGasUtil;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\transactions\\tx-gas-utils.js",}],
["F:\\metamask-extension\\app\\scripts\\controllers\\transactions\\tx-state-manager.js", {"../../../../shared/constants/app":"F:\\metamask-extension\\shared\\constants\\app.ts","../../../../shared/constants/network":"F:\\metamask-extension\\shared\\constants\\network.ts","../../../../shared/constants/transaction":"F:\\metamask-extension\\shared\\constants\\transaction.ts","../../../../shared/modules/random-id":"F:\\metamask-extension\\shared\\modules\\random-id.js","../../../../shared/modules/transaction.utils":"F:\\metamask-extension\\shared\\modules\\transaction.utils.js","../../metamask-controller":"F:\\metamask-extension\\app\\scripts\\metamask-controller.js","./lib/tx-state-history-helpers":"F:\\metamask-extension\\app\\scripts\\controllers\\transactions\\lib\\tx-state-history-helpers.js","./lib/util":"F:\\metamask-extension\\app\\scripts\\controllers\\transactions\\lib\\util.js","@metamask/obs-store":"F:\\metamask-extension\\node_modules\\@metamask\\obs-store\\dist\\index.js","@metamask/safe-event-emitter":"F:\\metamask-extension\\node_modules\\@metamask\\safe-event-emitter\\index.js","lodash":"F:\\metamask-extension\\node_modules\\lodash\\lodash.js","loglevel":"F:\\metamask-extension\\node_modules\\loglevel\\lib\\loglevel.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Ccontrollers%5Ctransactions%5Ctx-state-manager.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ERROR_SUBMITTING = void 0;
var _safeEventEmitter = _interopRequireDefault(require("@metamask/safe-event-emitter"));
var _obsStore = require("@metamask/obs-store");
var _loglevel = _interopRequireDefault(require("loglevel"));
var _lodash = require("lodash");
var _randomId = _interopRequireDefault(require("../../../../shared/modules/random-id"));
var _transaction = require("../../../../shared/constants/transaction");
var _metamaskController = require("../../metamask-controller");
var _transaction2 = require("../../../../shared/modules/transaction.utils");
var _app = require("../../../../shared/constants/app");
var _network = require("../../../../shared/constants/network");
var _txStateHistoryHelpers = require("./lib/tx-state-history-helpers");
var _util = require("./lib/util");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ERROR_SUBMITTING = 'There was an error when resubmitting this transaction.';
/**
 * TransactionStatuses reimported from the shared transaction constants file
 *
 * @typedef {__import__(
 *  '../../../../shared/constants/transaction'
 * ).TransactionStatusString} TransactionStatusString
 */

/**
 * @typedef {__import__('../../../../shared/constants/transaction').TxParams} TxParams
 */

/**
 * @typedef {__import__(
 *  '../../../../shared/constants/transaction'
 * ).TransactionMeta} TransactionMeta
 */

/**
 * @typedef {object} TransactionState
 * @property {Record<string, TransactionMeta>} transactions - TransactionMeta
 *  keyed by the transaction's id.
 */

/**
 * TransactionStateManager is responsible for the state of a transaction and
 * storing the transaction. It also has some convenience methods for finding
 * subsets of transactions.
 *
 * @param {object} opts
 * @param {TransactionState} [opts.initState={ transactions: {} }] - initial
 *  transactions list keyed by id
 * @param {number} [opts.txHistoryLimit] - limit for how many finished
 *  transactions can hang around in state
 * @param {Function} opts.getNetworkId - Get the current network Id.
 * @param {Function} opts.getNetworkStatus - Get the current network status.
 */
exports.ERROR_SUBMITTING = ERROR_SUBMITTING;
class TransactionStateManager extends _safeEventEmitter.default {
  constructor({
    initState,
    txHistoryLimit,
    getNetworkId,
    getNetworkStatus,
    getCurrentChainId
  }) {
    super();
    this.store = new _obsStore.ObservableStore({
      transactions: {},
      ...initState
    });
    this.txHistoryLimit = txHistoryLimit;
    this.getNetworkId = getNetworkId;
    this.getNetworkStatus = getNetworkStatus;
    this.getCurrentChainId = getCurrentChainId;
  }

  /**
   * Generates a TransactionMeta object consisting of the fields required for
   * use throughout the extension. The argument here will override everything
   * in the resulting transaction meta.
   *
   * TODO: Don't overwrite everything?
   *
   * @param {Partial<TransactionMeta>} opts - the object to use when
   *  overwriting default keys of the TransactionMeta
   * @returns {TransactionMeta} the default txMeta object
   */
  generateTxMeta(opts = {}) {
    var _opts$txParams;
    const networkId = this.getNetworkId();
    const networkStatus = this.getNetworkStatus();
    const chainId = this.getCurrentChainId();
    if (networkStatus !== _network.NetworkStatus.Available) {
      throw new Error('MetaMask is having trouble connecting to the network');
    }
    let dappSuggestedGasFees = null;

    // If we are dealing with a transaction suggested by a dapp and not
    // an internally created metamask transaction, we need to keep record of
    // the originally submitted gasParams.
    if (opts.txParams && typeof opts.origin === 'string' && opts.origin !== _app.ORIGIN_METAMASK) {
      if (typeof opts.txParams.gasPrice !== 'undefined') {
        dappSuggestedGasFees = {
          gasPrice: opts.txParams.gasPrice
        };
      } else if (typeof opts.txParams.maxFeePerGas !== 'undefined' || typeof opts.txParams.maxPriorityFeePerGas !== 'undefined') {
        dappSuggestedGasFees = {
          maxPriorityFeePerGas: opts.txParams.maxPriorityFeePerGas,
          maxFeePerGas: opts.txParams.maxFeePerGas
        };
      }
      if (typeof opts.txParams.gas !== 'undefined') {
        dappSuggestedGasFees = {
          ...dappSuggestedGasFees,
          gas: opts.txParams.gas
        };
      }
    }
    return {
      id: (0, _randomId.default)(),
      time: new Date().getTime(),
      status: _transaction.TransactionStatus.unapproved,
      metamaskNetworkId: networkId,
      originalGasEstimate: (_opts$txParams = opts.txParams) === null || _opts$txParams === void 0 ? void 0 : _opts$txParams.gas,
      userEditedGasLimit: false,
      chainId,
      loadingDefaults: true,
      dappSuggestedGasFees,
      sendFlowHistory: [],
      ...opts
    };
  }

  /**
   * Get an object containing all unapproved transactions for the current
   * network. This is the only transaction fetching method that returns an
   * object, so it doesn't use getTransactions like everything else.
   *
   * @returns {Record<string, TransactionMeta>} Unapproved transactions keyed
   *  by id
   */
  getUnapprovedTxList() {
    const chainId = this.getCurrentChainId();
    const networkId = this.getNetworkId();
    return (0, _lodash.pickBy)(this.store.getState().transactions, transaction => transaction.status === _transaction.TransactionStatus.unapproved && (0, _transaction2.transactionMatchesNetwork)(transaction, chainId, networkId));
  }

  /**
   * Get all approved transactions for the current network. If an address is
   * provided, the list will be further refined to only those transactions
   * originating from the supplied address.
   *
   * @param {string} [address] - hex prefixed address to find transactions for.
   * @returns {TransactionMeta[]} the filtered list of transactions
   */
  getApprovedTransactions(address) {
    const searchCriteria = {
      status: _transaction.TransactionStatus.approved
    };
    if (address) {
      searchCriteria.from = address;
    }
    return this.getTransactions({
      searchCriteria
    });
  }

  /**
   * Get all pending transactions for the current network. If an address is
   * provided, the list will be further refined to only those transactions
   * originating from the supplied address.
   *
   * @param {string} [address] - hex prefixed address to find transactions for.
   * @returns {TransactionMeta[]} the filtered list of transactions
   */
  getPendingTransactions(address) {
    const searchCriteria = {
      status: _transaction.TransactionStatus.submitted
    };
    if (address) {
      searchCriteria.from = address;
    }
    return this.getTransactions({
      searchCriteria
    });
  }

  /**
   * Get all confirmed transactions for the current network. If an address is
   * provided, the list will be further refined to only those transactions
   * originating from the supplied address.
   *
   * @param {string} [address] - hex prefixed address to find transactions for.
   * @returns {TransactionMeta[]} the filtered list of transactions
   */
  getConfirmedTransactions(address) {
    const searchCriteria = {
      status: _transaction.TransactionStatus.confirmed
    };
    if (address) {
      searchCriteria.from = address;
    }
    return this.getTransactions({
      searchCriteria
    });
  }

  /**
   * Get transaction with provided.
   *
   * @param {string} [actionId]
   * @returns {TransactionMeta} the filtered transaction
   */
  getTransactionWithActionId(actionId) {
    return (0, _lodash.values)((0, _lodash.pickBy)(this.store.getState().transactions, transaction => transaction.actionId === actionId))[0];
  }

  /**
   * Adds the txMeta to the list of transactions in the store.
   * if the list is over txHistoryLimit it will remove a transaction that
   * is in its final state.
   * it will also add the key `history` to the txMeta with the snap shot of
   * the original object
   *
   * @param {TransactionMeta} txMeta - The TransactionMeta object to add.
   * @returns {TransactionMeta} The same TransactionMeta, but with validated
   *  txParams and transaction history.
   */
  addTransaction(txMeta) {
    // normalize and validate txParams if present
    if (txMeta.txParams) {
      txMeta.txParams = (0, _util.normalizeAndValidateTxParams)(txMeta.txParams, false);
    }
    this.once(`${txMeta.id}:signed`, () => {
      this.removeAllListeners(`${txMeta.id}:rejected`);
    });
    this.once(`${txMeta.id}:rejected`, () => {
      this.removeAllListeners(`${txMeta.id}:signed`);
    });
    // initialize history
    txMeta.history = [];
    // capture initial snapshot of txMeta for history
    const snapshot = (0, _txStateHistoryHelpers.snapshotFromTxMeta)(txMeta);
    txMeta.history.push(snapshot);
    const transactions = this.getTransactions({
      filterToCurrentNetwork: false
    });
    const {
      txHistoryLimit
    } = this;

    // checks if the length of the tx history is longer then desired persistence
    // limit and then if it is removes the oldest confirmed or rejected tx.
    // Pending or unapproved transactions will not be removed by this
    // operation. For safety of presenting a fully functional transaction UI
    // representation, this function will not break apart transactions with the
    // same nonce, per network. Not accounting for transactions of the same
    // nonce and network combo can result in confusing or broken experiences
    // in the UI.
    //
    // TODO: we are already limiting what we send to the UI, and in the future
    // we will send UI only collected groups of transactions *per page* so at
    // some point in the future, this persistence limit can be adjusted. When
    // we do that I think we should figure out a better storage solution for
    // transaction history entries.
    const nonceNetworkSet = new Set();
    const txsToDelete = transactions.reverse().filter(tx => {
      const {
        nonce,
        from
      } = tx.txParams;
      const {
        chainId,
        metamaskNetworkId,
        status
      } = tx;
      const key = `${nonce}-${chainId ?? metamaskNetworkId}-${from}`;
      if (nonceNetworkSet.has(key)) {
        return false;
      } else if (nonceNetworkSet.size < txHistoryLimit - 1 || (0, _util.getFinalStates)().includes(status) === false) {
        nonceNetworkSet.add(key);
        return false;
      }
      return true;
    }).map(tx => tx.id);
    this._deleteTransactions(txsToDelete);
    this._addTransactionsToState([txMeta]);
    return txMeta;
  }
  addExternalTransaction(txMeta) {
    var _txMeta$txParams;
    const fromAddress = txMeta === null || txMeta === void 0 ? void 0 : (_txMeta$txParams = txMeta.txParams) === null || _txMeta$txParams === void 0 ? void 0 : _txMeta$txParams.from;
    const confirmedTransactions = this.getConfirmedTransactions(fromAddress);
    const pendingTransactions = this.getPendingTransactions(fromAddress);
    (0, _util.validateConfirmedExternalTransaction)({
      txMeta,
      pendingTransactions,
      confirmedTransactions
    });
    this._addTransactionsToState([txMeta]);
    return txMeta;
  }

  /**
   * @param {number} txId
   * @returns {TransactionMeta} the txMeta who matches the given id if none found
   * for the network returns undefined
   */
  getTransaction(txId) {
    const {
      transactions
    } = this.store.getState();
    return transactions[txId];
  }

  /**
   * updates the txMeta in the list and adds a history entry
   *
   * @param {object} txMeta - the txMeta to update
   * @param {string} [note] - a note about the update for history
   */
  updateTransaction(txMeta, note) {
    // normalize and validate txParams if present
    if (txMeta.txParams) {
      try {
        txMeta.txParams = (0, _util.normalizeAndValidateTxParams)(txMeta.txParams, false);
      } catch (error) {
        if (txMeta.warning.message === ERROR_SUBMITTING) {
          this.setTxStatusFailed(txMeta.id, error);
        } else {
          throw error;
        }
        return;
      }
    }
    this._updateTransactionHistory(txMeta, note);
  }
  _updateTransactionHistory(txMeta, note) {
    // create txMeta snapshot for history
    const currentState = (0, _txStateHistoryHelpers.snapshotFromTxMeta)(txMeta);
    // recover previous tx state obj
    const previousState = (0, _txStateHistoryHelpers.replayHistory)(txMeta.history);
    // generate history entry and add to history
    const entry = (0, _txStateHistoryHelpers.generateHistoryEntry)(previousState, currentState, note);
    if (entry.length) {
      txMeta.history.push(entry);
    }

    // commit txMeta to state
    const txId = txMeta.id;
    this.store.updateState({
      transactions: {
        ...this.store.getState().transactions,
        [txId]: txMeta
      }
    });
  }

  /**
   * SearchCriteria can search in any key in TxParams or the base
   * TransactionMeta. This type represents any key on either of those two
   * types.
   *
   * @typedef {TxParams[keyof TxParams] | TransactionMeta[keyof TransactionMeta]} SearchableKeys
   */

  /**
   * Predicates can either be strict values, which is shorthand for using
   * strict equality, or a method that receives he value of the specified key
   * and returns a boolean.
   *
   * @typedef {(v: unknown) => boolean | unknown} FilterPredicate
   */

  /**
   * Retrieve a list of transactions from state. By default this will return
   * the full list of Transactions for the currently selected chain/network.
   * Additional options can be provided to change what is included in the final
   * list.
   *
   * @param opts - options to change filter behavior
   * @param {Record<SearchableKeys, FilterPredicate>} [opts.searchCriteria] -
   *  an object with keys that match keys in TransactionMeta or TxParams, and
   *  values that are predicates. Predicates can either be strict values,
   *  which is shorthand for using strict equality, or a method that receives
   *  the value of the specified key and returns a boolean. The transaction
   *  list will be filtered to only those items that the predicate returns
   *  truthy for. **HINT**: `err: undefined` is like looking for a tx with no
   *  err. so you can also search txs that don't have something as well by
   *  setting the value as undefined.
   * @param {TransactionMeta[]} [opts.initialList] - If provided the filtering
   *  will occur on the provided list. By default this will be the full list
   *  from state sorted by time ASC.
   * @param {boolean} [opts.filterToCurrentNetwork] - Filter transaction
   *  list to only those that occurred on the current chain or network.
   *  Defaults to true.
   * @param {number} [opts.limit] - limit the number of transactions returned
   *  to N unique nonces.
   * @returns {TransactionMeta[]} The TransactionMeta objects that all provided
   *  predicates return truthy for.
   */
  getTransactions({
    searchCriteria = {},
    initialList,
    filterToCurrentNetwork = true,
    limit
  } = {}) {
    const chainId = this.getCurrentChainId();
    const networkId = this.getNetworkId();
    // searchCriteria is an object that might have values that aren't predicate
    // methods. When providing any other value type (string, number, etc), we
    // consider this shorthand for "check the value at key for strict equality
    // with the provided value". To conform this object to be only methods, we
    // mapValues (lodash) such that every value on the object is a method that
    // returns a boolean.
    const predicateMethods = (0, _lodash.mapValues)(searchCriteria, predicate => {
      return typeof predicate === 'function' ? predicate : v => v === predicate;
    });

    // If an initial list is provided we need to change it back into an object
    // first, so that it matches the shape of our state. This is done by the
    // lodash keyBy method. This is the edge case for this method, typically
    // initialList will be undefined.
    const transactionsToFilter = initialList ? (0, _lodash.keyBy)(initialList, 'id') : this.store.getState().transactions;

    // Combine sortBy and pickBy to transform our state object into an array of
    // matching transactions that are sorted by time.
    const filteredTransactions = (0, _lodash.sortBy)((0, _lodash.pickBy)(transactionsToFilter, transaction => {
      // default matchesCriteria to the value of transactionMatchesNetwork
      // when filterToCurrentNetwork is true.
      if (filterToCurrentNetwork && (0, _transaction2.transactionMatchesNetwork)(transaction, chainId, networkId) === false) {
        return false;
      }
      // iterate over the predicateMethods keys to check if the transaction
      // matches the searchCriteria
      for (const [key, predicate] of Object.entries(predicateMethods)) {
        // We return false early as soon as we know that one of the specified
        // search criteria do not match the transaction. This prevents
        // needlessly checking all criteria when we already know the criteria
        // are not fully satisfied. We check both txParams and the base
        // object as predicate keys can be either.
        if (key in transaction.txParams) {
          if (predicate(transaction.txParams[key]) === false) {
            return false;
          }
        } else if (predicate(transaction[key]) === false) {
          return false;
        }
      }
      return true;
    }), 'time');
    if (limit !== undefined) {
      // We need to have all transactions of a given nonce in order to display
      // necessary details in the UI. We use the size of this set to determine
      // whether we have reached the limit provided, thus ensuring that all
      // transactions of nonces we include will be sent to the UI.
      const nonces = new Set();
      const txs = [];
      // By default, the transaction list we filter from is sorted by time ASC.
      // To ensure that filtered results prefers the newest transactions we
      // iterate from right to left, inserting transactions into front of a new
      // array. The original order is preserved, but we ensure that newest txs
      // are preferred.
      for (let i = filteredTransactions.length - 1; i > -1; i--) {
        const txMeta = filteredTransactions[i];
        const {
          nonce
        } = txMeta.txParams;
        if (!nonces.has(nonce)) {
          if (nonces.size < limit) {
            nonces.add(nonce);
          } else {
            continue;
          }
        }
        // Push transaction into the beginning of our array to ensure the
        // original order is preserved.
        txs.unshift(txMeta);
      }
      return txs;
    }
    return filteredTransactions;
  }

  /**
   * Update status of the TransactionMeta with provided id to 'rejected'.
   * After setting the status, the TransactionMeta is deleted from state.
   *
   * TODO: Should we show historically rejected transactions somewhere in the
   * UI? Seems like it could be valuable for information purposes. Of course
   * only after limit issues are reduced.
   *
   * @param {number} txId - the target TransactionMeta's Id
   */
  setTxStatusRejected(txId) {
    this._setTransactionStatus(txId, _transaction.TransactionStatus.rejected);
    this._deleteTransaction(txId);
  }

  /**
   * Update status of the TransactionMeta with provided id to 'unapproved'
   *
   * @param {number} txId - the target TransactionMeta's Id
   */
  setTxStatusUnapproved(txId) {
    this._setTransactionStatus(txId, _transaction.TransactionStatus.unapproved);
  }

  /**
   * Update status of the TransactionMeta with provided id to 'approved'
   *
   * @param {number} txId - the target TransactionMeta's Id
   */
  setTxStatusApproved(txId) {
    this._setTransactionStatus(txId, _transaction.TransactionStatus.approved);
  }

  /**
   * Update status of the TransactionMeta with provided id to 'signed'
   *
   * @param {number} txId - the target TransactionMeta's Id
   */
  setTxStatusSigned(txId) {
    this._setTransactionStatus(txId, _transaction.TransactionStatus.signed);
  }

  /**
   * Update status of the TransactionMeta with provided id to 'submitted'
   * and sets the 'submittedTime' property with the current Unix epoch time.
   *
   * @param {number} txId - the target TransactionMeta's Id
   */
  setTxStatusSubmitted(txId) {
    const txMeta = this.getTransaction(txId);
    txMeta.submittedTime = new Date().getTime();
    this.updateTransaction(txMeta, 'txStateManager - add submitted time stamp');
    this._setTransactionStatus(txId, _transaction.TransactionStatus.submitted);
  }

  /**
   * Update status of the TransactionMeta with provided id to 'confirmed'
   *
   * @param {number} txId - the target TransactionMeta's Id
   */
  setTxStatusConfirmed(txId) {
    this._setTransactionStatus(txId, _transaction.TransactionStatus.confirmed);
  }

  /**
   * Update status of the TransactionMeta with provided id to 'dropped'
   *
   * @param {number} txId - the target TransactionMeta's Id
   */
  setTxStatusDropped(txId) {
    this._setTransactionStatus(txId, _transaction.TransactionStatus.dropped);
  }

  /**
   * Update status of the TransactionMeta with provided id to 'failed' and put
   * the error on the TransactionMeta object.
   *
   * @param {number} txId - the target TransactionMeta's Id
   * @param {Error} err - error object
   */
  setTxStatusFailed(txId, err) {
    var _error$message;
    const error = err || new Error('Internal metamask failure');
    const txMeta = this.getTransaction(txId);
    txMeta.err = {
      message: ((_error$message = error.message) === null || _error$message === void 0 ? void 0 : _error$message.toString()) || error.toString(),
      rpc: error.value,
      stack: error.stack
    };
    this._updateTransactionHistory(txMeta, 'transactions:tx-state-manager#fail - add error');
    this._setTransactionStatus(txId, _transaction.TransactionStatus.failed);
  }

  /**
   * Removes all transactions for the given address on the current network.
   *
   * @param {string} address - hex string of the from address on the txParams
   *  to remove
   */
  wipeTransactions(address) {
    // network only tx
    const {
      transactions
    } = this.store.getState();
    const chainId = this.getCurrentChainId();
    const networkId = this.getNetworkId();

    // Update state
    this.store.updateState({
      transactions: (0, _lodash.omitBy)(transactions, transaction => transaction.txParams.from === address && (0, _transaction2.transactionMatchesNetwork)(transaction, chainId, networkId))
    });
  }

  /**
   * Filters out the unapproved transactions from state
   */
  clearUnapprovedTxs() {
    this.store.updateState({
      transactions: (0, _lodash.omitBy)(this.store.getState().transactions, transaction => transaction.status === _transaction.TransactionStatus.unapproved)
    });
  }

  //
  //           PRIVATE METHODS
  //

  /**
   * Updates a transaction's status in state, and then emits events that are
   * subscribed to elsewhere. See below for best guesses on where and how these
   * events are received.
   *
   * @param {number} txId - the TransactionMeta Id
   * @param {TransactionStatusString} status - the status to set on the
   *  TransactionMeta
   * @fires txMeta.id:txMeta.status - every time a transaction's status changes
   *  we emit the change passing along the id. This does not appear to be used
   *  outside of this file, which only listens to this to unsubscribe listeners
   *  of :rejected and :signed statuses when the inverse status changes. Likely
   *  safe to drop.
   * @fires tx:status-update - every time a transaction's status changes we
   *  emit this event and pass txId and status. This event is subscribed to in
   *  the TransactionController and re-broadcast by the TransactionController.
   *  It is used internally within the TransactionController to try and update
   *  pending transactions on each new block (from blockTracker). It's also
   *  subscribed to in metamask-controller to display a browser notification on
   *  confirmed or failed transactions.
   * @fires txMeta.id:finished - When a transaction moves to a finished state
   *  this event is emitted, which is used in the TransactionController to pass
   *  along details of the transaction to the dapp that suggested them. This
   *  pattern is replicated across all of the message managers and can likely
   *  be supplemented or replaced by the ApprovalController.
   * @fires updateBadge - When the number of transactions changes in state,
   *  the badge in the browser extension bar should be updated to reflect the
   *  number of pending transactions. This particular emit doesn't appear to
   *  bubble up anywhere that is actually used. TransactionController emits
   *  this *anytime the state changes*, so this is probably superfluous.
   */
  _setTransactionStatus(txId, status) {
    const txMeta = this.getTransaction(txId);
    if (!txMeta) {
      return;
    }
    txMeta.status = status;
    try {
      this._updateTransactionHistory(txMeta, `txStateManager: setting status to ${status}`);
      this.emit(`${txMeta.id}:${status}`, txId);
      this.emit(`tx:status-update`, txId, status);
      if ([_transaction.TransactionStatus.submitted, _transaction.TransactionStatus.rejected, _transaction.TransactionStatus.failed].includes(status)) {
        this.emit(`${txMeta.id}:finished`, txMeta);
      }
      this.emit(_metamaskController.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE);
    } catch (error) {
      _loglevel.default.error(error);
    }
  }

  /**
   * Adds one or more transactions into state. This is not intended for
   * external use.
   *
   * @private
   * @param {TransactionMeta[]} transactions - the list of transactions to save
   */
  _addTransactionsToState(transactions) {
    this.store.updateState({
      transactions: transactions.reduce((result, newTx) => {
        result[newTx.id] = newTx;
        return result;
      }, this.store.getState().transactions)
    });
  }

  /**
   * removes one transaction from state. This is not intended for external use.
   *
   * @private
   * @param {number} targetTransactionId - the transaction to delete
   */
  _deleteTransaction(targetTransactionId) {
    const {
      transactions
    } = this.store.getState();
    delete transactions[targetTransactionId];
    this.store.updateState({
      transactions
    });
  }

  /**
   * removes multiple transaction from state. This is not intended for external use.
   *
   * @private
   * @param {number[]} targetTransactionIds - the transactions to delete
   */
  _deleteTransactions(targetTransactionIds) {
    const {
      transactions
    } = this.store.getState();
    targetTransactionIds.forEach(transactionId => {
      delete transactions[transactionId];
    });
    this.store.updateState({
      transactions
    });
  }
}
exports.default = TransactionStateManager;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\controllers\\transactions\\tx-state-manager.js",}],
["F:\\metamask-extension\\app\\scripts\\detect-multiple-instances.js", {"../../shared/constants/app":"F:\\metamask-extension\\shared\\constants\\app.ts","./lib/util":"F:\\metamask-extension\\app\\scripts\\lib\\util.ts","webextension-polyfill":"F:\\metamask-extension\\node_modules\\webextension-polyfill\\dist\\browser-polyfill.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Cdetect-multiple-instances.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onMessageReceived = exports.checkForMultipleVersionsRunning = void 0;
var _webextensionPolyfill = _interopRequireDefault(require("webextension-polyfill"));
var _app = require("../../shared/constants/app");
var _util = require("./lib/util");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Sets up two-way communication between the
 * mainline version of extension and Flask build
 * in order to detect & warn if there are two different
 * versions running simultaneously.
 */

const MESSAGE_TEXT = 'isRunning';
const showWarning = () => console.warn('Warning! You have multiple instances of MetaMask running!');

/**
 * Handles the ping message sent from other extension.
 * Displays console warning if it's active.
 *
 * @param message - The message received from the other extension
 */
const onMessageReceived = message => {
  if (message === MESSAGE_TEXT) {
    showWarning();
  }
};

/**
 * Sends the ping message sent to other extensions to detect whether it's active or not.
 */
exports.onMessageReceived = onMessageReceived;
const checkForMultipleVersionsRunning = async () => {
  if ((0, _util.getPlatform)() !== _app.PLATFORM_CHROME && (0, _util.getPlatform)() !== _app.PLATFORM_FIREFOX) {
    return;
  }
  const buildIds = (0, _util.getPlatform)() === _app.PLATFORM_CHROME ? _app.CHROME_BUILD_IDS : _app.FIREFOX_BUILD_IDS;
  const thisBuild = _webextensionPolyfill.default.runtime.id;
  for (const id of buildIds) {
    if (id !== thisBuild) {
      try {
        await _webextensionPolyfill.default.runtime.sendMessage(id, MESSAGE_TEXT);
      } catch (error) {
        // Should do nothing if receiving end was not reached (no other instances running)
      }
    }
  }
};
exports.checkForMultipleVersionsRunning = checkForMultipleVersionsRunning;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\detect-multiple-instances.js",}],
["F:\\metamask-extension\\app\\scripts\\first-time-state.js", {}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Cfirst-time-state.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * @typedef {object} FirstTimeState
 * @property {object} config Initial configuration parameters
 * @property {object} NetworkController Network controller state
 */

/**
 * @type {FirstTimeState}
 */
const initialState = {
  config: {}
};
var _default = initialState;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\first-time-state.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\ComposableObservableStore.js", {"@metamask/base-controller":"F:\\metamask-extension\\node_modules\\@metamask\\base-controller\\dist\\index.js","@metamask/obs-store":"F:\\metamask-extension\\node_modules\\@metamask\\obs-store\\dist\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5CComposableObservableStore.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _obsStore = require("@metamask/obs-store");
var _baseController = require("@metamask/base-controller");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @typedef {__import__('@metamask/base-controller').ControllerMessenger} ControllerMessenger
 */
/**
 * An ObservableStore that can composes a flat
 * structure of child stores based on configuration
 */
class ComposableObservableStore extends _obsStore.ObservableStore {
  /**
   * Create a new store
   *
   * @param {object} options
   * @param {object} [options.config] - Map of internal state keys to child stores
   * @param {ControllerMessenger} options.controllerMessenger - The controller
   *   messenger, used for subscribing to events from BaseControllerV2-based
   *   controllers.
   * @param {object} [options.state] - The initial store state
   * @param {boolean} [options.persist] - Whether or not to apply the persistence for v2 controllers
   */
  constructor({
    config,
    controllerMessenger,
    state,
    persist
  }) {
    super(state);
    /**
     * Describes which stores are being composed. The key is the name of the
     * store, and the value is either an ObserableStore, or a controller that
     * extends one of the two base controllers in the `@metamask/base-controller`
     * package.
     *
     * @type {Record<string, object>}
     */
    _defineProperty(this, "config", {});
    this.persist = persist;
    this.controllerMessenger = controllerMessenger;
    if (config) {
      this.updateStructure(config);
    }
  }

  /**
   * Composes a new internal store subscription structure
   *
   * @param {Record<string, object>} config - Describes which stores are being
   *   composed. The key is the name of the store, and the value is either an
   *   ObserableStore, or a controller that extends one of the two base
   *   controllers in the `@metamask/base-controller` package.
   */
  updateStructure(config) {
    this.config = config;
    this.removeAllListeners();
    for (const key of Object.keys(config)) {
      if (!config[key]) {
        throw new Error(`Undefined '${key}'`);
      }
      const store = config[key];
      if (store.subscribe) {
        config[key].subscribe(state => {
          this.updateState({
            [key]: state
          });
        });
      } else {
        this.controllerMessenger.subscribe(`${store.name}:stateChange`, state => {
          let updatedState = state;
          if (this.persist) {
            updatedState = (0, _baseController.getPersistentState)(state, config[key].metadata);
          }
          this.updateState({
            [key]: updatedState
          });
        });
      }
    }
  }

  /**
   * Merges all child store state into a single object rather than
   * returning an object keyed by child store class name
   *
   * @returns {object} Object containing merged child store state
   */
  getFlatState() {
    if (!this.config) {
      return {};
    }
    let flatState = {};
    for (const key of Object.keys(this.config)) {
      const controller = this.config[key];
      const state = controller.getState ? controller.getState() : controller.state;
      flatState = {
        ...flatState,
        ...state
      };
    }
    return flatState;
  }
}
exports.default = ComposableObservableStore;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\ComposableObservableStore.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\account-tracker.js", {"../../../shared/constants/network":"F:\\metamask-extension\\shared\\constants\\network.ts","../constants/contracts":"F:\\metamask-extension\\app\\scripts\\constants\\contracts.ts","./util":"F:\\metamask-extension\\app\\scripts\\lib\\util.ts","@ethersproject/contracts":"F:\\metamask-extension\\node_modules\\@ethersproject\\contracts\\lib\\index.js","@ethersproject/providers":"F:\\metamask-extension\\node_modules\\@ethersproject\\providers\\lib\\index.js","@metamask/obs-store":"F:\\metamask-extension\\node_modules\\@metamask\\obs-store\\dist\\index.js","eth-query":"F:\\metamask-extension\\node_modules\\eth-query\\index.js","loglevel":"F:\\metamask-extension\\node_modules\\loglevel\\lib\\loglevel.js","pify":"F:\\metamask-extension\\node_modules\\pify\\index.js","single-call-balance-checker-abi":"F:\\metamask-extension\\node_modules\\single-call-balance-checker-abi\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5Caccount-tracker.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ethQuery = _interopRequireDefault(require("eth-query"));
var _obsStore = require("@metamask/obs-store");
var _loglevel = _interopRequireDefault(require("loglevel"));
var _pify = _interopRequireDefault(require("pify"));
var _providers = require("@ethersproject/providers");
var _contracts = require("@ethersproject/contracts");
var _singleCallBalanceCheckerAbi = _interopRequireDefault(require("single-call-balance-checker-abi"));
var _network = require("../../../shared/constants/network");
var _contracts2 = require("../constants/contracts");
var _util = require("./util");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* Account Tracker
 *
 * This module is responsible for tracking any number of accounts
 * and caching their current balances & transaction counts.
 *
 * It also tracks transaction hashes, and checks their inclusion status
 * on each new block.
 */

/**
 * This module is responsible for tracking any number of accounts and caching their current balances & transaction
 * counts.
 *
 * It also tracks transaction hashes, and checks their inclusion status on each new block.
 *
 * @typedef {object} AccountTracker
 * @property {object} store The stored object containing all accounts to track, as well as the current block's gas limit.
 * @property {object} store.accounts The accounts currently stored in this AccountTracker
 * @property {string} store.currentBlockGasLimit A hex string indicating the gas limit of the current block
 * @property {object} _provider A provider needed to create the EthQuery instance used within this AccountTracker.
 * @property {EthQuery} _query An EthQuery instance used to access account information from the blockchain
 * @property {BlockTracker} _blockTracker A BlockTracker instance. Needed to ensure that accounts and their info updates
 * when a new block is created.
 * @property {object} _currentBlockNumber Reference to a property on the _blockTracker: the number (i.e. an id) of the the current block
 */
class AccountTracker {
  /**
   * @param {object} opts - Options for initializing the controller
   * @param {object} opts.provider - An EIP-1193 provider instance that uses the current global network
   * @param {object} opts.blockTracker - A block tracker, which emits events for each new block
   * @param {Function} opts.getCurrentChainId - A function that returns the `chainId` for the current global network
   * @param {Function} opts.getNetworkIdentifier - A function that returns the current network
   */
  constructor(opts = {}) {
    const initState = {
      accounts: {},
      currentBlockGasLimit: ''
    };
    this.store = new _obsStore.ObservableStore({
      ...initState,
      ...opts.initState
    });
    this.resetState = () => {
      this.store.updateState(initState);
    };
    this._provider = opts.provider;
    this._query = (0, _pify.default)(new _ethQuery.default(this._provider));
    this._blockTracker = opts.blockTracker;
    // blockTracker.currentBlock may be null
    this._currentBlockNumber = this._blockTracker.getCurrentBlock();
    this._blockTracker.once('latest', blockNumber => {
      this._currentBlockNumber = blockNumber;
    });
    // bind function for easier listener syntax
    this._updateForBlock = this._updateForBlock.bind(this);
    this.getCurrentChainId = opts.getCurrentChainId;
    this.getNetworkIdentifier = opts.getNetworkIdentifier;
    this.preferencesController = opts.preferencesController;
    this.onboardingController = opts.onboardingController;
    this.onboardingController.store.subscribe((0, _util.previousValueComparator)(async (prevState, currState) => {
      const {
        completedOnboarding: prevCompletedOnboarding
      } = prevState;
      const {
        completedOnboarding: currCompletedOnboarding
      } = currState;
      if (!prevCompletedOnboarding && currCompletedOnboarding) {
        this._updateAccounts();
      }
    }, this.onboardingController.store.getState()));
    this.preferencesController.store.subscribe((0, _util.previousValueComparator)(async (prevState, currState) => {
      const {
        selectedAddress: prevSelectedAddress
      } = prevState;
      const {
        selectedAddress: currSelectedAddress,
        useMultiAccountBalanceChecker
      } = currState;
      if (prevSelectedAddress !== currSelectedAddress && !useMultiAccountBalanceChecker) {
        this._updateAccounts();
      }
    }, this.onboardingController.store.getState()));
    this.ethersProvider = new _providers.Web3Provider(this._provider);
  }
  start() {
    // remove first to avoid double add
    this._blockTracker.removeListener('latest', this._updateForBlock);
    // add listener
    this._blockTracker.addListener('latest', this._updateForBlock);
    // fetch account balances
    this._updateAccounts();
  }
  stop() {
    // remove listener
    this._blockTracker.removeListener('latest', this._updateForBlock);
  }

  /**
   * Ensures that the locally stored accounts are in sync with a set of accounts stored externally to this
   * AccountTracker.
   *
   * Once this AccountTracker's accounts are up to date with those referenced by the passed addresses, each
   * of these accounts are given an updated balance via EthQuery.
   *
   * @param {Array} addresses - The array of hex addresses for accounts with which this AccountTracker's accounts should be
   * in sync
   */
  syncWithAddresses(addresses) {
    const {
      accounts
    } = this.store.getState();
    const locals = Object.keys(accounts);
    const accountsToAdd = [];
    addresses.forEach(upstream => {
      if (!locals.includes(upstream)) {
        accountsToAdd.push(upstream);
      }
    });
    const accountsToRemove = [];
    locals.forEach(local => {
      if (!addresses.includes(local)) {
        accountsToRemove.push(local);
      }
    });
    this.addAccounts(accountsToAdd);
    this.removeAccount(accountsToRemove);
  }

  /**
   * Adds new addresses to track the balances of
   * given a balance as long this._currentBlockNumber is defined.
   *
   * @param {Array} addresses - An array of hex addresses of new accounts to track
   */
  addAccounts(addresses) {
    const {
      accounts
    } = this.store.getState();
    // add initial state for addresses
    addresses.forEach(address => {
      accounts[address] = {};
    });
    // save accounts state
    this.store.updateState({
      accounts
    });
    // fetch balances for the accounts if there is block number ready
    if (!this._currentBlockNumber) {
      return;
    }
    this._updateAccounts();
  }

  /**
   * Removes accounts from being tracked
   *
   * @param {Array} addresses - An array of hex addresses to stop tracking.
   */
  removeAccount(addresses) {
    const {
      accounts
    } = this.store.getState();
    // remove each state object
    addresses.forEach(address => {
      delete accounts[address];
    });
    // save accounts state
    this.store.updateState({
      accounts
    });
  }

  /**
   * Removes all addresses and associated balances
   */

  clearAccounts() {
    this.store.updateState({
      accounts: {}
    });
  }

  /**
   * Given a block, updates this AccountTracker's currentBlockGasLimit, and then updates each local account's balance
   * via EthQuery
   *
   * @private
   * @param {number} blockNumber - the block number to update to.
   * @fires 'block' The updated state, if all account updates are successful
   */
  async _updateForBlock(blockNumber) {
    this._currentBlockNumber = blockNumber;

    // block gasLimit polling shouldn't be in account-tracker shouldn't be here...
    const currentBlock = await this._query.getBlockByNumber(blockNumber, false);
    if (!currentBlock) {
      return;
    }
    const currentBlockGasLimit = currentBlock.gasLimit;
    this.store.updateState({
      currentBlockGasLimit
    });
    try {
      await this._updateAccounts();
    } catch (err) {
      _loglevel.default.error(err);
    }
  }

  /**
   * balanceChecker is deployed on main eth (test)nets and requires a single call
   * for all other networks, calls this._updateAccount for each account in this.store
   *
   * @returns {Promise} after all account balances updated
   */
  async _updateAccounts() {
    const {
      completedOnboarding
    } = this.onboardingController.store.getState();
    if (!completedOnboarding) {
      return;
    }
    const {
      useMultiAccountBalanceChecker
    } = this.preferencesController.store.getState();
    let addresses = [];
    if (useMultiAccountBalanceChecker) {
      const {
        accounts
      } = this.store.getState();
      addresses = Object.keys(accounts);
    } else {
      const selectedAddress = this.preferencesController.getSelectedAddress();
      addresses = [selectedAddress];
    }
    const chainId = this.getCurrentChainId();
    const networkId = this.getNetworkIdentifier();
    const rpcUrl = 'http://127.0.0.1:8545';
    if (networkId === _network.LOCALHOST_RPC_URL || networkId === rpcUrl) {
      await Promise.all(addresses.map(this._updateAccount.bind(this)));
    } else {
      switch (chainId) {
        case _network.CHAIN_IDS.MAINNET:
          await this._updateAccountsViaBalanceChecker(addresses, _contracts2.SINGLE_CALL_BALANCES_ADDRESS);
          break;
        case _network.CHAIN_IDS.GOERLI:
          await this._updateAccountsViaBalanceChecker(addresses, _contracts2.SINGLE_CALL_BALANCES_ADDRESS_GOERLI);
          break;
        case _network.CHAIN_IDS.SEPOLIA:
          await this._updateAccountsViaBalanceChecker(addresses, _contracts2.SINGLE_CALL_BALANCES_ADDRESS_SEPOLIA);
          break;
        case _network.CHAIN_IDS.BSC:
          await this._updateAccountsViaBalanceChecker(addresses, _contracts2.SINGLE_CALL_BALANCES_ADDRESS_BSC);
          break;
        case _network.CHAIN_IDS.OPTIMISM:
          await this._updateAccountsViaBalanceChecker(addresses, _contracts2.SINGLE_CALL_BALANCES_ADDRESS_OPTIMISM);
          break;
        case _network.CHAIN_IDS.POLYGON:
          await this._updateAccountsViaBalanceChecker(addresses, _contracts2.SINGLE_CALL_BALANCES_ADDRESS_POLYGON);
          break;
        case _network.CHAIN_IDS.AVALANCHE:
          await this._updateAccountsViaBalanceChecker(addresses, _contracts2.SINGLE_CALL_BALANCES_ADDRESS_AVALANCHE);
          break;
        case _network.CHAIN_IDS.FANTOM:
          await this._updateAccountsViaBalanceChecker(addresses, _contracts2.SINGLE_CALL_BALANCES_ADDRESS_FANTOM);
          break;
        case _network.CHAIN_IDS.ARBITRUM:
          await this._updateAccountsViaBalanceChecker(addresses, _contracts2.SINGLE_CALL_BALANCES_ADDRESS_ARBITRUM);
          break;
        default:
          await Promise.all(addresses.map(this._updateAccount.bind(this)));
      }
    }
  }

  /**
   * Updates the current balance of an account.
   *
   * @private
   * @param {string} address - A hex address of a the account to be updated
   * @returns {Promise} after the account balance is updated
   */
  async _updateAccount(address) {
    const {
      useMultiAccountBalanceChecker
    } = this.preferencesController.store.getState();
    let balance = '0x0';

    // query balance
    try {
      balance = await this._query.getBalance(address);
    } catch (error) {
      var _error$data, _error$data$request;
      if (((_error$data = error.data) === null || _error$data === void 0 ? void 0 : (_error$data$request = _error$data.request) === null || _error$data$request === void 0 ? void 0 : _error$data$request.method) !== 'eth_getBalance') {
        throw error;
      }
    }
    const result = {
      address,
      balance
    };
    // update accounts state
    const {
      accounts
    } = this.store.getState();
    // only populate if the entry is still present
    if (!accounts[address]) {
      return;
    }
    let newAccounts = accounts;
    if (!useMultiAccountBalanceChecker) {
      newAccounts = {};
      Object.keys(accounts).forEach(accountAddress => {
        if (address !== accountAddress) {
          newAccounts[accountAddress] = {
            address: accountAddress,
            balance: null
          };
        }
      });
    }
    newAccounts[address] = result;
    this.store.updateState({
      accounts: newAccounts
    });
  }

  /**
   * Updates current address balances from balanceChecker deployed contract instance
   *
   * @param {*} addresses
   * @param {*} deployedContractAddress
   */
  async _updateAccountsViaBalanceChecker(addresses, deployedContractAddress) {
    const {
      accounts
    } = this.store.getState();
    const newAccounts = {};
    Object.keys(accounts).forEach(address => {
      if (!addresses.includes(address)) {
        newAccounts[address] = {
          address,
          balance: null
        };
      }
    });
    this.ethersProvider = new _providers.Web3Provider(this._provider);
    const ethContract = await new _contracts.Contract(deployedContractAddress, _singleCallBalanceCheckerAbi.default, this.ethersProvider);
    const ethBalance = ['0x0000000000000000000000000000000000000000'];
    try {
      const balances = await ethContract.balances(addresses, ethBalance);
      addresses.forEach((address, index) => {
        const balance = balances[index] ? balances[index].toHexString() : '0x0';
        newAccounts[address] = {
          address,
          balance
        };
      });
      this.store.updateState({
        accounts: newAccounts
      });
    } catch (error) {
      _loglevel.default.warn(`MetaMask - Account Tracker single call balance fetch failed`, error);
      Promise.all(addresses.map(this._updateAccount.bind(this)));
    }
  }
}
exports.default = AccountTracker;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\account-tracker.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\cleanErrorStack.js", {}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5CcleanErrorStack.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cleanErrorStack;
/**
 * Returns error without stack trace for better UI display
 *
 * @param {Error} err - error
 * @returns {Error} Error with clean stack trace.
 */
function cleanErrorStack(err) {
  let {
    name
  } = err;
  name = name === undefined ? 'Error' : String(name);
  let msg = err.message;
  msg = msg === undefined ? '' : String(msg);
  if (name === '') {
    err.stack = err.message;
  } else if (msg === '') {
    err.stack = err.name;
  } else if (!err.stack) {
    err.stack = `${err.name}: ${err.message}`;
  }
  return err;
}

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\cleanErrorStack.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\createDupeReqFilterMiddleware.js", {"loglevel":"F:\\metamask-extension\\node_modules\\loglevel\\lib\\loglevel.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5CcreateDupeReqFilterMiddleware.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createDupeReqFilterMiddleware;
var _loglevel = _interopRequireDefault(require("loglevel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Returns a middleware that filters out requests already seen
 *
 * @returns {Function}
 */
function createDupeReqFilterMiddleware() {
  const processedRequestId = [];
  return function filterDuplicateRequestMiddleware( /** @type {any} */req, /** @type {any} */_res, /** @type {Function} */next, /** @type {Function} */end) {
    if (processedRequestId.indexOf(req.id) >= 0) {
      _loglevel.default.info(`RPC request with id ${req.id} already seen.`);
      return end();
    }
    processedRequestId.push(req.id);
    return next();
  };
}

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\createDupeReqFilterMiddleware.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\createLoggerMiddleware.js", {"loglevel":"F:\\metamask-extension\\node_modules\\loglevel\\lib\\loglevel.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5CcreateLoggerMiddleware.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createLoggerMiddleware;
var _loglevel = _interopRequireDefault(require("loglevel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Returns a middleware that logs RPC activity
 *
 * @param {{ origin: string }} opts - The middleware options
 * @returns {Function}
 */
function createLoggerMiddleware(opts) {
  return function loggerMiddleware( /** @type {any} */req, /** @type {any} */res, /** @type {Function} */next) {
    next(( /** @type {Function} */cb) => {
      if (res.error) {
        _loglevel.default.error('Error in RPC response:\n', res);
      }
      if (req.isMetamaskInternal) {
        return;
      }
      _loglevel.default.info(`RPC (${opts.origin}):`, req, '->', res);
      cb();
    });
  };
}

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\createLoggerMiddleware.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\createMetaRPCHandler.js", {"../../../shared/modules/mv3.utils":"F:\\metamask-extension\\shared\\modules\\mv3.utils.js","eth-rpc-errors":"F:\\metamask-extension\\node_modules\\eth-rpc-errors\\dist\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5CcreateMetaRPCHandler.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ethRpcErrors = require("eth-rpc-errors");
var _mv = require("../../../shared/modules/mv3.utils");
const createMetaRPCHandler = (api, outStream, store, localStoreApiWrapper) => {
  return async data => {
    if (outStream._writableState.ended) {
      return;
    }
    if (!api[data.method]) {
      outStream.write({
        jsonrpc: '2.0',
        error: _ethRpcErrors.ethErrors.rpc.methodNotFound({
          message: `${data.method} not found`
        }),
        id: data.id
      });
      return;
    }
    let result;
    let error;
    try {
      result = await api[data.method](...data.params);
    } catch (err) {
      error = err;
    } finally {
      if (_mv.isManifestV3 && store && data.method !== 'getState') {
        localStoreApiWrapper.set(store.getState());
      }
    }
    if (outStream._writableState.ended) {
      if (error) {
        console.error(error);
      }
      return;
    }
    if (error) {
      outStream.write({
        jsonrpc: '2.0',
        error: (0, _ethRpcErrors.serializeError)(error, {
          shouldIncludeStack: true
        }),
        id: data.id
      });
    } else {
      outStream.write({
        jsonrpc: '2.0',
        result,
        id: data.id
      });
    }
  };
};
var _default = createMetaRPCHandler;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\createMetaRPCHandler.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\createMetamaskMiddleware.js", {"./middleware/pending":"F:\\metamask-extension\\app\\scripts\\lib\\middleware\\pending.js","@metamask/eth-json-rpc-middleware":"F:\\metamask-extension\\node_modules\\@metamask\\eth-json-rpc-middleware\\dist\\index.js","json-rpc-engine":"F:\\metamask-extension\\node_modules\\json-rpc-engine\\dist\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5CcreateMetamaskMiddleware.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMetamaskMiddleware;
var _jsonRpcEngine = require("json-rpc-engine");
var _ethJsonRpcMiddleware = require("@metamask/eth-json-rpc-middleware");
var _pending = require("./middleware/pending");
function createMetamaskMiddleware({
  version,
  getAccounts,
  processTransaction,
  processEthSignMessage,
  processTypedMessage,
  processTypedMessageV3,
  processTypedMessageV4,
  processPersonalMessage,
  processDecryptMessage,
  processEncryptionPublicKey,
  getPendingNonce,
  getPendingTransactionByHash
}) {
  const metamaskMiddleware = (0, _jsonRpcEngine.mergeMiddleware)([(0, _jsonRpcEngine.createScaffoldMiddleware)({
    eth_syncing: false,
    web3_clientVersion: `MetaMask/v${version}`
  }), (0, _ethJsonRpcMiddleware.createWalletMiddleware)({
    getAccounts,
    processTransaction,
    processEthSignMessage,
    processTypedMessage,
    processTypedMessageV3,
    processTypedMessageV4,
    processPersonalMessage,
    processDecryptMessage,
    processEncryptionPublicKey
  }), (0, _pending.createPendingNonceMiddleware)({
    getPendingNonce
  }), (0, _pending.createPendingTxMiddleware)({
    getPendingTransactionByHash
  })]);
  return metamaskMiddleware;
}

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\createMetamaskMiddleware.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\createOnboardingMiddleware.js", {"loglevel":"F:\\metamask-extension\\node_modules\\loglevel\\lib\\loglevel.js","webextension-polyfill":"F:\\metamask-extension\\node_modules\\webextension-polyfill\\dist\\browser-polyfill.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5CcreateOnboardingMiddleware.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createOnboardingMiddleware;
var _loglevel = _interopRequireDefault(require("loglevel"));
var _webextensionPolyfill = _interopRequireDefault(require("webextension-polyfill"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Returns a middleware that intercepts `wallet_registerOnboarding` messages
 *
 * @param {{ location: string, registerOnboarding: Function }} opts - The middleware options
 * @returns {(req: any, res: any, next: Function, end: Function) => void}
 */
function createOnboardingMiddleware({
  location,
  registerOnboarding
}) {
  return async function originMiddleware(req, res, next, end) {
    try {
      if (req.method !== 'wallet_registerOnboarding') {
        next();
        return;
      }
      if (req.tabId && req.tabId !== _webextensionPolyfill.default.tabs.TAB_ID_NONE) {
        await registerOnboarding(location, req.tabId);
      } else {
        _loglevel.default.debug(`'wallet_registerOnboarding' message from ${location} ignored due to missing tabId`);
      }
      res.result = true;
      end();
    } catch (error) {
      end(error);
    }
  };
}

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\createOnboardingMiddleware.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\createOriginMiddleware.js", {}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5CcreateOriginMiddleware.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createOriginMiddleware;
/**
 * Returns a middleware that appends the DApp origin to request
 *
 * @param {{ origin: string }} opts - The middleware options
 * @returns {Function}
 */
function createOriginMiddleware(opts) {
  return function originMiddleware( /** @type {any} */req, /** @type {any} */_, /** @type {Function} */next) {
    req.origin = opts.origin;
    next();
  };
}

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\createOriginMiddleware.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\createRPCMethodTrackingMiddleware.js", {"../../../shared/constants/app":"F:\\metamask-extension\\shared\\constants\\app.ts","../../../shared/constants/metametrics":"F:\\metamask-extension\\shared\\constants\\metametrics.ts","../../../shared/constants/time":"F:\\metamask-extension\\shared\\constants\\time.ts","../../../shared/constants/transaction":"F:\\metamask-extension\\shared\\constants\\transaction.ts","@metamask/controller-utils":"F:\\metamask-extension\\node_modules\\@metamask\\controller-utils\\dist\\index.js","eth-rpc-errors":"F:\\metamask-extension\\node_modules\\eth-rpc-errors\\dist\\index.js","ethereumjs-util":"F:\\metamask-extension\\node_modules\\ethereumjs-util\\dist.browser\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5CcreateRPCMethodTrackingMiddleware.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createRPCMethodTrackingMiddleware;
var _ethRpcErrors = require("eth-rpc-errors");
var _controllerUtils = require("@metamask/controller-utils");
var _ethereumjsUtil = require("ethereumjs-util");
var _app = require("../../../shared/constants/app");
var _transaction = require("../../../shared/constants/transaction");
var _time = require("../../../shared/constants/time");
var _metametrics = require("../../../shared/constants/metametrics");
/**
 * These types determine how the method tracking middleware handles incoming
 * requests based on the method name. There are three options right now but
 * the types could be expanded to cover other options in the future.
 */
const RATE_LIMIT_TYPES = {
  RATE_LIMITED: 'rate_limited',
  BLOCKED: 'blocked',
  NON_RATE_LIMITED: 'non_rate_limited'
};

/**
 * This object maps a method name to a RATE_LIMIT_TYPE. If not in this map the
 * default is 'RATE_LIMITED'
 */
const RATE_LIMIT_MAP = {
  [_app.MESSAGE_TYPE.ETH_SIGN]: RATE_LIMIT_TYPES.NON_RATE_LIMITED,
  [_app.MESSAGE_TYPE.ETH_SIGN_TYPED_DATA]: RATE_LIMIT_TYPES.NON_RATE_LIMITED,
  [_app.MESSAGE_TYPE.ETH_SIGN_TYPED_DATA_V3]: RATE_LIMIT_TYPES.NON_RATE_LIMITED,
  [_app.MESSAGE_TYPE.ETH_SIGN_TYPED_DATA_V4]: RATE_LIMIT_TYPES.NON_RATE_LIMITED,
  [_app.MESSAGE_TYPE.PERSONAL_SIGN]: RATE_LIMIT_TYPES.NON_RATE_LIMITED,
  [_app.MESSAGE_TYPE.ETH_DECRYPT]: RATE_LIMIT_TYPES.NON_RATE_LIMITED,
  [_app.MESSAGE_TYPE.ETH_GET_ENCRYPTION_PUBLIC_KEY]: RATE_LIMIT_TYPES.NON_RATE_LIMITED,
  [_app.MESSAGE_TYPE.ETH_REQUEST_ACCOUNTS]: RATE_LIMIT_TYPES.RATE_LIMITED,
  [_app.MESSAGE_TYPE.WALLET_REQUEST_PERMISSIONS]: RATE_LIMIT_TYPES.RATE_LIMITED,
  [_app.MESSAGE_TYPE.SEND_METADATA]: RATE_LIMIT_TYPES.BLOCKED,
  [_app.MESSAGE_TYPE.GET_PROVIDER_STATE]: RATE_LIMIT_TYPES.BLOCKED
};

/**
 * For events with user interaction (approve / reject | cancel) this map will
 * return an object with APPROVED, REJECTED, REQUESTED, and FAILED keys that map to the
 * appropriate event names.
 */
const EVENT_NAME_MAP = {
  [_app.MESSAGE_TYPE.ETH_SIGN]: {
    APPROVED: _metametrics.MetaMetricsEventName.SignatureApproved,
    FAILED: _metametrics.MetaMetricsEventName.SignatureFailed,
    REJECTED: _metametrics.MetaMetricsEventName.SignatureRejected,
    REQUESTED: _metametrics.MetaMetricsEventName.SignatureRequested
  },
  [_app.MESSAGE_TYPE.ETH_SIGN_TYPED_DATA]: {
    APPROVED: _metametrics.MetaMetricsEventName.SignatureApproved,
    REJECTED: _metametrics.MetaMetricsEventName.SignatureRejected,
    REQUESTED: _metametrics.MetaMetricsEventName.SignatureRequested
  },
  [_app.MESSAGE_TYPE.ETH_SIGN_TYPED_DATA_V3]: {
    APPROVED: _metametrics.MetaMetricsEventName.SignatureApproved,
    REJECTED: _metametrics.MetaMetricsEventName.SignatureRejected,
    REQUESTED: _metametrics.MetaMetricsEventName.SignatureRequested
  },
  [_app.MESSAGE_TYPE.ETH_SIGN_TYPED_DATA_V4]: {
    APPROVED: _metametrics.MetaMetricsEventName.SignatureApproved,
    REJECTED: _metametrics.MetaMetricsEventName.SignatureRejected,
    REQUESTED: _metametrics.MetaMetricsEventName.SignatureRequested
  },
  [_app.MESSAGE_TYPE.PERSONAL_SIGN]: {
    APPROVED: _metametrics.MetaMetricsEventName.SignatureApproved,
    REJECTED: _metametrics.MetaMetricsEventName.SignatureRejected,
    REQUESTED: _metametrics.MetaMetricsEventName.SignatureRequested
  },
  [_app.MESSAGE_TYPE.ETH_DECRYPT]: {
    APPROVED: _metametrics.MetaMetricsEventName.DecryptionApproved,
    REJECTED: _metametrics.MetaMetricsEventName.DecryptionRejected,
    REQUESTED: _metametrics.MetaMetricsEventName.DecryptionRequested
  },
  [_app.MESSAGE_TYPE.ETH_GET_ENCRYPTION_PUBLIC_KEY]: {
    APPROVED: _metametrics.MetaMetricsEventName.EncryptionPublicKeyApproved,
    REJECTED: _metametrics.MetaMetricsEventName.EncryptionPublicKeyRejected,
    REQUESTED: _metametrics.MetaMetricsEventName.EncryptionPublicKeyRequested
  },
  [_app.MESSAGE_TYPE.ETH_REQUEST_ACCOUNTS]: {
    APPROVED: _metametrics.MetaMetricsEventName.PermissionsApproved,
    REJECTED: _metametrics.MetaMetricsEventName.PermissionsRejected,
    REQUESTED: _metametrics.MetaMetricsEventName.PermissionsRequested
  },
  [_app.MESSAGE_TYPE.WALLET_REQUEST_PERMISSIONS]: {
    APPROVED: _metametrics.MetaMetricsEventName.PermissionsApproved,
    REJECTED: _metametrics.MetaMetricsEventName.PermissionsRejected,
    REQUESTED: _metametrics.MetaMetricsEventName.PermissionsRequested
  }
};
const rateLimitTimeouts = {};

/**
 * Returns a middleware that tracks inpage_provider usage using sampling for
 * each type of event except those that require user interaction, such as
 * signature requests
 *
 * @param {object} opts - options for the rpc method tracking middleware
 * @param {Function} opts.trackEvent - trackEvent method from
 *  MetaMetricsController
 * @param {Function} opts.getMetricsState - get the state of
 *  MetaMetricsController
 * @param {number} [opts.rateLimitSeconds] - number of seconds to wait before
 *  allowing another set of events to be tracked.
 * @param opts.securityProviderRequest
 * @returns {Function}
 */
function createRPCMethodTrackingMiddleware({
  trackEvent,
  getMetricsState,
  rateLimitSeconds = 60 * 5,
  securityProviderRequest
}) {
  return async function rpcMethodTrackingMiddleware( /** @type {any} */req, /** @type {any} */res, /** @type {Function} */next) {
    const {
      origin,
      method
    } = req;

    // Determine what type of rate limit to apply based on method
    const rateLimitType = RATE_LIMIT_MAP[method] ?? RATE_LIMIT_TYPES.RATE_LIMITED;

    // If the rateLimitType is RATE_LIMITED check the rateLimitTimeouts
    const rateLimited = rateLimitType === RATE_LIMIT_TYPES.RATE_LIMITED && typeof rateLimitTimeouts[method] !== 'undefined';

    // Get the participateInMetaMetrics state to determine if we should track
    // anything. This is extra redundancy because this value is checked in
    // the metametrics controller's trackEvent method as well.
    const userParticipatingInMetaMetrics = getMetricsState().participateInMetaMetrics === true;

    // Get the event type, each of which has APPROVED, REJECTED and REQUESTED
    // keys for the various events in the flow.
    const eventType = EVENT_NAME_MAP[method];
    const eventProperties = {};

    // Boolean variable that reduces code duplication and increases legibility
    const shouldTrackEvent =
    // Don't track if the request came from our own UI or background
    origin !== _app.ORIGIN_METAMASK &&
    // Don't track if this is a blocked method
    rateLimitType !== RATE_LIMIT_TYPES.BLOCKED &&
    // Don't track if the rate limit has been hit
    rateLimited === false &&
    // Don't track if the user isn't participating in metametrics
    userParticipatingInMetaMetrics === true;
    if (shouldTrackEvent) {
      // We track an initial "requested" event as soon as the dapp calls the
      // provider method. For the events not special cased this is the only
      // event that will be fired and the event name will be
      // 'Provider Method Called'.
      const event = eventType ? eventType.REQUESTED : _metametrics.MetaMetricsEventName.ProviderMethodCalled;
      if (event === _metametrics.MetaMetricsEventName.SignatureRequested) {
        var _req$params, _req$params6;
        eventProperties.signature_type = method;

        // In personal messages the first param is data while in typed messages second param is data
        // if condition below is added to ensure that the right params are captured as data and address.
        let data;
        let from;
        if ((0, _ethereumjsUtil.isValidAddress)(req === null || req === void 0 ? void 0 : (_req$params = req.params) === null || _req$params === void 0 ? void 0 : _req$params[1])) {
          var _req$params2, _req$params3;
          data = req === null || req === void 0 ? void 0 : (_req$params2 = req.params) === null || _req$params2 === void 0 ? void 0 : _req$params2[0];
          from = req === null || req === void 0 ? void 0 : (_req$params3 = req.params) === null || _req$params3 === void 0 ? void 0 : _req$params3[1];
        } else {
          var _req$params4, _req$params5;
          data = req === null || req === void 0 ? void 0 : (_req$params4 = req.params) === null || _req$params4 === void 0 ? void 0 : _req$params4[1];
          from = req === null || req === void 0 ? void 0 : (_req$params5 = req.params) === null || _req$params5 === void 0 ? void 0 : _req$params5[0];
        }
        const paramsExamplePassword = req === null || req === void 0 ? void 0 : (_req$params6 = req.params) === null || _req$params6 === void 0 ? void 0 : _req$params6[2];
        const msgData = {
          msgParams: {
            ...paramsExamplePassword,
            from,
            data,
            origin
          },
          status: _transaction.TransactionStatus.unapproved,
          type: req.method
        };
        try {
          const securityProviderResponse = await securityProviderRequest(msgData, req.method);
          if ((securityProviderResponse === null || securityProviderResponse === void 0 ? void 0 : securityProviderResponse.flagAsDangerous) === 1) {
            eventProperties.ui_customizations = [_metametrics.MetaMetricsEventUiCustomization.FlaggedAsMalicious];
          } else if ((securityProviderResponse === null || securityProviderResponse === void 0 ? void 0 : securityProviderResponse.flagAsDangerous) === 2) {
            eventProperties.ui_customizations = [_metametrics.MetaMetricsEventUiCustomization.FlaggedAsSafetyUnknown];
          }
          if (method === _app.MESSAGE_TYPE.PERSONAL_SIGN) {
            const {
              isSIWEMessage
            } = (0, _controllerUtils.detectSIWE)({
              data
            });
            if (isSIWEMessage) {
              eventProperties.ui_customizations = (eventProperties.ui_customizations || []).concat(_metametrics.MetaMetricsEventUiCustomization.Siwe);
            }
          }
        } catch (e) {
          console.warn(`createRPCMethodTrackingMiddleware: Error calling securityProviderRequest - ${e}`);
        }
      } else {
        eventProperties.method = method;
      }
      trackEvent({
        event,
        category: _metametrics.MetaMetricsEventCategory.InpageProvider,
        referrer: {
          url: origin
        },
        properties: eventProperties
      });
      rateLimitTimeouts[method] = setTimeout(() => {
        delete rateLimitTimeouts[method];
      }, _time.SECOND * rateLimitSeconds);
    }
    next(async callback => {
      var _res$error, _res$error2;
      if (shouldTrackEvent === false || typeof eventType === 'undefined') {
        return callback();
      }

      // The rpc error methodNotFound implies that 'eth_sign' is disabled in Advanced Settings
      const isDisabledEthSignAdvancedSetting = method === _app.MESSAGE_TYPE.ETH_SIGN && ((_res$error = res.error) === null || _res$error === void 0 ? void 0 : _res$error.code) === _ethRpcErrors.errorCodes.rpc.methodNotFound;
      const isDisabledRPCMethod = isDisabledEthSignAdvancedSetting;
      let event;
      if (isDisabledRPCMethod) {
        event = eventType.FAILED;
        eventProperties.error = res.error;
      } else if (((_res$error2 = res.error) === null || _res$error2 === void 0 ? void 0 : _res$error2.code) === _ethRpcErrors.errorCodes.provider.userRejectedRequest) {
        event = eventType.REJECTED;
      } else {
        event = eventType.APPROVED;
      }
      trackEvent({
        event,
        category: _metametrics.MetaMetricsEventCategory.InpageProvider,
        referrer: {
          url: origin
        },
        properties: eventProperties
      });
      return callback();
    });
  };
}

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\createRPCMethodTrackingMiddleware.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\createStreamSink.js", {"promise-to-callback":"F:\\metamask-extension\\node_modules\\promise-to-callback\\index.js","readable-stream":"F:\\metamask-extension\\node_modules\\readable-stream\\readable-browser.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5CcreateStreamSink.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStreamSink;
var _readableStream = require("readable-stream");
var _promiseToCallback = _interopRequireDefault(require("promise-to-callback"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class AsyncWritableStream extends _readableStream.Writable {
  constructor(asyncWriteFn, _opts) {
    const opts = {
      objectMode: true,
      ..._opts
    };
    super(opts);
    this._asyncWriteFn = asyncWriteFn;
  }

  // write from incoming stream to state
  _write(chunk, encoding, callback) {
    (0, _promiseToCallback.default)(this._asyncWriteFn(chunk, encoding))(callback);
  }
}
function createStreamSink(asyncWriteFn, _opts) {
  return new AsyncWritableStream(asyncWriteFn, _opts);
}

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\createStreamSink.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\createTabIdMiddleware.js", {}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5CcreateTabIdMiddleware.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTabIdMiddleware;
/**
 * Returns a middleware that appends the DApp TabId to the request
 *
 * @param {{ tabId: number }} opts - The middleware options
 * @returns {Function}
 */
function createTabIdMiddleware(opts) {
  return function tabIdMiddleware( /** @type {any} */req, /** @type {any} */_, /** @type {Function} */next) {
    req.tabId = opts.tabId;
    next();
  };
}

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\createTabIdMiddleware.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\ens-ipfs\\contracts\\registry.js", {}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5Cens-ipfs%5Ccontracts%5Cregistry.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const abi = [{
  constant: true,
  inputs: [{
    name: 'node',
    type: 'bytes32'
  }],
  name: 'resolver',
  outputs: [{
    name: '',
    type: 'address'
  }],
  payable: false,
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: 'node',
    type: 'bytes32'
  }],
  name: 'owner',
  outputs: [{
    name: '',
    type: 'address'
  }],
  payable: false,
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: 'node',
    type: 'bytes32'
  }, {
    name: 'label',
    type: 'bytes32'
  }, {
    name: 'owner',
    type: 'address'
  }],
  name: 'setSubnodeOwner',
  outputs: [],
  payable: false,
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: 'node',
    type: 'bytes32'
  }, {
    name: 'ttl',
    type: 'uint64'
  }],
  name: 'setTTL',
  outputs: [],
  payable: false,
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: 'node',
    type: 'bytes32'
  }],
  name: 'ttl',
  outputs: [{
    name: '',
    type: 'uint64'
  }],
  payable: false,
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: 'node',
    type: 'bytes32'
  }, {
    name: 'resolver',
    type: 'address'
  }],
  name: 'setResolver',
  outputs: [],
  payable: false,
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: 'node',
    type: 'bytes32'
  }, {
    name: 'owner',
    type: 'address'
  }],
  name: 'setOwner',
  outputs: [],
  payable: false,
  type: 'function'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: 'node',
    type: 'bytes32'
  }, {
    indexed: false,
    name: 'owner',
    type: 'address'
  }],
  name: 'Transfer',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: 'node',
    type: 'bytes32'
  }, {
    indexed: true,
    name: 'label',
    type: 'bytes32'
  }, {
    indexed: false,
    name: 'owner',
    type: 'address'
  }],
  name: 'NewOwner',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: 'node',
    type: 'bytes32'
  }, {
    indexed: false,
    name: 'resolver',
    type: 'address'
  }],
  name: 'NewResolver',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: 'node',
    type: 'bytes32'
  }, {
    indexed: false,
    name: 'ttl',
    type: 'uint64'
  }],
  name: 'NewTTL',
  type: 'event'
}];
var _default = abi;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\ens-ipfs\\contracts\\registry.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\ens-ipfs\\contracts\\resolver.js", {}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5Cens-ipfs%5Ccontracts%5Cresolver.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const abi = [{
  constant: false,
  inputs: [{
    name: 'node',
    type: 'bytes32'
  }, {
    name: 'hash',
    type: 'bytes32'
  }],
  name: 'setContent',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: 'node',
    type: 'bytes32'
  }],
  name: 'content',
  outputs: [{
    name: '',
    type: 'bytes32'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: 'interfaceID',
    type: 'bytes4'
  }],
  name: 'supportsInterface',
  outputs: [{
    name: '',
    type: 'bool'
  }],
  payable: false,
  stateMutability: 'pure',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: 'node',
    type: 'bytes32'
  }, {
    name: 'key',
    type: 'string'
  }, {
    name: 'value',
    type: 'string'
  }],
  name: 'setText',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: 'node',
    type: 'bytes32'
  }, {
    name: 'contentTypes',
    type: 'uint256'
  }],
  name: 'ABI',
  outputs: [{
    name: 'contentType',
    type: 'uint256'
  }, {
    name: 'data',
    type: 'bytes'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: 'node',
    type: 'bytes32'
  }, {
    name: 'x',
    type: 'bytes32'
  }, {
    name: 'y',
    type: 'bytes32'
  }],
  name: 'setPubkey',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: 'node',
    type: 'bytes32'
  }, {
    name: 'hash',
    type: 'bytes'
  }],
  name: 'setContenthash',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: 'node',
    type: 'bytes32'
  }],
  name: 'addr',
  outputs: [{
    name: '',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: 'node',
    type: 'bytes32'
  }, {
    name: 'key',
    type: 'string'
  }],
  name: 'text',
  outputs: [{
    name: '',
    type: 'string'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: 'node',
    type: 'bytes32'
  }, {
    name: 'contentType',
    type: 'uint256'
  }, {
    name: 'data',
    type: 'bytes'
  }],
  name: 'setABI',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: 'node',
    type: 'bytes32'
  }],
  name: 'name',
  outputs: [{
    name: '',
    type: 'string'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: 'node',
    type: 'bytes32'
  }, {
    name: 'name',
    type: 'string'
  }],
  name: 'setName',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: 'node',
    type: 'bytes32'
  }],
  name: 'contenthash',
  outputs: [{
    name: '',
    type: 'bytes'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: 'node',
    type: 'bytes32'
  }],
  name: 'pubkey',
  outputs: [{
    name: 'x',
    type: 'bytes32'
  }, {
    name: 'y',
    type: 'bytes32'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: 'node',
    type: 'bytes32'
  }, {
    name: 'addr',
    type: 'address'
  }],
  name: 'setAddr',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    name: 'ensAddr',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'constructor'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: 'node',
    type: 'bytes32'
  }, {
    indexed: false,
    name: 'a',
    type: 'address'
  }],
  name: 'AddrChanged',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: 'node',
    type: 'bytes32'
  }, {
    indexed: false,
    name: 'name',
    type: 'string'
  }],
  name: 'NameChanged',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: 'node',
    type: 'bytes32'
  }, {
    indexed: true,
    name: 'contentType',
    type: 'uint256'
  }],
  name: 'ABIChanged',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: 'node',
    type: 'bytes32'
  }, {
    indexed: false,
    name: 'x',
    type: 'bytes32'
  }, {
    indexed: false,
    name: 'y',
    type: 'bytes32'
  }],
  name: 'PubkeyChanged',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: 'node',
    type: 'bytes32'
  }, {
    indexed: false,
    name: 'indexedKey',
    type: 'string'
  }, {
    indexed: false,
    name: 'key',
    type: 'string'
  }],
  name: 'TextChanged',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: 'node',
    type: 'bytes32'
  }, {
    indexed: false,
    name: 'hash',
    type: 'bytes'
  }],
  name: 'ContenthashChanged',
  type: 'event'
}];
var _default = abi;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\ens-ipfs\\contracts\\resolver.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\ens-ipfs\\resolver.js", {"./contracts/registry":"F:\\metamask-extension\\app\\scripts\\lib\\ens-ipfs\\contracts\\registry.js","./contracts/resolver":"F:\\metamask-extension\\app\\scripts\\lib\\ens-ipfs\\contracts\\resolver.js","@ensdomains/content-hash":"F:\\metamask-extension\\node_modules\\@ensdomains\\content-hash\\src\\index.js","eth-ens-namehash":"F:\\metamask-extension\\node_modules\\eth-ens-namehash\\index.js","ethjs-contract":"F:\\metamask-extension\\node_modules\\ethjs-contract\\lib\\index.js","ethjs-query":"F:\\metamask-extension\\node_modules\\ethjs-query\\lib\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5Cens-ipfs%5Cresolver.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = resolveEnsToIpfsContentId;
var _ethEnsNamehash = _interopRequireDefault(require("eth-ens-namehash"));
var _ethjsQuery = _interopRequireDefault(require("ethjs-query"));
var _ethjsContract = _interopRequireDefault(require("ethjs-contract"));
var _contentHash = _interopRequireDefault(require("@ensdomains/content-hash"));
var _registry = _interopRequireDefault(require("./contracts/registry"));
var _resolver = _interopRequireDefault(require("./contracts/resolver"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function resolveEnsToIpfsContentId({
  provider,
  name
}) {
  const eth = new _ethjsQuery.default(provider);
  const hash = _ethEnsNamehash.default.hash(name);
  const contract = new _ethjsContract.default(eth);
  // lookup registry
  const chainId = Number.parseInt(await eth.net_version(), 10);
  const registryAddress = getRegistryForChainId(chainId);
  if (!registryAddress) {
    throw new Error(`EnsIpfsResolver - no known ens-ipfs registry for chainId "${chainId}"`);
  }
  const Registry = contract(_registry.default).at(registryAddress);
  // lookup resolver
  const resolverLookupResult = await Registry.resolver(hash);
  const resolverAddress = resolverLookupResult[0];
  if (hexValueIsEmpty(resolverAddress)) {
    throw new Error(`EnsIpfsResolver - no resolver found for name "${name}"`);
  }
  const Resolver = contract(_resolver.default).at(resolverAddress);
  const isEIP1577Compliant = await Resolver.supportsInterface('0xbc1c58d1');
  const isLegacyResolver = await Resolver.supportsInterface('0xd8389dc5');
  if (isEIP1577Compliant[0]) {
    const contentLookupResult = await Resolver.contenthash(hash);
    const rawContentHash = contentLookupResult[0];
    let decodedContentHash = _contentHash.default.decode(rawContentHash);
    const type = _contentHash.default.getCodec(rawContentHash);
    if (type === 'ipfs-ns' || type === 'ipns-ns') {
      decodedContentHash = _contentHash.default.helpers.cidV0ToV1Base32(decodedContentHash);
    }
    return {
      type,
      hash: decodedContentHash
    };
  }
  if (isLegacyResolver[0]) {
    // lookup content id
    const contentLookupResult = await Resolver.content(hash);
    const content = contentLookupResult[0];
    if (hexValueIsEmpty(content)) {
      throw new Error(`EnsIpfsResolver - no content ID found for name "${name}"`);
    }
    return {
      type: 'swarm-ns',
      hash: content.slice(2)
    };
  }
  throw new Error(`EnsIpfsResolver - the resolver for name "${name}" is not standard, it should either supports contenthash() or content()`);
}
function hexValueIsEmpty(value) {
  return [undefined, null, '0x', '0x0', '0x0000000000000000000000000000000000000000000000000000000000000000'].includes(value);
}

/**
 * Returns the registry address for the given chain ID
 *
 * @param {number} chainId - the chain ID
 * @returns {string|null} the registry address if known, null otherwise
 */
function getRegistryForChainId(chainId) {
  switch (chainId) {
    case 1:
    case 3:
    case 4:
    case 5:
    case 6:
      // Mainnet and Goerli, respectively, use the same address
      return '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e';
    default:
      return null;
  }
}


      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\ens-ipfs\\resolver.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\ens-ipfs\\setup.js", {"../../../../shared/modules/fetch-with-timeout":"F:\\metamask-extension\\shared\\modules\\fetch-with-timeout.ts","./resolver":"F:\\metamask-extension\\app\\scripts\\lib\\ens-ipfs\\resolver.js","base32-encode":"F:\\metamask-extension\\node_modules\\base32-encode\\index.js","base64-js":"F:\\metamask-extension\\node_modules\\base64-js\\index.js","webextension-polyfill":"F:\\metamask-extension\\node_modules\\webextension-polyfill\\dist\\browser-polyfill.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5Cens-ipfs%5Csetup.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setupEnsIpfsResolver;
var _base32Encode = _interopRequireDefault(require("base32-encode"));
var _base64Js = _interopRequireDefault(require("base64-js"));
var _webextensionPolyfill = _interopRequireDefault(require("webextension-polyfill"));
var _fetchWithTimeout = _interopRequireDefault(require("../../../../shared/modules/fetch-with-timeout"));
var _resolver = _interopRequireDefault(require("./resolver"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const fetchWithTimeout = (0, _fetchWithTimeout.default)();
const supportedTopLevelDomains = ['eth'];
function setupEnsIpfsResolver({
  provider,
  getCurrentChainId,
  getIpfsGateway
}) {
  // install listener
  const urlPatterns = supportedTopLevelDomains.map(tld => `*://*.${tld}/*`);
  _webextensionPolyfill.default.webRequest.onErrorOccurred.addListener(webRequestDidFail, {
    urls: urlPatterns,
    types: ['main_frame']
  });

  // return api object
  return {
    // uninstall listener
    remove() {
      _webextensionPolyfill.default.webRequest.onErrorOccurred.removeListener(webRequestDidFail);
    }
  };
  async function webRequestDidFail(details) {
    const {
      tabId,
      url
    } = details;
    // ignore requests that are not associated with tabs
    // only attempt ENS resolution on mainnet
    if (tabId === -1 || getCurrentChainId() !== '0x1') {
      return;
    }
    // parse ens name
    const {
      hostname: name,
      pathname,
      search,
      hash: fragment
    } = new URL(url);
    const domainParts = name.split('.');
    const topLevelDomain = domainParts[domainParts.length - 1];
    // if unsupported TLD, abort
    if (!supportedTopLevelDomains.includes(topLevelDomain)) {
      return;
    }
    // otherwise attempt resolve
    attemptResolve({
      tabId,
      name,
      pathname,
      search,
      fragment
    });
  }
  async function attemptResolve({
    tabId,
    name,
    pathname,
    search,
    fragment
  }) {
    const ipfsGateway = getIpfsGateway();
    _webextensionPolyfill.default.tabs.update(tabId, {
      url: `loading.html`
    });
    let url = `https://app.ens.domains/name/${name}`;
    try {
      const {
        type,
        hash
      } = await (0, _resolver.default)({
        provider,
        name
      });
      if (type === 'ipfs-ns' || type === 'ipns-ns') {
        const resolvedUrl = `https://${hash}.${type.slice(0, 4)}.${ipfsGateway}${pathname}${search || ''}${fragment || ''}`;
        try {
          // check if ipfs gateway has result
          const response = await fetchWithTimeout(resolvedUrl, {
            method: 'HEAD'
          });
          if (response.status === 200) {
            url = resolvedUrl;
          }
        } catch (err) {
          console.warn(err);
        }
      } else if (type === 'swarm-ns') {
        url = `https://swarm-gateways.net/bzz:/${hash}${pathname}${search || ''}${fragment || ''}`;
      } else if (type === 'onion' || type === 'onion3') {
        url = `http://${hash}.onion${pathname}${search || ''}${fragment || ''}`;
      } else if (type === 'zeronet') {
        url = `http://127.0.0.1:43110/${hash}${pathname}${search || ''}${fragment || ''}`;
      } else if (type === 'skynet-ns') {
        const padded = hash.padEnd(hash.length + 4 - hash.length % 4, '=');
        const decoded = _base64Js.default.toByteArray(padded);
        const options = {
          padding: false
        };
        const base32EncodedSkylink = (0, _base32Encode.default)(decoded, 'RFC4648-HEX', options).toLowerCase();
        url = `https://${base32EncodedSkylink}.siasky.net${pathname}${search || ''}${fragment || ''}`;
      }
    } catch (err) {
      console.warn(err);
    } finally {
      _webextensionPolyfill.default.tabs.update(tabId, {
        url
      });
    }
  }
}


      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\ens-ipfs\\setup.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\getObjStructure.js", {"lodash":"F:\\metamask-extension\\node_modules\\lodash\\lodash.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5CgetObjStructure.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getObjStructure;
var _lodash = require("lodash");
// This will create an object that represents the structure of the given object
// it replaces all values with the result of their type

// {
//   "data": {
//     "CurrencyController": {
//       "conversionDate": "number",
//       "conversionRate": "number",
//       "currentCurrency": "string"
//     }
// }
/**
 * Creates an object that represents the structure of the given object. It replaces all values with the result of their
 * type.
 *
 * @param {object} obj - The object for which a 'structure' will be returned. Usually a plain object and not a class.
 * @returns {object} The "mapped" version of a deep clone of the passed object, with each non-object property value
 * replaced with the javascript type of that value.
 */
function getObjStructure(obj) {
  const structure = (0, _lodash.cloneDeep)(obj);
  return deepMap(structure, value => {
    return value === null ? 'null' : typeof value;
  });
}

/**
 * Modifies all the properties and deeply nested of a passed object. Iterates recursively over all nested objects and
 * their properties, and covers the entire depth of the object. At each property value which is not an object is modified.
 *
 * @param {object} target - The object to modify
 * @param {Function} visit - The modifier to apply to each non-object property value
 * @returns {object} The modified object
 */
function deepMap(target = {}, visit) {
  Object.entries(target).forEach(([key, value]) => {
    if (typeof value === 'object' && value !== null) {
      target[key] = deepMap(value, visit);
    } else {
      target[key] = visit(value);
    }
  });
  return target;
}

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\getObjStructure.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\local-store.js", {"../../../shared/modules/browser-runtime.utils":"F:\\metamask-extension\\shared\\modules\\browser-runtime.utils.js","@sentry/browser":"F:\\metamask-extension\\node_modules\\@sentry\\browser\\cjs\\index.js","loglevel":"F:\\metamask-extension\\node_modules\\loglevel\\lib\\loglevel.js","webextension-polyfill":"F:\\metamask-extension\\node_modules\\webextension-polyfill\\dist\\browser-polyfill.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5Clocal-store.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _webextensionPolyfill = _interopRequireDefault(require("webextension-polyfill"));
var _loglevel = _interopRequireDefault(require("loglevel"));
var _browser = require("@sentry/browser");
var _browserRuntime = require("../../../shared/modules/browser-runtime.utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * A wrapper around the extension's storage local API
 */
class ExtensionStore {
  constructor() {
    this.isSupported = Boolean(_webextensionPolyfill.default.storage.local);
    if (!this.isSupported) {
      _loglevel.default.error('Storage local API not available.');
    }
    // we use this flag to avoid flooding sentry with a ton of errors:
    // once data persistence fails once and it flips true we don't send further
    // data persistence errors to sentry
    this.dataPersistenceFailing = false;
  }
  setMetadata(initMetaData) {
    this.metadata = initMetaData;
  }
  async set(state) {
    if (!this.isSupported) {
      throw new Error('Metamask- cannot persist state to local store as this browser does not support this action');
    }
    if (!state) {
      throw new Error('MetaMask - updated state is missing');
    }
    if (!this.metadata) {
      throw new Error('MetaMask - metadata must be set on instance of ExtensionStore before calling "set"');
    }
    try {
      // we format the data for storage as an object with the "data" key for the controller state object
      // and the "meta" key for a metadata object containing a version number that tracks how the data shape
      // has changed using migrations to adapt to backwards incompatible changes
      await this._set({
        data: state,
        meta: this.metadata
      });
      if (this.dataPersistenceFailing) {
        this.dataPersistenceFailing = false;
      }
    } catch (err) {
      if (!this.dataPersistenceFailing) {
        this.dataPersistenceFailing = true;
        (0, _browser.captureException)(err);
      }
      _loglevel.default.error('error setting state in local store:', err);
    }
  }

  /**
   * Returns all of the keys currently saved
   *
   * @returns {Promise<*>}
   */
  async get() {
    if (!this.isSupported) {
      return undefined;
    }
    const result = await this._get();
    // extension.storage.local always returns an obj
    // if the object is empty, treat it as undefined
    if (isEmpty(result)) {
      return undefined;
    }
    return result;
  }

  /**
   * Returns all of the keys currently saved
   *
   * @private
   * @returns {object} the key-value map from local storage
   */
  _get() {
    const {
      local
    } = _webextensionPolyfill.default.storage;
    return new Promise((resolve, reject) => {
      local.get(null).then(( /** @type {any} */result) => {
        const err = (0, _browserRuntime.checkForLastError)();
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  /**
   * Sets the key in local state
   *
   * @param {object} obj - The key to set
   * @returns {Promise<void>}
   * @private
   */
  _set(obj) {
    const {
      local
    } = _webextensionPolyfill.default.storage;
    return new Promise((resolve, reject) => {
      local.set(obj).then(() => {
        const err = (0, _browserRuntime.checkForLastError)();
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}

/**
 * Returns whether or not the given object contains no keys
 *
 * @param {object} obj - The object to check
 * @returns {boolean}
 */
exports.default = ExtensionStore;
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\local-store.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\middleware\\pending.js", {"../util":"F:\\metamask-extension\\app\\scripts\\lib\\util.ts","json-rpc-engine":"F:\\metamask-extension\\node_modules\\json-rpc-engine\\dist\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5Cmiddleware%5Cpending.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPendingNonceMiddleware = createPendingNonceMiddleware;
exports.createPendingTxMiddleware = createPendingTxMiddleware;
var _jsonRpcEngine = require("json-rpc-engine");
var _util = require("../util");
function createPendingNonceMiddleware({
  getPendingNonce
}) {
  return (0, _jsonRpcEngine.createAsyncMiddleware)(async (req, res, next) => {
    const {
      method,
      params
    } = req;
    if (method !== 'eth_getTransactionCount') {
      next();
      return;
    }
    const [param, blockRef] = params;
    if (blockRef !== 'pending') {
      next();
      return;
    }
    res.result = await getPendingNonce(param);
  });
}
function createPendingTxMiddleware({
  getPendingTransactionByHash
}) {
  return (0, _jsonRpcEngine.createAsyncMiddleware)(async (req, res, next) => {
    const {
      method,
      params
    } = req;
    if (method !== 'eth_getTransactionByHash') {
      next();
      return;
    }
    const [hash] = params;
    const txMeta = getPendingTransactionByHash(hash);
    if (!txMeta) {
      next();
      return;
    }
    res.result = (0, _util.formatTxMetaForRpcResult)(txMeta);
  });
}

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\middleware\\pending.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\migrator\\index.js", {"events":"F:\\metamask-extension\\node_modules\\browserify\\node_modules\\events\\events.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5Cmigrator%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _events = _interopRequireDefault(require("events"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @typedef {object} Migration
 * @property {number} version - The migration version
 * @property {Function} migrate - Returns a promise of the migrated data
 */
/**
 * @typedef {object} MigratorOptions
 * @property {Array<Migration>} [migrations] - The list of migrations to apply
 * @property {number} [defaultVersion] - The version to use in the initial state
 */
class Migrator extends _events.default {
  /**
   * @param {MigratorOptions} opts
   */
  constructor(opts = {}) {
    super();
    const migrations = opts.migrations || [];
    // sort migrations by version
    this.migrations = migrations.sort((a, b) => a.version - b.version);
    // grab migration with highest version
    const lastMigration = this.migrations.slice(-1)[0];
    // use specified defaultVersion or highest migration version
    this.defaultVersion = opts.defaultVersion || lastMigration && lastMigration.version || 0;
  }

  // run all pending migrations on meta in place
  async migrateData(versionedData = this.generateInitialState()) {
    // get all migrations that have not yet been run
    const pendingMigrations = this.migrations.filter(migrationIsPending);

    // perform each migration
    for (const migration of pendingMigrations) {
      try {
        // attempt migration and validate
        const migratedData = await migration.migrate(versionedData);
        if (!migratedData.data) {
          throw new Error('Migrator - migration returned empty data');
        }
        if (migratedData.version !== undefined && migratedData.meta.version !== migration.version) {
          throw new Error('Migrator - Migration did not update version number correctly');
        }
        // accept the migration as good
        // eslint-disable-next-line no-param-reassign
        versionedData = migratedData;
      } catch (err) {
        // rewrite error message to add context without clobbering stack
        const originalErrorMessage = err.message;
        err.message = `MetaMask Migration Error #${migration.version}: ${originalErrorMessage}`;
        // emit error instead of throw so as to not break the run (gracefully fail)
        this.emit('error', err);
        // stop migrating and use state as is
        return versionedData;
      }
    }
    return versionedData;

    /**
     * Returns whether or not the migration is pending
     *
     * A migration is considered "pending" if it has a higher
     * version number than the current version.
     *
     * @param {Migration} migration
     * @returns {boolean}
     */
    function migrationIsPending(migration) {
      return migration.version > versionedData.meta.version;
    }
  }

  /**
   * Returns the initial state for the migrator
   *
   * @param {object} [data] - The data for the initial state
   * @returns {{meta: {version: number}, data: any}}
   */
  generateInitialState(data) {
    return {
      meta: {
        version: this.defaultVersion
      },
      data
    };
  }
}
exports.default = Migrator;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\migrator\\index.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\network-store.js", {"../../../shared/modules/fetch-with-timeout":"F:\\metamask-extension\\shared\\modules\\fetch-with-timeout.ts","loglevel":"F:\\metamask-extension\\node_modules\\loglevel\\lib\\loglevel.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5Cnetwork-store.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _loglevel = _interopRequireDefault(require("loglevel"));
var _fetchWithTimeout = _interopRequireDefault(require("../../../shared/modules/fetch-with-timeout"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const fetchWithTimeout = (0, _fetchWithTimeout.default)();
const FIXTURE_SERVER_HOST = 'localhost';
const FIXTURE_SERVER_PORT = 12345;
const FIXTURE_SERVER_URL = `http://${FIXTURE_SERVER_HOST}:${FIXTURE_SERVER_PORT}/state.json`;

/**
 * A read-only network-based storage wrapper
 */
class ReadOnlyNetworkStore {
  constructor() {
    /**
     * Declares this store as compatible with the current browser
     */
    _defineProperty(this, "isSupported", true);
    this._initialized = false;
    this._initializing = this._init();
    this._state = undefined;
  }
  /**
   * Initializes by loading state from the network
   */
  async _init() {
    try {
      const response = await fetchWithTimeout(FIXTURE_SERVER_URL);
      if (response.ok) {
        this._state = await response.json();
      }
    } catch (error) {
      _loglevel.default.debug(`Error loading network state: '${error.message}'`);
    } finally {
      this._initialized = true;
    }
  }

  /**
   * Returns state
   *
   * @returns {Promise<object>}
   */
  async get() {
    if (!this._initialized) {
      await this._initializing;
    }
    return this._state;
  }

  /**
   * Set metadata/version state
   *
   * @param {object} metadata - The metadata/version data to set
   */
  setMetadata(metadata) {
    this.metadata = metadata;
  }

  /**
   * Set state
   *
   * @param {object} state - The state to set
   */
  async set(state) {
    if (!this.isSupported) {
      throw new Error('Metamask- cannot persist state to local store as this browser does not support this action');
    }
    if (!state) {
      throw new Error('MetaMask - updated state is missing');
    }
    if (!this.metadata) {
      throw new Error('MetaMask - metadata must be set on instance of ExtensionStore before calling "set"');
    }
    if (!this._initialized) {
      await this._initializing;
    }
    this._state = {
      data: state,
      meta: this._metadata
    };
  }
}
exports.default = ReadOnlyNetworkStore;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\network-store.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\notification-manager.js", {"../platforms/extension":"F:\\metamask-extension\\app\\scripts\\platforms\\extension.js","@metamask/safe-event-emitter":"F:\\metamask-extension\\node_modules\\@metamask\\safe-event-emitter\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5Cnotification-manager.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NOTIFICATION_MANAGER_EVENTS = void 0;
var _safeEventEmitter = _interopRequireDefault(require("@metamask/safe-event-emitter"));
var _extension = _interopRequireDefault(require("../platforms/extension"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const NOTIFICATION_HEIGHT = 620;
const NOTIFICATION_WIDTH = 360;
const NOTIFICATION_MANAGER_EVENTS = {
  POPUP_CLOSED: 'onPopupClosed'
};

/**
 * A collection of methods for controlling the showing and hiding of the notification popup.
 */
exports.NOTIFICATION_MANAGER_EVENTS = NOTIFICATION_MANAGER_EVENTS;
class NotificationManager extends _safeEventEmitter.default {
  constructor() {
    super();
    this.platform = new _extension.default();
    this.platform.addOnRemovedListener(this._onWindowClosed.bind(this));
  }

  /**
   * Mark the notification popup as having been automatically closed.
   *
   * This lets us differentiate between the cases where we close the
   * notification popup v.s. when the user closes the popup window directly.
   */
  markAsAutomaticallyClosed() {
    this._popupAutomaticallyClosed = true;
  }

  /**
   * Either brings an existing MetaMask notification window into focus, or creates a new notification window. New
   * notification windows are given a 'popup' type.
   *
   * @param {Function} setCurrentPopupId - setter of current popup id from appStateController
   * @param {number} currentPopupId - id of current opened metamask popup window
   */
  async showPopup(setCurrentPopupId, currentPopupId) {
    this._popupId = currentPopupId;
    this._setCurrentPopupId = setCurrentPopupId;
    const popup = await this._getPopup(currentPopupId);
    // Bring focus to chrome popup
    if (popup) {
      // bring focus to existing chrome popup
      await this.platform.focusWindow(popup.id);
    } else {
      // create new notification popup
      let left = 0;
      let top = 0;
      try {
        const lastFocused = await this.platform.getLastFocusedWindow();
        // Position window in top right corner of lastFocused window.
        top = lastFocused.top;
        left = lastFocused.left + (lastFocused.width - NOTIFICATION_WIDTH);
      } catch (_) {
        // The following properties are more than likely 0, due to being
        // opened from the background chrome process for the extension that
        // has no physical dimensions
        const {
          screenX,
          screenY,
          outerWidth
        } = window;
        top = Math.max(screenY, 0);
        left = Math.max(screenX + (outerWidth - NOTIFICATION_WIDTH), 0);
      }
      const popupWindow = await this.platform.openWindow({
        url: 'notification.html',
        type: 'popup',
        width: NOTIFICATION_WIDTH,
        height: NOTIFICATION_HEIGHT,
        left,
        top
      });

      // Firefox currently ignores left/top for create, but it works for update
      if (popupWindow.left !== left && popupWindow.state !== 'fullscreen') {
        await this.platform.updateWindowPosition(popupWindow.id, left, top);
      }
      // pass new created popup window id to appController setter
      // and store the id to private variable this._popupId for future access
      this._setCurrentPopupId(popupWindow.id);
      this._popupId = popupWindow.id;
    }
  }
  _onWindowClosed(windowId) {
    if (windowId === this._popupId) {
      this._setCurrentPopupId(undefined);
      this._popupId = undefined;
      this.emit(NOTIFICATION_MANAGER_EVENTS.POPUP_CLOSED, {
        automaticallyClosed: this._popupAutomaticallyClosed
      });
      this._popupAutomaticallyClosed = undefined;
    }
  }

  /**
   * Checks all open MetaMask windows, and returns the first one it finds that is a notification window (i.e. has the
   * type 'popup')
   *
   * @private
   */
  async _getPopup() {
    const windows = await this.platform.getAllWindows();
    return this._getPopupIn(windows);
  }

  /**
   * Given an array of windows, returns the 'popup' that has been opened by MetaMask, or null if no such window exists.
   *
   * @private
   * @param {Array} windows - An array of objects containing data about the open MetaMask extension windows.
   */
  _getPopupIn(windows) {
    return windows ? windows.find(win => {
      // Returns notification popup
      return win && win.type === 'popup' && win.id === this._popupId;
    }) : null;
  }
}
exports.default = NotificationManager;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\notification-manager.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\rpc-method-middleware\\createMethodMiddleware.js", {"../../../../shared/constants/network":"F:\\metamask-extension\\shared\\constants\\network.ts","./handlers":"F:\\metamask-extension\\app\\scripts\\lib\\rpc-method-middleware\\handlers\\index.js","@metamask/permission-controller":"F:\\metamask-extension\\node_modules\\@metamask\\permission-controller\\dist\\index.js","@metamask/rpc-methods":"F:\\metamask-extension\\node_modules\\@metamask\\rpc-methods\\dist\\index.js","eth-rpc-errors":"F:\\metamask-extension\\node_modules\\eth-rpc-errors\\dist\\index.js","lodash":"F:\\metamask-extension\\node_modules\\lodash\\lodash.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5Crpc-method-middleware%5CcreateMethodMiddleware.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMethodMiddleware = createMethodMiddleware;
var _permissionController = require("@metamask/permission-controller");
var _rpcMethods = require("@metamask/rpc-methods");
var _ethRpcErrors = require("eth-rpc-errors");
var _lodash = require("lodash");
var _network = require("../../../../shared/constants/network");
var _handlers = _interopRequireDefault(require("./handlers"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const allHandlers = [..._handlers.default, ..._permissionController.permissionRpcMethods.handlers];
const handlerMap = allHandlers.reduce((map, handler) => {
  for (const methodName of handler.methodNames) {
    map.set(methodName, handler);
  }
  return map;
}, new Map());
const expectedHookNames = Array.from(new Set((0, _lodash.flatten)(allHandlers.map(({
  hookNames
}) => Object.keys(hookNames)))).values());

/**
 * Creates a json-rpc-engine middleware of RPC method implementations.
 *
 * Handlers consume functions that hook into the background, and only depend
 * on their signatures, not e.g. controller internals.
 *
 * @param {Record<string, unknown>} hooks - Required "hooks" into our
 * controllers.
 * @returns {(req: object, res: object, next: Function, end: Function) => void}
 */
function createMethodMiddleware(hooks) {
  // Fail immediately if we forgot to provide any expected hooks.
  const missingHookNames = expectedHookNames.filter(hookName => !Object.hasOwnProperty.call(hooks, hookName));
  if (missingHookNames.length > 0) {
    throw new Error(`Missing expected hooks:\n\n${missingHookNames.join('\n')}\n`);
  }
  return async function methodMiddleware(req, res, next, end) {
    // Reject unsupported methods.
    if (_network.UNSUPPORTED_RPC_METHODS.has(req.method)) {
      return end(_ethRpcErrors.ethErrors.rpc.methodNotSupported());
    }
    const handler = handlerMap.get(req.method);
    if (handler) {
      const {
        implementation,
        hookNames
      } = handler;
      try {
        // Implementations may or may not be async, so we must await them.
        return await implementation(req, res, next, end, (0, _rpcMethods.selectHooks)(hooks, hookNames));
      } catch (error) {
        console.error(error);
        return end(error);
      }
    }
    return next();
  };
}

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\rpc-method-middleware\\createMethodMiddleware.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\rpc-method-middleware\\handlers\\add-ethereum-chain.js", {"../../../../../shared/constants/app":"F:\\metamask-extension\\shared\\constants\\app.ts","../../../../../shared/constants/metametrics":"F:\\metamask-extension\\shared\\constants\\metametrics.ts","../../../../../shared/modules/network.utils":"F:\\metamask-extension\\shared\\modules\\network.utils.ts","@metamask/controller-utils":"F:\\metamask-extension\\node_modules\\@metamask\\controller-utils\\dist\\index.js","eth-rpc-errors":"F:\\metamask-extension\\node_modules\\eth-rpc-errors\\dist\\index.js","lodash":"F:\\metamask-extension\\node_modules\\lodash\\lodash.js","valid-url":"F:\\metamask-extension\\node_modules\\valid-url\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5Crpc-method-middleware%5Chandlers%5Cadd-ethereum-chain.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ethRpcErrors = require("eth-rpc-errors");
var _validUrl = _interopRequireDefault(require("valid-url"));
var _lodash = require("lodash");
var _controllerUtils = require("@metamask/controller-utils");
var _app = require("../../../../../shared/constants/app");
var _network = require("../../../../../shared/modules/network.utils");
var _metametrics = require("../../../../../shared/constants/metametrics");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const addEthereumChain = {
  methodNames: [_app.MESSAGE_TYPE.ADD_ETHEREUM_CHAIN],
  implementation: addEthereumChainHandler,
  hookNames: {
    upsertNetworkConfiguration: true,
    getCurrentChainId: true,
    getCurrentRpcUrl: true,
    findNetworkConfigurationBy: true,
    setActiveNetwork: true,
    requestUserApproval: true,
    startApprovalFlow: true,
    endApprovalFlow: true
  }
};
var _default = addEthereumChain;
exports.default = _default;
async function addEthereumChainHandler(req, res, _next, end, {
  upsertNetworkConfiguration,
  getCurrentChainId,
  getCurrentRpcUrl,
  findNetworkConfigurationBy,
  setActiveNetwork,
  requestUserApproval,
  startApprovalFlow,
  endApprovalFlow
}) {
  var _req$params;
  if (!((_req$params = req.params) !== null && _req$params !== void 0 && _req$params[0]) || typeof req.params[0] !== 'object') {
    return end(_ethRpcErrors.ethErrors.rpc.invalidParams({
      message: `Expected single, object parameter. Received:\n${JSON.stringify(req.params)}`
    }));
  }
  const {
    origin
  } = req;
  const {
    chainId,
    chainName = null,
    blockExplorerUrls = null,
    nativeCurrency = null,
    rpcUrls
  } = req.params[0];
  const otherKeys = Object.keys((0, _lodash.omit)(req.params[0], ['chainId', 'chainName', 'blockExplorerUrls', 'iconUrls', 'rpcUrls', 'nativeCurrency']));
  if (otherKeys.length > 0) {
    return end(_ethRpcErrors.ethErrors.rpc.invalidParams({
      message: `Received unexpected keys on object parameter. Unsupported keys:\n${otherKeys}`
    }));
  }
  const isLocalhost = strUrl => {
    try {
      const url = new URL(strUrl);
      return url.hostname === 'localhost' || url.hostname === '127.0.0.1';
    } catch (error) {
      return false;
    }
  };
  const firstValidRPCUrl = Array.isArray(rpcUrls) ? rpcUrls.find(rpcUrl => isLocalhost(rpcUrl) || _validUrl.default.isHttpsUri(rpcUrl)) : null;
  const firstValidBlockExplorerUrl = blockExplorerUrls !== null && Array.isArray(blockExplorerUrls) ? blockExplorerUrls.find(blockExplorerUrl => isLocalhost(blockExplorerUrl) || _validUrl.default.isHttpsUri(blockExplorerUrl)) : null;
  if (!firstValidRPCUrl) {
    return end(_ethRpcErrors.ethErrors.rpc.invalidParams({
      message: `Expected an array with at least one valid string HTTPS url 'rpcUrls', Received:\n${rpcUrls}`
    }));
  }
  if (blockExplorerUrls !== null && !firstValidBlockExplorerUrl) {
    return end(_ethRpcErrors.ethErrors.rpc.invalidParams({
      message: `Expected null or array with at least one valid string HTTPS URL 'blockExplorerUrl'. Received: ${blockExplorerUrls}`
    }));
  }
  const _chainId = typeof chainId === 'string' && chainId.toLowerCase();
  if (!(0, _network.isPrefixedFormattedHexString)(_chainId)) {
    return end(_ethRpcErrors.ethErrors.rpc.invalidParams({
      message: `Expected 0x-prefixed, unpadded, non-zero hexadecimal string 'chainId'. Received:\n${chainId}`
    }));
  }
  if (!(0, _network.isSafeChainId)(parseInt(_chainId, 16))) {
    return end(_ethRpcErrors.ethErrors.rpc.invalidParams({
      message: `Invalid chain ID "${_chainId}": numerical value greater than max safe value. Received:\n${chainId}`
    }));
  }
  const existingNetwork = findNetworkConfigurationBy({
    chainId: _chainId
  });

  // if the request is to add a network that is already added and configured
  // with the same RPC gateway we shouldn't try to add it again.
  if (existingNetwork && existingNetwork.rpcUrl === firstValidRPCUrl) {
    // If the network already exists, the request is considered successful
    res.result = null;
    const currentChainId = getCurrentChainId();
    const currentRpcUrl = getCurrentRpcUrl();

    // If the current chainId and rpcUrl matches that of the incoming request
    // We don't need to proceed further.
    if (currentChainId === _chainId && currentRpcUrl === firstValidRPCUrl) {
      return end();
    }

    // If this network is already added with but is not the currently selected network
    // Ask the user to switch the network
    try {
      await requestUserApproval({
        origin,
        type: _controllerUtils.ApprovalType.SwitchEthereumChain,
        requestData: {
          rpcUrl: existingNetwork.rpcUrl,
          chainId: existingNetwork.chainId,
          nickname: existingNetwork.nickname,
          ticker: existingNetwork.ticker
        }
      });
      await setActiveNetwork(existingNetwork.id);
      res.result = null;
    } catch (error) {
      // For the purposes of this method, it does not matter if the user
      // declines to switch the selected network. However, other errors indicate
      // that something is wrong.
      if (error.code !== _ethRpcErrors.errorCodes.provider.userRejectedRequest) {
        return end(error);
      }
    }
    return end();
  }
  if (typeof chainName !== 'string' || !chainName) {
    return end(_ethRpcErrors.ethErrors.rpc.invalidParams({
      message: `Expected non-empty string 'chainName'. Received:\n${chainName}`
    }));
  }
  const _chainName = chainName.length > 100 ? chainName.substring(0, 100) : chainName;
  if (nativeCurrency !== null) {
    if (typeof nativeCurrency !== 'object' || Array.isArray(nativeCurrency)) {
      return end(_ethRpcErrors.ethErrors.rpc.invalidParams({
        message: `Expected null or object 'nativeCurrency'. Received:\n${nativeCurrency}`
      }));
    }
    if (nativeCurrency.decimals !== 18) {
      return end(_ethRpcErrors.ethErrors.rpc.invalidParams({
        message: `Expected the number 18 for 'nativeCurrency.decimals' when 'nativeCurrency' is provided. Received: ${nativeCurrency.decimals}`
      }));
    }
    if (!nativeCurrency.symbol || typeof nativeCurrency.symbol !== 'string') {
      return end(_ethRpcErrors.ethErrors.rpc.invalidParams({
        message: `Expected a string 'nativeCurrency.symbol'. Received: ${nativeCurrency.symbol}`
      }));
    }
  }
  const ticker = (nativeCurrency === null || nativeCurrency === void 0 ? void 0 : nativeCurrency.symbol) || _app.UNKNOWN_TICKER_SYMBOL;
  if (ticker !== _app.UNKNOWN_TICKER_SYMBOL && (typeof ticker !== 'string' || ticker.length < 2 || ticker.length > 6)) {
    return end(_ethRpcErrors.ethErrors.rpc.invalidParams({
      message: `Expected 2-6 character string 'nativeCurrency.symbol'. Received:\n${ticker}`
    }));
  }
  // if the chainId is the same as an existing network but the ticker is different we want to block this action
  // as it is potentially malicious and confusing
  if (existingNetwork && existingNetwork.chainId === _chainId && existingNetwork.ticker !== ticker) {
    return end(_ethRpcErrors.ethErrors.rpc.invalidParams({
      message: `nativeCurrency.symbol does not match currency symbol for a network the user already has added with the same chainId. Received:\n${ticker}`
    }));
  }
  let networkConfigurationId;
  const {
    id: approvalFlowId
  } = await startApprovalFlow();
  try {
    await requestUserApproval({
      origin,
      type: _controllerUtils.ApprovalType.AddEthereumChain,
      requestData: {
        chainId: _chainId,
        rpcPrefs: {
          blockExplorerUrl: firstValidBlockExplorerUrl
        },
        chainName: _chainName,
        rpcUrl: firstValidRPCUrl,
        ticker
      }
    });
    networkConfigurationId = await upsertNetworkConfiguration({
      chainId: _chainId,
      rpcPrefs: {
        blockExplorerUrl: firstValidBlockExplorerUrl
      },
      nickname: _chainName,
      rpcUrl: firstValidRPCUrl,
      ticker
    }, {
      source: _metametrics.MetaMetricsNetworkEventSource.Dapp,
      referrer: origin
    });

    // Once the network has been added, the requested is considered successful
    res.result = null;
  } catch (error) {
    endApprovalFlow({
      id: approvalFlowId
    });
    return end(error);
  }

  // Ask the user to switch the network
  try {
    await requestUserApproval({
      origin,
      type: _controllerUtils.ApprovalType.SwitchEthereumChain,
      requestData: {
        rpcUrl: firstValidRPCUrl,
        chainId: _chainId,
        nickname: _chainName,
        ticker,
        networkConfigurationId
      }
    });
  } catch (error) {
    // For the purposes of this method, it does not matter if the user
    // declines to switch the selected network. However, other errors indicate
    // that something is wrong.
    return end(error.code === _ethRpcErrors.errorCodes.provider.userRejectedRequest ? undefined : error);
  } finally {
    endApprovalFlow({
      id: approvalFlowId
    });
  }
  try {
    await setActiveNetwork(networkConfigurationId);
  } catch (error) {
    return end(error);
  }
  return end();
}


      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\rpc-method-middleware\\handlers\\add-ethereum-chain.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\rpc-method-middleware\\handlers\\eth-accounts.js", {"../../../../../shared/constants/app":"F:\\metamask-extension\\shared\\constants\\app.ts"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5Crpc-method-middleware%5Chandlers%5Ceth-accounts.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _app = require("../../../../../shared/constants/app");
/**
 * A wrapper for `eth_accounts` that returns an empty array when permission is denied.
 */

const requestEthereumAccounts = {
  methodNames: [_app.MESSAGE_TYPE.ETH_ACCOUNTS],
  implementation: ethAccountsHandler,
  hookNames: {
    getAccounts: true
  }
};
var _default = requestEthereumAccounts;
/**
 * @typedef {Record<string, Function>} EthAccountsOptions
 * @property {Function} getAccounts - Gets the accounts for the requesting
 * origin.
 */
/**
 *
 * @param {__import__('json-rpc-engine').JsonRpcRequest<unknown>} _req - The JSON-RPC request object.
 * @param {__import__('json-rpc-engine').JsonRpcResponse<true>} res - The JSON-RPC response object.
 * @param {Function} _next - The json-rpc-engine 'next' callback.
 * @param {Function} end - The json-rpc-engine 'end' callback.
 * @param {EthAccountsOptions} options - The RPC method hooks.
 */
exports.default = _default;
async function ethAccountsHandler(_req, res, _next, end, {
  getAccounts
}) {
  res.result = await getAccounts();
  return end();
}

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\rpc-method-middleware\\handlers\\eth-accounts.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\rpc-method-middleware\\handlers\\get-provider-state.js", {"../../../../../shared/constants/app":"F:\\metamask-extension\\shared\\constants\\app.ts"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5Crpc-method-middleware%5Chandlers%5Cget-provider-state.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _app = require("../../../../../shared/constants/app");
/**
 * This RPC method gets background state relevant to the provider.
 * The background sends RPC notifications on state changes, but the provider
 * first requests state on initialization.
 */

const getProviderState = {
  methodNames: [_app.MESSAGE_TYPE.GET_PROVIDER_STATE],
  implementation: getProviderStateHandler,
  hookNames: {
    getProviderState: true
  }
};
var _default = getProviderState;
/**
 * @typedef {object} ProviderStateHandlerResult
 * @property {string} chainId - The current chain ID.
 * @property {boolean} isUnlocked - Whether the extension is unlocked or not.
 * @property {string} networkVersion - The current network ID.
 */
/**
 * @typedef {object} ProviderStateHandlerOptions
 * @property {() => ProviderStateHandlerResult} getProviderState - A function that
 * gets the current provider state.
 */
/**
 * @param {__import__('json-rpc-engine').JsonRpcRequest<[]>} req - The JSON-RPC request object.
 * @param {__import__('json-rpc-engine').JsonRpcResponse<ProviderStateHandlerResult>} res - The JSON-RPC response object.
 * @param {Function} _next - The json-rpc-engine 'next' callback.
 * @param {Function} end - The json-rpc-engine 'end' callback.
 * @param {ProviderStateHandlerOptions} options
 */
exports.default = _default;
async function getProviderStateHandler(req, res, _next, end, {
  getProviderState: _getProviderState
}) {
  res.result = {
    ...(await _getProviderState(req.origin))
  };
  return end();
}

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\rpc-method-middleware\\handlers\\get-provider-state.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\rpc-method-middleware\\handlers\\index.js", {"./add-ethereum-chain":"F:\\metamask-extension\\app\\scripts\\lib\\rpc-method-middleware\\handlers\\add-ethereum-chain.js","./eth-accounts":"F:\\metamask-extension\\app\\scripts\\lib\\rpc-method-middleware\\handlers\\eth-accounts.js","./get-provider-state":"F:\\metamask-extension\\app\\scripts\\lib\\rpc-method-middleware\\handlers\\get-provider-state.js","./log-web3-shim-usage":"F:\\metamask-extension\\app\\scripts\\lib\\rpc-method-middleware\\handlers\\log-web3-shim-usage.js","./request-accounts":"F:\\metamask-extension\\app\\scripts\\lib\\rpc-method-middleware\\handlers\\request-accounts.js","./send-metadata":"F:\\metamask-extension\\app\\scripts\\lib\\rpc-method-middleware\\handlers\\send-metadata.js","./switch-ethereum-chain":"F:\\metamask-extension\\app\\scripts\\lib\\rpc-method-middleware\\handlers\\switch-ethereum-chain.js","./watch-asset":"F:\\metamask-extension\\app\\scripts\\lib\\rpc-method-middleware\\handlers\\watch-asset.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5Crpc-method-middleware%5Chandlers%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _addEthereumChain = _interopRequireDefault(require("./add-ethereum-chain"));
var _ethAccounts = _interopRequireDefault(require("./eth-accounts"));
var _getProviderState = _interopRequireDefault(require("./get-provider-state"));
var _logWeb3ShimUsage = _interopRequireDefault(require("./log-web3-shim-usage"));
var _requestAccounts = _interopRequireDefault(require("./request-accounts"));
var _sendMetadata = _interopRequireDefault(require("./send-metadata"));
var _switchEthereumChain = _interopRequireDefault(require("./switch-ethereum-chain"));
var _watchAsset = _interopRequireDefault(require("./watch-asset"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const handlers = [_addEthereumChain.default, _ethAccounts.default, _getProviderState.default, _logWeb3ShimUsage.default, _requestAccounts.default, _sendMetadata.default, _switchEthereumChain.default, _watchAsset.default];
var _default = handlers;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\rpc-method-middleware\\handlers\\index.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\rpc-method-middleware\\handlers\\log-web3-shim-usage.js", {"../../../../../shared/constants/app":"F:\\metamask-extension\\shared\\constants\\app.ts","../../../../../shared/constants/metametrics":"F:\\metamask-extension\\shared\\constants\\metametrics.ts"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5Crpc-method-middleware%5Chandlers%5Clog-web3-shim-usage.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _app = require("../../../../../shared/constants/app");
var _metametrics = require("../../../../../shared/constants/metametrics");
/**
 * This RPC method is called by the inpage provider whenever it detects the
 * accessing of a non-existent property on our window.web3 shim.
 * We collect this data to understand which sites are breaking due to the
 * removal of our window.web3.
 */

const logWeb3ShimUsage = {
  methodNames: [_app.MESSAGE_TYPE.LOG_WEB3_SHIM_USAGE],
  implementation: logWeb3ShimUsageHandler,
  hookNames: {
    sendMetrics: true,
    getWeb3ShimUsageState: true,
    setWeb3ShimUsageRecorded: true
  }
};
var _default = logWeb3ShimUsage;
/**
 * @typedef {object} LogWeb3ShimUsageOptions
 * @property {Function} sendMetrics - A function that registers a metrics event.
 * @property {Function} getWeb3ShimUsageState - A function that gets web3 shim
 * usage state for the given origin.
 * @property {Function} setWeb3ShimUsageRecorded - A function that records web3 shim
 * usage for a particular origin.
 */
/**
 * @param {__import__('json-rpc-engine').JsonRpcRequest<unknown>} req - The JSON-RPC request object.
 * @param {__import__('json-rpc-engine').JsonRpcResponse<true>} res - The JSON-RPC response object.
 * @param {Function} _next - The json-rpc-engine 'next' callback.
 * @param {Function} end - The json-rpc-engine 'end' callback.
 * @param {LogWeb3ShimUsageOptions} options
 */
exports.default = _default;
function logWeb3ShimUsageHandler(req, res, _next, end, {
  sendMetrics,
  getWeb3ShimUsageState,
  setWeb3ShimUsageRecorded
}) {
  const {
    origin
  } = req;
  if (getWeb3ShimUsageState(origin) === undefined) {
    setWeb3ShimUsageRecorded(origin);
    sendMetrics({
      event: `Website Accessed window.web3 Shim`,
      category: _metametrics.MetaMetricsEventCategory.InpageProvider,
      referrer: {
        url: origin
      }
    }, {
      excludeMetaMetricsId: true
    });
  }
  res.result = true;
  return end();
}

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\rpc-method-middleware\\handlers\\log-web3-shim-usage.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\rpc-method-middleware\\handlers\\request-accounts.js", {"../../../../../shared/constants/app":"F:\\metamask-extension\\shared\\constants\\app.ts","eth-rpc-errors":"F:\\metamask-extension\\node_modules\\eth-rpc-errors\\dist\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5Crpc-method-middleware%5Chandlers%5Crequest-accounts.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ethRpcErrors = require("eth-rpc-errors");
var _app = require("../../../../../shared/constants/app");
/**
 * This method attempts to retrieve the Ethereum accounts available to the
 * requester, or initiate a request for account access if none are currently
 * available. It is essentially a wrapper of wallet_requestPermissions that
 * only errors if the user rejects the request. We maintain the method for
 * backwards compatibility reasons.
 */

const requestEthereumAccounts = {
  methodNames: [_app.MESSAGE_TYPE.ETH_REQUEST_ACCOUNTS],
  implementation: requestEthereumAccountsHandler,
  hookNames: {
    origin: true,
    getAccounts: true,
    getUnlockPromise: true,
    hasPermission: true,
    requestAccountsPermission: true
  }
};
var _default = requestEthereumAccounts; // Used to rate-limit pending requests to one per origin
exports.default = _default;
const locks = new Set();

/**
 * @typedef {Record<string, string | Function>} RequestEthereumAccountsOptions
 * @property {string} origin - The requesting origin.
 * @property {Function} getAccounts - Gets the accounts for the requesting
 * origin.
 * @property {Function} getUnlockPromise - Gets a promise that resolves when
 * the extension unlocks.
 * @property {Function} hasPermission - Returns whether the requesting origin
 * has the specified permission.
 * @property {Function} requestAccountsPermission - Requests the `eth_accounts`
 * permission for the requesting origin.
 */

/**
 *
 * @param {__import__('json-rpc-engine').JsonRpcRequest<unknown>} _req - The JSON-RPC request object.
 * @param {__import__('json-rpc-engine').JsonRpcResponse<true>} res - The JSON-RPC response object.
 * @param {Function} _next - The json-rpc-engine 'next' callback.
 * @param {Function} end - The json-rpc-engine 'end' callback.
 * @param {RequestEthereumAccountsOptions} options - The RPC method hooks.
 */
async function requestEthereumAccountsHandler(_req, res, _next, end, {
  origin,
  getAccounts,
  getUnlockPromise,
  hasPermission,
  requestAccountsPermission
}) {
  if (locks.has(origin)) {
    res.error = _ethRpcErrors.ethErrors.rpc.resourceUnavailable(`Already processing ${_app.MESSAGE_TYPE.ETH_REQUEST_ACCOUNTS}. Please wait.`);
    return end();
  }
  if (hasPermission(_app.MESSAGE_TYPE.ETH_ACCOUNTS)) {
    // We wait for the extension to unlock in this case only, because permission
    // requests are handled when the extension is unlocked, regardless of the
    // lock state when they were received.
    try {
      locks.add(origin);
      await getUnlockPromise(true);
      res.result = await getAccounts();
      end();
    } catch (error) {
      end(error);
    } finally {
      locks.delete(origin);
    }
    return undefined;
  }

  // If no accounts, request the accounts permission
  try {
    await requestAccountsPermission();
  } catch (err) {
    res.error = err;
    return end();
  }

  // Get the approved accounts
  const accounts = await getAccounts();
  /* istanbul ignore else: too hard to induce, see below comment */
  if (accounts.length > 0) {
    res.result = accounts;
  } else {
    // This should never happen, because it should be caught in the
    // above catch clause
    res.error = _ethRpcErrors.ethErrors.rpc.internal('Accounts unexpectedly unavailable. Please report this bug.');
  }
  return end();
}

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\rpc-method-middleware\\handlers\\request-accounts.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\rpc-method-middleware\\handlers\\send-metadata.js", {"../../../../../shared/constants/app":"F:\\metamask-extension\\shared\\constants\\app.ts","eth-rpc-errors":"F:\\metamask-extension\\node_modules\\eth-rpc-errors\\dist\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5Crpc-method-middleware%5Chandlers%5Csend-metadata.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ethRpcErrors = require("eth-rpc-errors");
var _app = require("../../../../../shared/constants/app");
/**
 * This internal method is used by our external provider to send metadata about
 * permission subjects so that we can e.g. display a proper name and icon in
 * our UI.
 */

const sendMetadata = {
  methodNames: [_app.MESSAGE_TYPE.SEND_METADATA],
  implementation: sendMetadataHandler,
  hookNames: {
    addSubjectMetadata: true,
    subjectType: true
  }
};
var _default = sendMetadata;
/**
 * @typedef {Record<string, Function>} SendMetadataOptions
 * @property {Function} addSubjectMetadata - A function that records subject
 * metadata, bound to the requesting origin.
 * @property {string} subjectType - The type of the requesting origin / subject.
 */
/**
 * @param {__import__('json-rpc-engine').JsonRpcRequest<unknown>} req - The JSON-RPC request object.
 * @param {__import__('json-rpc-engine').JsonRpcResponse<true>} res - The JSON-RPC response object.
 * @param {Function} _next - The json-rpc-engine 'next' callback.
 * @param {Function} end - The json-rpc-engine 'end' callback.
 * @param {SendMetadataOptions} options
 */
exports.default = _default;
function sendMetadataHandler(req, res, _next, end, {
  addSubjectMetadata,
  subjectType
}) {
  const {
    origin,
    params
  } = req;
  if (params && typeof params === 'object' && !Array.isArray(params)) {
    const {
      icon = null,
      name = null,
      ...remainingParams
    } = params;
    addSubjectMetadata({
      ...remainingParams,
      iconUrl: icon,
      name,
      subjectType,
      origin
    });
  } else {
    return end(_ethRpcErrors.ethErrors.rpc.invalidParams({
      data: params
    }));
  }
  res.result = true;
  return end();
}

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\rpc-method-middleware\\handlers\\send-metadata.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\rpc-method-middleware\\handlers\\switch-ethereum-chain.js", {"../../../../../shared/constants/app":"F:\\metamask-extension\\shared\\constants\\app.ts","../../../../../shared/constants/network":"F:\\metamask-extension\\shared\\constants\\network.ts","../../../../../shared/modules/network.utils":"F:\\metamask-extension\\shared\\modules\\network.utils.ts","@metamask/controller-utils":"F:\\metamask-extension\\node_modules\\@metamask\\controller-utils\\dist\\index.js","eth-rpc-errors":"F:\\metamask-extension\\node_modules\\eth-rpc-errors\\dist\\index.js","lodash":"F:\\metamask-extension\\node_modules\\lodash\\lodash.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5Crpc-method-middleware%5Chandlers%5Cswitch-ethereum-chain.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ethRpcErrors = require("eth-rpc-errors");
var _lodash = require("lodash");
var _controllerUtils = require("@metamask/controller-utils");
var _app = require("../../../../../shared/constants/app");
var _network = require("../../../../../shared/constants/network");
var _network2 = require("../../../../../shared/modules/network.utils");
const switchEthereumChain = {
  methodNames: [_app.MESSAGE_TYPE.SWITCH_ETHEREUM_CHAIN],
  implementation: switchEthereumChainHandler,
  hookNames: {
    getCurrentChainId: true,
    findNetworkConfigurationBy: true,
    setProviderType: true,
    setActiveNetwork: true,
    requestUserApproval: true
  }
};
var _default = switchEthereumChain;
exports.default = _default;
function findExistingNetwork(chainId, findNetworkConfigurationBy) {
  if (Object.values(_network.BUILT_IN_INFURA_NETWORKS).map(({
    chainId: id
  }) => id).includes(chainId)) {
    return {
      chainId,
      ticker: _network.CURRENCY_SYMBOLS.ETH,
      nickname: _network.NETWORK_TO_NAME_MAP[chainId],
      rpcUrl: _network.CHAIN_ID_TO_RPC_URL_MAP[chainId],
      type: _network.CHAIN_ID_TO_TYPE_MAP[chainId]
    };
  }
  return findNetworkConfigurationBy({
    chainId
  });
}
async function switchEthereumChainHandler(req, res, _next, end, {
  getCurrentChainId,
  findNetworkConfigurationBy,
  setProviderType,
  setActiveNetwork,
  requestUserApproval
}) {
  var _req$params;
  if (!((_req$params = req.params) !== null && _req$params !== void 0 && _req$params[0]) || typeof req.params[0] !== 'object') {
    return end(_ethRpcErrors.ethErrors.rpc.invalidParams({
      message: `Expected single, object parameter. Received:\n${JSON.stringify(req.params)}`
    }));
  }
  const {
    origin
  } = req;
  const {
    chainId
  } = req.params[0];
  const otherKeys = Object.keys((0, _lodash.omit)(req.params[0], ['chainId']));
  if (otherKeys.length > 0) {
    return end(_ethRpcErrors.ethErrors.rpc.invalidParams({
      message: `Received unexpected keys on object parameter. Unsupported keys:\n${otherKeys}`
    }));
  }
  const _chainId = typeof chainId === 'string' && chainId.toLowerCase();
  if (!(0, _network2.isPrefixedFormattedHexString)(_chainId)) {
    return end(_ethRpcErrors.ethErrors.rpc.invalidParams({
      message: `Expected 0x-prefixed, unpadded, non-zero hexadecimal string 'chainId'. Received:\n${chainId}`
    }));
  }
  if (!(0, _network2.isSafeChainId)(parseInt(_chainId, 16))) {
    return end(_ethRpcErrors.ethErrors.rpc.invalidParams({
      message: `Invalid chain ID "${_chainId}": numerical value greater than max safe value. Received:\n${chainId}`
    }));
  }
  const requestData = findExistingNetwork(_chainId, findNetworkConfigurationBy);
  if (requestData) {
    const currentChainId = getCurrentChainId();
    if (currentChainId === _chainId) {
      res.result = null;
      return end();
    }
    try {
      const approvedRequestData = await requestUserApproval({
        origin,
        type: _controllerUtils.ApprovalType.SwitchEthereumChain,
        requestData
      });
      if (Object.values(_network.BUILT_IN_INFURA_NETWORKS).map(({
        chainId: id
      }) => id).includes(chainId)) {
        await setProviderType(approvedRequestData.type);
      } else {
        await setActiveNetwork(approvedRequestData.id);
      }
      res.result = null;
    } catch (error) {
      return end(error);
    }
    return end();
  }
  return end(_ethRpcErrors.ethErrors.provider.custom({
    code: 4902,
    // To-be-standardized "unrecognized chain ID" error
    message: `Unrecognized chain ID "${chainId}". Try adding the chain using ${_app.MESSAGE_TYPE.ADD_ETHEREUM_CHAIN} first.`
  }));
}

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\rpc-method-middleware\\handlers\\switch-ethereum-chain.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\rpc-method-middleware\\handlers\\watch-asset.js", {"../../../../../shared/constants/app":"F:\\metamask-extension\\shared\\constants\\app.ts","@metamask/controller-utils":"F:\\metamask-extension\\node_modules\\@metamask\\controller-utils\\dist\\index.js","eth-rpc-errors":"F:\\metamask-extension\\node_modules\\eth-rpc-errors\\dist\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5Crpc-method-middleware%5Chandlers%5Cwatch-asset.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _controllerUtils = require("@metamask/controller-utils");
var _ethRpcErrors = require("eth-rpc-errors");
var _app = require("../../../../../shared/constants/app");
const watchAsset = {
  methodNames: [_app.MESSAGE_TYPE.WATCH_ASSET, _app.MESSAGE_TYPE.WATCH_ASSET_LEGACY],
  implementation: watchAssetHandler,
  hookNames: {
    handleWatchAssetRequest: true
  }
};
var _default = watchAsset;
/**
 * @typedef {object} WatchAssetOptions
 * @property {Function} handleWatchAssetRequest - The wallet_watchAsset method implementation.
 */
/**
 * @typedef {object} WatchAssetParam
 * @property {string} type - The type of the asset to watch.
 * @property {object} options - Watch options for the asset.
 */
/**
 * @param {__import__('json-rpc-engine').JsonRpcRequest<WatchAssetParam>} req - The JSON-RPC request object.
 * @param {__import__('json-rpc-engine').JsonRpcResponse<true>} res - The JSON-RPC response object.
 * @param {Function} _next - The json-rpc-engine 'next' callback.
 * @param {Function} end - The json-rpc-engine 'end' callback.
 * @param {WatchAssetOptions} options
 */
exports.default = _default;
async function watchAssetHandler(req, res, _next, end, {
  handleWatchAssetRequest
}) {
  try {
    const {
      params: {
        options: asset,
        type
      },
      origin
    } = req;
    const {
      tokenId
    } = asset;
    if ([_controllerUtils.ERC721, _controllerUtils.ERC1155].includes(type) && tokenId !== undefined && typeof tokenId !== 'string') {
      return end(_ethRpcErrors.ethErrors.rpc.invalidParams({
        message: `Expected parameter 'tokenId' to be type 'string'. Received type '${typeof tokenId}'`
      }));
    }
    await handleWatchAssetRequest(asset, type, origin);
    res.result = true;
    return end();
  } catch (error) {
    return end(error);
  }
}

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\rpc-method-middleware\\handlers\\watch-asset.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\rpc-method-middleware\\index.js", {"./createMethodMiddleware":"F:\\metamask-extension\\app\\scripts\\lib\\rpc-method-middleware\\createMethodMiddleware.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5Crpc-method-middleware%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _createMethodMiddleware = require("./createMethodMiddleware");
Object.keys(_createMethodMiddleware).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _createMethodMiddleware[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _createMethodMiddleware[key];
    }
  });
});

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\rpc-method-middleware\\index.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\security-provider-helpers.ts", {"../../../shared/constants/app":"F:\\metamask-extension\\shared\\constants\\app.ts","../../../shared/modules/fetch-with-timeout":"F:\\metamask-extension\\shared\\modules\\fetch-with-timeout.ts"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5Csecurity-provider-helpers.ts
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.securityProviderCheck = securityProviderCheck;
var _fetchWithTimeout = _interopRequireDefault(require("../../../shared/modules/fetch-with-timeout"));
var _app = require("../../../shared/constants/app");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const fetchWithTimeout = (0, _fetchWithTimeout.default)();
async function securityProviderCheck(requestData, methodName, chainId, currentLocale) {
  let dataToValidate;
  // Core message managers use messageParams but frontend uses msgParams with lots of references
  const params = requestData.msgParams || requestData.messageParams;
  if (methodName === _app.MESSAGE_TYPE.ETH_SIGN_TYPED_DATA) {
    dataToValidate = {
      host_name: params === null || params === void 0 ? void 0 : params.origin,
      rpc_method_name: methodName,
      chain_id: chainId,
      data: params === null || params === void 0 ? void 0 : params.data,
      currentLocale
    };
  } else if (methodName === _app.MESSAGE_TYPE.ETH_SIGN || methodName === _app.MESSAGE_TYPE.PERSONAL_SIGN) {
    dataToValidate = {
      host_name: params === null || params === void 0 ? void 0 : params.origin,
      rpc_method_name: methodName,
      chain_id: chainId,
      data: {
        signer_address: params === null || params === void 0 ? void 0 : params.from,
        msg_to_sign: params === null || params === void 0 ? void 0 : params.data
      },
      currentLocale
    };
  } else {
    var _requestData$txParams, _requestData$txParams2, _requestData$txParams3, _requestData$txParams4, _requestData$txParams5, _requestData$txParams6;
    dataToValidate = {
      host_name: requestData.origin,
      rpc_method_name: methodName,
      chain_id: chainId,
      data: {
        from_address: (_requestData$txParams = requestData.txParams) === null || _requestData$txParams === void 0 ? void 0 : _requestData$txParams.from,
        to_address: (_requestData$txParams2 = requestData.txParams) === null || _requestData$txParams2 === void 0 ? void 0 : _requestData$txParams2.to,
        gas: (_requestData$txParams3 = requestData.txParams) === null || _requestData$txParams3 === void 0 ? void 0 : _requestData$txParams3.gas,
        gasPrice: (_requestData$txParams4 = requestData.txParams) === null || _requestData$txParams4 === void 0 ? void 0 : _requestData$txParams4.gasPrice,
        value: (_requestData$txParams5 = requestData.txParams) === null || _requestData$txParams5 === void 0 ? void 0 : _requestData$txParams5.value,
        data: (_requestData$txParams6 = requestData.txParams) === null || _requestData$txParams6 === void 0 ? void 0 : _requestData$txParams6.data
      },
      currentLocale
    };
  }
  const response = await fetchWithTimeout('https://proxy.metafi.codefi.network/opensea/security/v1/validate', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToValidate)
  });
  return await response.json();
}

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\security-provider-helpers.ts",}],
["F:\\metamask-extension\\app\\scripts\\lib\\seed-phrase-verifier.js", {"../../../shared/constants/keyring":"F:\\metamask-extension\\shared\\constants\\keyring.ts","@metamask/eth-keyring-controller":"F:\\metamask-extension\\node_modules\\@metamask\\eth-keyring-controller\\index.js","loglevel":"F:\\metamask-extension\\node_modules\\loglevel\\lib\\loglevel.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5Cseed-phrase-verifier.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ethKeyringController = require("@metamask/eth-keyring-controller");
var _loglevel = _interopRequireDefault(require("loglevel"));
var _keyring = require("../../../shared/constants/keyring");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const seedPhraseVerifier = {
  /**
   * Verifies if the seed words can restore the accounts.
   *
   * Key notes:
   * - The seed words can recreate the primary keyring and the accounts belonging to it.
   * - The created accounts in the primary keyring are always the same.
   * - The keyring always creates the accounts in the same sequence.
   *
   * @param {Array} createdAccounts - The accounts to restore
   * @param {Buffer} seedPhrase - The seed words to verify, encoded as a Buffer
   * @returns {Promise<void>}
   */
  async verifyAccounts(createdAccounts, seedPhrase) {
    if (!createdAccounts || createdAccounts.length < 1) {
      throw new Error('No created accounts defined.');
    }
    const keyringController = new _ethKeyringController.KeyringController({});
    const keyringBuilder = keyringController.getKeyringBuilderForType(_keyring.KeyringType.hdKeyTree);
    const keyring = keyringBuilder();
    const opts = {
      mnemonic: seedPhrase,
      numberOfAccounts: createdAccounts.length
    };
    await keyring.deserialize(opts);
    const restoredAccounts = await keyring.getAccounts();
    _loglevel.default.debug(`Created accounts: ${JSON.stringify(createdAccounts)}`);
    _loglevel.default.debug(`Restored accounts: ${JSON.stringify(restoredAccounts)}`);
    if (restoredAccounts.length !== createdAccounts.length) {
      // this should not happen...
      throw new Error('Wrong number of accounts');
    }
    for (let i = 0; i < restoredAccounts.length; i++) {
      if (restoredAccounts[i].toLowerCase() !== createdAccounts[i].toLowerCase()) {
        throw new Error(`Not identical accounts! Original: ${createdAccounts[i]}, Restored: ${restoredAccounts[i]}`);
      }
    }
  }
};
var _default = seedPhraseVerifier;
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\seed-phrase-verifier.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\segment\\analytics.js", {"../util":"F:\\metamask-extension\\app\\scripts\\lib\\util.ts","@segment/loosely-validate-event":"F:\\metamask-extension\\node_modules\\@segment\\loosely-validate-event\\index.js","buffer":"F:\\metamask-extension\\node_modules\\browserify\\node_modules\\buffer\\index.js","is-retry-allowed":"F:\\metamask-extension\\node_modules\\is-retry-allowed\\index.js","lodash":"F:\\metamask-extension\\node_modules\\lodash\\lodash.js","remove-trailing-slash":"F:\\metamask-extension\\node_modules\\remove-trailing-slash\\index.js","timers":"F:\\metamask-extension\\node_modules\\timers-browserify\\main.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5Csegment%5Canalytics.js
      return function (require, module, exports) {
(function (Buffer,setImmediate){(function (){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _removeTrailingSlash = _interopRequireDefault(require("remove-trailing-slash"));
var _looselyValidateEvent = _interopRequireDefault(require("@segment/loosely-validate-event"));
var _lodash = require("lodash");
var _isRetryAllowed = _interopRequireDefault(require("is-retry-allowed"));
var _util = require("../util");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const noop = () => ({});

// Method below is inspired from axios-retry https://github.com/softonic/axios-retry
function isNetworkError(error) {
  return !error.response && Boolean(error.code) &&
  // Prevents retrying cancelled requests
  error.code !== 'ECONNABORTED' &&
  // Prevents retrying timed out requests
  (0, _isRetryAllowed.default)(error); // Prevents retrying unsafe errors
}

class Analytics {
  /**
   * Initialize a new `Analytics` with Segment project's `writeKey` and an
   * optional dictionary of `options`.
   *
   * @param {string} writeKey
   * @param {object} [options] - (optional)
   * @property {number} [flushAt] (default: 20)
   * @property {number} [flushInterval] (default: 10000)
   * @property {string} [host] (default: 'https://api.segment.io')
   */
  constructor(writeKey, options = {}) {
    this.writeKey = writeKey;
    this.host = (0, _removeTrailingSlash.default)(options.host || 'https://api.segment.io');
    this.flushInterval = options.flushInterval || 10000;
    this.flushAt = options.flushAt || Math.max(options.flushAt, 1) || 20;
    this.queue = [];
    this.path = '/v1/batch';
    this.maxQueueSize = 1024 * 450;
    this.flushed = false;
    this.retryCount = 3;
    Object.defineProperty(this, 'enable', {
      configurable: false,
      writable: false,
      enumerable: true,
      value: true
    });
  }
  _validate(message, type) {
    (0, _looselyValidateEvent.default)(message, type);
  }
  _message(type, message, callback) {
    this._validate(message, type);
    this.enqueue(type, message, callback);
    return this;
  }

  /**
   * Send an identify `message`.
   *
   * @param {object} message
   * @param {Function} [callback] - (optional)
   * @returns {Analytics}
   */
  identify(message, callback) {
    return this._message('identify', message, callback);
  }

  /**
   * Send a track `message`.
   *
   * @param {object} message
   * @param {Function} [callback] - (optional)
   * @returns {Analytics}
   */
  track(message, callback) {
    return this._message('track', message, callback);
  }

  /**
   * Send a page `message`.
   *
   * @param {object} message
   * @param {Function} [callback] - (optional)
   * @returns {Analytics}
   */
  page(message, callback) {
    return this._message('page', message, callback);
  }

  /**
   * Add a `message` of type `type` to the queue and
   * check whether it should be flushed.
   *
   * @param {string} type
   * @param {object} msg
   * @param {Function} [callback] - (optional)
   */
  enqueue(type, msg, callback = noop) {
    if (!this.enable) {
      setImmediate(callback);
      return;
    }
    const message = {
      ...msg,
      type
    };

    // Specifying library here helps segment to understand structure of request.
    // Currently segment seems to support these source libraries only.
    message.context = {
      ...message.context,
      library: {
        name: 'analytics-node'
      }
    };
    if (!message.timestamp) {
      message.timestamp = new Date();
    }
    if (!message.messageId) {
      message.messageId = (0, _util.generateRandomId)();
    }
    if (message.anonymousId && !(0, _lodash.isString)(message.anonymousId)) {
      message.anonymousId = JSON.stringify(message.anonymousId);
    }
    if (message.userId && !(0, _lodash.isString)(message.userId)) {
      message.userId = JSON.stringify(message.userId);
    }
    this.queue.push({
      message,
      callback
    });
    if (!this.flushed) {
      this.flushed = true;
      this.flush();
      return;
    }
    const hasReachedFlushAt = this.queue.length >= this.flushAt;
    const hasReachedQueueSize = this.queue.reduce((acc, item) => acc + JSON.stringify(item).length, 0) >= this.maxQueueSize;
    if (hasReachedFlushAt || hasReachedQueueSize) {
      this.flush();
    }
    if (this.flushInterval && !this.timer) {
      this.timer = setTimeout(this.flush.bind(this), this.flushInterval);
    }
  }

  /**
   * Flush the current queue
   *
   * @param {Function} [callback] - (optional)
   */
  flush(callback = noop) {
    if (!this.enable) {
      setImmediate(callback);
      return Promise.resolve();
    }
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    if (!this.queue.length) {
      setImmediate(callback);
      return Promise.resolve();
    }
    const items = this.queue.splice(0, this.flushAt);
    const callbacks = items.map(item => item.callback);
    const messages = items.map(item => item.message);
    const data = {
      batch: messages,
      timestamp: new Date(),
      sentAt: new Date()
    };
    const done = err => {
      setImmediate(() => {
        callbacks.forEach(fn => fn(err, data));
        callback(err, data);
      });
    };
    const headers = {
      Authorization: `Basic ${Buffer.from(this.writeKey, 'utf8').toString('base64')}`
    };
    return this._sendRequest(`${this.host}${this.path}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers
    }, done, 0);
  }
  _retryRequest(url, body, done, retryNo) {
    const delay = Math.pow(2, retryNo) * 100;
    setTimeout(() => {
      this._sendRequest(url, body, done, retryNo + 1);
    }, delay);
  }
  async _sendRequest(url, body, done, retryNo) {
    return fetch(url, body).then(async response => {
      if (response.ok) {
        done();
      } else if (this._isErrorRetryable({
        response
      }) && retryNo <= this.retryCount) {
        this._retryRequest(url, body, done, retryNo);
      } else {
        const error = new Error(response.statusText);
        done(error);
      }
    }).catch(error => {
      if (this._isErrorRetryable(error) && retryNo <= this.retryCount) {
        this._retryRequest(url, body, done, retryNo);
      } else {
        done(error);
      }
    });
  }
  _isErrorRetryable(error) {
    // Retry Network Errors.
    if (isNetworkError(error)) {
      return true;
    }
    if (!error.response) {
      // Cannot determine if the request can be retried
      return false;
    }

    // Retry Server Errors (5xx).
    if (error.response.status >= 500 && error.response.status <= 599) {
      return true;
    }

    // Retry if rate limited.
    if (error.response.status === 429) {
      return true;
    }
    return false;
  }
}
exports.default = Analytics;

}).call(this)}).call(this,require("buffer").Buffer,require("timers").setImmediate)

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\segment\\analytics.js",}],
["F:\\metamask-extension\\app\\scripts\\lib\\segment\\index.js", {"../../../../shared/constants/time":"F:\\metamask-extension\\shared\\constants\\time.ts","./analytics":"F:\\metamask-extension\\app\\scripts\\lib\\segment\\analytics.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Clib%5Csegment%5Cindex.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.segment = exports.createSegmentMock = void 0;
var _time = require("../../../../shared/constants/time");
var _analytics = _interopRequireDefault(require("./analytics"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SEGMENT_WRITE_KEY = "" ?? null;
const SEGMENT_HOST = null ?? null;

// flushAt controls how many events are sent to segment at once. Segment will
// hold onto a queue of events until it hits this number, then it sends them as
// a batch. This setting defaults to 20, but in development we likely want to
// see events in real time for debugging, so this is set to 1 to disable the
// queueing mechanism.
const SEGMENT_FLUSH_AT = "development" === 'production' ? undefined : 1;

// flushInterval controls how frequently the queue is flushed to segment.
// This happens regardless of the size of the queue. The default setting is
// 10,000ms (10 seconds). This default is rather high, though thankfully
// using the background process as our event handler means we don't have to
// deal with short lived sessions that happen faster than the interval
// e.g confirmations. This is set to 5,000ms (5 seconds) arbitrarily with the
// intent of having a value less than 10 seconds.
const SEGMENT_FLUSH_INTERVAL = _time.SECOND * 5;

/**
 * Creates a mock segment module for usage in test environments. This is used
 * when building the application in test mode to catch event calls and prevent
 * them from being sent to segment. It is also used in unit tests to mock and
 * spy on the methods to ensure proper behavior
 *
 * @param {number} flushAt - number of events to queue before sending to segment
 * @returns {SegmentInterface}
 */
const createSegmentMock = (flushAt = SEGMENT_FLUSH_AT) => {
  const segmentMock = {
    // Internal queue to keep track of events and properly mimic segment's
    // queueing behavior.
    queue: [],
    /**
     * Used to immediately send all queued events and reset the queue to zero.
     * For our purposes this simply triggers the callback method registered with
     * the event.
     */
    flush() {
      segmentMock.queue.forEach(([_, callback]) => {
        callback();
      });
      segmentMock.queue = [];
    },
    /**
     * Track an event and add it to the queue. If the queue size reaches the
     * flushAt threshold, flush the queue.
     *
     * @param payload
     * @param callback
     */
    track(payload, callback = () => undefined) {
      segmentMock.queue.push([payload, callback]);
      if (segmentMock.queue.length >= flushAt) {
        segmentMock.flush();
      }
    },
    /**
     * A true NOOP, these methods are either not used or do not await callback
     * and therefore require no functionality.
     */
    page() {
      // noop
    },
    identify() {
      // noop
    }
  };
  return segmentMock;
};
exports.createSegmentMock = createSegmentMock;
const segment = SEGMENT_WRITE_KEY ? new _analytics.default(SEGMENT_WRITE_KEY, {
  host: SEGMENT_HOST,
  flushAt: SEGMENT_FLUSH_AT,
  flushInterval: SEGMENT_FLUSH_INTERVAL
}) : createSegmentMock(SEGMENT_FLUSH_AT, SEGMENT_FLUSH_INTERVAL);
exports.segment = segment;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\lib\\segment\\index.js",}],
["F:\\metamask-extension\\app\\scripts\\metamask-controller.js", {"../../shared/constants/app":"F:\\metamask-extension\\shared\\constants\\app.ts","../../shared/constants/hardware-wallets":"F:\\metamask-extension\\shared\\constants\\hardware-wallets.ts","../../shared/constants/keyring":"F:\\metamask-extension\\shared\\constants\\keyring.ts","../../shared/constants/metametrics":"F:\\metamask-extension\\shared\\constants\\metametrics.ts","../../shared/constants/network":"F:\\metamask-extension\\shared\\constants\\network.ts","../../shared/constants/permissions":"F:\\metamask-extension\\shared\\constants\\permissions.ts","../../shared/constants/swaps":"F:\\metamask-extension\\shared\\constants\\swaps.ts","../../shared/constants/test-flags":"F:\\metamask-extension\\shared\\constants\\test-flags.js","../../shared/constants/time":"F:\\metamask-extension\\shared\\constants\\time.ts","../../shared/constants/tokens":"F:\\metamask-extension\\shared\\constants\\tokens.js","../../shared/constants/transaction":"F:\\metamask-extension\\shared\\constants\\transaction.ts","../../shared/lib/metamask-controller-utils":"F:\\metamask-extension\\shared\\lib\\metamask-controller-utils.js","../../shared/lib/token-util.ts":"F:\\metamask-extension\\shared\\lib\\token-util.ts","../../shared/modules/conversion.utils":"F:\\metamask-extension\\shared\\modules\\conversion.utils.ts","../../shared/modules/mv3.utils":"F:\\metamask-extension\\shared\\modules\\mv3.utils.js","../../shared/modules/string-utils":"F:\\metamask-extension\\shared\\modules\\string-utils.ts","../../shared/modules/transaction.utils":"F:\\metamask-extension\\shared\\modules\\transaction.utils.js","../../shared/notifications":"F:\\metamask-extension\\shared\\notifications\\index.js","./account-import-strategies":"F:\\metamask-extension\\app\\scripts\\account-import-strategies\\index.js","./controllers/alert":"F:\\metamask-extension\\app\\scripts\\controllers\\alert.js","./controllers/app-state":"F:\\metamask-extension\\app\\scripts\\controllers\\app-state.js","./controllers/backup":"F:\\metamask-extension\\app\\scripts\\controllers\\backup.js","./controllers/cached-balances":"F:\\metamask-extension\\app\\scripts\\controllers\\cached-balances.js","./controllers/decrypt-message":"F:\\metamask-extension\\app\\scripts\\controllers\\decrypt-message.ts","./controllers/detect-tokens":"F:\\metamask-extension\\app\\scripts\\controllers\\detect-tokens.js","./controllers/encryption-public-key":"F:\\metamask-extension\\app\\scripts\\controllers\\encryption-public-key.ts","./controllers/ens":"F:\\metamask-extension\\app\\scripts\\controllers\\ens\\index.js","./controllers/incoming-transactions":"F:\\metamask-extension\\app\\scripts\\controllers\\incoming-transactions.js","./controllers/metametrics":"F:\\metamask-extension\\app\\scripts\\controllers\\metametrics.js","./controllers/onboarding":"F:\\metamask-extension\\app\\scripts\\controllers\\onboarding.js","./controllers/permissions":"F:\\metamask-extension\\app\\scripts\\controllers\\permissions\\index.js","./controllers/preferences":"F:\\metamask-extension\\app\\scripts\\controllers\\preferences.js","./controllers/swaps":"F:\\metamask-extension\\app\\scripts\\controllers\\swaps.js","./controllers/transactions":"F:\\metamask-extension\\app\\scripts\\controllers\\transactions\\index.js","./detect-multiple-instances":"F:\\metamask-extension\\app\\scripts\\detect-multiple-instances.js","./lib/ComposableObservableStore":"F:\\metamask-extension\\app\\scripts\\lib\\ComposableObservableStore.js","./lib/account-tracker":"F:\\metamask-extension\\app\\scripts\\lib\\account-tracker.js","./lib/createDupeReqFilterMiddleware":"F:\\metamask-extension\\app\\scripts\\lib\\createDupeReqFilterMiddleware.js","./lib/createLoggerMiddleware":"F:\\metamask-extension\\app\\scripts\\lib\\createLoggerMiddleware.js","./lib/createMetaRPCHandler":"F:\\metamask-extension\\app\\scripts\\lib\\createMetaRPCHandler.js","./lib/createMetamaskMiddleware":"F:\\metamask-extension\\app\\scripts\\lib\\createMetamaskMiddleware.js","./lib/createOnboardingMiddleware":"F:\\metamask-extension\\app\\scripts\\lib\\createOnboardingMiddleware.js","./lib/createOriginMiddleware":"F:\\metamask-extension\\app\\scripts\\lib\\createOriginMiddleware.js","./lib/createRPCMethodTrackingMiddleware":"F:\\metamask-extension\\app\\scripts\\lib\\createRPCMethodTrackingMiddleware.js","./lib/createTabIdMiddleware":"F:\\metamask-extension\\app\\scripts\\lib\\createTabIdMiddleware.js","./lib/rpc-method-middleware":"F:\\metamask-extension\\app\\scripts\\lib\\rpc-method-middleware\\index.js","./lib/security-provider-helpers":"F:\\metamask-extension\\app\\scripts\\lib\\security-provider-helpers.ts","./lib/seed-phrase-verifier":"F:\\metamask-extension\\app\\scripts\\lib\\seed-phrase-verifier.js","./lib/segment":"F:\\metamask-extension\\app\\scripts\\lib\\segment\\index.js","./lib/stream-utils":"F:\\metamask-extension\\app\\scripts\\lib\\stream-utils.js","./lib/util":"F:\\metamask-extension\\app\\scripts\\lib\\util.ts","./translate":"F:\\metamask-extension\\app\\scripts\\translate.ts","@keystonehq/metamask-airgapped-keyring":"F:\\metamask-extension\\node_modules\\@keystonehq\\metamask-airgapped-keyring\\dist\\index.js","@metamask/address-book-controller":"F:\\metamask-extension\\node_modules\\@metamask\\address-book-controller\\dist\\index.js","@metamask/announcement-controller":"F:\\metamask-extension\\node_modules\\@metamask\\announcement-controller\\dist\\index.js","@metamask/approval-controller":"F:\\metamask-extension\\node_modules\\@metamask\\approval-controller\\dist\\index.js","@metamask/assets-controllers":"F:\\metamask-extension\\node_modules\\@metamask\\assets-controllers\\dist\\index.js","@metamask/base-controller":"F:\\metamask-extension\\node_modules\\@metamask\\base-controller\\dist\\index.js","@metamask/controller-utils":"F:\\metamask-extension\\node_modules\\@metamask\\controller-utils\\dist\\index.js","@metamask/eth-json-rpc-middleware":"F:\\metamask-extension\\node_modules\\@metamask\\eth-json-rpc-middleware\\dist\\index.js","@metamask/eth-keyring-controller":"F:\\metamask-extension\\node_modules\\@metamask\\eth-keyring-controller\\index.js","@metamask/eth-ledger-bridge-keyring":"F:\\metamask-extension\\node_modules\\@metamask\\eth-ledger-bridge-keyring\\index.js","@metamask/eth-trezor-keyring":"F:\\metamask-extension\\node_modules\\@metamask\\eth-trezor-keyring\\index.js","@metamask/gas-fee-controller":"F:\\metamask-extension\\node_modules\\@metamask\\gas-fee-controller\\dist\\index.js","@metamask/network-controller":"F:\\metamask-extension\\node_modules\\@metamask\\network-controller\\dist\\index.js","@metamask/obs-store":"F:\\metamask-extension\\node_modules\\@metamask\\obs-store\\dist\\index.js","@metamask/obs-store/dist/asStream":"F:\\metamask-extension\\node_modules\\@metamask\\obs-store\\dist\\asStream.js","@metamask/permission-controller":"F:\\metamask-extension\\node_modules\\@metamask\\permission-controller\\dist\\index.js","@metamask/phishing-controller":"F:\\metamask-extension\\node_modules\\@metamask\\phishing-controller\\dist\\index.js","@metamask/signature-controller":"F:\\metamask-extension\\node_modules\\@metamask\\signature-controller\\dist\\index.js","@metamask/smart-transactions-controller":"F:\\metamask-extension\\node_modules\\@metamask\\smart-transactions-controller\\dist\\index.js","@metamask/subject-metadata-controller":"F:\\metamask-extension\\node_modules\\@metamask\\subject-metadata-controller\\dist\\index.js","@sentry/browser":"F:\\metamask-extension\\node_modules\\@sentry\\browser\\cjs\\index.js","await-semaphore":"F:\\metamask-extension\\node_modules\\await-semaphore\\index.js","buffer":"F:\\metamask-extension\\node_modules\\browserify\\node_modules\\buffer\\index.js","eth-json-rpc-filters":"F:\\metamask-extension\\node_modules\\eth-json-rpc-filters\\index.js","eth-json-rpc-filters/subscriptionManager":"F:\\metamask-extension\\node_modules\\eth-json-rpc-filters\\subscriptionManager.js","eth-lattice-keyring":"F:\\metamask-extension\\node_modules\\eth-lattice-keyring\\index.js","eth-query":"F:\\metamask-extension\\node_modules\\eth-query\\index.js","eth-rpc-errors":"F:\\metamask-extension\\node_modules\\eth-rpc-errors\\dist\\index.js","events":"F:\\metamask-extension\\node_modules\\browserify\\node_modules\\events\\events.js","json-rpc-engine":"F:\\metamask-extension\\node_modules\\json-rpc-engine\\dist\\index.js","json-rpc-middleware-stream":"F:\\metamask-extension\\node_modules\\json-rpc-middleware-stream\\dist\\index.js","lodash":"F:\\metamask-extension\\node_modules\\lodash\\lodash.js","loglevel":"F:\\metamask-extension\\node_modules\\loglevel\\lib\\loglevel.js","nanoid":"F:\\metamask-extension\\node_modules\\nanoid\\index.browser.js","pump":"F:\\metamask-extension\\node_modules\\pump\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Cmetamask-controller.js
      return function (require, module, exports) {
(function (Buffer){(function (){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.METAMASK_CONTROLLER_EVENTS = void 0;
var _events = _interopRequireDefault(require("events"));
var _pump = _interopRequireDefault(require("pump"));
var _obsStore = require("@metamask/obs-store");
var _asStream = require("@metamask/obs-store/dist/asStream");
var _jsonRpcEngine = require("json-rpc-engine");
var _jsonRpcMiddlewareStream = require("json-rpc-middleware-stream");
var _ethJsonRpcMiddleware = require("@metamask/eth-json-rpc-middleware");
var _lodash = require("lodash");
var _ethKeyringController = require("@metamask/eth-keyring-controller");
var _ethJsonRpcFilters = _interopRequireDefault(require("eth-json-rpc-filters"));
var _subscriptionManager = _interopRequireDefault(require("eth-json-rpc-filters/subscriptionManager"));
var _ethRpcErrors = require("eth-rpc-errors");
var _awaitSemaphore = require("await-semaphore");
var _loglevel = _interopRequireDefault(require("loglevel"));
var _ethTrezorKeyring = _interopRequireDefault(require("@metamask/eth-trezor-keyring"));
var _ethLedgerBridgeKeyring = _interopRequireDefault(require("@metamask/eth-ledger-bridge-keyring"));
var _ethLatticeKeyring = _interopRequireDefault(require("eth-lattice-keyring"));
var _metamaskAirgappedKeyring = require("@keystonehq/metamask-airgapped-keyring");
var _ethQuery = _interopRequireDefault(require("eth-query"));
var _nanoid = _interopRequireDefault(require("nanoid"));
var _browser = require("@sentry/browser");
var _addressBookController = require("@metamask/address-book-controller");
var _approvalController = require("@metamask/approval-controller");
var _baseController = require("@metamask/base-controller");
var _assetsControllers = require("@metamask/assets-controllers");
var _phishingController = require("@metamask/phishing-controller");
var _announcementController = require("@metamask/announcement-controller");
var _networkController = require("@metamask/network-controller");
var _gasFeeController = require("@metamask/gas-fee-controller");
var _permissionController = require("@metamask/permission-controller");
var _subjectMetadataController = require("@metamask/subject-metadata-controller");
var _smartTransactionsController = _interopRequireDefault(require("@metamask/smart-transactions-controller"));
var _signatureController = require("@metamask/signature-controller");
var _controllerUtils = require("@metamask/controller-utils");
var _transaction = require("../../shared/constants/transaction");
var _swaps = require("../../shared/constants/swaps");
var _network = require("../../shared/constants/network");
var _hardwareWallets = require("../../shared/constants/hardware-wallets");
var _keyring = require("../../shared/constants/keyring");
var _permissions = require("../../shared/constants/permissions");
var _notifications = require("../../shared/notifications");
var _time = require("../../shared/constants/time");
var _app = require("../../shared/constants/app");
var _metametrics = require("../../shared/constants/metametrics");
var _tokenUtil = require("../../shared/lib/token-util.ts");
var _stringUtils = require("../../shared/modules/string-utils");
var _transaction2 = require("../../shared/modules/transaction.utils");
var _tokens = require("../../shared/constants/tokens");
var _metamaskControllerUtils = require("../../shared/lib/metamask-controller-utils");
var _mv = require("../../shared/modules/mv3.utils");
var _conversion = require("../../shared/modules/conversion.utils");
var _testFlags = require("../../shared/constants/test-flags");
var _detectMultipleInstances = require("./detect-multiple-instances");
var _ComposableObservableStore = _interopRequireDefault(require("./lib/ComposableObservableStore"));
var _accountTracker = _interopRequireDefault(require("./lib/account-tracker"));
var _createDupeReqFilterMiddleware = _interopRequireDefault(require("./lib/createDupeReqFilterMiddleware"));
var _createLoggerMiddleware = _interopRequireDefault(require("./lib/createLoggerMiddleware"));
var _rpcMethodMiddleware = require("./lib/rpc-method-middleware");
var _createOriginMiddleware = _interopRequireDefault(require("./lib/createOriginMiddleware"));
var _createTabIdMiddleware = _interopRequireDefault(require("./lib/createTabIdMiddleware"));
var _createOnboardingMiddleware = _interopRequireDefault(require("./lib/createOnboardingMiddleware"));
var _streamUtils = require("./lib/stream-utils");
var _ens = _interopRequireDefault(require("./controllers/ens"));
var _preferences = _interopRequireDefault(require("./controllers/preferences"));
var _appState = _interopRequireDefault(require("./controllers/app-state"));
var _cachedBalances = _interopRequireDefault(require("./controllers/cached-balances"));
var _alert = _interopRequireDefault(require("./controllers/alert"));
var _onboarding = _interopRequireDefault(require("./controllers/onboarding"));
var _backup = _interopRequireDefault(require("./controllers/backup"));
var _incomingTransactions = _interopRequireDefault(require("./controllers/incoming-transactions"));
var _decryptMessage = _interopRequireDefault(require("./controllers/decrypt-message"));
var _transactions = _interopRequireDefault(require("./controllers/transactions"));
var _detectTokens = _interopRequireDefault(require("./controllers/detect-tokens"));
var _swaps2 = _interopRequireDefault(require("./controllers/swaps"));
var _accountImportStrategies = _interopRequireDefault(require("./account-import-strategies"));
var _seedPhraseVerifier = _interopRequireDefault(require("./lib/seed-phrase-verifier"));
var _metametrics2 = _interopRequireDefault(require("./controllers/metametrics"));
var _segment = require("./lib/segment");
var _createMetaRPCHandler = _interopRequireDefault(require("./lib/createMetaRPCHandler"));
var _util = require("./lib/util");
var _createMetamaskMiddleware = _interopRequireDefault(require("./lib/createMetamaskMiddleware"));
var _encryptionPublicKey = _interopRequireDefault(require("./controllers/encryption-public-key"));
var _permissions2 = require("./controllers/permissions");
var _createRPCMethodTrackingMiddleware = _interopRequireDefault(require("./lib/createRPCMethodTrackingMiddleware"));
var _securityProviderHelpers = require("./lib/security-provider-helpers");
var _translate = require("./translate");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const METAMASK_CONTROLLER_EVENTS = {
  // Fired after state changes that impact the extension badge (unapproved msg count)
  // The process of updating the badge happens in app/scripts/background.js.
  UPDATE_BADGE: 'updateBadge',
  // TODO: Add this and similar enums to the `controllers` repo and export them
  APPROVAL_STATE_CHANGE: 'ApprovalController:stateChange'
};

// stream channels
exports.METAMASK_CONTROLLER_EVENTS = METAMASK_CONTROLLER_EVENTS;
const PHISHING_SAFELIST = 'metamask-phishing-safelist';
class MetamaskController extends _events.default {
  /**
   * @param {object} opts
   */
  constructor(opts) {
    var _initState$AccountTra;
    super();
    _defineProperty(this, "handleWatchAssetRequest", (asset, type, origin) => {
      switch (type) {
        case _controllerUtils.ERC20:
          return this.tokensController.watchAsset(asset, type);
        case _controllerUtils.ERC721:
        case _controllerUtils.ERC1155:
          return this.nftController.watchNft(asset, type, origin);
        default:
          throw new Error(`Asset type ${type} not supported`);
      }
    });
    _defineProperty(this, "removePermissionsFor", subjects => {
      try {
        this.permissionController.revokePermissions(subjects);
      } catch (exp) {
        if (!(exp instanceof _permissionController.PermissionsRequestNotFoundError)) {
          throw exp;
        }
      }
    });
    _defineProperty(this, "rejectPermissionsRequest", requestId => {
      try {
        this.permissionController.rejectPermissionsRequest(requestId);
      } catch (exp) {
        if (!(exp instanceof _permissionController.PermissionsRequestNotFoundError)) {
          throw exp;
        }
      }
    });
    _defineProperty(this, "acceptPermissionsRequest", request => {
      try {
        this.permissionController.acceptPermissionsRequest(request);
      } catch (exp) {
        if (!(exp instanceof _permissionController.PermissionsRequestNotFoundError)) {
          throw exp;
        }
      }
    });
    _defineProperty(this, "resolvePendingApproval", async (id, value, options) => {
      try {
        await this.approvalController.accept(id, value, options);
      } catch (exp) {
        if (!(exp instanceof _approvalController.ApprovalRequestNotFoundError)) {
          throw exp;
        }
      }
    });
    _defineProperty(this, "rejectPendingApproval", (id, error) => {
      try {
        this.approvalController.reject(id, new _ethRpcErrors.EthereumRpcError(error.code, error.message, error.data));
      } catch (exp) {
        if (!(exp instanceof _approvalController.ApprovalRequestNotFoundError)) {
          throw exp;
        }
      }
    });
    const {
      isFirstMetaMaskControllerSetup
    } = opts;
    this.defaultMaxListeners = 20;
    this.sendUpdate = (0, _lodash.debounce)(this.privateSendUpdate.bind(this), _time.MILLISECOND * 200);
    this.opts = opts;
    this.extension = opts.browser;
    this.platform = opts.platform;
    this.notificationManager = opts.notificationManager;
    const initState = opts.initState || {};
    const version = this.platform.getVersion();
    this.recordFirstTimeInfo(initState);

    // this keeps track of how many "controllerStream" connections are open
    // the only thing that uses controller connections are open metamask UI instances
    this.activeControllerConnections = 0;
    this.getRequestAccountTabIds = opts.getRequestAccountTabIds;
    this.getOpenMetamaskTabsIds = opts.getOpenMetamaskTabsIds;
    this.controllerMessenger = new _baseController.ControllerMessenger();

    // instance of a class that wraps the extension's storage local API.
    this.localStoreApiWrapper = opts.localStore;

    // observable state store
    this.store = new _ComposableObservableStore.default({
      state: initState,
      controllerMessenger: this.controllerMessenger,
      persist: true
    });

    // external connections by origin
    // Do not modify directly. Use the associated methods.
    this.connections = {};

    // lock to ensure only one vault created at once
    this.createVaultMutex = new _awaitSemaphore.Mutex();
    this.extension.runtime.onInstalled.addListener(details => {
      if (details.reason === 'update' && version === '8.1.0') {
        this.platform.openExtensionInBrowser();
      }
    });

    // next, we will initialize the controllers
    // controller initialization order matters

    this.approvalController = new _approvalController.ApprovalController({
      messenger: this.controllerMessenger.getRestricted({
        name: 'ApprovalController'
      }),
      showApprovalRequest: opts.showUserConfirmation,
      typesExcludedFromRateLimiting: [_controllerUtils.ApprovalType.EthSign, _controllerUtils.ApprovalType.PersonalSign, _controllerUtils.ApprovalType.EthSignTypedData, _controllerUtils.ApprovalType.Transaction, _controllerUtils.ApprovalType.WatchAsset, _controllerUtils.ApprovalType.EthGetEncryptionPublicKey, _controllerUtils.ApprovalType.EthDecrypt]
    });
    const networkControllerMessenger = this.controllerMessenger.getRestricted({
      name: 'NetworkController',
      allowedEvents: ['NetworkController:stateChange', 'NetworkController:networkWillChange', 'NetworkController:networkDidChange', 'NetworkController:infuraIsBlocked', 'NetworkController:infuraIsUnblocked']
    });
    let initialNetworkControllerState = {};
    if (initState.NetworkController) {
      initialNetworkControllerState = initState.NetworkController;
    } else if (false) {
      initialNetworkControllerState = {
        providerConfig: {
          chainId: _network.CHAIN_IDS.LOCALHOST,
          nickname: 'Localhost 8545',
          rpcPrefs: {},
          rpcUrl: 'http://localhost:8545',
          ticker: 'ETH',
          type: 'rpc'
        },
        networkConfigurations: {
          networkConfigurationId: {
            chainId: _network.CHAIN_IDS.LOCALHOST,
            nickname: 'Localhost 8545',
            rpcPrefs: {},
            rpcUrl: 'http://localhost:8545',
            ticker: 'ETH',
            networkConfigurationId: 'networkConfigurationId'
          }
        }
      };
    } else if (true || "development" === 'test') {
      initialNetworkControllerState = {
        providerConfig: {
          type: _network.NETWORK_TYPES.GOERLI,
          chainId: _network.CHAIN_IDS.GOERLI,
          ticker: _network.TEST_NETWORK_TICKER_MAP[_network.NETWORK_TYPES.GOERLI]
        }
      };
    }
    this.networkController = new _networkController.NetworkController({
      messenger: networkControllerMessenger,
      state: initialNetworkControllerState,
      infuraProjectId: opts.infuraProjectId,
      trackMetaMetricsEvent: (...args) => this.metaMetricsController.trackEvent(...args)
    });
    this.networkController.initializeProvider();
    this.provider = this.networkController.getProviderAndBlockTracker().provider;
    this.blockTracker = this.networkController.getProviderAndBlockTracker().blockTracker;
    const tokenListMessenger = this.controllerMessenger.getRestricted({
      name: 'TokenListController',
      allowedEvents: ['TokenListController:stateChange', 'NetworkController:stateChange']
    });
    this.tokenListController = new _assetsControllers.TokenListController({
      chainId: this.networkController.state.providerConfig.chainId,
      preventPollingOnNetworkRestart: initState.TokenListController ? initState.TokenListController.preventPollingOnNetworkRestart : true,
      messenger: tokenListMessenger,
      state: initState.TokenListController
    });
    this.preferencesController = new _preferences.default({
      initState: initState.PreferencesController,
      initLangCode: opts.initLangCode,
      onInfuraIsBlocked: networkControllerMessenger.subscribe.bind(networkControllerMessenger, 'NetworkController:infuraIsBlocked'),
      onInfuraIsUnblocked: networkControllerMessenger.subscribe.bind(networkControllerMessenger, 'NetworkController:infuraIsUnblocked'),
      tokenListController: this.tokenListController,
      provider: this.provider
    });
    this.preferencesController.store.subscribe(async ({
      currentLocale
    }) => {
      await (0, _translate.updateCurrentLocale)(currentLocale);
    });
    const tokensControllerMessenger = this.controllerMessenger.getRestricted({
      name: 'TokensController',
      allowedActions: ['ApprovalController:addRequest'],
      allowedEvents: ['NetworkController:stateChange']
    });
    this.tokensController = new _assetsControllers.TokensController({
      messenger: tokensControllerMessenger,
      chainId: this.networkController.state.providerConfig.chainId,
      onPreferencesStateChange: this.preferencesController.store.subscribe.bind(this.preferencesController.store),
      onNetworkStateChange: networkControllerMessenger.subscribe.bind(networkControllerMessenger, 'NetworkController:stateChange'),
      config: {
        provider: this.provider
      },
      state: initState.TokensController
    });
    this.assetsContractController = new _assetsControllers.AssetsContractController({
      chainId: this.networkController.state.providerConfig.chainId,
      onPreferencesStateChange: listener => this.preferencesController.store.subscribe(listener),
      // This handler is misnamed, and is a known issue that will be resolved
      // by planned refactors. It should be onNetworkDidChange which happens
      // AFTER the provider in the network controller is updated to reflect
      // the new state of the network controller. In #18041 we changed this
      // handler to be triggered by the change in the network state because
      // that is what the handler name implies, but this triggers too soon
      // causing the provider of the AssetsContractController to trail the
      // network provider by one update.
      onNetworkStateChange: cb => networkControllerMessenger.subscribe('NetworkController:networkDidChange', () => {
        const networkState = this.networkController.state;
        return cb(networkState);
      })
    }, {
      provider: this.provider
    }, initState.AssetsContractController);
    const nftControllerMessenger = this.controllerMessenger.getRestricted({
      name: 'NftController',
      allowedActions: [`${this.approvalController.name}:addRequest`]
    });
    this.nftController = new _assetsControllers.NftController({
      messenger: nftControllerMessenger,
      chainId: this.networkController.state.providerConfig.chainId,
      onPreferencesStateChange: this.preferencesController.store.subscribe.bind(this.preferencesController.store),
      onNetworkStateChange: networkControllerMessenger.subscribe.bind(networkControllerMessenger, 'NetworkController:stateChange'),
      getERC721AssetName: this.assetsContractController.getERC721AssetName.bind(this.assetsContractController),
      getERC721AssetSymbol: this.assetsContractController.getERC721AssetSymbol.bind(this.assetsContractController),
      getERC721TokenURI: this.assetsContractController.getERC721TokenURI.bind(this.assetsContractController),
      getERC721OwnerOf: this.assetsContractController.getERC721OwnerOf.bind(this.assetsContractController),
      getERC1155BalanceOf: this.assetsContractController.getERC1155BalanceOf.bind(this.assetsContractController),
      getERC1155TokenURI: this.assetsContractController.getERC1155TokenURI.bind(this.assetsContractController),
      onNftAdded: ({
        address,
        symbol,
        tokenId,
        standard,
        source
      }) => this.metaMetricsController.trackEvent({
        event: _metametrics.MetaMetricsEventName.NftAdded,
        category: _metametrics.MetaMetricsEventCategory.Wallet,
        properties: {
          token_contract_address: address,
          token_symbol: symbol,
          asset_type: _transaction.AssetType.NFT,
          token_standard: standard,
          source
        },
        sensitiveProperties: {
          tokenId
        }
      })
    }, {}, initState.NftController);
    this.nftController.setApiKey(null);
    this.nftDetectionController = new _assetsControllers.NftDetectionController({
      chainId: this.networkController.state.providerConfig.chainId,
      onNftsStateChange: listener => this.nftController.subscribe(listener),
      onPreferencesStateChange: this.preferencesController.store.subscribe.bind(this.preferencesController.store),
      onNetworkStateChange: networkControllerMessenger.subscribe.bind(networkControllerMessenger, 'NetworkController:stateChange'),
      getOpenSeaApiKey: () => this.nftController.openSeaApiKey,
      getBalancesInSingleCall: this.assetsContractController.getBalancesInSingleCall.bind(this.assetsContractController),
      addNft: this.nftController.addNft.bind(this.nftController),
      getNftState: () => this.nftController.state
    });
    this.metaMetricsController = new _metametrics2.default({
      segment: _segment.segment,
      preferencesStore: this.preferencesController.store,
      onNetworkDidChange: networkControllerMessenger.subscribe.bind(networkControllerMessenger, 'NetworkController:networkDidChange'),
      getNetworkIdentifier: () => {
        const {
          type,
          rpcUrl
        } = this.networkController.state.providerConfig;
        return type === _network.NETWORK_TYPES.RPC ? rpcUrl : type;
      },
      getCurrentChainId: () => this.networkController.state.providerConfig.chainId,
      version: this.platform.getVersion(),
      environment: "development",
      extension: this.extension,
      initState: initState.MetaMetricsController,
      captureException: _browser.captureException
    });
    this.on('update', update => {
      this.metaMetricsController.handleMetaMaskStateUpdate(update);
    });
    const gasFeeMessenger = this.controllerMessenger.getRestricted({
      name: 'GasFeeController'
    });
    const gasApiBaseUrl = false ? _swaps.GAS_DEV_API_BASE_URL : _swaps.GAS_API_BASE_URL;
    this.gasFeeController = new _gasFeeController.GasFeeController({
      state: initState.GasFeeController,
      interval: 10000,
      messenger: gasFeeMessenger,
      clientId: _swaps.SWAPS_CLIENT_ID,
      getProvider: () => this.networkController.getProviderAndBlockTracker().provider,
      // NOTE: This option is inaccurately named; it should be called
      // onNetworkDidChange
      onNetworkStateChange: eventHandler => {
        networkControllerMessenger.subscribe('NetworkController:networkDidChange', () => eventHandler(this.networkController.state));
      },
      getCurrentNetworkEIP1559Compatibility: this.networkController.getEIP1559Compatibility.bind(this.networkController),
      getCurrentAccountEIP1559Compatibility: this.getCurrentAccountEIP1559Compatibility.bind(this),
      legacyAPIEndpoint: `${gasApiBaseUrl}/networks/<chain_id>/gasPrices`,
      EIP1559APIEndpoint: `${gasApiBaseUrl}/networks/<chain_id>/suggestedGasFees`,
      getCurrentNetworkLegacyGasAPICompatibility: () => {
        const {
          chainId
        } = this.networkController.state.providerConfig;
        return chainId === _network.CHAIN_IDS.BSC;
      },
      getChainId: () => this.networkController.state.providerConfig.chainId
    });
    this.qrHardwareKeyring = new _metamaskAirgappedKeyring.MetaMaskKeyring();
    this.appStateController = new _appState.default({
      addUnlockListener: this.on.bind(this, 'unlock'),
      isUnlocked: this.isUnlocked.bind(this),
      initState: initState.AppStateController,
      onInactiveTimeout: () => this.setLocked(),
      preferencesStore: this.preferencesController.store,
      qrHardwareStore: this.qrHardwareKeyring.getMemStore(),
      messenger: this.controllerMessenger.getRestricted({
        name: 'AppStateController',
        allowedActions: [`${this.approvalController.name}:addRequest`, `${this.approvalController.name}:acceptRequest`]
      })
    });
    const currencyRateMessenger = this.controllerMessenger.getRestricted({
      name: 'CurrencyRateController'
    });
    this.currencyRateController = new _assetsControllers.CurrencyRateController({
      includeUsdRate: true,
      messenger: currencyRateMessenger,
      state: {
        ...initState.CurrencyController,
        nativeCurrency: this.networkController.state.providerConfig.ticker
      }
    });
    this.phishingController = new _phishingController.PhishingController({}, initState.PhishingController);
    this.phishingController.maybeUpdateState();
    if (false) {
      this.phishingController.setHotlistRefreshInterval(5 * _time.SECOND);
      this.phishingController.setStalelistRefreshInterval(30 * _time.SECOND);
    }
    const announcementMessenger = this.controllerMessenger.getRestricted({
      name: 'AnnouncementController'
    });
    let allAnnouncements = _notifications.UI_NOTIFICATIONS;
    this.announcementController = new _announcementController.AnnouncementController({
      messenger: announcementMessenger,
      allAnnouncements,
      state: initState.AnnouncementController
    });

    // token exchange rate tracker
    this.tokenRatesController = new _assetsControllers.TokenRatesController({
      chainId: this.networkController.state.providerConfig.chainId,
      onTokensStateChange: listener => this.tokensController.subscribe(listener),
      onCurrencyRateStateChange: listener => this.controllerMessenger.subscribe(`${this.currencyRateController.name}:stateChange`, listener),
      onNetworkStateChange: networkControllerMessenger.subscribe.bind(networkControllerMessenger, 'NetworkController:stateChange')
    }, {
      disabled: !this.preferencesController.store.getState().useCurrencyRateCheck
    }, initState.TokenRatesController);
    this.preferencesController.store.subscribe((0, _util.previousValueComparator)((prevState, currState) => {
      const {
        useCurrencyRateCheck: prevUseCurrencyRateCheck
      } = prevState;
      const {
        useCurrencyRateCheck: currUseCurrencyRateCheck
      } = currState;
      if (currUseCurrencyRateCheck && !prevUseCurrencyRateCheck) {
        this.currencyRateController.start();
        this.tokenRatesController.configure({
          disabled: false
        }, false, false);
      } else if (!currUseCurrencyRateCheck && prevUseCurrencyRateCheck) {
        this.currencyRateController.stop();
        this.tokenRatesController.configure({
          disabled: true
        }, false, false);
      }
    }, this.preferencesController.store.getState()));
    this.ensController = new _ens.default({
      provider: this.provider,
      getCurrentChainId: () => this.networkController.state.providerConfig.chainId,
      onNetworkDidChange: networkControllerMessenger.subscribe.bind(networkControllerMessenger, 'NetworkController:networkDidChange')
    });
    this.onboardingController = new _onboarding.default({
      initState: initState.OnboardingController
    });
    this.incomingTransactionsController = new _incomingTransactions.default({
      blockTracker: this.blockTracker,
      onNetworkDidChange: networkControllerMessenger.subscribe.bind(networkControllerMessenger, 'NetworkController:networkDidChange'),
      getCurrentChainId: () => this.networkController.state.providerConfig.chainId,
      preferencesController: this.preferencesController,
      onboardingController: this.onboardingController,
      initState: initState.IncomingTransactionsController
    });

    // account tracker watches balances, nonces, and any code at their address
    this.accountTracker = new _accountTracker.default({
      provider: this.provider,
      blockTracker: this.blockTracker,
      getCurrentChainId: () => this.networkController.state.providerConfig.chainId,
      getNetworkIdentifier: () => {
        const {
          type,
          rpcUrl
        } = this.networkController.state.providerConfig;
        return type === _network.NETWORK_TYPES.RPC ? rpcUrl : type;
      },
      preferencesController: this.preferencesController,
      onboardingController: this.onboardingController,
      initState: _mv.isManifestV3 && isFirstMetaMaskControllerSetup === false && (_initState$AccountTra = initState.AccountTracker) !== null && _initState$AccountTra !== void 0 && _initState$AccountTra.accounts ? {
        accounts: initState.AccountTracker.accounts
      } : {
        accounts: {}
      }
    });

    // start and stop polling for balances based on activeControllerConnections
    this.on('controllerConnectionChanged', activeControllerConnections => {
      const {
        completedOnboarding
      } = this.onboardingController.store.getState();
      if (activeControllerConnections > 0 && completedOnboarding) {
        this.triggerNetworkrequests();
      } else {
        this.stopNetworkRequests();
      }
    });
    this.onboardingController.store.subscribe((0, _util.previousValueComparator)(async (prevState, currState) => {
      const {
        completedOnboarding: prevCompletedOnboarding
      } = prevState;
      const {
        completedOnboarding: currCompletedOnboarding
      } = currState;
      if (!prevCompletedOnboarding && currCompletedOnboarding) {
        this.triggerNetworkrequests();
      }
    }, this.onboardingController.store.getState()));
    this.cachedBalancesController = new _cachedBalances.default({
      accountTracker: this.accountTracker,
      getCurrentChainId: () => this.networkController.state.providerConfig.chainId,
      initState: initState.CachedBalancesController
    });
    let additionalKeyrings = [(0, _ethKeyringController.keyringBuilderFactory)(_metamaskAirgappedKeyring.MetaMaskKeyring)];
    if (this.canUseHardwareWallets()) {
      var _this$opts$overrides;
      const keyringOverrides = (_this$opts$overrides = this.opts.overrides) === null || _this$opts$overrides === void 0 ? void 0 : _this$opts$overrides.keyrings;
      const additionalKeyringTypes = [(keyringOverrides === null || keyringOverrides === void 0 ? void 0 : keyringOverrides.trezor) || _ethTrezorKeyring.default, (keyringOverrides === null || keyringOverrides === void 0 ? void 0 : keyringOverrides.ledger) || _ethLedgerBridgeKeyring.default, (keyringOverrides === null || keyringOverrides === void 0 ? void 0 : keyringOverrides.lattice) || _ethLatticeKeyring.default, _metamaskAirgappedKeyring.MetaMaskKeyring];
      additionalKeyrings = additionalKeyringTypes.map(keyringType => (0, _ethKeyringController.keyringBuilderFactory)(keyringType));
    }
    this.keyringController = new _ethKeyringController.KeyringController({
      keyringBuilders: additionalKeyrings,
      initState: initState.KeyringController,
      encryptor: opts.encryptor || undefined,
      cacheEncryptionKey: _mv.isManifestV3
    });
    this.keyringController.memStore.subscribe(state => this._onKeyringControllerUpdate(state));
    this.keyringController.on('unlock', () => this._onUnlock());
    this.keyringController.on('lock', () => this._onLock());
    const getIdentities = () => this.preferencesController.store.getState().identities;
    this.permissionController = new _permissionController.PermissionController({
      messenger: this.controllerMessenger.getRestricted({
        name: 'PermissionController',
        allowedActions: [`${this.approvalController.name}:addRequest`, `${this.approvalController.name}:hasRequest`, `${this.approvalController.name}:acceptRequest`, `${this.approvalController.name}:rejectRequest`, `SnapController:getPermitted`, `SnapController:install`, `SubjectMetadataController:getSubjectMetadata`]
      }),
      state: initState.PermissionController,
      caveatSpecifications: (0, _permissions2.getCaveatSpecifications)({
        getIdentities
      }),
      permissionSpecifications: {
        ...(0, _permissions2.getPermissionSpecifications)({
          getIdentities,
          getAllAccounts: this.keyringController.getAccounts.bind(this.keyringController),
          captureKeyringTypesWithMissingIdentities: (identities = {}, accounts = []) => {
            const accountsMissingIdentities = accounts.filter(address => !identities[address]);
            const keyringTypesWithMissingIdentities = accountsMissingIdentities.map(address => {
              var _this$keyringControll;
              return (_this$keyringControll = this.keyringController.getKeyringForAccount(address)) === null || _this$keyringControll === void 0 ? void 0 : _this$keyringControll.type;
            });
            const identitiesCount = Object.keys(identities || {}).length;
            const accountTrackerCount = Object.keys(this.accountTracker.store.getState().accounts || {}).length;
            (0, _browser.captureException)(new Error(`Attempt to get permission specifications failed because their were ${accounts.length} accounts, but ${identitiesCount} identities, and the ${keyringTypesWithMissingIdentities} keyrings included accounts with missing identities. Meanwhile, there are ${accountTrackerCount} accounts in the account tracker.`));
          }
        })
      },
      unrestrictedMethods: _permissions2.unrestrictedMethods
    });
    this.permissionLogController = new _permissions2.PermissionLogController({
      restrictedMethods: new Set(Object.keys(_permissions.RestrictedMethods)),
      initState: initState.PermissionLogController
    });
    this.subjectMetadataController = new _subjectMetadataController.SubjectMetadataController({
      messenger: this.controllerMessenger.getRestricted({
        name: 'SubjectMetadataController',
        allowedActions: [`${this.permissionController.name}:hasPermissions`]
      }),
      state: initState.SubjectMetadataController,
      subjectCacheLimit: 100
    });
    const detectTokensControllerMessenger = this.controllerMessenger.getRestricted({
      name: 'DetectTokensController',
      allowedEvents: ['NetworkController:stateChange']
    });
    this.detectTokensController = new _detectTokens.default({
      messenger: detectTokensControllerMessenger,
      preferences: this.preferencesController,
      tokensController: this.tokensController,
      assetsContractController: this.assetsContractController,
      network: this.networkController,
      keyringMemStore: this.keyringController.memStore,
      tokenList: this.tokenListController,
      trackMetaMetricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController)
    });
    this.addressBookController = new _addressBookController.AddressBookController(undefined, initState.AddressBookController);
    this.alertController = new _alert.default({
      initState: initState.AlertController,
      preferencesStore: this.preferencesController.store
    });
    this.backupController = new _backup.default({
      preferencesController: this.preferencesController,
      addressBookController: this.addressBookController,
      networkController: this.networkController,
      trackMetaMetricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController)
    });
    this.txController = new _transactions.default({
      initState: initState.TransactionController || initState.TransactionManager,
      getPermittedAccounts: this.getPermittedAccounts.bind(this),
      getProviderConfig: () => this.networkController.state.providerConfig,
      getCurrentNetworkEIP1559Compatibility: this.networkController.getEIP1559Compatibility.bind(this.networkController),
      getCurrentAccountEIP1559Compatibility: this.getCurrentAccountEIP1559Compatibility.bind(this),
      getNetworkId: () => this.networkController.state.networkId,
      getNetworkStatus: () => this.networkController.state.networkStatus,
      onNetworkStateChange: listener => {
        networkControllerMessenger.subscribe('NetworkController:stateChange', () => listener(), ({
          networkId
        }) => networkId);
      },
      getCurrentChainId: () => this.networkController.state.providerConfig.chainId,
      preferencesStore: this.preferencesController.store,
      txHistoryLimit: 60,
      signTransaction: this.keyringController.signTransaction.bind(this.keyringController),
      provider: this.provider,
      blockTracker: this.blockTracker,
      createEventFragment: this.metaMetricsController.createEventFragment.bind(this.metaMetricsController),
      updateEventFragment: this.metaMetricsController.updateEventFragment.bind(this.metaMetricsController),
      finalizeEventFragment: this.metaMetricsController.finalizeEventFragment.bind(this.metaMetricsController),
      getEventFragmentById: this.metaMetricsController.getEventFragmentById.bind(this.metaMetricsController),
      trackMetaMetricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController),
      getParticipateInMetrics: () => this.metaMetricsController.state.participateInMetaMetrics,
      getEIP1559GasFeeEstimates: this.gasFeeController.fetchGasFeeEstimates.bind(this.gasFeeController),
      getExternalPendingTransactions: this.getExternalPendingTransactions.bind(this),
      getAccountType: this.getAccountType.bind(this),
      getDeviceModel: this.getDeviceModel.bind(this),
      getTokenStandardAndDetails: this.getTokenStandardAndDetails.bind(this),
      securityProviderRequest: this.securityProviderRequest.bind(this),
      messenger: this.controllerMessenger.getRestricted({
        name: 'TransactionController',
        allowedActions: [`${this.approvalController.name}:addRequest`, `${this.approvalController.name}:acceptRequest`, `${this.approvalController.name}:rejectRequest`]
      })
    });
    this.txController.on(`tx:status-update`, async (txId, status) => {
      if (status === _transaction.TransactionStatus.confirmed || status === _transaction.TransactionStatus.failed) {
        const txMeta = this.txController.txStateManager.getTransaction(txId);
        let rpcPrefs = {};
        if (txMeta.chainId) {
          const {
            networkConfigurations
          } = this.networkController.state;
          const matchingNetworkConfig = Object.values(networkConfigurations).find(networkConfiguration => networkConfiguration.chainId === txMeta.chainId);
          rpcPrefs = (matchingNetworkConfig === null || matchingNetworkConfig === void 0 ? void 0 : matchingNetworkConfig.rpcPrefs) ?? {};
        }
        try {
          await this.platform.showTransactionNotification(txMeta, rpcPrefs);
        } catch (error) {
          _loglevel.default.error('Failed to create transaction notification', error);
        }
        const {
          txReceipt
        } = txMeta;

        // if this is a transferFrom method generated from within the app it may be an NFT transfer transaction
        // in which case we will want to check and update ownership status of the transferred NFT.
        if (txMeta.type === _transaction.TransactionType.tokenMethodTransferFrom && txMeta.txParams !== undefined) {
          var _allNfts$userAddress, _allNfts$userAddress$;
          const {
            data,
            to: contractAddress,
            from: userAddress
          } = txMeta.txParams;
          const {
            chainId
          } = txMeta;
          const transactionData = (0, _transaction2.parseStandardTokenTransactionData)(data);
          // Sometimes the tokenId value is parsed as "_value" param. Not seeing this often any more, but still occasionally:
          // i.e. call approve() on BAYC contract - https://etherscan.io/token/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d#writeContract, and tokenId shows up as _value,
          // not sure why since it doesn't match the ERC721 ABI spec we use to parse these transactions - https://github.com/MetaMask/metamask-eth-abis/blob/d0474308a288f9252597b7c93a3a8deaad19e1b2/src/abis/abiERC721.ts#L62.
          const transactionDataTokenId = (0, _tokenUtil.getTokenIdParam)(transactionData) ?? (0, _metamaskControllerUtils.getTokenValueParam)(transactionData);
          const {
            allNfts
          } = this.nftController.state;

          // check if its a known NFT
          const knownNft = allNfts === null || allNfts === void 0 ? void 0 : (_allNfts$userAddress = allNfts[userAddress]) === null || _allNfts$userAddress === void 0 ? void 0 : (_allNfts$userAddress$ = _allNfts$userAddress[chainId]) === null || _allNfts$userAddress$ === void 0 ? void 0 : _allNfts$userAddress$.find(({
            address,
            tokenId
          }) => (0, _stringUtils.isEqualCaseInsensitive)(address, contractAddress) && tokenId === transactionDataTokenId);

          // if it is we check and update ownership status.
          if (knownNft) {
            this.nftController.checkAndUpdateSingleNftOwnershipStatus(knownNft, false, {
              userAddress,
              chainId
            });
          }
        }
        const metamaskState = this.getState();
        if (txReceipt && txReceipt.status === '0x0') {
          var _txMeta$simulationFai;
          this.metaMetricsController.trackEvent({
            event: 'Tx Status Update: On-Chain Failure',
            category: _metametrics.MetaMetricsEventCategory.Background,
            properties: {
              action: 'Transactions',
              errorMessage: (_txMeta$simulationFai = txMeta.simulationFails) === null || _txMeta$simulationFai === void 0 ? void 0 : _txMeta$simulationFai.reason,
              numberOfTokens: metamaskState.tokens.length,
              numberOfAccounts: Object.keys(metamaskState.accounts).length
            }
          }, {
            matomoEvent: true
          });
        }
      }
    });
    networkControllerMessenger.subscribe('NetworkController:networkDidChange', async () => {
      const {
        ticker
      } = this.networkController.state.providerConfig;
      try {
        await this.currencyRateController.setNativeCurrency(ticker);
      } catch (error) {
        // TODO: Handle failure to get conversion rate more gracefully
        console.error(error);
      }
    });
    this.networkController.lookupNetwork();
    this.decryptMessageController = new _decryptMessage.default({
      getState: this.getState.bind(this),
      keyringController: this.keyringController,
      messenger: this.controllerMessenger.getRestricted({
        name: 'DecryptMessageController',
        allowedActions: [`${this.approvalController.name}:addRequest`, `${this.approvalController.name}:acceptRequest`, `${this.approvalController.name}:rejectRequest`]
      }),
      metricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController)
    });
    this.encryptionPublicKeyController = new _encryptionPublicKey.default({
      messenger: this.controllerMessenger.getRestricted({
        name: 'EncryptionPublicKeyController',
        allowedActions: [`${this.approvalController.name}:addRequest`, `${this.approvalController.name}:acceptRequest`, `${this.approvalController.name}:rejectRequest`]
      }),
      keyringController: this.keyringController,
      getState: this.getState.bind(this),
      metricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController)
    });
    this.signatureController = new _signatureController.SignatureController({
      messenger: this.controllerMessenger.getRestricted({
        name: 'SignatureController',
        allowedActions: [`${this.approvalController.name}:addRequest`]
      }),
      keyringController: this.keyringController,
      isEthSignEnabled: () => {
        var _this$preferencesCont, _this$preferencesCont2;
        return (_this$preferencesCont = this.preferencesController.store.getState()) === null || _this$preferencesCont === void 0 ? void 0 : (_this$preferencesCont2 = _this$preferencesCont.disabledRpcMethodPreferences) === null || _this$preferencesCont2 === void 0 ? void 0 : _this$preferencesCont2.eth_sign;
      },
      getAllState: this.getState.bind(this),
      securityProviderRequest: this.securityProviderRequest.bind(this),
      getCurrentChainId: () => this.networkController.state.providerConfig.chainId
    });
    this.signatureController.hub.on('cancelWithReason', ({
      message,
      reason
    }) => {
      this.metaMetricsController.trackEvent({
        event: reason,
        category: _metametrics.MetaMetricsEventCategory.Transactions,
        properties: {
          action: 'Sign Request',
          type: message.type
        }
      });
    });
    this.swapsController = new _swaps2.default({
      getBufferedGasLimit: this.txController.txGasUtil.getBufferedGasLimit.bind(this.txController.txGasUtil),
      networkController: this.networkController,
      onNetworkStateChange: networkControllerMessenger.subscribe.bind(networkControllerMessenger, 'NetworkController:stateChange'),
      provider: this.provider,
      getProviderConfig: () => this.networkController.state.providerConfig,
      getTokenRatesState: () => this.tokenRatesController.state,
      getCurrentChainId: () => this.networkController.state.providerConfig.chainId,
      getEIP1559GasFeeEstimates: this.gasFeeController.fetchGasFeeEstimates.bind(this.gasFeeController)
    }, initState.SwapsController);
    this.smartTransactionsController = new _smartTransactionsController.default({
      onNetworkStateChange: networkControllerMessenger.subscribe.bind(networkControllerMessenger, 'NetworkController:stateChange'),
      getNetwork: () => this.networkController.state.networkId ?? 'loading',
      getNonceLock: this.txController.nonceTracker.getNonceLock.bind(this.txController.nonceTracker),
      confirmExternalTransaction: this.txController.confirmExternalTransaction.bind(this.txController),
      provider: this.provider,
      trackMetaMetricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController)
    }, {
      supportedChainIds: [_network.CHAIN_IDS.MAINNET, _network.CHAIN_IDS.GOERLI]
    }, initState.SmartTransactionsController);
    this.txController.on('newSwapApproval', txMeta => {
      this.swapsController.setApproveTxId(txMeta.id);
    });
    this.txController.on('newSwap', txMeta => {
      this.swapsController.setTradeTxId(txMeta.id);
    });

    // ensure accountTracker updates balances after network change
    networkControllerMessenger.subscribe('NetworkController:networkDidChange', () => {
      this.accountTracker._updateAccounts();
    });

    // clear unapproved transactions and messages when the network will change
    networkControllerMessenger.subscribe('NetworkController:networkWillChange', () => {
      this.txController.txStateManager.clearUnapprovedTxs();
      this.encryptionPublicKeyController.clearUnapproved();
      this.decryptMessageController.clearUnapproved();
      this.signatureController.clearUnapproved();
    });
    if (_mv.isManifestV3 && globalThis.isFirstTimeProfileLoaded === undefined) {
      const {
        serviceWorkerLastActiveTime
      } = this.appStateController.store.getState();
      const metametricsPayload = {
        category: _metametrics.MetaMetricsEventCategory.ServiceWorkers,
        event: _metametrics.MetaMetricsEventName.ServiceWorkerRestarted,
        properties: {
          service_worker_restarted_time: Date.now() - serviceWorkerLastActiveTime
        }
      };
      try {
        this.metaMetricsController.trackEvent(metametricsPayload);
      } catch (e) {
        _loglevel.default.warn('Failed to track service worker restart metric:', e);
      }
    }
    this.metamaskMiddleware = (0, _createMetamaskMiddleware.default)({
      static: {
        eth_syncing: false,
        web3_clientVersion: `MetaMask/v${version}`
      },
      version,
      // account mgmt
      getAccounts: async ({
        origin: innerOrigin
      }, {
        suppressUnauthorizedError = true
      } = {}) => {
        if (innerOrigin === _app.ORIGIN_METAMASK) {
          const selectedAddress = this.preferencesController.getSelectedAddress();
          return selectedAddress ? [selectedAddress] : [];
        } else if (this.isUnlocked()) {
          return await this.getPermittedAccounts(innerOrigin, {
            suppressUnauthorizedError
          });
        }
        return []; // changing this is a breaking change
      },

      // tx signing
      processTransaction: this.newUnapprovedTransaction.bind(this),
      // msg signing
      processEthSignMessage: this.signatureController.newUnsignedMessage.bind(this.signatureController),
      processTypedMessage: this.signatureController.newUnsignedTypedMessage.bind(this.signatureController),
      processTypedMessageV3: this.signatureController.newUnsignedTypedMessage.bind(this.signatureController),
      processTypedMessageV4: this.signatureController.newUnsignedTypedMessage.bind(this.signatureController),
      processPersonalMessage: this.signatureController.newUnsignedPersonalMessage.bind(this.signatureController),
      processEncryptionPublicKey: this.encryptionPublicKeyController.newRequestEncryptionPublicKey.bind(this.encryptionPublicKeyController),
      processDecryptMessage: this.decryptMessageController.newRequestDecryptMessage.bind(this.decryptMessageController),
      getPendingNonce: this.getPendingNonce.bind(this),
      getPendingTransactionByHash: hash => this.txController.getTransactions({
        searchCriteria: {
          hash,
          status: _transaction.TransactionStatus.submitted
        }
      })[0]
    });

    // ensure isClientOpenAndUnlocked is updated when memState updates
    this.on('update', memState => this._onStateUpdate(memState));

    /**
     * All controllers in Memstore but not in store. They are not persisted.
     * On chrome profile re-start, they will be re-initialized.
     */
    const resetOnRestartStore = {
      AccountTracker: this.accountTracker.store,
      TxController: this.txController.memStore,
      TokenRatesController: this.tokenRatesController,
      DecryptMessageController: this.decryptMessageController,
      EncryptionPublicKeyController: this.encryptionPublicKeyController,
      SignatureController: this.signatureController,
      SwapsController: this.swapsController.store,
      EnsController: this.ensController.store,
      ApprovalController: this.approvalController
    };
    this.store.updateStructure({
      AppStateController: this.appStateController.store,
      TransactionController: this.txController.store,
      KeyringController: this.keyringController.store,
      PreferencesController: this.preferencesController.store,
      MetaMetricsController: this.metaMetricsController.store,
      AddressBookController: this.addressBookController,
      CurrencyController: this.currencyRateController,
      NetworkController: this.networkController,
      CachedBalancesController: this.cachedBalancesController.store,
      AlertController: this.alertController.store,
      OnboardingController: this.onboardingController.store,
      IncomingTransactionsController: this.incomingTransactionsController.store,
      PermissionController: this.permissionController,
      PermissionLogController: this.permissionLogController.store,
      SubjectMetadataController: this.subjectMetadataController,
      BackupController: this.backupController,
      AnnouncementController: this.announcementController,
      GasFeeController: this.gasFeeController,
      TokenListController: this.tokenListController,
      TokensController: this.tokensController,
      SmartTransactionsController: this.smartTransactionsController,
      NftController: this.nftController,
      PhishingController: this.phishingController,
      ...resetOnRestartStore
    });
    this.memStore = new _ComposableObservableStore.default({
      config: {
        AppStateController: this.appStateController.store,
        NetworkController: this.networkController,
        CachedBalancesController: this.cachedBalancesController.store,
        KeyringController: this.keyringController.memStore,
        PreferencesController: this.preferencesController.store,
        MetaMetricsController: this.metaMetricsController.store,
        AddressBookController: this.addressBookController,
        CurrencyController: this.currencyRateController,
        AlertController: this.alertController.store,
        OnboardingController: this.onboardingController.store,
        IncomingTransactionsController: this.incomingTransactionsController.store,
        PermissionController: this.permissionController,
        PermissionLogController: this.permissionLogController.store,
        SubjectMetadataController: this.subjectMetadataController,
        BackupController: this.backupController,
        AnnouncementController: this.announcementController,
        GasFeeController: this.gasFeeController,
        TokenListController: this.tokenListController,
        TokensController: this.tokensController,
        SmartTransactionsController: this.smartTransactionsController,
        NftController: this.nftController,
        ...resetOnRestartStore
      },
      controllerMessenger: this.controllerMessenger
    });

    // if this is the first time, clear the state of by calling these methods
    const resetMethods = [this.accountTracker.resetState, this.txController.resetState, this.decryptMessageController.resetState.bind(this.decryptMessageController), this.encryptionPublicKeyController.resetState.bind(this.encryptionPublicKeyController), this.signatureController.resetState.bind(this.signatureController), this.swapsController.resetState, this.ensController.resetState, this.approvalController.clear.bind(this.approvalController)

    // WE SHOULD ADD TokenListController.resetState here too. But it's not implemented yet.
    ];

    if (_mv.isManifestV3) {
      if (isFirstMetaMaskControllerSetup === true) {
        this.resetStates(resetMethods);
        this.extension.storage.session.set({
          isFirstMetaMaskControllerSetup: false
        });
      }
    } else {
      // it's always the first time in MV2
      this.resetStates(resetMethods);
    }

    // Automatic login via config password or loginToken
    if (!this.isUnlocked() && this.onboardingController.store.getState().completedOnboarding) {
      this._loginUser();
    } else {
      this._startUISync();
    }

    // Lazily update the store with the current extension environment
    this.extension.runtime.getPlatformInfo().then(({
      os
    }) => {
      this.appStateController.setBrowserEnvironment(os,
      // This method is presently only supported by Firefox
      this.extension.runtime.getBrowserInfo === undefined ? 'chrome' : 'firefox');
    });
    this.setupControllerEventSubscriptions();

    // For more information about these legacy streams, see here:
    // https://github.com/MetaMask/metamask-extension/issues/15491
    // TODO:LegacyProvider: Delete
    this.publicConfigStore = this.createPublicConfigStore();

    // Multiple MetaMask instances launched warning
    this.extension.runtime.onMessageExternal.addListener(_detectMultipleInstances.onMessageReceived);
    // Fire a ping message to check if other extensions are running
    (0, _detectMultipleInstances.checkForMultipleVersionsRunning)();
  }
  triggerNetworkrequests() {
    this.accountTracker.start();
    this.incomingTransactionsController.start();
    if (this.preferencesController.store.getState().useCurrencyRateCheck) {
      this.currencyRateController.start();
    }
    if (this.preferencesController.store.getState().useTokenDetection) {
      this.tokenListController.start();
    }
  }
  stopNetworkRequests() {
    this.accountTracker.stop();
    this.incomingTransactionsController.stop();
    if (this.preferencesController.store.getState().useCurrencyRateCheck) {
      this.currencyRateController.stop();
    }
    if (this.preferencesController.store.getState().useTokenDetection) {
      this.tokenListController.stop();
    }
  }
  canUseHardwareWallets() {
    return !_mv.isManifestV3 || false;
  }
  resetStates(resetMethods) {
    resetMethods.forEach(resetMethod => {
      try {
        resetMethod();
      } catch (err) {
        console.error(err);
      }
    });
  }

  /**
   * Sets up BaseController V2 event subscriptions. Currently, this includes
   * the subscriptions necessary to notify permission subjects of account
   * changes.
   *
   * Some of the subscriptions in this method are ControllerMessenger selector
   * event subscriptions. See the relevant documentation for
   * `@metamask/base-controller` for more information.
   *
   * Note that account-related notifications emitted when the extension
   * becomes unlocked are handled in MetaMaskController._onUnlock.
   */
  setupControllerEventSubscriptions() {
    const handleAccountsChange = async (origin, newAccounts) => {
      if (this.isUnlocked()) {
        this.notifyConnections(origin, {
          method: _permissions2.NOTIFICATION_NAMES.accountsChanged,
          // This should be the same as the return value of `eth_accounts`,
          // namely an array of the current / most recently selected Ethereum
          // account.
          params: newAccounts.length < 2 ?
          // If the length is 1 or 0, the accounts are sorted by definition.
          newAccounts :
          // If the length is 2 or greater, we have to execute
          // `eth_accounts` vi this method.
          await this.getPermittedAccounts(origin)
        });
      }
      this.permissionLogController.updateAccountsHistory(origin, newAccounts);
    };

    // This handles account changes whenever the selected address changes.
    let lastSelectedAddress;
    this.preferencesController.store.subscribe(async ({
      selectedAddress
    }) => {
      if (selectedAddress && selectedAddress !== lastSelectedAddress) {
        lastSelectedAddress = selectedAddress;
        const permittedAccountsMap = (0, _permissions2.getPermittedAccountsByOrigin)(this.permissionController.state);
        for (const [origin, accounts] of permittedAccountsMap.entries()) {
          if (accounts.includes(selectedAddress)) {
            handleAccountsChange(origin, accounts);
          }
        }
      }
    });

    // This handles account changes every time relevant permission state
    // changes, for any reason.
    this.controllerMessenger.subscribe(`${this.permissionController.name}:stateChange`, async (currentValue, previousValue) => {
      const changedAccounts = (0, _permissions2.getChangedAccounts)(currentValue, previousValue);
      for (const [origin, accounts] of changedAccounts.entries()) {
        handleAccountsChange(origin, accounts);
      }
    }, _permissions2.getPermittedAccountsByOrigin);
  }

  /**
   * TODO:LegacyProvider: Delete
   * Constructor helper: initialize a public config store.
   * This store is used to make some config info available to Dapps synchronously.
   */
  createPublicConfigStore() {
    // subset of state for metamask inpage provider
    const publicConfigStore = new _obsStore.ObservableStore();
    const {
      networkController
    } = this;

    // setup memStore subscription hooks
    this.on('update', updatePublicConfigStore);
    updatePublicConfigStore(this.getState());
    function updatePublicConfigStore(memState) {
      const {
        chainId
      } = networkController.state.providerConfig;
      if (memState.networkStatus === _network.NetworkStatus.Available) {
        publicConfigStore.putState(selectPublicState(chainId, memState));
      }
    }
    function selectPublicState(chainId, {
      isUnlocked,
      networkId
    }) {
      return {
        isUnlocked,
        chainId,
        networkVersion: networkId ?? 'loading'
      };
    }
    return publicConfigStore;
  }

  /**
   * Gets relevant state for the provider of an external origin.
   *
   * @param {string} origin - The origin to get the provider state for.
   * @returns {Promise<{ isUnlocked: boolean, networkVersion: string, chainId: string, accounts: string[] }>} An object with relevant state properties.
   */
  async getProviderState(origin) {
    return {
      isUnlocked: this.isUnlocked(),
      ...this.getProviderNetworkState(),
      accounts: await this.getPermittedAccounts(origin)
    };
  }

  /**
   * Gets network state relevant for external providers.
   *
   * @param {object} [memState] - The MetaMask memState. If not provided,
   * this function will retrieve the most recent state.
   * @returns {object} An object with relevant network state properties.
   */
  getProviderNetworkState(memState) {
    const {
      networkId
    } = memState || this.getState();
    return {
      chainId: this.networkController.state.providerConfig.chainId,
      networkVersion: networkId ?? 'loading'
    };
  }

  //=============================================================================
  // EXPOSED TO THE UI SUBSYSTEM
  //=============================================================================

  /**
   * The metamask-state of the various controllers, made available to the UI
   *
   * @returns {object} status
   */
  getState() {
    const {
      vault
    } = this.keyringController.store.getState();
    const isInitialized = Boolean(vault);
    return {
      isInitialized,
      ...this.memStore.getFlatState()
    };
  }

  /**
   * Returns an Object containing API Callback Functions.
   * These functions are the interface for the UI.
   * The API object can be transmitted over a stream via JSON-RPC.
   *
   * @returns {object} Object containing API functions.
   */
  getApi() {
    const {
      addressBookController,
      alertController,
      appStateController,
      nftController,
      nftDetectionController,
      currencyRateController,
      detectTokensController,
      ensController,
      gasFeeController,
      metaMetricsController,
      networkController,
      announcementController,
      onboardingController,
      permissionController,
      preferencesController,
      qrHardwareKeyring,
      swapsController,
      tokensController,
      smartTransactionsController,
      txController,
      assetsContractController,
      backupController,
      approvalController
    } = this;
    return {
      // etc
      getState: this.getState.bind(this),
      setCurrentCurrency: currencyRateController.setCurrentCurrency.bind(currencyRateController),
      setUseBlockie: preferencesController.setUseBlockie.bind(preferencesController),
      setUseNonceField: preferencesController.setUseNonceField.bind(preferencesController),
      setUsePhishDetect: preferencesController.setUsePhishDetect.bind(preferencesController),
      setUseMultiAccountBalanceChecker: preferencesController.setUseMultiAccountBalanceChecker.bind(preferencesController),
      setUseTokenDetection: preferencesController.setUseTokenDetection.bind(preferencesController),
      setUseNftDetection: preferencesController.setUseNftDetection.bind(preferencesController),
      setUseCurrencyRateCheck: preferencesController.setUseCurrencyRateCheck.bind(preferencesController),
      setOpenSeaEnabled: preferencesController.setOpenSeaEnabled.bind(preferencesController),
      setIpfsGateway: preferencesController.setIpfsGateway.bind(preferencesController),
      setParticipateInMetaMetrics: metaMetricsController.setParticipateInMetaMetrics.bind(metaMetricsController),
      setCurrentLocale: preferencesController.setCurrentLocale.bind(preferencesController),
      markPasswordForgotten: this.markPasswordForgotten.bind(this),
      unMarkPasswordForgotten: this.unMarkPasswordForgotten.bind(this),
      getRequestAccountTabIds: this.getRequestAccountTabIds,
      getOpenMetamaskTabsIds: this.getOpenMetamaskTabsIds,
      markNotificationPopupAsAutomaticallyClosed: () => this.notificationManager.markAsAutomaticallyClosed(),
      // approval
      requestUserApproval: approvalController.addAndShowApprovalRequest.bind(approvalController),
      // primary HD keyring management
      addNewAccount: this.addNewAccount.bind(this),
      verifySeedPhrase: this.verifySeedPhrase.bind(this),
      resetAccount: this.resetAccount.bind(this),
      removeAccount: this.removeAccount.bind(this),
      importAccountWithStrategy: this.importAccountWithStrategy.bind(this),
      // hardware wallets
      connectHardware: this.connectHardware.bind(this),
      forgetDevice: this.forgetDevice.bind(this),
      checkHardwareStatus: this.checkHardwareStatus.bind(this),
      unlockHardwareWalletAccount: this.unlockHardwareWalletAccount.bind(this),
      setLedgerTransportPreference: this.setLedgerTransportPreference.bind(this),
      attemptLedgerTransportCreation: this.attemptLedgerTransportCreation.bind(this),
      establishLedgerTransportPreference: this.establishLedgerTransportPreference.bind(this),
      // qr hardware devices
      submitQRHardwareCryptoHDKey: qrHardwareKeyring.submitCryptoHDKey.bind(qrHardwareKeyring),
      submitQRHardwareCryptoAccount: qrHardwareKeyring.submitCryptoAccount.bind(qrHardwareKeyring),
      cancelSyncQRHardware: qrHardwareKeyring.cancelSync.bind(qrHardwareKeyring),
      submitQRHardwareSignature: qrHardwareKeyring.submitSignature.bind(qrHardwareKeyring),
      cancelQRHardwareSignRequest: qrHardwareKeyring.cancelSignRequest.bind(qrHardwareKeyring),
      // vault management
      submitPassword: this.submitPassword.bind(this),
      verifyPassword: this.verifyPassword.bind(this),
      // network management
      setProviderType: networkController.setProviderType.bind(networkController),
      rollbackToPreviousProvider: networkController.rollbackToPreviousProvider.bind(networkController),
      removeNetworkConfiguration: networkController.removeNetworkConfiguration.bind(networkController),
      setActiveNetwork: networkController.setActiveNetwork.bind(networkController),
      upsertNetworkConfiguration: this.networkController.upsertNetworkConfiguration.bind(this.networkController),
      getCurrentNetworkEIP1559Compatibility: this.networkController.getEIP1559Compatibility.bind(this.networkController),
      // PreferencesController
      setSelectedAddress: preferencesController.setSelectedAddress.bind(preferencesController),
      addToken: tokensController.addToken.bind(tokensController),
      updateTokenType: tokensController.updateTokenType.bind(tokensController),
      setAccountLabel: preferencesController.setAccountLabel.bind(preferencesController),
      setFeatureFlag: preferencesController.setFeatureFlag.bind(preferencesController),
      setPreference: preferencesController.setPreference.bind(preferencesController),
      addKnownMethodData: preferencesController.addKnownMethodData.bind(preferencesController),
      setDismissSeedBackUpReminder: preferencesController.setDismissSeedBackUpReminder.bind(preferencesController),
      setDisabledRpcMethodPreference: preferencesController.setDisabledRpcMethodPreference.bind(preferencesController),
      getRpcMethodPreferences: preferencesController.getRpcMethodPreferences.bind(preferencesController),
      setAdvancedGasFee: preferencesController.setAdvancedGasFee.bind(preferencesController),
      setTheme: preferencesController.setTheme.bind(preferencesController),
      setTransactionSecurityCheckEnabled: preferencesController.setTransactionSecurityCheckEnabled.bind(preferencesController),
      // AssetsContractController
      getTokenStandardAndDetails: this.getTokenStandardAndDetails.bind(this),
      // NftController
      addNft: nftController.addNft.bind(nftController),
      addNftVerifyOwnership: nftController.addNftVerifyOwnership.bind(nftController),
      removeAndIgnoreNft: nftController.removeAndIgnoreNft.bind(nftController),
      removeNft: nftController.removeNft.bind(nftController),
      checkAndUpdateAllNftsOwnershipStatus: nftController.checkAndUpdateAllNftsOwnershipStatus.bind(nftController),
      checkAndUpdateSingleNftOwnershipStatus: nftController.checkAndUpdateSingleNftOwnershipStatus.bind(nftController),
      isNftOwner: nftController.isNftOwner.bind(nftController),
      // AddressController
      setAddressBook: addressBookController.set.bind(addressBookController),
      removeFromAddressBook: addressBookController.delete.bind(addressBookController),
      // AppStateController
      setLastActiveTime: appStateController.setLastActiveTime.bind(appStateController),
      setDefaultHomeActiveTabName: appStateController.setDefaultHomeActiveTabName.bind(appStateController),
      setConnectedStatusPopoverHasBeenShown: appStateController.setConnectedStatusPopoverHasBeenShown.bind(appStateController),
      setRecoveryPhraseReminderHasBeenShown: appStateController.setRecoveryPhraseReminderHasBeenShown.bind(appStateController),
      setRecoveryPhraseReminderLastShown: appStateController.setRecoveryPhraseReminderLastShown.bind(appStateController),
      setTermsOfUseLastAgreed: appStateController.setTermsOfUseLastAgreed.bind(appStateController),
      setOutdatedBrowserWarningLastShown: appStateController.setOutdatedBrowserWarningLastShown.bind(appStateController),
      setShowTestnetMessageInDropdown: appStateController.setShowTestnetMessageInDropdown.bind(appStateController),
      setShowBetaHeader: appStateController.setShowBetaHeader.bind(appStateController),
      setShowProductTour: appStateController.setShowProductTour.bind(appStateController),
      updateNftDropDownState: appStateController.updateNftDropDownState.bind(appStateController),
      setFirstTimeUsedNetwork: appStateController.setFirstTimeUsedNetwork.bind(appStateController),
      // EnsController
      tryReverseResolveAddress: ensController.reverseResolveAddress.bind(ensController),
      // KeyringController
      setLocked: this.setLocked.bind(this),
      createNewVaultAndKeychain: this.createNewVaultAndKeychain.bind(this),
      createNewVaultAndRestore: this.createNewVaultAndRestore.bind(this),
      exportAccount: this.exportAccount.bind(this),
      // txController
      updateTransaction: txController.updateTransaction.bind(txController),
      approveTransactionsWithSameNonce: txController.approveTransactionsWithSameNonce.bind(txController),
      createCancelTransaction: this.createCancelTransaction.bind(this),
      createSpeedUpTransaction: this.createSpeedUpTransaction.bind(this),
      estimateGas: this.estimateGas.bind(this),
      getNextNonce: this.getNextNonce.bind(this),
      addUnapprovedTransaction: txController.addUnapprovedTransaction.bind(txController),
      createTransactionEventFragment: txController.createTransactionEventFragment.bind(txController),
      getTransactions: txController.getTransactions.bind(txController),
      updateEditableParams: txController.updateEditableParams.bind(txController),
      updateTransactionGasFees: txController.updateTransactionGasFees.bind(txController),
      updateTransactionSendFlowHistory: txController.updateTransactionSendFlowHistory.bind(txController),
      updatePreviousGasParams: txController.updatePreviousGasParams.bind(txController),
      // decryptMessageController
      decryptMessage: this.decryptMessageController.decryptMessage.bind(this.decryptMessageController),
      decryptMessageInline: this.decryptMessageController.decryptMessageInline.bind(this.decryptMessageController),
      cancelDecryptMessage: this.decryptMessageController.cancelDecryptMessage.bind(this.decryptMessageController),
      // EncryptionPublicKeyController
      encryptionPublicKey: this.encryptionPublicKeyController.encryptionPublicKey.bind(this.encryptionPublicKeyController),
      cancelEncryptionPublicKey: this.encryptionPublicKeyController.cancelEncryptionPublicKey.bind(this.encryptionPublicKeyController),
      // onboarding controller
      setSeedPhraseBackedUp: onboardingController.setSeedPhraseBackedUp.bind(onboardingController),
      completeOnboarding: onboardingController.completeOnboarding.bind(onboardingController),
      setFirstTimeFlowType: onboardingController.setFirstTimeFlowType.bind(onboardingController),
      // alert controller
      setAlertEnabledness: alertController.setAlertEnabledness.bind(alertController),
      setUnconnectedAccountAlertShown: alertController.setUnconnectedAccountAlertShown.bind(alertController),
      setWeb3ShimUsageAlertDismissed: alertController.setWeb3ShimUsageAlertDismissed.bind(alertController),
      // permissions
      removePermissionsFor: this.removePermissionsFor,
      approvePermissionsRequest: this.acceptPermissionsRequest,
      rejectPermissionsRequest: this.rejectPermissionsRequest,
      ...(0, _permissions2.getPermissionBackgroundApiMethods)(permissionController),
      // swaps
      fetchAndSetQuotes: swapsController.fetchAndSetQuotes.bind(swapsController),
      setSelectedQuoteAggId: swapsController.setSelectedQuoteAggId.bind(swapsController),
      resetSwapsState: swapsController.resetSwapsState.bind(swapsController),
      setSwapsTokens: swapsController.setSwapsTokens.bind(swapsController),
      clearSwapsQuotes: swapsController.clearSwapsQuotes.bind(swapsController),
      setApproveTxId: swapsController.setApproveTxId.bind(swapsController),
      setTradeTxId: swapsController.setTradeTxId.bind(swapsController),
      setSwapsTxGasPrice: swapsController.setSwapsTxGasPrice.bind(swapsController),
      setSwapsTxGasLimit: swapsController.setSwapsTxGasLimit.bind(swapsController),
      setSwapsTxMaxFeePerGas: swapsController.setSwapsTxMaxFeePerGas.bind(swapsController),
      setSwapsTxMaxFeePriorityPerGas: swapsController.setSwapsTxMaxFeePriorityPerGas.bind(swapsController),
      safeRefetchQuotes: swapsController.safeRefetchQuotes.bind(swapsController),
      stopPollingForQuotes: swapsController.stopPollingForQuotes.bind(swapsController),
      setBackgroundSwapRouteState: swapsController.setBackgroundSwapRouteState.bind(swapsController),
      resetPostFetchState: swapsController.resetPostFetchState.bind(swapsController),
      setSwapsErrorKey: swapsController.setSwapsErrorKey.bind(swapsController),
      setInitialGasEstimate: swapsController.setInitialGasEstimate.bind(swapsController),
      setCustomApproveTxData: swapsController.setCustomApproveTxData.bind(swapsController),
      setSwapsLiveness: swapsController.setSwapsLiveness.bind(swapsController),
      setSwapsFeatureFlags: swapsController.setSwapsFeatureFlags.bind(swapsController),
      setSwapsUserFeeLevel: swapsController.setSwapsUserFeeLevel.bind(swapsController),
      setSwapsQuotesPollingLimitEnabled: swapsController.setSwapsQuotesPollingLimitEnabled.bind(swapsController),
      // Smart Transactions
      setSmartTransactionsOptInStatus: smartTransactionsController.setOptInState.bind(smartTransactionsController),
      fetchSmartTransactionFees: smartTransactionsController.getFees.bind(smartTransactionsController),
      clearSmartTransactionFees: smartTransactionsController.clearFees.bind(smartTransactionsController),
      submitSignedTransactions: smartTransactionsController.submitSignedTransactions.bind(smartTransactionsController),
      cancelSmartTransaction: smartTransactionsController.cancelSmartTransaction.bind(smartTransactionsController),
      fetchSmartTransactionsLiveness: smartTransactionsController.fetchLiveness.bind(smartTransactionsController),
      updateSmartTransaction: smartTransactionsController.updateSmartTransaction.bind(smartTransactionsController),
      setStatusRefreshInterval: smartTransactionsController.setStatusRefreshInterval.bind(smartTransactionsController),
      // MetaMetrics
      trackMetaMetricsEvent: metaMetricsController.trackEvent.bind(metaMetricsController),
      trackMetaMetricsPage: metaMetricsController.trackPage.bind(metaMetricsController),
      createEventFragment: metaMetricsController.createEventFragment.bind(metaMetricsController),
      updateEventFragment: metaMetricsController.updateEventFragment.bind(metaMetricsController),
      finalizeEventFragment: metaMetricsController.finalizeEventFragment.bind(metaMetricsController),
      // approval controller
      resolvePendingApproval: this.resolvePendingApproval,
      rejectPendingApproval: this.rejectPendingApproval,
      // Notifications
      updateViewedNotifications: announcementController.updateViewed.bind(announcementController),
      // GasFeeController
      getGasFeeEstimatesAndStartPolling: gasFeeController.getGasFeeEstimatesAndStartPolling.bind(gasFeeController),
      disconnectGasFeeEstimatePoller: gasFeeController.disconnectPoller.bind(gasFeeController),
      getGasFeeTimeEstimate: gasFeeController.getTimeEstimate.bind(gasFeeController),
      addPollingTokenToAppState: appStateController.addPollingToken.bind(appStateController),
      removePollingTokenFromAppState: appStateController.removePollingToken.bind(appStateController),
      // BackupController
      backupUserData: backupController.backupUserData.bind(backupController),
      restoreUserData: backupController.restoreUserData.bind(backupController),
      // DetectTokenController
      detectNewTokens: detectTokensController.detectNewTokens.bind(detectTokensController),
      // DetectCollectibleController
      detectNfts: nftDetectionController.detectNfts.bind(nftDetectionController),
      /** Token Detection V2 */
      addDetectedTokens: tokensController.addDetectedTokens.bind(tokensController),
      addImportedTokens: tokensController.addTokens.bind(tokensController),
      ignoreTokens: tokensController.ignoreTokens.bind(tokensController),
      getBalancesInSingleCall: assetsContractController.getBalancesInSingleCall.bind(assetsContractController)
    };
  }
  async exportAccount(address, password) {
    await this.verifyPassword(password);
    return this.keyringController.exportAccount(address, password);
  }
  async getTokenStandardAndDetails(address, userAddress, tokenId) {
    var _details, _details$decimals, _details2, _details2$balance;
    const {
      tokenList
    } = this.tokenListController.state;
    const {
      tokens
    } = this.tokensController.state;
    const staticTokenListDetails = _tokens.STATIC_MAINNET_TOKEN_LIST[address.toLowerCase()] || {};
    const tokenListDetails = tokenList[address.toLowerCase()] || {};
    const userDefinedTokenDetails = tokens.find(({
      address: _address
    }) => (0, _stringUtils.isEqualCaseInsensitive)(_address, address)) || {};
    const tokenDetails = {
      ...staticTokenListDetails,
      ...tokenListDetails,
      ...userDefinedTokenDetails
    };
    const tokenDetailsStandardIsERC20 = (0, _stringUtils.isEqualCaseInsensitive)(tokenDetails.standard, _transaction.TokenStandard.ERC20) || tokenDetails.erc20 === true;
    const noEvidenceThatTokenIsAnNFT = !tokenId && !(0, _stringUtils.isEqualCaseInsensitive)(tokenDetails.standard, _transaction.TokenStandard.ERC1155) && !(0, _stringUtils.isEqualCaseInsensitive)(tokenDetails.standard, _transaction.TokenStandard.ERC721) && !tokenDetails.erc721;
    const otherDetailsAreERC20Like = tokenDetails.decimals !== undefined && tokenDetails.symbol;
    const tokenCanBeTreatedAsAnERC20 = tokenDetailsStandardIsERC20 || noEvidenceThatTokenIsAnNFT && otherDetailsAreERC20Like;
    let details;
    if (tokenCanBeTreatedAsAnERC20) {
      try {
        const balance = await (0, _tokenUtil.fetchTokenBalance)(address, userAddress, this.provider);
        details = {
          address,
          balance,
          standard: _transaction.TokenStandard.ERC20,
          decimals: tokenDetails.decimals,
          symbol: tokenDetails.symbol
        };
      } catch (e) {
        // If the `fetchTokenBalance` call failed, `details` remains undefined, and we
        // fall back to the below `assetsContractController.getTokenStandardAndDetails` call
        _loglevel.default.warning(`Failed to get token balance. Error: ${e}`);
      }
    }

    // `details`` will be undefined if `tokenCanBeTreatedAsAnERC20`` is false,
    // or if it is true but the `fetchTokenBalance`` call failed. In either case, we should
    // attempt to retrieve details from `assetsContractController.getTokenStandardAndDetails`
    if (details === undefined) {
      details = await this.assetsContractController.getTokenStandardAndDetails(address, userAddress, tokenId);
    }
    return {
      ...details,
      decimals: (_details = details) === null || _details === void 0 ? void 0 : (_details$decimals = _details.decimals) === null || _details$decimals === void 0 ? void 0 : _details$decimals.toString(10),
      balance: (_details2 = details) === null || _details2 === void 0 ? void 0 : (_details2$balance = _details2.balance) === null || _details2$balance === void 0 ? void 0 : _details2$balance.toString(10)
    };
  }

  //=============================================================================
  // VAULT / KEYRING RELATED METHODS
  //=============================================================================

  /**
   * Creates a new Vault and create a new keychain.
   *
   * A vault, or KeyringController, is a controller that contains
   * many different account strategies, currently called Keyrings.
   * Creating it new means wiping all previous keyrings.
   *
   * A keychain, or keyring, controls many accounts with a single backup and signing strategy.
   * For example, a mnemonic phrase can generate many accounts, and is a keyring.
   *
   * @param {string} password
   * @returns {object} vault
   */
  async createNewVaultAndKeychain(password) {
    const releaseLock = await this.createVaultMutex.acquire();
    try {
      let vault;
      const accounts = await this.keyringController.getAccounts();
      if (accounts.length > 0) {
        vault = await this.keyringController.fullUpdate();
      } else {
        vault = await this.keyringController.createNewVaultAndKeychain(password);
        const addresses = await this.keyringController.getAccounts();
        this.preferencesController.setAddresses(addresses);
        this.selectFirstIdentity();
      }
      return vault;
    } finally {
      releaseLock();
    }
  }

  /**
   * Create a new Vault and restore an existent keyring.
   *
   * @param {string} password
   * @param {number[]} encodedSeedPhrase - The seed phrase, encoded as an array
   * of UTF-8 bytes.
   */
  async createNewVaultAndRestore(password, encodedSeedPhrase) {
    const releaseLock = await this.createVaultMutex.acquire();
    try {
      let accounts, lastBalance;
      const seedPhraseAsBuffer = Buffer.from(encodedSeedPhrase);
      const {
        keyringController
      } = this;

      // clear known identities
      this.preferencesController.setAddresses([]);

      // clear permissions
      this.permissionController.clearState();

      // clear accounts in accountTracker
      this.accountTracker.clearAccounts();

      // clear cachedBalances
      this.cachedBalancesController.clearCachedBalances();

      // clear unapproved transactions
      this.txController.txStateManager.clearUnapprovedTxs();

      // create new vault
      const vault = await keyringController.createNewVaultAndRestore(password, seedPhraseAsBuffer);
      const ethQuery = new _ethQuery.default(this.provider);
      accounts = await keyringController.getAccounts();
      lastBalance = await this.getBalance(accounts[accounts.length - 1], ethQuery);
      const [primaryKeyring] = keyringController.getKeyringsByType(_keyring.KeyringType.hdKeyTree);
      if (!primaryKeyring) {
        throw new Error('MetamaskController - No HD Key Tree found');
      }

      // seek out the first zero balance
      while (lastBalance !== '0x0') {
        await keyringController.addNewAccount(primaryKeyring);
        accounts = await keyringController.getAccounts();
        lastBalance = await this.getBalance(accounts[accounts.length - 1], ethQuery);
      }

      // remove extra zero balance account potentially created from seeking ahead
      if (accounts.length > 1 && lastBalance === '0x0') {
        await this.removeAccount(accounts[accounts.length - 1]);
        accounts = await keyringController.getAccounts();
      }

      // This must be set as soon as possible to communicate to the
      // keyring's iframe and have the setting initialized properly
      // Optimistically called to not block MetaMask login due to
      // Ledger Keyring GitHub downtime
      const transportPreference = this.preferencesController.getLedgerTransportPreference();
      this.setLedgerTransportPreference(transportPreference);

      // set new identities
      this.preferencesController.setAddresses(accounts);
      this.selectFirstIdentity();
      return vault;
    } finally {
      releaseLock();
    }
  }

  /**
   * Get an account balance from the AccountTracker or request it directly from the network.
   *
   * @param {string} address - The account address
   * @param {EthQuery} ethQuery - The EthQuery instance to use when asking the network
   */
  getBalance(address, ethQuery) {
    return new Promise((resolve, reject) => {
      const cached = this.accountTracker.store.getState().accounts[address];
      if (cached && cached.balance) {
        resolve(cached.balance);
      } else {
        ethQuery.getBalance(address, (error, balance) => {
          if (error) {
            reject(error);
            _loglevel.default.error(error);
          } else {
            resolve(balance || '0x0');
          }
        });
      }
    });
  }

  /**
   * Submits the user's password and attempts to unlock the vault.
   * Also synchronizes the preferencesController, to ensure its schema
   * is up to date with known accounts once the vault is decrypted.
   *
   * @param {string} password - The user's password
   * @returns {Promise<object>} The keyringController update.
   */
  async submitPassword(password) {
    await this.keyringController.submitPassword(password);
    try {
      await this.blockTracker.checkForLatestBlock();
    } catch (error) {
      _loglevel.default.error('Error while unlocking extension.', error);
    }

    // This must be set as soon as possible to communicate to the
    // keyring's iframe and have the setting initialized properly
    // Optimistically called to not block MetaMask login due to
    // Ledger Keyring GitHub downtime
    const transportPreference = this.preferencesController.getLedgerTransportPreference();
    this.setLedgerTransportPreference(transportPreference);
    return this.keyringController.fullUpdate();
  }
  async _loginUser() {
    try {
      // Automatic login via config password
      const password = null;
      if (password && !false) {
        await this.submitPassword(password);
      }
      // Automatic login via storage encryption key
      else if (_mv.isManifestV3) {
        await this.submitEncryptionKey();
      }
      // Updating accounts in this.accountTracker before starting UI syncing ensure that
      // state has account balance before it is synced with UI
      await this.accountTracker._updateAccounts();
    } finally {
      this._startUISync();
    }
  }
  _startUISync() {
    // Message startUISync is used in MV3 to start syncing state with UI
    // Sending this message after login is completed helps to ensure that incomplete state without
    // account details are not flushed to UI.
    this.emit('startUISync');
    this.startUISync = true;
    this.memStore.subscribe(this.sendUpdate.bind(this));
  }

  /**
   * Submits a user's encryption key to log the user in via login token
   */
  async submitEncryptionKey() {
    try {
      const {
        loginToken,
        loginSalt
      } = await this.extension.storage.session.get(['loginToken', 'loginSalt']);
      if (loginToken && loginSalt) {
        const {
          vault
        } = this.keyringController.store.getState();
        const jsonVault = JSON.parse(vault);
        if (jsonVault.salt !== loginSalt) {
          console.warn('submitEncryptionKey: Stored salt and vault salt do not match');
          await this.clearLoginArtifacts();
          return;
        }
        await this.keyringController.submitEncryptionKey(loginToken, loginSalt);
      }
    } catch (e) {
      // If somehow this login token doesn't work properly,
      // remove it and the user will get shown back to the unlock screen
      await this.clearLoginArtifacts();
      throw e;
    }
  }
  async clearLoginArtifacts() {
    await this.extension.storage.session.remove(['loginToken', 'loginSalt']);
  }

  /**
   * Submits a user's password to check its validity.
   *
   * @param {string} password - The user's password
   */
  async verifyPassword(password) {
    await this.keyringController.verifyPassword(password);
  }

  /**
   * @type Identity
   * @property {string} name - The account nickname.
   * @property {string} address - The account's ethereum address, in lower case.
   * receiving funds from our automatic Ropsten faucet.
   */

  /**
   * Sets the first address in the state to the selected address
   */
  selectFirstIdentity() {
    const {
      identities
    } = this.preferencesController.store.getState();
    const [address] = Object.keys(identities);
    this.preferencesController.setSelectedAddress(address);
  }

  /**
   * Gets the mnemonic of the user's primary keyring.
   */
  getPrimaryKeyringMnemonic() {
    const [keyring] = this.keyringController.getKeyringsByType(_keyring.KeyringType.hdKeyTree);
    if (!keyring.mnemonic) {
      throw new Error('Primary keyring mnemonic unavailable.');
    }
    return keyring.mnemonic;
  }

  //
  // Hardware
  //

  async getKeyringForDevice(deviceName, hdPath = null) {
    var _this$opts$overrides2, _keyringOverrides$tre, _keyringOverrides$led, _keyringOverrides$lat;
    const keyringOverrides = (_this$opts$overrides2 = this.opts.overrides) === null || _this$opts$overrides2 === void 0 ? void 0 : _this$opts$overrides2.keyrings;
    let keyringName = null;
    if (deviceName !== _hardwareWallets.HardwareDeviceNames.QR && !this.canUseHardwareWallets()) {
      throw new Error('Hardware wallets are not supported on this version.');
    }
    switch (deviceName) {
      case _hardwareWallets.HardwareDeviceNames.trezor:
        keyringName = (keyringOverrides === null || keyringOverrides === void 0 ? void 0 : (_keyringOverrides$tre = keyringOverrides.trezor) === null || _keyringOverrides$tre === void 0 ? void 0 : _keyringOverrides$tre.type) || _ethTrezorKeyring.default.type;
        break;
      case _hardwareWallets.HardwareDeviceNames.ledger:
        keyringName = (keyringOverrides === null || keyringOverrides === void 0 ? void 0 : (_keyringOverrides$led = keyringOverrides.ledger) === null || _keyringOverrides$led === void 0 ? void 0 : _keyringOverrides$led.type) || _ethLedgerBridgeKeyring.default.type;
        break;
      case _hardwareWallets.HardwareDeviceNames.qr:
        keyringName = _metamaskAirgappedKeyring.MetaMaskKeyring.type;
        break;
      case _hardwareWallets.HardwareDeviceNames.lattice:
        keyringName = (keyringOverrides === null || keyringOverrides === void 0 ? void 0 : (_keyringOverrides$lat = keyringOverrides.lattice) === null || _keyringOverrides$lat === void 0 ? void 0 : _keyringOverrides$lat.type) || _ethLatticeKeyring.default.type;
        break;
      default:
        throw new Error('MetamaskController:getKeyringForDevice - Unknown device');
    }
    let [keyring] = await this.keyringController.getKeyringsByType(keyringName);
    if (!keyring) {
      keyring = await this.keyringController.addNewKeyring(keyringName);
    }
    if (hdPath && keyring.setHdPath) {
      keyring.setHdPath(hdPath);
    }
    if (deviceName === _hardwareWallets.HardwareDeviceNames.lattice) {
      keyring.appName = 'MetaMask';
    }
    if (deviceName === _hardwareWallets.HardwareDeviceNames.trezor) {
      const model = keyring.getModel();
      this.appStateController.setTrezorModel(model);
    }
    keyring.network = this.networkController.state.providerConfig.type;
    return keyring;
  }
  async attemptLedgerTransportCreation() {
    const keyring = await this.getKeyringForDevice(_hardwareWallets.HardwareDeviceNames.ledger);
    return await keyring.attemptMakeApp();
  }
  async establishLedgerTransportPreference() {
    const transportPreference = this.preferencesController.getLedgerTransportPreference();
    return await this.setLedgerTransportPreference(transportPreference);
  }

  /**
   * Fetch account list from a trezor device.
   *
   * @param deviceName
   * @param page
   * @param hdPath
   * @returns [] accounts
   */
  async connectHardware(deviceName, page, hdPath) {
    const keyring = await this.getKeyringForDevice(deviceName, hdPath);
    let accounts = [];
    switch (page) {
      case -1:
        accounts = await keyring.getPreviousPage();
        break;
      case 1:
        accounts = await keyring.getNextPage();
        break;
      default:
        accounts = await keyring.getFirstPage();
    }

    // Merge with existing accounts
    // and make sure addresses are not repeated
    const oldAccounts = await this.keyringController.getAccounts();
    const accountsToTrack = [...new Set(oldAccounts.concat(accounts.map(a => a.address.toLowerCase())))];
    this.accountTracker.syncWithAddresses(accountsToTrack);
    return accounts;
  }

  /**
   * Check if the device is unlocked
   *
   * @param deviceName
   * @param hdPath
   * @returns {Promise<boolean>}
   */
  async checkHardwareStatus(deviceName, hdPath) {
    const keyring = await this.getKeyringForDevice(deviceName, hdPath);
    return keyring.isUnlocked();
  }

  /**
   * Clear
   *
   * @param deviceName
   * @returns {Promise<boolean>}
   */
  async forgetDevice(deviceName) {
    const keyring = await this.getKeyringForDevice(deviceName);
    keyring.forgetDevice();
    return true;
  }

  /**
   * Retrieves the keyring for the selected address and using the .type returns
   * a subtype for the account. Either 'hardware', 'imported' or 'MetaMask'.
   *
   * @param {string} address - Address to retrieve keyring for
   * @returns {'hardware' | 'imported' | 'MetaMask'}
   */
  async getAccountType(address) {
    const keyring = await this.keyringController.getKeyringForAccount(address);
    switch (keyring.type) {
      case _keyring.KeyringType.trezor:
      case _keyring.KeyringType.lattice:
      case _keyring.KeyringType.qr:
      case _keyring.KeyringType.ledger:
        return 'hardware';
      case _keyring.KeyringType.imported:
        return 'imported';
      default:
        return 'MetaMask';
    }
  }

  /**
   * Retrieves the keyring for the selected address and using the .type
   * determines if a more specific name for the device is available. Returns
   * 'N/A' for non hardware wallets.
   *
   * @param {string} address - Address to retrieve keyring for
   * @returns {'ledger' | 'lattice' | 'N/A' | string}
   */
  async getDeviceModel(address) {
    const keyring = await this.keyringController.getKeyringForAccount(address);
    switch (keyring.type) {
      case _keyring.KeyringType.trezor:
        return keyring.getModel();
      case _keyring.KeyringType.qr:
        return keyring.getName();
      case _keyring.KeyringType.ledger:
        // TODO: get model after ledger keyring exposes method
        return _hardwareWallets.HardwareDeviceNames.ledger;
      case _keyring.KeyringType.lattice:
        // TODO: get model after lattice keyring exposes method
        return _hardwareWallets.HardwareDeviceNames.lattice;
      default:
        return 'N/A';
    }
  }

  /**
   * get hardware account label
   *
   * @returns string label
   */

  getAccountLabel(name, index, hdPathDescription) {
    return `${name[0].toUpperCase()}${name.slice(1)} ${parseInt(index, 10) + 1} ${hdPathDescription || ''}`.trim();
  }

  /**
   * Imports an account from a Trezor or Ledger device.
   *
   * @param index
   * @param deviceName
   * @param hdPath
   * @param hdPathDescription
   * @returns {} keyState
   */
  async unlockHardwareWalletAccount(index, deviceName, hdPath, hdPathDescription) {
    const keyring = await this.getKeyringForDevice(deviceName, hdPath);
    keyring.setAccountToUnlock(index);
    const oldAccounts = await this.keyringController.getAccounts();
    const keyState = await this.keyringController.addNewAccount(keyring);
    const newAccounts = await this.keyringController.getAccounts();
    this.preferencesController.setAddresses(newAccounts);
    newAccounts.forEach(address => {
      if (!oldAccounts.includes(address)) {
        const label = this.getAccountLabel(deviceName === _hardwareWallets.HardwareDeviceNames.qr ? keyring.getName() : deviceName, index, hdPathDescription);
        // Set the account label to Trezor 1 /  Ledger 1 / QR Hardware 1, etc
        this.preferencesController.setAccountLabel(address, label);
        // Select the account
        this.preferencesController.setSelectedAddress(address);
      }
    });
    const {
      identities
    } = this.preferencesController.store.getState();
    return {
      ...keyState,
      identities
    };
  }

  //
  // Account Management
  //

  /**
   * Adds a new account to the default (first) HD seed phrase Keyring.
   *
   * @param accountCount
   * @returns {} keyState
   */
  async addNewAccount(accountCount) {
    const isActionMetricsQueueE2ETest = this.appStateController.store.getState()[_testFlags.ACTION_QUEUE_METRICS_E2E_TEST];
    if (false && isActionMetricsQueueE2ETest) {
      await new Promise(resolve => setTimeout(resolve, 5_000));
    }
    const [primaryKeyring] = this.keyringController.getKeyringsByType(_keyring.KeyringType.hdKeyTree);
    if (!primaryKeyring) {
      throw new Error('MetamaskController - No HD Key Tree found');
    }
    const {
      keyringController
    } = this;
    const {
      identities: oldIdentities
    } = this.preferencesController.store.getState();
    if (Object.keys(oldIdentities).length === accountCount) {
      const oldAccounts = await keyringController.getAccounts();
      const keyState = await keyringController.addNewAccount(primaryKeyring);
      const newAccounts = await keyringController.getAccounts();
      await this.verifySeedPhrase();
      this.preferencesController.setAddresses(newAccounts);
      newAccounts.forEach(address => {
        if (!oldAccounts.includes(address)) {
          this.preferencesController.setSelectedAddress(address);
        }
      });
      const {
        identities
      } = this.preferencesController.store.getState();
      return {
        ...keyState,
        identities
      };
    }
    return {
      ...keyringController.memStore.getState(),
      identities: oldIdentities
    };
  }

  /**
   * Verifies the validity of the current vault's seed phrase.
   *
   * Validity: seed phrase restores the accounts belonging to the current vault.
   *
   * Called when the first account is created and on unlocking the vault.
   *
   * @returns {Promise<number[]>} The seed phrase to be confirmed by the user,
   * encoded as an array of UTF-8 bytes.
   */
  async verifySeedPhrase() {
    const [primaryKeyring] = this.keyringController.getKeyringsByType(_keyring.KeyringType.hdKeyTree);
    if (!primaryKeyring) {
      throw new Error('MetamaskController - No HD Key Tree found');
    }
    const serialized = await primaryKeyring.serialize();
    const seedPhraseAsBuffer = Buffer.from(serialized.mnemonic);
    const accounts = await primaryKeyring.getAccounts();
    if (accounts.length < 1) {
      throw new Error('MetamaskController - No accounts found');
    }
    try {
      await _seedPhraseVerifier.default.verifyAccounts(accounts, seedPhraseAsBuffer);
      return Array.from(seedPhraseAsBuffer.values());
    } catch (err) {
      _loglevel.default.error(err.message);
      throw err;
    }
  }

  /**
   * Clears the transaction history, to allow users to force-reset their nonces.
   * Mostly used in development environments, when networks are restarted with
   * the same network ID.
   *
   * @returns {Promise<string>} The current selected address.
   */
  async resetAccount() {
    const selectedAddress = this.preferencesController.getSelectedAddress();
    this.txController.wipeTransactions(selectedAddress);
    this.networkController.resetConnection();
    return selectedAddress;
  }

  /**
   * Gets the permitted accounts for the specified origin. Returns an empty
   * array if no accounts are permitted.
   *
   * @param {string} origin - The origin whose exposed accounts to retrieve.
   * @param {boolean} [suppressUnauthorizedError] - Suppresses the unauthorized error.
   * @returns {Promise<string[]>} The origin's permitted accounts, or an empty
   * array.
   */
  async getPermittedAccounts(origin, {
    suppressUnauthorizedError = true
  } = {}) {
    try {
      return await this.permissionController.executeRestrictedMethod(origin, _permissions.RestrictedMethods.eth_accounts);
    } catch (error) {
      if (suppressUnauthorizedError && error.code === _ethRpcErrors.errorCodes.provider.unauthorized) {
        return [];
      }
      throw error;
    }
  }

  /**
   * Stops exposing the account with the specified address to all third parties.
   * Exposed accounts are stored in caveats of the eth_accounts permission. This
   * method uses `PermissionController.updatePermissionsByCaveat` to
   * remove the specified address from every eth_accounts permission. If a
   * permission only included this address, the permission is revoked entirely.
   *
   * @param {string} targetAccount - The address of the account to stop exposing
   * to third parties.
   */
  removeAllAccountPermissions(targetAccount) {
    this.permissionController.updatePermissionsByCaveat(_permissions.CaveatTypes.restrictReturnedAccounts, existingAccounts => _permissions2.CaveatMutatorFactories[_permissions.CaveatTypes.restrictReturnedAccounts].removeAccount(targetAccount, existingAccounts));
  }

  /**
   * Removes an account from state / storage.
   *
   * @param {string[]} address - A hex address
   */
  async removeAccount(address) {
    // Remove all associated permissions
    this.removeAllAccountPermissions(address);
    // Remove account from the preferences controller
    this.preferencesController.removeAddress(address);
    // Remove account from the account tracker controller
    this.accountTracker.removeAccount([address]);
    const keyring = await this.keyringController.getKeyringForAccount(address);
    // Remove account from the keyring
    await this.keyringController.removeAccount(address);
    const updatedKeyringAccounts = keyring ? await keyring.getAccounts() : {};
    if ((updatedKeyringAccounts === null || updatedKeyringAccounts === void 0 ? void 0 : updatedKeyringAccounts.length) === 0) {
      var _keyring$destroy;
      (_keyring$destroy = keyring.destroy) === null || _keyring$destroy === void 0 ? void 0 : _keyring$destroy.call(keyring);
    }
    return address;
  }

  /**
   * Imports an account with the specified import strategy.
   * These are defined in app/scripts/account-import-strategies
   * Each strategy represents a different way of serializing an Ethereum key pair.
   *
   * @param {string} strategy - A unique identifier for an account import strategy.
   * @param {any} args - The data required by that strategy to import an account.
   */
  async importAccountWithStrategy(strategy, args) {
    const privateKey = await _accountImportStrategies.default.importAccount(strategy, args);
    const keyring = await this.keyringController.addNewKeyring(_keyring.KeyringType.imported, [privateKey]);
    const [firstAccount] = await keyring.getAccounts();
    // update accounts in preferences controller
    const allAccounts = await this.keyringController.getAccounts();
    this.preferencesController.setAddresses(allAccounts);
    // set new account as selected
    this.preferencesController.setSelectedAddress(firstAccount);
  }

  // ---------------------------------------------------------------------------
  // Identity Management (signature operations)

  /**
   * Called when a Dapp suggests a new tx to be signed.
   * this wrapper needs to exist so we can provide a reference to
   *  "newUnapprovedTransaction" before "txController" is instantiated
   *
   * @param {object} txParams - The transaction parameters.
   * @param {object} [req] - The original request, containing the origin.
   */
  async newUnapprovedTransaction(txParams, req) {
    return await this.txController.newUnapprovedTransaction(txParams, req);
  }

  /**
   * @returns {boolean} true if the keyring type supports EIP-1559
   */
  async getCurrentAccountEIP1559Compatibility() {
    return true;
  }

  //=============================================================================
  // END (VAULT / KEYRING RELATED METHODS)
  //=============================================================================

  /**
   * Allows a user to attempt to cancel a previously submitted transaction
   * by creating a new transaction.
   *
   * @param {number} originalTxId - the id of the txMeta that you want to
   *  attempt to cancel
   * @param {__import__(
   *  './controllers/transactions'
   * ).CustomGasSettings} [customGasSettings] - overrides to use for gas params
   *  instead of allowing this method to generate them
   * @param options
   * @returns {object} MetaMask state
   */
  async createCancelTransaction(originalTxId, customGasSettings, options) {
    await this.txController.createCancelTransaction(originalTxId, customGasSettings, options);
    const state = this.getState();
    return state;
  }

  /**
   * Allows a user to attempt to speed up a previously submitted transaction
   * by creating a new transaction.
   *
   * @param {number} originalTxId - the id of the txMeta that you want to
   *  attempt to speed up
   * @param {__import__(
   *  './controllers/transactions'
   * ).CustomGasSettings} [customGasSettings] - overrides to use for gas params
   *  instead of allowing this method to generate them
   * @param options
   * @returns {object} MetaMask state
   */
  async createSpeedUpTransaction(originalTxId, customGasSettings, options) {
    await this.txController.createSpeedUpTransaction(originalTxId, customGasSettings, options);
    const state = this.getState();
    return state;
  }
  estimateGas(estimateGasParams) {
    return new Promise((resolve, reject) => {
      return this.txController.txGasUtil.query.estimateGas(estimateGasParams, (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res.toString(16));
      });
    });
  }
  //=============================================================================
  // PASSWORD MANAGEMENT
  //=============================================================================
  /**
   * Allows a user to begin the seed phrase recovery process.
   */
  markPasswordForgotten() {
    this.preferencesController.setPasswordForgotten(true);
    this.sendUpdate();
  }

  /**
   * Allows a user to end the seed phrase recovery process.
   */
  unMarkPasswordForgotten() {
    this.preferencesController.setPasswordForgotten(false);
    this.sendUpdate();
  }

  //=============================================================================
  // SETUP
  //=============================================================================

  /**
   * A runtime.MessageSender object, as provided by the browser:
   *
   * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/MessageSender
   * @typedef {object} MessageSender
   * @property {string} - The URL of the page or frame hosting the script that sent the message.
   */

  /**
   * A Snap sender object.
   *
   * @typedef {object} SnapSender
   * @property {string} snapId - The ID of the snap.
   */

  /**
   * Used to create a multiplexed stream for connecting to an untrusted context
   * like a Dapp or other extension.
   *
   * @param options - Options bag.
   * @param {ReadableStream} options.connectionStream - The Duplex stream to connect to.
   * @param {MessageSender | SnapSender} options.sender - The sender of the messages on this stream.
   * @param {string} [options.subjectType] - The type of the sender, i.e. subject.
   */
  setupUntrustedCommunication({
    connectionStream,
    sender,
    subjectType
  }) {
    const {
      usePhishDetect
    } = this.preferencesController.store.getState();
    let _subjectType;
    if (subjectType) {
      _subjectType = subjectType;
    } else if (sender.id && sender.id !== this.extension.runtime.id) {
      _subjectType = _subjectMetadataController.SubjectType.Extension;
    } else {
      _subjectType = _subjectMetadataController.SubjectType.Website;
    }
    if (sender.url) {
      const {
        hostname
      } = new URL(sender.url);
      this.phishingController.maybeUpdateState();
      // Check if new connection is blocked if phishing detection is on
      const phishingTestResponse = this.phishingController.test(hostname);
      if (usePhishDetect && phishingTestResponse !== null && phishingTestResponse !== void 0 && phishingTestResponse.result) {
        this.sendPhishingWarning(connectionStream, hostname);
        this.metaMetricsController.trackEvent({
          event: _metametrics.MetaMetricsEventName.PhishingPageDisplayed,
          category: _metametrics.MetaMetricsEventCategory.Phishing,
          properties: {
            url: hostname
          }
        });
        return;
      }
    }

    // setup multiplexing
    const mux = (0, _streamUtils.setupMultiplex)(connectionStream);

    // messages between inpage and background
    this.setupProviderConnection(mux.createStream('metamask-provider'), sender, _subjectType);

    // TODO:LegacyProvider: Delete
    if (sender.url) {
      // legacy streams
      this.setupPublicConfig(mux.createStream('publicConfig'));
    }
  }

  /**
   * Used to create a multiplexed stream for connecting to a trusted context,
   * like our own user interfaces, which have the provider APIs, but also
   * receive the exported API from this controller, which includes trusted
   * functions, like the ability to approve transactions or sign messages.
   *
   * @param {*} connectionStream - The duplex stream to connect to.
   * @param {MessageSender} sender - The sender of the messages on this stream
   */
  setupTrustedCommunication(connectionStream, sender) {
    // setup multiplexing
    const mux = (0, _streamUtils.setupMultiplex)(connectionStream);
    // connect features
    this.setupControllerConnection(mux.createStream('controller'));
    this.setupProviderConnection(mux.createStream('provider'), sender, _subjectMetadataController.SubjectType.Internal);
  }

  /**
   * Used to create a multiplexed stream for connecting to the phishing warning page.
   *
   * @param options - Options bag.
   * @param {ReadableStream} options.connectionStream - The Duplex stream to connect to.
   */
  setupPhishingCommunication({
    connectionStream
  }) {
    const {
      usePhishDetect
    } = this.preferencesController.store.getState();
    if (!usePhishDetect) {
      return;
    }

    // setup multiplexing
    const mux = (0, _streamUtils.setupMultiplex)(connectionStream);
    const phishingStream = mux.createStream(PHISHING_SAFELIST);

    // set up postStream transport
    phishingStream.on('data', (0, _createMetaRPCHandler.default)({
      safelistPhishingDomain: this.safelistPhishingDomain.bind(this),
      backToSafetyPhishingWarning: this.backToSafetyPhishingWarning.bind(this)
    }, phishingStream));
  }

  /**
   * Called when we detect a suspicious domain. Requests the browser redirects
   * to our anti-phishing page.
   *
   * @private
   * @param {*} connectionStream - The duplex stream to the per-page script,
   * for sending the reload attempt to.
   * @param {string} hostname - The hostname that triggered the suspicion.
   */
  sendPhishingWarning(connectionStream, hostname) {
    const mux = (0, _streamUtils.setupMultiplex)(connectionStream);
    const phishingStream = mux.createStream('phishing');
    phishingStream.write({
      hostname
    });
  }

  /**
   * A method for providing our API over a stream using JSON-RPC.
   *
   * @param {*} outStream - The stream to provide our API over.
   */
  setupControllerConnection(outStream) {
    const api = this.getApi();

    // report new active controller connection
    this.activeControllerConnections += 1;
    this.emit('controllerConnectionChanged', this.activeControllerConnections);

    // set up postStream transport
    outStream.on('data', (0, _createMetaRPCHandler.default)(api, outStream, this.store, this.localStoreApiWrapper));
    const handleUpdate = update => {
      if (outStream._writableState.ended) {
        return;
      }
      // send notification to client-side
      outStream.write({
        jsonrpc: '2.0',
        method: 'sendUpdate',
        params: [update]
      });
    };
    this.on('update', handleUpdate);
    const startUISync = () => {
      if (outStream._writableState.ended) {
        return;
      }
      // send notification to client-side
      outStream.write({
        jsonrpc: '2.0',
        method: 'startUISync'
      });
    };
    if (this.startUISync) {
      startUISync();
    } else {
      this.once('startUISync', startUISync);
    }
    outStream.on('end', () => {
      this.activeControllerConnections -= 1;
      this.emit('controllerConnectionChanged', this.activeControllerConnections);
      this.removeListener('update', handleUpdate);
    });
  }

  /**
   * A method for serving our ethereum provider over a given stream.
   *
   * @param {*} outStream - The stream to provide over.
   * @param {MessageSender | SnapSender} sender - The sender of the messages on this stream
   * @param {SubjectType} subjectType - The type of the sender, i.e. subject.
   */
  setupProviderConnection(outStream, sender, subjectType) {
    let origin;
    if (subjectType === _subjectMetadataController.SubjectType.Internal) {
      origin = _app.ORIGIN_METAMASK;
    } else {
      origin = new URL(sender.url).origin;
    }
    if (sender.id && sender.id !== this.extension.runtime.id) {
      this.subjectMetadataController.addSubjectMetadata({
        origin,
        extensionId: sender.id,
        subjectType: _subjectMetadataController.SubjectType.Extension
      });
    }
    let tabId;
    if (sender.tab && sender.tab.id) {
      tabId = sender.tab.id;
    }
    const engine = this.setupProviderEngine({
      origin,
      sender,
      subjectType,
      tabId
    });

    // setup connection
    const providerStream = (0, _jsonRpcMiddlewareStream.createEngineStream)({
      engine
    });
    const connectionId = this.addConnection(origin, {
      engine
    });
    (0, _pump.default)(outStream, providerStream, outStream, err => {
      // handle any middleware cleanup
      engine._middleware.forEach(mid => {
        if (mid.destroy && typeof mid.destroy === 'function') {
          mid.destroy();
        }
      });
      connectionId && this.removeConnection(origin, connectionId);
      if (err) {
        _loglevel.default.error(err);
      }
    });
  }

  /**
   * A method for creating a provider that is safely restricted for the requesting subject.
   *
   * @param {object} options - Provider engine options
   * @param {string} options.origin - The origin of the sender
   * @param {MessageSender | SnapSender} options.sender - The sender object.
   * @param {string} options.subjectType - The type of the sender subject.
   * @param {tabId} [options.tabId] - The tab ID of the sender - if the sender is within a tab
   */
  setupProviderEngine({
    origin,
    subjectType,
    sender,
    tabId
  }) {
    // setup json rpc engine stack
    const engine = new _jsonRpcEngine.JsonRpcEngine();
    const {
      blockTracker,
      provider
    } = this;

    // create filter polyfill middleware
    const filterMiddleware = (0, _ethJsonRpcFilters.default)({
      provider,
      blockTracker
    });

    // create subscription polyfill middleware
    const subscriptionManager = (0, _subscriptionManager.default)({
      provider,
      blockTracker
    });
    subscriptionManager.events.on('notification', message => engine.emit('notification', message));
    if (_mv.isManifestV3) {
      engine.push((0, _createDupeReqFilterMiddleware.default)());
    }

    // append origin to each request
    engine.push((0, _createOriginMiddleware.default)({
      origin
    }));

    // append tabId to each request if it exists
    if (tabId) {
      engine.push((0, _createTabIdMiddleware.default)({
        tabId
      }));
    }

    // logging
    engine.push((0, _createLoggerMiddleware.default)({
      origin
    }));
    engine.push(this.permissionLogController.createMiddleware());
    engine.push((0, _createRPCMethodTrackingMiddleware.default)({
      trackEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController),
      getMetricsState: this.metaMetricsController.store.getState.bind(this.metaMetricsController.store),
      securityProviderRequest: this.securityProviderRequest.bind(this)
    }));

    // onboarding
    if (subjectType === _subjectMetadataController.SubjectType.Website) {
      engine.push((0, _createOnboardingMiddleware.default)({
        location: sender.url,
        registerOnboarding: this.onboardingController.registerOnboarding
      }));
    }

    // Unrestricted/permissionless RPC method implementations
    engine.push((0, _rpcMethodMiddleware.createMethodMiddleware)({
      origin,
      subjectType,
      // Miscellaneous
      addSubjectMetadata: this.subjectMetadataController.addSubjectMetadata.bind(this.subjectMetadataController),
      getProviderState: this.getProviderState.bind(this),
      getUnlockPromise: this.appStateController.getUnlockPromise.bind(this.appStateController),
      handleWatchAssetRequest: this.handleWatchAssetRequest.bind(this),
      requestUserApproval: this.approvalController.addAndShowApprovalRequest.bind(this.approvalController),
      startApprovalFlow: this.approvalController.startFlow.bind(this.approvalController),
      endApprovalFlow: this.approvalController.endFlow.bind(this.approvalController),
      setApprovalFlowLoadingText: this.approvalController.setFlowLoadingText.bind(this.approvalController),
      showApprovalSuccess: this.approvalController.success.bind(this.approvalController),
      showApprovalError: this.approvalController.error.bind(this.approvalController),
      sendMetrics: this.metaMetricsController.trackEvent.bind(this.metaMetricsController),
      // Permission-related
      getAccounts: this.getPermittedAccounts.bind(this, origin),
      getPermissionsForOrigin: this.permissionController.getPermissions.bind(this.permissionController, origin),
      hasPermission: this.permissionController.hasPermission.bind(this.permissionController, origin),
      requestAccountsPermission: this.permissionController.requestPermissions.bind(this.permissionController, {
        origin
      }, {
        eth_accounts: {}
      }),
      requestPermissionsForOrigin: this.permissionController.requestPermissions.bind(this.permissionController, {
        origin
      }),
      getCurrentChainId: () => this.networkController.state.providerConfig.chainId,
      getCurrentRpcUrl: () => this.networkController.state.providerConfig.rpcUrl,
      // network configuration-related
      getNetworkConfigurations: () => this.networkController.state.networkConfigurations,
      upsertNetworkConfiguration: this.networkController.upsertNetworkConfiguration.bind(this.networkController),
      setActiveNetwork: this.networkController.setActiveNetwork.bind(this.networkController),
      findNetworkConfigurationBy: this.findNetworkConfigurationBy.bind(this),
      setProviderType: this.networkController.setProviderType.bind(this.networkController),
      // Web3 shim-related
      getWeb3ShimUsageState: this.alertController.getWeb3ShimUsageState.bind(this.alertController),
      setWeb3ShimUsageRecorded: this.alertController.setWeb3ShimUsageRecorded.bind(this.alertController)
    }));

    // filter and subscription polyfills
    engine.push(filterMiddleware);
    engine.push(subscriptionManager.middleware);
    if (subjectType !== _subjectMetadataController.SubjectType.Internal) {
      // permissions
      engine.push(this.permissionController.createPermissionMiddleware({
        origin
      }));
    }
    engine.push(this.metamaskMiddleware);

    // forward to metamask primary provider
    engine.push((0, _ethJsonRpcMiddleware.providerAsMiddleware)(provider));
    return engine;
  }

  /**
   * TODO:LegacyProvider: Delete
   * A method for providing our public config info over a stream.
   * This includes info we like to be synchronous if possible, like
   * the current selected account, and network ID.
   *
   * Since synchronous methods have been deprecated in web3,
   * this is a good candidate for deprecation.
   *
   * @param {*} outStream - The stream to provide public config over.
   */
  setupPublicConfig(outStream) {
    const configStream = (0, _asStream.storeAsStream)(this.publicConfigStore);
    (0, _pump.default)(configStream, outStream, err => {
      configStream.destroy();
      if (err) {
        _loglevel.default.error(err);
      }
    });
  }

  /**
   * Adds a reference to a connection by origin. Ignores the 'metamask' origin.
   * Caller must ensure that the returned id is stored such that the reference
   * can be deleted later.
   *
   * @param {string} origin - The connection's origin string.
   * @param {object} options - Data associated with the connection
   * @param {object} options.engine - The connection's JSON Rpc Engine
   * @returns {string} The connection's id (so that it can be deleted later)
   */
  addConnection(origin, {
    engine
  }) {
    if (origin === _app.ORIGIN_METAMASK) {
      return null;
    }
    if (!this.connections[origin]) {
      this.connections[origin] = {};
    }
    const id = (0, _nanoid.default)();
    this.connections[origin][id] = {
      engine
    };
    return id;
  }

  /**
   * Deletes a reference to a connection, by origin and id.
   * Ignores unknown origins.
   *
   * @param {string} origin - The connection's origin string.
   * @param {string} id - The connection's id, as returned from addConnection.
   */
  removeConnection(origin, id) {
    const connections = this.connections[origin];
    if (!connections) {
      return;
    }
    delete connections[id];
    if (Object.keys(connections).length === 0) {
      delete this.connections[origin];
    }
  }

  /**
   * Closes all connections for the given origin, and removes the references
   * to them.
   * Ignores unknown origins.
   *
   * @param {string} origin - The origin string.
   */
  removeAllConnections(origin) {
    const connections = this.connections[origin];
    if (!connections) {
      return;
    }
    Object.keys(connections).forEach(id => {
      this.removeConnection(origin, id);
    });
  }

  /**
   * Causes the RPC engines associated with the connections to the given origin
   * to emit a notification event with the given payload.
   *
   * The caller is responsible for ensuring that only permitted notifications
   * are sent.
   *
   * Ignores unknown origins.
   *
   * @param {string} origin - The connection's origin string.
   * @param {unknown} payload - The event payload.
   */
  notifyConnections(origin, payload) {
    const connections = this.connections[origin];
    if (connections) {
      Object.values(connections).forEach(conn => {
        if (conn.engine) {
          conn.engine.emit('notification', payload);
        }
      });
    }
  }

  /**
   * Causes the RPC engines associated with all connections to emit a
   * notification event with the given payload.
   *
   * If the "payload" parameter is a function, the payload for each connection
   * will be the return value of that function called with the connection's
   * origin.
   *
   * The caller is responsible for ensuring that only permitted notifications
   * are sent.
   *
   * @param {unknown} payload - The event payload, or payload getter function.
   */
  notifyAllConnections(payload) {
    const getPayload = typeof payload === 'function' ? origin => payload(origin) : () => payload;
    Object.keys(this.connections).forEach(origin => {
      Object.values(this.connections[origin]).forEach(async conn => {
        if (conn.engine) {
          conn.engine.emit('notification', await getPayload(origin));
        }
      });
    });
  }

  // handlers

  /**
   * Handle a KeyringController update
   *
   * @param {object} state - the KC state
   * @returns {Promise<void>}
   * @private
   */
  async _onKeyringControllerUpdate(state) {
    const {
      keyrings,
      encryptionKey: loginToken,
      encryptionSalt: loginSalt
    } = state;
    const addresses = keyrings.reduce((acc, {
      accounts
    }) => acc.concat(accounts), []);
    if (_mv.isManifestV3) {
      await this.extension.storage.session.set({
        loginToken,
        loginSalt
      });
    }
    if (!addresses.length) {
      return;
    }

    // Ensure preferences + identities controller know about all addresses
    this.preferencesController.syncAddresses(addresses);
    this.accountTracker.syncWithAddresses(addresses);
  }

  /**
   * Handle global application unlock.
   * Notifies all connections that the extension is unlocked, and which
   * account(s) are currently accessible, if any.
   */
  _onUnlock() {
    this.notifyAllConnections(async origin => {
      return {
        method: _permissions2.NOTIFICATION_NAMES.unlockStateChanged,
        params: {
          isUnlocked: true,
          accounts: await this.getPermittedAccounts(origin)
        }
      };
    });
    this.unMarkPasswordForgotten();

    // In the current implementation, this handler is triggered by a
    // KeyringController event. Other controllers subscribe to the 'unlock'
    // event of the MetaMaskController itself.
    this.emit('unlock');
  }

  /**
   * Handle global application lock.
   * Notifies all connections that the extension is locked.
   */
  _onLock() {
    this.notifyAllConnections({
      method: _permissions2.NOTIFICATION_NAMES.unlockStateChanged,
      params: {
        isUnlocked: false
      }
    });

    // In the current implementation, this handler is triggered by a
    // KeyringController event. Other controllers subscribe to the 'lock'
    // event of the MetaMaskController itself.
    this.emit('lock');
  }

  /**
   * Handle memory state updates.
   * - Ensure isClientOpenAndUnlocked is updated
   * - Notifies all connections with the new provider network state
   *   - The external providers handle diffing the state
   *
   * @param newState
   */
  _onStateUpdate(newState) {
    this.isClientOpenAndUnlocked = newState.isUnlocked && this._isClientOpen;
    this.notifyAllConnections({
      method: _permissions2.NOTIFICATION_NAMES.chainChanged,
      params: this.getProviderNetworkState(newState)
    });
  }

  // misc

  /**
   * A method for emitting the full MetaMask state to all registered listeners.
   *
   * @private
   */
  privateSendUpdate() {
    this.emit('update', this.getState());
  }

  /**
   * @returns {boolean} Whether the extension is unlocked.
   */
  isUnlocked() {
    return this.keyringController.memStore.getState().isUnlocked;
  }

  //=============================================================================
  // MISCELLANEOUS
  //=============================================================================

  getExternalPendingTransactions(address) {
    return this.smartTransactionsController.getTransactions({
      addressFrom: address,
      status: 'pending'
    });
  }

  /**
   * Returns the nonce that will be associated with a transaction once approved
   *
   * @param {string} address - The hex string address for the transaction
   * @returns {Promise<number>}
   */
  async getPendingNonce(address) {
    const {
      nonceDetails,
      releaseLock
    } = await this.txController.nonceTracker.getNonceLock(address);
    const pendingNonce = nonceDetails.params.highestSuggested;
    releaseLock();
    return pendingNonce;
  }

  /**
   * Returns the next nonce according to the nonce-tracker
   *
   * @param {string} address - The hex string address for the transaction
   * @returns {Promise<number>}
   */
  async getNextNonce(address) {
    const nonceLock = await this.txController.nonceTracker.getNonceLock(address);
    nonceLock.releaseLock();
    return nonceLock.nextNonce;
  }

  //=============================================================================
  // CONFIG
  //=============================================================================

  /**
   * Returns the first network configuration object that matches at least one field of the
   * provided search criteria. Returns null if no match is found
   *
   * @param {object} rpcInfo - The RPC endpoint properties and values to check.
   * @returns {object} rpcInfo found in the network configurations list
   */
  findNetworkConfigurationBy(rpcInfo) {
    const {
      networkConfigurations
    } = this.networkController.state;
    const networkConfiguration = Object.values(networkConfigurations).find(configuration => {
      return Object.keys(rpcInfo).some(key => {
        return configuration[key] === rpcInfo[key];
      });
    });
    return networkConfiguration || null;
  }

  /**
   * Sets the Ledger Live preference to use for Ledger hardware wallet support
   *
   * @param {string} transportType - The Ledger transport type.
   */
  async setLedgerTransportPreference(transportType) {
    if (!this.canUseHardwareWallets()) {
      return undefined;
    }
    const currentValue = this.preferencesController.getLedgerTransportPreference();
    const newValue = this.preferencesController.setLedgerTransportPreference(transportType);
    const keyring = await this.getKeyringForDevice(_hardwareWallets.HardwareDeviceNames.ledger);
    if (keyring !== null && keyring !== void 0 && keyring.updateTransportMethod) {
      return keyring.updateTransportMethod(newValue).catch(e => {
        // If there was an error updating the transport, we should
        // fall back to the original value
        this.preferencesController.setLedgerTransportPreference(currentValue);
        throw e;
      });
    }
    return undefined;
  }

  /**
   * A method for initializing storage the first time.
   *
   * @param {object} initState - The default state to initialize with.
   * @private
   */
  recordFirstTimeInfo(initState) {
    if (!('firstTimeInfo' in initState)) {
      const version = this.platform.getVersion();
      initState.firstTimeInfo = {
        version,
        date: Date.now()
      };
    }
  }

  // TODO: Replace isClientOpen methods with `controllerConnectionChanged` events.
  /* eslint-disable accessor-pairs */
  /**
   * A method for recording whether the MetaMask user interface is open or not.
   *
   * @param {boolean} open
   */
  set isClientOpen(open) {
    this._isClientOpen = open;
    this.detectTokensController.isOpen = open;
  }
  /* eslint-enable accessor-pairs */

  /**
   * A method that is called by the background when all instances of metamask are closed.
   * Currently used to stop polling in the gasFeeController.
   */
  onClientClosed() {
    try {
      this.gasFeeController.stopPolling();
      this.appStateController.clearPollingTokens();
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * A method that is called by the background when a particular environment type is closed (fullscreen, popup, notification).
   * Currently used to stop polling in the gasFeeController for only that environement type
   *
   * @param environmentType
   */
  onEnvironmentTypeClosed(environmentType) {
    const appStatePollingTokenType = _app.POLLING_TOKEN_ENVIRONMENT_TYPES[environmentType];
    const pollingTokensToDisconnect = this.appStateController.store.getState()[appStatePollingTokenType];
    pollingTokensToDisconnect.forEach(pollingToken => {
      this.gasFeeController.disconnectPoller(pollingToken);
      this.appStateController.removePollingToken(pollingToken, appStatePollingTokenType);
    });
  }

  /**
   * Adds a domain to the PhishingController safelist
   *
   * @param {string} hostname - the domain to safelist
   */
  safelistPhishingDomain(hostname) {
    return this.phishingController.bypass(hostname);
  }
  async backToSafetyPhishingWarning() {
    const extensionURL = this.platform.getExtensionURL();
    await this.platform.switchToAnotherURL(undefined, extensionURL);
  }

  /**
   * Locks MetaMask
   */
  setLocked() {
    var _ledgerKeyring$destro;
    const [trezorKeyring] = this.keyringController.getKeyringsByType(_keyring.KeyringType.trezor);
    if (trezorKeyring) {
      trezorKeyring.dispose();
    }
    const [ledgerKeyring] = this.keyringController.getKeyringsByType(_keyring.KeyringType.ledger);
    ledgerKeyring === null || ledgerKeyring === void 0 ? void 0 : (_ledgerKeyring$destro = ledgerKeyring.destroy) === null || _ledgerKeyring$destro === void 0 ? void 0 : _ledgerKeyring$destro.call(ledgerKeyring);
    if (_mv.isManifestV3) {
      this.clearLoginArtifacts();
    }
    return this.keyringController.setLocked();
  }
  async securityProviderRequest(requestData, methodName) {
    const {
      currentLocale,
      transactionSecurityCheckEnabled
    } = this.preferencesController.store.getState();
    if (transactionSecurityCheckEnabled) {
      const chainId = Number((0, _conversion.hexToDecimal)(this.networkController.state.providerConfig.chainId));
      try {
        const securityProviderResponse = await (0, _securityProviderHelpers.securityProviderCheck)(requestData, methodName, chainId, currentLocale);
        return securityProviderResponse;
      } catch (err) {
        _loglevel.default.error(err.message);
        throw err;
      }
    }
    return null;
  }
}
exports.default = MetamaskController;


}).call(this)}).call(this,require("buffer").Buffer)

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\metamask-controller.js",}],
["F:\\metamask-extension\\app\\scripts\\migrations\\002.js", {"lodash":"F:\\metamask-extension\\node_modules\\lodash\\lodash.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Cmigrations%5C002.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = require("lodash");
const version = 2;
var _default = {
  version,
  migrate(originalVersionedData) {
    const versionedData = (0, _lodash.cloneDeep)(originalVersionedData);
    versionedData.meta.version = version;
    try {
      if (versionedData.data.config.provider.type === 'etherscan') {
        versionedData.data.config.provider.type = 'rpc';
        versionedData.data.config.provider.rpcTarget = 'https://rpc.metamask.io/';
      }
    } catch (_) {
      // empty
    }
    return Promise.resolve(versionedData);
  }
};
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\migrations\\002.js",}],
["F:\\metamask-extension\\app\\scripts\\migrations\\003.js", {"lodash":"F:\\metamask-extension\\node_modules\\lodash\\lodash.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: F:%5Cmetamask-extension%5Capp%5Cscripts%5Cmigrations%5C003.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = require("lodash");
const version = 3;
const oldTestRpc = 'https://rawtestrpc.metamask.io/';
const newTestRpc = 'https://testrpc.metamask.io/';
var _default = {
  version,
  migrate(originalVersionedData) {
    const versionedData = (0, _lodash.cloneDeep)(originalVersionedData);
    versionedData.meta.version = version;
    try {
      if (versionedData.data.config.provider.rpcTarget === oldTestRpc) {
        versionedData.data.config.provider.rpcTarget = newTestRpc;
      }
    } catch (_) {
      // empty
    }
    return Promise.resolve(versionedData);
  }
};
exports.default = _default;

      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\migrations\\003.js",}]],[],{})
