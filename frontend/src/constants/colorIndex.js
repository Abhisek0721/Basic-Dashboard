const colorsList = [
    "violet",
    "orange",
    "red",
    "blue",
    "green",
    "brown",
    "indigo",
    "purple"
]

let colorIndex = {};

colorsList.forEach((color, index)=>{
    colorIndex[index] = color;
});

export default colorIndex;