Package.describe({
  name: 'respondly:css-common',
  summary: 'Common CSS styles and classes',
  version: '1.0.1',
  git: 'https://github.com/Respondly/meteor-css-common.git'
});



Package.onUse(function (api) {
  // api.versionsFrom('1.0');
  api.use('coffeescript');
  api.use('respondly:css-stylus@1.0.3');

  // Generated with: github.com/philcockfield/meteor-package-paths
  api.addFiles('shared/_normalize/normalize.css', 'client');
  api.addFiles('shared/_normalize/normalize.css', 'server', { isAsset:true });
  api.addFiles('shared/classes/alerts.styl', 'client');
  api.addFiles('shared/classes/alerts.styl', 'server', { isAsset:true });
  api.addFiles('shared/classes/animation.styl', 'client');
  api.addFiles('shared/classes/animation.styl', 'server', { isAsset:true });
  api.addFiles('shared/classes/buttons.styl', 'client');
  api.addFiles('shared/classes/buttons.styl', 'server', { isAsset:true });
  api.addFiles('shared/classes/common-classes.styl', 'client');
  api.addFiles('shared/classes/common-classes.styl', 'server', { isAsset:true });
  api.addFiles('shared/classes/common-element.styl', 'client');
  api.addFiles('shared/classes/common-element.styl', 'server', { isAsset:true });
  api.addFiles('shared/css-mixins/alert.import.styl', 'client');
  api.addFiles('shared/css-mixins/alert.import.styl', 'server', { isAsset:true });
  api.addFiles('shared/css-mixins/animation.import.styl', 'client');
  api.addFiles('shared/css-mixins/animation.import.styl', 'server', { isAsset:true });
  api.addFiles('shared/css-mixins/core.import.styl', 'client');
  api.addFiles('shared/css-mixins/core.import.styl', 'server', { isAsset:true });

});


