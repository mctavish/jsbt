{
    "metadata": {
        "version": 4,
        "type": "Object"
    },
    "geometries": [
        {
            "uuid": "914f11a6-4b03-4274-a485-dd0ce76f286c",
            "type": "Geometry",
            "data": {
                "vertices": [
                    15, 0, 0.01,
                    7.5, -13, 0.01,
                    -7.5, -13, 0.01,
                    -15, 0, 0.01,
                    -7.5, 13, 0.01,
                    7.5, 13, 0.01,
                    14, 0, 0.01,
                    7, -12.134, 0.01,
                    -7, -12.134, 0.01,
                    -14, 0, 0.01,
                    -7, 12.134, 0.01,
                    7, 12.134, 0.01
                ],
                "faces": [
                    9, 1, 0, 6, 7, 0, 0, 1, 1,
                    9, 2, 1, 7, 8, 0, 0, 1, 1,
                    9, 3, 2, 8, 9, 0, 0, 1, 1,
                    9, 4, 3, 9, 10, 0, 0, 1, 1,
                    9, 5, 4, 10, 11, 0, 0, 1, 1,
                    9, 0, 5, 11, 6, 0, 0, 1, 1
                ],
                "uvs": [
                    [
                        0, 0,
                        1, 1
                    ]
                ]
            }
        }
    ],
    "images": [
        {
            "uuid": "9ae14152-e514-4cca-95f7-5f9bd4c42906",
            "url": "textures/hex-highlight.png"
        }
    ],
    "textures": [
        {
            "uuid": "90998c4f-933c-4352-8bfd-e5e8c3ce2c3a",
            "image": "9ae14152-e514-4cca-95f7-5f9bd4c42906"
        }
    ],
    "materials": [
        {
            "uuid": "d6e954b0-d9e7-4628-b5f2-12e31090bb24",
            "type": "MeshBasicMaterial",
            "map": "90998c4f-933c-4352-8bfd-e5e8c3ce2c3a",
            "color": 0,
            "transparent": true,
            "opacity": 0.5
        }
    ],
    "object": {
        "name": "Hex Outline",
        "type": "Mesh",
        "geometry": "914f11a6-4b03-4274-a485-dd0ce76f286c",
        "material": "d6e954b0-d9e7-4628-b5f2-12e31090bb24",
        "matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]
    }
}