import BaseView from '../internals/BaseView';
import BaseForm from '../internals/BaseForm';
import Util from '../../../util/Util';

// for BETA,
// redirect is needed for Apple SSO Extension to intercept the request, because
// - XHR request is not interceptable
// - form post is interceptable, but some app (Outlook) closes the app after
// We may have a different approach/UX for EA
const Body = BaseForm.extend({
  noButtonBar: true,

  title: 'You are being redirected',

  initialize () {
    BaseForm.prototype.initialize.apply(this, arguments);
    document.cookie = `stateHandle=${this.options.appState.get('currentState').stateHandle};path=/`;
    Util.redirectWithFormGet(this.options.currentViewState.href);
  }
});

export default BaseView.extend({
  Body,
});
