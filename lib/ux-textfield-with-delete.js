
Ext.namespace('Ext.ux', 'Ext.ux.form');

Ext.ux.form.TextfieldWithDelete = Ext.extend(Ext.form.TriggerField, {
  triggerClass:'x-form-clear-trigger',
  enableKeyEvents: true,


  initComponent: function() {
    this.on('keyup', this._checkTriggerDisplay, this);
    this.on('blur', this._checkTriggerDisplay, this);
    this.on('focus', this._checkTriggerDisplay, this);
  },

  setValue: function() {
    Ext.ux.form.TextfieldWithDelete.superclass.setValue.apply(this, arguments);
    this._checkTriggerDisplay();
  },

  _checkTriggerDisplay: function() {
    var val = this.getValue();
    this.trigger.setDisplayed(!!val && val.length > 0);
  },

  onTriggerClick: function() {
    this.setValue('');
  }
});

Ext.reg('ux-textfield-with-delete', Ext.ux.form.TextfieldWithDelete);

