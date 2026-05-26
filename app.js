const filterCarseConfig = { serverId: 5376, active: true };

const filterCarseHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_5376() {
    return filterCarseConfig.active ? "OK" : "ERR";
}

console.log("Module filterCarse loaded successfully.");