{
    "metadata": {
        "version": 4,
        "type": "Object"
    },
    "geometries": [
        {
            "uuid": "331b5565-8938-4e6d-8b3a-8a39a46ef620",
            "type": "Geometry",
            "data": {
                "vertices": [
                    14, 0, 0,
                    7, -12.134, 0,
                    -7, -12.134, 0,
                    -14, 0, 0,
                    -7, 12.134, 0,
                    7, 12.134, 0,
                    14, 0, 3,
                    7, -12.134, 3,
                    -7, -12.134, 3,
                    -14, 0, 3,
                    -7, 12.134, 3,
                    7, 12.134, 3
                ],
                "faces": [
                    9, 0, 1, 7, 6, 0, 0, 1, 1,
                    9, 1, 2, 8, 7, 0, 0, 1, 1,
                    9, 2, 3, 9, 8, 0, 0, 1, 1,
                    9, 3, 4, 10, 9, 0, 0, 1, 1,
                    9, 4, 5, 11, 10, 0, 0, 1, 1,
                    9, 5, 0, 6, 11, 0, 0, 1, 1
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
            "uuid": "5c53adf5-161d-4478-ac6c-95f6c99bcde4",
            "url": "textures/hex-highlight.png"
        }
    ],
    "textures": [
        {
            "uuid": "812488b6-b7ae-4135-b1a6-57086eb562a9",
            "image": "5c53adf5-161d-4478-ac6c-95f6c99bcde4"
        }
    ],
    "materials": [
        {
            "uuid": "f2626f52-9611-4c83-867d-3655e5583be8",
            "type": "MeshBasicMaterial",
            "map": "812488b6-b7ae-4135-b1a6-57086eb562a9",
            "color": 16711680,
            "side": 2,
            "transparent": true,
            "opacity": 0.5
        }
    ],
    "object": {
        "name": "Hex Border",
        "type": "Mesh",
        "geometry": "331b5565-8938-4e6d-8b3a-8a39a46ef620",
        "material": "f2626f52-9611-4c83-867d-3655e5583be8",
        "matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]
    }
}