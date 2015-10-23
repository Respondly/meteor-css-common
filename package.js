Package.describe({
  name: 'respondly:css-common',
  summary: 'Common CSS styles and classes',
  version: '1.0.2',
  git: 'https://github.com/Respondly/meteor-css-common.git'
});



Package.onUse(function (api) {
  // api.versionsFrom('1.0');
  api.use('coffeescript@1.0.10');
  api.use('respondly:css-stylus@1.0.3');

  // Generated with: github.com/philcockfield/meteor-package-paths
  api.addFiles('shared/_normalize/normalize.css', 'client');
  api.addAssets('shared/_normalize/normalize.css', 'server', { isAsset:true });
  api.addFiles('shared/classes/alerts.styl', 'client');
  api.addAssets('shared/classes/alerts.styl', 'server', { isAsset:true });
  api.addFiles('shared/classes/animation.styl', 'client');
  api.addAssets('shared/classes/animation.styl', 'server', { isAsset:true });
  api.addFiles('shared/classes/buttons.styl', 'client');
  api.addAssets('shared/classes/buttons.styl', 'server', { isAsset:true });
  api.addFiles('shared/classes/common-classes.styl', 'client');
  api.addAssets('shared/classes/common-classes.styl', 'server', { isAsset:true });
  api.addFiles('shared/classes/common-element.styl', 'client');
  api.addAssets('shared/classes/common-element.styl', 'server', { isAsset:true });
  api.addFiles('shared/css-mixins/alert.import.styl', 'client');
  api.addAssets('shared/css-mixins/alert.import.styl', 'server', { isAsset:true });
  api.addFiles('shared/css-mixins/animation.import.styl', 'client');
  api.addAssets('shared/css-mixins/animation.import.styl', 'server', { isAsset:true });
  api.addFiles('shared/css-mixins/core.import.styl', 'client');
  api.addAssets('shared/css-mixins/core.import.styl', 'server', { isAsset:true });
  api.addFiles('shared/css-mixins/hyperlist.import.styl', 'client');
  api.addAssets('shared/css-mixins/hyperlist.import.styl', 'server', { isAsset:true });
  api.addFiles('shared/css-mixins/list.import.styl', 'client');
  api.addAssets('shared/css-mixins/list.import.styl', 'server', { isAsset:true });
  api.addAssets('images/alert-panel-error.svg', ['client', 'server']);
  api.addAssets('images/alert-panel-info.svg', ['client', 'server']);
  api.addAssets('images/alert-panel-warn.svg', ['client', 'server']);

});

Package.onTest(function(api){
  api.use(['mike:mocha-package@0.5.7', 'coffeescript']);

  // Generated with: github.com/philcockfield/meteor-package-paths
  api.addFiles('tests/shared/sample.coffee', ['client', 'server']);

});
