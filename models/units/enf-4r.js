{
    "metadata": {
        "version": 4,
        "type": "Object"
    },
    "geometries": [
        {
            "uuid": "b57692e8-8638-4aa4-9f36-2a39d4dffd56",
            "type": "Geometry",
            "data": {
                "vertices": [
                    -0.5, -0.5, -0.5,
                    -0.5, -0.5, 0.5,
                    -0.5, 0.5, -0.5,
                    -0.5, 0.5, 0.5,
                    0.5, -0.5, -0.5,
                    0.5, -0.5, 0.5,
                    0.5, 0.5, -0.5,
                    0.5, 0.5, 0.5
                ],
                "faces": [
                    1, 0, 1, 3, 2,
                    1, 5, 4, 6, 7,
                    1, 1, 0, 4, 5,
                    1, 2, 3, 7, 6,
                    1, 0, 2, 6, 4,
                    1, 3, 1, 5, 7
                ]
            }
        }
    ],
    "materials": [
        {
            "uuid": "a6bfa405-e9bc-460f-a916-1321e4ad09d3",
            "type": "MeshPhongMaterial"
        }
    ],
    "object": {
        "name": "Unit",
        "type": "Group",
        "matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
        "children": [
            {
                "name": "Left Leg",
                "type": "Mesh",
                "geometry": "b57692e8-8638-4aa4-9f36-2a39d4dffd56",
                "material": "a6bfa405-e9bc-460f-a916-1321e4ad09d3",
                "matrix": [1,0,0,0,0,2,0,0,0,0,6,0,-2.5,0,3,1]
            },
            {
                "name": "Right Leg",
                "type": "Mesh",
                "geometry": "b57692e8-8638-4aa4-9f36-2a39d4dffd56",
                "material": "a6bfa405-e9bc-460f-a916-1321e4ad09d3",
                "matrix": [1,0,0,0,0,2,0,0,0,0,6,0,2.5,0,3,1]
            },
            {
                "name": "Left Arm",
                "type": "Mesh",
                "geometry": "b57692e8-8638-4aa4-9f36-2a39d4dffd56",
                "material": "a6bfa405-e9bc-460f-a916-1321e4ad09d3",
                "matrix": [1,0,0,0,0,6,0,0,0,0,1,0,-3.5,2.5,8.5,1]
            },
            {
                "name": "Right Arm",
                "type": "Mesh",
                "geometry": "b57692e8-8638-4aa4-9f36-2a39d4dffd56",
                "material": "a6bfa405-e9bc-460f-a916-1321e4ad09d3",
                "matrix": [1,0,0,0,0,6,0,0,0,0,1,0,3.5,2.5,8.5,1]
            },
            {
                "name": "Left Torso",
                "type": "Mesh",
                "geometry": "b57692e8-8638-4aa4-9f36-2a39d4dffd56",
                "material": "a6bfa405-e9bc-460f-a916-1321e4ad09d3",
                "matrix": [2,0,0,0,0,3,0,0,0,0,4,0,-2,0,8,1]
            },
            {
                "name": "Right Torso",
                "type": "Mesh",
                "geometry": "b57692e8-8638-4aa4-9f36-2a39d4dffd56",
                "material": "a6bfa405-e9bc-460f-a916-1321e4ad09d3",
                "matrix": [2,0,0,0,0,3,0,0,0,0,4,0,2,0,8,1]
            },
            {
                "name": "Center Torso",
                "type": "Mesh",
                "geometry": "b57692e8-8638-4aa4-9f36-2a39d4dffd56",
                "material": "a6bfa405-e9bc-460f-a916-1321e4ad09d3",
                "matrix": [2,0,0,0,0,4,0,0,0,0,4,0,0,0,8,1]
            },
            {
                "name": "Head",
                "type": "Mesh",
                "geometry": "b57692e8-8638-4aa4-9f36-2a39d4dffd56",
                "material": "a6bfa405-e9bc-460f-a916-1321e4ad09d3",
                "matrix": [4,0,0,0,0,3,0,0,0,0,2,0,0,0,11,1]
            }
        ]
    }
}