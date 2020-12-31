require([
      "esri/WebScene",
      "esri/views/SceneView",
      "dojo/domReady!"
    ], function(WebScene, SceneView) {

      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"fbbbaa2fbfda41b8b3f96427c3ac5c79" 
        }
      });

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
		viewingMode:'local'
      });

    });
