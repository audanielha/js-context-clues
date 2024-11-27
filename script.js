document.addEventListener("DOMContentLoaded", function(){

    var friends = ["Daniel","Harry","Lee","Michelle","Brian"];
    var locations = ["ATown","BTown","CTown","DTown","ETown","FTown","GTown","HTown","ITown","JTown",];
    var weapons = ["WeaponA","WeaponB","WeaponC","WeaponD","WeaponE","WeaponF","WeaponG","WeaponH","WeaponI","WeaponJ","WeaponK","WeaponL","WeaponM","WeaponN","WeaponO","WeaponP","WeaponQ","WeaponR","WeaponS","WeaponT"];

    for (var i = 1; i <= 100; i++) {
        var h3 = document.createElement("h3");
        var textContent = document.createTextNode(`Accusation ${i}`);
        h3.appendChild(textContent);
        document.body.appendChild(h3);
    
        // Create a closure to capture the current value of i
        // Create a closure using an IIFE to capture the current value of i
        (function(index) {
            h3.addEventListener("click", function() {
                var friend = friends[index % friends.length];
                var location = locations[index % locations.length];
                var weapon = weapons[index % weapons.length];
                alert(`Accusation ${index}: I accuse ${friend}, with the ${weapon} in the ${location}!`);
            });
        })(i);
         // Pass the current value of i to the IIFE (Immediate Function Execution)
         
    }
    
});
