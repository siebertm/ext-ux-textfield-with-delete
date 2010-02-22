Ext.onReady(function() {
  var win = new Ext.Window({
    title: "TextfieldWithDelete Example",
    width: 500,
    height: 400,
    border: false,
    layout: "form",
    items: [{
      xtype: 'ux-textfield-with-delete',
      fieldLabel: 'Delete my value',
      value: 'by clicking the X icon',
      anchor: '95%'
    }]
  });

  win.show(null, function() {
    win.center();
  });
});
