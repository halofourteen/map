var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "minecraft"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1741186516",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        },
        "attribution": null
    },
    "tilesets": [
        {
            "name": "Normal Day",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "normalday",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "minecraft",
            "last_rendertime": 1741167321,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -16,
                70,
                16
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": [
                -16,
                70,
                16
            ],
            "north_direction": 0
        },
        {
            "name": "Night",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "night",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "minecraft",
            "last_rendertime": 1741167321,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -16,
                70,
                16
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": [
                -16,
                70,
                16
            ],
            "north_direction": 0
        },
        {
            "name": "Caves",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "caves",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "minecraft",
            "last_rendertime": 1741167321,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -16,
                70,
                16
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": [
                -16,
                70,
                16
            ],
            "north_direction": 0
        },
        {
            "name": "Biome Overlay",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "biome_overlay",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "minecraft",
            "last_rendertime": 1741167321,
            "imgextension": "png",
            "isOverlay": [
                "normalday"
            ],
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -16,
                70,
                16
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "tilesets": [
                "normalday"
            ],
            "spawn": [
                -16,
                70,
                16
            ],
            "north_direction": 0
        }
    ]
};
