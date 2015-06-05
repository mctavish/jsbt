{
    "metadata": {
        "version": 4,
        "type": "Object"
    },
    "geometries": [
        {
            "uuid": "2f050a40-4e34-49f3-a1f4-52b4ef9f1528",
            "type": "BufferGeometry",
            "data": {
                "attributes": {
                    "position": {
                        "itemSize": 3,
                        "type": "Float32Array",
                        "array": [
                            0, 0, 0,
                            7.5, -13, 0,
                            15, 0, 0,
                            0, 0, 0,
                            -7.5, -13, 0,
                            7.5, -13, 0,
                            0, 0, 0,
                            -15, 0, 0,
                            -7.5, -13, 0,
                            0, 0, 0,
                            -7.5, 13, 0,
                            -15, 0, 0,
                            0, 0, 0,
                            7.5, 13, 0,
                            -7.5, 13, 0,
                            0, 0, 0,
                            15, 0, 0,
                            7.5, 13, 0,

                            15, 0, 0,
                            7.5, -13, 0,
                            15, 0, -30,
                            7.5, -13, 0,
                            7.5, -13, -30,
                            15, 0, -30,

                            7.5, -13, 0,
                            -7.5, -13, 0,
                            7.5, -13, -30,
                            -7.5, -13, 0,
                            -7.5, -13, -30,
                            7.5, -13, -30,
                            
                            -7.5, -13, 0,
                            -15, 0, 0,
                            -7.5, -13, -30,
                            -15, 0, 0,
                            -15, 0, -30,
                            -7.5, -13, -30,
                            
                            -15, 0, 0,
                            -7.5, 13, 0,
                            -15, 0, -30,
                            -7.5, 13, 0,
                            -7.5, 13, -30,
                            -15, 0, -30,
                            
                            -7.5, 13, 0,
                            7.5, 13, 0,
                            -7.5, 13, -30,
                            7.5, 13, 0,
                            7.5, 13, -30,
                            -7.5, 13, -30,
                            
                            7.5, 13, 0,
                            15, 0, 0,
                            7.5, 13, -30,
                            15, 0, 0,
                            15, 0, -30,
                            7.5, 13, -30
                        ]
                    },
                    "normal": {
                        "itemSize": 3,
                        "type": "Float32Array",
                        "array": [
                            0, 0, 1,
                            0, 0, 1,
                            0, 0, 1,
                            0, 0, 1,
                            0, 0, 1,
                            0, 0, 1,
                            0, 0, 1,
                            0, 0, 1,
                            0, 0, 1,
                            0, 0, 1,
                            0, 0, 1,
                            0, 0, 1,
                            0, 0, 1,
                            0, 0, 1,
                            0, 0, 1,
                            0, 0, 1,
                            0, 0, 1,
                            0, 0, 1,

                            0.866, -0.5, 0,
                            0.866, -0.5, 0,
                            0.866, -0.5, 0,
                            0.866, -0.5, 0,
                            0.866, -0.5, 0,
                            0.866, -0.5, 0,
                            
                            0, -1, 0,
                            0, -1, 0,
                            0, -1, 0,
                            0, -1, 0,
                            0, -1, 0,
                            0, -1, 0,

                            -0.866, -0.5, 0,
                            -0.866, -0.5, 0,
                            -0.866, -0.5, 0,
                            -0.866, -0.5, 0,
                            -0.866, -0.5, 0,
                            -0.866, -0.5, 0,
                            
                            -0.866, 0.5, 0,
                            -0.866, 0.5, 0,
                            -0.866, 0.5, 0,
                            -0.866, 0.5, 0,
                            -0.866, 0.5, 0,
                            -0.866, 0.5, 0,

                            0, 1, 0,                            
                            0, 1, 0,                            
                            0, 1, 0,                            
                            0, 1, 0,                            
                            0, 1, 0,                            
                            0, 1, 0,                            

                            0.866, 0.5, 0,
                            0.866, 0.5, 0,
                            0.866, 0.5, 0,
                            0.866, 0.5, 0,
                            0.866, 0.5, 0,
                            0.866, 0.5, 0
                        ]
                    }
                }
            }
        }
    ],
    "materials": [
        {
            "uuid": "28532ed8-0fa0-4099-95f4-ef6f43a17b45",
            "type": "MeshPhongMaterial",
            "color": 6133563,
            "ambient": 6133563,
            "emissive": 0,
            "specular": 6133563,
            "shininess": 30,
            "opacity": 1,
            "transparent": false,
            "wireframe": false
        }
    ],
    "object": {
        "type": "Group",
        "matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
        "children": [
            {
                "name": "Hex Surface",
                "type": "Mesh",
                "geometry": "2f050a40-4e34-49f3-a1f4-52b4ef9f1528",
                "material": "28532ed8-0fa0-4099-95f4-ef6f43a17b45",
                "matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]
            }
        ]
    }
}