Package.describe({
  summary: 'Common CSS styles and classes'
});



Package.on_use(function (api) {
  api.use(['coffeescript']);
  api.use(['css-stylus']);
  api.export('Fonts');

  // Generated with: github.com/philcockfield/meteor-package-paths
  api.add_files('shared/ns.js', ['client', 'server']);
  api.add_files('shared/_normalize/normalize.css', 'client');
  api.add_files('shared/_normalize/normalize.css', 'server', { isAsset:true });
  api.add_files('shared/classes/alerts.styl', 'client');
  api.add_files('shared/classes/alerts.styl', 'server', { isAsset:true });
  api.add_files('shared/classes/animation.styl', 'client');
  api.add_files('shared/classes/animation.styl', 'server', { isAsset:true });
  api.add_files('shared/classes/buttons.styl', 'client');
  api.add_files('shared/classes/buttons.styl', 'server', { isAsset:true });
  api.add_files('shared/classes/common-classes.styl', 'client');
  api.add_files('shared/classes/common-classes.styl', 'server', { isAsset:true });
  api.add_files('shared/classes/common-element.styl', 'client');
  api.add_files('shared/classes/common-element.styl', 'server', { isAsset:true });
  api.add_files('shared/css-mixins/alert.import.styl', 'client');
  api.add_files('shared/css-mixins/alert.import.styl', 'server', { isAsset:true });
  api.add_files('shared/css-mixins/animation.import.styl', 'client');
  api.add_files('shared/css-mixins/animation.import.styl', 'server', { isAsset:true });
  api.add_files('shared/css-mixins/core.import.styl', 'client');
  api.add_files('shared/css-mixins/core.import.styl', 'server', { isAsset:true });
  api.add_files('server/fonts.coffee', 'server');
  api.add_files('client/fonts.coffee', 'client');

});


