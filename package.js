Package.describe({
  summary: 'Common CSS styles and classes'
});



Package.on_use(function (api) {
  api.use(['css-stylus']);

  // Generated with: github.com/philcockfield/meteor-package-paths
  api.add_files('shared/alerts.styl', 'client');
  api.add_files('shared/alerts.styl', 'server', { isAsset:true });
  api.add_files('shared/buttons.styl', 'client');
  api.add_files('shared/buttons.styl', 'server', { isAsset:true });
  api.add_files('shared/common.styl', 'client');
  api.add_files('shared/common.styl', 'server', { isAsset:true });

});


