Package.describe({
  summary: 'Common CSS styles and classes'
});



Package.on_use(function (api) {
  api.use(['css-stylus']);

  // Generated with: github.com/philcockfield/meteor-package-paths
  api.add_files('shared/_normalize/normalize.css', 'client');
  api.add_files('shared/_normalize/normalize.css', 'server', { isAsset:true });
  api.add_files('shared/classes/alerts.styl', 'client');
  api.add_files('shared/classes/alerts.styl', 'server', { isAsset:true });
  api.add_files('shared/classes/buttons.styl', 'client');
  api.add_files('shared/classes/buttons.styl', 'server', { isAsset:true });
  api.add_files('shared/classes/common.styl', 'client');
  api.add_files('shared/classes/common.styl', 'server', { isAsset:true });
  api.add_files('shared/css-mixins/alert.import.styl', 'client');
  api.add_files('shared/css-mixins/alert.import.styl', 'server', { isAsset:true });
  api.add_files('shared/css-mixins/core.import.styl', 'client');
  api.add_files('shared/css-mixins/core.import.styl', 'server', { isAsset:true });

});


